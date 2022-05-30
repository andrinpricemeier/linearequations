export interface IBottomActionBarProps {
  children: React.ReactNode;
}

export const BottomActionBar = (props: IBottomActionBarProps) => {
  return <div className="flex">{props.children}</div>;
};
