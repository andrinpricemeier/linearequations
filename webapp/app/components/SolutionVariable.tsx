import type { FC } from "react";
export interface ISolutionVariableProps {
  name: string;
  value: number;
}

export const SolutionVariable: FC<ISolutionVariableProps> = (
  props: ISolutionVariableProps
) => {
  return (
    <span className="text-green">
      {props.name} = {props.value.toFixed(3)}
    </span>
  );
};
