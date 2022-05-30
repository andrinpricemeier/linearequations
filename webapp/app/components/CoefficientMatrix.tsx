import { useCallback } from "react";
import { CoefficientColumn } from "./CoefficientColumn";
import { RhsColumn } from "./RhsColumn";

export type Coefficients = CoefficientRow[];
export type CoefficientRow = number[];
export interface ICoefficientMatrix {
  dimension: number;
  coefficients: Coefficients;
  rhsValues: number[];
  onCoefficientsChanged: (newCoefficients: Coefficients) => void;
  onRhsValuesChanged: (newRhsValues: number[]) => void;
}

export const CoefficientMatrix = (props: ICoefficientMatrix) => {
  const coefficientsChangedCallback = props.onCoefficientsChanged;
  const onCoefficientChanged = useCallback(
    (row: number, col: number, newValue: number) => {
      const newCoefficients = JSON.parse(JSON.stringify(props.coefficients));
      newCoefficients[row][col] = newValue;
      coefficientsChangedCallback(newCoefficients);
    },
    [coefficientsChangedCallback, props.coefficients]
  );

  const getValuesForColumn = useCallback(
    (columnIndex: number): number[] => {
      return props.coefficients.map((row: CoefficientRow) => row[columnIndex]);
    },
    [props.coefficients]
  );

  const rhsValuesChangedCallback = props.onRhsValuesChanged;
  const onRhsValueChanged = useCallback(
    (row: number, newValue: number) => {
      const newRhsValues = [...props.rhsValues];
      newRhsValues[row] = newValue;
      rhsValuesChangedCallback(newRhsValues);
    },
    [rhsValuesChangedCallback, props.rhsValues]
  );
  return (
    <div className="flex w-full gap-4">
      {[...Array(props.dimension).keys()].map((___, columnIndex) => {
        return (
          <CoefficientColumn
            key={`col-${columnIndex}`}
            columnIndex={columnIndex}
            values={getValuesForColumn(columnIndex)}
            onCoefficientChanged={onCoefficientChanged}
          />
        );
      })}
      <RhsColumn
        values={props.rhsValues}
        onRhsValueChanged={onRhsValueChanged}
      />
    </div>
  );
};
