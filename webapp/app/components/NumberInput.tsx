import { useCallback } from "react";

export interface INumberInputProps {
  id: string;
  value: number;
  onValueChanged: (id: string, newValue: number) => void;
}
export const NumberInput = (props: INumberInputProps) => {
  const handleFocus = useCallback((event: any) => event.target.select(), []);
  const valueChangedCallback = props.onValueChanged;
  const handleValueChanged = useCallback(
    (event: any) => {
      const value = parseFloat(event.target.value);
      valueChangedCallback(props.id, value);
    },
    [valueChangedCallback, props.id]
  );
  return (
    <div className="mb-3">
      <input
        type="number"
        className="
        form-control
        w-full
        grow
        rounded
        border-2
        border-solid
        border-black
        bg-white
        bg-clip-padding
        p-2
        text-right
        font-normal
        text-black
        transition
        ease-in-out
        focus:border-black focus:bg-white focus:text-black focus:outline-none
      "
        step="0.01"
        value={props.value}
        onFocus={handleFocus}
        onChange={handleValueChanged}
      />
    </div>
  );
};
