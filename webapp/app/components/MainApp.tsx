import { BottomActionBar } from "./BottomActionBar";
import { CoefficientMatrix } from "./CoefficientMatrix";
import { InProgressIcon } from "./InProgressIcon";
import { SolutionVariable } from "./SolutionVariable";
import { SolutionVariableList } from "./SolutionVariableList";
import { SolvingFailedText } from "./SolvingFailedText";
import { TitleImage } from "./TitleImage";
import { TopActionBar } from "./TopActionBar";

export const MainApp = () => {
  return (
    <main>
      <TitleImage />
      <TopActionBar />
      <CoefficientMatrix dimension={2} />
      <BottomActionBar />
      <SolutionVariableList
        variables={[<SolutionVariable key="a" name={"a"} value={5.4} />]}
      />
      <SolvingFailedText />
      <InProgressIcon />
    </main>
  );
};
