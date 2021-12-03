import React from '../../../../pkg/react.js';
import { func, shape, object, string as stringType } from '../../../../pkg/prop-types.js';

var FileItem = function FileItem(_ref) {
  var file = _ref.file,
      onFileDeleted = _ref.onFileDeleted,
      cancelText = _ref.cancelText,
      deleteText = _ref.deleteText;
  return /*#__PURE__*/React.createElement("li", null, // File is loading
  !file.document && !file.error && /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-stencil"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, cancelText, /*#__PURE__*/React.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info-background"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info-filename"
  }, file.name))), // File finished loading
  file.document && /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-loaded"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, deleteText, /*#__PURE__*/React.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-filename"
  }, file.name)), // File has error
  file.error && /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-error"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-error-icon ffe-field-error-message"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, deleteText, /*#__PURE__*/React.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-error-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-error-filename"
  }, file.name), /*#__PURE__*/React.createElement("div", {
    className: "ffe-file-upload__file-item-error-message"
  }, file.error))));
};

FileItem.propTypes = {
  /** Shape of the file type, name is required, error and document.content is optional */
  file: shape({
    name: stringType.isRequired,
    document: object,
    error: stringType
  }).isRequired,

  /**
   * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
   */
  onFileDeleted: func.isRequired,

  /** Label for the cancel button */
  cancelText: stringType,

  /** Label for the delete button */
  deleteText: stringType
};
export default FileItem;