import React from "react";

export const SolvingFailedText = () => {
  return (
    <div className="text-center text-red">
      <p>Oh, no. The equation couldn't be solved.</p>
      <p>
        If the issue persists, please visit the{" "}
        <a
          className="text-blue underline"
          href="https://github.com/andrinmeier/linearequations"
          target="_blank"
          rel="noreferrer"
        >
          GitHub page
        </a>{" "}
        and inform the developer.
      </p>
    </div>
  );
};
