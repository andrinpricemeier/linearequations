import { SolutionVariableList } from "./SolutionVariableList";
export default {
  title: "Solution Variable List",
  component: SolutionVariableList,
};

const Template = (args: any) => <SolutionVariableList {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  solutions: [1.0, 3.4],
};
