import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var FileItem = function FileItem(_ref) {
  var file = _ref.file,
      onFileDeleted = _ref.onFileDeleted,
      cancelText = _ref.cancelText,
      deleteText = _ref.deleteText;
  return /*#__PURE__*/react.createElement("li", null, // File is loading
  !file.document && !file.error && /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-stencil"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, cancelText, /*#__PURE__*/react.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info-background"
  }), /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-stencil-info-filename"
  }, file.name))), // File finished loading
  file.document && /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-loaded"
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, deleteText, /*#__PURE__*/react.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-filename"
  }, file.name)), // File has error
  file.error && /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-error"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-error-icon ffe-field-error-message"
  }), /*#__PURE__*/react.createElement("button", {
    type: "button",
    id: file.name,
    className: "ffe-file-upload__file-item-delete-button",
    onClick: onFileDeleted
  }, deleteText, /*#__PURE__*/react.createElement("div", {
    id: file.name,
    className: "ffe-file-upload__file-item-delete-icon"
  })), /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-error-info"
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-error-filename"
  }, file.name), /*#__PURE__*/react.createElement("div", {
    className: "ffe-file-upload__file-item-error-message"
  }, file.error))));
};

FileItem.propTypes = {
  /** Shape of the file type, name is required, error and document.content is optional */
  file: propTypes.shape({
    name: propTypes.string.isRequired,
    document: propTypes.object,
    error: propTypes.string
  }).isRequired,

  /**
   * Called when the user clicks the delete button for a given file. Is called with the name of the file in question.
   */
  onFileDeleted: propTypes.func.isRequired,

  /** Label for the cancel button */
  cancelText: propTypes.string,

  /** Label for the delete button */
  deleteText: propTypes.string
};
var FileItem$1 = FileItem;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FileUpload = /*#__PURE__*/function (_React$Component) {
  _inherits(FileUpload, _React$Component);

  var _super = _createSuper(FileUpload);

  function FileUpload(props) {
    var _this;

    _classCallCheck(this, FileUpload);

    _this = _super.call(this, props);
    _this.onFilesSelected = _this.onFilesSelected.bind(_assertThisInitialized(_this));
    _this.onFilesDropped = _this.onFilesDropped.bind(_assertThisInitialized(_this));
    _this.onFileDeleted = _this.onFileDeleted.bind(_assertThisInitialized(_this));
    _this.setFileInputElement = _this.setFileInputElement.bind(_assertThisInitialized(_this));
    _this.triggerUploadFileNativeHandler = _this.triggerUploadFileNativeHandler.bind(_assertThisInitialized(_this));
    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(FileUpload, [{
    key: "setFileInputElement",
    value: function setFileInputElement(element) {
      this.fileInputElement = element;
    }
  }, {
    key: "triggerUploadFileNativeHandler",
    value: function triggerUploadFileNativeHandler() {
      // clear file input to trigger onChange when uploading same filename
      if (this.fileInputElement) {
        this.fileInputElement.value = '';
      }

      this.fileInputElement.click();
    }
  }, {
    key: "onFilesSelected",
    value: function onFilesSelected(event) {
      this.props.onFilesSelected(event.target.files);
    }
  }, {
    key: "onFilesDropped",
    value: function onFilesDropped(event) {
      event.preventDefault();
      this.setState({
        hover: false
      });
      this.props.onFilesDropped(event);
    }
  }, {
    key: "onFileDeleted",
    value: function onFileDeleted(event) {
      this.props.onFileDeleted(this.props.files[event.target.id]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          files = _this$props.files,
          cancelText = _this$props.cancelText,
          deleteText = _this$props.deleteText,
          multiple = _this$props.multiple,
          title = _this$props.title,
          infoText = _this$props.infoText,
          infoSubText = _this$props.infoSubText,
          uploadTitle = _this$props.uploadTitle,
          uploadMicroText = _this$props.uploadMicroText,
          uploadSubText = _this$props.uploadSubText,
          onFileDeleted = _this$props.onFileDeleted;
      return /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload"
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__title"
      }, title), Object.keys(files).length > 0 ? /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__file-items-section"
      }, Object.keys(files).map(function (file) {
        return /*#__PURE__*/react.createElement(FileItem$1, {
          key: file,
          file: files[file],
          cancelText: cancelText,
          deleteText: deleteText,
          onFileDeleted: onFileDeleted
        });
      })) : /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__info-section"
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__info-section-text"
      }, infoText), /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__info-section-subtext"
      }, infoSubText)), /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__upload-section",
        role: "presentation",
        onDrop: this.onFilesDropped,
        onDragOver: function onDragOver(event) {
          event.preventDefault();

          _this2.setState({
            hover: true
          });
        },
        onDragLeave: function onDragLeave() {
          return _this2.setState({
            hover: false
          });
        }
      }, /*#__PURE__*/react.createElement("div", {
        className: classnames('ffe-file-upload__upload-section-border', {
          'ffe-file-upload__upload-section-border--hover': this.state.hover
        })
      }, /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__upload-section-title"
      }, uploadTitle), /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__upload-section-microtext"
      }, uploadMicroText), /*#__PURE__*/react.createElement("button", {
        type: "button",
        className: "ffe-file-upload__upload-button",
        onClick: this.triggerUploadFileNativeHandler
      }, /*#__PURE__*/react.createElement("span", {
        className: "ffe-file-upload__upload-button-icon"
      }), /*#__PURE__*/react.createElement("span", {
        id: "".concat(id, "-label")
      }, label)), /*#__PURE__*/react.createElement("div", {
        className: "ffe-file-upload__upload-section-subtext"
      }, uploadSubText))), /*#__PURE__*/react.createElement("input", {
        id: id,
        type: "file",
        multiple: multiple,
        ref: this.setFileInputElement,
        onChange: this.onFilesSelected,
        "aria-labelledby": "".concat(id, "-label")
      }));
    }
  }]);

  return FileUpload;
}(react.Component);

FileUpload.propTypes = {
  /** ID for the input field. The ID is used as a base for the label ID as well. */
  id: propTypes.string.isRequired,

  /** Label for the button to trigger native upload handling. */
  label: propTypes.string.isRequired,

  /**
   * A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.
   * Must be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,
   * and it is important that duplicates are not allowed.
   * */
  files: propTypes.object.isRequired,

  /**
   * Will be called with `FileList`-object containing the `File`-objects the user selected.
   * See MDN for documentation on
   * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and
   * [File](https://developer.mozilla.org/en-US/docs/Web/API/File).
   */
  onFilesSelected: propTypes.func.isRequired,

  /** Will be called when objects are dropped over the upload-section. */
  onFilesDropped: propTypes.func.isRequired,

  /**
   * Called when the user clicks the delete button for a given file. Is called with the `File`
   * object of the file in question.
   */
  onFileDeleted: propTypes.func.isRequired,

  /** Whether or not uploading multiple files at once via the native file handler is allowed*/
  multiple: propTypes.bool,

  /** Title module */
  title: propTypes.string.isRequired,

  /** Text on the info-section */
  infoText: propTypes.string.isRequired,

  /** Subtext on the info-section */
  infoSubText: propTypes.string,

  /** Label for the cancel button */
  cancelText: propTypes.string,

  /** Label for the delete button */
  deleteText: propTypes.string,

  /** Title on the upload-section */
  uploadTitle: propTypes.string.isRequired,

  /** MicroText on the upload-section */
  uploadMicroText: propTypes.string.isRequired,

  /** SubText on the upload-section */
  uploadSubText: propTypes.string.isRequired
};
var FileUpload$1 = FileUpload;

export { FileUpload$1 as default };
