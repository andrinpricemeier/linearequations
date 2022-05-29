import type { FC } from "react";
import type { ISolutionVariableProps } from "./SolutionVariable";
import { SolvedImage } from "./SolvedImage";

export interface ISolutionVariableListProps {
  variables: FC<ISolutionVariableProps>[];
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
