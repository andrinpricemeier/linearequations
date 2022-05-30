import type { Coefficients } from "./CoefficientMatrix";
import { CoefficientMatrix } from "./CoefficientMatrix";
export default {
  title: "Coefficient Matrix",
  component: CoefficientMatrix,
};

const Template = (args: any) => <CoefficientMatrix {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  dimension: 3,
  coefficients: [],
  rhsValues: [],
  onCoefficientsChanged: (newCoefficients: Coefficients) => {},
  onRhsValuesChanged: (newRhsValues: number[]) => {},
};
