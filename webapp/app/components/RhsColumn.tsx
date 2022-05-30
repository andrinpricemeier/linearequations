import { useCallback } from "react";
import { NumberInput } from "./NumberInput";

export interface IRhsColumnProps {
  values: string[];
  onRhsValueChanged: (row: number, newValue: string) => void;
}
export const RhsColumn = (props: IRhsColumnProps) => {
  const rhsValueChangedCallback = props.onRhsValueChanged;
  const onValueChanged = useCallback(
    (id: string, newValue: string) => {
      const splitUp = id.split("-");
      const rowIndex = parseInt(splitUp[1]);
      rhsValueChangedCallback(rowIndex, newValue);
    },
    [rhsValueChangedCallback]
  );
  return (
    <div
      className="flex grow 
        flex-col
        border-l-2
        border-black
        pl-5"
    >
      {props.values.map((value, rowIndex) => {
        return (
          <NumberInput
            key={`rhs-${rowIndex}`}
            id={`rhs-${rowIndex}`}
            value={value}
            onValueChanged={onValueChanged}
          />
        );
      })}
    </div>
  );
};
