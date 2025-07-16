#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

function getProcessArguments() {
  const args = {};
  console.log(process.argv);
  process.argv.slice(2).forEach((arg) => {
    if (!arg.includes("=")) return;
    const [key, value] = arg.split("=");
    args[key] = value.split(",");
  });
  return args;
}

const writeToFile = (filename) => (data) => {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, data, "utf8");
  console.log(`wrote ${filename}`);
  return data; // return input data for smoother pipelines
};

module.exports = { getProcessArguments, writeToFile };
