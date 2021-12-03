import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import axe from "./_snowpack/pkg/@axe-core/react.js";
import "./lib/style.css.proxy.js";
import "./_snowpack/link/packages/ffe-core/css/colors.css.proxy.js";
import "./_snowpack/link/packages/ffe-core/css/dimensions.css.proxy.js";
import "./_snowpack/link/packages/ffe-webfonts/sb1-fonts.css.proxy.js";
import "./index.css.proxy.js";
axe(React, ReactDOM, 1e3);
const baseUrl = document.querySelector("meta[name=x-base-url]")?.content || "/";
ReactDOM.render(/* @__PURE__ */ React.createElement(App, {
  baseUrl
}), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
