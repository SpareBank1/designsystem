import React from '../../../../pkg/react.js';
import { node, number, string } from '../../../../pkg/prop-types.js';
var NON_BREAKING_SPACE = "\xA0";
var RADIUS = 150;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function ChartDonut(_ref) {
  var name = _ref.name,
      percentage = _ref.percentage,
      firstLabel = _ref.firstLabel,
      lastLabel = _ref.lastLabel,
      label = _ref.label;
  var offset = CIRCUMFERENCE - CIRCUMFERENCE / 100 * percentage;
  /*
      The rendered circle consists of two half-circles with a gap between them.
      That means we have to rotate one of them to create this gap and we also have to
      completely remove one of the circles once the other one grows so large that there is
      not enough room to fit the other. The numbers used to rotate, adjust and hide
      half-circles below come from visually inspecting the result at different percentages
      and is not the result of any kind of complex math. If any aspect of this SVG is
      changed, please verify that it looks right for the entire 0-100 percentage range.
  */

  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 360",
    className: "ffe-chart-donut__circle",
    style: {
      transform: "scale(-1, 1) rotate(".concat(percentage ? 275 : -90, "deg)")
    }
  }, percentage < 95.7 && /*#__PURE__*/React.createElement("circle", {
    className: "ffe-chart-donut--vann",
    fill: "none",
    strokeWidth: "15",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    cx: "50%",
    cy: "50%",
    r: RADIUS,
    strokeDasharray: CIRCUMFERENCE,
    strokeDashoffset: CIRCUMFERENCE - offset + (percentage ? 22 : 0)
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 360",
    className: "ffe-chart-donut__circle",
    style: {
      transform: "rotate(".concat(percentage ? -85 : -90, "deg)")
    }
  }, percentage > 3.2 && /*#__PURE__*/React.createElement("circle", {
    className: "ffe-chart-donut--frost",
    fill: "none",
    strokeWidth: "15",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    cx: "50%",
    cy: "50%",
    r: RADIUS,
    strokeDasharray: CIRCUMFERENCE + (percentage === 100 ? 22 : 0),
    strokeDashoffset: offset + (percentage ? 30 : 0)
  })), /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__description"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__name ffe-strong-text"
  }, name), firstLabel && lastLabel && /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__fractions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__fraction ffe-chart-donut__fraction--vann"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__amount ffe-strong-text"
  }, "".concat(Number(100 - percentage).toFixed(0)).concat(NON_BREAKING_SPACE, "%")), /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__type ffe-micro-text"
  }, firstLabel)), /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__fraction ffe-chart-donut__fraction--frost"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__amount ffe-strong-text"
  }, "".concat(Number(percentage).toFixed(0)).concat(NON_BREAKING_SPACE, "%")), /*#__PURE__*/React.createElement("div", {
    className: "ffe-chart-donut__type ffe-micro-text"
  }, lastLabel))), !firstLabel && !lastLabel && label));
}

ChartDonut.propTypes = {
  /** Short text labeling left value, like "empty", "said yes" etc */
  firstLabel: string,

  /** Short text labeling right value, like "full", "said no" etc */
  lastLabel: string,

  /** React node to be inserted directly under the chart's name, alternative to first/last label */
  label: node,

  /** Short text labeling the graph in total, like "percentage", "voted this year" etc */
  name: string.isRequired,

  /** The percentage for the right-most value */
  percentage: number.isRequired
};
export default ChartDonut;