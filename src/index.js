import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./index.css";
import data from "./data.json";

const onChange = (currentNode, selectedNodes) => {
  console.log("path::", selectedNodes);
};

const assignObjectPaths = (obj, stack) => {
  Object.keys(obj).forEach((k) => {
    const node = obj[k];
    if (typeof node === "object") {
      node.path = stack ? `${stack}.${k}` : k;
      assignObjectPaths(node, node.path);
    }
  });
};

const App = () => {
  assignObjectPaths(data);

  return (
    <DropdownTreeSelect
      data={data}
      onChange={onChange}
      className="bootstrap-demo"
    />
  );
};

render(<App />, document.getElementById("root"));
