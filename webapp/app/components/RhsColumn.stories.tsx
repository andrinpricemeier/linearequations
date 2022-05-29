import { RhsColumn } from "./RhsColumn";
export default {
  title: "Right hand side Column",
  component: RhsColumn,
};

const Template = (args: any) => <RhsColumn {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  values: [1.2, 3.4, 9.2],
};
