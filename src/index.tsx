import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello, HelloProps } from "./components/Hello";

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById("container")
);
