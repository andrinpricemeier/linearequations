export interface ITopActionBarProps {
  children: React.ReactNode;
}

export const TopActionBar = (props: ITopActionBarProps) => {
  return <div className="flex gap-x-4">{props.children}</div>;
};
