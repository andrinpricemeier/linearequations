import { NumberInput } from "./NumberInput";
export default {
  title: "Number Input",
  component: NumberInput,
};

const Template = (args: any) => <NumberInput {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  value: 4.5,
};
