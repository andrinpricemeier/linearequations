import { LeftRightSeparator } from "./LeftRightSeparator";
export default {
  title: "Left Right Separator",
  component: LeftRightSeparator,
};

const Template = (args: any) => <LeftRightSeparator {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  rowCount: 3,
};
