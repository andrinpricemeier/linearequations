import { MainApp } from "./MainApp";
export default {
  title: "Main App",
  component: MainApp,
};

const Template = (args: any) => <MainApp {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {};
