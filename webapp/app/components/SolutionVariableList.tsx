import { useMemo } from "react";
import invariant from "tiny-invariant";
import { SolutionVariable } from "./SolutionVariable";
import { SolvedImage } from "./SolvedImage";

export interface ISolutionVariableListProps {
  solutions: number[];
}

export const SolutionVariableList = (props: ISolutionVariableListProps) => {
  const names = useMemo(() => {
    const allNames = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    invariant(
      allNames.length >= props.solutions.length,
      "Not enough variable names for the number of solutions found."
    );
    return allNames.slice(0, props.solutions.length);
  }, [props.solutions]);
  return (
    <div>
      <SolvedImage />
      <div className="flex flex-wrap gap-3">
        {props.solutions.map((solution: number, variableIndex: number) => {
          return (
            <SolutionVariable
              key={`solution-${names[variableIndex]}-${solution}`}
              name={names[variableIndex]}
              value={solution}
            />
          );
        })}
      </div>
    </div>
  );
};
