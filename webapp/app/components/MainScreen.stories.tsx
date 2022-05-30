import { MainScreen } from "./MainScreen";
export default {
  title: "Main Screen",
  component: MainScreen,
};

const Template = (args: any) => <MainScreen {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {};
