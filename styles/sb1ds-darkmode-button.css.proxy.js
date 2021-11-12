// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".sb1ds-darkmode-button {\n    display: flex;\n    align-items: center;\n}\n\n.sb1ds-darkmode-button__switch {\n    visibility: hidden;\n    display: none;\n    height: 0;\n    width: 0;\n}\n\n.sb1ds-darkmode-button__switch:checked + label {\n    background: var(--ffe-farge-nordlys);\n}\n\n.sb1ds-darkmode-button__switch:checked + label::after {\n    left: calc(100% - 5px);\n    transform: translateX(-100%);\n}\n\n.sb1ds-darkmode-button__icon {\n    height: 30px;\n}\n\n.sb1ds-darkmode-button__label {\n    margin: 0 var(--ffe-spacing-xs);\n    border-radius: 100px;\n    position: relative;\n    cursor: pointer;\n    text-indent: -9999px;\n    width: 55px;\n    height: 30px;\n    background: var(--ffe-farge-vann-70);\n    float: right;\n}\n.sb1ds-darkmode-button__label::after {\n    border-radius: 50%;\n    position: absolute;\n    content: '';\n    background: #fff;\n    width: 20px;\n    height: 20px;\n    top: 5px;\n    left: 4px;\n    transition: ease-in-out 200ms;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}