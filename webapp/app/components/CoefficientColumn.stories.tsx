import { CoefficientColumn } from "./CoefficientColumn";
export default {
  title: "Coefficient Column",
  component: CoefficientColumn,
};

const Template = (args: any) => <CoefficientColumn {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  values: [1.2, 3.4, 9.2],
};
