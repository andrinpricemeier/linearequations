import { Button } from "./Button";
import { TopActionBar } from "./TopActionBar";
export default {
  title: "Top Action Bar",
  component: TopActionBar,
};

const Template = (args: any) => <TopActionBar {...args} />;

export const Primary = Template.bind({}) as any;
Primary.args = {
  children: [
    <Button key="btn-1" content="-" onClick={() => {}} />,
    <Button key="btn-2" content="+" onClick={() => {}} />,
  ],
};
