import { CoefficientColumn } from "./CoefficientColumn";
import { RhsColumn } from "./RhsColumn";

export interface ICoefficientMatrix {
  dimension: number;
}

export const CoefficientMatrix = (props: ICoefficientMatrix) => {
  return (
    <div className="flex w-full gap-4">
      {[...Array(props.dimension).keys()].map((___, i) => {
        return (
          <CoefficientColumn
            key={`col-${i}`}
            values={Array.from({ length: props.dimension }, (_, __) => 0)}
          />
        );
      })}
      <RhsColumn
        key="rhs"
        values={Array.from({ length: props.dimension }, (_, __) => 0)}
      />
    </div>
  );
};
