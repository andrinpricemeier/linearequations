export interface INumberInputProps {
  value: number;
}
export const NumberInput = (props: INumberInputProps) => {
  return (
    <div className="mb-3">
      <input
        type="number"
        className="
        form-control
        rounded
        border-2
        border-solid
        border-black
        bg-white bg-clip-padding
        font-normal
        text-black
        transition
        ease-in-out
        focus:border-black focus:bg-white focus:text-black focus:outline-none
      "
        value={props.value}
      />
    </div>
  );
};
