import { WritingPad } from "./WritingPad";
export default {
  title: "Writing Pad",
  component: WritingPad,
};

const Template = (args: any) => <WritingPad {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {};
