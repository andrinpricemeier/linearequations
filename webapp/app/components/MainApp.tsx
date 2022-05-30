import { useCallback, useState } from "react";
import { BottomActionBar } from "./BottomActionBar";
import { Button } from "./Button";
import { CoefficientMatrix } from "./CoefficientMatrix";
import { InProgressIcon } from "./InProgressIcon";
import { SolutionVariable } from "./SolutionVariable";
import { SolutionVariableList } from "./SolutionVariableList";
import { SolvingFailedText } from "./SolvingFailedText";
import { Title } from "./Title";
import { TopActionBar } from "./TopActionBar";
import LoadingOverlay from "react-loading-overlay-ts";

export const MainApp = () => {
  const [isSolving, setIsSolving] = useState(true);
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
      <LoadingOverlay
        active={isSolving}
        spinner={<InProgressIcon />}
        text="Solving equations..."
      >
        <CoefficientMatrix dimension={dimension} />
      </LoadingOverlay>
      <BottomActionBar />
      <SolutionVariableList
        variables={[<SolutionVariable key="a" name={"a"} value={5.4} />]}
      />
      <SolvingFailedText />
    </main>
  );
};
