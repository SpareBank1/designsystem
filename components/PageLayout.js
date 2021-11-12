import React from "../_snowpack/pkg/react.js";
import DarkmodeButton from "./DarkmodeButton.js";
export default function PageLayout({title, children}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: "sb1ex-header"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "sb1ex-header__headline"
  }, title), /* @__PURE__ */ React.createElement(DarkmodeButton, null)), /* @__PURE__ */ React.createElement("main", {
    className: "sb1ex-main"
  }, children));
}
