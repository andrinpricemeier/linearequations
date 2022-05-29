export interface ITopActionBarProps {
  children: JSX.Element[];
}

export const TopActionBar = (props: ITopActionBarProps) => {
  return <div className="flex gap-x-4">{props.children}</div>;
};
