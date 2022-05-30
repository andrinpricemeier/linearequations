export interface IButtonProps {
  content: string;
  onClick: () => void;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      className="rounded border-2 border-black py-2 px-4 text-black hover:bg-black hover:text-white focus:bg-white focus:text-black"
      onClick={props.onClick}
    >
      {props.content}
    </button>
  );
};
