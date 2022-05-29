export interface ISolutionVariableProps {
  name: string;
  value: number;
}

export const SolutionVariable = (props: ISolutionVariableProps) => {
  return (
    <span className="text-green">
      {props.name} = {props.value}
    </span>
  );
};
