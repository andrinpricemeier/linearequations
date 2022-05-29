import { useMemo } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

export const WritingPad = () => {
  const { height, width } = useWindowDimensions();
  const widthCount = useMemo(() => {
    return Math.floor(width! / 35);
  }, [width]);
  const heightCount = useMemo(() => {
    return Math.floor(height! / 35);
  }, [height]);
  return (
    <table className="h-full w-full table-fixed border-collapse opacity-5">
      {[...Array(heightCount).keys()].map((_, row) => {
        return (
          <tr key={`pad-row-${row}`}>
            {[...Array(widthCount).keys()].map((__, col) => {
              return (
                <td
                  className="h-10 w-10 border-2 border-blue"
                  key={`pad-row-${row}-col-${col}`}
                ></td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
};
