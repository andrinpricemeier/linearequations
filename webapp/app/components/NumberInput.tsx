export interface INumberInputProps {
  value: number;
}
export const NumberInput = (props: INumberInputProps) => {
  return (
    <div className="mb-3 xl:w-96">
      <input
        type="number"
        className="
        form-control
        m-0
        block
        w-full
        rounded
        border-2
        border-solid
        border-black
        bg-white bg-clip-padding
        px-3 py-1.5 text-base
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
