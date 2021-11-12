import React from "../_snowpack/pkg/react.js";
import PageLayout from "../components/PageLayout.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import map from "../_snowpack/pkg/lodash.map.js";
export default function Home({exampleGroups}) {
  return /* @__PURE__ */ React.createElement(PageLayout, {
    title: "@sb1/ffe-*-react by example"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sb1ex-toc"
  }, map(exampleGroups, (examples, group) => /* @__PURE__ */ React.createElement("div", {
    key: group,
    className: "sb1ex-toc__group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sb1ex-toc__group-title"
  }, group), /* @__PURE__ */ React.createElement("ul", {
    className: "sb1ex-toc__example-list"
  }, examples.map(({id, label}) => /* @__PURE__ */ React.createElement("li", {
    key: id,
    className: "sb1ex-toc____example-list-item"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/${id}`
  }, label.replace(`${group}/`, "")))))))));
}
