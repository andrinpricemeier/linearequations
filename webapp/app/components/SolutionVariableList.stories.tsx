import { SolutionVariable } from "./SolutionVariable";
import { SolutionVariableList } from "./SolutionVariableList";
export default {
  title: "Solution Variable List",
  component: SolutionVariableList,
};

const Template = (args: any) => <SolutionVariableList {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  variables: [
    <SolutionVariable key="a" name="a" value={4.3} />,
    <SolutionVariable key="b" name="b" value={8.1} />,
  ],
};
