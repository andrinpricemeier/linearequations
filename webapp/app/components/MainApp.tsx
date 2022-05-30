import { useCallback, useState } from "react";
import { BottomActionBar } from "./BottomActionBar";
import { Button } from "./Button";
import { CoefficientMatrix } from "./CoefficientMatrix";
import { SolutionVariable } from "./SolutionVariable";
import { SolutionVariableList } from "./SolutionVariableList";
import { SolvingFailedText } from "./SolvingFailedText";
import { Title } from "./Title";
import { TopActionBar } from "./TopActionBar";

export const MainApp = () => {
  const [isSolving, setIsSolving] = useState(true);
  const [solvingSucceeded, setSolvingSucceeded] = useState(true);
  const [dimension, setDimension] = useState<number>(2);

  const increaseDimension = useCallback(() => {
    setDimension((dim) => Math.min(10, dim + 1));
  }, []);

  const decreaseDimension = useCallback(() => {
    setDimension((dim) => Math.max(1, dim - 1));
  }, []);

  return (
    <main className="m-6 flex flex-col gap-y-5">
      <Title />
      <TopActionBar>
        <Button content="-" onClick={decreaseDimension} />
        <Button content="+" onClick={increaseDimension} />
      </TopActionBar>
      <CoefficientMatrix dimension={dimension} />
      <BottomActionBar />
      {!isSolving && solvingSucceeded && (
        <SolutionVariableList
          variables={[<SolutionVariable key="a" name={"a"} value={5.4} />]}
        />
      )}
      {!isSolving && !solvingSucceeded && <SolvingFailedText />}
    </main>
  );
};
