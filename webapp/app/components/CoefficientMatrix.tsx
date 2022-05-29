import { CoefficientColumn } from "./CoefficientColumn";
import { LeftRightSeparator } from "./LeftRightSeparator";
import { RhsColumn } from "./RhsColumn";

export interface ICoefficientMatrix {
  dimension: number;
}

export const CoefficientMatrix = (props: ICoefficientMatrix) => {
  return (
    <div className="flex gap-4">
      {[...Array(props.dimension).keys()].map((___, i) => {
        return (
          <CoefficientColumn
            key={`col-${i}`}
            values={Array.from({ length: props.dimension }, (_, __) => 0)}
          />
        );
      })}
      <LeftRightSeparator rowCount={props.dimension} />
      <RhsColumn
        key="rhs"
        values={Array.from({ length: props.dimension }, (_, __) => 0)}
      />
    </div>
  );
};
