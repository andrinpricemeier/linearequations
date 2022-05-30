import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as ButtonStories from "../../app/components/Button.stories";

const { Default } = composeStories(ButtonStories);
const DefaultButton = Default as any;
it("sets content properly", () => {
  const { container } = render(<DefaultButton />);
  expect(container.innerText).toBe("Solve");
});
