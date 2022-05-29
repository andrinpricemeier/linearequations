import { Button } from "./Button";
export default {
  title: "Button",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  content: "Solve!",
  onClick: () => {},
};
