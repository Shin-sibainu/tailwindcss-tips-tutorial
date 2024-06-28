import React from "react";
import Button from "./Button";

const Tips7 = () => {
  return (
    <div className="flex gap-3">
      <Button className="bg-red-500">Button</Button>
      <Button className="bg-green-500" size={"sm"}>
        Button
      </Button>
      <Button size={"md"}>Button</Button>
      <Button variant={"secondary"} size={"lg"}>
        Button
      </Button>
    </div>
  );
};

export default Tips7;
