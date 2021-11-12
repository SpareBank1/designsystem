import * as __SNOWPACK_ENV__ from './_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "./_snowpack/pkg/react.js";
import ReactDOM from "./_snowpack/pkg/react-dom.js";
import App from "./App.js";
import axe from "./_snowpack/pkg/@axe-core/react.js";
import "./lib/style.css.proxy.js";
import "./_snowpack/pkg/@sb1/ffe-core/css/colors.css.proxy.js";
import "./_snowpack/pkg/@sb1/ffe-core/css/dimensions.css.proxy.js";
import "./_snowpack/pkg/@sb1/ffe-webfonts/sb1-fonts.css.proxy.js";
import "./index.css.proxy.js";
axe(React, ReactDOM, 1e3);
ReactDOM.render(/* @__PURE__ */ React.createElement(App, null), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
