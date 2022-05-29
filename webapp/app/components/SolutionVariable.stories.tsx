import { SolutionVariable } from "./SolutionVariable";
export default {
  title: "Solution Variable",
  component: SolutionVariable,
};

export const Primary = () => <SolutionVariable name="x" value={5.0} />;
