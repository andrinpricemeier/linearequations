import { SolvedImage } from "./SolvedImage";

export interface ISolutionVariableListProps {
  variables: JSX.Element[];
}

export const SolutionVariableList = (props: ISolutionVariableListProps) => {
  return (
    <div>
      <SolvedImage />
      <div className="flex flex-wrap gap-3">
        {props.variables.map((variable) => {
          return variable;
        })}
      </div>
    </div>
  );
};
