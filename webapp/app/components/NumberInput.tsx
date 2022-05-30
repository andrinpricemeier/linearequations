import { useCallback } from "react";

export interface INumberInputProps {
  id: string;
  value: string;
  onValueChanged: (id: string, newValue: string) => void;
}
export const NumberInput = (props: INumberInputProps) => {
  const handleFocus = useCallback((event: any) => event.target.select(), []);
  const valueChangedCallback = props.onValueChanged;
  const handleValueChanged = useCallback(
    (event: any) => {
      valueChangedCallback(props.id, event.target.value);
    },
    [valueChangedCallback, props.id]
  );
  return (
    <div className="mb-3">
      <input
        type="text"
        inputMode="numeric"
        pattern="[-,.0-9]*"
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
