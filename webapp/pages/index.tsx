import { Button, Slider, TextField } from '@mui/material'
import axios from 'axios';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react';
import deepClone from '../components/DeepClone';
import EquationGrid from '../components/EquationGrid';
import { Matrix } from '../components/Matrix';
import SolutionList, { EquationSolution } from '../components/SolutionList';
const Home: NextPage = () => {
  const [dimension, setDimension] = useState<number>(3);
  const [coefficients, setCoefficients] = useState<Matrix>([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [constants, setConstants] = useState<number[]>([0, 0, 0]);
  const [solutions, setSolutions] = useState<EquationSolution[]>([]);
  const [unknownNames, setUnknownNames] = useState<string[]>(["a", "b", "c"]);

  const updateDimension = useCallback((event) => {
    const newDimension = +event.target.value;
    if (newDimension < 1) {
      setDimension(_ => 1);
    } else if (newDimension > 10) {
      setDimension(_ => 10);
    } else {
      setDimension(_ => newDimension);
    }
  }, []);

  useEffect(() => {
    setSolutions(_ => []);
  }, [dimension]);

  useEffect(() => {
    const newConstants = Array.from({ length: Math.max(dimension, 1) }, () => 0);
    setConstants(newConstants);
  }, [dimension]);

  useEffect(() => {
    const unknowns = [];
    const useSuffix = dimension > 26;
    for (let i = 0; i < dimension; i++) {
      const code = 97 + (i % 26);
      let letter = String.fromCharCode(code);
      if (useSuffix) {
        const suffix = ((97 + i) - 97) / 26;
        unknowns.push(letter + suffix);
      } else {
        unknowns.push(letter);
      }
    }
    setUnknownNames(unknowns);
  }, [dimension]);

  useEffect(() => {
    const newCoefficients = [];
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
      const newRow = Array.from({ length: Math.max(dimension, 1) }, () => 0);
      newCoefficients.push(newRow);
    }
    setCoefficients(newCoefficients);
  }, [dimension]);

  const coefficientsChange = useCallback((coord: [number, number], newValue: number) => {
    const copy = deepClone(coefficients);
    copy[coord[0]][coord[1]] = newValue;
    setCoefficients(copy);
  }, [coefficients]);

  const constantsChange = useCallback((index: number, newValue: number) => {
    const copy = deepClone(constants);
    copy[index] = newValue;
    setConstants(copy);
  }, [constants]);

  const solve = useCallback(() => {
    async function solveReq() {
      try {
        const response = await axios.post('https://sls-swin-prod-lineq-solver.azurewebsites.net/api/solver', {
          coefficients: coefficients,
          constants: constants
        }, {
          headers: {
            "Content-Type": "application/json",
            "x-functions-key": "bIN8dL3XIllsczA/GkE6/qnlG9IIbClu1RIdQOGaQVu5BQy/fgbuHw=="
          }
        });
        const solutions: EquationSolution[] = [];
        const unknowns = response.data["unknowns"];
        for (let i = 0; i < unknowns.length; i++) {
          solutions.push({
            unknown: unknownNames[i],
            value: unknowns[i]
          });
        }
        setSolutions(solutions);
      } catch (e) {
        console.error("Request failed.");
      }
    }
    solveReq();
  }, [coefficients, constants, unknownNames]);

  return (
    <div>
      <Head>
        <title>Solve linear equations</title>
        <link
          rel="canonical"
          href="https://linear-equations.com"
          key="canonical"
        />
        <meta
          name="description"
          content="Solve any system of linear equation online, free and simple."
          key="desc"
        />
      </Head>
      <h1>Solve system of equations</h1>
      <p>This tool allows you to solve any system of linear equations in the form of Ax = b.</p>
      <h2>Matrix dimension</h2>
      <TextField onFocus={event => { event.target.select(); }} sx={{ marginBottom: 2, marginRight: 2, maxWidth: 100 }} id="outlined-basic" label="Dimension" onChange={updateDimension} value={dimension} variant="outlined" type="number" />
      <h2>Equation</h2>
      <EquationGrid coefficients={coefficients} constants={constants} onCoefficientsChange={coefficientsChange} onConstantsChange={constantsChange} unknownNames={unknownNames} />
      <Button sx={{ marginTop: 2 }} variant="contained" onClick={solve}>Solve</Button>
      <h2>Solution</h2>
      <SolutionList solutions={solutions} />
    </div>
  )
}

export default Home
