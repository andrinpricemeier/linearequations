import { SeparatorImage } from "./SeparatorImage";

export interface ILeftRightSeparatorProps {
  rowCount: number;
}
export const LeftRightSeparator = (props: ILeftRightSeparatorProps) => {
  return (
    <div className="flex flex-col">
      {[...Array(props.rowCount).keys()].map((value, i) => {
        return <SeparatorImage key={"separator-" + i} />;
      })}
    </div>
  );
};
