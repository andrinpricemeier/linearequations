import { NumberInput } from "./NumberInput";

export interface IRhsColumnProps {
  key: string;
  values: number[];
}
export const RhsColumn = (props: IRhsColumnProps) => {
  return (
    <div
      className="flex grow 
        flex-col
        border-l-2
        border-black
        pl-5"
    >
      {props.values.map((value, i) => {
        return <NumberInput key={props.key + i} value={value} />;
      })}
    </div>
  );
};
