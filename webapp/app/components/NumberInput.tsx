import { useCallback } from "react";

export interface INumberInputProps {
  value: number;
}
export const NumberInput = (props: INumberInputProps) => {
  const handleFocus = useCallback((event: any) => event.target.select(), []);
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
        value={props.value}
        onFocus={handleFocus}
      />
    </div>
  );
};
