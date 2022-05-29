import { SolutionVariable } from "./SolutionVariable";
export default {
  title: "Solution Variable",
  component: SolutionVariable,
};

const Template = (args: any) => <SolutionVariable {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  name: "x",
  value: 4.5,
};
