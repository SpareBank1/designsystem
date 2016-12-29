module.exports = {
  rules: {
      // Enforce all anchors to contain accessible content.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
      "jsx-a11y/aria-props": 2,

      // Enforce all aria-* props are valid.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
      "jsx-a11y/aria-proptypes": 2,

      // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
      "jsx-a11y/aria-role": 2,

      // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
      "jsx-a11y/aria-unsupported-elements": 2,

      // Enforce an anchor element's href prop value is not just #.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
      "jsx-a11y/href-no-hash": 2,

      // Enforce that <img> JSX elements use the alt prop.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md
      "jsx-a11y/img-has-alt": 2,

      // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
      "jsx-a11y/img-redundant-alt": 2,

      // Enforce that <label> elements have the htmlFor prop.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
      "jsx-a11y/label-has-for": 2,

      // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
      "jsx-a11y/mouse-events-have-key-events": 2,

      // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
      "jsx-a11y/no-access-key": 2,

      // Enforce usage of onBlur over onChange on select menus for accessibility.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
      "jsx-a11y/no-onchange": 0,

      // Enforce that elements with onClick handlers must be focusable.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onlcick-has-focus.md
      "jsx-a11y/onclick-has-focus": 2,

      // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/onlcick-has-role.md
      "jsx-a11y/onclick-has-role": 2,

      // Enforce that elements with ARIA roles must have all required attributes for that role.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
      "jsx-a11y/role-has-required-aria-props": 2,

      // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
      "jsx-a11y/role-supports-aria-props": 2,

      // Enforce tabIndex value is not greater than zero.
      // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
      "jsx-a11y/tabindex-no-positive": 2
  }
};
