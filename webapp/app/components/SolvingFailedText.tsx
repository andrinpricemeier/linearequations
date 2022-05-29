import React from "react";

export const SolvingFailedText = () => {
  return (
    <div className="text-red">
      <p>Oh, no. The equation couldn't be solved.</p>
      <p>
        If the issue persists, please visit the{" "}
        <a href="https://github.com/andrinmeier/linearequations">GitHub page</a>{" "}
        and inform the developer.
      </p>
    </div>
  );
};
