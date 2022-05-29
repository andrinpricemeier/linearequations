import { NumberInput } from "./NumberInput";

export interface IRhsColumnProps {
  key: string;
  values: number[];
}
export const RhsColumn = (props: IRhsColumnProps) => {
  return (
    <div className="flex flex-col">
      {props.values.map((value, i) => {
        return <NumberInput key={props.key + i} value={value} />;
      })}
    </div>
  );
};
