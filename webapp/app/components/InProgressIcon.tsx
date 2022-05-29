import { Pinwheel } from "@uiball/loaders";

export const InProgressIcon = () => {
  return (
    <div aria-live="polite" aria-busy={true}>
      <Pinwheel size={35} lineWeight={2.0} speed={1} color="#117abb" />
    </div>
  );
};
