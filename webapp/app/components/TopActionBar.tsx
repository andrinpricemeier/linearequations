import { Button } from "./Button";

export const TopActionBar = () => {
  return (
    <div className="flex gap-x-4">
      <Button content="-" onClick={() => {}} />
      <Button content="+" onClick={() => {}} />
    </div>
  );
};
