import React from "react";
import { Button } from "grommet";

const SharedButton = () => {
  return (
    <Button
      label="Shared Button"
      onClick={() => {
        alert("I am a button from another Micro frontend!");
      }}
    />
  );
};

export default SharedButton;
