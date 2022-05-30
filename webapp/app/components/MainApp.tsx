import { useCallback, useState } from "react";
import { SudolverApi } from "../services/SolverApi";
import { BottomActionBar } from "./BottomActionBar";
import { Button } from "./Button";
import type { Coefficients } from "./CoefficientMatrix";
import { CoefficientMatrix } from "./CoefficientMatrix";
import { SolutionVariableList } from "./SolutionVariableList";
import { SolvingFailedText } from "./SolvingFailedText";
import { Title } from "./Title";
import { TopActionBar } from "./TopActionBar";

export const MainApp = () => {
  const [isSolving, setIsSolving] = useState(true);
  const [solvingSucceeded, setSolvingSucceeded] = useState(true);
  const [dimension, setDimension] = useState<number>(2);
  const [coefficients, setCoefficients] = useState<Coefficients>([
    [0, 0],
    [0, 0],
  ]);
  const [rhsValues, setRhsValues] = useState<number[]>([0, 0]);
  const [solutions, setSolutions] = useState<number[]>([]);

  const increaseDimension = useCallback(() => {
    setDimension((dim) => Math.min(10, dim + 1));
  }, []);

  const decreaseDimension = useCallback(() => {
    setDimension((dim) => Math.max(1, dim - 1));
  }, []);

  const onCoefficientsChanged = useCallback((newCoefficients: Coefficients) => {
    setCoefficients((_) => newCoefficients);
  }, []);

  const onRhsValuesChanged = useCallback((newRhsValues: number[]) => {
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
    <main className="m-6 flex flex-col gap-y-5">
      <Title />
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
    </main>
  );
};
