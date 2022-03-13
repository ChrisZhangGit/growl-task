import React from "react";

import "./growl.css";

export const Growl = ({ active, message, onDismissed }) => (
  <div className={`growl${active ? " active" : ""}`}>
    {message}
    <div onClick={onDismissed} className="growl-close" />
  </div>
);

export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false);

  // Set a timer when the state of growlActive change
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setGrowlActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [growlActive]);

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active) => {
      setGrowlActive(active);
    },
  ];
}
