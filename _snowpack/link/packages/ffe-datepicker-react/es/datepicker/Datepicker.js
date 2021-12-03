function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from '../../../../../pkg/react.js';
import { bool, func, oneOfType, shape, string } from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';
import { v4 as uuid } from '../../../../../pkg/uuid.js';
import Calendar from '../calendar/index.js';
import KeyCode from '../util/keyCode.js';
import DateInput from '../input/index.js';
import CalendarButton from '../button/index.js';
import SimpleDate from '../datelogic/simpledate.js';
import dateErrorTypes from '../datelogic/error-types.js';
import i18n from '../i18n/i18n.js';
import { validateDate } from '../util/dateUtil.js';
import debounce from '../../../../../pkg/lodash.debounce.js';

var Datepicker = /*#__PURE__*/function (_Component) {
  _inherits(Datepicker, _Component);

  var _super = _createSuper(Datepicker);

  function Datepicker(props) {
    var _this;

    _classCallCheck(this, Datepicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "buttonRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "debounceCalendar", debounce(function (value) {
      if (value !== _this.state.lastValidDate && validateDate(value)) {
        _this.setState({
          calendarActiveDate: value,
          lastValidDate: value
        });
      }
    }, 250));

    _this.state = {
      displayDatePicker: false,
      minDate: props.minDate,
      maxDate: props.maxDate,
      lastValidDate: '',
      calendarActiveDate: validateDate(props.value) ? props.value : ''
    };
    _this.datepickerId = uuid();
    _this.openCalendar = _this.openCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendar = _this.closeCalendar.bind(_assertThisInitialized(_this));
    _this.closeCalendarSetInputFocus = _this.closeCalendarSetInputFocus.bind(_assertThisInitialized(_this));
    _this.calendarButtonClickHandler = _this.calendarButtonClickHandler.bind(_assertThisInitialized(_this));
    _this.addFlagOnClickEventClickHandler = _this.addFlagOnClickEventClickHandler.bind(_assertThisInitialized(_this));
    _this.globalClickHandler = _this.globalClickHandler.bind(_assertThisInitialized(_this));
    _this.escKeyHandler = _this.escKeyHandler.bind(_assertThisInitialized(_this));
    _this.datePickedHandler = _this.datePickedHandler.bind(_assertThisInitialized(_this));
    _this.divBlurHandler = _this.divBlurHandler.bind(_assertThisInitialized(_this));
    _this.onInputKeydown = _this.onInputKeydown.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onError = _this.onError.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Datepicker, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeGlobalEventListeners();
    }
    /* eslint-disable react/no-did-update-set-state */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var valueChangedAndDatepickerIsToggled = prevProps.value !== this.props.value && prevState.displayDatePicker && !this.state.displayDatePicker;

      if (this.props.minDate && this.props.minDate !== this.state.minDate || this.props.maxDate && this.props.maxDate !== this.state.maxDate) {
        this.setState({
          minDate: this.props.minDate,
          maxDate: this.props.maxDate
        }, this.validateDateIntervals);
      }

      if (valueChangedAndDatepickerIsToggled) {
        this.validateDateIntervals();
      }

      this.debounceCalendar(this.props.value);
    }
  }, {
    key: "onError",
    value: function onError(type) {
      var _this$props = this.props,
          language = _this$props.language,
          onError = _this$props.onError;
      var errorText = i18n[language][type];
      return onError ? onError(type, errorText) : errorText;
    }
  }, {
    key: "validateDateIntervals",
    value: function validateDateIntervals() {
      var _this2 = this;

      var nextState = {};
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          value = _this$props2.value,
          onValidationComplete = _this$props2.onValidationComplete;

      var error = function error(type) {
        var errorMessage = _this2.onError(type);

        nextState = {
          errorMessage: errorMessage,
          ariaInvalid: true
        };
      };

      SimpleDate.fromString(value, function (date) {
        nextState = {
          ariaInvalid: false
        };
        var formattedDate = date.format();

        if (formattedDate !== value) {
          onChange(formattedDate);
        }

        var minDate = SimpleDate.fromString(_this2.state.minDate);
        var maxDate = SimpleDate.fromString(_this2.state.maxDate);

        if (_this2.state.minDate && minDate && date.isBefore(minDate)) {
          error(dateErrorTypes.MIN_DATE);
        } else if (_this2.state.maxDate && maxDate && date.isAfter(maxDate)) {
          error(dateErrorTypes.MAX_DATE);
        }

        _this2.setState({
          lastValidDate: formattedDate
        });

        onValidationComplete(formattedDate);
      }, function (errorType) {
        var emptyValue = value === '';

        if (emptyValue && _this2.state.errorMessage) {
          nextState = {
            ariaInvalid: false,
            errorMessage: null
          };
          onValidationComplete(value);
          return;
        } else if (emptyValue) {
          nextState = _objectSpread({}, _this2.state);
          onValidationComplete(value);
          return;
        }

        error(errorType);
        onValidationComplete(value);
      });
      this.setState(nextState);
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur() {
      this.validateDateIntervals();
    }
  }, {
    key: "onInputKeydown",
    value: function onInputKeydown(evt) {
      if (evt.which === KeyCode.ENTER) {
        evt.preventDefault();
        this.validateDateIntervals();
      }
    }
  }, {
    key: "escKeyHandler",
    value: function escKeyHandler(evt) {
      if (evt.which === KeyCode.ESC) {
        this.closeCalendarSetInputFocus();
      }
    }
  }, {
    key: "globalClickHandler",
    value: function globalClickHandler(evt) {
      if (this.state.displayDatePicker && evt.__datepickerID !== this.datepickerId) {
        this.closeCalendar();
      }
    }
  }, {
    key: "calendarButtonClickHandler",
    value: function calendarButtonClickHandler() {
      this.validateDateIntervals();

      if (!this.state.displayDatePicker) {
        this.openCalendar();
      } else {
        this.closeCalendar();
      }
    }
    /**
     * Adds a flag on the click event so that the globalClickHandler()
     * can determine whether or not the ID matches. Makes it so that only one datepicker can be open at the same time
     */

  }, {
    key: "addFlagOnClickEventClickHandler",
    value: function addFlagOnClickEventClickHandler(evt) {
      // eslint-disable-next-line no-param-reassign
      evt.nativeEvent.__datepickerID = this.datepickerId;
    }
  }, {
    key: "divBlurHandler",
    value: function divBlurHandler(evt) {
      var isBluringWithDisplayDatePickerFalse = evt.target === this.dateInputRef._input && evt.currentTarget === this._datepickerNode && !this.state.displayDatePicker;

      if (isBluringWithDisplayDatePickerFalse) {
        this.removeGlobalEventListeners();
      }
    }
  }, {
    key: "datePickedHandler",
    value: function datePickedHandler(date) {
      var _this3 = this;

      this.props.onChange(date);
      this.props.onValidationComplete(date);
      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false,
        calendarActiveDate: date
      }, function () {
        return _this3.buttonRef.current.focus();
      });
    }
  }, {
    key: "openCalendar",
    value: function openCalendar() {
      this.setState({
        displayDatePicker: true
      });
      this.removeGlobalEventListeners();
      this.addGlobalEventListeners();
    }
  }, {
    key: "closeCalendar",
    value: function closeCalendar() {
      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false
      });
      this.validateDateIntervals();
    }
  }, {
    key: "closeCalendarSetInputFocus",
    value: function closeCalendarSetInputFocus() {
      var _this4 = this;

      this.removeGlobalEventListeners();
      this.setState({
        displayDatePicker: false
      }, function () {
        return _this4.buttonRef.current.focus();
      });
      this.validateDateIntervals();
    }
  }, {
    key: "addGlobalEventListeners",
    value: function addGlobalEventListeners() {
      window.addEventListener('click', this.globalClickHandler);
      window.addEventListener('keyup', this.escKeyHandler);
    }
  }, {
    key: "removeGlobalEventListeners",
    value: function removeGlobalEventListeners() {
      window.removeEventListener('click', this.globalClickHandler);
      window.removeEventListener('keyup', this.escKeyHandler);
    }
  }, {
    key: "ariaInvalid",
    value: function ariaInvalid() {
      var ariaInvalid = this.props['aria-invalid'] || this.props.ariaInvalid;
      return [null, undefined].every(function (val) {
        return val !== ariaInvalid;
      }) ? String(ariaInvalid) : String(this.state.ariaInvalid);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props3 = this.props,
          hideErrors = _this$props3.hideErrors,
          _this$props3$inputPro = _this$props3.inputProps,
          inputProps = _this$props3$inputPro === void 0 ? {} : _this$props3$inputPro,
          label = _this$props3.label,
          language = _this$props3.language,
          _onChange = _this$props3.onChange,
          value = _this$props3.value,
          fullWidth = _this$props3.fullWidth;
      var _this$state = this.state,
          minDate = _this$state.minDate,
          maxDate = _this$state.maxDate;

      if (this.state.ariaInvalid && !inputProps['aria-describedby']) {
        inputProps['aria-describedby'] = "date-input-validation-".concat(this.datepickerId);
      }

      var calendarClassName = classNames('ffe-calendar ffe-calendar--datepicker', {
        'ffe-calendar--datepicker--above': this.props.calendarAbove
      });
      var datepickerClassName = classNames('ffe-datepicker', {
        'ffe-datepicker--full-width': fullWidth
      });
      return /*#__PURE__*/React.createElement("div", null, label && /*#__PURE__*/React.createElement("label", {
        className: "ffe-form-label ffe-form-label--block",
        htmlFor: inputProps.id,
        id: "ffe-datepicker-label-".concat(this.datepickerId)
      }, label), /*#__PURE__*/React.createElement("div", {
        "aria-labelledby": label ? "ffe-datepicker-label-".concat(this.datepickerId) : undefined,
        role: "none",
        "aria-label": label ? undefined : i18n[language].CHOOSE_DATE,
        className: datepickerClassName,
        onClick: this.addFlagOnClickEventClickHandler,
        ref: function ref(c) {
          _this5._datepickerNode = c;
        },
        tabIndex: -1
      }, /*#__PURE__*/React.createElement("div", {
        className: "ffe-datepicker--wrapper"
      }, /*#__PURE__*/React.createElement(DateInput, {
        "aria-invalid": this.ariaInvalid(),
        inputProps: inputProps,
        onBlur: this.onInputBlur,
        onChange: function onChange(evt) {
          return _onChange(evt.target.value);
        },
        onKeyDown: this.onInputKeydown,
        ref: function ref(c) {
          _this5.dateInputRef = c;
        },
        value: value,
        fullWidth: fullWidth,
        language: language
      }), /*#__PURE__*/React.createElement(CalendarButton, {
        onClick: this.calendarButtonClickHandler,
        value: value,
        language: language,
        buttonRef: this.buttonRef
      })), this.state.displayDatePicker && /*#__PURE__*/React.createElement(Calendar, {
        calendarClassName: calendarClassName,
        escKeyHandler: this.escKeyHandler,
        language: language,
        maxDate: maxDate,
        minDate: minDate,
        onDatePicked: this.datePickedHandler,
        selectedDate: this.state.calendarActiveDate,
        onBlurHandler: this.blurHandler,
        ref: function ref(c) {
          _this5.datepickerCalendar = c;
        }
      })), this.state.ariaInvalid && !hideErrors && /*#__PURE__*/React.createElement("div", {
        id: "date-input-validation-".concat(this.datepickerId),
        className: "ffe-body-text ffe-field-error-message",
        role: "alert"
      }, this.state.errorMessage));
    }
  }]);

  return Datepicker;
}(Component);

export { Datepicker as default };
Datepicker.defaultProps = {
  language: 'nb',
  keepDisplayStateOnError: false,
  onValidationComplete: function onValidationComplete() {},
  fullWidth: false
};
Datepicker.propTypes = {
  'aria-invalid': string,
  ariaInvalid: oneOfType([bool, string]),
  calendarAbove: bool,
  hideErrors: bool,
  onValidationComplete: func,
  inputProps: shape({
    className: string,
    id: string
  }),
  label: string,
  language: string,
  maxDate: string,
  minDate: string,
  onChange: func.isRequired,
  onError: func,
  value: string.isRequired,
  keepDisplayStateOnError: bool,
  fullWidth: bool
};