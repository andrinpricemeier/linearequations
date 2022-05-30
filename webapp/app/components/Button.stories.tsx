import { Button } from "./Button";
export default {
  title: "Button",
  component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {
  content: "Solve",
  argTypes: { onClick: { action: "clicked" } },
};
