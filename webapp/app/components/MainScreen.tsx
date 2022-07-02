import { useCallback, useState } from "react";
import { SudolverApi } from "../services/SolverApi";
import { BottomActionBar } from "./BottomActionBar";
import { Button } from "./Button";
import type { Coefficients } from "./CoefficientMatrix";
import { CoefficientMatrix } from "./CoefficientMatrix";
import { Explanation } from "./Explanation";
import { Footer } from "./Footer";
import { SolutionVariableList } from "./SolutionVariableList";
import { SolvingFailedText } from "./SolvingFailedText";
import { Title } from "./Title";
import { TopActionBar } from "./TopActionBar";

export const MainScreen = () => {
  const [isSolving, setIsSolving] = useState(true);
  const [solvingSucceeded, setSolvingSucceeded] = useState(true);
  const [dimension, setDimension] = useState<number>(2);
  const [coefficients, setCoefficients] = useState<Coefficients>([
    ["0", "0"],
    ["0", "0"],
  ]);
  const [rhsValues, setRhsValues] = useState<string[]>(["0", "0"]);
  const [solutions, setSolutions] = useState<number[]>([]);

  const createEmptyCoefficients = useCallback((dimension: number) => {
    const rows = [];
    for (let i = 0; i < dimension; i++) {
      const columns = [];
      for (let j = 0; j < dimension; j++) {
        columns.push("0");
      }
      rows.push(columns);
    }
    return rows;
  }, []);

  const createEmptyRhsValues = useCallback((dimension: number) => {
    const rows = [];
    for (let i = 0; i < dimension; i++) {
      rows.push("0");
    }
    return rows;
  }, []);

  const increaseDimension = useCallback(() => {
    const newDim = Math.min(10, dimension + 1);
    if (dimension === newDim) {
      return;
    }
    setDimension(newDim);
    setCoefficients((_) => createEmptyCoefficients(newDim));
    setRhsValues((_) => createEmptyRhsValues(newDim));
  }, [dimension, createEmptyCoefficients, createEmptyRhsValues]);

  const decreaseDimension = useCallback(() => {
    const newDim = Math.max(1, dimension - 1);
    setDimension(newDim);
    if (dimension === newDim) {
      return;
    }
    setDimension(newDim);
    setCoefficients((_) => createEmptyCoefficients(newDim));
    setRhsValues((_) => createEmptyRhsValues(newDim));
  }, [dimension, createEmptyCoefficients, createEmptyRhsValues]);

  const onCoefficientsChanged = useCallback((newCoefficients: Coefficients) => {
    setCoefficients((_) => newCoefficients);
  }, []);

  const onRhsValuesChanged = useCallback((newRhsValues: string[]) => {
    setRhsValues((_) => newRhsValues);
  }, []);

  const onSolve = useCallback(async () => {
    console.log("Setting screenshot");
    setSolutions([]);
    setIsSolving(true);
    setSolvingSucceeded(false);
    const api = new SudolverApi();
    try {
      const equationSolutions = await api.solve(coefficients, rhsValues);
      console.log("Success.");
      console.log(equationSolutions);
      setIsSolving(true);
      setSolvingSucceeded(true);
      setSolutions(equationSolutions);
    } catch (ex) {
      console.log("Failed.");
      console.error(ex);
      setSolvingSucceeded(false);
    } finally {
      setIsSolving(false);
    }
  }, [coefficients, rhsValues]);

  return (
    <main className="my-6 mx-24 flex flex-col gap-y-5">
      <Title />
      <Explanation />
      <TopActionBar>
        <Button content="-" onClick={decreaseDimension} />
        <Button content="+" onClick={increaseDimension} />
      </TopActionBar>
      <CoefficientMatrix
        dimension={dimension}
        coefficients={coefficients}
        rhsValues={rhsValues}
        onCoefficientsChanged={onCoefficientsChanged}
        onRhsValuesChanged={onRhsValuesChanged}
      />
      <BottomActionBar>
        <Button content="Solve" onClick={onSolve} />
      </BottomActionBar>
      {!isSolving && solvingSucceeded && (
        <SolutionVariableList solutions={solutions} />
      )}
      {!isSolving && !solvingSucceeded && <SolvingFailedText />}
      <Footer />
    </main>
  );
};
