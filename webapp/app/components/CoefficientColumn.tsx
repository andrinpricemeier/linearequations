import { NumberInput } from "./NumberInput";

export interface ICoefficientColumnProps {
  key: string;
  values: number[];
}
export const CoefficientColumn = (props: ICoefficientColumnProps) => {
  return (
    <div className="flex flex-col">
      {props.values.map((value, i) => {
        return <NumberInput key={props.key + i} value={value} />;
      })}
    </div>
  );
};
