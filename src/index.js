import "stop-runaway-react-effects/hijack";
import React from "react";
import ReactDOM from "react-dom";

import HelloWorld from "./HelloWorld";

const rootElement = document.getElementById("root");
ReactDOM.render(<HelloWorld />, rootElement);
