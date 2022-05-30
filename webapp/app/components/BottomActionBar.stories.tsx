import { BottomActionBar } from "./BottomActionBar";
import { Button } from "./Button";
export default {
  title: "Bottom Action Bar",
  component: BottomActionBar,
};

export const Primary = () => (
  <BottomActionBar>
    <Button content="Solve" onClick={() => {}} />
  </BottomActionBar>
);
