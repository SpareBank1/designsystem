import React from "./_snowpack/pkg/react.js";
import {BrowserRouter as Router, Switch, Route} from "./_snowpack/pkg/react-router-dom.js";
import Home from "./routes/Home.js";
import EditExample from "./routes/EditExample.js";
import ViewExample from "./routes/ViewExample.js";
import * as designsystem from "./lib/esm/index.js";
const {examples} = designsystem;
const exampleGroups = Object.keys(examples).sort().reduce((acc, id) => {
  const {sourceFileName} = examples[id];
  const chunks = sourceFileName.split("/");
  const group = chunks.length > 1 ? chunks[0] : "ROOT";
  (acc[group] || (acc[group] = [])).push({id, label: sourceFileName});
  return acc;
}, {});
const withExampleById = (WrappedComponent) => ({match}) => {
  const {exampleId} = match.params;
  const example = examples[exampleId];
  if (!example) {
    return /* @__PURE__ */ React.createElement("div", null, "Error: No such example ", /* @__PURE__ */ React.createElement("code", null, exampleId), ".");
  }
  return /* @__PURE__ */ React.createElement(WrappedComponent, {
    ...{match, exampleId, example}
  });
};
export default function App() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/:exampleId/edit"
  }, withExampleById(EditExample)), /* @__PURE__ */ React.createElement(Route, {
    path: "/:exampleId"
  }, withExampleById(ViewExample)), /* @__PURE__ */ React.createElement(Route, {
    path: "/"
  }, /* @__PURE__ */ React.createElement(Home, {
    exampleGroups
  }))));
}
