'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Datepicker = require('@sb1/ffe-datepicker-react');
var ffeGridReact = require('@sb1/ffe-grid-react');
var ffeAccountSelectorReact = require('@sb1/ffe-account-selector-react');
var ffeFormReact = require('@sb1/ffe-form-react');
var ffeCoreReact = require('@sb1/ffe-core-react');
var formatCurrency = require('@sb1/ffe-formatters/lib/formatCurrency');
var formatFodselsnummer = require('@sb1/ffe-formatters/lib/formatFodselsnummer');
var formatPercentage = require('@sb1/ffe-formatters/lib/formatPercentage');
var formatNumber = require('@sb1/ffe-formatters/lib/formatNumber');
var formatAccountNumber = require('@sb1/ffe-formatters/lib/formatAccountNumber');
var formatDistance = require('@sb1/ffe-formatters/lib/formatDistance');
var formatDate = require('@sb1/ffe-formatters/lib/formatDate');
var Spinner = require('@sb1/ffe-spinner-react');
var ffeListsReact = require('@sb1/ffe-lists-react');
var Dropdown = require('@sb1/ffe-dropdown-react');
var SearchableDropdown = require('@sb1/ffe-searchable-dropdown-react');
var ffeMessageBoxReact = require('@sb1/ffe-message-box-react');
var ffeIconsReact = require('@sb1/ffe-icons-react');
var ffeButtonsReact = require('@sb1/ffe-buttons-react');
var Collapse = require('@sb1/ffe-collapse-react');
var ffeAccordionReact = require('@sb1/ffe-accordion-react');
var ffeTabsReact = require('@sb1/ffe-tabs-react');
var ffeCardsReact = require('@sb1/ffe-cards-react');
var ChartDonut = require('@sb1/ffe-chart-donut-react');
var Table = require('@sb1/ffe-tables-react');
var ffeContextMessageReact = require('@sb1/ffe-context-message-react');
var ffeDetailsListReact = require('@sb1/ffe-details-list-react');
var ffeSystemMessageReact = require('@sb1/ffe-system-message-react');
var FileUpload = require('@sb1/ffe-file-upload-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Datepicker__default = /*#__PURE__*/_interopDefaultLegacy(Datepicker);
var formatCurrency__default = /*#__PURE__*/_interopDefaultLegacy(formatCurrency);
var formatFodselsnummer__default = /*#__PURE__*/_interopDefaultLegacy(formatFodselsnummer);
var formatPercentage__default = /*#__PURE__*/_interopDefaultLegacy(formatPercentage);
var formatNumber__default = /*#__PURE__*/_interopDefaultLegacy(formatNumber);
var formatAccountNumber__default = /*#__PURE__*/_interopDefaultLegacy(formatAccountNumber);
var formatDistance__default = /*#__PURE__*/_interopDefaultLegacy(formatDistance);
var formatDate__default = /*#__PURE__*/_interopDefaultLegacy(formatDate);
var Spinner__default = /*#__PURE__*/_interopDefaultLegacy(Spinner);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var SearchableDropdown__default = /*#__PURE__*/_interopDefaultLegacy(SearchableDropdown);
var Collapse__default = /*#__PURE__*/_interopDefaultLegacy(Collapse);
var ChartDonut__default = /*#__PURE__*/_interopDefaultLegacy(ChartDonut);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table);
var FileUpload__default = /*#__PURE__*/_interopDefaultLegacy(FileUpload);

var packageList = [
	{
		name: "@sb1/ffe-accordion-react",
		version: "9.2.4",
		"private": false,
		location: "/packages/ffe-accordion-react"
	},
	{
		name: "@sb1/ffe-accordion",
		version: "8.0.8",
		"private": false,
		location: "/packages/ffe-accordion"
	},
	{
		name: "@sb1/ffe-account-selector-react",
		version: "18.2.10",
		"private": false,
		location: "/packages/ffe-account-selector-react"
	},
	{
		name: "@sb1/ffe-buttons-react",
		version: "14.0.5",
		"private": false,
		location: "/packages/ffe-buttons-react"
	},
	{
		name: "@sb1/ffe-buttons",
		version: "13.0.12",
		"private": false,
		location: "/packages/ffe-buttons"
	},
	{
		name: "@sb1/ffe-cards-react",
		version: "5.0.1",
		"private": false,
		location: "/packages/ffe-cards-react"
	},
	{
		name: "@sb1/ffe-cards",
		version: "12.0.8",
		"private": false,
		location: "/packages/ffe-cards"
	},
	{
		name: "@sb1/ffe-chart-donut-react",
		version: "4.0.0",
		"private": false,
		location: "/packages/ffe-chart-donut-react"
	},
	{
		name: "@sb1/ffe-collapse-react",
		version: "1.1.6",
		"private": false,
		location: "/packages/ffe-collapse-react"
	},
	{
		name: "@sb1/ffe-context-message-react",
		version: "5.2.4",
		"private": false,
		location: "/packages/ffe-context-message-react"
	},
	{
		name: "@sb1/ffe-context-message",
		version: "5.0.15",
		"private": false,
		location: "/packages/ffe-context-message"
	},
	{
		name: "@sb1/ffe-core-react",
		version: "4.2.5",
		"private": false,
		location: "/packages/ffe-core-react"
	},
	{
		name: "@sb1/ffe-core",
		version: "19.3.2",
		"private": false,
		location: "/packages/ffe-core"
	},
	{
		name: "@sb1/ffe-datepicker-react",
		version: "5.0.32",
		"private": false,
		location: "/packages/ffe-datepicker-react"
	},
	{
		name: "@sb1/ffe-datepicker",
		version: "10.0.14",
		"private": false,
		location: "/packages/ffe-datepicker"
	},
	{
		name: "@sb1/ffe-decorators-react",
		version: "3.0.3",
		"private": false,
		location: "/packages/ffe-decorators-react"
	},
	{
		name: "@sb1/ffe-details-list-react",
		version: "3.0.47",
		"private": false,
		location: "/packages/ffe-details-list-react"
	},
	{
		name: "@sb1/ffe-details-list",
		version: "10.0.8",
		"private": false,
		location: "/packages/ffe-details-list"
	},
	{
		name: "@sb1/ffe-dropdown-react",
		version: "5.1.7",
		"private": false,
		location: "/packages/ffe-dropdown-react"
	},
	{
		name: "@sb1/ffe-file-upload-react",
		version: "5.0.4",
		"private": false,
		location: "/packages/ffe-file-upload-react"
	},
	{
		name: "@sb1/ffe-file-upload",
		version: "6.0.10",
		"private": false,
		location: "/packages/ffe-file-upload"
	},
	{
		name: "@sb1/ffe-form-react",
		version: "8.2.0",
		"private": false,
		location: "/packages/ffe-form-react"
	},
	{
		name: "@sb1/ffe-form",
		version: "19.1.2",
		"private": false,
		location: "/packages/ffe-form"
	},
	{
		name: "@sb1/ffe-formatters",
		version: "4.0.1",
		"private": false,
		location: "/packages/ffe-formatters"
	},
	{
		name: "@sb1/ffe-grid-react",
		version: "11.0.0",
		"private": false,
		location: "/packages/ffe-grid-react"
	},
	{
		name: "@sb1/ffe-grid",
		version: "12.0.5",
		"private": false,
		location: "/packages/ffe-grid"
	},
	{
		name: "@sb1/ffe-header",
		version: "17.0.14",
		"private": false,
		location: "/packages/ffe-header"
	},
	{
		name: "@sb1/ffe-icons-react",
		version: "7.2.19",
		"private": false,
		location: "/packages/ffe-icons-react"
	},
	{
		name: "@sb1/ffe-icons",
		version: "12.15.3",
		"private": false,
		location: "/packages/ffe-icons"
	},
	{
		name: "@sb1/ffe-lists-react",
		version: "5.0.3",
		"private": false,
		location: "/packages/ffe-lists-react"
	},
	{
		name: "@sb1/ffe-lists",
		version: "10.0.12",
		"private": false,
		location: "/packages/ffe-lists"
	},
	{
		name: "@sb1/ffe-message-box-react",
		version: "7.0.1",
		"private": false,
		location: "/packages/ffe-message-box-react"
	},
	{
		name: "@sb1/ffe-message-box",
		version: "9.0.1",
		"private": false,
		location: "/packages/ffe-message-box"
	},
	{
		name: "@sb1/ffe-sb1-logos",
		version: "1.1.3",
		"private": false,
		location: "/packages/ffe-sb1-logos"
	},
	{
		name: "@sb1/ffe-searchable-dropdown-react",
		version: "13.3.10",
		"private": false,
		location: "/packages/ffe-searchable-dropdown-react"
	},
	{
		name: "@sb1/ffe-spinner-react",
		version: "5.1.0",
		"private": false,
		location: "/packages/ffe-spinner-react"
	},
	{
		name: "@sb1/ffe-spinner",
		version: "4.1.1",
		"private": false,
		location: "/packages/ffe-spinner"
	},
	{
		name: "@sb1/ffe-system-message-react",
		version: "6.2.9",
		"private": false,
		location: "/packages/ffe-system-message-react"
	},
	{
		name: "@sb1/ffe-system-message",
		version: "6.0.12",
		"private": false,
		location: "/packages/ffe-system-message"
	},
	{
		name: "@sb1/ffe-tables-react",
		version: "6.0.27",
		"private": false,
		location: "/packages/ffe-tables-react"
	},
	{
		name: "@sb1/ffe-tables",
		version: "12.0.9",
		"private": false,
		location: "/packages/ffe-tables"
	},
	{
		name: "@sb1/ffe-tabs-react",
		version: "5.0.7",
		"private": false,
		location: "/packages/ffe-tabs-react"
	},
	{
		name: "@sb1/ffe-tabs",
		version: "11.0.10",
		"private": false,
		location: "/packages/ffe-tabs"
	},
	{
		name: "@sb1/ffe-webfonts",
		version: "3.0.1",
		"private": false,
		location: "/packages/ffe-webfonts"
	}
];

var reactdoc = {
	"ffe-accordion-react/src/AccordionItem.js": {
	description: "",
	methods: [
	]
},
	"ffe-accordion-react/src/Accordion.js": {
	description: "",
	displayName: "Accordion",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Accordion items"
		},
		headingLevel: {
			type: {
				name: "enum",
				value: [
					{
						value: "1",
						computed: false
					},
					{
						value: "2",
						computed: false
					},
					{
						value: "3",
						computed: false
					},
					{
						value: "4",
						computed: false
					},
					{
						value: "5",
						computed: false
					},
					{
						value: "6",
						computed: false
					}
				]
			},
			required: true,
			description: "The level of headings in the AccordionItems"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Class assigned the container"
		}
	}
},
	"ffe-account-selector-react/src/components/account-selector-multi/AccountSelectorMulti.js": {
	description: "",
	displayName: "AccountSelectorMulti",
	methods: [
		{
			name: "filterSuggestions",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "value",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onSuggestionSelect",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestion",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "account",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onDone",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderSuggestionDetails",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "listHeight",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onKeyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		accounts: {
			type: {
				name: "arrayOf",
				value: {
					name: "custom",
					raw: "Account"
				}
			},
			required: false,
			description: "Array of objects:\n {\n     accountNumber: string.isRequired,\n     balance: number,\n     currencyCode: string.\n     name: string.isRequired,\n }"
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: "'nb', 'nn', or 'en'"
		},
		noMatches: {
			type: {
				name: "string"
			},
			required: false,
			description: "Overrides default string for all locales."
		},
		onAccountSelected: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when an account is clicked"
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelectAll: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		selectedAccounts: {
			type: {
				name: "arrayOf",
				value: {
					name: "custom",
					raw: "Account"
				}
			},
			required: false,
			description: "Array of objects:\n {\n     accountNumber: string.isRequired,\n     balance: number,\n     currencyCode: string.\n     name: string.isRequired,\n }",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		showSelectAllOption: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		highCapacity: {
			type: {
				name: "bool"
			},
			required: false,
			description: "For situations where AccountSelector might be populated with hundreds of accounts\nuses react-window for performance optimization, default false"
		}
	}
},
	"ffe-account-selector-react/src/components/base-selector/BaseSelector.js": {
	description: "",
	displayName: "BaseSelector",
	methods: [
		{
			name: "_onSuggestionListChange",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getSuggestionListHeight",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getInputHeight",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputChange",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "val",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onClick",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputReset",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "showOrHideSuggestions",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "show",
					type: null
				},
				{
					name: "cb",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setNextHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setPreviousHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setFirstHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setLastHighlighted",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputKeyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		suggestionFilter: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "''",
				computed: false
			}
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		shouldHideSuggestionsOnSelect: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldSelectHighlightedOnTab: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldHideSuggestionsOnBlur: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldHideSuggestionsOnReset: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		shouldShowSuggestionsOnFocus: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		onSuggestionSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onReset: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onFocus: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		onSuggestionListChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "Function.prototype",
				computed: true
			}
		},
		placeholder: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "''",
				computed: false
			}
		},
		ariaInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		suggestionsHeightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		readOnly: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		highCapacity: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionList.js": {
	description: "",
	displayName: "SuggestionList",
	methods: [
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		renderSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderNoMatches: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		refList: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		height: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		itemSize: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "55",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionListStatusBar.js": {
	description: "",
	displayName: "StatusBar",
	methods: [
	],
	props: {
		onDone: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderSelectionStatus: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		labelDoneButton: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionListContainer.js": {
	description: "",
	displayName: "SuggestionListContainer",
	methods: [
		{
			name: "refHighlightedSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestionEl",
					type: null
				}
			],
			returns: null
		},
		{
			name: "_setScrollPos",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "pos",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setScrollPosStart",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosEnd",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosNext",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosPrevious",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "handleScroll",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "{ target }",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		heightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		autoHeight: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion-high-capacity/SuggestionItem.js": {
	description: "",
	displayName: "SuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		render: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		refHighlightedSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/input-field/InputField.js": {
	description: "",
	displayName: "InputField",
	methods: [
	],
	props: {
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onReset: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		isSuggestionsShowing: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		readOnly: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		placeholder: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onFocus: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		inputFieldRef: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		suggestionListId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountSuggestion.js": {
	description: "",
	displayName: "AccountSuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountSuggestionMulti.js": {
	description: "",
	displayName: "AccountSuggestionMulti",
	methods: [
	],
	props: {
		account: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountNoMatch.js": {
	description: "",
	displayName: "AccountNoMatch",
	methods: [
	],
	props: {
		value: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/account/AccountDetails.js": {
	description: "",
	displayName: "AccountDetails",
	methods: [
	],
	props: {
		account: {
			type: {
				name: "custom",
				raw: "Account.isRequired"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "custom",
				raw: "Locale.isRequired"
			},
			required: false,
			description: ""
		},
		showBalance: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionList.js": {
	description: "",
	displayName: "SuggestionList",
	methods: [
	],
	props: {
		suggestions: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		renderSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderNoMatches: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionListStatusBar.js": {
	description: "",
	displayName: "StatusBar",
	methods: [
	],
	props: {
		onDone: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		renderSelectionStatus: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		labelDoneButton: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionListContainer.js": {
	description: "",
	displayName: "SuggestionListContainer",
	methods: [
		{
			name: "refHighlightedSuggestion",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "suggestionEl",
					type: null
				}
			],
			returns: null
		},
		{
			name: "_setScrollPos",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "pos",
					type: null
				}
			],
			returns: null
		},
		{
			name: "setScrollPosStart",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosEnd",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosNext",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "setScrollPosPrevious",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		heightMax: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		autoHeight: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-account-selector-react/src/subcomponents/suggestion/SuggestionItem.js": {
	description: "",
	displayName: "SuggestionItem",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		id: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		},
		render: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onSelect: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		refHighlightedSuggestion: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-buttons-react/src/TaskButton.js": {
	description: "",
	displayName: "TaskButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "Task icon, show to the left of the label"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		}
	}
},
	"ffe-buttons-react/src/ExpandButton.js": {
	description: "",
	displayName: "ExpandButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		closeLabel: {
			type: {
				name: "string"
			},
			required: false,
			description: "An accessible label for the close-button, only shown in the \"isExpanded\" state",
			defaultValue: {
				value: "'Lukk'",
				computed: false
			}
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isExpanded: {
			type: {
				name: "bool"
			},
			required: true,
			description: "When true the component will render a circle with an X indicating whatever is controlled is in an expanded state."
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: "Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding."
		}
	}
},
	"ffe-buttons-react/src/PrimaryButton.js": {
	description: "",
	displayName: "PrimaryButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/InlineBaseButton.js": {
	description: "Internal component\n@ignore",
	displayName: "InlineBaseButton",
	methods: [
	],
	props: {
		buttonType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'tertiary'",
						computed: false
					},
					{
						value: "'back'",
						computed: false
					},
					{
						value: "'expand'",
						computed: false
					}
				]
			},
			required: false,
			description: "Enum of supported prop types. Used internally only.\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "func"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/ActionButton.js": {
	description: "",
	displayName: "ActionButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		ghost: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the ghost modifier if true.",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/ButtonGroup.js": {
	description: "",
	displayName: "ButtonGroup",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class name applied in addition to the FFE classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the inline modifier to make all child buttons inline"
		}
	}
},
	"ffe-buttons-react/src/TertiaryButton.js": {
	description: "",
	displayName: "TertiaryButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/InlineExpandButton.js": {
	description: "",
	displayName: "InlineExpandButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Text that should reflect the isExpanded state."
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isExpanded: {
			type: {
				name: "bool"
			},
			required: true,
			description: "When true it will indicate the button is in its open state"
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: "Listen for clicks to toggle the isExpanded state."
		}
	}
},
	"ffe-buttons-react/src/BackButton.js": {
	description: "",
	displayName: "BackButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		}
	}
},
	"ffe-buttons-react/src/SecondaryButton.js": {
	description: "",
	displayName: "SecondaryButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/BaseButton.js": {
	description: "Internal component",
	displayName: "BaseButton",
	methods: [
	],
	props: {
		ariaLoadingMessage: {
			type: {
				name: "string"
			},
			required: false,
			description: "Aria label for loading indicator",
			defaultValue: {
				value: "'Vennligst vent'",
				computed: false
			}
		},
		buttonType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'action'",
						computed: false
					},
					{
						value: "'primary'",
						computed: false
					},
					{
						value: "'secondary'",
						computed: false
					},
					{
						value: "'shortcut'",
						computed: false
					},
					{
						value: "'task'",
						computed: false
					}
				]
			},
			required: false,
			description: "Enum of supported prop types. Used internally only.\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`",
			defaultValue: {
				value: "'button'",
				computed: false
			}
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		isLoading: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Shows a loader if true"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		},
		rightIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the right of the label"
		}
	}
},
	"ffe-buttons-react/src/ShortcutButton.js": {
	description: "",
	displayName: "ShortcutButton",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The button label"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Extra class names"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable a button in certain situations"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like an `<a />` or `<Link />`"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the button element"
		},
		leftIcon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Icon shown to the left of the label"
		}
	}
},
	"ffe-cards-react/src/components/Text.js": {
	description: "",
	displayName: "Text",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/Title.js": {
	description: "",
	displayName: "Title",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		overflowEllipsis: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Disable wrapping and hide overflow with ellipsis",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-cards-react/src/components/CardName.js": {
	description: "",
	displayName: "CardName",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/Subtext.js": {
	description: "",
	displayName: "Subtext",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/components/ComponentBase.js": {
	description: "",
	displayName: "ComponentBase",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'p'",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-cards-react/src/CardBase.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		}
	}
},
	"ffe-cards-react/src/ImageCard/ImageCard.js": {
	description: "",
	displayName: "ImageCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		image: {
			type: {
				name: "node"
			},
			required: true,
			description: "A rendered image"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-cards-react/src/IconCard/IconCard.js": {
	description: "",
	displayName: "IconCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "A rendered icon"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Smaller icon and less space"
		},
		greyCharcoal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Icon and text will all be ffe-grey-charcoal"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-cards-react/src/TextCard/TextCard.js": {
	description: "",
	displayName: "TextCard",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		leftAlign: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Left-aligned text on the card"
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The element to render the card as"
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "Function that's passed available sub-components as arguments, or regular children"
		}
	}
},
	"ffe-chart-donut-react/src/ChartDonut.js": {
	description: "",
	displayName: "ChartDonut",
	methods: [
	],
	props: {
		firstLabel: {
			type: {
				name: "string"
			},
			required: false,
			description: "Short text labeling left value, like \"empty\", \"said yes\" etc"
		},
		lastLabel: {
			type: {
				name: "string"
			},
			required: false,
			description: "Short text labeling right value, like \"full\", \"said no\" etc"
		},
		label: {
			type: {
				name: "node"
			},
			required: false,
			description: "React node to be inserted directly under the chart's name, alternative to first/last label"
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "Short text labeling the graph in total, like \"percentage\", \"voted this year\" etc"
		},
		percentage: {
			type: {
				name: "number"
			},
			required: true,
			description: "The percentage for the right-most value"
		}
	}
},
	"ffe-collapse-react/src/Collapse.js": {
	description: "",
	displayName: "Collapse",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		isOpen: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onRest: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-context-message-react/src/ContextErrorMessage.js": {
	description: "",
	displayName: "ContextErrorMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content shown in the context box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Classes are added in addition to the relevant context message classes"
		},
		compact: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Renders a more compact version of the context message",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		contentElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the children container"
		},
		header: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		headerElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the header container"
		},
		icon: {
			type: {
				name: "element"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "acceptedLocales"
			},
			required: false,
			description: "Decides the language of the aria-label for the close icon",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		messageType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'tip'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: false,
			description: "Provided by the wrapper component"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the context message has been closed (after the animation)",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		showCloseButton: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: "Styles applied to the outermost element. `height` will be overridden",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-context-message-react/src/ContextInfoMessage.js": {
	description: "",
	displayName: "ContextInfoMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextSuccessMessage.js": {
	description: "",
	displayName: "ContextSuccessMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextTipMessage.js": {
	description: "",
	displayName: "ContextTipMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextMessage.js": {
	description: "Base component for all four types of context messages.\n\n*Should never be used directly!*\nPlease use one of the four versions exported from this package.",
	displayName: "ContextMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content shown in the context box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Classes are added in addition to the relevant context message classes"
		},
		compact: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Renders a more compact version of the context message",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		contentElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the children container"
		},
		headerText: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		headerElementId: {
			type: {
				name: "string"
			},
			required: false,
			description: "ID for the header container"
		},
		headerElement: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		icon: {
			type: {
				name: "element"
			},
			required: false,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "acceptedLocales"
			},
			required: false,
			description: "Decides the language of the aria-label for the close icon",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		messageType: {
			type: {
				name: "enum",
				value: [
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'tip'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: false,
			description: "Provided by the wrapper component"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the context message has been closed (after the animation)",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		showCloseButton: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		style: {
			type: {
				name: "object"
			},
			required: false,
			description: "Styles applied to the outermost element. `height` will be overridden",
			defaultValue: {
				value: "{}",
				computed: false
			}
		}
	}
},
	"ffe-core-react/src/typography/StrongText.js": {
	description: "",
	displayName: "StrongText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/SmallText.js": {
	description: "",
	displayName: "SmallText",
	methods: [
	],
	props: {
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'span'",
				computed: false
			}
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/LinkText.js": {
	description: "",
	displayName: "LinkText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "string"
					},
					{
						name: "custom",
						raw: "elementType"
					}
				]
			},
			required: false,
			description: "The rendered element, like a `react-router` `<Link />`",
			defaultValue: {
				value: "'a'",
				computed: false
			}
		},
		underline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-core-react/src/typography/DividerLine.js": {
	description: "",
	displayName: "DividerLine",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/EmphasizedText.js": {
	description: "",
	displayName: "EmphasizedText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/MicroText.js": {
	description: "",
	displayName: "MicroText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/PreformattedText.js": {
	description: "",
	displayName: "PreformattedText",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-core-react/src/typography/Paragraph.js": {
	description: "",
	displayName: "Paragraph",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		lead: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes this paragraph a lead paragraph, typically used directly below a heading."
		},
		subLead: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes this paragraph a sub-lead paragraph, typically used directly below a lead paragraph."
		},
		textCenter: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Use if text alignment should override that of its container."
		},
		textLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Use if text alignment should override that of its container."
		}
	}
},
	"ffe-datepicker-react/src/datepicker/Datepicker.js": {
	description: "",
	displayName: "Datepicker",
	methods: [
		{
			name: "onError",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "type",
					type: null
				}
			],
			returns: null
		},
		{
			name: "validateDateIntervals",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputBlur",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onInputKeydown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "escKeyHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "globalClickHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "calendarButtonClickHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "addFlagOnClickEventClickHandler",
			docblock: "Adds a flag on the click event so that the globalClickHandler()\ncan determine whether or not the ID matches. Makes it so that only one datepicker can be open at the same time",
			modifiers: [
			],
			params: [
				{
					name: "evt"
				}
			],
			returns: null,
			description: "Adds a flag on the click event so that the globalClickHandler()\ncan determine whether or not the ID matches. Makes it so that only one datepicker can be open at the same time"
		},
		{
			name: "divBlurHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "datePickedHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				}
			],
			returns: null
		},
		{
			name: "openCalendar",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "closeCalendar",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "closeCalendarSetInputFocus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "addGlobalEventListeners",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "removeGlobalEventListeners",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "ariaInvalid",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		"aria-invalid": {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: ""
		},
		calendarAbove: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		hideErrors: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onValidationComplete: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		inputProps: {
			type: {
				name: "shape",
				value: {
					className: {
						name: "string",
						required: false
					},
					id: {
						name: "string",
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		label: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		maxDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		minDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onError: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		keepDisplayStateOnError: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		fullWidth: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-datepicker-react/src/calendar/NonClickableDate.js": {
	description: "",
	displayName: "NonClickableDate",
	methods: [
	],
	props: {
		date: {
			type: {
				name: "shape",
				value: {
					timestamp: {
						name: "number",
						required: true
					}
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/Header.js": {
	description: "",
	displayName: "Header",
	methods: [
	],
	props: {
		datepickerId: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		month: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		nextMonthHandler: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		nextMonthLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		previousMonthHandler: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		previousMonthLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		year: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		prevMonthButtonElement: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		nextMonthButtonElement: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/ClickableDate.js": {
	description: "",
	displayName: "ClickableDate",
	methods: [
		{
			name: "focusIfNeeded",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "dateClassName",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "tabIndex",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		date: {
			type: {
				name: "shape",
				value: {
					date: {
						name: "union",
						value: [
							{
								name: "func"
							},
							{
								name: "number"
							}
						],
						required: false
					},
					isEnabled: {
						name: "bool",
						required: false
					},
					isFocus: {
						name: "bool",
						required: false
					},
					isSelected: {
						name: "bool",
						required: false
					},
					isToday: {
						name: "bool",
						required: false
					}
				}
			},
			required: true,
			description: ""
		},
		month: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		year: {
			type: {
				name: "number"
			},
			required: true,
			description: ""
		},
		headers: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		dateButtonRef: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		isFocusingHeader: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/calendar/Calendar.js": {
	description: "",
	displayName: "Calendar",
	methods: [
		{
			name: "keyDown",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "mouseClick",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				}
			],
			returns: null
		},
		{
			name: "focusHandler",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "wrapperBlurHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "nextMonth",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "previousMonth",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderDate",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "date",
					type: null
				},
				{
					name: "index",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderWeek",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "week",
					type: null
				}
			],
			returns: null
		},
		{
			name: "renderDay",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "day",
					type: null
				},
				{
					name: "index",
					type: null
				}
			],
			returns: null
		},
		{
			name: "focusTrap",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		calendarClassName: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		escKeyHandler: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		maxDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		minDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		onBlurHandler: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onDatePicked: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		selectedDate: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/input/Input.js": {
	description: "",
	displayName: "Input",
	methods: [
		{
			name: "focus",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "inputClassNames",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "extraClassNames",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		"aria-invalid": {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ariaInvalid: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: ""
		},
		inputProps: {
			type: {
				name: "shape",
				value: {
					className: {
						name: "string",
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		onBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		fullWidth: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		language: {
			type: {
				name: "enum",
				value: [
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					},
					{
						value: "'en'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-datepicker-react/src/button/Button.js": {
	description: "",
	displayName: "Button",
	methods: [
	],
	props: {
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		language: {
			type: {
				name: "string"
			},
			required: true,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		buttonRef: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-details-list-react/src/DetailList.js": {
	description: "",
	displayName: "DetailList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "A set of `Detail` components where each will be rendered as a row item"
		}
	}
},
	"ffe-details-list-react/src/DetailContent.js": {
	description: "",
	displayName: "DetailContent",
	methods: [
	],
	props: {
		childCount: {
			type: {
				name: "number"
			},
			required: false,
			description: "Internal prop used for knowing the total amount of columns, provided by `Detail`\n@ignore"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The contents of the column"
		},
		index: {
			type: {
				name: "number"
			},
			required: false,
			description: "Internal prop used for knowing which column is being rendered, provided by `Detail`\n@ignore"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any CSS classes that should be included on the rendered content"
		},
		cta: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicate if this should be rendered as a call to action and moved to the end of the row\n@ignore"
		}
	}
},
	"ffe-details-list-react/src/Detail.js": {
	description: "",
	displayName: "Detail",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "A set of `DetailsContent` components to render for this row"
		},
		label: {
			type: {
				name: "string"
			},
			required: true,
			description: "A label for the data"
		}
	}
},
	"ffe-dropdown-react/src/Dropdown.js": {
	description: "",
	displayName: "Dropdown",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the select element"
		}
	}
},
	"ffe-file-upload-react/src/FileItem.js": {
	description: "",
	displayName: "FileItem",
	methods: [
	],
	props: {
		file: {
			type: {
				name: "shape",
				value: {
					name: {
						name: "custom",
						raw: "stringType.isRequired",
						required: true
					},
					document: {
						name: "object",
						required: false
					},
					error: {
						name: "custom",
						raw: "stringType",
						required: false
					}
				}
			},
			required: true,
			description: "Shape of the file type, name is required, error and document.content is optional"
		},
		onFileDeleted: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when the user clicks the delete button for a given file. Is called with the name of the file in question."
		},
		cancelText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the cancel button"
		},
		deleteText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the delete button"
		}
	}
},
	"ffe-file-upload-react/src/FileUpload.js": {
	description: "",
	displayName: "FileUpload",
	methods: [
		{
			name: "setFileInputElement",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "element",
					type: null
				}
			],
			returns: null
		},
		{
			name: "triggerUploadFileNativeHandler",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "onFilesSelected",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFilesDropped",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "onFileDeleted",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		id: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "ID for the input field. The ID is used as a base for the label ID as well."
		},
		label: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Label for the button to trigger native upload handling."
		},
		files: {
			type: {
				name: "object"
			},
			required: true,
			description: "A map of files, indexed by file name (check file-shape on FileItem.js propTypes), that the user has uploaded.\nMust be maintained outside of `FileUpload`. It is up to the implementation to deny or accept file types, sizes, etc,\nand it is important that duplicates are not allowed."
		},
		onFilesSelected: {
			type: {
				name: "func"
			},
			required: true,
			description: "Will be called with `FileList`-object containing the `File`-objects the user selected.\nSee MDN for documentation on\n[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) and\n[File](https://developer.mozilla.org/en-US/docs/Web/API/File)."
		},
		onFilesDropped: {
			type: {
				name: "func"
			},
			required: true,
			description: "Will be called when objects are dropped over the upload-section."
		},
		onFileDeleted: {
			type: {
				name: "func"
			},
			required: true,
			description: "Called when the user clicks the delete button for a given file. Is called with the `File`\nobject of the file in question."
		},
		multiple: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not uploading multiple files at once via the native file handler is allowed"
		},
		title: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Title module"
		},
		infoText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Text on the info-section"
		},
		infoSubText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Subtext on the info-section"
		},
		cancelText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the cancel button"
		},
		deleteText: {
			type: {
				name: "custom",
				raw: "stringType"
			},
			required: false,
			description: "Label for the delete button"
		},
		uploadTitle: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "Title on the upload-section"
		},
		uploadMicroText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "MicroText on the upload-section"
		},
		uploadSubText: {
			type: {
				name: "custom",
				raw: "stringType.isRequired"
			},
			required: false,
			description: "SubText on the upload-section"
		}
	}
},
	"ffe-form-react/src/BaseFieldMessage.js": {
	description: "Internal factory component\n@ignore",
	displayName: "BaseFieldMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		type: {
			type: {
				name: "enum",
				value: [
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					}
				]
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-form-react/src/TextArea.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-form-react/src/Tooltip.js": {
	description: "",
	displayName: "Tooltip",
	methods: [
		{
			name: "onToggle",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "evt",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		"aria-controls": {
			type: {
				name: "string"
			},
			required: false,
			description: "Provide the id of the controlled element *unless* you're sending in children"
		},
		"aria-label": {
			type: {
				name: "string"
			},
			required: false,
			description: "Descriptive text for the Tooltip expand icon",
			defaultValue: {
				value: "'Vis hjelpetekst'",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The children are rendered in the expanded tooltip."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "The className is set on the root node of the expanded tooltip."
		},
		isOpen: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: "Optional listener for clicks on the tooltip button. Is passed the event object."
		},
		tabIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: "Sets the tabIndex of the tooltip button."
		}
	}
},
	"ffe-form-react/src/RadioButton.js": {
	description: "",
	displayName: "RadioButton",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicates whether the radio button is rendered inline or as a block"
		}
	}
},
	"ffe-form-react/src/RadioButtonInputGroup.js": {
	description: "",
	displayName: "RadioButtonInputGroup",
	methods: [
	],
	props: {
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\ninvalid or not. Propagated to all children."
		},
		children: {
			type: {
				name: "func"
			},
			required: true,
			description: "Function receiving props relevant to each radio button as an object\nargument. Expected to return a set of radio buttons, which should get\nthese properties applied to them."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the fieldset"
		},
		description: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "To just render a static, always visible tooltip, use this."
		},
		extraMargin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		fieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "String or ErrorFieldMessage component with message"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\nrendered inline or as a block."
		},
		label: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "The text describing the radio button set. Note that if you don't use this\nprop but provide your own label you should make sure your solution passes\nacessibility validation using a tool such as aXe DevTools."
		},
		name: {
			type: {
				name: "string"
			},
			required: false,
			description: "The name of the radio button"
		},
		onChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "Change handler, receives value of selected radio button"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The currently selected value"
		},
		tooltip: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: false,
			description: "String or Tooltip component with further detail about the radio button\nset"
		}
	}
},
	"ffe-form-react/src/RadioBlock.js": {
	description: "",
	displayName: "RadioBlock",
	methods: [
	],
	props: {
		checked: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not the radio block is selected"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content rendered when choice is selected"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the outer div"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		label: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "string"
					}
				]
			},
			required: true,
			description: "The always visible label of the radio block"
		},
		labelClass: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label element"
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "The name of the radio button set"
		},
		selectedValue: {
			type: {
				name: "string"
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		showChildren: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not children are always visible"
		},
		value: {
			type: {
				name: "string"
			},
			required: true,
			description: "The value of the radio block"
		}
	}
},
	"ffe-form-react/src/ErrorFieldMessage.js": {
	description: "",
	displayName: "ErrorFieldMessage",
	methods: [
	]
},
	"ffe-form-react/src/Checkbox.js": {
	description: "",
	methods: [
	],
	props: {
		noMargins: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Removes vertical margins from the checkbox"
		},
		hiddenLabel: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If you plan to render the checkbox without a visible label"
		},
		id: {
			type: {
				name: "string"
			},
			required: false,
			description: "Override the automatically generated ID"
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		children: {
			type: {
				name: "union",
				value: [
					{
						name: "node"
					},
					{
						name: "func"
					}
				]
			},
			required: false,
			description: "The label for the checkbox"
		}
	}
},
	"ffe-form-react/src/SuccessFieldMessage.js": {
	description: "",
	displayName: "SuccessFieldMessage",
	methods: [
	]
},
	"ffe-form-react/src/Input.js": {
	description: "",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		inline: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Input fields default to `display: block;`. Set this to `true` to apply the inline modifier."
		},
		textLike: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Apply the text-like modifier by setting this to `true`."
		},
		textRightAlign: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Make the text right aligned"
		}
	}
},
	"ffe-form-react/src/BaseRadioButton.js": {
	description: "",
	displayName: "BaseRadioButton",
	methods: [
	],
	props: {
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio button is invalid or not"
		},
		checked: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Whether or not the radio button is selected"
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The label of the radio button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to the label"
		},
		labelProps: {
			type: {
				name: "shape",
				value: {
				}
			},
			required: false,
			description: "Additional props passed to the label element",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		name: {
			type: {
				name: "string"
			},
			required: true,
			description: "The name of the radio button"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		tooltip: {
			type: {
				name: "string"
			},
			required: false,
			description: "Tooltip providing further detail about the choice"
		},
		tooltipProps: {
			type: {
				name: "shape",
				value: {
				}
			},
			required: false,
			description: "Additional props passed to the Tooltip component",
			defaultValue: {
				value: "{}",
				computed: false
			}
		},
		value: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the radio button"
		},
		innerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		}
	}
},
	"ffe-form-react/src/Label.js": {
	description: "",
	displayName: "Label",
	methods: [
	],
	props: {
		block: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Labels default to `display: inline-block;` to have tooltips appear immediately to the right.\nSet this to `true` if you don't use tooltips and need the label to be `display: block;`."
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		htmlFor: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-form-react/src/RadioSwitch.js": {
	description: "",
	displayName: "RadioSwitch",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional class names applied to both radio buttons"
		},
		leftLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "The label of the choice to the left"
		},
		leftValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the choice to the left"
		},
		leftInnerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		rightLabel: {
			type: {
				name: "string"
			},
			required: true,
			description: "The label of the choice to the right"
		},
		rightValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: true,
			description: "The value of the choice to the right"
		},
		rightInnerRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the input element"
		},
		selectedValue: {
			type: {
				name: "union",
				value: [
					{
						name: "bool"
					},
					{
						name: "string"
					},
					{
						name: "number"
					}
				]
			},
			required: false,
			description: "The selected value of the radio button set"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		},
		"aria-invalid": {
			type: {
				name: "enum",
				value: [
					{
						value: "'true'",
						computed: false
					},
					{
						value: "'false'",
						computed: false
					}
				]
			},
			required: false,
			description: "Indicates whether the radio buttons inside this radio button group is\ninvalid or not. Propagated to all children."
		}
	}
},
	"ffe-form-react/src/PhoneNumber.js": {
	description: "",
	displayName: "PhoneNumber",
	methods: [
	],
	props: {
		number: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		countryCode: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'47'",
				computed: false
			}
		},
		onCountryCodeChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onNumberChange: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onCountryCodeBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		onNumberBlur: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		locale: {
			type: {
				name: "string"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		disabled: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		countryCodeFieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "String or ErrorFieldMessage component with message"
		},
		numberFieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "String or ErrorFieldMessage component with message"
		},
		countryCodeAndNumberFieldMessage: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: "String or ErrorFieldMessage component with message,\nthis should should be set when both countryCode and number is in an invalid state.\nIf both countryCodeFieldMessage and numberFieldMessage is set and not this prop,\nthe component will throw an Error."
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		extraMargin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reserve space for showing `fieldMessage`s so content below don't move\n vertically if an errormessage shows up. Note that this will only reserve\n space for one line of content, so keep messages short.",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		countryCodeRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the country code input element"
		},
		numberRef: {
			type: {
				name: "union",
				value: [
					{
						name: "func"
					},
					{
						name: "shape",
						value: {
							current: {
								name: "object",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Ref-setting function, or ref created by useRef, passed to the number input element"
		}
	}
},
	"ffe-form-react/src/InfoFieldMessage.js": {
	description: "",
	displayName: "InfoFieldMessage",
	methods: [
	]
},
	"ffe-grid-react/src/GridRow.js": {
	description: "",
	displayName: "GridRow",
	methods: [
	],
	props: {
		background: {
			type: {
				name: "enum",
				value: [
					{
						value: "'frost-30'",
						computed: false
					},
					{
						value: "'sand'",
						computed: false
					},
					{
						value: "'sand-70'",
						computed: false
					},
					{
						value: "'sand-30'",
						computed: false
					},
					{
						value: "'syrin-70'",
						computed: false
					},
					{
						value: "'syrin-30'",
						computed: false
					},
					{
						value: "'vann'",
						computed: false
					},
					{
						value: "'fjell'",
						computed: false
					},
					{
						value: "'hvit'",
						computed: false
					}
				]
			},
			required: false,
			description: "Supported background colors"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid__row classes"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "All children of a `<GridRow />` must be `<GridCol />`."
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the GridRow"
		},
		reverse: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, columns are reversed"
		},
		topPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, row receives top padding. Useful for when you have background colored rows",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-grid-react/src/Grid.js": {
	description: "",
	displayName: "Grid",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Any children of a Grid must be a GridRow"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "For a more compact grid"
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the Grid"
		},
		topPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Add top padding",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-grid-react/src/InlineGrid.js": {
	description: "",
	displayName: "InlineGrid",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "Any children of a InlineGrid must be a GridRow"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid classes"
		},
		element: {
			type: {
				name: "string"
			},
			required: false,
			description: "Specify the DOM element being used to create the Grid",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		}
	}
},
	"ffe-grid-react/src/GridCol.js": {
	description: "",
	displayName: "GridCol",
	methods: [
	],
	props: {
		background: {
			type: {
				name: "enum",
				value: [
					{
						value: "'frost-30'",
						computed: false
					},
					{
						value: "'sand'",
						computed: false
					},
					{
						value: "'sand-70'",
						computed: false
					},
					{
						value: "'sand-30'",
						computed: false
					},
					{
						value: "'syrin-70'",
						computed: false
					},
					{
						value: "'syrin-30'",
						computed: false
					},
					{
						value: "'vann'",
						computed: false
					},
					{
						value: "'fjell'",
						computed: false
					},
					{
						value: "'hvit'",
						computed: false
					}
				]
			},
			required: false,
			description: "Supported background colors"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes are attached to the root node, in addition to ffe-grid__col classes"
		},
		element: {
			type: {
				name: "node"
			},
			required: false,
			description: "Specify the DOM element being used to create the GridCol",
			defaultValue: {
				value: "'div'",
				computed: false
			}
		},
		around: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Distribute remaining space around the content elements"
		},
		between: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Distribute remaining space between the content elements"
		},
		bottom: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements at the bottom of the column"
		},
		center: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center content horizontally"
		},
		centerText: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center text content horizontally"
		},
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the column"
		},
		end: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements to the right of the column"
		},
		horizontal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Layout column content horizontally and flip flex direction"
		},
		middle: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Center content vertically"
		},
		bottomPadding: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Add bottom padding",
			defaultValue: {
				value: "true",
				computed: false
			}
		},
		reverse: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Reverse layout direction"
		},
		start: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements to the left of the column"
		},
		top: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Place content elements at the top of the column"
		},
		sm: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for small screen sizes"
		},
		md: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for medium screen sizes"
		},
		lg: {
			type: {
				name: "union",
				value: [
					{
						name: "number",
						description: "Number of columns, 0-12"
					},
					{
						name: "string",
						description: "Number of columns, 0-12"
					},
					{
						name: "shape",
						value: {
							cols: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of columns, 0-12",
								required: false
							},
							offset: {
								name: "union",
								value: [
									{
										name: "number"
									},
									{
										name: "string"
									}
								],
								description: "Number of colums offset, 0-12",
								required: false
							}
						}
					}
				]
			},
			required: false,
			description: "Size modifiers for large screen sizes"
		}
	}
},
	"ffe-lists-react/src/StylizedNumberedListItem.js": {
	description: "",
	displayName: "StylizedNumberedListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/CheckListItem.js": {
	description: "",
	displayName: "CheckListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		isCross: {
			type: {
				name: "bool"
			},
			required: false,
			description: "If true, render a red cross instead of a green checkmark",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-lists-react/src/DescriptionList.js": {
	description: "",
	displayName: "DescriptionList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		medium: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Medium list. Can't be used with `large` prop"
		},
		large: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Large list. Can't be used with `medium` prop"
		},
		horizontal: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Displays dts and dds inline"
		}
	}
},
	"ffe-lists-react/src/DescriptionListMultiCol.js": {
	description: "",
	displayName: "DescriptionListMultiCol",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/NumberedListItem.js": {
	description: "",
	displayName: "NumberedListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/DescriptionListTerm.js": {
	description: "",
	displayName: "DescriptionListTerm",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/NumberedList.js": {
	description: "",
	displayName: "NumberedList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		}
	}
},
	"ffe-lists-react/src/BulletList.js": {
	description: "",
	displayName: "BulletList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Condensed modifier. Use in condensed designs"
		}
	}
},
	"ffe-lists-react/src/StylizedNumberedList.js": {
	description: "",
	displayName: "StylizedNumberedList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/CheckList.js": {
	description: "",
	displayName: "CheckList",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "List items"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		},
		columns: {
			type: {
				name: "enum",
				value: [
					{
						value: "1",
						computed: false
					},
					{
						value: "2",
						computed: false
					},
					{
						value: "'1'",
						computed: false
					},
					{
						value: "'2'",
						computed: false
					}
				]
			},
			required: false,
			description: "",
			defaultValue: {
				value: "1",
				computed: false
			}
		}
	}
},
	"ffe-lists-react/src/BulletListItem.js": {
	description: "",
	displayName: "BulletListItem",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-lists-react/src/DescriptionListDescription.js": {
	description: "",
	displayName: "DescriptionListDescription",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra classes"
		}
	}
},
	"ffe-message-box-react/src/ErrorMessage.js": {
	description: "",
	displayName: "ErrorMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-message-box-react/src/TipsMessage.js": {
	description: "",
	displayName: "TipsMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-message-box-react/src/InfoMessage.js": {
	description: "",
	displayName: "InfoMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-message-box-react/src/SuccessMessage.js": {
	description: "",
	displayName: "SuccessMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: "The content of the message box"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Any extra class names to the wrapping DOM node"
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: "Deprecated. Use `children` instead.\n@deprecated"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "The icon to show. Has a default value, but can be overridden"
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: "An optional title for the message"
		}
	}
},
	"ffe-message-box-react/src/BaseMessage.js": {
	description: "",
	displayName: "BaseMessage",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		content: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: ""
		},
		title: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		type: {
			type: {
				name: "enum",
				value: [
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'tips'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					}
				]
			},
			required: true,
			description: "Internal type enum for specifying the style of message box. Should not be used directly\n@ignore"
		}
	}
},
	"ffe-searchable-dropdown-react/src/ListItemBody.js": {
	description: "",
	displayName: "ListItemBody",
	methods: [
	],
	props: {
		item: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		},
		isHighlighted: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/Results.js": {
	description: "",
	displayName: "Results",
	methods: [
	],
	props: {
		listToRender: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		noMatch: {
			type: {
				name: "shape",
				value: {
					text: {
						name: "string",
						required: false
					},
					dropdownList: {
						name: "arrayOf",
						value: {
							name: "object"
						},
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		noMatchMessageId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ListItemBodyElement: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "Object.values(locales)"
			},
			required: true,
			description: ""
		},
		refs: {
			type: {
				name: "arrayOf",
				value: {
					name: "any"
				}
			},
			required: true,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		isNoMatch: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/HighCapacityResults.js": {
	description: "",
	displayName: "HighCapacityResults",
	methods: [
		{
			name: "handleScroll",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "rowRenderer",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "{ index, parent, style }",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		listToRender: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		noMatch: {
			type: {
				name: "shape",
				value: {
					text: {
						name: "string",
						required: false
					},
					dropdownList: {
						name: "arrayOf",
						value: {
							name: "object"
						},
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		noMatchMessageId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		ListItemBodyElement: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		highlightedIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		dropdownAttributes: {
			type: {
				name: "arrayOf",
				value: {
					name: "string"
				}
			},
			required: true,
			description: ""
		},
		locale: {
			type: {
				name: "enum",
				computed: true,
				value: "Object.values(locales)"
			},
			required: true,
			description: ""
		},
		refs: {
			type: {
				name: "arrayOf",
				value: {
					name: "any"
				}
			},
			required: true,
			description: ""
		},
		onChange: {
			type: {
				name: "func"
			},
			required: true,
			description: ""
		},
		isNoMatch: {
			type: {
				name: "bool"
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/NoMatch.js": {
	description: "",
	displayName: "NoMatch",
	methods: [
	],
	props: {
		noMatch: {
			type: {
				name: "shape",
				value: {
					text: {
						name: "string",
						required: false
					},
					dropdownList: {
						name: "arrayOf",
						value: {
							name: "object"
						},
						required: false
					}
				}
			},
			required: false,
			description: ""
		},
		noMatchMessageId: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		listToRender: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		}
	}
},
	"ffe-searchable-dropdown-react/src/ListItemContainer.js": {
	description: "",
	methods: [
	]
},
	"ffe-spinner-react/src/Spinner.js": {
	description: "",
	displayName: "Spinner",
	methods: [
	],
	props: {
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		immediate: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		large: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		}
	}
},
	"ffe-system-message-react/src/SystemSuccessMessage.js": {
	description: "",
	displayName: "SystemSuccessMessage",
	methods: [
	]
},
	"ffe-system-message-react/src/SystemInfoMessage.js": {
	description: "",
	displayName: "SystemInfoMessage",
	methods: [
	]
},
	"ffe-system-message-react/src/SystemNewsMessage.js": {
	description: "",
	displayName: "SystemNewsMessage",
	methods: [
	]
},
	"ffe-system-message-react/src/SystemMessage.js": {
	description: "",
	displayName: "SystemMessage",
	methods: [
		{
			name: "close",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content of the system message"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional classes added to the surrounding div"
		},
		icon: {
			type: {
				name: "node"
			},
			required: true,
			description: "Override the default icon - use with caution!"
		},
		locale: {
			type: {
				name: "enum",
				value: [
					{
						value: "'en'",
						computed: false
					},
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					}
				]
			},
			required: false,
			description: "'nb', 'nn', or 'en'",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		modifier: {
			type: {
				name: "enum",
				value: [
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'news'",
						computed: false
					}
				]
			},
			required: false,
			description: "The type of system message. Used internally only-\n@ignore"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the system message has been closed (after animation ends)",
			defaultValue: {
				value: "f => f",
				computed: false
			}
		}
	}
},
	"ffe-system-message-react/src/SystemErrorMessage.js": {
	description: "",
	displayName: "SystemErrorMessage",
	methods: [
	],
	props: {
		animationLengthMs: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "300",
				computed: false
			}
		},
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "The content of the system message"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional classes added to the surrounding div"
		},
		icon: {
			type: {
				name: "node"
			},
			required: false,
			description: "Override the default icon - use with caution!"
		},
		locale: {
			type: {
				name: "enum",
				value: [
					{
						value: "'en'",
						computed: false
					},
					{
						value: "'nb'",
						computed: false
					},
					{
						value: "'nn'",
						computed: false
					}
				]
			},
			required: false,
			description: "'nb', 'nn', or 'en'",
			defaultValue: {
				value: "'nb'",
				computed: false
			}
		},
		modifier: {
			type: {
				name: "enum",
				value: [
					{
						value: "'error'",
						computed: false
					},
					{
						value: "'info'",
						computed: false
					},
					{
						value: "'success'",
						computed: false
					},
					{
						value: "'news'",
						computed: false
					}
				]
			},
			required: false,
			description: "The type of system message. Used internally only-\n@ignore"
		},
		onClose: {
			type: {
				name: "func"
			},
			required: false,
			description: "Callback for when the system message has been closed (after animation ends)",
			defaultValue: {
				value: "f => f",
				computed: false
			}
		},
		alert: {
			type: {
				name: "bool"
			},
			required: false,
			description: "When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true.",
			defaultValue: {
				value: "true",
				computed: false
			}
		}
	}
},
	"ffe-tables-react/src/Table.js": {
	description: "",
	displayName: "Table",
	methods: [
	],
	props: {
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Make the caption only visible for screen readers"
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: "A mapping function that returns a renderable node that will be rendered for each expandable row"
		},
		sortable: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		sortBy: {
			type: {
				name: "string"
			},
			required: false,
			description: "A string reference to a column key to set an initial sort of the table"
		},
		descending: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Used in conjunction with sortBy"
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: "When paginated, lets you set the number of rows to offset from the beginning"
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: "Limits the number of rows to show on one page. Decides whether or not to paginate your table"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Makes your table condensed - for pages that show a lot of data"
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Set to true if you want the row headings to be narrower on smalls screens"
		},
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Removes left cell padding from the first column"
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Show your table as a regular column based table on small devices"
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: "Decide if your table rows should break into a vertical view on small or no devices"
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of rows with a prop\nrowRender={(props, rowcontent, trprops, index)=>{return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of headers with a prop\nheaderRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: "Override rendering of footer with a prop\nfooterRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}"
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						id: {
							name: "union",
							value: [
								{
									name: "string"
								},
								{
									name: "number"
								}
							],
							description: "A unique ID for each row of data. Required for sorting",
							required: false
						}
					}
				}
			},
			required: false,
			description: "An array of objects with keys equal to the columns array's key value, and value equal to whatever you\nwant in your cell. These are basically an array of rows"
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						header: {
							name: "node",
							description: "The column header. Required, but may be an empty string.",
							required: true
						},
						key: {
							name: "string",
							description: "The column key used in the `data` array's objects",
							required: true
						},
						footer: {
							name: "node",
							description: "Content shown in the table footer",
							required: false
						},
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						compare: {
							name: "func",
							description: "Custom comparator function for sorting this column",
							required: false
						},
						notSortable: {
							name: "bool",
							description: "Disable column from sorting. Not needed if heading is an empty string",
							required: false
						},
						cellRender: {
							name: "func",
							required: false
						},
						columnHeaderRender: {
							name: "func",
							required: false
						},
						columnFooterRender: {
							name: "func",
							required: false
						}
					}
				}
			},
			required: false,
			description: "An array of objects with a key describing your column, and a header describing that column"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Class names set in addition to the ffe tables classes."
		}
	}
},
	"ffe-tables-react/src/SortableTable/SortableTable.js": {
	description: "",
	displayName: "SortableTable",
	methods: [
		{
			name: "sortStateHasChanged",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "nextState",
					type: null
				}
			],
			returns: null
		},
		{
			name: "tableHeaderClicked",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "columnKey",
					type: null
				}
			],
			returns: null
		},
		{
			name: "handleKeyPress",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "columnKey",
					type: null
				},
				{
					name: "event",
					type: null
				}
			],
			returns: null
		},
		{
			name: "getAriaSort",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "column",
					type: null
				}
			],
			returns: null
		},
		{
			name: "decorateSortableTableHeader",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "column",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: true,
			description: ""
		},
		sortBy: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		descending: {
			type: {
				name: "bool"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "false",
				computed: false
			}
		},
		onSort: {
			type: {
				name: "func"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "() => {}",
				computed: false
			}
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/DefaultTable/DefaultTable.js": {
	description: "",
	displayName: "DefaultTable",
	methods: [
		{
			name: "renderTableCaption",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableHeaders",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableFooter",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "getData",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "renderTableBody",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		}
	],
	props: {
		alignLeft: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		columnLayoutMobile: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		caption: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		srOnlyCaption: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expandedContentMapper: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		smallHeader: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		sort: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		offset: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "0",
				computed: false
			}
		},
		limit: {
			type: {
				name: "number"
			},
			required: false,
			description: "",
			defaultValue: {
				value: "0",
				computed: false
			}
		},
		breakpoint: {
			type: {
				name: "enum",
				value: [
					{
						value: "'sm'",
						computed: false
					},
					{
						value: "'none'",
						computed: false
					}
				]
			},
			required: false,
			description: ""
		},
		data: {
			type: {
				name: "arrayOf",
				value: {
					name: "object"
				}
			},
			required: false,
			description: "",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						header: {
							name: "node",
							required: true
						},
						key: {
							name: "string",
							required: true
						}
					}
				}
			},
			required: false,
			description: "",
			defaultValue: {
				value: "[]",
				computed: false
			}
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableCell.js": {
	description: "",
	displayName: "TableCell",
	methods: [
	],
	props: {
		alignRight: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		alignTop: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		children: {
			type: {
				name: "any"
			},
			required: false,
			description: ""
		},
		columnHeader: {
			type: {
				name: "union",
				value: [
					{
						name: "string"
					},
					{
						name: "node"
					}
				]
			},
			required: false,
			description: ""
		},
		contentClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		tdClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableHeaders.js": {
	description: "",
	displayName: "TableHeaders",
	methods: [
	],
	props: {
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						header: {
							name: "node",
							required: true
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						key: {
							name: "string",
							required: true
						}
					}
				}
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		dataWindow: {
			type: {
				name: "array"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableFooter.js": {
	description: "",
	displayName: "TableFooter",
	methods: [
	],
	props: {
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						footer: {
							name: "any",
							required: false
						},
						header: {
							name: "node",
							required: true
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						}
					}
				}
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		dataWindow: {
			type: {
				name: "array"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableRow.js": {
	description: "",
	displayName: "TableRow",
	methods: [
	],
	props: {
		cells: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		columns: {
			type: {
				name: "arrayOf",
				value: {
					name: "shape",
					value: {
						alignRight: {
							name: "bool",
							required: false
						},
						alignTop: {
							name: "bool",
							required: false
						},
						header: {
							name: "any",
							required: false
						},
						hideOnDesktop: {
							name: "bool",
							required: false
						},
						hideOnMobile: {
							name: "bool",
							required: false
						},
						hideOnSmallTablet: {
							name: "bool",
							required: false
						},
						hideOnTablet: {
							name: "bool",
							required: false
						},
						key: {
							name: "string",
							required: false
						},
						cellRender: {
							name: "func",
							required: false
						}
					}
				}
			},
			required: true,
			description: ""
		},
		expandable: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		expanded: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onKeyDown: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		trClasses: {
			type: {
				name: "string"
			},
			required: false,
			description: ""
		},
		rowIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tables-react/src/TableParts/TableRowExpandable.js": {
	description: "",
	displayName: "TableRowExpandable",
	methods: [
		{
			name: "getDerivedStateFromProps",
			docblock: null,
			modifiers: [
				"static"
			],
			params: [
				{
					name: "nextProps",
					type: null
				},
				{
					name: "prevState",
					type: null
				}
			],
			returns: null
		},
		{
			name: "toggleExpand",
			docblock: null,
			modifiers: [
			],
			params: [
			],
			returns: null
		},
		{
			name: "handleKeyPress",
			docblock: null,
			modifiers: [
			],
			params: [
				{
					name: "event",
					type: null
				}
			],
			returns: null
		}
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: false,
			description: ""
		},
		cells: {
			type: {
				name: "object"
			},
			required: true,
			description: ""
		},
		columns: {
			type: {
				name: "array"
			},
			required: true,
			description: ""
		},
		sort: {
			type: {
				name: "object"
			},
			required: false,
			description: ""
		},
		rowRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		headerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		footerRender: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		rowIndex: {
			type: {
				name: "number"
			},
			required: false,
			description: ""
		},
		defaultExpanded: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		},
		scrollToOnMount: {
			type: {
				name: "bool"
			},
			required: false,
			description: ""
		}
	}
},
	"ffe-tabs-react/src/Tab.js": {
	description: "",
	displayName: "Tab",
	methods: [
	],
	props: {
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Selected tab button"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Compact style tab button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		"aria-controls": {
			type: {
				name: "string"
			},
			required: true,
			description: "Id of the element it controls"
		}
	}
},
	"ffe-tabs-react/src/TabButton.js": {
	description: "",
	displayName: "TabButton",
	methods: [
	],
	props: {
		selected: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Selected tab button"
		},
		ghost: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Transparent background style tab button"
		},
		condensed: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Compact style tab button"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		"aria-controls": {
			type: {
				name: "string"
			},
			required: true,
			description: "Id of the element it controls"
		}
	}
},
	"ffe-tabs-react/src/TabGroup.js": {
	description: "",
	displayName: "TabGroup",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "TabGroup contents - a group of Tabs"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		}
	}
},
	"ffe-tabs-react/src/TabButtonGroup.js": {
	description: "",
	displayName: "TabButtonGroup",
	methods: [
	],
	props: {
		children: {
			type: {
				name: "node"
			},
			required: true,
			description: "TabGroup contents - a group of Tabs"
		},
		className: {
			type: {
				name: "string"
			},
			required: false,
			description: "Additional css classes"
		},
		thin: {
			type: {
				name: "bool"
			},
			required: false,
			description: "Applies the thin modifier to remove margins"
		}
	}
}
};

const scope$2M = {useState: React.useState};
const code$2M = "/* eslint-disable jsx-a11y/anchor-is-valid */\n\n\n() => {\n    const [isUserNavOpen, setIsUserNavOpen] = useState(false);\n    return (\n        <div>\n            <header className=\"ffe-header\">\n                <div className=\"ffe-header__wrapper\">\n                    <nav\n                        className=\"ffe-header__secondary-nav\"\n                        role=\"navigation\"\n                    >\n                        <ul className=\"ffe-header__list ffe-header__secondary-nav-list\">\n                            <li className=\"ffe-header__list-item\">\n                                <a\n                                    className=\"ffe-header__link ffe-header__link--active\"\n                                    href=\"#\"\n                                >\n                                    Privat\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Bedrift\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Om oss\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n\n                    <div className=\"ffe-header__logo\">\n                        <a href=\"#\">\n                            <svg\n                                viewBox=\"0 0 182 40\"\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                className=\"ffe-header__logo-svg\"\n                            >\n                                <title>SpareBank 1</title>\n                                <g fill=\"none\" fillRule=\"evenodd\">\n                                    <path\n                                        d=\"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828\"\n                                        fill=\"#F00000\"\n                                    />\n                                    <path\n                                        d=\"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17\"\n                                        fill=\"#B40000\"\n                                    />\n                                    <path\n                                        d=\"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734\"\n                                        fill=\"#FFF\"\n                                    />\n                                    <path\n                                        d=\"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z\"\n                                        fill=\"#002776\"\n                                    />\n                                </g>\n                            </svg>\n                        </a>\n                    </div>\n\n                    <div className=\"ffe-header__user-nav-toggle\">\n                        <button\n                            className=\"ffe-header__icon-button ffe-header__icon-button--user-nav\"\n                            onClick={() => setIsUserNavOpen(!isUserNavOpen)}\n                        >\n                            <span className=\"ffe-header__user-name\">\n                                Jomar Beate Skrothaug\n                                <span className=\"ffe-header__user-chevron\">\n                                    <svg\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                        viewBox=\"0 0 200 200\"\n                                        className=\"ffe-header__svg-icon ffe-header__user-chevron-icon\"\n                                    >\n                                        <path d=\"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z\" />\n                                    </svg>\n                                </span>\n                            </span>\n                            <svg\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                viewBox=\"0 0 200 200\"\n                                className=\"ffe-header__svg-icon ffe-header__user-icon\"\n                            >\n                                <path d=\"M99.656,0c-21.96,0-39.812,17.913-39.812,39.938v13.468c0,22.025,17.852,39.938,39.812,39.938h0.684c21.97,0,39.82-17.913,39.82-39.938v-13.468c0-22.025-17.86-39.938-39.82-39.938h-0.684zm0,14.031h0.684c14.24,0,25.82,11.625,25.82,25.907v13.437c0,14.284-11.58,25.906-25.82,25.906h-0.684c-14.24,0-25.812-11.622-25.812-25.906v-13.437c0-14.282,11.572-25.907,25.812-25.907zm-46.094,87.749c-0.973,0.1-1.932,0.46-2.781,1.1-14.196,10.54-22.781,27.37-22.781,45.28v40.46c0,6.29,5.082,11.38,11.344,11.38h121.32c6.26,0,11.34-5.09,11.34-11.38v-40.46c0-17.91-8.59-34.74-22.78-45.28-2.72-2.02-6.59-1.19-8.28,1.74l-1.35,2.32c-1.42,2.46-0.83,5.64,1.44,7.34,10.57,7.93,16.97,20.5,16.97,33.88v37.81h-116v-37.81c0-13.38,6.399-25.96,16.969-33.88,2.276-1.7,2.859-4.88,1.437-7.34l-1.344-2.32c-1.163-2.01-3.359-3.05-5.5-2.84z\" />\n                            </svg>\n                            <span className=\"ffe-header__notification-bubble\">\n                                5\n                            </span>\n                        </button>\n                    </div>\n\n                    <div className=\"ffe-header__site-nav-toggle\">\n                        <button className=\"ffe-header__icon-button ffe-header__icon-button--site-nav\">\n                            <span className=\"ffe-header__site-nav-hamburger\">\n                                <span className=\"ffe-header__site-nav-hamburger__bar\" />\n                            </span>\n                        </button>\n                    </div>\n                </div>\n\n                <div className=\"ffe-header__border\">\n                    <div className=\"ffe-header__wrapper\">\n                        <nav className=\"ffe-header__user-nav\" role=\"navigation\">\n                            <ul\n                                className={`ffe-header__list ffe-header__user-nav-list ${isUserNavOpen &&\n                                    'ffe-header__user-nav-list--visible'}`}\n                            >\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Huskeliste{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            1\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Postkasse{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            22\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Innstillinger\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <div className=\"ffe-header__link ffe-header__link--disabled\">\n                                        Chat - stengt\n                                    </div>\n                                </li>\n                                <li className=\"ffe-header__list-item ffe-header__list-item--centered\">\n                                    <button className=\"ffe-header__logout-button\">\n                                        <span className=\"ffe-header__logout-button-label\">\n                                            Logg ut\n                                        </span>\n                                        <div\n                                            className=\"ffe-header__logout-button-spinner\"\n                                            aria-hidden=\"true\"\n                                            aria-label=\"Logger deg ut\"\n                                        />\n                                    </button>\n                                </li>\n                            </ul>\n                        </nav>\n\n                        <nav className=\"ffe-header__site-nav\" role=\"navigation\">\n                            <ul className=\"ffe-header__list ffe-header__site-nav-list\">\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Oversikt\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Betaling\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kort\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Lån\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Sparing\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Forsikring\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kundeservice\n                                    </a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n            </header>\n\n            <div className=\"lorem-ipsum\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Proin non lectus in quam iaculis molestie ut nec turpis.\n                    Curabitur feugiat turpis dignissim ex scelerisque ultricies\n                    in vitae est. Proin bibendum tellus leo, non vulputate elit\n                    tempor sed. Cras efficitur justo nisi, non vehicula metus\n                    faucibus ac. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus.\n                </p>\n            </div>\n        </div>\n    );\n};";
const sourceCode$2M = "/* eslint-disable jsx-a11y/anchor-is-valid */\nimport { useState } from 'react';\n\n() => {\n    const [isUserNavOpen, setIsUserNavOpen] = useState(false);\n    return (\n        <div>\n            <header className=\"ffe-header\">\n                <div className=\"ffe-header__wrapper\">\n                    <nav\n                        className=\"ffe-header__secondary-nav\"\n                        role=\"navigation\"\n                    >\n                        <ul className=\"ffe-header__list ffe-header__secondary-nav-list\">\n                            <li className=\"ffe-header__list-item\">\n                                <a\n                                    className=\"ffe-header__link ffe-header__link--active\"\n                                    href=\"#\"\n                                >\n                                    Privat\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Bedrift\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Om oss\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n\n                    <div className=\"ffe-header__logo\">\n                        <a href=\"#\">\n                            <svg\n                                viewBox=\"0 0 182 40\"\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                className=\"ffe-header__logo-svg\"\n                            >\n                                <title>SpareBank 1</title>\n                                <g fill=\"none\" fillRule=\"evenodd\">\n                                    <path\n                                        d=\"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828\"\n                                        fill=\"#F00000\"\n                                    />\n                                    <path\n                                        d=\"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17\"\n                                        fill=\"#B40000\"\n                                    />\n                                    <path\n                                        d=\"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734\"\n                                        fill=\"#FFF\"\n                                    />\n                                    <path\n                                        d=\"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z\"\n                                        fill=\"#002776\"\n                                    />\n                                </g>\n                            </svg>\n                        </a>\n                    </div>\n\n                    <div className=\"ffe-header__user-nav-toggle\">\n                        <button\n                            className=\"ffe-header__icon-button ffe-header__icon-button--user-nav\"\n                            onClick={() => setIsUserNavOpen(!isUserNavOpen)}\n                        >\n                            <span className=\"ffe-header__user-name\">\n                                Jomar Beate Skrothaug\n                                <span className=\"ffe-header__user-chevron\">\n                                    <svg\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                        viewBox=\"0 0 200 200\"\n                                        className=\"ffe-header__svg-icon ffe-header__user-chevron-icon\"\n                                    >\n                                        <path d=\"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z\" />\n                                    </svg>\n                                </span>\n                            </span>\n                            <svg\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                viewBox=\"0 0 200 200\"\n                                className=\"ffe-header__svg-icon ffe-header__user-icon\"\n                            >\n                                <path d=\"M99.656,0c-21.96,0-39.812,17.913-39.812,39.938v13.468c0,22.025,17.852,39.938,39.812,39.938h0.684c21.97,0,39.82-17.913,39.82-39.938v-13.468c0-22.025-17.86-39.938-39.82-39.938h-0.684zm0,14.031h0.684c14.24,0,25.82,11.625,25.82,25.907v13.437c0,14.284-11.58,25.906-25.82,25.906h-0.684c-14.24,0-25.812-11.622-25.812-25.906v-13.437c0-14.282,11.572-25.907,25.812-25.907zm-46.094,87.749c-0.973,0.1-1.932,0.46-2.781,1.1-14.196,10.54-22.781,27.37-22.781,45.28v40.46c0,6.29,5.082,11.38,11.344,11.38h121.32c6.26,0,11.34-5.09,11.34-11.38v-40.46c0-17.91-8.59-34.74-22.78-45.28-2.72-2.02-6.59-1.19-8.28,1.74l-1.35,2.32c-1.42,2.46-0.83,5.64,1.44,7.34,10.57,7.93,16.97,20.5,16.97,33.88v37.81h-116v-37.81c0-13.38,6.399-25.96,16.969-33.88,2.276-1.7,2.859-4.88,1.437-7.34l-1.344-2.32c-1.163-2.01-3.359-3.05-5.5-2.84z\" />\n                            </svg>\n                            <span className=\"ffe-header__notification-bubble\">\n                                5\n                            </span>\n                        </button>\n                    </div>\n\n                    <div className=\"ffe-header__site-nav-toggle\">\n                        <button className=\"ffe-header__icon-button ffe-header__icon-button--site-nav\">\n                            <span className=\"ffe-header__site-nav-hamburger\">\n                                <span className=\"ffe-header__site-nav-hamburger__bar\" />\n                            </span>\n                        </button>\n                    </div>\n                </div>\n\n                <div className=\"ffe-header__border\">\n                    <div className=\"ffe-header__wrapper\">\n                        <nav className=\"ffe-header__user-nav\" role=\"navigation\">\n                            <ul\n                                className={`ffe-header__list ffe-header__user-nav-list ${isUserNavOpen &&\n                                    'ffe-header__user-nav-list--visible'}`}\n                            >\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Huskeliste{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            1\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Postkasse{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            22\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Innstillinger\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <div className=\"ffe-header__link ffe-header__link--disabled\">\n                                        Chat - stengt\n                                    </div>\n                                </li>\n                                <li className=\"ffe-header__list-item ffe-header__list-item--centered\">\n                                    <button className=\"ffe-header__logout-button\">\n                                        <span className=\"ffe-header__logout-button-label\">\n                                            Logg ut\n                                        </span>\n                                        <div\n                                            className=\"ffe-header__logout-button-spinner\"\n                                            aria-hidden=\"true\"\n                                            aria-label=\"Logger deg ut\"\n                                        />\n                                    </button>\n                                </li>\n                            </ul>\n                        </nav>\n\n                        <nav className=\"ffe-header__site-nav\" role=\"navigation\">\n                            <ul className=\"ffe-header__list ffe-header__site-nav-list\">\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Oversikt\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Betaling\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kort\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Lån\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Sparing\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Forsikring\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kundeservice\n                                    </a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n            </header>\n\n            <div className=\"lorem-ipsum\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Proin non lectus in quam iaculis molestie ut nec turpis.\n                    Curabitur feugiat turpis dignissim ex scelerisque ultricies\n                    in vitae est. Proin bibendum tellus leo, non vulputate elit\n                    tempor sed. Cras efficitur justo nisi, non vehicula metus\n                    faucibus ac. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus.\n                </p>\n            </div>\n        </div>\n    );\n};\n";
const sourceImports$2M = "import { useState } from 'react';";
const dependencies$2M = ["react"];
const sourceFileName$2M = "header/header.jsx";

var header_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2M,
  code: code$2M,
  sourceCode: sourceCode$2M,
  sourceImports: sourceImports$2M,
  dependencies: dependencies$2M,
  sourceFileName: sourceFileName$2M
});

const scope$2L = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2L = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2L = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2L = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2L = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2L = "datepicker/Datepicker-invalid.jsx";

var datepicker_Datepicker_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2L,
  code: code$2L,
  sourceCode: sourceCode$2L,
  sourceImports: sourceImports$2L,
  dependencies: dependencies$2L,
  sourceFileName: sourceFileName$2L
});

const scope$2K = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2K = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2K = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2K = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2K = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2K = "datepicker/Datepicker-nn.jsx";

var datepicker_Datepicker_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2K,
  code: code$2K,
  sourceCode: sourceCode$2K,
  sourceImports: sourceImports$2K,
  dependencies: dependencies$2K,
  sourceFileName: sourceFileName$2K
});

const scope$2J = {Calendar: Datepicker.Calendar};
const code$2J = "<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />;";
const sourceCode$2J = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$2J = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$2J = ["@sb1/ffe-datepicker-react"];
const sourceFileName$2J = "datepicker/Calendar-nn.jsx";

var datepicker_Calendar_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2J,
  code: code$2J,
  sourceCode: sourceCode$2J,
  sourceImports: sourceImports$2J,
  dependencies: dependencies$2J,
  sourceFileName: sourceFileName$2J
});

const scope$2I = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2I = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2I = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2I = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2I = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2I = "datepicker/Datepicker.jsx";

var datepicker_Datepicker = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2I,
  code: code$2I,
  sourceCode: sourceCode$2I,
  sourceImports: sourceImports$2I,
  dependencies: dependencies$2I,
  sourceFileName: sourceFileName$2I
});

const scope$2H = {Calendar: Datepicker.Calendar};
const code$2H = "<Calendar language=\"en\" onDatePicked={f => console.log(f)} />;";
const sourceCode$2H = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"en\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$2H = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$2H = ["@sb1/ffe-datepicker-react"];
const sourceFileName$2H = "datepicker/Calendar-en.jsx";

var datepicker_Calendar_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2H,
  code: code$2H,
  sourceCode: sourceCode$2H,
  sourceImports: sourceImports$2H,
  dependencies: dependencies$2H,
  sourceFileName: sourceFileName$2H
});

const scope$2G = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2G = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2G = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2G = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2G = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2G = "datepicker/Datepicker-fullWidth.jsx";

var datepicker_Datepicker_fullWidth = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2G,
  code: code$2G,
  sourceCode: sourceCode$2G,
  sourceImports: sourceImports$2G,
  dependencies: dependencies$2G,
  sourceFileName: sourceFileName$2G
});

const scope$2F = {Calendar: Datepicker.Calendar};
const code$2F = "<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />;";
const sourceCode$2F = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$2F = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$2F = ["@sb1/ffe-datepicker-react"];
const sourceFileName$2F = "datepicker/Calendar.jsx";

var datepicker_Calendar = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2F,
  code: code$2F,
  sourceCode: sourceCode$2F,
  sourceImports: sourceImports$2F,
  dependencies: dependencies$2F,
  sourceFileName: sourceFileName$2F
});

const scope$2E = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2E = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2E = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2E = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2E = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2E = "datepicker/Datepicker-en.jsx";

var datepicker_Datepicker_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2E,
  code: code$2E,
  sourceCode: sourceCode$2E,
  sourceImports: sourceImports$2E,
  dependencies: dependencies$2E,
  sourceFileName: sourceFileName$2E
});

const scope$2D = {useState: React.useState,Datepicker: Datepicker__default["default"]};
const code$2D = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$2D = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$2D = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$2D = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$2D = "datepicker/Datepicker-calendarAbove.jsx";

var datepicker_Datepicker_calendarAbove = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2D,
  code: code$2D,
  sourceCode: sourceCode$2D,
  sourceImports: sourceImports$2D,
  dependencies: dependencies$2D,
  sourceFileName: sourceFileName$2D
});

const scope$2C = {useState: React.useState,Datepicker: Datepicker__default["default"],Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$2C = "() => {\n    const [date1, setDate1] = useState('01.01.2016');\n    const [date2, setDate2] = useState('02.01.2016');\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-1' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate1}\n                        value={date1}\n                    />\n                </GridCol>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-2' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate2}\n                        value={date2}\n                    />\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$2C = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n() => {\n    const [date1, setDate1] = useState('01.01.2016');\n    const [date2, setDate2] = useState('02.01.2016');\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-1' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate1}\n                        value={date1}\n                    />\n                </GridCol>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-2' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate2}\n                        value={date2}\n                    />\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$2C = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$2C = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-grid-react"];
const sourceFileName$2C = "datepicker/Datepicker-two.jsx";

var datepicker_Datepicker_two = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2C,
  code: code$2C,
  sourceCode: sourceCode$2C,
  sourceImports: sourceImports$2C,
  dependencies: dependencies$2C,
  sourceFileName: sourceFileName$2C
});

const scope$2B = {useState: React.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2B = "() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label2 = 'label2';\n\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'EUR',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                allowCustomAccount={true}\n                labelId={label2}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$2B = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label2 = 'label2';\n\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'EUR',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                allowCustomAccount={true}\n                labelId={label2}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    );\n};";
const sourceImports$2B = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2B = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2B = "account-selector/AccountSelector-allowCustomAccount.jsx";

var account_selector_AccountSelector_allowCustomAccount = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2B,
  code: code$2B,
  sourceCode: sourceCode$2B,
  sourceImports: sourceImports$2B,
  dependencies: dependencies$2B,
  sourceFileName: sourceFileName$2B
});

const scope$2A = {useState: React.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2A = "() => {\n    const label3 = 'label3';\n    const [selectedAccount, setSelectedAccount] = useState(null);\n\n    return (\n    <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label3}>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={value => setSelectedAccount(value)}\n            onReset={() => setSelectedAccount(null)}\n            selectedAccount={selectedAccount}\n            formatAccountNumber={false}\n            labelId={label3}\n            ariaInvalid={false}\n        />\n    </InputGroup>);\n}";
const sourceCode$2A = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const label3 = 'label3';\n    const [selectedAccount, setSelectedAccount] = useState(null);\n\n    return (\n    <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label3}>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={value => setSelectedAccount(value)}\n            onReset={() => setSelectedAccount(null)}\n            selectedAccount={selectedAccount}\n            formatAccountNumber={false}\n            labelId={label3}\n            ariaInvalid={false}\n        />\n    </InputGroup>);\n}";
const sourceImports$2A = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2A = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2A = "account-selector/AccountSelector-accountNumberFormatting-off.jsx";

var account_selector_AccountSelector_accountNumberFormatting_off = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2A,
  code: code$2A,
  sourceCode: sourceCode$2A,
  sourceImports: sourceImports$2A,
  dependencies: dependencies$2A,
  sourceFileName: sourceFileName$2A
});

const scope$2z = {useState: React.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2z = "() => {\nconst [selectedAccount, setSelectedAccount] = useState(null);\nconst label2 = 'label2';\n\nreturn (\n<InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n    <AccountSelector\n        accounts={[\n            {\n                accountNumber: '1234 56 789101',\n                name: 'Brukskonto',\n                currencyCode: 'NOK',\n                balance: 1337,\n            },\n            {\n                accountNumber: '1234 56 789102',\n                name: 'Brukskonto2',\n                currencyCode: 'NOK',\n                balance: 13337,\n            },\n            {\n                accountNumber: '2234 56 789102',\n                name: 'Sparekonto1',\n                currencyCode: 'EUR',\n                balance: 109236,\n            },\n            {\n                accountNumber: '1253 47 789102',\n                name: 'Sparekonto2',\n                currencyCode: 'NOK',\n                balance: 0,\n            },\n        ]}\n        id=\"account-selector-single\"\n        locale=\"nb\"\n        onAccountSelected={value => setSelectedAccount(value)}\n        onReset={() => setSelectedAccount(null)}\n        selectedAccount={selectedAccount}\n        showBalance\n        labelId={label2}\n        ariaInvalid={false}\n    />\n</InputGroup>\n);\n};";
const sourceCode$2z = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\nconst [selectedAccount, setSelectedAccount] = useState(null);\nconst label2 = 'label2';\n\nreturn (\n<InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n    <AccountSelector\n        accounts={[\n            {\n                accountNumber: '1234 56 789101',\n                name: 'Brukskonto',\n                currencyCode: 'NOK',\n                balance: 1337,\n            },\n            {\n                accountNumber: '1234 56 789102',\n                name: 'Brukskonto2',\n                currencyCode: 'NOK',\n                balance: 13337,\n            },\n            {\n                accountNumber: '2234 56 789102',\n                name: 'Sparekonto1',\n                currencyCode: 'EUR',\n                balance: 109236,\n            },\n            {\n                accountNumber: '1253 47 789102',\n                name: 'Sparekonto2',\n                currencyCode: 'NOK',\n                balance: 0,\n            },\n        ]}\n        id=\"account-selector-single\"\n        locale=\"nb\"\n        onAccountSelected={value => setSelectedAccount(value)}\n        onReset={() => setSelectedAccount(null)}\n        selectedAccount={selectedAccount}\n        showBalance\n        labelId={label2}\n        ariaInvalid={false}\n    />\n</InputGroup>\n);\n};";
const sourceImports$2z = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2z = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2z = "account-selector/AccountSelector-showBalance.jsx";

var account_selector_AccountSelector_showBalance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2z,
  code: code$2z,
  sourceCode: sourceCode$2z,
  sourceImports: sourceImports$2z,
  dependencies: dependencies$2z,
  sourceFileName: sourceFileName$2z
});

const scope$2y = {useState: React.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup,SmallText: ffeCoreReact.SmallText};
const code$2y = "() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label5 = 'label5';\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n    return (\n        <div\n            style={{\n                padding: '8px',\n                background: isHighlighted ? '#ff9100' : 'white',\n            }}\n        >\n            <div>{item.name}</div>\n            <div style={{ display: 'flex', justifyContent: 'space-between' }}>\n                <SmallText>{item.accountNumber}</SmallText>\n                <SmallText>{item.amount}</SmallText>\n            </div>\n        </div>\n    );\n    };\n\n    return(\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label5}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label5}\n                listElementBody={CustomListElementBody}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    )\n}";
const sourceCode$2y = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\nimport { SmallText } from '@sb1/ffe-core-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label5 = 'label5';\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n    return (\n        <div\n            style={{\n                padding: '8px',\n                background: isHighlighted ? '#ff9100' : 'white',\n            }}\n        >\n            <div>{item.name}</div>\n            <div style={{ display: 'flex', justifyContent: 'space-between' }}>\n                <SmallText>{item.accountNumber}</SmallText>\n                <SmallText>{item.amount}</SmallText>\n            </div>\n        </div>\n    );\n    };\n\n    return(\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label5}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label5}\n                listElementBody={CustomListElementBody}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    )\n}";
const sourceImports$2y = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\nimport { SmallText } from '@sb1/ffe-core-react';";
const dependencies$2y = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react","@sb1/ffe-core-react"];
const sourceFileName$2y = "account-selector/AccountSelector-customListDesign.jsx";

var account_selector_AccountSelector_customListDesign = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2y,
  code: code$2y,
  sourceCode: sourceCode$2y,
  sourceImports: sourceImports$2y,
  dependencies: dependencies$2y,
  sourceFileName: sourceFileName$2y
});

const scope$2x = {useState: React.useState,AccountSelectorMulti: ffeAccountSelectorReact.AccountSelectorMulti,Label: ffeFormReact.Label};
const code$2x = "() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n    ];\n\n    const onAccountSelected = acc => {\n        const filteredAccounts = selectedAccounts.filter(\n            a => a.accountNumber !== acc.accountNumber,\n        );\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    return (\n        <>\n            <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n            <AccountSelectorMulti\n                id=\"account-selector-multi\"\n                locale=\"nb\"\n                accounts={accounts}\n                onAccountSelected={onAccountSelected}\n                onBlur={f => f}\n                selectedAccounts={selectedAccounts}\n                value={value}\n            />\n        </>\n    );\n};";
const sourceCode$2x = "import { useState } from 'react';\nimport { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n    ];\n\n    const onAccountSelected = acc => {\n        const filteredAccounts = selectedAccounts.filter(\n            a => a.accountNumber !== acc.accountNumber,\n        );\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    return (\n        <>\n            <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n            <AccountSelectorMulti\n                id=\"account-selector-multi\"\n                locale=\"nb\"\n                accounts={accounts}\n                onAccountSelected={onAccountSelected}\n                onBlur={f => f}\n                selectedAccounts={selectedAccounts}\n                value={value}\n            />\n        </>\n    );\n};\n";
const sourceImports$2x = "import { useState } from 'react';\nimport { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$2x = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2x = "account-selector/AccountSelectorMulti.jsx";

var account_selector_AccountSelectorMulti = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2x,
  code: code$2x,
  sourceCode: sourceCode$2x,
  sourceImports: sourceImports$2x,
  dependencies: dependencies$2x,
  sourceFileName: sourceFileName$2x
});

const scope$2w = {useState: React.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2w = "() => {\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    const label1 = 'label1';\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label1} >\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={val => setSelectedAccount(val)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label1}\n                ariaInvalid={false}\n            />\n        </InputGroup>);\n}";
const sourceCode$2w = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    const label1 = 'label1';\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label1} >\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={val => setSelectedAccount(val)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label1}\n                ariaInvalid={false}\n            />\n        </InputGroup>);\n}\n";
const sourceImports$2w = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2w = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2w = "account-selector/AccountSelector.jsx";

var account_selector_AccountSelector = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2w,
  code: code$2w,
  sourceCode: sourceCode$2w,
  sourceImports: sourceImports$2w,
  dependencies: dependencies$2w,
  sourceFileName: sourceFileName$2w
});

const scope$2v = {React: React__default["default"],formatCurrency: formatCurrency__default["default"]};
const code$2v = "<React.Fragment>\n    <div>{formatCurrency(100)}</div>\n    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>\n</React.Fragment>;";
const sourceCode$2v = "import React from 'react';\nimport formatCurrency from '@sb1/ffe-formatters/lib/formatCurrency';\n\n<React.Fragment>\n    <div>{formatCurrency(100)}</div>\n    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>\n</React.Fragment>;";
const sourceImports$2v = "import React from 'react';\nimport formatCurrency from '@sb1/ffe-formatters/lib/formatCurrency';";
const dependencies$2v = ["react","@sb1/ffe-formatters/lib/formatCurrency"];
const sourceFileName$2v = "formatting/Currency.jsx";

var formatting_Currency = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2v,
  code: code$2v,
  sourceCode: sourceCode$2v,
  sourceImports: sourceImports$2v,
  dependencies: dependencies$2v,
  sourceFileName: sourceFileName$2v
});

const scope$2u = {formatFodselsnummer: formatFodselsnummer__default["default"]};
const code$2u = "<span>{formatFodselsnummer('01010112345')}</span>";
const sourceCode$2u = "import formatFodselsnummer from '@sb1/ffe-formatters/lib/formatFodselsnummer';\n\n<span>{formatFodselsnummer('01010112345')}</span>";
const sourceImports$2u = "import formatFodselsnummer from '@sb1/ffe-formatters/lib/formatFodselsnummer';";
const dependencies$2u = ["@sb1/ffe-formatters/lib/formatFodselsnummer"];
const sourceFileName$2u = "formatting/Birthnumber.jsx";

var formatting_Birthnumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2u,
  code: code$2u,
  sourceCode: sourceCode$2u,
  sourceImports: sourceImports$2u,
  dependencies: dependencies$2u,
  sourceFileName: sourceFileName$2u
});

const scope$2t = {React: React__default["default"],formatPercentage: formatPercentage__default["default"]};
const code$2t = "<React.Fragment>\n    <div>{formatPercentage(10.00001)}</div>\n    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>\n    <div>{formatPercentage(1, { minDecimals: 2 })}</div>\n</React.Fragment>;";
const sourceCode$2t = "import React from 'react';\nimport formatPercentage from '@sb1/ffe-formatters/lib/formatPercentage';\n\n<React.Fragment>\n    <div>{formatPercentage(10.00001)}</div>\n    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>\n    <div>{formatPercentage(1, { minDecimals: 2 })}</div>\n</React.Fragment>;";
const sourceImports$2t = "import React from 'react';\nimport formatPercentage from '@sb1/ffe-formatters/lib/formatPercentage';";
const dependencies$2t = ["react","@sb1/ffe-formatters/lib/formatPercentage"];
const sourceFileName$2t = "formatting/Percentage.jsx";

var formatting_Percentage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2t,
  code: code$2t,
  sourceCode: sourceCode$2t,
  sourceImports: sourceImports$2t,
  dependencies: dependencies$2t,
  sourceFileName: sourceFileName$2t
});

const scope$2s = {React: React__default["default"],formatNumber: formatNumber__default["default"]};
const code$2s = "<React.Fragment>\n    <div>{formatNumber(1000000)}</div>\n    <div>{formatNumber(1234.567)}</div>\n    <div>{formatNumber(1234.567, { decimals: 2 })}</div>\n    <div>\n        {formatNumber(1234.567, {\n            decimals: 2,\n            thousandSeparator: ',',\n            decimalMark: '.',\n        })}\n    </div>\n</React.Fragment>;";
const sourceCode$2s = "import React from 'react';\nimport formatNumber from '@sb1/ffe-formatters/lib/formatNumber';\n\n\n<React.Fragment>\n    <div>{formatNumber(1000000)}</div>\n    <div>{formatNumber(1234.567)}</div>\n    <div>{formatNumber(1234.567, { decimals: 2 })}</div>\n    <div>\n        {formatNumber(1234.567, {\n            decimals: 2,\n            thousandSeparator: ',',\n            decimalMark: '.',\n        })}\n    </div>\n</React.Fragment>;";
const sourceImports$2s = "import React from 'react';\nimport formatNumber from '@sb1/ffe-formatters/lib/formatNumber';";
const dependencies$2s = ["react","@sb1/ffe-formatters/lib/formatNumber"];
const sourceFileName$2s = "formatting/Numbers.jsx";

var formatting_Numbers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2s,
  code: code$2s,
  sourceCode: sourceCode$2s,
  sourceImports: sourceImports$2s,
  dependencies: dependencies$2s,
  sourceFileName: sourceFileName$2s
});

const scope$2r = {formatAccountNumber: formatAccountNumber__default["default"]};
const code$2r = "<span>{formatAccountNumber('90010012345')}</span>;";
const sourceCode$2r = "import formatAccountNumber from '@sb1/ffe-formatters/lib/formatAccountNumber';\n\n<span>{formatAccountNumber('90010012345')}</span>;";
const sourceImports$2r = "import formatAccountNumber from '@sb1/ffe-formatters/lib/formatAccountNumber';";
const dependencies$2r = ["@sb1/ffe-formatters/lib/formatAccountNumber"];
const sourceFileName$2r = "formatting/Accountnumber.jsx";

var formatting_Accountnumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2r,
  code: code$2r,
  sourceCode: sourceCode$2r,
  sourceImports: sourceImports$2r,
  dependencies: dependencies$2r,
  sourceFileName: sourceFileName$2r
});

const scope$2q = {React: React__default["default"],formatDistance: formatDistance__default["default"]};
const code$2q = "<React.Fragment>\n    <div>{formatDistance(160520)}</div>\n    <div>{formatDistance(12345, { unit: 'mi' })}</div>\n</React.Fragment>;";
const sourceCode$2q = "import React from 'react';\nimport formatDistance from '@sb1/ffe-formatters/lib/formatDistance';\n\n<React.Fragment>\n    <div>{formatDistance(160520)}</div>\n    <div>{formatDistance(12345, { unit: 'mi' })}</div>\n</React.Fragment>;";
const sourceImports$2q = "import React from 'react';\nimport formatDistance from '@sb1/ffe-formatters/lib/formatDistance';";
const dependencies$2q = ["react","@sb1/ffe-formatters/lib/formatDistance"];
const sourceFileName$2q = "formatting/Distance.jsx";

var formatting_Distance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2q,
  code: code$2q,
  sourceCode: sourceCode$2q,
  sourceImports: sourceImports$2q,
  dependencies: dependencies$2q,
  sourceFileName: sourceFileName$2q
});

const scope$2p = {React: React__default["default"],formatDate: formatDate__default["default"]};
const code$2p = "<React.Fragment>\n    <div>{formatDate(new Date('2000', 0, 1))}</div>\n    <div>{formatDate(946681200000)}</div>\n</React.Fragment>;";
const sourceCode$2p = "import React from 'react';\nimport formatDate from '@sb1/ffe-formatters/lib/formatDate';\n\n<React.Fragment>\n    <div>{formatDate(new Date('2000', 0, 1))}</div>\n    <div>{formatDate(946681200000)}</div>\n</React.Fragment>;";
const sourceImports$2p = "import React from 'react';\nimport formatDate from '@sb1/ffe-formatters/lib/formatDate';";
const dependencies$2p = ["react","@sb1/ffe-formatters/lib/formatDate"];
const sourceFileName$2p = "formatting/Date.jsx";

var formatting_Date = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2p,
  code: code$2p,
  sourceCode: sourceCode$2p,
  sourceImports: sourceImports$2p,
  dependencies: dependencies$2p,
  sourceFileName: sourceFileName$2p
});

const scope$2o = {Spinner: Spinner__default["default"],Paragraph: ffeCoreReact.Paragraph};
const code$2o = "<>\n    <Spinner large={true} />\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>;";
const sourceCode$2o = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n    <Spinner large={true} />\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>;\n";
const sourceImports$2o = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$2o = ["@sb1/ffe-spinner-react","@sb1/ffe-core-react"];
const sourceFileName$2o = "spinner/Spinner-large.jsx";

var spinner_Spinner_large = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2o,
  code: code$2o,
  sourceCode: sourceCode$2o,
  sourceImports: sourceImports$2o,
  dependencies: dependencies$2o,
  sourceFileName: sourceFileName$2o
});

const scope$2n = {Spinner: Spinner__default["default"]};
const code$2n = "<>\n    <Spinner /> Vennligst vent litt\n</>;";
const sourceCode$2n = "import Spinner from '@sb1/ffe-spinner-react';\n\n<>\n    <Spinner /> Vennligst vent litt\n</>;\n";
const sourceImports$2n = "import Spinner from '@sb1/ffe-spinner-react';";
const dependencies$2n = ["@sb1/ffe-spinner-react"];
const sourceFileName$2n = "spinner/Spinner.jsx";

var spinner_Spinner = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2n,
  code: code$2n,
  sourceCode: sourceCode$2n,
  sourceImports: sourceImports$2n,
  dependencies: dependencies$2n,
  sourceFileName: sourceFileName$2n
});

const scope$2m = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2m = "<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2m = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2m = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2m = ["@sb1/ffe-lists-react"];
const sourceFileName$2m = "lists/DescriptionList-mediumlarge.jsx";

var lists_DescriptionList_mediumlarge = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2m,
  code: code$2m,
  sourceCode: sourceCode$2m,
  sourceImports: sourceImports$2m,
  dependencies: dependencies$2m,
  sourceFileName: sourceFileName$2m
});

const scope$2l = {NumberedList: ffeListsReact.NumberedList,NumberedListItem: ffeListsReact.NumberedListItem};
const code$2l = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>;";
const sourceCode$2l = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>;\n";
const sourceImports$2l = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';";
const dependencies$2l = ["@sb1/ffe-lists-react"];
const sourceFileName$2l = "lists/NumberedList.jsx";

var lists_NumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2l,
  code: code$2l,
  sourceCode: sourceCode$2l,
  sourceImports: sourceImports$2l,
  dependencies: dependencies$2l,
  sourceFileName: sourceFileName$2l
});

const scope$2k = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2k = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2k = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2k = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2k = ["@sb1/ffe-lists-react"];
const sourceFileName$2k = "lists/DescriptionList-horizontal.jsx";

var lists_DescriptionList_horizontal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2k,
  code: code$2k,
  sourceCode: sourceCode$2k,
  sourceImports: sourceImports$2k,
  dependencies: dependencies$2k,
  sourceFileName: sourceFileName$2k
});

const scope$2j = {DescriptionListMultiCol: ffeListsReact.DescriptionListMultiCol,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2j = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>;";
const sourceCode$2j = "import {\n    DescriptionListMultiCol,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>;\n";
const sourceImports$2j = "import {\n    DescriptionListMultiCol,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2j = ["@sb1/ffe-lists-react"];
const sourceFileName$2j = "lists/DescriptionListMultiCol.jsx";

var lists_DescriptionListMultiCol = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2j,
  code: code$2j,
  sourceCode: sourceCode$2j,
  sourceImports: sourceImports$2j,
  dependencies: dependencies$2j,
  sourceFileName: sourceFileName$2j
});

const scope$2i = {BulletList: ffeListsReact.BulletList,BulletListItem: ffeListsReact.BulletListItem};
const code$2i = "<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>;";
const sourceCode$2i = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>;\n";
const sourceImports$2i = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';";
const dependencies$2i = ["@sb1/ffe-lists-react"];
const sourceFileName$2i = "lists/BulletList.jsx";

var lists_BulletList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2i,
  code: code$2i,
  sourceCode: sourceCode$2i,
  sourceImports: sourceImports$2i,
  dependencies: dependencies$2i,
  sourceFileName: sourceFileName$2i
});

const scope$2h = {CheckList: ffeListsReact.CheckList,CheckListItem: ffeListsReact.CheckListItem};
const code$2h = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>;";
const sourceCode$2h = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>;\n";
const sourceImports$2h = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$2h = ["@sb1/ffe-lists-react"];
const sourceFileName$2h = "lists/CheckList.jsx";

var lists_CheckList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2h,
  code: code$2h,
  sourceCode: sourceCode$2h,
  sourceImports: sourceImports$2h,
  dependencies: dependencies$2h,
  sourceFileName: sourceFileName$2h
});

const scope$2g = {StylizedNumberedList: ffeListsReact.StylizedNumberedList,StylizedNumberedListItem: ffeListsReact.StylizedNumberedListItem};
const code$2g = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>;";
const sourceCode$2g = "import {\n    StylizedNumberedList,\n    StylizedNumberedListItem,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>;\n";
const sourceImports$2g = "import {\n    StylizedNumberedList,\n    StylizedNumberedListItem,\n} from '@sb1/ffe-lists-react';";
const dependencies$2g = ["@sb1/ffe-lists-react"];
const sourceFileName$2g = "lists/StylizedNumberedList.jsx";

var lists_StylizedNumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2g,
  code: code$2g,
  sourceCode: sourceCode$2g,
  sourceImports: sourceImports$2g,
  dependencies: dependencies$2g,
  sourceFileName: sourceFileName$2g
});

const scope$2f = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2f = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2f = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2f = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2f = ["@sb1/ffe-lists-react"];
const sourceFileName$2f = "lists/DescriptionList.jsx";

var lists_DescriptionList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2f,
  code: code$2f,
  sourceCode: sourceCode$2f,
  sourceImports: sourceImports$2f,
  dependencies: dependencies$2f,
  sourceFileName: sourceFileName$2f
});

const scope$2e = {CheckList: ffeListsReact.CheckList,CheckListItem: ffeListsReact.CheckListItem};
const code$2e = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>;";
const sourceCode$2e = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>;\n";
const sourceImports$2e = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$2e = ["@sb1/ffe-lists-react"];
const sourceFileName$2e = "lists/CheckList-columns.jsx";

var lists_CheckList_columns = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2e,
  code: code$2e,
  sourceCode: sourceCode$2e,
  sourceImports: sourceImports$2e,
  dependencies: dependencies$2e,
  sourceFileName: sourceFileName$2e
});

const scope$2d = {Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$2d = "<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>;";
const sourceCode$2d = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>;\n";
const sourceImports$2d = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$2d = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$2d = "dropdown/Dropdown.jsx";

var dropdown_Dropdown = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2d,
  code: code$2d,
  sourceCode: sourceCode$2d,
  sourceImports: sourceImports$2d,
  dependencies: dependencies$2d,
  sourceFileName: sourceFileName$2d
});

const scope$2c = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState,SmallText: ffeCoreReact.SmallText};
const code$2c = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-customlistelembody';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n        return (\n            <div\n                style={{\n                    padding: '8px',\n                    background: isHighlighted ? '#ff9100' : 'white',\n                }}\n            >\n                <div>{item.organizationName}</div>\n                <div\n                    style={{ display: 'flex', justifyContent: 'space-between' }}\n                >\n                    <SmallText>{item.organizationNumber}</SmallText>\n                    <SmallText>\n                        {item.quantityUnprocessedMessages} ulest\n                    </SmallText>\n                </div>\n            </div>\n        );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                listElementBody={CustomListElementBody}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$2c = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\nimport { SmallText } from '@sb1/ffe-core-react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-customlistelembody';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n        return (\n            <div\n                style={{\n                    padding: '8px',\n                    background: isHighlighted ? '#ff9100' : 'white',\n                }}\n            >\n                <div>{item.organizationName}</div>\n                <div\n                    style={{ display: 'flex', justifyContent: 'space-between' }}\n                >\n                    <SmallText>{item.organizationNumber}</SmallText>\n                    <SmallText>\n                        {item.quantityUnprocessedMessages} ulest\n                    </SmallText>\n                </div>\n            </div>\n        );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                listElementBody={CustomListElementBody}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$2c = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\nimport { SmallText } from '@sb1/ffe-core-react';";
const dependencies$2c = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react","@sb1/ffe-core-react"];
const sourceFileName$2c = "dropdown/SearchableDropdown-customListElementBody.jsx";

var dropdown_SearchableDropdown_customListElementBody = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2c,
  code: code$2c,
  sourceCode: sourceCode$2c,
  sourceImports: sourceImports$2c,
  dependencies: dependencies$2c,
  sourceFileName: sourceFileName$2c
});

const scope$2b = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$2b = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-default';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$2b = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-default';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$2b = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$2b = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$2b = "dropdown/SearchableDropdown.jsx";

var dropdown_SearchableDropdown = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2b,
  code: code$2b,
  sourceCode: sourceCode$2b,
  sourceImports: sourceImports$2b,
  dependencies: dependencies$2b,
  sourceFileName: sourceFileName$2b
});

const scope$2a = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$2a = "() => {\n    const isLoading = true;\n    const id = 'searchabledropdow-isLoading';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownList={[]}\n                dropdownAttributes={['organizationName']}\n                isLoading={isLoading}\n                noMatch={\n                    isLoading\n                        ? { text: 'Laster bedrifter...' }\n                        : { text: 'Søket ga ingen treff' }\n                }\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$2a = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const isLoading = true;\n    const id = 'searchabledropdow-isLoading';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownList={[]}\n                dropdownAttributes={['organizationName']}\n                isLoading={isLoading}\n                noMatch={\n                    isLoading\n                        ? { text: 'Laster bedrifter...' }\n                        : { text: 'Søket ga ingen treff' }\n                }\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$2a = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$2a = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$2a = "dropdown/SearchableDropdown-isLoading.jsx";

var dropdown_SearchableDropdown_isLoading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2a,
  code: code$2a,
  sourceCode: sourceCode$2a,
  sourceImports: sourceImports$2a,
  dependencies: dependencies$2a,
  sourceFileName: sourceFileName$2a
});

const scope$29 = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$29 = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-selectedItem';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(companies[2]);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption({ item })}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                selectedItem={selectedOption}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$29 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-selectedItem';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(companies[2]);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption({ item })}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                selectedItem={selectedOption}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$29 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$29 = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$29 = "dropdown/SearchableDropdown-selectedItem.jsx";

var dropdown_SearchableDropdown_selectedItem = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$29,
  code: code$29,
  sourceCode: sourceCode$29,
  sourceImports: sourceImports$29,
  dependencies: dependencies$29,
  sourceFileName: sourceFileName$29
});

const scope$28 = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$28 = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-extraresults';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{\n                    text: 'Søket ga ingen treff',\n                    dropdownList: companies.slice(1, 4),\n                }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$28 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-extraresults';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{\n                    text: 'Søket ga ingen treff',\n                    dropdownList: companies.slice(1, 4),\n                }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$28 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$28 = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$28 = "dropdown/SearchableDropdown-extraresults.jsx";

var dropdown_SearchableDropdown_extraresults = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$28,
  code: code$28,
  sourceCode: sourceCode$28,
  sourceImports: sourceImports$28,
  dependencies: dependencies$28,
  sourceFileName: sourceFileName$28
});

const scope$27 = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$27 = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-customMatchFunc';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const cleanString = value => `${value}`.replace(/\\s/g, '').toLowerCase();\n    const searchMatcher = (inputValue, searchAttributes) => item => {\n        const cleanedInputValue = cleanString(inputValue);\n        return searchAttributes\n            .map(searchAttribute => cleanString(item[searchAttribute]))\n            .some(cleanedItemAttribute =>\n                cleanedItemAttribute.includes(cleanedInputValue),\n            );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                searchMatcher={searchMatcher}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$27 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-customMatchFunc';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const cleanString = value => `${value}`.replace(/\\s/g, '').toLowerCase();\n    const searchMatcher = (inputValue, searchAttributes) => item => {\n        const cleanedInputValue = cleanString(inputValue);\n        return searchAttributes\n            .map(searchAttribute => cleanString(item[searchAttribute]))\n            .some(cleanedItemAttribute =>\n                cleanedItemAttribute.includes(cleanedInputValue),\n            );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                searchMatcher={searchMatcher}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$27 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$27 = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$27 = "dropdown/SearchableDropdown-customMatchFunction.jsx";

var dropdown_SearchableDropdown_customMatchFunction = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$27,
  code: code$27,
  sourceCode: sourceCode$27,
  sourceImports: sourceImports$27,
  dependencies: dependencies$27,
  sourceFileName: sourceFileName$27
});

const scope$26 = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$26 = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-2attrs';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$26 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-2attrs';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$26 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$26 = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$26 = "dropdown/SearchableDropdown-2attributes.jsx";

var dropdown_SearchableDropdown_2attributes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$26,
  code: code$26,
  sourceCode: sourceCode$26,
  sourceImports: sourceImports$26,
  dependencies: dependencies$26,
  sourceFileName: sourceFileName$26
});

const scope$25 = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: React.useState};
const code$25 = "() => {\n    const listWithThirtyThousandElements = new Array(30000)\n        .fill(null)\n        .map((_, i) => ({ organizationName: `Navn ${i}` }));\n\n    const id = 'searchabledropdow-highCapacity';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={listWithThirtyThousandElements}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n                highCapacity={true}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$25 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const listWithThirtyThousandElements = new Array(30000)\n        .fill(null)\n        .map((_, i) => ({ organizationName: `Navn ${i}` }));\n\n    const id = 'searchabledropdow-highCapacity';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={listWithThirtyThousandElements}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n                highCapacity={true}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$25 = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$25 = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$25 = "dropdown/SearchableDropdown-highCapacity.jsx";

var dropdown_SearchableDropdown_highCapacity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$25,
  code: code$25,
  sourceCode: sourceCode$25,
  sourceImports: sourceImports$25,
  dependencies: dependencies$25,
  sourceFileName: sourceFileName$25
});

const scope$24 = {Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup};
const code$24 = "<InputGroup label=\"Måned\" fieldMessage=\"Du må velge måned\">\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>\n            Velg måned\n        </option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>;";
const sourceCode$24 = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n<InputGroup label=\"Måned\" fieldMessage=\"Du må velge måned\">\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>\n            Velg måned\n        </option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>;\n";
const sourceImports$24 = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$24 = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$24 = "dropdown/Dropdown-invalid.jsx";

var dropdown_Dropdown_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$24,
  code: code$24,
  sourceCode: sourceCode$24,
  sourceImports: sourceImports$24,
  dependencies: dependencies$24,
  sourceFileName: sourceFileName$24
});

const scope$23 = {InfoMessage: ffeMessageBoxReact.InfoMessage,Paragraph: ffeCoreReact.Paragraph};
const code$23 = "<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>;";
const sourceCode$23 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>;\n";
const sourceImports$23 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$23 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$23 = "message-box/InfoMessage.jsx";

var message_box_InfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$23,
  code: code$23,
  sourceCode: sourceCode$23,
  sourceImports: sourceImports$23,
  dependencies: dependencies$23,
  sourceFileName: sourceFileName$23
});

const scope$22 = {ErrorMessage: ffeMessageBoxReact.ErrorMessage,Paragraph: ffeCoreReact.Paragraph};
const code$22 = "<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;";
const sourceCode$22 = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;\n";
const sourceImports$22 = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$22 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$22 = "message-box/ErrorMessage-alertFalse.jsx";

var message_box_ErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$22,
  code: code$22,
  sourceCode: sourceCode$22,
  sourceImports: sourceImports$22,
  dependencies: dependencies$22,
  sourceFileName: sourceFileName$22
});

const scope$21 = {InfoMessage: ffeMessageBoxReact.InfoMessage,InfoMessageList: ffeMessageBoxReact.InfoMessageList,InfoMessageListItem: ffeMessageBoxReact.InfoMessageListItem};
const code$21 = "<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>;";
const sourceCode$21 = "import {\n    InfoMessage,\n    InfoMessageList,\n    InfoMessageListItem,\n} from '@sb1/ffe-message-box-react';\n\n<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>;\n";
const sourceImports$21 = "import {\n    InfoMessage,\n    InfoMessageList,\n    InfoMessageListItem,\n} from '@sb1/ffe-message-box-react';";
const dependencies$21 = ["@sb1/ffe-message-box-react"];
const sourceFileName$21 = "message-box/InfoMessageList.jsx";

var message_box_InfoMessageList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$21,
  code: code$21,
  sourceCode: sourceCode$21,
  sourceImports: sourceImports$21,
  dependencies: dependencies$21,
  sourceFileName: sourceFileName$21
});

const scope$20 = {InfoMessage: ffeMessageBoxReact.InfoMessage,Paragraph: ffeCoreReact.Paragraph,HandlevognIkon: ffeIconsReact.HandlevognIkon};
const code$20 = "<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon />}>\n    <Paragraph>Du har ingenting i handlevognen din.</Paragraph>\n</InfoMessage>;";
const sourceCode$20 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';\n\n<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon />}>\n    <Paragraph>Du har ingenting i handlevognen din.</Paragraph>\n</InfoMessage>;\n";
const sourceImports$20 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';";
const dependencies$20 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$20 = "message-box/InfoMessage-customIcon.jsx";

var message_box_InfoMessage_customIcon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$20,
  code: code$20,
  sourceCode: sourceCode$20,
  sourceImports: sourceImports$20,
  dependencies: dependencies$20,
  sourceFileName: sourceFileName$20
});

const scope$1$ = {SuccessMessage: ffeMessageBoxReact.SuccessMessage,Paragraph: ffeCoreReact.Paragraph};
const code$1$ = "<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>;";
const sourceCode$1$ = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>;\n";
const sourceImports$1$ = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1$ = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$1$ = "message-box/SuccessMessage.jsx";

var message_box_SuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1$,
  code: code$1$,
  sourceCode: sourceCode$1$,
  sourceImports: sourceImports$1$,
  dependencies: dependencies$1$,
  sourceFileName: sourceFileName$1$
});

const scope$1_ = {TipsMessage: ffeMessageBoxReact.TipsMessage,Paragraph: ffeCoreReact.Paragraph};
const code$1_ = "<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>;";
const sourceCode$1_ = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>;\n";
const sourceImports$1_ = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1_ = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$1_ = "message-box/TipsMessage.jsx";

var message_box_TipsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1_,
  code: code$1_,
  sourceCode: sourceCode$1_,
  sourceImports: sourceImports$1_,
  dependencies: dependencies$1_,
  sourceFileName: sourceFileName$1_
});

const scope$1Z = {ErrorMessage: ffeMessageBoxReact.ErrorMessage,Paragraph: ffeCoreReact.Paragraph};
const code$1Z = "<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;";
const sourceCode$1Z = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;\n";
const sourceImports$1Z = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1Z = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$1Z = "message-box/ErrorMessage.jsx";

var message_box_ErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Z,
  code: code$1Z,
  sourceCode: sourceCode$1Z,
  sourceImports: sourceImports$1Z,
  dependencies: dependencies$1Z,
  sourceFileName: sourceFileName$1Z
});

const scope$1Y = {TaskButton: ffeButtonsReact.TaskButton,ButtonGroup: ffeButtonsReact.ButtonGroup,PlussIkon: ffeIconsReact.PlussIkon};
const code$1Y = "<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>;";
const sourceCode$1Y = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>;\n";
const sourceImports$1Y = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from '@sb1/ffe-icons-react';";
const dependencies$1Y = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$1Y = "buttons/TaskButton.jsx";

var buttons_TaskButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Y,
  code: code$1Y,
  sourceCode: sourceCode$1Y,
  sourceImports: sourceImports$1Y,
  dependencies: dependencies$1Y,
  sourceFileName: sourceFileName$1Y
});

const scope$1X = {TertiaryButton: ffeButtonsReact.TertiaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$1X = "<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>;";
const sourceCode$1X = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>;\n";
const sourceImports$1X = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$1X = ["@sb1/ffe-buttons-react"];
const sourceFileName$1X = "buttons/TertiaryButton.jsx";

var buttons_TertiaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1X,
  code: code$1X,
  sourceCode: sourceCode$1X,
  sourceImports: sourceImports$1X,
  dependencies: dependencies$1X,
  sourceFileName: sourceFileName$1X
});

const scope$1W = {ButtonGroup: ffeButtonsReact.ButtonGroup,ActionButton: ffeButtonsReact.ActionButton,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1W = "<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;";
const sourceCode$1W = "import {\n    ButtonGroup,\n    ActionButton,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;\n";
const sourceImports$1W = "import {\n    ButtonGroup,\n    ActionButton,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$1W = ["@sb1/ffe-buttons-react"];
const sourceFileName$1W = "buttons/ariaLoadingMessage.jsx";

var buttons_ariaLoadingMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1W,
  code: code$1W,
  sourceCode: sourceCode$1W,
  sourceImports: sourceImports$1W,
  dependencies: dependencies$1W,
  sourceFileName: sourceFileName$1W
});

const scope$1V = {ButtonGroup: ffeButtonsReact.ButtonGroup,ShortcutButton: ffeButtonsReact.ShortcutButton};
const code$1V = "<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>;";
const sourceCode$1V = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>;\n";
const sourceImports$1V = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';";
const dependencies$1V = ["@sb1/ffe-buttons-react"];
const sourceFileName$1V = "buttons/ShortcutButton.jsx";

var buttons_ShortcutButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1V,
  code: code$1V,
  sourceCode: sourceCode$1V,
  sourceImports: sourceImports$1V,
  dependencies: dependencies$1V,
  sourceFileName: sourceFileName$1V
});

const scope$1U = {ActionButton: ffeButtonsReact.ActionButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$1U = "<>\n    <ButtonGroup thin={true}>\n        <ActionButton onClick={f => f}>Action knapp</ActionButton>\n        <ActionButton\n            isLoading={true}\n            onClick={f => f}\n            ariaLoadingMessage=\"Vennligst vent...\"\n        >\n            Action knapp\n        </ActionButton>\n    </ButtonGroup>\n</>;";
const sourceCode$1U = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup thin={true}>\n        <ActionButton onClick={f => f}>Action knapp</ActionButton>\n        <ActionButton\n            isLoading={true}\n            onClick={f => f}\n            ariaLoadingMessage=\"Vennligst vent...\"\n        >\n            Action knapp\n        </ActionButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$1U = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$1U = ["@sb1/ffe-buttons-react"];
const sourceFileName$1U = "buttons/ActionButton.jsx";

var buttons_ActionButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1U,
  code: code$1U,
  sourceCode: sourceCode$1U,
  sourceImports: sourceImports$1U,
  dependencies: dependencies$1U,
  sourceFileName: sourceFileName$1U
});

const scope$1T = {useState: React.useState,InlineExpandButton: ffeButtonsReact.InlineExpandButton,Collapse: Collapse__default["default"],Paragraph: ffeCoreReact.Paragraph};
const code$1T = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (\n        <>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante\n                tilbud.\n                <InlineExpandButton\n                    aria-controls=\"inline-expand-example-details\"\n                    aria-expanded={isExpanded}\n                    isExpanded={isExpanded}\n                    onClick={() => setExpanded(!isExpanded)}\n                >\n                    {isExpanded ? 'Vis mindre' : 'Vis mer'}\n                </InlineExpandButton>\n            </Paragraph>\n\n            <Collapse\n                id=\"inline-expand-example-details\"\n                isOpen={isExpanded}\n                role=\"region\"\n            >\n                <div>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                </div>\n            </Collapse>\n        </>\n    );\n};";
const sourceCode$1T = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (\n        <>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante\n                tilbud.\n                <InlineExpandButton\n                    aria-controls=\"inline-expand-example-details\"\n                    aria-expanded={isExpanded}\n                    isExpanded={isExpanded}\n                    onClick={() => setExpanded(!isExpanded)}\n                >\n                    {isExpanded ? 'Vis mindre' : 'Vis mer'}\n                </InlineExpandButton>\n            </Paragraph>\n\n            <Collapse\n                id=\"inline-expand-example-details\"\n                isOpen={isExpanded}\n                role=\"region\"\n            >\n                <div>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                </div>\n            </Collapse>\n        </>\n    );\n};\n";
const sourceImports$1T = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1T = ["react","@sb1/ffe-buttons-react","@sb1/ffe-collapse-react","@sb1/ffe-core-react"];
const sourceFileName$1T = "buttons/InlineExpandButton.jsx";

var buttons_InlineExpandButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1T,
  code: code$1T,
  sourceCode: sourceCode$1T,
  sourceImports: sourceImports$1T,
  dependencies: dependencies$1T,
  sourceFileName: sourceFileName$1T
});

const scope$1S = {useState: React.useState,ExpandButton: ffeButtonsReact.ExpandButton};
const code$1S = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n};";
const sourceCode$1S = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n};\n";
const sourceImports$1S = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$1S = ["react","@sb1/ffe-buttons-react"];
const sourceFileName$1S = "buttons/ExpandButton.jsx";

var buttons_ExpandButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1S,
  code: code$1S,
  sourceCode: sourceCode$1S,
  sourceImports: sourceImports$1S,
  dependencies: dependencies$1S,
  sourceFileName: sourceFileName$1S
});

const scope$1R = {SecondaryButton: ffeButtonsReact.SecondaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup,BindersIkon: ffeIconsReact.BindersIkon};
const code$1R = "<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;";
const sourceCode$1R = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;\n";
const sourceImports$1R = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from '@sb1/ffe-icons-react';";
const dependencies$1R = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$1R = "buttons/SecondaryButton.jsx";

var buttons_SecondaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1R,
  code: code$1R,
  sourceCode: sourceCode$1R,
  sourceImports: sourceImports$1R,
  dependencies: dependencies$1R,
  sourceFileName: sourceFileName$1R
});

const scope$1Q = {BackButton: ffeButtonsReact.BackButton};
const code$1Q = "<BackButton onClick={f => f}>Tilbake</BackButton>;";
const sourceCode$1Q = "import { BackButton } from '@sb1/ffe-buttons-react';\n\n<BackButton onClick={f => f}>Tilbake</BackButton>;\n";
const sourceImports$1Q = "import { BackButton } from '@sb1/ffe-buttons-react';";
const dependencies$1Q = ["@sb1/ffe-buttons-react"];
const sourceFileName$1Q = "buttons/BackButton.jsx";

var buttons_BackButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Q,
  code: code$1Q,
  sourceCode: sourceCode$1Q,
  sourceImports: sourceImports$1Q,
  dependencies: dependencies$1Q,
  sourceFileName: sourceFileName$1Q
});

const scope$1P = {PrimaryButton: ffeButtonsReact.PrimaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$1P = "<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>;";
const sourceCode$1P = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>;\n";
const sourceImports$1P = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$1P = ["@sb1/ffe-buttons-react"];
const sourceFileName$1P = "buttons/PrimaryButton.jsx";

var buttons_PrimaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1P,
  code: code$1P,
  sourceCode: sourceCode$1P,
  sourceImports: sourceImports$1P,
  dependencies: dependencies$1P,
  sourceFileName: sourceFileName$1P
});

const scope$1O = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1O = "<>\n    <ButtonGroup inline={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$1O = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup inline={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$1O = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$1O = ["@sb1/ffe-buttons-react"];
const sourceFileName$1O = "buttons/ButtonGroup-inline.jsx";

var buttons_ButtonGroup_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1O,
  code: code$1O,
  sourceCode: sourceCode$1O,
  sourceImports: sourceImports$1O,
  dependencies: dependencies$1O,
  sourceFileName: sourceFileName$1O
});

const scope$1N = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$1N = "<>\n    <ButtonGroup thin={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$1N = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup thin={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$1N = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$1N = ["@sb1/ffe-buttons-react"];
const sourceFileName$1N = "buttons/ButtonGroup-thin.jsx";

var buttons_ButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1N,
  code: code$1N,
  sourceCode: sourceCode$1N,
  sourceImports: sourceImports$1N,
  dependencies: dependencies$1N,
  sourceFileName: sourceFileName$1N
});

const scope$1M = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$1M = "<>\n    <ButtonGroup>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$1M = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$1M = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$1M = ["@sb1/ffe-buttons-react"];
const sourceFileName$1M = "buttons/ButtonGroup.jsx";

var buttons_ButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1M,
  code: code$1M,
  sourceCode: sourceCode$1M,
  sourceImports: sourceImports$1M,
  dependencies: dependencies$1M,
  sourceFileName: sourceFileName$1M
});

const scope$1L = {Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$1L = "<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>;";
const sourceCode$1L = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>;\n";
const sourceImports$1L = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1L = ["@sb1/ffe-accordion-react"];
const sourceFileName$1L = "accordion/Accordion-open.jsx";

var accordion_Accordion_open = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1L,
  code: code$1L,
  sourceCode: sourceCode$1L,
  sourceImports: sourceImports$1L,
  dependencies: dependencies$1L,
  sourceFileName: sourceFileName$1L
});

const scope$1K = {Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$1K = "<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>;";
const sourceCode$1K = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>;\n";
const sourceImports$1K = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1K = ["@sb1/ffe-accordion-react"];
const sourceFileName$1K = "accordion/Accordion.jsx";

var accordion_Accordion = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1K,
  code: code$1K,
  sourceCode: sourceCode$1K,
  sourceImports: sourceImports$1K,
  dependencies: dependencies$1K,
  sourceFileName: sourceFileName$1K
});

const scope$1J = {useState: React.useState,Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$1J = "() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n};";
const sourceCode$1J = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n};\n";
const sourceImports$1J = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$1J = ["react","@sb1/ffe-accordion-react"];
const sourceFileName$1J = "accordion/Accordion-managed.jsx";

var accordion_Accordion_managed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1J,
  code: code$1J,
  sourceCode: sourceCode$1J,
  sourceImports: sourceImports$1J,
  dependencies: dependencies$1J,
  sourceFileName: sourceFileName$1J
});

const scope$1I = {Tab: ffeTabsReact.Tab,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1I = "<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$1I = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$1I = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1I = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$1I = "tabs/Tab-condensed.jsx";

var tabs_Tab_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1I,
  code: code$1I,
  sourceCode: sourceCode$1I,
  sourceImports: sourceImports$1I,
  dependencies: dependencies$1I,
  sourceFileName: sourceFileName$1I
});

const scope$1H = {Tab: ffeTabsReact.Tab};
const code$1H = "<Tab selected={true}>Dette er en valgt fane</Tab>;";
const sourceCode$1H = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab selected={true}>Dette er en valgt fane</Tab>;\n";
const sourceImports$1H = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$1H = ["@sb1/ffe-tabs-react"];
const sourceFileName$1H = "tabs/Tab-selected.jsx";

var tabs_Tab_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1H,
  code: code$1H,
  sourceCode: sourceCode$1H,
  sourceImports: sourceImports$1H,
  dependencies: dependencies$1H,
  sourceFileName: sourceFileName$1H
});

const scope$1G = {Tab: ffeTabsReact.Tab};
const code$1G = "<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>;";
const sourceCode$1G = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>;\n";
const sourceImports$1G = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$1G = ["@sb1/ffe-tabs-react"];
const sourceFileName$1G = "tabs/Tab-customProps.jsx";

var tabs_Tab_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1G,
  code: code$1G,
  sourceCode: sourceCode$1G,
  sourceImports: sourceImports$1G,
  dependencies: dependencies$1G,
  sourceFileName: sourceFileName$1G
});

const scope$1F = {Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup};
const code$1F = "<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;";
const sourceCode$1F = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;\n";
const sourceImports$1F = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1F = ["@sb1/ffe-tabs-react"];
const sourceFileName$1F = "tabs/TabGroup.jsx";

var tabs_TabGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1F,
  code: code$1F,
  sourceCode: sourceCode$1F,
  sourceImports: sourceImports$1F,
  dependencies: dependencies$1F,
  sourceFileName: sourceFileName$1F
});

const scope$1E = {TabButton: ffeTabsReact.TabButton};
const code$1E = "<TabButton>Dette er en tab button</TabButton>;";
const sourceCode$1E = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton>Dette er en tab button</TabButton>;\n";
const sourceImports$1E = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1E = ["@sb1/ffe-tabs-react"];
const sourceFileName$1E = "tabs/TabButton.jsx";

var tabs_TabButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1E,
  code: code$1E,
  sourceCode: sourceCode$1E,
  sourceImports: sourceImports$1E,
  dependencies: dependencies$1E,
  sourceFileName: sourceFileName$1E
});

const scope$1D = {useState: React.useState,Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup,HusIkon: ffeIconsReact.HusIkon,BilIkon: ffeIconsReact.BilIkon,IconCard: ffeCardsReact.IconCard};
const code$1D = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabGroup>\n                <Tab\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </Tab>\n\n                <Tab\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </Tab>\n            </TabGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};";
const sourceCode$1D = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabGroup>\n                <Tab\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </Tab>\n\n                <Tab\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </Tab>\n            </TabGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};\n";
const sourceImports$1D = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$1D = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$1D = "tabs/TabGroup-advanced.jsx";

var tabs_TabGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1D,
  code: code$1D,
  sourceCode: sourceCode$1D,
  sourceImports: sourceImports$1D,
  dependencies: dependencies$1D,
  sourceFileName: sourceFileName$1D
});

const scope$1C = {Tab: ffeTabsReact.Tab};
const code$1C = "<Tab>Dette er en fane</Tab>;";
const sourceCode$1C = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab>Dette er en fane</Tab>;\n";
const sourceImports$1C = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$1C = ["@sb1/ffe-tabs-react"];
const sourceFileName$1C = "tabs/Tab.jsx";

var tabs_Tab = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1C,
  code: code$1C,
  sourceCode: sourceCode$1C,
  sourceImports: sourceImports$1C,
  dependencies: dependencies$1C,
  sourceFileName: sourceFileName$1C
});

const scope$1B = {TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup};
const code$1B = "<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>;";
const sourceCode$1B = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>;\n";
const sourceImports$1B = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1B = ["@sb1/ffe-tabs-react"];
const sourceFileName$1B = "tabs/TabButtonGroup-thin.jsx";

var tabs_TabButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1B,
  code: code$1B,
  sourceCode: sourceCode$1B,
  sourceImports: sourceImports$1B,
  dependencies: dependencies$1B,
  sourceFileName: sourceFileName$1B
});

const scope$1A = {TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup};
const code$1A = "<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>;";
const sourceCode$1A = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>;\n";
const sourceImports$1A = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1A = ["@sb1/ffe-tabs-react"];
const sourceFileName$1A = "tabs/TabButtonGroup.jsx";

var tabs_TabButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1A,
  code: code$1A,
  sourceCode: sourceCode$1A,
  sourceImports: sourceImports$1A,
  dependencies: dependencies$1A,
  sourceFileName: sourceFileName$1A
});

const scope$1z = {useState: React.useState,TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup,HusIkon: ffeIconsReact.HusIkon,BilIkon: ffeIconsReact.BilIkon,IconCard: ffeCardsReact.IconCard};
const code$1z = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabButtonGroup>\n                <TabButton\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </TabButton>\n\n                <TabButton\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </TabButton>\n            </TabButtonGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};";
const sourceCode$1z = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabButtonGroup>\n                <TabButton\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </TabButton>\n\n                <TabButton\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </TabButton>\n            </TabButtonGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};\n";
const sourceImports$1z = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$1z = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$1z = "tabs/TabButtonGroup-advanced.jsx";

var tabs_TabButtonGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1z,
  code: code$1z,
  sourceCode: sourceCode$1z,
  sourceImports: sourceImports$1z,
  dependencies: dependencies$1z,
  sourceFileName: sourceFileName$1z
});

const scope$1y = {TabButton: ffeTabsReact.TabButton};
const code$1y = "<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>;";
const sourceCode$1y = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>;\n";
const sourceImports$1y = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1y = ["@sb1/ffe-tabs-react"];
const sourceFileName$1y = "tabs/TabButton-customProps.jsx";

var tabs_TabButton_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1y,
  code: code$1y,
  sourceCode: sourceCode$1y,
  sourceImports: sourceImports$1y,
  dependencies: dependencies$1y,
  sourceFileName: sourceFileName$1y
});

const scope$1x = {Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup};
const code$1x = "<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;";
const sourceCode$1x = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;\n";
const sourceImports$1x = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1x = ["@sb1/ffe-tabs-react"];
const sourceFileName$1x = "tabs/TabGroup-thin.jsx";

var tabs_TabGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1x,
  code: code$1x,
  sourceCode: sourceCode$1x,
  sourceImports: sourceImports$1x,
  dependencies: dependencies$1x,
  sourceFileName: sourceFileName$1x
});

const scope$1w = {TabButton: ffeTabsReact.TabButton,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1w = "<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$1w = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$1w = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1w = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$1w = "tabs/TabButton-condensed.jsx";

var tabs_TabButton_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1w,
  code: code$1w,
  sourceCode: sourceCode$1w,
  sourceImports: sourceImports$1w,
  dependencies: dependencies$1w,
  sourceFileName: sourceFileName$1w
});

const scope$1v = {TabButton: ffeTabsReact.TabButton};
const code$1v = "<TabButton selected={true}>Dette er en valgt tab button</TabButton>;";
const sourceCode$1v = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton selected={true}>Dette er en valgt tab button</TabButton>;\n";
const sourceImports$1v = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1v = ["@sb1/ffe-tabs-react"];
const sourceFileName$1v = "tabs/TabButton-selected.jsx";

var tabs_TabButton_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1v,
  code: code$1v,
  sourceCode: sourceCode$1v,
  sourceImports: sourceImports$1v,
  dependencies: dependencies$1v,
  sourceFileName: sourceFileName$1v
});

const scope$1u = {ChartDonut: ChartDonut__default["default"]};
const code$1u = "<ChartDonut\n    label={\n        <div\n            style={{\n                marginTop: 10,\n                textAlign: 'center',\n                width: '100%',\n            }}\n        >\n            Du har selv ansvar\n            <strong>for all styling</strong>\n        </div>\n    }\n    name=\"Name\"\n    percentage={42}\n/>";
const sourceCode$1u = "import ChartDonut from '@sb1/ffe-chart-donut-react';\n\n<ChartDonut\n    label={\n        <div\n            style={{\n                marginTop: 10,\n                textAlign: 'center',\n                width: '100%',\n            }}\n        >\n            Du har selv ansvar\n            <strong>for all styling</strong>\n        </div>\n    }\n    name=\"Name\"\n    percentage={42}\n/>";
const sourceImports$1u = "import ChartDonut from '@sb1/ffe-chart-donut-react';";
const dependencies$1u = ["@sb1/ffe-chart-donut-react"];
const sourceFileName$1u = "chart-donut/ChartDonut-customLabel.jsx";

var chart_donut_ChartDonut_customLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1u,
  code: code$1u,
  sourceCode: sourceCode$1u,
  sourceImports: sourceImports$1u,
  dependencies: dependencies$1u,
  sourceFileName: sourceFileName$1u
});

const scope$1t = {ChartDonut: ChartDonut__default["default"]};
const code$1t = "<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>;";
const sourceCode$1t = "import ChartDonut from '@sb1/ffe-chart-donut-react';\n\n<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>;\n";
const sourceImports$1t = "import ChartDonut from '@sb1/ffe-chart-donut-react';";
const dependencies$1t = ["@sb1/ffe-chart-donut-react"];
const sourceFileName$1t = "chart-donut/ChartDonut.jsx";

var chart_donut_ChartDonut = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1t,
  code: code$1t,
  sourceCode: sourceCode$1t,
  sourceImports: sourceImports$1t,
  dependencies: dependencies$1t,
  sourceFileName: sourceFileName$1t
});

const scope$1s = {Table: Table__default["default"],TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$1s = "() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n};";
const sourceCode$1s = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n};\n";
const sourceImports$1s = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1s = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react"];
const sourceFileName$1s = "tables/Table-advanced.jsx";

var tables_Table_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1s,
  code: code$1s,
  sourceCode: sourceCode$1s,
  sourceImports: sourceImports$1s,
  dependencies: dependencies$1s,
  sourceFileName: sourceFileName$1s
});

const scope$1r = {Table: Table__default["default"],TertiaryButton: ffeButtonsReact.TertiaryButton,HakeIkon: ffeIconsReact.HakeIkon,KryssIkon: ffeIconsReact.KryssIkon};
const code$1r = "() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d,\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value\n                            ? generateCheckbox(value)\n                            : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columnsAdvanced}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n            headerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops}>\n                            <th\n                                colSpan={3}\n                                className=\"ffe-table__heading\"\n                                style={{ textAlign: 'center' }}\n                            >\n                                Personlig\n                            </th>\n                            <th colSpan={2} className=\"ffe-table__heading\" />\n                            <th colSpan={3} className=\"ffe-table__heading\">\n                                Overskrift\n                            </th>\n                        </tr>\n                        <tr {...trprops} />\n                    </>\n                );\n            }}\n            footerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops} />\n                        <tr {...trprops}>\n                            <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                                <span className=\"ffe-table__content\">\n                                    Total\n                                </span>\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td\n                                className=\"ffe-table__cell\"\n                                data-th=\"Syntetisk felt\"\n                            >\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" />\n                            <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                    {networthSum}\n                                </span>\n                            </th>\n                            <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                        </tr>\n                    </>\n                );\n            }}\n            rowRender={(trprops, props, index) => {\n                const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n                return (\n                    <tr\n                        {...trprops}\n                        className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                        onClick={event => {\n                            console.log('rowRenderClick!', index);\n                            trprops.onClick && trprops.onClick(event);\n                        }}\n                        title={props.cells.name}\n                    >\n                        {trprops.children}\n                    </tr>\n                );\n            }}\n        />\n    );\n};";
const sourceCode$1r = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';\n\n() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d,\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value\n                            ? generateCheckbox(value)\n                            : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columnsAdvanced}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n            headerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops}>\n                            <th\n                                colSpan={3}\n                                className=\"ffe-table__heading\"\n                                style={{ textAlign: 'center' }}\n                            >\n                                Personlig\n                            </th>\n                            <th colSpan={2} className=\"ffe-table__heading\" />\n                            <th colSpan={3} className=\"ffe-table__heading\">\n                                Overskrift\n                            </th>\n                        </tr>\n                        <tr {...trprops} />\n                    </>\n                );\n            }}\n            footerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops} />\n                        <tr {...trprops}>\n                            <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                                <span className=\"ffe-table__content\">\n                                    Total\n                                </span>\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td\n                                className=\"ffe-table__cell\"\n                                data-th=\"Syntetisk felt\"\n                            >\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" />\n                            <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                    {networthSum}\n                                </span>\n                            </th>\n                            <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                        </tr>\n                    </>\n                );\n            }}\n            rowRender={(trprops, props, index) => {\n                const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n                return (\n                    <tr\n                        {...trprops}\n                        className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                        onClick={event => {\n                            console.log('rowRenderClick!', index);\n                            trprops.onClick && trprops.onClick(event);\n                        }}\n                        title={props.cells.name}\n                    >\n                        {trprops.children}\n                    </tr>\n                );\n            }}\n        />\n    );\n};\n";
const sourceImports$1r = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';";
const dependencies$1r = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$1r = "tables/Table-customRender.jsx";

var tables_Table_customRender = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1r,
  code: code$1r,
  sourceCode: sourceCode$1r,
  sourceImports: sourceImports$1r,
  dependencies: dependencies$1r,
  sourceFileName: sourceFileName$1r
});

const scope$1q = {Table: Table__default["default"]};
const code$1q = "() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return <Table caption=\"Utviklere\" columns={columns} data={data} />;\n};";
const sourceCode$1q = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return <Table caption=\"Utviklere\" columns={columns} data={data} />;\n};\n";
const sourceImports$1q = "import Table from '@sb1/ffe-tables-react';";
const dependencies$1q = ["@sb1/ffe-tables-react"];
const sourceFileName$1q = "tables/Table.jsx";

var tables_Table = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1q,
  code: code$1q,
  sourceCode: sourceCode$1q,
  sourceImports: sourceImports$1q,
  dependencies: dependencies$1q,
  sourceFileName: sourceFileName$1q
});

const scope$1p = {Table: Table__default["default"]};
const code$1p = "() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n};";
const sourceCode$1p = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n};\n";
const sourceImports$1p = "import Table from '@sb1/ffe-tables-react';";
const dependencies$1p = ["@sb1/ffe-tables-react"];
const sourceFileName$1p = "tables/Table-expandedContentMapper.jsx";

var tables_Table_expandedContentMapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1p,
  code: code$1p,
  sourceCode: sourceCode$1p,
  sourceImports: sourceImports$1p,
  dependencies: dependencies$1p,
  sourceFileName: sourceFileName$1p
});

const scope$1o = {TextCard: ffeCardsReact.TextCard};
const code$1o = "<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>;";
const sourceCode$1o = "import { TextCard } from '@sb1/ffe-cards-react';\n\n<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>;\n";
const sourceImports$1o = "import { TextCard } from '@sb1/ffe-cards-react';";
const dependencies$1o = ["@sb1/ffe-cards-react"];
const sourceFileName$1o = "cards/TextCard.jsx";

var cards_TextCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1o,
  code: code$1o,
  sourceCode: sourceCode$1o,
  sourceImports: sourceImports$1o,
  dependencies: dependencies$1o,
  sourceFileName: sourceFileName$1o
});

const scope$1n = {IconCard: ffeCardsReact.IconCard,KryssSirkelIkon: ffeIconsReact.KryssSirkelIkon};
const code$1n = "<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>;";
const sourceCode$1n = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';\n\n<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$1n = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';";
const dependencies$1n = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1n = "cards/IconCard-greyCharcoal.jsx";

var cards_IconCard_greyCharcoal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1n,
  code: code$1n,
  sourceCode: sourceCode$1n,
  sourceImports: sourceImports$1n,
  dependencies: dependencies$1n,
  sourceFileName: sourceFileName$1n
});

const scope$1m = {IconCard: ffeCardsReact.IconCard,SparegrisIkon: ffeIconsReact.SparegrisIkon};
const code$1m = "<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>;";
const sourceCode$1m = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$1m = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';";
const dependencies$1m = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1m = "cards/IconCard-condensed.jsx";

var cards_IconCard_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1m,
  code: code$1m,
  sourceCode: sourceCode$1m,
  sourceImports: sourceImports$1m,
  dependencies: dependencies$1m,
  sourceFileName: sourceFileName$1m
});

const scope$1l = {ImageCard: ffeCardsReact.ImageCard};
const code$1l = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>;";
const sourceCode$1l = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>;\n";
const sourceImports$1l = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$1l = ["@sb1/ffe-cards-react"];
const sourceFileName$1l = "cards/ImageCard-titleOnly.jsx";

var cards_ImageCard_titleOnly = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1l,
  code: code$1l,
  sourceCode: sourceCode$1l,
  sourceImports: sourceImports$1l,
  dependencies: dependencies$1l,
  sourceFileName: sourceFileName$1l
});

const scope$1k = {ImageCard: ffeCardsReact.ImageCard};
const code$1k = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>;";
const sourceCode$1k = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>;\n";
const sourceImports$1k = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$1k = ["@sb1/ffe-cards-react"];
const sourceFileName$1k = "cards/ImageCard.jsx";

var cards_ImageCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1k,
  code: code$1k,
  sourceCode: sourceCode$1k,
  sourceImports: sourceImports$1k,
  dependencies: dependencies$1k,
  sourceFileName: sourceFileName$1k
});

const scope$1j = {CardBase: ffeCardsReact.CardBase};
const code$1j = "<CardBase>Dette er basisen for alle kort</CardBase>;";
const sourceCode$1j = "import { CardBase } from '@sb1/ffe-cards-react';\n\n<CardBase>Dette er basisen for alle kort</CardBase>;\n";
const sourceImports$1j = "import { CardBase } from '@sb1/ffe-cards-react';";
const dependencies$1j = ["@sb1/ffe-cards-react"];
const sourceFileName$1j = "cards/CardBase.jsx";

var cards_CardBase = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1j,
  code: code$1j,
  sourceCode: sourceCode$1j,
  sourceImports: sourceImports$1j,
  dependencies: dependencies$1j,
  sourceFileName: sourceFileName$1j
});

const scope$1i = {IconCard: ffeCardsReact.IconCard,GrafOppIkon: ffeIconsReact.GrafOppIkon};
const code$1i = "<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>;";
const sourceCode$1i = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$1i = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';";
const dependencies$1i = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$1i = "cards/IconCard.jsx";

var cards_IconCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1i,
  code: code$1i,
  sourceCode: sourceCode$1i,
  sourceImports: sourceImports$1i,
  dependencies: dependencies$1i,
  sourceFileName: sourceFileName$1i
});

const scope$1h = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1h = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$1h = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$1h = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1h = ["@sb1/ffe-grid-react"];
const sourceFileName$1h = "grid/Grid.jsx";

var grid_Grid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1h,
  code: code$1h,
  sourceCode: sourceCode$1h,
  sourceImports: sourceImports$1h,
  dependencies: dependencies$1h,
  sourceFileName: sourceFileName$1h
});

const scope$1g = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1g = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$1g = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$1g = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1g = ["@sb1/ffe-grid-react"];
const sourceFileName$1g = "grid/Grid-4col.jsx";

var grid_Grid_4col = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1g,
  code: code$1g,
  sourceCode: sourceCode$1g,
  sourceImports: sourceImports$1g,
  dependencies: dependencies$1g,
  sourceFileName: sourceFileName$1g
});

const scope$1f = {useState: React.useState,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$1f = "() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-raden under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow background={bgColor}>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est.\n                    </p>\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$1f = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-raden under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow background={bgColor}>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est.\n                    </p>\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$1f = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$1f = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$1f = "grid/GridRow-background.jsx";

var grid_GridRow_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1f,
  code: code$1f,
  sourceCode: sourceCode$1f,
  sourceImports: sourceImports$1f,
  dependencies: dependencies$1f,
  sourceFileName: sourceFileName$1f
});

const scope$1e = {InlineGrid: ffeGridReact.InlineGrid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1e = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>;";
const sourceCode$1e = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>;\n";
const sourceImports$1e = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1e = ["@sb1/ffe-grid-react"];
const sourceFileName$1e = "grid/InlineGrid.jsx";

var grid_InlineGrid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1e,
  code: code$1e,
  sourceCode: sourceCode$1e,
  sourceImports: sourceImports$1e,
  dependencies: dependencies$1e,
  sourceFileName: sourceFileName$1e
});

const scope$1d = {useState: React.useState,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$1d = "() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol\n                    sm={12}\n                    lg={{ cols: 6, offset: 3 }}\n                    background={bgColor}\n                    bottomPadding={false}\n                >\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est. Integer nec magna ultricies, commodo urna ut,\n                        bibendum turpis. Curabitur nec ex sed lacus bibendum\n                        sollicitudin.\n                    </p>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    Merk at innholdet både over og under er i linje med grid-et.\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$1d = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol\n                    sm={12}\n                    lg={{ cols: 6, offset: 3 }}\n                    background={bgColor}\n                    bottomPadding={false}\n                >\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est. Integer nec magna ultricies, commodo urna ut,\n                        bibendum turpis. Curabitur nec ex sed lacus bibendum\n                        sollicitudin.\n                    </p>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    Merk at innholdet både over og under er i linje med grid-et.\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$1d = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$1d = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$1d = "grid/GridCol-background.jsx";

var grid_GridCol_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1d,
  code: code$1d,
  sourceCode: sourceCode$1d,
  sourceImports: sourceImports$1d,
  dependencies: dependencies$1d,
  sourceFileName: sourceFileName$1d
});

const scope$1c = {InlineGrid: ffeGridReact.InlineGrid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$1c = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>;";
const sourceCode$1c = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>;\n";
const sourceImports$1c = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$1c = ["@sb1/ffe-grid-react"];
const sourceFileName$1c = "grid/InlineGrid-nested.jsx";

var grid_InlineGrid_nested = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1c,
  code: code$1c,
  sourceCode: sourceCode$1c,
  sourceImports: sourceImports$1c,
  dependencies: dependencies$1c,
  sourceFileName: sourceFileName$1c
});

const scope$1b = {Paragraph: ffeCoreReact.Paragraph};
const code$1b = "<>\n    <Paragraph>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph lead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph subLead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n</>;";
const sourceCode$1b = "import { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n    <Paragraph>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph lead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph subLead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n</>;\n";
const sourceImports$1b = "import { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1b = ["@sb1/ffe-core-react"];
const sourceFileName$1b = "typography/Paragraph.jsx";

var typography_Paragraph = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1b,
  code: code$1b,
  sourceCode: sourceCode$1b,
  sourceImports: sourceImports$1b,
  dependencies: dependencies$1b,
  sourceFileName: sourceFileName$1b
});

const scope$1a = {LinkText: ffeCoreReact.LinkText,SnakkebobleIkon: ffeIconsReact.SnakkebobleIkon};
const code$1a = "<LinkText href=\"https://www.sparebank1.no\" underline={false}>\n    <SnakkebobleIkon\n        alt=\"Snakk med oss\"\n        style={{ fill: 'darkblue', height: '80px' }}\n    />\n</LinkText>;";
const sourceCode$1a = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';\n\n<LinkText href=\"https://www.sparebank1.no\" underline={false}>\n    <SnakkebobleIkon\n        alt=\"Snakk med oss\"\n        style={{ fill: 'darkblue', height: '80px' }}\n    />\n</LinkText>;\n";
const sourceImports$1a = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';";
const dependencies$1a = ["@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$1a = "typography/LinkText-icon.jsx";

var typography_LinkText_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1a,
  code: code$1a,
  sourceCode: sourceCode$1a,
  sourceImports: sourceImports$1a,
  dependencies: dependencies$1a,
  sourceFileName: sourceFileName$1a
});

const scope$19 = {PreformattedText: ffeCoreReact.PreformattedText};
const code$19 = "<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>;";
const sourceCode$19 = "import { PreformattedText } from '@sb1/ffe-core-react';\n\n<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>;\n";
const sourceImports$19 = "import { PreformattedText } from '@sb1/ffe-core-react';";
const dependencies$19 = ["@sb1/ffe-core-react"];
const sourceFileName$19 = "typography/PreformattedText.jsx";

var typography_PreformattedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$19,
  code: code$19,
  sourceCode: sourceCode$19,
  sourceImports: sourceImports$19,
  dependencies: dependencies$19,
  sourceFileName: sourceFileName$19
});

const scope$18 = {SmallText: ffeCoreReact.SmallText};
const code$18 = "<>\n    <div>\n        <SmallText>Dette er en liten type</SmallText>\n    </div>\n\n    <SmallText element=\"p\">Dette er en liten type</SmallText>\n</>;";
const sourceCode$18 = "import { SmallText } from '@sb1/ffe-core-react';\n\n<>\n    <div>\n        <SmallText>Dette er en liten type</SmallText>\n    </div>\n\n    <SmallText element=\"p\">Dette er en liten type</SmallText>\n</>;\n";
const sourceImports$18 = "import { SmallText } from '@sb1/ffe-core-react';";
const dependencies$18 = ["@sb1/ffe-core-react"];
const sourceFileName$18 = "typography/SmallText.jsx";

var typography_SmallText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$18,
  code: code$18,
  sourceCode: sourceCode$18,
  sourceImports: sourceImports$18,
  dependencies: dependencies$18,
  sourceFileName: sourceFileName$18
});

const scope$17 = {EmphasizedText: ffeCoreReact.EmphasizedText};
const code$17 = "<EmphasizedText>Dette bør utheves</EmphasizedText>;";
const sourceCode$17 = "import { EmphasizedText } from '@sb1/ffe-core-react';\n\n<EmphasizedText>Dette bør utheves</EmphasizedText>;\n";
const sourceImports$17 = "import { EmphasizedText } from '@sb1/ffe-core-react';";
const dependencies$17 = ["@sb1/ffe-core-react"];
const sourceFileName$17 = "typography/EmphasizedText.jsx";

var typography_EmphasizedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$17,
  code: code$17,
  sourceCode: sourceCode$17,
  sourceImports: sourceImports$17,
  dependencies: dependencies$17,
  sourceFileName: sourceFileName$17
});

const scope$16 = {StrongText: ffeCoreReact.StrongText};
const code$16 = "<StrongText>Dette er en sterk type</StrongText>;";
const sourceCode$16 = "import { StrongText } from '@sb1/ffe-core-react';\n\n<StrongText>Dette er en sterk type</StrongText>;\n";
const sourceImports$16 = "import { StrongText } from '@sb1/ffe-core-react';";
const dependencies$16 = ["@sb1/ffe-core-react"];
const sourceFileName$16 = "typography/StrongText.jsx";

var typography_StrongText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$16,
  code: code$16,
  sourceCode: sourceCode$16,
  sourceImports: sourceImports$16,
  dependencies: dependencies$16,
  sourceFileName: sourceFileName$16
});

const scope$15 = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,DividerLine: ffeCoreReact.DividerLine,Paragraph: ffeCoreReact.Paragraph};
const code$15 = "<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$15 = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';\n\n<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$15 = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';";
const dependencies$15 = ["@sb1/ffe-grid-react","@sb1/ffe-core-react"];
const sourceFileName$15 = "typography/DividerLine.jsx";

var typography_DividerLine = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$15,
  code: code$15,
  sourceCode: sourceCode$15,
  sourceImports: sourceImports$15,
  dependencies: dependencies$15,
  sourceFileName: sourceFileName$15
});

const scope$14 = {MicroText: ffeCoreReact.MicroText};
const code$14 = "<MicroText>Dette er den minste typen vi har</MicroText>;";
const sourceCode$14 = "import { MicroText } from '@sb1/ffe-core-react';\n\n<MicroText>Dette er den minste typen vi har</MicroText>;\n";
const sourceImports$14 = "import { MicroText } from '@sb1/ffe-core-react';";
const dependencies$14 = ["@sb1/ffe-core-react"];
const sourceFileName$14 = "typography/MicroText.jsx";

var typography_MicroText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$14,
  code: code$14,
  sourceCode: sourceCode$14,
  sourceImports: sourceImports$14,
  dependencies: dependencies$14,
  sourceFileName: sourceFileName$14
});

const scope$13 = {Heading1: ffeCoreReact.Heading1,Heading2: ffeCoreReact.Heading2,Heading3: ffeCoreReact.Heading3,Heading4: ffeCoreReact.Heading4,Heading5: ffeCoreReact.Heading5,Heading6: ffeCoreReact.Heading6};
const code$13 = "<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>;";
const sourceCode$13 = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6,\n} from '@sb1/ffe-core-react';\n\n<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>;\n";
const sourceImports$13 = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6,\n} from '@sb1/ffe-core-react';";
const dependencies$13 = ["@sb1/ffe-core-react"];
const sourceFileName$13 = "typography/Heading.jsx";

var typography_Heading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$13,
  code: code$13,
  sourceCode: sourceCode$13,
  sourceImports: sourceImports$13,
  dependencies: dependencies$13,
  sourceFileName: sourceFileName$13
});

const scope$12 = {LinkText: ffeCoreReact.LinkText};
const code$12 = "<LinkText href=\"https://www.sparebank1.no\">sparebank1.no</LinkText>;";
const sourceCode$12 = "import { LinkText } from '@sb1/ffe-core-react';\n\n<LinkText href=\"https://www.sparebank1.no\">sparebank1.no</LinkText>;\n";
const sourceImports$12 = "import { LinkText } from '@sb1/ffe-core-react';";
const dependencies$12 = ["@sb1/ffe-core-react"];
const sourceFileName$12 = "typography/LinkText.jsx";

var typography_LinkText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$12,
  code: code$12,
  sourceCode: sourceCode$12,
  sourceImports: sourceImports$12,
  dependencies: dependencies$12,
  sourceFileName: sourceFileName$12
});

const scope$11 = {useState: React.useState,Collapse: Collapse__default["default"],ExpandButton: ffeButtonsReact.ExpandButton};
const code$11 = "() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n            <p>This number will change on transition complete: {rand}</p>\n        </>\n    );\n};";
const sourceCode$11 = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n            <p>This number will change on transition complete: {rand}</p>\n        </>\n    );\n};\n";
const sourceImports$11 = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$11 = ["react","@sb1/ffe-collapse-react","@sb1/ffe-buttons-react"];
const sourceFileName$11 = "collapse/Collapse-onRest.jsx";

var collapse_Collapse_onRest = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$11,
  code: code$11,
  sourceCode: sourceCode$11,
  sourceImports: sourceImports$11,
  dependencies: dependencies$11,
  sourceFileName: sourceFileName$11
});

const scope$10 = {useState: React.useState,Collapse: Collapse__default["default"],ExpandButton: ffeButtonsReact.ExpandButton};
const code$10 = "() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n        </>\n    );\n};";
const sourceCode$10 = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n        </>\n    );\n};\n";
const sourceImports$10 = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$10 = ["react","@sb1/ffe-collapse-react","@sb1/ffe-buttons-react"];
const sourceFileName$10 = "collapse/Collapse.jsx";

var collapse_Collapse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$10,
  code: code$10,
  sourceCode: sourceCode$10,
  sourceImports: sourceImports$10,
  dependencies: dependencies$10,
  sourceFileName: sourceFileName$10
});

const scope$$ = {useState: React.useState,RadioBlock: ffeFormReact.RadioBlock,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$$ = "() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive\n                        inn detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må\n                        skrive inn under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$$ = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive\n                        inn detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må\n                        skrive inn under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$$ = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$$ = ["react","@sb1/ffe-form-react"];
const sourceFileName$$ = "form/RadioBlock.jsx";

var form_RadioBlock = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$$,
  code: code$$,
  sourceCode: sourceCode$$,
  sourceImports: sourceImports$$,
  dependencies: dependencies$$,
  sourceFileName: sourceFileName$$
});

const scope$_ = {Checkbox: ffeFormReact.Checkbox};
const code$_ = "<Checkbox>\n    {labelProps => (\n        <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n            Her benyttes render props\n        </label>\n    )}\n</Checkbox>;";
const sourceCode$_ = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox>\n    {labelProps => (\n        <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n            Her benyttes render props\n        </label>\n    )}\n</Checkbox>;\n";
const sourceImports$_ = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$_ = ["@sb1/ffe-form-react"];
const sourceFileName$_ = "form/Checkbox-renderProps.jsx";

var form_Checkbox_renderProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$_,
  code: code$_,
  sourceCode: sourceCode$_,
  sourceImports: sourceImports$_,
  dependencies: dependencies$_,
  sourceFileName: sourceFileName$_
});

const scope$Z = {Checkbox: ffeFormReact.Checkbox};
const code$Z = "<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>;";
const sourceCode$Z = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>;\n";
const sourceImports$Z = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$Z = ["@sb1/ffe-form-react"];
const sourceFileName$Z = "form/Checkbox-hiddenLabel.jsx";

var form_Checkbox_hiddenLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Z,
  code: code$Z,
  sourceCode: sourceCode$Z,
  sourceImports: sourceImports$Z,
  dependencies: dependencies$Z,
  sourceFileName: sourceFileName$Z
});

const scope$Y = {InfoFieldMessage: ffeFormReact.InfoFieldMessage};
const code$Y = "<InfoFieldMessage>Husk på det her</InfoFieldMessage>;";
const sourceCode$Y = "import { InfoFieldMessage } from '@sb1/ffe-form-react';\n\n<InfoFieldMessage>Husk på det her</InfoFieldMessage>;\n";
const sourceImports$Y = "import { InfoFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$Y = ["@sb1/ffe-form-react"];
const sourceFileName$Y = "form/InfoFieldMessage.jsx";

var form_InfoFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Y,
  code: code$Y,
  sourceCode: sourceCode$Y,
  sourceImports: sourceImports$Y,
  dependencies: dependencies$Y,
  sourceFileName: sourceFileName$Y
});

const scope$X = {useState: React.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$X = "() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$X = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$X = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$X = ["react","@sb1/ffe-form-react"];
const sourceFileName$X = "form/RadioSwitch-selectedValue.jsx";

var form_RadioSwitch_selectedValue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$X,
  code: code$X,
  sourceCode: sourceCode$X,
  sourceImports: sourceImports$X,
  dependencies: dependencies$X,
  sourceFileName: sourceFileName$X
});

const scope$W = {useState: React.useState,Datepicker: Datepicker__default["default"],Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup,Checkbox: ffeFormReact.Checkbox,Input: ffeFormReact.Input,TextArea: ffeFormReact.TextArea,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$W = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};";
const sourceCode$W = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};\n";
const sourceImports$W = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$W = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$W = "form/InputGroup.jsx";

var form_InputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$W,
  code: code$W,
  sourceCode: sourceCode$W,
  sourceImports: sourceImports$W,
  dependencies: dependencies$W,
  sourceFileName: sourceFileName$W
});

const scope$V = {Input: ffeFormReact.Input,Paragraph: ffeCoreReact.Paragraph};
const code$V = "<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>;";
const sourceCode$V = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>;\n";
const sourceImports$V = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$V = ["@sb1/ffe-form-react","@sb1/ffe-core-react"];
const sourceFileName$V = "form/Input-textLike.jsx";

var form_Input_textLike = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$V,
  code: code$V,
  sourceCode: sourceCode$V,
  sourceImports: sourceImports$V,
  dependencies: dependencies$V,
  sourceFileName: sourceFileName$V
});

const scope$U = {Checkbox: ffeFormReact.Checkbox};
const code$U = "<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>;";
const sourceCode$U = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>;\n";
const sourceImports$U = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$U = ["@sb1/ffe-form-react"];
const sourceFileName$U = "form/Checkbox-invalid.jsx";

var form_Checkbox_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$U,
  code: code$U,
  sourceCode: sourceCode$U,
  sourceImports: sourceImports$U,
  dependencies: dependencies$U,
  sourceFileName: sourceFileName$U
});

const scope$T = {useState: React.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$T = "() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$T = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$T = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$T = ["react","@sb1/ffe-form-react"];
const sourceFileName$T = "form/RadioSwitch-fieldMessageUnselected.jsx";

var form_RadioSwitch_fieldMessageUnselected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$T,
  code: code$T,
  sourceCode: sourceCode$T,
  sourceImports: sourceImports$T,
  dependencies: dependencies$T,
  sourceFileName: sourceFileName$T
});

const scope$S = {Checkbox: ffeFormReact.Checkbox};
const code$S = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>;";
const sourceCode$S = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>;\n";
const sourceImports$S = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$S = ["@sb1/ffe-form-react"];
const sourceFileName$S = "form/Checkbox.jsx";

var form_Checkbox = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$S,
  code: code$S,
  sourceCode: sourceCode$S,
  sourceImports: sourceImports$S,
  dependencies: dependencies$S,
  sourceFileName: sourceFileName$S
});

const scope$R = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input};
const code$R = "<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>;";
const sourceCode$R = "import { InputGroup, Input } from '@sb1/ffe-form-react';\n\n<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>;\n";
const sourceImports$R = "import { InputGroup, Input } from '@sb1/ffe-form-react';";
const dependencies$R = ["@sb1/ffe-form-react"];
const sourceFileName$R = "form/InputGroup-description.jsx";

var form_InputGroup_description = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$R,
  code: code$R,
  sourceCode: sourceCode$R,
  sourceImports: sourceImports$R,
  dependencies: dependencies$R,
  sourceFileName: sourceFileName$R
});

const scope$Q = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$Q = "<PhoneNumber\n    number=\"\"\n    countryCode=\"\"\n    countryCodeAndNumberFieldMessage=\"Både landkode og telefonnummer feltene er påkrevd\"\n/>;";
const sourceCode$Q = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber\n    number=\"\"\n    countryCode=\"\"\n    countryCodeAndNumberFieldMessage=\"Både landkode og telefonnummer feltene er påkrevd\"\n/>;\n";
const sourceImports$Q = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$Q = ["@sb1/ffe-form-react"];
const sourceFileName$Q = "form/PhoneNumber-PhoneNumber-countryCode-invalid.jsx";

var form_PhoneNumber_PhoneNumber_countryCode_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Q,
  code: code$Q,
  sourceCode: sourceCode$Q,
  sourceImports: sourceImports$Q,
  dependencies: dependencies$Q,
  sourceFileName: sourceFileName$Q
});

const scope$P = {Label: ffeFormReact.Label};
const code$P = "<Label htmlFor=\"e-post\">E-post</Label>;";
const sourceCode$P = "import { Label } from '@sb1/ffe-form-react';\n\n<Label htmlFor=\"e-post\">E-post</Label>;\n";
const sourceImports$P = "import { Label } from '@sb1/ffe-form-react';";
const dependencies$P = ["@sb1/ffe-form-react"];
const sourceFileName$P = "form/Label.jsx";

var form_Label = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$P,
  code: code$P,
  sourceCode: sourceCode$P,
  sourceImports: sourceImports$P,
  dependencies: dependencies$P,
  sourceFileName: sourceFileName$P
});

const scope$O = {useState: React.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$O = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$O = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$O = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$O = ["react","@sb1/ffe-form-react"];
const sourceFileName$O = "form/RadioButton-inline.jsx";

var form_RadioButton_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$O,
  code: code$O,
  sourceCode: sourceCode$O,
  sourceImports: sourceImports$O,
  dependencies: dependencies$O,
  sourceFileName: sourceFileName$O
});

const scope$N = {useState: React.useState,Tooltip: ffeFormReact.Tooltip};
const code$N = "() => {\n    const [open, setOpen] = useState(false);\n    return (\n        <>\n            <Tooltip\n                aria-controls=\"tooltip-text\"\n                onClick={() => setOpen(!open)}\n            />\n            <div hidden={open} id=\"tooltip-text\">\n                Titt tei!\n            </div>\n        </>\n    );\n};";
const sourceCode$N = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';\n\n() => {\n    const [open, setOpen] = useState(false);\n    return (\n        <>\n            <Tooltip\n                aria-controls=\"tooltip-text\"\n                onClick={() => setOpen(!open)}\n            />\n            <div hidden={open} id=\"tooltip-text\">\n                Titt tei!\n            </div>\n        </>\n    );\n};\n";
const sourceImports$N = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$N = ["react","@sb1/ffe-form-react"];
const sourceFileName$N = "form/Tooltip-external.jsx";

var form_Tooltip_external = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$N,
  code: code$N,
  sourceCode: sourceCode$N,
  sourceImports: sourceImports$N,
  dependencies: dependencies$N,
  sourceFileName: sourceFileName$N
});

const scope$M = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$M = "<PhoneNumber number=\"123123123\" />;";
const sourceCode$M = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"123123123\" />;\n";
const sourceImports$M = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$M = ["@sb1/ffe-form-react"];
const sourceFileName$M = "form/PhoneNumber.jsx";

var form_PhoneNumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$M,
  code: code$M,
  sourceCode: sourceCode$M,
  sourceImports: sourceImports$M,
  dependencies: dependencies$M,
  sourceFileName: sourceFileName$M
});

const scope$L = {useState: React.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$L = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$L = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$L = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$L = ["react","@sb1/ffe-form-react"];
const sourceFileName$L = "form/RadioButton.jsx";

var form_RadioButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$L,
  code: code$L,
  sourceCode: sourceCode$L,
  sourceImports: sourceImports$L,
  dependencies: dependencies$L,
  sourceFileName: sourceFileName$L
});

const scope$K = {useState: React.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$K = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$K = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$K = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$K = ["react","@sb1/ffe-form-react"];
const sourceFileName$K = "form/RadioButton-tooltip.jsx";

var form_RadioButton_tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$K,
  code: code$K,
  sourceCode: sourceCode$K,
  sourceImports: sourceImports$K,
  dependencies: dependencies$K,
  sourceFileName: sourceFileName$K
});

const scope$J = {Input: ffeFormReact.Input,ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton};
const code$J = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$J = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n";
const sourceImports$J = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$J = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$J = "form/Input-ref.jsx";

var form_Input_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$J,
  code: code$J,
  sourceCode: sourceCode$J,
  sourceImports: sourceImports$J,
  dependencies: dependencies$J,
  sourceFileName: sourceFileName$J
});

const scope$I = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$I = "<PhoneNumber number=\"123123123\" countryCode=\"\" countryCodeFieldMessage=\"Dette feltet er påkrevd\" />";
const sourceCode$I = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"123123123\" countryCode=\"\" countryCodeFieldMessage=\"Dette feltet er påkrevd\" />\n";
const sourceImports$I = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$I = ["@sb1/ffe-form-react"];
const sourceFileName$I = "form/PhoneNumber-countryCode-invalid.jsx";

var form_PhoneNumber_countryCode_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$I,
  code: code$I,
  sourceCode: sourceCode$I,
  sourceImports: sourceImports$I,
  dependencies: dependencies$I,
  sourceFileName: sourceFileName$I
});

const scope$H = {useState: React.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$H = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$H = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$H = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$H = ["react","@sb1/ffe-form-react"];
const sourceFileName$H = "form/RadioSwitch.jsx";

var form_RadioSwitch = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$H,
  code: code$H,
  sourceCode: sourceCode$H,
  sourceImports: sourceImports$H,
  dependencies: dependencies$H,
  sourceFileName: sourceFileName$H
});

const scope$G = {Checkbox: ffeFormReact.Checkbox};
const code$G = "<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>;";
const sourceCode$G = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>;\n";
const sourceImports$G = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$G = ["@sb1/ffe-form-react"];
const sourceFileName$G = "form/Checkbox-onChange.jsx";

var form_Checkbox_onChange = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$G,
  code: code$G,
  sourceCode: sourceCode$G,
  sourceImports: sourceImports$G,
  dependencies: dependencies$G,
  sourceFileName: sourceFileName$G
});

const scope$F = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$F = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;";
const sourceCode$F = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;\n";
const sourceImports$F = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$F = ["@sb1/ffe-form-react"];
const sourceFileName$F = "form/InputGroup-fieldMessage.jsx";

var form_InputGroup_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$F,
  code: code$F,
  sourceCode: sourceCode$F,
  sourceImports: sourceImports$F,
  dependencies: dependencies$F,
  sourceFileName: sourceFileName$F
});

const scope$E = {Input: ffeFormReact.Input,Label: ffeFormReact.Label};
const code$E = "<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>;";
const sourceCode$E = "import { Input, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>;\n";
const sourceImports$E = "import { Input, Label } from '@sb1/ffe-form-react';";
const dependencies$E = ["@sb1/ffe-form-react"];
const sourceFileName$E = "form/Input.jsx";

var form_Input = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$E,
  code: code$E,
  sourceCode: sourceCode$E,
  sourceImports: sourceImports$E,
  dependencies: dependencies$E,
  sourceFileName: sourceFileName$E
});

const scope$D = {Checkbox: ffeFormReact.Checkbox};
const code$D = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>;";
const sourceCode$D = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>;\n";
const sourceImports$D = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$D = ["@sb1/ffe-form-react"];
const sourceFileName$D = "form/Checkbox-inlineFalse.jsx";

var form_Checkbox_inlineFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$D,
  code: code$D,
  sourceCode: sourceCode$D,
  sourceImports: sourceImports$D,
  dependencies: dependencies$D,
  sourceFileName: sourceFileName$D
});

const scope$C = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$C = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;";
const sourceCode$C = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;\n";
const sourceImports$C = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$C = ["@sb1/ffe-form-react"];
const sourceFileName$C = "form/InputGroup-multiChildren.jsx";

var form_InputGroup_multiChildren = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$C,
  code: code$C,
  sourceCode: sourceCode$C,
  sourceImports: sourceImports$C,
  dependencies: dependencies$C,
  sourceFileName: sourceFileName$C
});

const scope$B = {TextArea: ffeFormReact.TextArea,ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton};
const code$B = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$B = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n";
const sourceImports$B = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$B = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$B = "form/TextArea-ref.jsx";

var form_TextArea_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$B,
  code: code$B,
  sourceCode: sourceCode$B,
  sourceImports: sourceImports$B,
  dependencies: dependencies$B,
  sourceFileName: sourceFileName$B
});

const scope$A = {ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$A = "<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>;";
const sourceCode$A = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>;\n";
const sourceImports$A = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$A = ["@sb1/ffe-form-react"];
const sourceFileName$A = "form/ErrorFieldMessage.jsx";

var form_ErrorFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$A,
  code: code$A,
  sourceCode: sourceCode$A,
  sourceImports: sourceImports$A,
  dependencies: dependencies$A,
  sourceFileName: sourceFileName$A
});

const scope$z = {TextArea: ffeFormReact.TextArea,Label: ffeFormReact.Label};
const code$z = "<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>;";
const sourceCode$z = "import { TextArea, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>;\n";
const sourceImports$z = "import { TextArea, Label } from '@sb1/ffe-form-react';";
const dependencies$z = ["@sb1/ffe-form-react"];
const sourceFileName$z = "form/TextArea.jsx";

var form_TextArea = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$z,
  code: code$z,
  sourceCode: sourceCode$z,
  sourceImports: sourceImports$z,
  dependencies: dependencies$z,
  sourceFileName: sourceFileName$z
});

const scope$y = {useState: React.useState,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup,RadioBlock: ffeFormReact.RadioBlock,RadioSwitch: ffeFormReact.RadioSwitch,RadioButton: ffeFormReact.RadioButton,Tooltip: ffeFormReact.Tooltip,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$y = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};";
const sourceCode$y = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};\n";
const sourceImports$y = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$y = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$y = "form/RadioButtonInputGroup.jsx";

var form_RadioButtonInputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$y,
  code: code$y,
  sourceCode: sourceCode$y,
  sourceImports: sourceImports$y,
  dependencies: dependencies$y,
  sourceFileName: sourceFileName$y
});

const scope$x = {Tooltip: ffeFormReact.Tooltip};
const code$x = "<Tooltip>Dette er lurt å tenke på</Tooltip>;";
const sourceCode$x = "import { Tooltip } from '@sb1/ffe-form-react';\n\n<Tooltip>Dette er lurt å tenke på</Tooltip>;\n";
const sourceImports$x = "import { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$x = ["@sb1/ffe-form-react"];
const sourceFileName$x = "form/Tooltip.jsx";

var form_Tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$x,
  code: code$x,
  sourceCode: sourceCode$x,
  sourceImports: sourceImports$x,
  dependencies: dependencies$x,
  sourceFileName: sourceFileName$x
});

const scope$w = {useState: React.useState,Datepicker: Datepicker__default["default"],Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,TextArea: ffeFormReact.TextArea,Checkbox: ffeFormReact.Checkbox,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$w = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                extraMargin={false}\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                fieldMessage={showErrors ? 'Ooops' : null}\n            >\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};";
const sourceCode$w = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                extraMargin={false}\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                fieldMessage={showErrors ? 'Ooops' : null}\n            >\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};\n";
const sourceImports$w = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$w = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$w = "form/InputGroup-extraMarginFalse.jsx";

var form_InputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$w,
  code: code$w,
  sourceCode: sourceCode$w,
  sourceImports: sourceImports$w,
  dependencies: dependencies$w,
  sourceFileName: sourceFileName$w
});

const scope$v = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$v = "<PhoneNumber number=\"\" countryCode=\"47\" numberFieldMessage=\"Dette feltet er påkrevd\" />";
const sourceCode$v = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"\" countryCode=\"47\" numberFieldMessage=\"Dette feltet er påkrevd\" />\n";
const sourceImports$v = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$v = ["@sb1/ffe-form-react"];
const sourceFileName$v = "form/PhoneNumber-PhoneNumber-invalid.jsx";

var form_PhoneNumber_PhoneNumber_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$v,
  code: code$v,
  sourceCode: sourceCode$v,
  sourceImports: sourceImports$v,
  dependencies: dependencies$v,
  sourceFileName: sourceFileName$v
});

const scope$u = {useState: React.useState,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup,RadioBlock: ffeFormReact.RadioBlock,RadioSwitch: ffeFormReact.RadioSwitch,RadioButton: ffeFormReact.RadioButton,Tooltip: ffeFormReact.Tooltip,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$u = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};";
const sourceCode$u = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};\n";
const sourceImports$u = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$u = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$u = "form/RadioButtonInputGroup-extraMarginFalse.jsx";

var form_RadioButtonInputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$u,
  code: code$u,
  sourceCode: sourceCode$u,
  sourceImports: sourceImports$u,
  dependencies: dependencies$u,
  sourceFileName: sourceFileName$u
});

const scope$t = {useState: React.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$t = "() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$t = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$t = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$t = ["react","@sb1/ffe-form-react"];
const sourceFileName$t = "form/RadioSwitch-fieldMessage.jsx";

var form_RadioSwitch_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$t,
  code: code$t,
  sourceCode: sourceCode$t,
  sourceImports: sourceImports$t,
  dependencies: dependencies$t,
  sourceFileName: sourceFileName$t
});

const scope$s = {SuccessFieldMessage: ffeFormReact.SuccessFieldMessage};
const code$s = "<SuccessFieldMessage>Hurra!</SuccessFieldMessage>;";
const sourceCode$s = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';\n\n<SuccessFieldMessage>Hurra!</SuccessFieldMessage>;\n";
const sourceImports$s = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$s = ["@sb1/ffe-form-react"];
const sourceFileName$s = "form/SuccessFieldMessage.jsx";

var form_SuccessFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$s,
  code: code$s,
  sourceCode: sourceCode$s,
  sourceImports: sourceImports$s,
  dependencies: dependencies$s,
  sourceFileName: sourceFileName$s
});

const scope$r = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$r = "<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$r = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$r = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$r = ["@sb1/ffe-context-message-react"];
const sourceFileName$r = "context-message/ContextErrorMessage.jsx";

var context_message_ContextErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$r,
  code: code$r,
  sourceCode: sourceCode$r,
  sourceImports: sourceImports$r,
  dependencies: dependencies$r,
  sourceFileName: sourceFileName$r
});

const scope$q = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$q = "<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>;";
const sourceCode$q = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>;\n";
const sourceImports$q = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$q = ["@sb1/ffe-context-message-react"];
const sourceFileName$q = "context-message/ContextTipMessage-showCloseButton.jsx";

var context_message_ContextTipMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$q,
  code: code$q,
  sourceCode: sourceCode$q,
  sourceImports: sourceImports$q,
  dependencies: dependencies$q,
  sourceFileName: sourceFileName$q
});

const scope$p = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$p = "<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>;";
const sourceCode$p = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>;\n";
const sourceImports$p = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$p = ["@sb1/ffe-context-message-react"];
const sourceFileName$p = "context-message/ContextInfoMessage-compact.jsx";

var context_message_ContextInfoMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$p,
  code: code$p,
  sourceCode: sourceCode$p,
  sourceImports: sourceImports$p,
  dependencies: dependencies$p,
  sourceFileName: sourceFileName$p
});

const scope$o = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$o = "<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>;";
const sourceCode$o = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>;\n";
const sourceImports$o = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$o = ["@sb1/ffe-context-message-react"];
const sourceFileName$o = "context-message/ContextSuccessMessage-header.jsx";

var context_message_ContextSuccessMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$o,
  code: code$o,
  sourceCode: sourceCode$o,
  sourceImports: sourceImports$o,
  dependencies: dependencies$o,
  sourceFileName: sourceFileName$o
});

const scope$n = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$n = "<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>;";
const sourceCode$n = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>;\n";
const sourceImports$n = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$n = ["@sb1/ffe-context-message-react"];
const sourceFileName$n = "context-message/ContextSuccessMessage-showCloseButton.jsx";

var context_message_ContextSuccessMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$n,
  code: code$n,
  sourceCode: sourceCode$n,
  sourceImports: sourceImports$n,
  dependencies: dependencies$n,
  sourceFileName: sourceFileName$n
});

const scope$m = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$m = "<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$m = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$m = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$m = ["@sb1/ffe-context-message-react"];
const sourceFileName$m = "context-message/ContextInfoMessage.jsx";

var context_message_ContextInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$m,
  code: code$m,
  sourceCode: sourceCode$m,
  sourceImports: sourceImports$m,
  dependencies: dependencies$m,
  sourceFileName: sourceFileName$m
});

const scope$l = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$l = "<ContextTipMessage>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$l = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$l = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$l = ["@sb1/ffe-context-message-react"];
const sourceFileName$l = "context-message/ContextTipMessage.jsx";

var context_message_ContextTipMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$l,
  code: code$l,
  sourceCode: sourceCode$l,
  sourceImports: sourceImports$l,
  dependencies: dependencies$l,
  sourceFileName: sourceFileName$l
});

const scope$k = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage,InfoIkon: ffeIconsReact.InfoIkon};
const code$k = "<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$k = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';\n\n<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$k = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';";
const dependencies$k = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$k = "context-message/ContextInfoMessage-icon.jsx";

var context_message_ContextInfoMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$k,
  code: code$k,
  sourceCode: sourceCode$k,
  sourceImports: sourceImports$k,
  dependencies: dependencies$k,
  sourceFileName: sourceFileName$k
});

const scope$j = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$j = "<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>;";
const sourceCode$j = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>;\n";
const sourceImports$j = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$j = ["@sb1/ffe-context-message-react"];
const sourceFileName$j = "context-message/ContextErrorMessage-showCloseButton.jsx";

var context_message_ContextErrorMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$j,
  code: code$j,
  sourceCode: sourceCode$j,
  sourceImports: sourceImports$j,
  dependencies: dependencies$j,
  sourceFileName: sourceFileName$j
});

const scope$i = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$i = "<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>;";
const sourceCode$i = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>;\n";
const sourceImports$i = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$i = ["@sb1/ffe-context-message-react"];
const sourceFileName$i = "context-message/ContextTipMessage-compact.jsx";

var context_message_ContextTipMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$i,
  code: code$i,
  sourceCode: sourceCode$i,
  sourceImports: sourceImports$i,
  dependencies: dependencies$i,
  sourceFileName: sourceFileName$i
});

const scope$h = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$h = "<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$h = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$h = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$h = ["@sb1/ffe-context-message-react"];
const sourceFileName$h = "context-message/ContextInfoMessage-header.jsx";

var context_message_ContextInfoMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$h,
  code: code$h,
  sourceCode: sourceCode$h,
  sourceImports: sourceImports$h,
  dependencies: dependencies$h,
  sourceFileName: sourceFileName$h
});

const scope$g = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage,LyspareIkon: ffeIconsReact.LyspareIkon};
const code$g = "<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$g = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';\n\n<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$g = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';";
const dependencies$g = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$g = "context-message/ContextTipMessage-icon.jsx";

var context_message_ContextTipMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$g,
  code: code$g,
  sourceCode: sourceCode$g,
  sourceImports: sourceImports$g,
  dependencies: dependencies$g,
  sourceFileName: sourceFileName$g
});

const scope$f = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$f = "<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>;";
const sourceCode$f = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>;\n";
const sourceImports$f = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$f = ["@sb1/ffe-context-message-react"];
const sourceFileName$f = "context-message/ContextErrorMessage-alertFalse.jsx";

var context_message_ContextErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$f,
  code: code$f,
  sourceCode: sourceCode$f,
  sourceImports: sourceImports$f,
  dependencies: dependencies$f,
  sourceFileName: sourceFileName$f
});

const scope$e = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$e = "<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>;";
const sourceCode$e = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>;\n";
const sourceImports$e = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$e = ["@sb1/ffe-context-message-react"];
const sourceFileName$e = "context-message/ContextErrorMessage-compact.jsx";

var context_message_ContextErrorMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$e,
  code: code$e,
  sourceCode: sourceCode$e,
  sourceImports: sourceImports$e,
  dependencies: dependencies$e,
  sourceFileName: sourceFileName$e
});

const scope$d = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage,HakeIkon: ffeIconsReact.HakeIkon};
const code$d = "<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>;";
const sourceCode$d = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';\n\n<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>;\n";
const sourceImports$d = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';";
const dependencies$d = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$d = "context-message/ContextSuccessMessage-icon.jsx";

var context_message_ContextSuccessMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$d,
  code: code$d,
  sourceCode: sourceCode$d,
  sourceImports: sourceImports$d,
  dependencies: dependencies$d,
  sourceFileName: sourceFileName$d
});

const scope$c = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$c = "<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$c = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$c = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$c = ["@sb1/ffe-context-message-react"];
const sourceFileName$c = "context-message/ContextTipMessage-header.jsx";

var context_message_ContextTipMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$c,
  code: code$c,
  sourceCode: sourceCode$c,
  sourceImports: sourceImports$c,
  dependencies: dependencies$c,
  sourceFileName: sourceFileName$c
});

const scope$b = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$b = "<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>;";
const sourceCode$b = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>;\n";
const sourceImports$b = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$b = ["@sb1/ffe-context-message-react"];
const sourceFileName$b = "context-message/ContextSuccessMessage.jsx";

var context_message_ContextSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$b,
  code: code$b,
  sourceCode: sourceCode$b,
  sourceImports: sourceImports$b,
  dependencies: dependencies$b,
  sourceFileName: sourceFileName$b
});

const scope$a = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$a = "<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$a = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$a = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$a = ["@sb1/ffe-context-message-react"];
const sourceFileName$a = "context-message/ContextErrorMessage-header.jsx";

var context_message_ContextErrorMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$a,
  code: code$a,
  sourceCode: sourceCode$a,
  sourceImports: sourceImports$a,
  dependencies: dependencies$a,
  sourceFileName: sourceFileName$a
});

const scope$9 = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage,UtropstegnIkon: ffeIconsReact.UtropstegnIkon};
const code$9 = "<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$9 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';\n\n<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$9 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';";
const dependencies$9 = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$9 = "context-message/ContextErrorMessage-icon.jsx";

var context_message_ContextErrorMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$9,
  code: code$9,
  sourceCode: sourceCode$9,
  sourceImports: sourceImports$9,
  dependencies: dependencies$9,
  sourceFileName: sourceFileName$9
});

const scope$8 = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$8 = "<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>;";
const sourceCode$8 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>;\n";
const sourceImports$8 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$8 = ["@sb1/ffe-context-message-react"];
const sourceFileName$8 = "context-message/ContextInfoMessage-showCloseButton.jsx";

var context_message_ContextInfoMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$8,
  code: code$8,
  sourceCode: sourceCode$8,
  sourceImports: sourceImports$8,
  dependencies: dependencies$8,
  sourceFileName: sourceFileName$8
});

const scope$7 = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$7 = "<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>;";
const sourceCode$7 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>;\n";
const sourceImports$7 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$7 = ["@sb1/ffe-context-message-react"];
const sourceFileName$7 = "context-message/ContextSuccessMessage-compact.jsx";

var context_message_ContextSuccessMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$7,
  code: code$7,
  sourceCode: sourceCode$7,
  sourceImports: sourceImports$7,
  dependencies: dependencies$7,
  sourceFileName: sourceFileName$7
});

const scope$6 = {DetailList: ffeDetailsListReact.DetailList,Detail: ffeDetailsListReact.Detail,DetailContent: ffeDetailsListReact.DetailContent,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$6 = "<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>;";
const sourceCode$6 = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>;\n";
const sourceImports$6 = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$6 = ["@sb1/ffe-details-list-react","@sb1/ffe-buttons-react"];
const sourceFileName$6 = "details-list/DetailList.jsx";

var details_list_DetailList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$6,
  code: code$6,
  sourceCode: sourceCode$6,
  sourceImports: sourceImports$6,
  dependencies: dependencies$6,
  sourceFileName: sourceFileName$6
});

const scope$5 = {SystemErrorMessage: ffeSystemMessageReact.SystemErrorMessage};
const code$5 = "<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;";
const sourceCode$5 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;\n";
const sourceImports$5 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$5 = ["@sb1/ffe-system-message-react"];
const sourceFileName$5 = "system-message/SystemErrorMessage.jsx";

var system_message_SystemErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$5,
  code: code$5,
  sourceCode: sourceCode$5,
  sourceImports: sourceImports$5,
  dependencies: dependencies$5,
  sourceFileName: sourceFileName$5
});

const scope$4 = {SystemErrorMessage: ffeSystemMessageReact.SystemErrorMessage};
const code$4 = "<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;";
const sourceCode$4 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;\n";
const sourceImports$4 = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$4 = ["@sb1/ffe-system-message-react"];
const sourceFileName$4 = "system-message/SystemErrorMessage-alertFalse.jsx";

var system_message_SystemErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$4,
  code: code$4,
  sourceCode: sourceCode$4,
  sourceImports: sourceImports$4,
  dependencies: dependencies$4,
  sourceFileName: sourceFileName$4
});

const scope$3 = {SystemNewsMessage: ffeSystemMessageReact.SystemNewsMessage};
const code$3 = "<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>;";
const sourceCode$3 = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';\n\n<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>;\n";
const sourceImports$3 = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';";
const dependencies$3 = ["@sb1/ffe-system-message-react"];
const sourceFileName$3 = "system-message/SystemNewsMessage.jsx";

var system_message_SystemNewsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$3,
  code: code$3,
  sourceCode: sourceCode$3,
  sourceImports: sourceImports$3,
  dependencies: dependencies$3,
  sourceFileName: sourceFileName$3
});

const scope$2 = {SystemSuccessMessage: ffeSystemMessageReact.SystemSuccessMessage};
const code$2 = "<SystemSuccessMessage>Alle systemene våre funker!</SystemSuccessMessage>;";
const sourceCode$2 = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';\n\n<SystemSuccessMessage>Alle systemene våre funker!</SystemSuccessMessage>;\n";
const sourceImports$2 = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2 = ["@sb1/ffe-system-message-react"];
const sourceFileName$2 = "system-message/SystemSuccessMessage.jsx";

var system_message_SystemSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2,
  code: code$2,
  sourceCode: sourceCode$2,
  sourceImports: sourceImports$2,
  dependencies: dependencies$2,
  sourceFileName: sourceFileName$2
});

const scope$1 = {SystemInfoMessage: ffeSystemMessageReact.SystemInfoMessage};
const code$1 = "<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>;";
const sourceCode$1 = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';\n\n<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>;\n";
const sourceImports$1 = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';";
const dependencies$1 = ["@sb1/ffe-system-message-react"];
const sourceFileName$1 = "system-message/SystemInfoMessage.jsx";

var system_message_SystemInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1,
  code: code$1,
  sourceCode: sourceCode$1,
  sourceImports: sourceImports$1,
  dependencies: dependencies$1,
  sourceFileName: sourceFileName$1
});

const scope = {FileUpload: FileUpload__default["default"]};
const code = "<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>;";
const sourceCode = "import FileUpload from '@sb1/ffe-file-upload-react';\n\n<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>;\n";
const sourceImports = "import FileUpload from '@sb1/ffe-file-upload-react';";
const dependencies = ["@sb1/ffe-file-upload-react"];
const sourceFileName = "file-upload/FileUpload.jsx";

var file_upload_FileUpload = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope,
  code: code,
  sourceCode: sourceCode,
  sourceImports: sourceImports,
  dependencies: dependencies,
  sourceFileName: sourceFileName
});

var index = { header_header, datepicker_Datepicker_invalid, datepicker_Datepicker_nn, datepicker_Calendar_nn, datepicker_Datepicker, datepicker_Calendar_en, datepicker_Datepicker_fullWidth, datepicker_Calendar, datepicker_Datepicker_en, datepicker_Datepicker_calendarAbove, datepicker_Datepicker_two, account_selector_AccountSelector_allowCustomAccount, account_selector_AccountSelector_accountNumberFormatting_off, account_selector_AccountSelector_showBalance, account_selector_AccountSelector_customListDesign, account_selector_AccountSelectorMulti, account_selector_AccountSelector, formatting_Currency, formatting_Birthnumber, formatting_Percentage, formatting_Numbers, formatting_Accountnumber, formatting_Distance, formatting_Date, spinner_Spinner_large, spinner_Spinner, lists_DescriptionList_mediumlarge, lists_NumberedList, lists_DescriptionList_horizontal, lists_DescriptionListMultiCol, lists_BulletList, lists_CheckList, lists_StylizedNumberedList, lists_DescriptionList, lists_CheckList_columns, dropdown_Dropdown, dropdown_SearchableDropdown_customListElementBody, dropdown_SearchableDropdown, dropdown_SearchableDropdown_isLoading, dropdown_SearchableDropdown_selectedItem, dropdown_SearchableDropdown_extraresults, dropdown_SearchableDropdown_customMatchFunction, dropdown_SearchableDropdown_2attributes, dropdown_SearchableDropdown_highCapacity, dropdown_Dropdown_invalid, message_box_InfoMessage, message_box_ErrorMessage_alertFalse, message_box_InfoMessageList, message_box_InfoMessage_customIcon, message_box_SuccessMessage, message_box_TipsMessage, message_box_ErrorMessage, buttons_TaskButton, buttons_TertiaryButton, buttons_ariaLoadingMessage, buttons_ShortcutButton, buttons_ActionButton, buttons_InlineExpandButton, buttons_ExpandButton, buttons_SecondaryButton, buttons_BackButton, buttons_PrimaryButton, buttons_ButtonGroup_inline, buttons_ButtonGroup_thin, buttons_ButtonGroup, accordion_Accordion_open, accordion_Accordion, accordion_Accordion_managed, tabs_Tab_condensed, tabs_Tab_selected, tabs_Tab_customProps, tabs_TabGroup, tabs_TabButton, tabs_TabGroup_advanced, tabs_Tab, tabs_TabButtonGroup_thin, tabs_TabButtonGroup, tabs_TabButtonGroup_advanced, tabs_TabButton_customProps, tabs_TabGroup_thin, tabs_TabButton_condensed, tabs_TabButton_selected, chart_donut_ChartDonut_customLabel, chart_donut_ChartDonut, tables_Table_advanced, tables_Table_customRender, tables_Table, tables_Table_expandedContentMapper, cards_TextCard, cards_IconCard_greyCharcoal, cards_IconCard_condensed, cards_ImageCard_titleOnly, cards_ImageCard, cards_CardBase, cards_IconCard, grid_Grid, grid_Grid_4col, grid_GridRow_background, grid_InlineGrid, grid_GridCol_background, grid_InlineGrid_nested, typography_Paragraph, typography_LinkText_icon, typography_PreformattedText, typography_SmallText, typography_EmphasizedText, typography_StrongText, typography_DividerLine, typography_MicroText, typography_Heading, typography_LinkText, collapse_Collapse_onRest, collapse_Collapse, form_RadioBlock, form_Checkbox_renderProps, form_Checkbox_hiddenLabel, form_InfoFieldMessage, form_RadioSwitch_selectedValue, form_InputGroup, form_Input_textLike, form_Checkbox_invalid, form_RadioSwitch_fieldMessageUnselected, form_Checkbox, form_InputGroup_description, form_PhoneNumber_PhoneNumber_countryCode_invalid, form_Label, form_RadioButton_inline, form_Tooltip_external, form_PhoneNumber, form_RadioButton, form_RadioButton_tooltip, form_Input_ref, form_PhoneNumber_countryCode_invalid, form_RadioSwitch, form_Checkbox_onChange, form_InputGroup_fieldMessage, form_Input, form_Checkbox_inlineFalse, form_InputGroup_multiChildren, form_TextArea_ref, form_ErrorFieldMessage, form_TextArea, form_RadioButtonInputGroup, form_Tooltip, form_InputGroup_extraMarginFalse, form_PhoneNumber_PhoneNumber_invalid, form_RadioButtonInputGroup_extraMarginFalse, form_RadioSwitch_fieldMessage, form_SuccessFieldMessage, context_message_ContextErrorMessage, context_message_ContextTipMessage_showCloseButton, context_message_ContextInfoMessage_compact, context_message_ContextSuccessMessage_header, context_message_ContextSuccessMessage_showCloseButton, context_message_ContextInfoMessage, context_message_ContextTipMessage, context_message_ContextInfoMessage_icon, context_message_ContextErrorMessage_showCloseButton, context_message_ContextTipMessage_compact, context_message_ContextInfoMessage_header, context_message_ContextTipMessage_icon, context_message_ContextErrorMessage_alertFalse, context_message_ContextErrorMessage_compact, context_message_ContextSuccessMessage_icon, context_message_ContextTipMessage_header, context_message_ContextSuccessMessage, context_message_ContextErrorMessage_header, context_message_ContextErrorMessage_icon, context_message_ContextInfoMessage_showCloseButton, context_message_ContextSuccessMessage_compact, details_list_DetailList, system_message_SystemErrorMessage, system_message_SystemErrorMessage_alertFalse, system_message_SystemNewsMessage, system_message_SystemSuccessMessage, system_message_SystemInfoMessage, file_upload_FileUpload };

exports.examples = index;
exports.packages = packageList;
exports.reactDoc = reactdoc;
