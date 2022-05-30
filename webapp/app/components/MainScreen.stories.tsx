import { MainScreen } from "./MainScreen";
import { rest } from "msw";
import { fireEvent, within, waitFor } from "@storybook/testing-library";

export default {
  title: "Main Screen",
  component: MainScreen,
};

const Template = (args: any) => <MainScreen {...args} />;

export const Default = Template.bind({}) as any;
Default.args = {};
Default.parameters = {
  msw: {
    handlers: [
      rest.post("/linearequation/analysis", async (req, res, ctx) => {
        await new Promise((r) => setTimeout(r, 2000));
        return res(
          ctx.json({
            solution: [4.2, 1.6, 3.3],
          })
        );
      }),
    ],
  },
};
Default.play = async ({ canvasElement }: { canvasElement: any }) => {
  const canvas = within(canvasElement);
  await waitFor(async () => {
    await fireEvent.click(canvas.getByText("Solve"));
    await fireEvent.click(canvas.getByText("-"));
    await fireEvent.click(canvas.getByText("+"));
    await fireEvent.click(canvas.getByText("+"));
  });
};

export const Error = Template.bind({}) as any;
Error.args = {};
Error.parameters = {
  msw: {
    handlers: [
      rest.post("/linearequation/analysis", async (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    ],
  },
};
