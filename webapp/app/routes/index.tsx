import { MainScreen } from "../components/MainScreen";
import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "linear-equations.com",
});
export default function Index() {
  return <MainScreen />;
}
