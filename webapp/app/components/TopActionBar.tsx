import { Button } from "./Button";

export const TopActionBar = () => {
  return (
    <div className="flex justify-end gap-x-4">
      <Button content="-" onClick={() => {}} />
      <Button content="+" onClick={() => {}} />
    </div>
  );
};
