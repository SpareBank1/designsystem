'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ffeCoreReact = require('@sb1/ffe-core-react');
var ffeGridReact = require('@sb1/ffe-grid-react');
var ffeIconsReact = require('@sb1/ffe-icons-react');
var react = require('react');
var ffeAccountSelectorReact = require('@sb1/ffe-account-selector-react');
var ffeFormReact = require('@sb1/ffe-form-react');
var Spinner = require('@sb1/ffe-spinner-react');
var ffeListsReact = require('@sb1/ffe-lists-react');
var Dropdown = require('@sb1/ffe-dropdown-react');
var ffeSystemMessageReact = require('@sb1/ffe-system-message-react');
var ffeMessageBoxReact = require('@sb1/ffe-message-box-react');
var Table = require('@sb1/ffe-tables-react');
var ffeButtonsReact = require('@sb1/ffe-buttons-react');
var ChartDonut = require('@sb1/ffe-chart-donut-react');
var Datepicker = require('@sb1/ffe-datepicker-react');
var ffeFormatters = require('@sb1/ffe-formatters');
var ffeTabsReact = require('@sb1/ffe-tabs-react');
var ffeCardsReact = require('@sb1/ffe-cards-react');
var ffeDetailsListReact = require('@sb1/ffe-details-list-react');
var FileUpload = require('@sb1/ffe-file-upload-react');
var Collapse = require('@sb1/ffe-collapse-react');
var ffeAccordionReact = require('@sb1/ffe-accordion-react');
var SearchableDropdown = require('@sb1/ffe-searchable-dropdown-react');
var ffeContextMessageReact = require('@sb1/ffe-context-message-react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Spinner__default = /*#__PURE__*/_interopDefaultLegacy(Spinner);
var Dropdown__default = /*#__PURE__*/_interopDefaultLegacy(Dropdown);
var Table__default = /*#__PURE__*/_interopDefaultLegacy(Table);
var ChartDonut__default = /*#__PURE__*/_interopDefaultLegacy(ChartDonut);
var Datepicker__default = /*#__PURE__*/_interopDefaultLegacy(Datepicker);
var FileUpload__default = /*#__PURE__*/_interopDefaultLegacy(FileUpload);
var Collapse__default = /*#__PURE__*/_interopDefaultLegacy(Collapse);
var SearchableDropdown__default = /*#__PURE__*/_interopDefaultLegacy(SearchableDropdown);

var packageList = [
	{
		name: "@sb1/ffe-accordion-react",
		version: "9.2.4",
		"private": false,
		location: "/packages/ffe-accordion-react"
	},
	{
		name: "@sb1/ffe-accordion",
		version: "8.0.10",
		"private": false,
		location: "/packages/ffe-accordion"
	},
	{
		name: "@sb1/ffe-account-selector-react",
		version: "18.5.1",
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
		version: "13.0.16",
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
		version: "12.0.10",
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
		version: "5.0.17",
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
		version: "19.4.0",
		"private": false,
		location: "/packages/ffe-core"
	},
	{
		name: "@sb1/ffe-datepicker-react",
		version: "5.0.36",
		"private": false,
		location: "/packages/ffe-datepicker-react"
	},
	{
		name: "@sb1/ffe-datepicker",
		version: "10.0.18",
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
		version: "3.0.50",
		"private": false,
		location: "/packages/ffe-details-list-react"
	},
	{
		name: "@sb1/ffe-details-list",
		version: "10.0.10",
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
		version: "6.0.12",
		"private": false,
		location: "/packages/ffe-file-upload"
	},
	{
		name: "@sb1/ffe-form-react",
		version: "9.0.1",
		"private": false,
		location: "/packages/ffe-form-react"
	},
	{
		name: "@sb1/ffe-form",
		version: "19.1.6",
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
		version: "11.1.0",
		"private": false,
		location: "/packages/ffe-grid-react"
	},
	{
		name: "@sb1/ffe-grid",
		version: "12.1.2",
		"private": false,
		location: "/packages/ffe-grid"
	},
	{
		name: "@sb1/ffe-header",
		version: "17.0.18",
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
		version: "10.0.14",
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
		version: "13.5.1",
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
		version: "4.1.3",
		"private": false,
		location: "/packages/ffe-spinner"
	},
	{
		name: "@sb1/ffe-system-message-react",
		version: "6.2.10",
		"private": false,
		location: "/packages/ffe-system-message-react"
	},
	{
		name: "@sb1/ffe-system-message",
		version: "6.0.14",
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
		version: "12.0.11",
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
		version: "11.0.12",
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
	"ffe-account-selector-react/src/subcomponents/account-selector-multi/AccountNoMatch.js": {
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
	"ffe-account-selector-react/src/subcomponents/account-selector-multi/SuggestionListStatusBar.js": {
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
	"ffe-account-selector-react/src/subcomponents/account-selector-multi/AccountSuggestionMulti.js": {
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
	"ffe-account-selector-react/src/subcomponents/account-selector-single/AccountDetails.js": {
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
	"ffe-account-selector-react/src/subcomponents/account-selector-single/AccountSuggestionSingle.js": {
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
		onChange: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
		},
		onFocus: {
			type: {
				name: "func"
			},
			required: false,
			description: ""
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
		},
		onClick: {
			type: {
				name: "func"
			},
			required: false,
			description: "Called when button is clicked if not loading or disabled"
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
	"ffe-context-message-react/src/ContextTipMessage.js": {
	description: "",
	displayName: "ContextTipMessage",
	methods: [
	]
},
	"ffe-context-message-react/src/ContextSuccessMessage.js": {
	description: "",
	displayName: "ContextSuccessMessage",
	methods: [
	]
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
	"ffe-form-react/src/SuccessFieldMessage.js": {
	description: "",
	displayName: "SuccessFieldMessage",
	methods: [
	]
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
	"ffe-form-react/src/InfoFieldMessage.js": {
	description: "",
	displayName: "InfoFieldMessage",
	methods: [
	]
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
			required: true,
			description: "The name of the radio button, required to avoid missing name"
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
						value: "'vann-30'",
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
						value: "'vann-30'",
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
	"ffe-searchable-dropdown-react/src/ListItemContainer.js": {
	description: "",
	methods: [
	]
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
	"ffe-system-message-react/src/SystemSuccessMessage.js": {
	description: "",
	displayName: "SystemSuccessMessage",
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
}
};

const scope$2M = {Paragraph: ffeCoreReact.Paragraph};
const code$2M = "<>\n    <Paragraph>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph lead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph subLead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n</>;";
const sourceCode$2M = "import { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n    <Paragraph>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph lead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n\n    <Paragraph subLead={true}>\n        Velg en av bankene våre, og bruk BankID for å bli kunde. Nettbank og\n        mobilbank får du med en gang, og bankkortet kommer i posten om en ukes\n        tid.\n    </Paragraph>\n</>;\n";
const sourceImports$2M = "import { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$2M = ["@sb1/ffe-core-react"];
const sourceFileName$2M = "typography/Paragraph.jsx";

var typography_Paragraph = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2M,
  code: code$2M,
  sourceCode: sourceCode$2M,
  sourceImports: sourceImports$2M,
  dependencies: dependencies$2M,
  sourceFileName: sourceFileName$2M
});

const scope$2L = {LinkText: ffeCoreReact.LinkText};
const code$2L = "<LinkText href=\"https://www.sparebank1.no\">sparebank1.no</LinkText>;";
const sourceCode$2L = "import { LinkText } from '@sb1/ffe-core-react';\n\n<LinkText href=\"https://www.sparebank1.no\">sparebank1.no</LinkText>;\n";
const sourceImports$2L = "import { LinkText } from '@sb1/ffe-core-react';";
const dependencies$2L = ["@sb1/ffe-core-react"];
const sourceFileName$2L = "typography/LinkText.jsx";

var typography_LinkText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2L,
  code: code$2L,
  sourceCode: sourceCode$2L,
  sourceImports: sourceImports$2L,
  dependencies: dependencies$2L,
  sourceFileName: sourceFileName$2L
});

const scope$2K = {SmallText: ffeCoreReact.SmallText};
const code$2K = "<>\n    <div>\n        <SmallText>Dette er en liten type</SmallText>\n    </div>\n\n    <SmallText element=\"p\">Dette er en liten type</SmallText>\n</>;";
const sourceCode$2K = "import { SmallText } from '@sb1/ffe-core-react';\n\n<>\n    <div>\n        <SmallText>Dette er en liten type</SmallText>\n    </div>\n\n    <SmallText element=\"p\">Dette er en liten type</SmallText>\n</>;\n";
const sourceImports$2K = "import { SmallText } from '@sb1/ffe-core-react';";
const dependencies$2K = ["@sb1/ffe-core-react"];
const sourceFileName$2K = "typography/SmallText.jsx";

var typography_SmallText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2K,
  code: code$2K,
  sourceCode: sourceCode$2K,
  sourceImports: sourceImports$2K,
  dependencies: dependencies$2K,
  sourceFileName: sourceFileName$2K
});

const scope$2J = {PreformattedText: ffeCoreReact.PreformattedText};
const code$2J = "<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>;";
const sourceCode$2J = "import { PreformattedText } from '@sb1/ffe-core-react';\n\n<PreformattedText>\n    {`Gammal dam\nEin frosk hoppar\nLyden av vatnet`}\n</PreformattedText>;\n";
const sourceImports$2J = "import { PreformattedText } from '@sb1/ffe-core-react';";
const dependencies$2J = ["@sb1/ffe-core-react"];
const sourceFileName$2J = "typography/PreformattedText.jsx";

var typography_PreformattedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2J,
  code: code$2J,
  sourceCode: sourceCode$2J,
  sourceImports: sourceImports$2J,
  dependencies: dependencies$2J,
  sourceFileName: sourceFileName$2J
});

const scope$2I = {EmphasizedText: ffeCoreReact.EmphasizedText};
const code$2I = "<EmphasizedText>Dette bør utheves</EmphasizedText>;";
const sourceCode$2I = "import { EmphasizedText } from '@sb1/ffe-core-react';\n\n<EmphasizedText>Dette bør utheves</EmphasizedText>;\n";
const sourceImports$2I = "import { EmphasizedText } from '@sb1/ffe-core-react';";
const dependencies$2I = ["@sb1/ffe-core-react"];
const sourceFileName$2I = "typography/EmphasizedText.jsx";

var typography_EmphasizedText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2I,
  code: code$2I,
  sourceCode: sourceCode$2I,
  sourceImports: sourceImports$2I,
  dependencies: dependencies$2I,
  sourceFileName: sourceFileName$2I
});

const scope$2H = {Heading1: ffeCoreReact.Heading1,Heading2: ffeCoreReact.Heading2,Heading3: ffeCoreReact.Heading3,Heading4: ffeCoreReact.Heading4,Heading5: ffeCoreReact.Heading5,Heading6: ffeCoreReact.Heading6};
const code$2H = "<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>;";
const sourceCode$2H = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6,\n} from '@sb1/ffe-core-react';\n\n<div>\n    <Heading1>Overskrift nivå 1</Heading1>\n    <Heading2>Overskrift nivå 2</Heading2>\n    <Heading3>Overskrift nivå 3</Heading3>\n    <Heading4>Overskrift nivå 4</Heading4>\n    <Heading5>Overskrift nivå 5</Heading5>\n    <Heading6>Overskrift nivå 6</Heading6>\n</div>;\n";
const sourceImports$2H = "import {\n    Heading1,\n    Heading2,\n    Heading3,\n    Heading4,\n    Heading5,\n    Heading6,\n} from '@sb1/ffe-core-react';";
const dependencies$2H = ["@sb1/ffe-core-react"];
const sourceFileName$2H = "typography/Heading.jsx";

var typography_Heading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2H,
  code: code$2H,
  sourceCode: sourceCode$2H,
  sourceImports: sourceImports$2H,
  dependencies: dependencies$2H,
  sourceFileName: sourceFileName$2H
});

const scope$2G = {StrongText: ffeCoreReact.StrongText};
const code$2G = "<StrongText>Dette er en sterk type</StrongText>;";
const sourceCode$2G = "import { StrongText } from '@sb1/ffe-core-react';\n\n<StrongText>Dette er en sterk type</StrongText>;\n";
const sourceImports$2G = "import { StrongText } from '@sb1/ffe-core-react';";
const dependencies$2G = ["@sb1/ffe-core-react"];
const sourceFileName$2G = "typography/StrongText.jsx";

var typography_StrongText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2G,
  code: code$2G,
  sourceCode: sourceCode$2G,
  sourceImports: sourceImports$2G,
  dependencies: dependencies$2G,
  sourceFileName: sourceFileName$2G
});

const scope$2F = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,DividerLine: ffeCoreReact.DividerLine,Paragraph: ffeCoreReact.Paragraph};
const code$2F = "<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$2F = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';\n\n<Grid>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe over</Paragraph>\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <DividerLine />\n        </GridCol>\n    </GridRow>\n    <GridRow>\n        <GridCol>\n            <Paragraph>Noe under</Paragraph>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$2F = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport { DividerLine, Paragraph } from '@sb1/ffe-core-react';";
const dependencies$2F = ["@sb1/ffe-grid-react","@sb1/ffe-core-react"];
const sourceFileName$2F = "typography/DividerLine.jsx";

var typography_DividerLine = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2F,
  code: code$2F,
  sourceCode: sourceCode$2F,
  sourceImports: sourceImports$2F,
  dependencies: dependencies$2F,
  sourceFileName: sourceFileName$2F
});

const scope$2E = {LinkText: ffeCoreReact.LinkText,SnakkebobleIkon: ffeIconsReact.SnakkebobleIkon};
const code$2E = "<LinkText href=\"https://www.sparebank1.no\" underline={false}>\n    <SnakkebobleIkon\n        alt=\"Snakk med oss\"\n        style={{ fill: 'darkblue', height: '80px' }}\n    />\n</LinkText>;";
const sourceCode$2E = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';\n\n<LinkText href=\"https://www.sparebank1.no\" underline={false}>\n    <SnakkebobleIkon\n        alt=\"Snakk med oss\"\n        style={{ fill: 'darkblue', height: '80px' }}\n    />\n</LinkText>;\n";
const sourceImports$2E = "import { LinkText } from '@sb1/ffe-core-react';\nimport { SnakkebobleIkon } from '@sb1/ffe-icons-react';";
const dependencies$2E = ["@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$2E = "typography/LinkText-icon.jsx";

var typography_LinkText_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2E,
  code: code$2E,
  sourceCode: sourceCode$2E,
  sourceImports: sourceImports$2E,
  dependencies: dependencies$2E,
  sourceFileName: sourceFileName$2E
});

const scope$2D = {MicroText: ffeCoreReact.MicroText};
const code$2D = "<MicroText>Dette er den minste typen vi har</MicroText>;";
const sourceCode$2D = "import { MicroText } from '@sb1/ffe-core-react';\n\n<MicroText>Dette er den minste typen vi har</MicroText>;\n";
const sourceImports$2D = "import { MicroText } from '@sb1/ffe-core-react';";
const dependencies$2D = ["@sb1/ffe-core-react"];
const sourceFileName$2D = "typography/MicroText.jsx";

var typography_MicroText = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2D,
  code: code$2D,
  sourceCode: sourceCode$2D,
  sourceImports: sourceImports$2D,
  dependencies: dependencies$2D,
  sourceFileName: sourceFileName$2D
});

const scope$2C = {useState: react.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup,SmallText: ffeCoreReact.SmallText};
const code$2C = "() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label5 = 'label5';\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n    return (\n        <div\n            style={{\n                padding: '8px',\n                background: isHighlighted ? '#ff9100' : 'white',\n            }}\n        >\n            <div>{item.name}</div>\n            <div style={{ display: 'flex', justifyContent: 'space-between' }}>\n                <SmallText>{item.accountNumber}</SmallText>\n                <SmallText>{item.amount}</SmallText>\n            </div>\n        </div>\n    );\n    };\n\n    return(\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label5}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label5}\n                listElementBody={CustomListElementBody}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    )\n}";
const sourceCode$2C = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\nimport { SmallText } from '@sb1/ffe-core-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label5 = 'label5';\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n    return (\n        <div\n            style={{\n                padding: '8px',\n                background: isHighlighted ? '#ff9100' : 'white',\n            }}\n        >\n            <div>{item.name}</div>\n            <div style={{ display: 'flex', justifyContent: 'space-between' }}>\n                <SmallText>{item.accountNumber}</SmallText>\n                <SmallText>{item.amount}</SmallText>\n            </div>\n        </div>\n    );\n    };\n\n    return(\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label5}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label5}\n                listElementBody={CustomListElementBody}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    )\n}";
const sourceImports$2C = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\nimport { SmallText } from '@sb1/ffe-core-react';";
const dependencies$2C = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react","@sb1/ffe-core-react"];
const sourceFileName$2C = "account-selector/AccountSelector-customListDesign.jsx";

var account_selector_AccountSelector_customListDesign = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2C,
  code: code$2C,
  sourceCode: sourceCode$2C,
  sourceImports: sourceImports$2C,
  dependencies: dependencies$2C,
  sourceFileName: sourceFileName$2C
});

const scope$2B = {useState: react.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2B = "() => {\n    const label3 = 'label3';\n    const [selectedAccount, setSelectedAccount] = useState(null);\n\n    return (\n    <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label3}>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={value => setSelectedAccount(value)}\n            onReset={() => setSelectedAccount(null)}\n            selectedAccount={selectedAccount}\n            formatAccountNumber={false}\n            labelId={label3}\n            ariaInvalid={false}\n        />\n    </InputGroup>);\n}";
const sourceCode$2B = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const label3 = 'label3';\n    const [selectedAccount, setSelectedAccount] = useState(null);\n\n    return (\n    <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label3}>\n        <AccountSelector\n            accounts={[\n                {\n                    accountNumber: '1234 56 789101',\n                    name: 'Brukskonto',\n                    currencyCode: 'NOK',\n                    balance: 1337,\n                },\n                {\n                    accountNumber: '1234 56 789102',\n                    name: 'Brukskonto2',\n                    currencyCode: 'NOK',\n                    balance: 13337,\n                },\n                {\n                    accountNumber: '2234 56 789102',\n                    name: 'Sparekonto1',\n                    currencyCode: 'NOK',\n                    balance: 109236,\n                },\n                {\n                    accountNumber: '1253 47 789102',\n                    name: 'Sparekonto2',\n                    currencyCode: 'NOK',\n                    balance: 0,\n                },\n            ]}\n            id=\"account-selector-single\"\n            locale=\"nb\"\n            onAccountSelected={value => setSelectedAccount(value)}\n            onReset={() => setSelectedAccount(null)}\n            selectedAccount={selectedAccount}\n            formatAccountNumber={false}\n            labelId={label3}\n            ariaInvalid={false}\n        />\n    </InputGroup>);\n}";
const sourceImports$2B = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2B = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2B = "account-selector/AccountSelector-accountNumberFormatting-off.jsx";

var account_selector_AccountSelector_accountNumberFormatting_off = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2B,
  code: code$2B,
  sourceCode: sourceCode$2B,
  sourceImports: sourceImports$2B,
  dependencies: dependencies$2B,
  sourceFileName: sourceFileName$2B
});

const scope$2A = {useState: react.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2A = "() => {\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    const label1 = 'label1';\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label1} >\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={val => setSelectedAccount(val)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label1}\n                ariaInvalid={false}\n            />\n        </InputGroup>);\n}";
const sourceCode$2A = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState();\n\n    const label1 = 'label1';\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label1} >\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'NOK',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={val => setSelectedAccount(val)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                labelId={label1}\n                ariaInvalid={false}\n            />\n        </InputGroup>);\n}\n";
const sourceImports$2A = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2A = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2A = "account-selector/AccountSelector.jsx";

var account_selector_AccountSelector = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2A,
  code: code$2A,
  sourceCode: sourceCode$2A,
  sourceImports: sourceImports$2A,
  dependencies: dependencies$2A,
  sourceFileName: sourceFileName$2A
});

const scope$2z = {useState: react.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
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

const scope$2y = {useState: react.useState,AccountSelector: ffeAccountSelectorReact.AccountSelector,InputGroup: ffeFormReact.InputGroup};
const code$2y = "() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label2 = 'label2';\n\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'EUR',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                allowCustomAccount={true}\n                labelId={label2}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$2y = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selectedAccount, setSelectedAccount] = useState(null);\n    const label2 = 'label2';\n\n    return (\n        <InputGroup label=\"Velg konto\" extraMargin={false} labelId={label2}>\n            <AccountSelector\n                accounts={[\n                    {\n                        accountNumber: '1234 56 789101',\n                        name: 'Brukskonto',\n                        currencyCode: 'NOK',\n                        balance: 1337,\n                    },\n                    {\n                        accountNumber: '1234 56 789102',\n                        name: 'Brukskonto2',\n                        currencyCode: 'NOK',\n                        balance: 13337,\n                    },\n                    {\n                        accountNumber: '2234 56 789102',\n                        name: 'Sparekonto1',\n                        currencyCode: 'EUR',\n                        balance: 109236,\n                    },\n                    {\n                        accountNumber: '1253 47 789102',\n                        name: 'Sparekonto2',\n                        currencyCode: 'NOK',\n                        balance: 0,\n                    },\n                ]}\n                id=\"account-selector-single\"\n                locale=\"nb\"\n                onAccountSelected={value => setSelectedAccount(value)}\n                onReset={() => setSelectedAccount(null)}\n                selectedAccount={selectedAccount}\n                allowCustomAccount={true}\n                labelId={label2}\n                ariaInvalid={false}\n            />\n        </InputGroup>\n    );\n};";
const sourceImports$2y = "import { useState } from 'react';\nimport { AccountSelector } from '@sb1/ffe-account-selector-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$2y = ["react","@sb1/ffe-account-selector-react","@sb1/ffe-form-react"];
const sourceFileName$2y = "account-selector/AccountSelector-allowCustomAccount.jsx";

var account_selector_AccountSelector_allowCustomAccount = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2y,
  code: code$2y,
  sourceCode: sourceCode$2y,
  sourceImports: sourceImports$2y,
  dependencies: dependencies$2y,
  sourceFileName: sourceFileName$2y
});

const scope$2x = {useState: react.useState,AccountSelectorMulti: ffeAccountSelectorReact.AccountSelectorMulti,Label: ffeFormReact.Label};
const code$2x = "() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n        {\n            accountNumber: '123456789103',\n            name: 'Min ekstrakonto',\n            currencyCode: 'NOK',\n            balance: 12345,\n        },\n        {\n            accountNumber: '123456789104',\n            name: 'Min siste konto',\n            currencyCode: 'NOK',\n            balance: 54321,\n        },\n    ];\n\n    const onAccountSelected = acc => {\n        const filteredAccounts = selectedAccounts.filter(\n            a => a.accountNumber !== acc.accountNumber,\n        );\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    const onBlur = () => {\n        setValue(selectedAccounts.map(acc => acc.name).join(', '));\n    };\n\n    const onFocus = () => {\n        setValue('');\n    };\n\n    const onSelectAll = () => {\n        selectedAccounts.length === accounts.length\n            ? setSelectedAccounts([])\n            : setSelectedAccounts(accounts);\n    };\n\n    return (\n        <>\n            <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n            <AccountSelectorMulti\n                id=\"account-selector-multi\"\n                locale=\"nb\"\n                accounts={accounts}\n                onAccountSelected={onAccountSelected}\n                selectedAccounts={selectedAccounts}\n                value={value}\n                onChange={val => setValue(val)}\n                showSelectAllOption={true}\n                onSelectAll={onSelectAll}\n                onBlur={onBlur}\n                onFocus={onFocus}\n            />\n        </>\n    );\n};";
const sourceCode$2x = "import { useState } from 'react';\nimport { AccountSelectorMulti } from '@sb1/ffe-account-selector-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const [value, setValue] = useState();\n    const [selectedAccounts, setSelectedAccounts] = useState([]);\n\n    const accounts = [\n        {\n            accountNumber: '123456789101',\n            name: 'Brukskonto',\n            currencyCode: 'NOK',\n            balance: 1337,\n        },\n        {\n            accountNumber: '123456789102',\n            name: 'Sparekonto',\n            currencyCode: 'NOK',\n            balance: 13337,\n        },\n        {\n            accountNumber: '123456789103',\n            name: 'Min ekstrakonto',\n            currencyCode: 'NOK',\n            balance: 12345,\n        },\n        {\n            accountNumber: '123456789104',\n            name: 'Min siste konto',\n            currencyCode: 'NOK',\n            balance: 54321,\n        },\n    ];\n\n    const onAccountSelected = acc => {\n        const filteredAccounts = selectedAccounts.filter(\n            a => a.accountNumber !== acc.accountNumber,\n        );\n\n        const accountAlreadySelectedAndShouldBeRemoved =\n            filteredAccounts.length !== selectedAccounts.length;\n\n        if (accountAlreadySelectedAndShouldBeRemoved) {\n            setSelectedAccounts(filteredAccounts);\n        } else {\n            setSelectedAccounts([...selectedAccounts, acc]);\n        }\n    };\n\n    const onBlur = () => {\n        setValue(selectedAccounts.map(acc => acc.name).join(', '));\n    };\n\n    const onFocus = () => {\n        setValue('');\n    };\n\n    const onSelectAll = () => {\n        selectedAccounts.length === accounts.length\n            ? setSelectedAccounts([])\n            : setSelectedAccounts(accounts);\n    };\n\n    return (\n        <>\n            <Label htmlFor=\"account-selector-multi\">Velg konto</Label>\n            <AccountSelectorMulti\n                id=\"account-selector-multi\"\n                locale=\"nb\"\n                accounts={accounts}\n                onAccountSelected={onAccountSelected}\n                selectedAccounts={selectedAccounts}\n                value={value}\n                onChange={val => setValue(val)}\n                showSelectAllOption={true}\n                onSelectAll={onSelectAll}\n                onBlur={onBlur}\n                onFocus={onFocus}\n            />\n        </>\n    );\n};\n";
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

const scope$2w = {Spinner: Spinner__default["default"],Paragraph: ffeCoreReact.Paragraph};
const code$2w = "<>\n    <Spinner large={true} />\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>;";
const sourceCode$2w = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<>\n    <Spinner large={true} />\n    <Paragraph>Vennligst vent litt</Paragraph>\n</>;\n";
const sourceImports$2w = "import Spinner from '@sb1/ffe-spinner-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$2w = ["@sb1/ffe-spinner-react","@sb1/ffe-core-react"];
const sourceFileName$2w = "spinner/Spinner-large.jsx";

var spinner_Spinner_large = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2w,
  code: code$2w,
  sourceCode: sourceCode$2w,
  sourceImports: sourceImports$2w,
  dependencies: dependencies$2w,
  sourceFileName: sourceFileName$2w
});

const scope$2v = {Spinner: Spinner__default["default"]};
const code$2v = "<>\n    <Spinner /> Vennligst vent litt\n</>;";
const sourceCode$2v = "import Spinner from '@sb1/ffe-spinner-react';\n\n<>\n    <Spinner /> Vennligst vent litt\n</>;\n";
const sourceImports$2v = "import Spinner from '@sb1/ffe-spinner-react';";
const dependencies$2v = ["@sb1/ffe-spinner-react"];
const sourceFileName$2v = "spinner/Spinner.jsx";

var spinner_Spinner = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2v,
  code: code$2v,
  sourceCode: sourceCode$2v,
  sourceImports: sourceImports$2v,
  dependencies: dependencies$2v,
  sourceFileName: sourceFileName$2v
});

const scope$2u = {StylizedNumberedList: ffeListsReact.StylizedNumberedList,StylizedNumberedListItem: ffeListsReact.StylizedNumberedListItem};
const code$2u = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>;";
const sourceCode$2u = "import {\n    StylizedNumberedList,\n    StylizedNumberedListItem,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <StylizedNumberedList>\n        <StylizedNumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>\n            Importer pakken i koden din\n        </StylizedNumberedListItem>\n        <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>\n    </StylizedNumberedList>\n</div>;\n";
const sourceImports$2u = "import {\n    StylizedNumberedList,\n    StylizedNumberedListItem,\n} from '@sb1/ffe-lists-react';";
const dependencies$2u = ["@sb1/ffe-lists-react"];
const sourceFileName$2u = "lists/StylizedNumberedList.jsx";

var lists_StylizedNumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2u,
  code: code$2u,
  sourceCode: sourceCode$2u,
  sourceImports: sourceImports$2u,
  dependencies: dependencies$2u,
  sourceFileName: sourceFileName$2u
});

const scope$2t = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2t = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2t = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2t = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2t = ["@sb1/ffe-lists-react"];
const sourceFileName$2t = "lists/DescriptionList.jsx";

var lists_DescriptionList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2t,
  code: code$2t,
  sourceCode: sourceCode$2t,
  sourceImports: sourceImports$2t,
  dependencies: dependencies$2t,
  sourceFileName: sourceFileName$2t
});

const scope$2s = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2s = "<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2s = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h5\">Medium</h3>\n    <DescriptionList horizontal={true} medium={true}>\n        <DescriptionListTerm>\n            This is a very long term, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n\n    <h3 className=\"ffe-h5\">Large</h3>\n    <DescriptionList horizontal={true} large={true}>\n        <DescriptionListTerm>\n            This is a very long description, so I might need some extra room\n        </DescriptionListTerm>\n        <DescriptionListDescription>\n            Enlarging the term will of course be at the cost of space for the\n            description\n        </DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2s = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2s = ["@sb1/ffe-lists-react"];
const sourceFileName$2s = "lists/DescriptionList-mediumlarge.jsx";

var lists_DescriptionList_mediumlarge = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2s,
  code: code$2s,
  sourceCode: sourceCode$2s,
  sourceImports: sourceImports$2s,
  dependencies: dependencies$2s,
  sourceFileName: sourceFileName$2s
});

const scope$2r = {DescriptionList: ffeListsReact.DescriptionList,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2r = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;";
const sourceCode$2r = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionList horizontal={true}>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer og sted</DescriptionListTerm>\n        <DescriptionListDescription>1337 Sandvika</DescriptionListDescription>\n    </DescriptionList>\n</div>;\n";
const sourceImports$2r = "import {\n    DescriptionList,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2r = ["@sb1/ffe-lists-react"];
const sourceFileName$2r = "lists/DescriptionList-horizontal.jsx";

var lists_DescriptionList_horizontal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2r,
  code: code$2r,
  sourceCode: sourceCode$2r,
  sourceImports: sourceImports$2r,
  dependencies: dependencies$2r,
  sourceFileName: sourceFileName$2r
});

const scope$2q = {DescriptionListMultiCol: ffeListsReact.DescriptionListMultiCol,DescriptionListTerm: ffeListsReact.DescriptionListTerm,DescriptionListDescription: ffeListsReact.DescriptionListDescription};
const code$2q = "<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>;";
const sourceCode$2q = "import {\n    DescriptionListMultiCol,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Personalia</h3>\n    <DescriptionListMultiCol>\n        <DescriptionListTerm>Navn</DescriptionListTerm>\n        <DescriptionListDescription>Navn Navnesen</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Husgata 14</DescriptionListDescription>\n        <DescriptionListTerm>Postnummer</DescriptionListTerm>\n        <DescriptionListDescription>0362</DescriptionListDescription>\n        <DescriptionListTerm>Adresse</DescriptionListTerm>\n        <DescriptionListDescription>Oslo</DescriptionListDescription>\n    </DescriptionListMultiCol>\n</div>;\n";
const sourceImports$2q = "import {\n    DescriptionListMultiCol,\n    DescriptionListTerm,\n    DescriptionListDescription,\n} from '@sb1/ffe-lists-react';";
const dependencies$2q = ["@sb1/ffe-lists-react"];
const sourceFileName$2q = "lists/DescriptionListMultiCol.jsx";

var lists_DescriptionListMultiCol = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2q,
  code: code$2q,
  sourceCode: sourceCode$2q,
  sourceImports: sourceImports$2q,
  dependencies: dependencies$2q,
  sourceFileName: sourceFileName$2q
});

const scope$2p = {CheckList: ffeListsReact.CheckList,CheckListItem: ffeListsReact.CheckListItem};
const code$2p = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>;";
const sourceCode$2p = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList columns={2}>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n        <CheckListItem isCross={true}>Mindre tid</CheckListItem>\n    </CheckList>\n</div>;\n";
const sourceImports$2p = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$2p = ["@sb1/ffe-lists-react"];
const sourceFileName$2p = "lists/CheckList-columns.jsx";

var lists_CheckList_columns = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2p,
  code: code$2p,
  sourceCode: sourceCode$2p,
  sourceImports: sourceImports$2p,
  dependencies: dependencies$2p,
  sourceFileName: sourceFileName$2p
});

const scope$2o = {CheckList: ffeListsReact.CheckList,CheckListItem: ffeListsReact.CheckListItem};
const code$2o = "<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>;";
const sourceCode$2o = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Ved å bruke FFE får du</h3>\n    <CheckList>\n        <CheckListItem>Massevis av ferdige, testede komponenter</CheckListItem>\n        <CheckListItem>Likt design som resten av SpareBank 1</CheckListItem>\n        <CheckListItem>Høyere utviklingshastighet</CheckListItem>\n        <CheckListItem isCross={true}>Flere bugs</CheckListItem>\n    </CheckList>\n</div>;\n";
const sourceImports$2o = "import { CheckList, CheckListItem } from '@sb1/ffe-lists-react';";
const dependencies$2o = ["@sb1/ffe-lists-react"];
const sourceFileName$2o = "lists/CheckList.jsx";

var lists_CheckList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2o,
  code: code$2o,
  sourceCode: sourceCode$2o,
  sourceImports: sourceImports$2o,
  dependencies: dependencies$2o,
  sourceFileName: sourceFileName$2o
});

const scope$2n = {NumberedList: ffeListsReact.NumberedList,NumberedListItem: ffeListsReact.NumberedListItem};
const code$2n = "<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>;";
const sourceCode$2n = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Å bruke FFE er enkelt!</h3>\n    <NumberedList>\n        <NumberedListItem>\n            Installer pakken du vil bruke via NPM\n        </NumberedListItem>\n        <NumberedListItem>Importer pakken i koden din</NumberedListItem>\n        <NumberedListItem>Profit!</NumberedListItem>\n    </NumberedList>\n</div>;\n";
const sourceImports$2n = "import { NumberedList, NumberedListItem } from '@sb1/ffe-lists-react';";
const dependencies$2n = ["@sb1/ffe-lists-react"];
const sourceFileName$2n = "lists/NumberedList.jsx";

var lists_NumberedList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2n,
  code: code$2n,
  sourceCode: sourceCode$2n,
  sourceImports: sourceImports$2n,
  dependencies: dependencies$2n,
  sourceFileName: sourceFileName$2n
});

const scope$2m = {BulletList: ffeListsReact.BulletList,BulletListItem: ffeListsReact.BulletListItem};
const code$2m = "<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>;";
const sourceCode$2m = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';\n\n<div>\n    <h3 className=\"ffe-h4\">Våre forsikringer</h3>\n    <BulletList>\n        <BulletListItem>Bilforsikring</BulletListItem>\n        <BulletListItem>Reiseforsikring</BulletListItem>\n        <BulletListItem>Innboforsikring</BulletListItem>\n    </BulletList>\n</div>;\n";
const sourceImports$2m = "import { BulletList, BulletListItem } from '@sb1/ffe-lists-react';";
const dependencies$2m = ["@sb1/ffe-lists-react"];
const sourceFileName$2m = "lists/BulletList.jsx";

var lists_BulletList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2m,
  code: code$2m,
  sourceCode: sourceCode$2m,
  sourceImports: sourceImports$2m,
  dependencies: dependencies$2m,
  sourceFileName: sourceFileName$2m
});

const scope$2l = {InlineGrid: ffeGridReact.InlineGrid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$2l = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>;";
const sourceCode$2l = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</InlineGrid>;\n";
const sourceImports$2l = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$2l = ["@sb1/ffe-grid-react"];
const sourceFileName$2l = "grid/InlineGrid.jsx";

var grid_InlineGrid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2l,
  code: code$2l,
  sourceCode: sourceCode$2l,
  sourceImports: sourceImports$2l,
  dependencies: dependencies$2l,
  sourceFileName: sourceFileName$2l
});

const scope$2k = {useState: react.useState,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$2k = "() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'vann-30',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-raden under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow background={bgColor}>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est.\n                    </p>\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$2k = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'vann-30',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-raden under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow background={bgColor}>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est.\n                    </p>\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$2k = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$2k = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$2k = "grid/GridRow-background.jsx";

var grid_GridRow_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2k,
  code: code$2k,
  sourceCode: sourceCode$2k,
  sourceImports: sourceImports$2k,
  dependencies: dependencies$2k,
  sourceFileName: sourceFileName$2k
});

const scope$2j = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$2j = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$2j = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\">Litt innhold til venstre</GridCol>\n        <GridCol sm=\"6\">Litt innhold til høyre</GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$2j = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$2j = ["@sb1/ffe-grid-react"];
const sourceFileName$2j = "grid/Grid.jsx";

var grid_Grid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2j,
  code: code$2j,
  sourceCode: sourceCode$2j,
  sourceImports: sourceImports$2j,
  dependencies: dependencies$2j,
  sourceFileName: sourceFileName$2j
});

const scope$2i = {Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$2i = "<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$2i = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n        <GridCol sm=\"6\" md=\"4\" lg=\"3\">\n            Litt innhold\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$2i = "import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$2i = ["@sb1/ffe-grid-react"];
const sourceFileName$2i = "grid/Grid-4col.jsx";

var grid_Grid_4col = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2i,
  code: code$2i,
  sourceCode: sourceCode$2i,
  sourceImports: sourceImports$2i,
  dependencies: dependencies$2i,
  sourceFileName: sourceFileName$2i
});

const scope$2h = {useState: react.useState,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol,Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$2h = "() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'vann-30',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol\n                    sm={12}\n                    lg={{ cols: 6, offset: 3 }}\n                    background={bgColor}\n                    bottomPadding={false}\n                >\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est. Integer nec magna ultricies, commodo urna ut,\n                        bibendum turpis. Curabitur nec ex sed lacus bibendum\n                        sollicitudin.\n                    </p>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    Merk at innholdet både over og under er i linje med grid-et.\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$2h = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n() => {\n    const backgroundColors = [\n        'frost-30',\n        'sand',\n        'sand-70',\n        'sand-30',\n        'syrin-70',\n        'syrin-30',\n        'vann',\n        'vann-30',\n        'fjell',\n        'hvit',\n    ];\n    const [bgColor, setBgColor] = useState(backgroundColors[0]);\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    <Label htmlFor=\"select-gridrow-bg\">\n                        Du kan velge bakgrunnsfarge på grid-kolonnen under her:\n                    </Label>\n                    <Dropdown\n                        id=\"select-gridrow-bg\"\n                        onChange={e => setBgColor(e.target.value)}\n                        value={bgColor}\n                    >\n                        {backgroundColors.map(name => (\n                            <option key={name} value={name}>\n                                {name}\n                            </option>\n                        ))}\n                    </Dropdown>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol\n                    sm={12}\n                    lg={{ cols: 6, offset: 3 }}\n                    background={bgColor}\n                    bottomPadding={false}\n                >\n                    <p>\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                        Mauris sed est sit amet enim pretium finibus in id nibh.\n                        In orci massa, ultricies imperdiet laoreet et, rhoncus\n                        ut est. Integer nec magna ultricies, commodo urna ut,\n                        bibendum turpis. Curabitur nec ex sed lacus bibendum\n                        sollicitudin.\n                    </p>\n                </GridCol>\n            </GridRow>\n            <GridRow>\n                <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>\n                    Merk at innholdet både over og under er i linje med grid-et.\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$2h = "import { useState } from 'react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$2h = ["react","@sb1/ffe-grid-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$2h = "grid/GridCol-background.jsx";

var grid_GridCol_background = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2h,
  code: code$2h,
  sourceCode: sourceCode$2h,
  sourceImports: sourceImports$2h,
  dependencies: dependencies$2h,
  sourceFileName: sourceFileName$2h
});

const scope$2g = {InlineGrid: ffeGridReact.InlineGrid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$2g = "<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>;";
const sourceCode$2g = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<InlineGrid>\n    <GridRow>\n        <GridCol sm=\"12\" md=\"6\" background=\"grey-warm\">\n            Litt innhold til venstre\n        </GridCol>\n        <GridCol sm=\"12\" md=\"6\">\n            <InlineGrid>\n                <GridRow>\n                    <GridCol sm=\"6\" background=\"blue-ice\">\n                        Grid inni grid - venstre\n                    </GridCol>\n                    <GridCol sm=\"6\" background=\"green-mint\">\n                        Grid inni grid - høyre\n                    </GridCol>\n                </GridRow>\n            </InlineGrid>\n        </GridCol>\n    </GridRow>\n</InlineGrid>;\n";
const sourceImports$2g = "import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$2g = ["@sb1/ffe-grid-react"];
const sourceFileName$2g = "grid/InlineGrid-nested.jsx";

var grid_InlineGrid_nested = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2g,
  code: code$2g,
  sourceCode: sourceCode$2g,
  sourceImports: sourceImports$2g,
  dependencies: dependencies$2g,
  sourceFileName: sourceFileName$2g
});

const scope$2f = {SystemSuccessMessage: ffeSystemMessageReact.SystemSuccessMessage};
const code$2f = "<SystemSuccessMessage>Alle systemene våre funker!</SystemSuccessMessage>;";
const sourceCode$2f = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';\n\n<SystemSuccessMessage>Alle systemene våre funker!</SystemSuccessMessage>;\n";
const sourceImports$2f = "import { SystemSuccessMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2f = ["@sb1/ffe-system-message-react"];
const sourceFileName$2f = "system-message/SystemSuccessMessage.jsx";

var system_message_SystemSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2f,
  code: code$2f,
  sourceCode: sourceCode$2f,
  sourceImports: sourceImports$2f,
  dependencies: dependencies$2f,
  sourceFileName: sourceFileName$2f
});

const scope$2e = {SystemInfoMessage: ffeSystemMessageReact.SystemInfoMessage};
const code$2e = "<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>;";
const sourceCode$2e = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';\n\n<SystemInfoMessage>\n    Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.\n</SystemInfoMessage>;\n";
const sourceImports$2e = "import { SystemInfoMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2e = ["@sb1/ffe-system-message-react"];
const sourceFileName$2e = "system-message/SystemInfoMessage.jsx";

var system_message_SystemInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2e,
  code: code$2e,
  sourceCode: sourceCode$2e,
  sourceImports: sourceImports$2e,
  dependencies: dependencies$2e,
  sourceFileName: sourceFileName$2e
});

const scope$2d = {SystemNewsMessage: ffeSystemMessageReact.SystemNewsMessage};
const code$2d = "<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>;";
const sourceCode$2d = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';\n\n<SystemNewsMessage>\n    Velkommen til ny betaversjon av SpareBank 1!\n</SystemNewsMessage>;\n";
const sourceImports$2d = "import { SystemNewsMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2d = ["@sb1/ffe-system-message-react"];
const sourceFileName$2d = "system-message/SystemNewsMessage.jsx";

var system_message_SystemNewsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2d,
  code: code$2d,
  sourceCode: sourceCode$2d,
  sourceImports: sourceImports$2d,
  dependencies: dependencies$2d,
  sourceFileName: sourceFileName$2d
});

const scope$2c = {SystemErrorMessage: ffeSystemMessageReact.SystemErrorMessage};
const code$2c = "<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;";
const sourceCode$2c = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage alert={false}>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;\n";
const sourceImports$2c = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2c = ["@sb1/ffe-system-message-react"];
const sourceFileName$2c = "system-message/SystemErrorMessage-alertFalse.jsx";

var system_message_SystemErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2c,
  code: code$2c,
  sourceCode: sourceCode$2c,
  sourceImports: sourceImports$2c,
  dependencies: dependencies$2c,
  sourceFileName: sourceFileName$2c
});

const scope$2b = {SystemErrorMessage: ffeSystemMessageReact.SystemErrorMessage};
const code$2b = "<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;";
const sourceCode$2b = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';\n\n<SystemErrorMessage>\n    Noen av systemene våre er dessverre utilgjengelige akkurat nå.\n</SystemErrorMessage>;\n";
const sourceImports$2b = "import { SystemErrorMessage } from '@sb1/ffe-system-message-react';";
const dependencies$2b = ["@sb1/ffe-system-message-react"];
const sourceFileName$2b = "system-message/SystemErrorMessage.jsx";

var system_message_SystemErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2b,
  code: code$2b,
  sourceCode: sourceCode$2b,
  sourceImports: sourceImports$2b,
  dependencies: dependencies$2b,
  sourceFileName: sourceFileName$2b
});

const scope$2a = {ErrorMessage: ffeMessageBoxReact.ErrorMessage,Paragraph: ffeCoreReact.Paragraph};
const code$2a = "<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;";
const sourceCode$2a = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\">\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;\n";
const sourceImports$2a = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$2a = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$2a = "message-box/ErrorMessage.jsx";

var message_box_ErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2a,
  code: code$2a,
  sourceCode: sourceCode$2a,
  sourceImports: sourceImports$2a,
  dependencies: dependencies$2a,
  sourceFileName: sourceFileName$2a
});

const scope$29 = {InfoMessage: ffeMessageBoxReact.InfoMessage,Paragraph: ffeCoreReact.Paragraph};
const code$29 = "<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>;";
const sourceCode$29 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<InfoMessage title=\"Du har ingen kort\">\n    <Paragraph>\n        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller\n        kredittkort fra SpareBank 1.\n    </Paragraph>\n</InfoMessage>;\n";
const sourceImports$29 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$29 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$29 = "message-box/InfoMessage.jsx";

var message_box_InfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$29,
  code: code$29,
  sourceCode: sourceCode$29,
  sourceImports: sourceImports$29,
  dependencies: dependencies$29,
  sourceFileName: sourceFileName$29
});

const scope$28 = {InfoMessage: ffeMessageBoxReact.InfoMessage,InfoMessageList: ffeMessageBoxReact.InfoMessageList,InfoMessageListItem: ffeMessageBoxReact.InfoMessageListItem};
const code$28 = "<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>;";
const sourceCode$28 = "import {\n    InfoMessage,\n    InfoMessageList,\n    InfoMessageListItem,\n} from '@sb1/ffe-message-box-react';\n\n<InfoMessage title=\"Viktige ting å huske på\">\n    <InfoMessageList>\n        <InfoMessageListItem>\n            SpareBank 1 gir deg full oversikt\n        </InfoMessageListItem>\n        <InfoMessageListItem>\n            Ikke vær redd for å ta kontakt\n        </InfoMessageListItem>\n    </InfoMessageList>\n</InfoMessage>;\n";
const sourceImports$28 = "import {\n    InfoMessage,\n    InfoMessageList,\n    InfoMessageListItem,\n} from '@sb1/ffe-message-box-react';";
const dependencies$28 = ["@sb1/ffe-message-box-react"];
const sourceFileName$28 = "message-box/InfoMessageList.jsx";

var message_box_InfoMessageList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$28,
  code: code$28,
  sourceCode: sourceCode$28,
  sourceImports: sourceImports$28,
  dependencies: dependencies$28,
  sourceFileName: sourceFileName$28
});

const scope$27 = {SuccessMessage: ffeMessageBoxReact.SuccessMessage,Paragraph: ffeCoreReact.Paragraph};
const code$27 = "<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>;";
const sourceCode$27 = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<SuccessMessage title=\"Betalingen ble gjennomført\">\n    <Paragraph>Nå er du helt gjeldsfri! Hurra!</Paragraph>\n</SuccessMessage>;\n";
const sourceImports$27 = "import { SuccessMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$27 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$27 = "message-box/SuccessMessage.jsx";

var message_box_SuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$27,
  code: code$27,
  sourceCode: sourceCode$27,
  sourceImports: sourceImports$27,
  dependencies: dependencies$27,
  sourceFileName: sourceFileName$27
});

const scope$26 = {ErrorMessage: ffeMessageBoxReact.ErrorMessage,Paragraph: ffeCoreReact.Paragraph};
const code$26 = "<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;";
const sourceCode$26 = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<ErrorMessage title=\"Fikk ikke kalkulert pris\" alert={false}>\n    <Paragraph>\n        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene\n        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med\n        kundesupport, så hjelper vi deg.\n    </Paragraph>\n</ErrorMessage>;\n";
const sourceImports$26 = "import { ErrorMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$26 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$26 = "message-box/ErrorMessage-alertFalse.jsx";

var message_box_ErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$26,
  code: code$26,
  sourceCode: sourceCode$26,
  sourceImports: sourceImports$26,
  dependencies: dependencies$26,
  sourceFileName: sourceFileName$26
});

const scope$25 = {InfoMessage: ffeMessageBoxReact.InfoMessage,Paragraph: ffeCoreReact.Paragraph,HandlevognIkon: ffeIconsReact.HandlevognIkon};
const code$25 = "<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon />}>\n    <Paragraph>Du har ingenting i handlevognen din.</Paragraph>\n</InfoMessage>;";
const sourceCode$25 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';\n\n<InfoMessage title=\"Handlevognen din er tom\" icon={<HandlevognIkon />}>\n    <Paragraph>Du har ingenting i handlevognen din.</Paragraph>\n</InfoMessage>;\n";
const sourceImports$25 = "import { InfoMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\nimport { HandlevognIkon } from '@sb1/ffe-icons-react';";
const dependencies$25 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react","@sb1/ffe-icons-react"];
const sourceFileName$25 = "message-box/InfoMessage-customIcon.jsx";

var message_box_InfoMessage_customIcon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$25,
  code: code$25,
  sourceCode: sourceCode$25,
  sourceImports: sourceImports$25,
  dependencies: dependencies$25,
  sourceFileName: sourceFileName$25
});

const scope$24 = {TipsMessage: ffeMessageBoxReact.TipsMessage,Paragraph: ffeCoreReact.Paragraph};
const code$24 = "<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>;";
const sourceCode$24 = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<TipsMessage title=\"Reiseforsikringen dekker alt utenfor hjemmet!\">\n    <Paragraph>\n        Reiseforsikringen gjelder ikke bare når du er på ferie. Les mer om hva\n        som dekkes i vilkårene.\n    </Paragraph>\n</TipsMessage>;\n";
const sourceImports$24 = "import { TipsMessage } from '@sb1/ffe-message-box-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$24 = ["@sb1/ffe-message-box-react","@sb1/ffe-core-react"];
const sourceFileName$24 = "message-box/TipsMessage.jsx";

var message_box_TipsMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$24,
  code: code$24,
  sourceCode: sourceCode$24,
  sourceImports: sourceImports$24,
  dependencies: dependencies$24,
  sourceFileName: sourceFileName$24
});

const scope$23 = {Table: Table__default["default"]};
const code$23 = "() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return <Table caption=\"Utviklere\" columns={columns} data={data} />;\n};";
const sourceCode$23 = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const columns = [\n        { key: 'name', header: 'Navn' },\n        { key: 'age', header: 'Alder' },\n    ];\n    const data = [\n        { name: 'Anders', age: 32 },\n        { name: 'Erik', age: 25 },\n        { name: 'Gunn', age: 29 },\n        { name: 'Safi', age: 42 },\n        { name: 'Sandra', age: 42 },\n    ];\n\n    return <Table caption=\"Utviklere\" columns={columns} data={data} />;\n};\n";
const sourceImports$23 = "import Table from '@sb1/ffe-tables-react';";
const dependencies$23 = ["@sb1/ffe-tables-react"];
const sourceFileName$23 = "tables/Table.jsx";

var tables_Table = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$23,
  code: code$23,
  sourceCode: sourceCode$23,
  sourceImports: sourceImports$23,
  dependencies: dependencies$23,
  sourceFileName: sourceFileName$23
});

const scope$22 = {Table: Table__default["default"],TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$22 = "() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n};";
const sourceCode$22 = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ];\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: '29',\n            alignRight: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n        />\n    );\n};\n";
const sourceImports$22 = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$22 = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react"];
const sourceFileName$22 = "tables/Table-advanced.jsx";

var tables_Table_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$22,
  code: code$22,
  sourceCode: sourceCode$22,
  sourceImports: sourceImports$22,
  dependencies: dependencies$22,
  sourceFileName: sourceFileName$22
});

const scope$21 = {Table: Table__default["default"]};
const code$21 = "() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n};";
const sourceCode$21 = "import Table from '@sb1/ffe-tables-react';\n\n() => {\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            info: 'mer spennende info',\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            info: 'mer spennende info',\n            defaultExpanded: true,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            info: 'mer spennende info',\n        },\n    ];\n\n    const columns = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.info && <span>Info: {row.info}</span>;\n\n    return (\n        <Table\n            columns={columns}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data, med en rad som er ekspandert\"\n        />\n    );\n};\n";
const sourceImports$21 = "import Table from '@sb1/ffe-tables-react';";
const dependencies$21 = ["@sb1/ffe-tables-react"];
const sourceFileName$21 = "tables/Table-expandedContentMapper.jsx";

var tables_Table_expandedContentMapper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$21,
  code: code$21,
  sourceCode: sourceCode$21,
  sourceImports: sourceImports$21,
  dependencies: dependencies$21,
  sourceFileName: sourceFileName$21
});

const scope$20 = {Table: Table__default["default"],TertiaryButton: ffeButtonsReact.TertiaryButton,HakeIkon: ffeIconsReact.HakeIkon,KryssIkon: ffeIconsReact.KryssIkon};
const code$20 = "() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d,\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value\n                            ? generateCheckbox(value)\n                            : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columnsAdvanced}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n            headerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops}>\n                            <th\n                                colSpan={3}\n                                className=\"ffe-table__heading\"\n                                style={{ textAlign: 'center' }}\n                            >\n                                Personlig\n                            </th>\n                            <th colSpan={2} className=\"ffe-table__heading\" />\n                            <th colSpan={3} className=\"ffe-table__heading\">\n                                Overskrift\n                            </th>\n                        </tr>\n                        <tr {...trprops} />\n                    </>\n                );\n            }}\n            footerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops} />\n                        <tr {...trprops}>\n                            <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                                <span className=\"ffe-table__content\">\n                                    Total\n                                </span>\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td\n                                className=\"ffe-table__cell\"\n                                data-th=\"Syntetisk felt\"\n                            >\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" />\n                            <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                    {networthSum}\n                                </span>\n                            </th>\n                            <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                        </tr>\n                    </>\n                );\n            }}\n            rowRender={(trprops, props, index) => {\n                const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n                return (\n                    <tr\n                        {...trprops}\n                        className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                        onClick={event => {\n                            console.log('rowRenderClick!', index);\n                            trprops.onClick && trprops.onClick(event);\n                        }}\n                        title={props.cells.name}\n                    >\n                        {trprops.children}\n                    </tr>\n                );\n            }}\n        />\n    );\n};";
const sourceCode$20 = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';\n\n() => {\n    const generateCheckbox = value => {\n        return (\n            <div style={{ width: '100%', textAlign: 'center' }}>\n                {value ? (\n                    <HakeIkon className=\"ffe-table__expand-icon\" />\n                ) : (\n                    <KryssIkon className=\"ffe-table__expand-icon\" />\n                )}\n            </div>\n        );\n    };\n\n    const Button = ({ children }) => (\n        // stopPropagation hindrer at raden ekspanderer/kollapser når vi trykker på knappen\n        <TertiaryButton onClick={e => e.stopPropagation()}>\n            {children}\n        </TertiaryButton>\n    );\n\n    const formatNumber = num =>\n        Number(\n            num\n                .toString()\n                .replace(/\\s/g, '')\n                .replace(/,/g, '.'),\n        );\n\n    const data = [\n        {\n            id: 0,\n            name: 'Ola Normann',\n            email: 'ola@normann.no',\n            address: 'Gateveien 2',\n            age: 23,\n            networth: '12 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 1,\n            name: 'Sivert Svenska',\n            email: 'sivert@svenska.se',\n            age: 45,\n            networth: '9 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 2,\n            name: 'Daniel Dansk',\n            email: 'daniel@dansk.dk',\n            address: <Button>legg til adresse</Button>,\n            age: 39,\n            networth: '8 693 005,93',\n            button: <Button>poke</Button>,\n        },\n        {\n            id: 3,\n            name: 'Lille Ole',\n            email: 'lilleole@gmail.com',\n            address: <Button>legg til adresse</Button>,\n            age: 9,\n            networth: '23,12',\n            button: <Button>poke</Button>,\n        },\n    ].map(d => ({\n        syntetic: d.age > 18 && formatNumber(d.networth) > 10000,\n        ...d,\n    }));\n\n    const currencyCompare = (a, b) => formatNumber(a) - formatNumber(b);\n\n    const ageSum = data\n        .map(e => e.age)\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const networthSum = data\n        .map(e => formatNumber(e.networth))\n        .reduce((total, num) => {\n            return total + num;\n        });\n\n    const columnsAdvanced = [\n        { key: 'name', header: 'Navn', footer: 'Gjennomsnitt' },\n        {\n            key: 'email',\n            header: 'E-post',\n            hideOnTablet: true,\n            hideOnMobile: true,\n        },\n        {\n            key: 'age',\n            header: 'Alder',\n            footer: ageSum / data.length,\n            alignRight: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {value} {value > 18 ? ' (voksen)' : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Syntetisk felt',\n            alignRight: true,\n            notSortable: true,\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {props.cells.age > 18 &&\n                        formatNumber(props.cells.networth) > 10000\n                            ? 'voksen, formue > 10000'\n                            : ''}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'syntetic',\n            header: 'Sparing',\n            alignRight: true,\n            columnHeaderRender: (\n                value,\n                dataWindow,\n                spanProps,\n                thProps,\n                columns,\n            ) => {\n                const dataWindowSum = dataWindow\n                    .map(e => (e.syntetic ? 1 : 0))\n                    .reduce((total, num) => {\n                        return total + num;\n                    });\n                return (\n                    <th key={thProps.key} {...thProps}>\n                        <span {...spanProps}>\n                            {value} ({dataWindowSum})\n                        </span>\n                    </th>\n                );\n            },\n            cellRender: (value, col, props) => {\n                return (\n                    <>\n                        {' '}\n                        {value\n                            ? generateCheckbox(value)\n                            : generateCheckbox(false)}\n                    </>\n                );\n            },\n        },\n        {\n            key: 'networth',\n            header: 'Formue',\n            footer: '5 348 760,23',\n            alignRight: true,\n            compare: currencyCompare,\n\n            columnFooterRender: (\n                value,\n                dataWindow,\n                tdPorps,\n                spanProps,\n                columns,\n                index,\n            ) => {\n                return (\n                    <th key={tdPorps.key} {...tdPorps}>\n                        <span {...spanProps}>\n                            {Number(networthSum / 4).toFixed(2)}\n                        </span>\n                    </th>\n                );\n            },\n        },\n        { key: 'button', header: 'Poke', notSortable: true },\n    ];\n\n    // Rader uten address vil ikke kunne ekspanderes fordi funksjonen returnerer falsy\n    const expandedContentMapper = row =>\n        row.address && <span>Adresse: {row.address}</span>;\n\n    // function is called when table sorting changes.\n    const onSort = ({ sortBy, descending, tableData }) => {};\n\n    return (\n        <Table\n            columns={columnsAdvanced}\n            data={data}\n            expandedContentMapper={expandedContentMapper}\n            sortable={true}\n            sortBy={'age'}\n            descending={true}\n            condensed={true}\n            smallHeader={true}\n            columnLayoutMobile={true}\n            breakpoint={'none'}\n            caption=\"Masse spennende data\"\n            onSort={onSort}\n            headerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops}>\n                            <th\n                                colSpan={3}\n                                className=\"ffe-table__heading\"\n                                style={{ textAlign: 'center' }}\n                            >\n                                Personlig\n                            </th>\n                            <th colSpan={2} className=\"ffe-table__heading\" />\n                            <th colSpan={3} className=\"ffe-table__heading\">\n                                Overskrift\n                            </th>\n                        </tr>\n                        <tr {...trprops} />\n                    </>\n                );\n            }}\n            footerRender={(trprops, columns) => {\n                return (\n                    <>\n                        <tr {...trprops} />\n                        <tr {...trprops}>\n                            <td className=\"ffe-table__cell\" data-th=\"Navn\">\n                                <span className=\"ffe-table__content\">\n                                    Total\n                                </span>\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"E-post\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"Alder\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td\n                                className=\"ffe-table__cell\"\n                                data-th=\"Syntetisk felt\"\n                            >\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" />\n                            <th className=\"ffe-table__cell\" data-th=\"Formue\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\">\n                                    {networthSum}\n                                </span>\n                            </th>\n                            <td className=\"ffe-table__cell\" data-th=\"Poke\">\n                                <span className=\"ffe-table__content\" />\n                            </td>\n                            <td className=\"ffe-table__cell\" data-th=\"\">\n                                <span className=\"ffe-table__content ffe-table__content--text-right\" />\n                            </td>\n                        </tr>\n                    </>\n                );\n            }}\n            rowRender={(trprops, props, index) => {\n                const oddEvenClassName = index % 2 === 1 ? 'is-odd' : 'is-even';\n                return (\n                    <tr\n                        {...trprops}\n                        className={`${trprops.className} ffe-table__row-expandable ${oddEvenClassName}`}\n                        onClick={event => {\n                            console.log('rowRenderClick!', index);\n                            trprops.onClick && trprops.onClick(event);\n                        }}\n                        title={props.cells.name}\n                    >\n                        {trprops.children}\n                    </tr>\n                );\n            }}\n        />\n    );\n};\n";
const sourceImports$20 = "import Table from '@sb1/ffe-tables-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\nimport { HakeIkon, KryssIkon } from '@sb1/ffe-icons-react';";
const dependencies$20 = ["@sb1/ffe-tables-react","@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$20 = "tables/Table-customRender.jsx";

var tables_Table_customRender = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$20,
  code: code$20,
  sourceCode: sourceCode$20,
  sourceImports: sourceImports$20,
  dependencies: dependencies$20,
  sourceFileName: sourceFileName$20
});

const scope$1$ = {ChartDonut: ChartDonut__default["default"]};
const code$1$ = "<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>;";
const sourceCode$1$ = "import ChartDonut from '@sb1/ffe-chart-donut-react';\n\n<ChartDonut\n    firstLabel=\"First label\"\n    lastLabel=\"Last label\"\n    name=\"Name\"\n    percentage={42}\n/>;\n";
const sourceImports$1$ = "import ChartDonut from '@sb1/ffe-chart-donut-react';";
const dependencies$1$ = ["@sb1/ffe-chart-donut-react"];
const sourceFileName$1$ = "chart-donut/ChartDonut.jsx";

var chart_donut_ChartDonut = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1$,
  code: code$1$,
  sourceCode: sourceCode$1$,
  sourceImports: sourceImports$1$,
  dependencies: dependencies$1$,
  sourceFileName: sourceFileName$1$
});

const scope$1_ = {ChartDonut: ChartDonut__default["default"]};
const code$1_ = "<ChartDonut\n    label={\n        <div\n            style={{\n                marginTop: 10,\n                textAlign: 'center',\n                width: '100%',\n            }}\n        >\n            Du har selv ansvar\n            <strong>for all styling</strong>\n        </div>\n    }\n    name=\"Name\"\n    percentage={42}\n/>";
const sourceCode$1_ = "import ChartDonut from '@sb1/ffe-chart-donut-react';\n\n<ChartDonut\n    label={\n        <div\n            style={{\n                marginTop: 10,\n                textAlign: 'center',\n                width: '100%',\n            }}\n        >\n            Du har selv ansvar\n            <strong>for all styling</strong>\n        </div>\n    }\n    name=\"Name\"\n    percentage={42}\n/>";
const sourceImports$1_ = "import ChartDonut from '@sb1/ffe-chart-donut-react';";
const dependencies$1_ = ["@sb1/ffe-chart-donut-react"];
const sourceFileName$1_ = "chart-donut/ChartDonut-customLabel.jsx";

var chart_donut_ChartDonut_customLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1_,
  code: code$1_,
  sourceCode: sourceCode$1_,
  sourceImports: sourceImports$1_,
  dependencies: dependencies$1_,
  sourceFileName: sourceFileName$1_
});

const scope$1Z = {useState: react.useState,Datepicker: Datepicker__default["default"],Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup,Checkbox: ffeFormReact.Checkbox,Input: ffeFormReact.Input,TextArea: ffeFormReact.TextArea,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1Z = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};";
const sourceCode$1Z = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup fieldMessage={showErrors ? 'Ooops' : null}>\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};\n";
const sourceImports$1Z = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Checkbox, Input, TextArea } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1Z = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1Z = "form/InputGroup.jsx";

var form_InputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Z,
  code: code$1Z,
  sourceCode: sourceCode$1Z,
  sourceImports: sourceImports$1Z,
  dependencies: dependencies$1Z,
  sourceFileName: sourceFileName$1Z
});

const scope$1Y = {Checkbox: ffeFormReact.Checkbox};
const code$1Y = "<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>;";
const sourceCode$1Y = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    defaultChecked={true}\n    aria-label=\"Jeg har en ingen label\"\n    hiddenLabel={true}\n    inline={false}\n/>;\n";
const sourceImports$1Y = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1Y = ["@sb1/ffe-form-react"];
const sourceFileName$1Y = "form/Checkbox-hiddenLabel.jsx";

var form_Checkbox_hiddenLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Y,
  code: code$1Y,
  sourceCode: sourceCode$1Y,
  sourceImports: sourceImports$1Y,
  dependencies: dependencies$1Y,
  sourceFileName: sourceFileName$1Y
});

const scope$1X = {SuccessFieldMessage: ffeFormReact.SuccessFieldMessage};
const code$1X = "<SuccessFieldMessage>Hurra!</SuccessFieldMessage>;";
const sourceCode$1X = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';\n\n<SuccessFieldMessage>Hurra!</SuccessFieldMessage>;\n";
const sourceImports$1X = "import { SuccessFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1X = ["@sb1/ffe-form-react"];
const sourceFileName$1X = "form/SuccessFieldMessage.jsx";

var form_SuccessFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1X,
  code: code$1X,
  sourceCode: sourceCode$1X,
  sourceImports: sourceImports$1X,
  dependencies: dependencies$1X,
  sourceFileName: sourceFileName$1X
});

const scope$1W = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$1W = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;";
const sourceCode$1W = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;\n";
const sourceImports$1W = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1W = ["@sb1/ffe-form-react"];
const sourceFileName$1W = "form/InputGroup-multiChildren.jsx";

var form_InputGroup_multiChildren = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1W,
  code: code$1W,
  sourceCode: sourceCode$1W,
  sourceImports: sourceImports$1W,
  dependencies: dependencies$1W,
  sourceFileName: sourceFileName$1W
});

const scope$1V = {Checkbox: ffeFormReact.Checkbox};
const code$1V = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>;";
const sourceCode$1V = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label ffe-form-label--block\">\n        Hvilke aviser leser du?\n    </legend>\n    <Checkbox name=\"newspapers\" value=\"vg\">\n        VG\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"dagbladet\">\n        Dagbladet\n    </Checkbox>\n    <Checkbox name=\"newspapers\" value=\"aftenposten\">\n        Aftenposten\n    </Checkbox>\n</fieldset>;\n";
const sourceImports$1V = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1V = ["@sb1/ffe-form-react"];
const sourceFileName$1V = "form/Checkbox.jsx";

var form_Checkbox = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1V,
  code: code$1V,
  sourceCode: sourceCode$1V,
  sourceImports: sourceImports$1V,
  dependencies: dependencies$1V,
  sourceFileName: sourceFileName$1V
});

const scope$1U = {Checkbox: ffeFormReact.Checkbox};
const code$1U = "<Checkbox>\n    {labelProps => (\n        <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n            Her benyttes render props\n        </label>\n    )}\n</Checkbox>;";
const sourceCode$1U = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox>\n    {labelProps => (\n        <label htmlFor={labelProps.htmlFor} className={labelProps.className}>\n            Her benyttes render props\n        </label>\n    )}\n</Checkbox>;\n";
const sourceImports$1U = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1U = ["@sb1/ffe-form-react"];
const sourceFileName$1U = "form/Checkbox-renderProps.jsx";

var form_Checkbox_renderProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1U,
  code: code$1U,
  sourceCode: sourceCode$1U,
  sourceImports: sourceImports$1U,
  dependencies: dependencies$1U,
  sourceFileName: sourceFileName$1U
});

const scope$1T = {useState: react.useState,Tooltip: ffeFormReact.Tooltip};
const code$1T = "() => {\n    const [open, setOpen] = useState(false);\n    return (\n        <>\n            <Tooltip\n                aria-controls=\"tooltip-text\"\n                onClick={() => setOpen(!open)}\n            />\n            <div hidden={open} id=\"tooltip-text\">\n                Titt tei!\n            </div>\n        </>\n    );\n};";
const sourceCode$1T = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';\n\n() => {\n    const [open, setOpen] = useState(false);\n    return (\n        <>\n            <Tooltip\n                aria-controls=\"tooltip-text\"\n                onClick={() => setOpen(!open)}\n            />\n            <div hidden={open} id=\"tooltip-text\">\n                Titt tei!\n            </div>\n        </>\n    );\n};\n";
const sourceImports$1T = "import { useState } from 'react';\nimport { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$1T = ["react","@sb1/ffe-form-react"];
const sourceFileName$1T = "form/Tooltip-external.jsx";

var form_Tooltip_external = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1T,
  code: code$1T,
  sourceCode: sourceCode$1T,
  sourceImports: sourceImports$1T,
  dependencies: dependencies$1T,
  sourceFileName: sourceFileName$1T
});

const scope$1S = {TextArea: ffeFormReact.TextArea,Label: ffeFormReact.Label};
const code$1S = "<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>;";
const sourceCode$1S = "import { TextArea, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"textarea-example\">Beskriv skaden</Label>\n    <TextArea\n        defaultValue=\"Dette er et tekstfelt for lengre tekster.\"\n        id=\"textarea-example\"\n        rows=\"8\"\n    />\n</>;\n";
const sourceImports$1S = "import { TextArea, Label } from '@sb1/ffe-form-react';";
const dependencies$1S = ["@sb1/ffe-form-react"];
const sourceFileName$1S = "form/TextArea.jsx";

var form_TextArea = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1S,
  code: code$1S,
  sourceCode: sourceCode$1S,
  sourceImports: sourceImports$1S,
  dependencies: dependencies$1S,
  sourceFileName: sourceFileName$1S
});

const scope$1R = {Input: ffeFormReact.Input,ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton};
const code$1R = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$1R = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <Input ref={this.inputRef} placeholder=\"Trykk på knappen\" />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n";
const sourceImports$1R = "import { Input } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1R = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1R = "form/Input-ref.jsx";

var form_Input_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1R,
  code: code$1R,
  sourceCode: sourceCode$1R,
  sourceImports: sourceImports$1R,
  dependencies: dependencies$1R,
  sourceFileName: sourceFileName$1R
});

const scope$1Q = {Label: ffeFormReact.Label};
const code$1Q = "<Label htmlFor=\"e-post\">E-post</Label>;";
const sourceCode$1Q = "import { Label } from '@sb1/ffe-form-react';\n\n<Label htmlFor=\"e-post\">E-post</Label>;\n";
const sourceImports$1Q = "import { Label } from '@sb1/ffe-form-react';";
const dependencies$1Q = ["@sb1/ffe-form-react"];
const sourceFileName$1Q = "form/Label.jsx";

var form_Label = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1Q,
  code: code$1Q,
  sourceCode: sourceCode$1Q,
  sourceImports: sourceImports$1Q,
  dependencies: dependencies$1Q,
  sourceFileName: sourceFileName$1Q
});

const scope$1P = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input};
const code$1P = "<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>;";
const sourceCode$1P = "import { InputGroup, Input } from '@sb1/ffe-form-react';\n\n<InputGroup\n    label=\"Telefonnummer\"\n    description=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n>\n    <Input\n        type=\"tel\"\n        name=\"mobile\"\n        onChange={e => console.log('onChange', e.target.value)}\n        onBlur={e => console.log('onBlur', e.target.value)}\n    />\n</InputGroup>;\n";
const sourceImports$1P = "import { InputGroup, Input } from '@sb1/ffe-form-react';";
const dependencies$1P = ["@sb1/ffe-form-react"];
const sourceFileName$1P = "form/InputGroup-description.jsx";

var form_InputGroup_description = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1P,
  code: code$1P,
  sourceCode: sourceCode$1P,
  sourceImports: sourceImports$1P,
  dependencies: dependencies$1P,
  sourceFileName: sourceFileName$1P
});

const scope$1O = {Checkbox: ffeFormReact.Checkbox};
const code$1O = "<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>;";
const sourceCode$1O = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox name=\"loves-ads\" aria-invalid=\"true\" checked={true} onChange={f => f}>\n    Ja, jeg vil gjerne motta reklame!\n</Checkbox>;\n";
const sourceImports$1O = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1O = ["@sb1/ffe-form-react"];
const sourceFileName$1O = "form/Checkbox-invalid.jsx";

var form_Checkbox_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1O,
  code: code$1O,
  sourceCode: sourceCode$1O,
  sourceImports: sourceImports$1O,
  dependencies: dependencies$1O,
  sourceFileName: sourceFileName$1O
});

const scope$1N = {InfoFieldMessage: ffeFormReact.InfoFieldMessage};
const code$1N = "<InfoFieldMessage>Husk på det her</InfoFieldMessage>;";
const sourceCode$1N = "import { InfoFieldMessage } from '@sb1/ffe-form-react';\n\n<InfoFieldMessage>Husk på det her</InfoFieldMessage>;\n";
const sourceImports$1N = "import { InfoFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1N = ["@sb1/ffe-form-react"];
const sourceFileName$1N = "form/InfoFieldMessage.jsx";

var form_InfoFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1N,
  code: code$1N,
  sourceCode: sourceCode$1N,
  sourceImports: sourceImports$1N,
  dependencies: dependencies$1N,
  sourceFileName: sourceFileName$1N
});

const scope$1M = {InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$1M = "<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;";
const sourceCode$1M = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<>\n    <InputGroup\n        label=\"Fornavn\"\n        fieldMessage=\"Jeg er en string-fieldMessage som gir feilmelding\"\n    >\n        <Input\n            name=\"firstname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Etternavn\"\n        fieldMessage={\n            <ErrorFieldMessage>\n                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding\n            </ErrorFieldMessage>\n        }\n    >\n        <Input\n            name=\"lastname\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n\n    <InputGroup\n        label=\"Telefonnummer\"\n        fieldMessage={\n            <div>Jeg er en div-fieldMessage som ikke gir feilmelding</div>\n        }\n    >\n        <Input\n            name=\"phone\"\n            onChange={e => console.log('onChange', e.target.value)}\n            onBlur={e => console.log('onBlur', e.target.value)}\n        />\n    </InputGroup>\n</>;\n";
const sourceImports$1M = "import { InputGroup, Input, ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1M = ["@sb1/ffe-form-react"];
const sourceFileName$1M = "form/InputGroup-fieldMessage.jsx";

var form_InputGroup_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1M,
  code: code$1M,
  sourceCode: sourceCode$1M,
  sourceImports: sourceImports$1M,
  dependencies: dependencies$1M,
  sourceFileName: sourceFileName$1M
});

const scope$1L = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$1L = "<PhoneNumber number=\"123123123\" countryCode=\"\" countryCodeFieldMessage=\"Dette feltet er påkrevd\" />";
const sourceCode$1L = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"123123123\" countryCode=\"\" countryCodeFieldMessage=\"Dette feltet er påkrevd\" />\n";
const sourceImports$1L = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$1L = ["@sb1/ffe-form-react"];
const sourceFileName$1L = "form/PhoneNumber-countryCode-invalid.jsx";

var form_PhoneNumber_countryCode_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1L,
  code: code$1L,
  sourceCode: sourceCode$1L,
  sourceImports: sourceImports$1L,
  dependencies: dependencies$1L,
  sourceFileName: sourceFileName$1L
});

const scope$1K = {useState: react.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1K = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1K = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            inline={true}\n            label=\"Hva er din favorittfarge?\"\n            name=\"favoriteColor\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"red\">\n                        Rød\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"blue\">\n                        Blå\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"yellow\">\n                        Gul\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1K = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1K = ["react","@sb1/ffe-form-react"];
const sourceFileName$1K = "form/RadioButton-inline.jsx";

var form_RadioButton_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1K,
  code: code$1K,
  sourceCode: sourceCode$1K,
  sourceImports: sourceImports$1K,
  dependencies: dependencies$1K,
  sourceFileName: sourceFileName$1K
});

const scope$1J = {useState: react.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1J = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1J = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Kundetype\"\n            name=\"customerType\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton {...inputProps} value=\"bank\">\n                        Bankkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"insurance\">\n                        Forsikringskunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"both\">\n                        Totalkunde\n                    </RadioButton>\n                    <RadioButton {...inputProps} value=\"none\">\n                        Ikke kunde enda\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1J = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1J = ["react","@sb1/ffe-form-react"];
const sourceFileName$1J = "form/RadioButton.jsx";

var form_RadioButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1J,
  code: code$1J,
  sourceCode: sourceCode$1J,
  sourceImports: sourceImports$1J,
  dependencies: dependencies$1J,
  sourceFileName: sourceFileName$1J
});

const scope$1I = {Input: ffeFormReact.Input,Paragraph: ffeCoreReact.Paragraph};
const code$1I = "<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>;";
const sourceCode$1I = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n<Paragraph>\n    Jeg er{' '}\n    <Input\n        aria-label=\"Skriv inn alder\"\n        style={{ width: '47px' }}\n        textLike={true}\n    />{' '}\n    år gammel\n</Paragraph>;\n";
const sourceImports$1I = "import { Input } from '@sb1/ffe-form-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$1I = ["@sb1/ffe-form-react","@sb1/ffe-core-react"];
const sourceFileName$1I = "form/Input-textLike.jsx";

var form_Input_textLike = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1I,
  code: code$1I,
  sourceCode: sourceCode$1I,
  sourceImports: sourceImports$1I,
  dependencies: dependencies$1I,
  sourceFileName: sourceFileName$1I
});

const scope$1H = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$1H = "<PhoneNumber number=\"\" countryCode=\"47\" numberFieldMessage=\"Dette feltet er påkrevd\" />";
const sourceCode$1H = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"\" countryCode=\"47\" numberFieldMessage=\"Dette feltet er påkrevd\" />\n";
const sourceImports$1H = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$1H = ["@sb1/ffe-form-react"];
const sourceFileName$1H = "form/PhoneNumber-PhoneNumber-invalid.jsx";

var form_PhoneNumber_PhoneNumber_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1H,
  code: code$1H,
  sourceCode: sourceCode$1H,
  sourceImports: sourceImports$1H,
  dependencies: dependencies$1H,
  sourceFileName: sourceFileName$1H
});

const scope$1G = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$1G = "<PhoneNumber\n    number=\"\"\n    countryCode=\"\"\n    countryCodeAndNumberFieldMessage=\"Både landkode og telefonnummer feltene er påkrevd\"\n/>;";
const sourceCode$1G = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber\n    number=\"\"\n    countryCode=\"\"\n    countryCodeAndNumberFieldMessage=\"Både landkode og telefonnummer feltene er påkrevd\"\n/>;\n";
const sourceImports$1G = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$1G = ["@sb1/ffe-form-react"];
const sourceFileName$1G = "form/PhoneNumber-PhoneNumber-countryCode-invalid.jsx";

var form_PhoneNumber_PhoneNumber_countryCode_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1G,
  code: code$1G,
  sourceCode: sourceCode$1G,
  sourceImports: sourceImports$1G,
  dependencies: dependencies$1G,
  sourceFileName: sourceFileName$1G
});

const scope$1F = {useState: react.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1F = "() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1F = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroupWithFieldMessage\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage=\"Du må gjøre et valg\"\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1F = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1F = ["react","@sb1/ffe-form-react"];
const sourceFileName$1F = "form/RadioSwitch-fieldMessageUnselected.jsx";

var form_RadioSwitch_fieldMessageUnselected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1F,
  code: code$1F,
  sourceCode: sourceCode$1F,
  sourceImports: sourceImports$1F,
  dependencies: dependencies$1F,
  sourceFileName: sourceFileName$1F
});

const scope$1E = {TextArea: ffeFormReact.TextArea,ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton};
const code$1E = "class Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}";
const sourceCode$1E = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';\n\nclass Example extends React.Component {\n    constructor() {\n        super();\n        this.inputRef = React.createRef();\n        this.handleClick = this.handleClick.bind(this);\n    }\n    handleClick() {\n        this.inputRef.current.focus();\n    }\n    render() {\n        return (\n            <>\n                <TextArea\n                    ref={this.inputRef}\n                    placeholder=\"Trykk på knappen for fokus\"\n                />\n                <ButtonGroup>\n                    <PrimaryButton onClick={this.handleClick}>\n                        Klikk for å fokusere input\n                    </PrimaryButton>\n                </ButtonGroup>\n            </>\n        );\n    }\n}\n";
const sourceImports$1E = "import { TextArea } from '@sb1/ffe-form-react';\nimport { ButtonGroup, PrimaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1E = ["@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1E = "form/TextArea-ref.jsx";

var form_TextArea_ref = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1E,
  code: code$1E,
  sourceCode: sourceCode$1E,
  sourceImports: sourceImports$1E,
  dependencies: dependencies$1E,
  sourceFileName: sourceFileName$1E
});

const scope$1D = {useState: react.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1D = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1D = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"true\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"false\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1D = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1D = ["react","@sb1/ffe-form-react"];
const sourceFileName$1D = "form/RadioSwitch.jsx";

var form_RadioSwitch = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1D,
  code: code$1D,
  sourceCode: sourceCode$1D,
  sourceImports: sourceImports$1D,
  dependencies: dependencies$1D,
  sourceFileName: sourceFileName$1D
});

const scope$1C = {useState: react.useState,RadioBlock: ffeFormReact.RadioBlock,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1C = "() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive\n                        inn detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må\n                        skrive inn under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1C = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('you');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvem eier bilen du skal forsikre?\"\n            name=\"owner\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioBlock {...inputProps} label=\"Du\" value=\"you\" />\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Ektefelle, samboer eller registrert partner\"\n                        showChildren={true}\n                        value=\"partner\"\n                    >\n                        Da må ektefelle, samboer eller registrert partner skrive\n                        inn detaljene sine under.\n                    </RadioBlock>\n                    <RadioBlock\n                        {...inputProps}\n                        label=\"Leasingselskap\"\n                        value=\"leasing-company\"\n                    >\n                        Da må leasingselskapet gi deg noen detaljer som du må\n                        skrive inn under.\n                    </RadioBlock>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1C = "import { useState } from 'react';\nimport { RadioBlock, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1C = ["react","@sb1/ffe-form-react"];
const sourceFileName$1C = "form/RadioBlock.jsx";

var form_RadioBlock = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1C,
  code: code$1C,
  sourceCode: sourceCode$1C,
  sourceImports: sourceImports$1C,
  dependencies: dependencies$1C,
  sourceFileName: sourceFileName$1C
});

const scope$1B = {useState: react.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1B = "() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1B = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('n');\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Vil bilen bli kjørt av sjåfører under 23 år?\"\n            tooltip=\"Unge sjåfører har en statistisk høyere sjanse for å bulke bilen.\"\n            name=\"radioButtonInputGroup\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"y\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"n\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1B = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1B = ["react","@sb1/ffe-form-react"];
const sourceFileName$1B = "form/RadioSwitch-selectedValue.jsx";

var form_RadioSwitch_selectedValue = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1B,
  code: code$1B,
  sourceCode: sourceCode$1B,
  sourceImports: sourceImports$1B,
  dependencies: dependencies$1B,
  sourceFileName: sourceFileName$1B
});

const scope$1A = {ErrorFieldMessage: ffeFormReact.ErrorFieldMessage};
const code$1A = "<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>;";
const sourceCode$1A = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';\n\n<ErrorFieldMessage>Noe er feil her</ErrorFieldMessage>;\n";
const sourceImports$1A = "import { ErrorFieldMessage } from '@sb1/ffe-form-react';";
const dependencies$1A = ["@sb1/ffe-form-react"];
const sourceFileName$1A = "form/ErrorFieldMessage.jsx";

var form_ErrorFieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1A,
  code: code$1A,
  sourceCode: sourceCode$1A,
  sourceImports: sourceImports$1A,
  dependencies: dependencies$1A,
  sourceFileName: sourceFileName$1A
});

const scope$1z = {Checkbox: ffeFormReact.Checkbox};
const code$1z = "<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>;";
const sourceCode$1z = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<fieldset className=\"ffe-fieldset\">\n    <legend className=\"ffe-form-label\">Hva er du interessert i?</legend>\n    <Checkbox name=\"interests\" value=\"sport\" inline={false}>\n        Sport\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"food\" inline={false}>\n        Matlaging\n    </Checkbox>\n    <Checkbox name=\"interests\" value=\"moon\" inline={false}>\n        Månen\n    </Checkbox>\n</fieldset>;\n";
const sourceImports$1z = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1z = ["@sb1/ffe-form-react"];
const sourceFileName$1z = "form/Checkbox-inlineFalse.jsx";

var form_Checkbox_inlineFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1z,
  code: code$1z,
  sourceCode: sourceCode$1z,
  sourceImports: sourceImports$1z,
  dependencies: dependencies$1z,
  sourceFileName: sourceFileName$1z
});

const scope$1y = {useState: react.useState,RadioButton: ffeFormReact.RadioButton,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1y = "() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1y = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState();\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Hvordan vil du betale?\"\n            name=\"invoice\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n        >\n            {inputProps => (\n                <>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.\"\n                        value=\"monthly\"\n                    >\n                        Månedlig fakturering\n                    </RadioButton>\n                    <RadioButton\n                        {...inputProps}\n                        tooltip=\"Årlig fakturering er for deg som har stell på økonomien. Her sparer du mest penger!\"\n                        value=\"annually\"\n                    >\n                        Årlig fakturering\n                    </RadioButton>\n                </>\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1y = "import { useState } from 'react';\nimport { RadioButton, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1y = ["react","@sb1/ffe-form-react"];
const sourceFileName$1y = "form/RadioButton-tooltip.jsx";

var form_RadioButton_tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1y,
  code: code$1y,
  sourceCode: sourceCode$1y,
  sourceImports: sourceImports$1y,
  dependencies: dependencies$1y,
  sourceFileName: sourceFileName$1y
});

const scope$1x = {Input: ffeFormReact.Input,Label: ffeFormReact.Label};
const code$1x = "<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>;";
const sourceCode$1x = "import { Input, Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"input-first-name\">Fornavn</Label>\n    <Input id=\"input-first-name\" />\n</>;\n";
const sourceImports$1x = "import { Input, Label } from '@sb1/ffe-form-react';";
const dependencies$1x = ["@sb1/ffe-form-react"];
const sourceFileName$1x = "form/Input.jsx";

var form_Input = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1x,
  code: code$1x,
  sourceCode: sourceCode$1x,
  sourceImports: sourceImports$1x,
  dependencies: dependencies$1x,
  sourceFileName: sourceFileName$1x
});

const scope$1w = {useState: react.useState,RadioSwitch: ffeFormReact.RadioSwitch,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup};
const code$1w = "() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};";
const sourceCode$1w = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';\n\n() => {\n    const [selected, setSelected] = useState('nei');\n    const fieldMessageLeasing =\n        'Bilen kan ikke være leaset hvis du har billån med pant i bilen.';\n\n    return (\n        <RadioButtonInputGroup\n            label=\"Er bilen leaset?\"\n            name=\"hasLeasing\"\n            onChange={e => setSelected(e.target.value)}\n            selectedValue={selected}\n            fieldMessage={fieldMessageLeasing}\n        >\n            {inputProps => (\n                <RadioSwitch\n                    leftLabel=\"Ja\"\n                    leftValue=\"ja\"\n                    rightLabel=\"Nei\"\n                    rightValue=\"nei\"\n                    {...inputProps}\n                />\n            )}\n        </RadioButtonInputGroup>\n    );\n};\n";
const sourceImports$1w = "import { useState } from 'react';\nimport { RadioSwitch, RadioButtonInputGroup } from '@sb1/ffe-form-react';";
const dependencies$1w = ["react","@sb1/ffe-form-react"];
const sourceFileName$1w = "form/RadioSwitch-fieldMessage.jsx";

var form_RadioSwitch_fieldMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1w,
  code: code$1w,
  sourceCode: sourceCode$1w,
  sourceImports: sourceImports$1w,
  dependencies: dependencies$1w,
  sourceFileName: sourceFileName$1w
});

const scope$1v = {useState: react.useState,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup,RadioBlock: ffeFormReact.RadioBlock,RadioSwitch: ffeFormReact.RadioSwitch,RadioButton: ffeFormReact.RadioButton,Tooltip: ffeFormReact.Tooltip,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1v = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};";
const sourceCode$1v = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                extraMargin={false}\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};\n";
const sourceImports$1v = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1v = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1v = "form/RadioButtonInputGroup-extraMarginFalse.jsx";

var form_RadioButtonInputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1v,
  code: code$1v,
  sourceCode: sourceCode$1v,
  sourceImports: sourceImports$1v,
  dependencies: dependencies$1v,
  sourceFileName: sourceFileName$1v
});

const scope$1u = {Checkbox: ffeFormReact.Checkbox};
const code$1u = "<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>;";
const sourceCode$1u = "import { Checkbox } from '@sb1/ffe-form-react';\n\n<Checkbox\n    name=\"clicked\"\n    onChange={e => alert(`Nå er jeg ${e.target.checked ? 'på' : 'av'}!`)}\n>\n    Trykk for å lære litt om meg\n</Checkbox>;\n";
const sourceImports$1u = "import { Checkbox } from '@sb1/ffe-form-react';";
const dependencies$1u = ["@sb1/ffe-form-react"];
const sourceFileName$1u = "form/Checkbox-onChange.jsx";

var form_Checkbox_onChange = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1u,
  code: code$1u,
  sourceCode: sourceCode$1u,
  sourceImports: sourceImports$1u,
  dependencies: dependencies$1u,
  sourceFileName: sourceFileName$1u
});

const scope$1t = {useState: react.useState,RadioButtonInputGroup: ffeFormReact.RadioButtonInputGroup,RadioBlock: ffeFormReact.RadioBlock,RadioSwitch: ffeFormReact.RadioSwitch,RadioButton: ffeFormReact.RadioButton,Tooltip: ffeFormReact.Tooltip,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1t = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};";
const sourceCode$1t = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n    const [selectedColor, setSelectedColor] = useState('red');\n    const [selectedSmell, setSelectedSmell] = useState();\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittfarge?\"\n                inline={true}\n                name=\"color\"\n                fieldMessage={showErrors ? 'Feil farge.' : null}\n                tooltip={\n                    <Tooltip>\n                        Din favorittfarge er viktig for oss. Vår er blå!\n                    </Tooltip>\n                }\n                selectedValue={selectedColor}\n                onChange={e => setSelectedColor(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"red\">\n                            Rød\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"blue\">\n                            Blå\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"yellow\">\n                            Gul\n                        </RadioButton>\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Hva er din favorittlukt?\"\n                inline={true}\n                name=\"smell\"\n                fieldMessage={showErrors ? 'Feil lukt.' : null}\n                selectedValue={selectedSmell}\n                onChange={e => setSelectedSmell(e.target.value)}\n            >\n                {inputProps => (\n                    <>\n                        <RadioButton {...inputProps} value=\"grass\">\n                            Gress\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"asphalt\">\n                            Asfalt\n                        </RadioButton>\n                        <RadioButton {...inputProps} value=\"pollen\">\n                            Pollen\n                        </RadioButton>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                description=\"Du kan ikke velge begge\"\n                label=\"Velg ja eller nei\"\n                name=\"switch\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <RadioSwitch\n                        leftLabel=\"Ja\"\n                        leftValue={true}\n                        rightLabel=\"Nei\"\n                        rightValue={false}\n                        {...inputProps}\n                    />\n                )}\n            </RadioButtonInputGroup>\n\n            <RadioButtonInputGroup\n                label=\"Velg ja eller nei\"\n                name=\"block1\"\n                selectedValue=\"yes\"\n                fieldMessage={showErrors ? 'Feil valg' : null}\n            >\n                {inputProps => (\n                    <>\n                        <RadioBlock {...inputProps} label=\"Ja\" value=\"yes\" />\n                        <RadioBlock\n                            {...inputProps}\n                            label=\"Nei\"\n                            showChildren={true}\n                            value=\"no\"\n                        >\n                            Vil ikke!\n                        </RadioBlock>\n                    </>\n                )}\n            </RadioButtonInputGroup>\n        </>\n    );\n};\n";
const sourceImports$1t = "import { useState } from 'react';\nimport {\n    RadioButtonInputGroup,\n    RadioBlock,\n    RadioSwitch,\n    RadioButton,\n    Tooltip,\n} from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1t = ["react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1t = "form/RadioButtonInputGroup.jsx";

var form_RadioButtonInputGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1t,
  code: code$1t,
  sourceCode: sourceCode$1t,
  sourceImports: sourceImports$1t,
  dependencies: dependencies$1t,
  sourceFileName: sourceFileName$1t
});

const scope$1s = {PhoneNumber: ffeFormReact.PhoneNumber};
const code$1s = "<PhoneNumber number=\"123123123\" />;";
const sourceCode$1s = "import { PhoneNumber } from '@sb1/ffe-form-react';\n\n<PhoneNumber number=\"123123123\" />;\n";
const sourceImports$1s = "import { PhoneNumber } from '@sb1/ffe-form-react';";
const dependencies$1s = ["@sb1/ffe-form-react"];
const sourceFileName$1s = "form/PhoneNumber.jsx";

var form_PhoneNumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1s,
  code: code$1s,
  sourceCode: sourceCode$1s,
  sourceImports: sourceImports$1s,
  dependencies: dependencies$1s,
  sourceFileName: sourceFileName$1s
});

const scope$1r = {Tooltip: ffeFormReact.Tooltip};
const code$1r = "<Tooltip>Dette er lurt å tenke på</Tooltip>;";
const sourceCode$1r = "import { Tooltip } from '@sb1/ffe-form-react';\n\n<Tooltip>Dette er lurt å tenke på</Tooltip>;\n";
const sourceImports$1r = "import { Tooltip } from '@sb1/ffe-form-react';";
const dependencies$1r = ["@sb1/ffe-form-react"];
const sourceFileName$1r = "form/Tooltip.jsx";

var form_Tooltip = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1r,
  code: code$1r,
  sourceCode: sourceCode$1r,
  sourceImports: sourceImports$1r,
  dependencies: dependencies$1r,
  sourceFileName: sourceFileName$1r
});

const scope$1q = {useState: react.useState,Datepicker: Datepicker__default["default"],Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup,Input: ffeFormReact.Input,TextArea: ffeFormReact.TextArea,Checkbox: ffeFormReact.Checkbox,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$1q = "() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                extraMargin={false}\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                fieldMessage={showErrors ? 'Ooops' : null}\n            >\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};";
const sourceCode$1q = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [showErrors, setShowErrors] = useState(false);\n\n    return (\n        <>\n            <div className=\"ffe-button-group\">\n                <SecondaryButton onClick={() => setShowErrors(!showErrors)}>\n                    Skru feilmeldinger av/på\n                </SecondaryButton>\n            </div>\n            <InputGroup\n                extraMargin={false}\n                label=\"Telefonnummer\"\n                tooltip=\"Vi bruker telefonnummer for å sende deg kvittering på SMS\"\n                fieldMessage={showErrors ? 'Ugyldig telefonnummer' : null}\n            >\n                {inputProps => (\n                    <>\n                        <Input\n                            type=\"tel\"\n                            name=\"mobile\"\n                            onChange={e =>\n                                console.log('onChange', e.target.value)\n                            }\n                            onBlur={e => console.log('onBlur', e.target.value)}\n                            {...inputProps}\n                        />\n                        <p>Ekstra innhold</p>\n                    </>\n                )}\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"E-postadresse\"\n                fieldMessage={showErrors ? 'Ugyldig e-postadresse' : null}\n            >\n                <Input />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Måned\"\n                fieldMessage={showErrors ? 'Du må velge måned' : null}\n            >\n                <Dropdown defaultValue=\"placeholder\">\n                    <option value=\"placeholder\" disabled>\n                        Velg måned\n                    </option>\n                    <option value=\"jan\">Januar</option>\n                    <option value=\"feb\">Februar</option>\n                    <option value=\"mar\">Mars</option>\n                </Dropdown>\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Fritekst\"\n                fieldMessage={showErrors ? 'Du må skrive noe lurt' : null}\n            >\n                <TextArea rows={4} />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                label=\"Dato\"\n                fieldMessage={showErrors ? 'Feil dato' : null}\n            >\n                <Datepicker\n                    language=\"nb\"\n                    maxDate=\"31.12.2016\"\n                    minDate=\"01.01.2016\"\n                    onChange={f => f}\n                    value={'01.01.2016'}\n                />\n            </InputGroup>\n\n            <InputGroup\n                extraMargin={false}\n                fieldMessage={showErrors ? 'Ooops' : null}\n            >\n                <Checkbox name=\"check\">Kryssboks</Checkbox>\n            </InputGroup>\n        </>\n    );\n};\n";
const sourceImports$1q = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup, Input, TextArea, Checkbox } from '@sb1/ffe-form-react';\nimport { SecondaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$1q = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-dropdown-react","@sb1/ffe-form-react","@sb1/ffe-buttons-react"];
const sourceFileName$1q = "form/InputGroup-extraMarginFalse.jsx";

var form_InputGroup_extraMarginFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1q,
  code: code$1q,
  sourceCode: sourceCode$1q,
  sourceImports: sourceImports$1q,
  dependencies: dependencies$1q,
  sourceFileName: sourceFileName$1q
});

const scope$1p = {formatPercentage: ffeFormatters.formatPercentage};
const code$1p = "<>\n    <div>{formatPercentage(10.00001)}</div>\n    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>\n    <div>{formatPercentage(1, { minDecimals: 2 })}</div>\n</>;";
const sourceCode$1p = "import { formatPercentage } from '@sb1/ffe-formatters';\n\n<>\n    <div>{formatPercentage(10.00001)}</div>\n    <div>{formatPercentage(12.34567, { maxDecimals: 4 })}</div>\n    <div>{formatPercentage(1, { minDecimals: 2 })}</div>\n</>;\n";
const sourceImports$1p = "import { formatPercentage } from '@sb1/ffe-formatters';";
const dependencies$1p = ["@sb1/ffe-formatters"];
const sourceFileName$1p = "formatting/Percentage.jsx";

var formatting_Percentage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1p,
  code: code$1p,
  sourceCode: sourceCode$1p,
  sourceImports: sourceImports$1p,
  dependencies: dependencies$1p,
  sourceFileName: sourceFileName$1p
});

const scope$1o = {formatFodselsnummer: ffeFormatters.formatFodselsnummer};
const code$1o = "<span>{formatFodselsnummer('01010112345')}</span>;";
const sourceCode$1o = "import { formatFodselsnummer } from '@sb1/ffe-formatters';\n\n<span>{formatFodselsnummer('01010112345')}</span>;\n";
const sourceImports$1o = "import { formatFodselsnummer } from '@sb1/ffe-formatters';";
const dependencies$1o = ["@sb1/ffe-formatters"];
const sourceFileName$1o = "formatting/Birthnumber.jsx";

var formatting_Birthnumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1o,
  code: code$1o,
  sourceCode: sourceCode$1o,
  sourceImports: sourceImports$1o,
  dependencies: dependencies$1o,
  sourceFileName: sourceFileName$1o
});

const scope$1n = {formatDate: ffeFormatters.formatDate};
const code$1n = "<>\n    <div>{formatDate(new Date('2000', 0, 1))}</div>\n    <div>{formatDate(946681200000)}</div>\n</>;";
const sourceCode$1n = "import { formatDate } from '@sb1/ffe-formatters';\n\n<>\n    <div>{formatDate(new Date('2000', 0, 1))}</div>\n    <div>{formatDate(946681200000)}</div>\n</>;\n";
const sourceImports$1n = "import { formatDate } from '@sb1/ffe-formatters';";
const dependencies$1n = ["@sb1/ffe-formatters"];
const sourceFileName$1n = "formatting/Date.jsx";

var formatting_Date = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1n,
  code: code$1n,
  sourceCode: sourceCode$1n,
  sourceImports: sourceImports$1n,
  dependencies: dependencies$1n,
  sourceFileName: sourceFileName$1n
});

const scope$1m = {formatAccountNumber: ffeFormatters.formatAccountNumber};
const code$1m = "<span>{formatAccountNumber('90010012345')}</span>;";
const sourceCode$1m = "import { formatAccountNumber } from '@sb1/ffe-formatters';\n\n<span>{formatAccountNumber('90010012345')}</span>;\n";
const sourceImports$1m = "import { formatAccountNumber } from '@sb1/ffe-formatters';";
const dependencies$1m = ["@sb1/ffe-formatters"];
const sourceFileName$1m = "formatting/Accountnumber.jsx";

var formatting_Accountnumber = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1m,
  code: code$1m,
  sourceCode: sourceCode$1m,
  sourceImports: sourceImports$1m,
  dependencies: dependencies$1m,
  sourceFileName: sourceFileName$1m
});

const scope$1l = {formatNumber: ffeFormatters.formatNumber};
const code$1l = "<>\n    <div>{formatNumber(1000000)}</div>\n    <div>{formatNumber(1234.567)}</div>\n    <div>{formatNumber(1234.567, { decimals: 2 })}</div>\n    <div>\n        {formatNumber(1234.567, {\n            decimals: 2,\n            thousandSeparator: ',',\n            decimalMark: '.',\n        })}\n    </div>\n</>;";
const sourceCode$1l = "import { formatNumber } from '@sb1/ffe-formatters';\n\n<>\n    <div>{formatNumber(1000000)}</div>\n    <div>{formatNumber(1234.567)}</div>\n    <div>{formatNumber(1234.567, { decimals: 2 })}</div>\n    <div>\n        {formatNumber(1234.567, {\n            decimals: 2,\n            thousandSeparator: ',',\n            decimalMark: '.',\n        })}\n    </div>\n</>;\n";
const sourceImports$1l = "import { formatNumber } from '@sb1/ffe-formatters';";
const dependencies$1l = ["@sb1/ffe-formatters"];
const sourceFileName$1l = "formatting/Numbers.jsx";

var formatting_Numbers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1l,
  code: code$1l,
  sourceCode: sourceCode$1l,
  sourceImports: sourceImports$1l,
  dependencies: dependencies$1l,
  sourceFileName: sourceFileName$1l
});

const scope$1k = {formatCurrency: ffeFormatters.formatCurrency};
const code$1k = "<>\n    <div>{formatCurrency(100)}</div>\n    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>\n</>;";
const sourceCode$1k = "import { formatCurrency } from '@sb1/ffe-formatters';\n\n<>\n    <div>{formatCurrency(100)}</div>\n    <div>{formatCurrency(1000, { prefix: '', postfix: ' kroner' })}</div>\n</>;\n";
const sourceImports$1k = "import { formatCurrency } from '@sb1/ffe-formatters';";
const dependencies$1k = ["@sb1/ffe-formatters"];
const sourceFileName$1k = "formatting/Currency.jsx";

var formatting_Currency = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1k,
  code: code$1k,
  sourceCode: sourceCode$1k,
  sourceImports: sourceImports$1k,
  dependencies: dependencies$1k,
  sourceFileName: sourceFileName$1k
});

const scope$1j = {formatDistance: ffeFormatters.formatDistance};
const code$1j = "<>\n    <div>{formatDistance(160520)}</div>\n    <div>{formatDistance(12345, { unit: 'mi' })}</div>\n</>;";
const sourceCode$1j = "import { formatDistance } from '@sb1/ffe-formatters';\n\n<>\n    <div>{formatDistance(160520)}</div>\n    <div>{formatDistance(12345, { unit: 'mi' })}</div>\n</>;\n";
const sourceImports$1j = "import { formatDistance } from '@sb1/ffe-formatters';";
const dependencies$1j = ["@sb1/ffe-formatters"];
const sourceFileName$1j = "formatting/Distance.jsx";

var formatting_Distance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1j,
  code: code$1j,
  sourceCode: sourceCode$1j,
  sourceImports: sourceImports$1j,
  dependencies: dependencies$1j,
  sourceFileName: sourceFileName$1j
});

const scope$1i = {useState: react.useState,TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup,HusIkon: ffeIconsReact.HusIkon,BilIkon: ffeIconsReact.BilIkon,IconCard: ffeCardsReact.IconCard};
const code$1i = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabButtonGroup>\n                <TabButton\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </TabButton>\n\n                <TabButton\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </TabButton>\n            </TabButtonGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};";
const sourceCode$1i = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabButtonGroup>\n                <TabButton\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </TabButton>\n\n                <TabButton\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </TabButton>\n            </TabButtonGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};\n";
const sourceImports$1i = "import { useState } from 'react';\nimport { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$1i = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$1i = "tabs/TabButtonGroup-advanced.jsx";

var tabs_TabButtonGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1i,
  code: code$1i,
  sourceCode: sourceCode$1i,
  sourceImports: sourceImports$1i,
  dependencies: dependencies$1i,
  sourceFileName: sourceFileName$1i
});

const scope$1h = {TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup};
const code$1h = "<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>;";
const sourceCode$1h = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup>\n    <TabButton>Dette er en tab</TabButton>\n    <TabButton selected={true}>Dette er en valgt tab</TabButton>\n    <TabButton>Dette er en annen tab</TabButton>\n</TabButtonGroup>;\n";
const sourceImports$1h = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1h = ["@sb1/ffe-tabs-react"];
const sourceFileName$1h = "tabs/TabButtonGroup.jsx";

var tabs_TabButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1h,
  code: code$1h,
  sourceCode: sourceCode$1h,
  sourceImports: sourceImports$1h,
  dependencies: dependencies$1h,
  sourceFileName: sourceFileName$1h
});

const scope$1g = {useState: react.useState,Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup,HusIkon: ffeIconsReact.HusIkon,BilIkon: ffeIconsReact.BilIkon,IconCard: ffeCardsReact.IconCard};
const code$1g = "() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabGroup>\n                <Tab\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </Tab>\n\n                <Tab\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </Tab>\n            </TabGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};";
const sourceCode$1g = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';\n\n() => {\n    const displayNone = {\n        display: 'none',\n    };\n\n    const loan = { house: 'house', car: 'car' };\n    const [activeTabId, setActiveTabId] = useState(loan.house);\n\n    return (\n        <>\n            <TabGroup>\n                <Tab\n                    selected={activeTabId === loan.house}\n                    onClick={() => setActiveTabId(loan.house)}\n                    aria-controls={loan.house}\n                >\n                    Huslån\n                </Tab>\n\n                <Tab\n                    selected={activeTabId === loan.car}\n                    onClick={() => setActiveTabId(loan.car)}\n                    aria-controls={loan.car}\n                >\n                    Billån\n                </Tab>\n            </TabGroup>\n\n            <IconCard\n                icon={<HusIkon />}\n                id={loan.house}\n                style={activeTabId === loan.house ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Huslån</Title>\n                        <Subtext>Ta opp huslån</Subtext>\n                    </>\n                )}\n            </IconCard>\n\n            <IconCard\n                icon={<BilIkon />}\n                id={loan.car}\n                style={activeTabId === loan.car ? null : displayNone}\n            >\n                {({ Title, Subtext }) => (\n                    <>\n                        <Title>Billån</Title>\n                        <Subtext>Ta opp billån</Subtext>\n                    </>\n                )}\n            </IconCard>\n        </>\n    );\n};\n";
const sourceImports$1g = "import { useState } from 'react';\nimport { Tab, TabGroup } from '@sb1/ffe-tabs-react';\nimport { HusIkon, BilIkon } from '@sb1/ffe-icons-react';\nimport { IconCard } from '@sb1/ffe-cards-react';";
const dependencies$1g = ["react","@sb1/ffe-tabs-react","@sb1/ffe-icons-react","@sb1/ffe-cards-react"];
const sourceFileName$1g = "tabs/TabGroup-advanced.jsx";

var tabs_TabGroup_advanced = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1g,
  code: code$1g,
  sourceCode: sourceCode$1g,
  sourceImports: sourceImports$1g,
  dependencies: dependencies$1g,
  sourceFileName: sourceFileName$1g
});

const scope$1f = {TabButton: ffeTabsReact.TabButton};
const code$1f = "<TabButton selected={true}>Dette er en valgt tab button</TabButton>;";
const sourceCode$1f = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton selected={true}>Dette er en valgt tab button</TabButton>;\n";
const sourceImports$1f = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1f = ["@sb1/ffe-tabs-react"];
const sourceFileName$1f = "tabs/TabButton-selected.jsx";

var tabs_TabButton_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1f,
  code: code$1f,
  sourceCode: sourceCode$1f,
  sourceImports: sourceImports$1f,
  dependencies: dependencies$1f,
  sourceFileName: sourceFileName$1f
});

const scope$1e = {Tab: ffeTabsReact.Tab};
const code$1e = "<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>;";
const sourceCode$1e = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en fane\n</Tab>;\n";
const sourceImports$1e = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$1e = ["@sb1/ffe-tabs-react"];
const sourceFileName$1e = "tabs/Tab-customProps.jsx";

var tabs_Tab_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1e,
  code: code$1e,
  sourceCode: sourceCode$1e,
  sourceImports: sourceImports$1e,
  dependencies: dependencies$1e,
  sourceFileName: sourceFileName$1e
});

const scope$1d = {TabButton: ffeTabsReact.TabButton};
const code$1d = "<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>;";
const sourceCode$1d = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton\n    onClick={() => {\n        alert('Hei');\n    }}\n    data-analytics-track=\"logMe\"\n>\n    Dette er en tab button\n</TabButton>;\n";
const sourceImports$1d = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1d = ["@sb1/ffe-tabs-react"];
const sourceFileName$1d = "tabs/TabButton-customProps.jsx";

var tabs_TabButton_customProps = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1d,
  code: code$1d,
  sourceCode: sourceCode$1d,
  sourceImports: sourceImports$1d,
  dependencies: dependencies$1d,
  sourceFileName: sourceFileName$1d
});

const scope$1c = {Tab: ffeTabsReact.Tab};
const code$1c = "<Tab selected={true}>Dette er en valgt fane</Tab>;";
const sourceCode$1c = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab selected={true}>Dette er en valgt fane</Tab>;\n";
const sourceImports$1c = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$1c = ["@sb1/ffe-tabs-react"];
const sourceFileName$1c = "tabs/Tab-selected.jsx";

var tabs_Tab_selected = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1c,
  code: code$1c,
  sourceCode: sourceCode$1c,
  sourceImports: sourceImports$1c,
  dependencies: dependencies$1c,
  sourceFileName: sourceFileName$1c
});

const scope$1b = {TabButton: ffeTabsReact.TabButton,TabButtonGroup: ffeTabsReact.TabButtonGroup};
const code$1b = "<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>;";
const sourceCode$1b = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';\n\n<TabButtonGroup thin={true}>\n    <TabButton>Dette er en tab button</TabButton>\n    <TabButton>Dette er en annen tab button</TabButton>\n</TabButtonGroup>;\n";
const sourceImports$1b = "import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';";
const dependencies$1b = ["@sb1/ffe-tabs-react"];
const sourceFileName$1b = "tabs/TabButtonGroup-thin.jsx";

var tabs_TabButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1b,
  code: code$1b,
  sourceCode: sourceCode$1b,
  sourceImports: sourceImports$1b,
  dependencies: dependencies$1b,
  sourceFileName: sourceFileName$1b
});

const scope$1a = {TabButton: ffeTabsReact.TabButton};
const code$1a = "<TabButton>Dette er en tab button</TabButton>;";
const sourceCode$1a = "import { TabButton } from '@sb1/ffe-tabs-react';\n\n<TabButton>Dette er en tab button</TabButton>;\n";
const sourceImports$1a = "import { TabButton } from '@sb1/ffe-tabs-react';";
const dependencies$1a = ["@sb1/ffe-tabs-react"];
const sourceFileName$1a = "tabs/TabButton.jsx";

var tabs_TabButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1a,
  code: code$1a,
  sourceCode: sourceCode$1a,
  sourceImports: sourceImports$1a,
  dependencies: dependencies$1a,
  sourceFileName: sourceFileName$1a
});

const scope$19 = {Tab: ffeTabsReact.Tab,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$19 = "<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$19 = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow>\n        <GridCol sm={12}>\n            <div>\n                <Tab condensed={true}>Dette er en kompakt fane</Tab>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$19 = "import { Tab } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$19 = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$19 = "tabs/Tab-condensed.jsx";

var tabs_Tab_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$19,
  code: code$19,
  sourceCode: sourceCode$19,
  sourceImports: sourceImports$19,
  dependencies: dependencies$19,
  sourceFileName: sourceFileName$19
});

const scope$18 = {Tab: ffeTabsReact.Tab};
const code$18 = "<Tab>Dette er en fane</Tab>;";
const sourceCode$18 = "import { Tab } from '@sb1/ffe-tabs-react';\n\n<Tab>Dette er en fane</Tab>;\n";
const sourceImports$18 = "import { Tab } from '@sb1/ffe-tabs-react';";
const dependencies$18 = ["@sb1/ffe-tabs-react"];
const sourceFileName$18 = "tabs/Tab.jsx";

var tabs_Tab = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$18,
  code: code$18,
  sourceCode: sourceCode$18,
  sourceImports: sourceImports$18,
  dependencies: dependencies$18,
  sourceFileName: sourceFileName$18
});

const scope$17 = {Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup};
const code$17 = "<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;";
const sourceCode$17 = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup thin={true}>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;\n";
const sourceImports$17 = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$17 = ["@sb1/ffe-tabs-react"];
const sourceFileName$17 = "tabs/TabGroup-thin.jsx";

var tabs_TabGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$17,
  code: code$17,
  sourceCode: sourceCode$17,
  sourceImports: sourceImports$17,
  dependencies: dependencies$17,
  sourceFileName: sourceFileName$17
});

const scope$16 = {TabButton: ffeTabsReact.TabButton,Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$16 = "<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;";
const sourceCode$16 = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n<Grid>\n    <GridRow background=\"sand\" topPadding={true}>\n        <GridCol sm={12}>\n            <div>\n                <TabButton ghost={true} condensed={true}>\n                    Dette er en transparent og kompakt tab button\n                </TabButton>\n            </div>\n        </GridCol>\n    </GridRow>\n</Grid>;\n";
const sourceImports$16 = "import { TabButton } from '@sb1/ffe-tabs-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$16 = ["@sb1/ffe-tabs-react","@sb1/ffe-grid-react"];
const sourceFileName$16 = "tabs/TabButton-condensed.jsx";

var tabs_TabButton_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$16,
  code: code$16,
  sourceCode: sourceCode$16,
  sourceImports: sourceImports$16,
  dependencies: dependencies$16,
  sourceFileName: sourceFileName$16
});

const scope$15 = {Tab: ffeTabsReact.Tab,TabGroup: ffeTabsReact.TabGroup};
const code$15 = "<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;";
const sourceCode$15 = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';\n\n<TabGroup>\n    <Tab>Dette er en tab</Tab>\n    <Tab selected={true}>Dette er en valgt tab</Tab>\n    <Tab>Dette er en annen tab</Tab>\n</TabGroup>;\n";
const sourceImports$15 = "import { Tab, TabGroup } from '@sb1/ffe-tabs-react';";
const dependencies$15 = ["@sb1/ffe-tabs-react"];
const sourceFileName$15 = "tabs/TabGroup.jsx";

var tabs_TabGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$15,
  code: code$15,
  sourceCode: sourceCode$15,
  sourceImports: sourceImports$15,
  dependencies: dependencies$15,
  sourceFileName: sourceFileName$15
});

const scope$14 = {DetailList: ffeDetailsListReact.DetailList,Detail: ffeDetailsListReact.Detail,DetailContent: ffeDetailsListReact.DetailContent,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$14 = "<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>;";
const sourceCode$14 = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';\n\n<DetailList>\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n    </Detail>\n\n    <Detail label=\"Egenandel\">\n        <DetailContent>4 000,-</DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n    </Detail>\n\n    <Detail label=\"Kjørelengde per år\">\n        <DetailContent>30 000 km</DetailContent>\n        <DetailContent className=\"ffe-small-text\">\n            Kilometerstanden kan ikke overstige 80 100 km før 17.02.2017\n        </DetailContent>\n        <DetailContent cta={true}>\n            <TertiaryButton onClick={f => f}>ENDRE</TertiaryButton>\n        </DetailContent>\n    </Detail>\n</DetailList>;\n";
const sourceImports$14 = "import { DetailList, Detail, DetailContent } from '@sb1/ffe-details-list-react';\nimport { TertiaryButton } from '@sb1/ffe-buttons-react';";
const dependencies$14 = ["@sb1/ffe-details-list-react","@sb1/ffe-buttons-react"];
const sourceFileName$14 = "details-list/DetailList.jsx";

var details_list_DetailList = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$14,
  code: code$14,
  sourceCode: sourceCode$14,
  sourceImports: sourceImports$14,
  dependencies: dependencies$14,
  sourceFileName: sourceFileName$14
});

const scope$13 = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$13 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$13 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$13 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$13 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$13 = "datepicker/Datepicker.jsx";

var datepicker_Datepicker = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$13,
  code: code$13,
  sourceCode: sourceCode$13,
  sourceImports: sourceImports$13,
  dependencies: dependencies$13,
  sourceFileName: sourceFileName$13
});

const scope$12 = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$12 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$12 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            aria-invalid=\"true\"\n            inputProps={{ id: 'datepicker-example-aria-invalid' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$12 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$12 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$12 = "datepicker/Datepicker-invalid.jsx";

var datepicker_Datepicker_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$12,
  code: code$12,
  sourceCode: sourceCode$12,
  sourceImports: sourceImports$12,
  dependencies: dependencies$12,
  sourceFileName: sourceFileName$12
});

const scope$11 = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$11 = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$11 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            calendarAbove={true}\n            inputProps={{ id: 'datepicker-example-calendar-above' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$11 = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$11 = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$11 = "datepicker/Datepicker-calendarAbove.jsx";

var datepicker_Datepicker_calendarAbove = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$11,
  code: code$11,
  sourceCode: sourceCode$11,
  sourceImports: sourceImports$11,
  dependencies: dependencies$11,
  sourceFileName: sourceFileName$11
});

const scope$10 = {Calendar: Datepicker.Calendar};
const code$10 = "<Calendar language=\"en\" onDatePicked={f => console.log(f)} />;";
const sourceCode$10 = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"en\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$10 = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$10 = ["@sb1/ffe-datepicker-react"];
const sourceFileName$10 = "datepicker/Calendar-en.jsx";

var datepicker_Calendar_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$10,
  code: code$10,
  sourceCode: sourceCode$10,
  sourceImports: sourceImports$10,
  dependencies: dependencies$10,
  sourceFileName: sourceFileName$10
});

const scope$$ = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$$ = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$$ = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"nn\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$$ = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$$ = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$$ = "datepicker/Datepicker-nn.jsx";

var datepicker_Datepicker_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$$,
  code: code$$,
  sourceCode: sourceCode$$,
  sourceImports: sourceImports$$,
  dependencies: dependencies$$,
  sourceFileName: sourceFileName$$
});

const scope$_ = {Calendar: Datepicker.Calendar};
const code$_ = "<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />;";
const sourceCode$_ = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nb\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$_ = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$_ = ["@sb1/ffe-datepicker-react"];
const sourceFileName$_ = "datepicker/Calendar.jsx";

var datepicker_Calendar = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$_,
  code: code$_,
  sourceCode: sourceCode$_,
  sourceImports: sourceImports$_,
  dependencies: dependencies$_,
  sourceFileName: sourceFileName$_
});

const scope$Z = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$Z = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$Z = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            inputProps={{ id: 'datepicker-example' }}\n            label=\"Velg dato\"\n            language=\"en\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$Z = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$Z = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$Z = "datepicker/Datepicker-en.jsx";

var datepicker_Datepicker_en = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Z,
  code: code$Z,
  sourceCode: sourceCode$Z,
  sourceImports: sourceImports$Z,
  dependencies: dependencies$Z,
  sourceFileName: sourceFileName$Z
});

const scope$Y = {Calendar: Datepicker.Calendar};
const code$Y = "<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />;";
const sourceCode$Y = "import { Calendar } from '@sb1/ffe-datepicker-react';\n\n<Calendar language=\"nn\" onDatePicked={f => console.log(f)} />;\n";
const sourceImports$Y = "import { Calendar } from '@sb1/ffe-datepicker-react';";
const dependencies$Y = ["@sb1/ffe-datepicker-react"];
const sourceFileName$Y = "datepicker/Calendar-nn.jsx";

var datepicker_Calendar_nn = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Y,
  code: code$Y,
  sourceCode: sourceCode$Y,
  sourceImports: sourceImports$Y,
  dependencies: dependencies$Y,
  sourceFileName: sourceFileName$Y
});

const scope$X = {useState: react.useState,Datepicker: Datepicker__default["default"]};
const code$X = "() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};";
const sourceCode$X = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\n\n() => {\n    const [date, setDate] = useState('01.01.2016');\n\n    return (\n        <Datepicker\n            fullWidth={true}\n            inputProps={{ id: 'datepicker-example-full-width' }}\n            label=\"Velg dato\"\n            language=\"nb\"\n            maxDate=\"31.12.2016\"\n            minDate=\"01.01.2016\"\n            onChange={setDate}\n            value={date}\n        />\n    );\n};\n";
const sourceImports$X = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';";
const dependencies$X = ["react","@sb1/ffe-datepicker-react"];
const sourceFileName$X = "datepicker/Datepicker-fullWidth.jsx";

var datepicker_Datepicker_fullWidth = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$X,
  code: code$X,
  sourceCode: sourceCode$X,
  sourceImports: sourceImports$X,
  dependencies: dependencies$X,
  sourceFileName: sourceFileName$X
});

const scope$W = {useState: react.useState,Datepicker: Datepicker__default["default"],Grid: ffeGridReact.Grid,GridRow: ffeGridReact.GridRow,GridCol: ffeGridReact.GridCol};
const code$W = "() => {\n    const [date1, setDate1] = useState('01.01.2016');\n    const [date2, setDate2] = useState('02.01.2016');\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-1' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate1}\n                        value={date1}\n                    />\n                </GridCol>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-2' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate2}\n                        value={date2}\n                    />\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};";
const sourceCode$W = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';\n\n() => {\n    const [date1, setDate1] = useState('01.01.2016');\n    const [date2, setDate2] = useState('02.01.2016');\n\n    return (\n        <Grid>\n            <GridRow>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-1' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate1}\n                        value={date1}\n                    />\n                </GridCol>\n                <GridCol sm=\"5\">\n                    <Datepicker\n                        inputProps={{ id: 'datepicker-2' }}\n                        label=\"Velg dato\"\n                        language=\"en\"\n                        maxDate=\"31.12.2016\"\n                        minDate=\"01.01.2016\"\n                        onChange={setDate2}\n                        value={date2}\n                    />\n                </GridCol>\n            </GridRow>\n        </Grid>\n    );\n};\n";
const sourceImports$W = "import { useState } from 'react';\nimport Datepicker from '@sb1/ffe-datepicker-react';\nimport { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';";
const dependencies$W = ["react","@sb1/ffe-datepicker-react","@sb1/ffe-grid-react"];
const sourceFileName$W = "datepicker/Datepicker-two.jsx";

var datepicker_Datepicker_two = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$W,
  code: code$W,
  sourceCode: sourceCode$W,
  sourceImports: sourceImports$W,
  dependencies: dependencies$W,
  sourceFileName: sourceFileName$W
});

const scope$V = {FileUpload: FileUpload__default["default"]};
const code$V = "<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>;";
const sourceCode$V = "import FileUpload from '@sb1/ffe-file-upload-react';\n\n<FileUpload\n    id=\"ffe-file-upload-example\"\n    label={'Velg filer'}\n    title={'Dokumentasjon'}\n    infoText={\n        'Det kan være vanskelig å estimere fremtiden, derfor kan du laste opp eventuelle filer som viser til fremtidig budsjett eller inntjening.'\n    }\n    infoSubText={\n        'Husk å ikke laste opp personsensitive opplysninger eller dokumenter som bedriften ikke vil dele.'\n    }\n    uploadTitle={'Dra filene hit'}\n    uploadMicroText={'Eller'}\n    uploadSubText={'PDF-filer, maks 50 MB'}\n    files={{}}\n    cancelText={'Avbryt'}\n    deleteText={'Slett'}\n    onFileDeleted={() => {}}\n    onFilesSelected={() => {}}\n    onFilesDropped={() => {}}\n    multiple\n/>;\n";
const sourceImports$V = "import FileUpload from '@sb1/ffe-file-upload-react';";
const dependencies$V = ["@sb1/ffe-file-upload-react"];
const sourceFileName$V = "file-upload/FileUpload.jsx";

var file_upload_FileUpload = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$V,
  code: code$V,
  sourceCode: sourceCode$V,
  sourceImports: sourceImports$V,
  dependencies: dependencies$V,
  sourceFileName: sourceFileName$V
});

const scope$U = {useState: react.useState,Collapse: Collapse__default["default"],ExpandButton: ffeButtonsReact.ExpandButton};
const code$U = "() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n            <p>This number will change on transition complete: {rand}</p>\n        </>\n    );\n};";
const sourceCode$U = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n    const [rand, setRand] = useState(Math.random());\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen} onRest={() => setRand(Math.random())}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n            <p>This number will change on transition complete: {rand}</p>\n        </>\n    );\n};\n";
const sourceImports$U = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$U = ["react","@sb1/ffe-collapse-react","@sb1/ffe-buttons-react"];
const sourceFileName$U = "collapse/Collapse-onRest.jsx";

var collapse_Collapse_onRest = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$U,
  code: code$U,
  sourceCode: sourceCode$U,
  sourceImports: sourceImports$U,
  dependencies: dependencies$U,
  sourceFileName: sourceFileName$U
});

const scope$T = {useState: react.useState,Collapse: Collapse__default["default"],ExpandButton: ffeButtonsReact.ExpandButton};
const code$T = "() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n        </>\n    );\n};";
const sourceCode$T = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isOpen, setOpen] = useState(false);\n\n    return (\n        <>\n            <ExpandButton isExpanded={isOpen} onClick={() => setOpen(!isOpen)}>\n                {isOpen ? 'Collapse' : 'Expand'}\n            </ExpandButton>\n            <Collapse isOpen={isOpen}>\n                <div>\n                    <p>Hello world</p>\n                    <p>Hello world</p>\n                </div>\n            </Collapse>\n        </>\n    );\n};\n";
const sourceImports$T = "import { useState } from 'react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$T = ["react","@sb1/ffe-collapse-react","@sb1/ffe-buttons-react"];
const sourceFileName$T = "collapse/Collapse.jsx";

var collapse_Collapse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$T,
  code: code$T,
  sourceCode: sourceCode$T,
  sourceImports: sourceImports$T,
  dependencies: dependencies$T,
  sourceFileName: sourceFileName$T
});

const scope$S = {Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$S = "<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>;";
const sourceCode$S = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={3}>\n    <AccordionItem defaultOpen={true} heading=\"Åpen!\">\n        Her er info du kan se med EN gang!\n    </AccordionItem>\n    <AccordionItem heading=\"Lukket\">Skjult innhold</AccordionItem>\n    <AccordionItem heading=\"Denne er også lukket\">\n        Enda mer innhold\n    </AccordionItem>\n</Accordion>;\n";
const sourceImports$S = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$S = ["@sb1/ffe-accordion-react"];
const sourceFileName$S = "accordion/Accordion-open.jsx";

var accordion_Accordion_open = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$S,
  code: code$S,
  sourceCode: sourceCode$S,
  sourceImports: sourceImports$S,
  dependencies: dependencies$S,
  sourceFileName: sourceFileName$S
});

const scope$R = {Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$R = "<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>;";
const sourceCode$R = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n<Accordion headingLevel={2}>\n    <AccordionItem heading=\"Tittel\">Skjult innhold</AccordionItem>\n    <AccordionItem heading={<span>Enda en tittel</span>}>\n        Mer skjult innhold\n    </AccordionItem>\n    <AccordionItem heading=\"En siste tittel\">Enda mer innhold</AccordionItem>\n</Accordion>;\n";
const sourceImports$R = "import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$R = ["@sb1/ffe-accordion-react"];
const sourceFileName$R = "accordion/Accordion.jsx";

var accordion_Accordion = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$R,
  code: code$R,
  sourceCode: sourceCode$R,
  sourceImports: sourceImports$R,
  dependencies: dependencies$R,
  sourceFileName: sourceFileName$R
});

const scope$Q = {useState: react.useState,Accordion: ffeAccordionReact.Accordion,AccordionItem: ffeAccordionReact.AccordionItem};
const code$Q = "() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n};";
const sourceCode$Q = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';\n\n() => {\n    const [openElementId, setOpenElementId] = useState(0);\n\n    const createOnToggleOpenHandler = id => isOpen => {\n        if (isOpen) {\n            setOpenElementId(id);\n        }\n    };\n\n    return (\n        <Accordion headingLevel={3}>\n            <AccordionItem\n                isOpen={openElementId === 0}\n                onToggleOpen={createOnToggleOpenHandler(0)}\n                heading=\"Starter åpen\"\n            >\n                Element med ID=0\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 1}\n                onToggleOpen={createOnToggleOpenHandler(1)}\n                heading=\"Starter lukket\"\n            >\n                Element med ID=1\n            </AccordionItem>\n            <AccordionItem\n                isOpen={openElementId === 2}\n                onToggleOpen={createOnToggleOpenHandler(2)}\n                heading=\"Starter også lukket\"\n            >\n                Element med ID=2\n            </AccordionItem>\n        </Accordion>\n    );\n};\n";
const sourceImports$Q = "import { useState } from 'react';\nimport { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';";
const dependencies$Q = ["react","@sb1/ffe-accordion-react"];
const sourceFileName$Q = "accordion/Accordion-managed.jsx";

var accordion_Accordion_managed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$Q,
  code: code$Q,
  sourceCode: sourceCode$Q,
  sourceImports: sourceImports$Q,
  dependencies: dependencies$Q,
  sourceFileName: sourceFileName$Q
});

const scope$P = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$P = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-2attrs';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$P = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-2attrs';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$P = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$P = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$P = "dropdown/SearchableDropdown-2attributes.jsx";

var dropdown_SearchableDropdown_2attributes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$P,
  code: code$P,
  sourceCode: sourceCode$P,
  sourceImports: sourceImports$P,
  dependencies: dependencies$P,
  sourceFileName: sourceFileName$P
});

const scope$O = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$O = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-default';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$O = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-default';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$O = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$O = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$O = "dropdown/SearchableDropdown.jsx";

var dropdown_SearchableDropdown = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$O,
  code: code$O,
  sourceCode: sourceCode$O,
  sourceImports: sourceImports$O,
  dependencies: dependencies$O,
  sourceFileName: sourceFileName$O
});

const scope$N = {Dropdown: Dropdown__default["default"],Label: ffeFormReact.Label};
const code$N = "<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>;";
const sourceCode$N = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';\n\n<>\n    <Label htmlFor=\"dropdown-example\">Måned</Label>\n    <Dropdown id=\"dropdown-example\">\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</>;\n";
const sourceImports$N = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { Label } from '@sb1/ffe-form-react';";
const dependencies$N = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$N = "dropdown/Dropdown.jsx";

var dropdown_Dropdown = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$N,
  code: code$N,
  sourceCode: sourceCode$N,
  sourceImports: sourceImports$N,
  dependencies: dependencies$N,
  sourceFileName: sourceFileName$N
});

const scope$M = {Dropdown: Dropdown__default["default"],InputGroup: ffeFormReact.InputGroup};
const code$M = "<InputGroup label=\"Måned\" fieldMessage=\"Du må velge måned\">\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>\n            Velg måned\n        </option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>;";
const sourceCode$M = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';\n\n<InputGroup label=\"Måned\" fieldMessage=\"Du må velge måned\">\n    <Dropdown defaultValue=\"placeholder\">\n        <option value=\"placeholder\" disabled>\n            Velg måned\n        </option>\n        <option value=\"jan\">Januar</option>\n        <option value=\"feb\">Februar</option>\n        <option value=\"mar\">Mars</option>\n        <option value=\"apr\">April</option>\n        <option value=\"mai\">Mai</option>\n    </Dropdown>\n</InputGroup>;\n";
const sourceImports$M = "import Dropdown from '@sb1/ffe-dropdown-react';\nimport { InputGroup } from '@sb1/ffe-form-react';";
const dependencies$M = ["@sb1/ffe-dropdown-react","@sb1/ffe-form-react"];
const sourceFileName$M = "dropdown/Dropdown-invalid.jsx";

var dropdown_Dropdown_invalid = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$M,
  code: code$M,
  sourceCode: sourceCode$M,
  sourceImports: sourceImports$M,
  dependencies: dependencies$M,
  sourceFileName: sourceFileName$M
});

const scope$L = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$L = "() => {\n    const isLoading = true;\n    const id = 'searchabledropdow-isLoading';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownList={[]}\n                dropdownAttributes={['organizationName']}\n                isLoading={isLoading}\n                noMatch={\n                    isLoading\n                        ? { text: 'Laster bedrifter...' }\n                        : { text: 'Søket ga ingen treff' }\n                }\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$L = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const isLoading = true;\n    const id = 'searchabledropdow-isLoading';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownList={[]}\n                dropdownAttributes={['organizationName']}\n                isLoading={isLoading}\n                noMatch={\n                    isLoading\n                        ? { text: 'Laster bedrifter...' }\n                        : { text: 'Søket ga ingen treff' }\n                }\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$L = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$L = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$L = "dropdown/SearchableDropdown-isLoading.jsx";

var dropdown_SearchableDropdown_isLoading = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$L,
  code: code$L,
  sourceCode: sourceCode$L,
  sourceImports: sourceImports$L,
  dependencies: dependencies$L,
  sourceFileName: sourceFileName$L
});

const scope$K = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$K = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-extraresults';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{\n                    text: 'Søket ga ingen treff',\n                    dropdownList: companies.slice(1, 4),\n                }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$K = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-extraresults';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{\n                    text: 'Søket ga ingen treff',\n                    dropdownList: companies.slice(1, 4),\n                }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$K = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$K = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$K = "dropdown/SearchableDropdown-extraresults.jsx";

var dropdown_SearchableDropdown_extraresults = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$K,
  code: code$K,
  sourceCode: sourceCode$K,
  sourceImports: sourceImports$K,
  dependencies: dependencies$K,
  sourceFileName: sourceFileName$K
});

const scope$J = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$J = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-customMatchFunc';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const cleanString = value => `${value}`.replace(/\\s/g, '').toLowerCase();\n    const searchMatcher = (inputValue, searchAttributes) => item => {\n        const cleanedInputValue = cleanString(inputValue);\n        return searchAttributes\n            .map(searchAttribute => cleanString(item[searchAttribute]))\n            .some(cleanedItemAttribute =>\n                cleanedItemAttribute.includes(cleanedInputValue),\n            );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                searchMatcher={searchMatcher}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$J = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-customMatchFunc';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const cleanString = value => `${value}`.replace(/\\s/g, '').toLowerCase();\n    const searchMatcher = (inputValue, searchAttributes) => item => {\n        const cleanedInputValue = cleanString(inputValue);\n        return searchAttributes\n            .map(searchAttribute => cleanString(item[searchAttribute]))\n            .some(cleanedItemAttribute =>\n                cleanedItemAttribute.includes(cleanedInputValue),\n            );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                searchMatcher={searchMatcher}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$J = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$J = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$J = "dropdown/SearchableDropdown-customMatchFunction.jsx";

var dropdown_SearchableDropdown_customMatchFunction = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$J,
  code: code$J,
  sourceCode: sourceCode$J,
  sourceImports: sourceImports$J,
  dependencies: dependencies$J,
  sourceFileName: sourceFileName$J
});

const scope$I = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$I = "() => {\n    const listWithThirtyThousandElements = new Array(30000)\n        .fill(null)\n        .map((_, i) => ({ organizationName: `Navn ${i}` }));\n\n    const id = 'searchabledropdow-highCapacity';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={listWithThirtyThousandElements}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n                highCapacity={true}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$I = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const listWithThirtyThousandElements = new Array(30000)\n        .fill(null)\n        .map((_, i) => ({ organizationName: `Navn ${i}` }));\n\n    const id = 'searchabledropdow-highCapacity';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName']}\n                dropdownList={listWithThirtyThousandElements}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                searchAttributes={['organizationName']}\n                locale=\"nb\"\n                highCapacity={true}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$I = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$I = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$I = "dropdown/SearchableDropdown-highCapacity.jsx";

var dropdown_SearchableDropdown_highCapacity = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$I,
  code: code$I,
  sourceCode: sourceCode$I,
  sourceImports: sourceImports$I,
  dependencies: dependencies$I,
  sourceFileName: sourceFileName$I
});

const scope$H = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState};
const code$H = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-selectedItem';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(companies[2]);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption({ item })}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                selectedItem={selectedOption}\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$H = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n        {\n            organizationName: 'Kaffekoppen',\n            organizationNumber: '812602222',\n            quantityUnprocessedMessages: 8,\n        },\n        {\n            organizationName: 'Sats',\n            organizationNumber: '809602772',\n            quantityUnprocessedMessages: 2,\n        },\n    ];\n\n    const id = 'searchabledropdow-selectedItem';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(companies[2]);\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                onChange={item => setSelectedOption({ item })}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n                selectedItem={selectedOption}\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$H = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';";
const dependencies$H = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react"];
const sourceFileName$H = "dropdown/SearchableDropdown-selectedItem.jsx";

var dropdown_SearchableDropdown_selectedItem = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$H,
  code: code$H,
  sourceCode: sourceCode$H,
  sourceImports: sourceImports$H,
  dependencies: dependencies$H,
  sourceFileName: sourceFileName$H
});

const scope$G = {InputGroup: ffeFormReact.InputGroup,SearchableDropdown: SearchableDropdown__default["default"],useState: react.useState,SmallText: ffeCoreReact.SmallText};
const code$G = "() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-customlistelembody';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n        return (\n            <div\n                style={{\n                    padding: '8px',\n                    background: isHighlighted ? '#ff9100' : 'white',\n                }}\n            >\n                <div>{item.organizationName}</div>\n                <div\n                    style={{ display: 'flex', justifyContent: 'space-between' }}\n                >\n                    <SmallText>{item.organizationNumber}</SmallText>\n                    <SmallText>\n                        {item.quantityUnprocessedMessages} ulest\n                    </SmallText>\n                </div>\n            </div>\n        );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                listElementBody={CustomListElementBody}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};";
const sourceCode$G = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\nimport { SmallText } from '@sb1/ffe-core-react';\n\n() => {\n    const companies = [\n        {\n            organizationName: 'Bedriften',\n            organizationNumber: '912602370',\n            quantityUnprocessedMessages: 5,\n        },\n        {\n            organizationName: 'Sønn & co',\n            organizationNumber: '812602372',\n            quantityUnprocessedMessages: 3,\n        },\n        {\n            organizationName: 'Beslag skytter',\n            organizationNumber: '812602552',\n            quantityUnprocessedMessages: 1,\n        },\n    ];\n    const id = 'searchabledropdow-customlistelembody';\n    const labelId = `${id}-label`;\n    const [selectedOption, setSelectedOption] = useState(null);\n    const CustomListElementBody = ({ item, isHighlighted }) => {\n        return (\n            <div\n                style={{\n                    padding: '8px',\n                    background: isHighlighted ? '#ff9100' : 'white',\n                }}\n            >\n                <div>{item.organizationName}</div>\n                <div\n                    style={{ display: 'flex', justifyContent: 'space-between' }}\n                >\n                    <SmallText>{item.organizationNumber}</SmallText>\n                    <SmallText>\n                        {item.quantityUnprocessedMessages} ulest\n                    </SmallText>\n                </div>\n            </div>\n        );\n    };\n    return (\n        <InputGroup label=\"Velg bedrift\" labelId={labelId}>\n            <SearchableDropdown\n                id={id}\n                labelId={labelId}\n                inputProps={{ placeholder: 'Velg' }}\n                dropdownAttributes={['organizationName', 'organizationNumber']}\n                dropdownList={companies}\n                noMatch={{ text: 'Søket ga ingen treff' }}\n                onChange={item => setSelectedOption(item)}\n                listElementBody={CustomListElementBody}\n                searchAttributes={['organizationName', 'organizationNumber']}\n                locale=\"nb\"\n            />\n        </InputGroup>\n    );\n};\n";
const sourceImports$G = "import { InputGroup } from '@sb1/ffe-form-react';\nimport SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';\nimport { useState } from 'react';\nimport { SmallText } from '@sb1/ffe-core-react';";
const dependencies$G = ["@sb1/ffe-form-react","@sb1/ffe-searchable-dropdown-react","react","@sb1/ffe-core-react"];
const sourceFileName$G = "dropdown/SearchableDropdown-customListElementBody.jsx";

var dropdown_SearchableDropdown_customListElementBody = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$G,
  code: code$G,
  sourceCode: sourceCode$G,
  sourceImports: sourceImports$G,
  dependencies: dependencies$G,
  sourceFileName: sourceFileName$G
});

const scope$F = {TextCard: ffeCardsReact.TextCard};
const code$F = "<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>;";
const sourceCode$F = "import { TextCard } from '@sb1/ffe-cards-react';\n\n<TextCard element=\"div\">\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext element=\"span\">Subtext er grå</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</TextCard>;\n";
const sourceImports$F = "import { TextCard } from '@sb1/ffe-cards-react';";
const dependencies$F = ["@sb1/ffe-cards-react"];
const sourceFileName$F = "cards/TextCard.jsx";

var cards_TextCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$F,
  code: code$F,
  sourceCode: sourceCode$F,
  sourceImports: sourceImports$F,
  dependencies: dependencies$F,
  sourceFileName: sourceFileName$F
});

const scope$E = {IconCard: ffeCardsReact.IconCard,SparegrisIkon: ffeIconsReact.SparegrisIkon};
const code$E = "<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>;";
const sourceCode$E = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<SparegrisIkon />} condensed={true}>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Sparekonto voksen 25</Title>\n            <Subtext>7 004,00</Subtext>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$E = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { SparegrisIkon } from '@sb1/ffe-icons-react';";
const dependencies$E = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$E = "cards/IconCard-condensed.jsx";

var cards_IconCard_condensed = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$E,
  code: code$E,
  sourceCode: sourceCode$E,
  sourceImports: sourceImports$E,
  dependencies: dependencies$E,
  sourceFileName: sourceFileName$E
});

const scope$D = {ImageCard: ffeCardsReact.ImageCard};
const code$D = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>;";
const sourceCode$D = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n            style={{ position: 'relative', bottom: '50px' }}\n        />\n    }\n>\n    {({ Title }) => <Title>Tittel</Title>}\n</ImageCard>;\n";
const sourceImports$D = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$D = ["@sb1/ffe-cards-react"];
const sourceFileName$D = "cards/ImageCard-titleOnly.jsx";

var cards_ImageCard_titleOnly = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$D,
  code: code$D,
  sourceCode: sourceCode$D,
  sourceImports: sourceImports$D,
  dependencies: dependencies$D,
  sourceFileName: sourceFileName$D
});

const scope$C = {CardBase: ffeCardsReact.CardBase};
const code$C = "<CardBase>Dette er basisen for alle kort</CardBase>;";
const sourceCode$C = "import { CardBase } from '@sb1/ffe-cards-react';\n\n<CardBase>Dette er basisen for alle kort</CardBase>;\n";
const sourceImports$C = "import { CardBase } from '@sb1/ffe-cards-react';";
const dependencies$C = ["@sb1/ffe-cards-react"];
const sourceFileName$C = "cards/CardBase.jsx";

var cards_CardBase = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$C,
  code: code$C,
  sourceCode: sourceCode$C,
  sourceImports: sourceImports$C,
  dependencies: dependencies$C,
  sourceFileName: sourceFileName$C
});

const scope$B = {ImageCard: ffeCardsReact.ImageCard};
const code$B = "<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>;";
const sourceCode$B = "import { ImageCard } from '@sb1/ffe-cards-react';\n\n<ImageCard\n    image={\n        <img\n            src=\"https://www.sparebank1.no/content/dam/SB1/foto/profilbilder-liggende/ung-i-sofa.jpg.thumb.1280.1280.jpg\"\n            alt=\"\"\n        />\n    }\n>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </Text>\n        </>\n    )}\n</ImageCard>;\n";
const sourceImports$B = "import { ImageCard } from '@sb1/ffe-cards-react';";
const dependencies$B = ["@sb1/ffe-cards-react"];
const sourceFileName$B = "cards/ImageCard.jsx";

var cards_ImageCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$B,
  code: code$B,
  sourceCode: sourceCode$B,
  sourceImports: sourceImports$B,
  dependencies: dependencies$B,
  sourceFileName: sourceFileName$B
});

const scope$A = {IconCard: ffeCardsReact.IconCard,KryssSirkelIkon: ffeIconsReact.KryssSirkelIkon};
const code$A = "<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>;";
const sourceCode$A = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';\n\n<IconCard\n    icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}\n    greyCharcoal={true}\n    condensed={true}\n>\n    {({ Title, Subtext }) => (\n        <>\n            <Title>Start ny sparing</Title>\n            <Subtext>Det er mange måter å spare på</Subtext>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$A = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { KryssSirkelIkon } from '@sb1/ffe-icons-react';";
const dependencies$A = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$A = "cards/IconCard-greyCharcoal.jsx";

var cards_IconCard_greyCharcoal = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$A,
  code: code$A,
  sourceCode: sourceCode$A,
  sourceImports: sourceImports$A,
  dependencies: dependencies$A,
  sourceFileName: sourceFileName$A
});

const scope$z = {IconCard: ffeCardsReact.IconCard,GrafOppIkon: ffeIconsReact.GrafOppIkon};
const code$z = "<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>;";
const sourceCode$z = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';\n\n<IconCard icon={<GrafOppIkon />}>\n    {({ CardName, Title, Subtext, Text }) => (\n        <>\n            <CardName>Kortnavn</CardName>\n            <Title>Tittel</Title>\n            <Subtext>En liten undertekst</Subtext>\n            <Text>Her kan man ha tekst</Text>\n        </>\n    )}\n</IconCard>;\n";
const sourceImports$z = "import { IconCard } from '@sb1/ffe-cards-react';\nimport { GrafOppIkon } from '@sb1/ffe-icons-react';";
const dependencies$z = ["@sb1/ffe-cards-react","@sb1/ffe-icons-react"];
const sourceFileName$z = "cards/IconCard.jsx";

var cards_IconCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$z,
  code: code$z,
  sourceCode: sourceCode$z,
  sourceImports: sourceImports$z,
  dependencies: dependencies$z,
  sourceFileName: sourceFileName$z
});

const scope$y = {TertiaryButton: ffeButtonsReact.TertiaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$y = "<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>;";
const sourceCode$y = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <TertiaryButton onClick={f => f}>Tertiærknapp</TertiaryButton>\n</ButtonGroup>;\n";
const sourceImports$y = "import { TertiaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$y = ["@sb1/ffe-buttons-react"];
const sourceFileName$y = "buttons/TertiaryButton.jsx";

var buttons_TertiaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$y,
  code: code$y,
  sourceCode: sourceCode$y,
  sourceImports: sourceImports$y,
  dependencies: dependencies$y,
  sourceFileName: sourceFileName$y
});

const scope$x = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$x = "<>\n    <ButtonGroup inline={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$x = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup inline={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$x = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$x = ["@sb1/ffe-buttons-react"];
const sourceFileName$x = "buttons/ButtonGroup-inline.jsx";

var buttons_ButtonGroup_inline = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$x,
  code: code$x,
  sourceCode: sourceCode$x,
  sourceImports: sourceImports$x,
  dependencies: dependencies$x,
  sourceFileName: sourceFileName$x
});

const scope$w = {ButtonGroup: ffeButtonsReact.ButtonGroup,ActionButton: ffeButtonsReact.ActionButton,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton};
const code$w = "<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;";
const sourceCode$w = "import {\n    ButtonGroup,\n    ActionButton,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<ButtonGroup>\n    <ActionButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Action knapp\n    </ActionButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;\n";
const sourceImports$w = "import {\n    ButtonGroup,\n    ActionButton,\n    PrimaryButton,\n    SecondaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$w = ["@sb1/ffe-buttons-react"];
const sourceFileName$w = "buttons/ariaLoadingMessage.jsx";

var buttons_ariaLoadingMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$w,
  code: code$w,
  sourceCode: sourceCode$w,
  sourceImports: sourceImports$w,
  dependencies: dependencies$w,
  sourceFileName: sourceFileName$w
});

const scope$v = {SecondaryButton: ffeButtonsReact.SecondaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup,BindersIkon: ffeIconsReact.BindersIkon};
const code$v = "<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;";
const sourceCode$v = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <SecondaryButton onClick={f => f}>Secondary knapp</SecondaryButton>\n    <SecondaryButton leftIcon={<BindersIkon />} onClick={f => f}>\n        Secondary m/ ikon\n    </SecondaryButton>\n    <SecondaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Secondary knapp\n    </SecondaryButton>\n</ButtonGroup>;\n";
const sourceImports$v = "import { SecondaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { BindersIkon } from '@sb1/ffe-icons-react';";
const dependencies$v = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$v = "buttons/SecondaryButton.jsx";

var buttons_SecondaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$v,
  code: code$v,
  sourceCode: sourceCode$v,
  sourceImports: sourceImports$v,
  dependencies: dependencies$v,
  sourceFileName: sourceFileName$v
});

const scope$u = {useState: react.useState,ExpandButton: ffeButtonsReact.ExpandButton};
const code$u = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n};";
const sourceCode$u = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n\n    return (\n        <div>\n            <ExpandButton\n                isExpanded={isExpanded}\n                onClick={() => setExpanded(!isExpanded)}\n            >\n                Vis mer\n            </ExpandButton>\n        </div>\n    );\n};\n";
const sourceImports$u = "import { useState } from 'react';\nimport { ExpandButton } from '@sb1/ffe-buttons-react';";
const dependencies$u = ["react","@sb1/ffe-buttons-react"];
const sourceFileName$u = "buttons/ExpandButton.jsx";

var buttons_ExpandButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$u,
  code: code$u,
  sourceCode: sourceCode$u,
  sourceImports: sourceImports$u,
  dependencies: dependencies$u,
  sourceFileName: sourceFileName$u
});

const scope$t = {PrimaryButton: ffeButtonsReact.PrimaryButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$t = "<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>;";
const sourceCode$t = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <PrimaryButton onClick={f => f}>Primary knapp</PrimaryButton>\n    <PrimaryButton\n        isLoading={true}\n        onClick={f => f}\n        ariaLoadingMessage=\"Vennligst vent...\"\n    >\n        Primary knapp\n    </PrimaryButton>\n</ButtonGroup>;\n";
const sourceImports$t = "import { PrimaryButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$t = ["@sb1/ffe-buttons-react"];
const sourceFileName$t = "buttons/PrimaryButton.jsx";

var buttons_PrimaryButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$t,
  code: code$t,
  sourceCode: sourceCode$t,
  sourceImports: sourceImports$t,
  dependencies: dependencies$t,
  sourceFileName: sourceFileName$t
});

const scope$s = {ButtonGroup: ffeButtonsReact.ButtonGroup,ShortcutButton: ffeButtonsReact.ShortcutButton};
const code$s = "<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>;";
const sourceCode$s = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';\n\n<ButtonGroup thin={true}>\n    <ShortcutButton element=\"a\" href=\"#shortcutbutton\">\n        Snarvei\n    </ShortcutButton>\n</ButtonGroup>;\n";
const sourceImports$s = "import { ButtonGroup, ShortcutButton } from '@sb1/ffe-buttons-react';";
const dependencies$s = ["@sb1/ffe-buttons-react"];
const sourceFileName$s = "buttons/ShortcutButton.jsx";

var buttons_ShortcutButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$s,
  code: code$s,
  sourceCode: sourceCode$s,
  sourceImports: sourceImports$s,
  dependencies: dependencies$s,
  sourceFileName: sourceFileName$s
});

const scope$r = {TaskButton: ffeButtonsReact.TaskButton,ButtonGroup: ffeButtonsReact.ButtonGroup,PlussIkon: ffeIconsReact.PlussIkon};
const code$r = "<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>;";
const sourceCode$r = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from '@sb1/ffe-icons-react';\n\n<ButtonGroup thin={true}>\n    <TaskButton icon={<PlussIkon />}>Legg til bruker</TaskButton>\n    <TaskButton icon={<PlussIkon />} condensed={true}>\n        Legg til bruker\n    </TaskButton>\n</ButtonGroup>;\n";
const sourceImports$r = "import { TaskButton, ButtonGroup } from '@sb1/ffe-buttons-react';\nimport { PlussIkon } from '@sb1/ffe-icons-react';";
const dependencies$r = ["@sb1/ffe-buttons-react","@sb1/ffe-icons-react"];
const sourceFileName$r = "buttons/TaskButton.jsx";

var buttons_TaskButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$r,
  code: code$r,
  sourceCode: sourceCode$r,
  sourceImports: sourceImports$r,
  dependencies: dependencies$r,
  sourceFileName: sourceFileName$r
});

const scope$q = {ActionButton: ffeButtonsReact.ActionButton,ButtonGroup: ffeButtonsReact.ButtonGroup};
const code$q = "<>\n    <ButtonGroup thin={true}>\n        <ActionButton onClick={f => f}>Action knapp</ActionButton>\n        <ActionButton\n            isLoading={true}\n            onClick={f => f}\n            ariaLoadingMessage=\"Vennligst vent...\"\n        >\n            Action knapp\n        </ActionButton>\n    </ButtonGroup>\n</>;";
const sourceCode$q = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup thin={true}>\n        <ActionButton onClick={f => f}>Action knapp</ActionButton>\n        <ActionButton\n            isLoading={true}\n            onClick={f => f}\n            ariaLoadingMessage=\"Vennligst vent...\"\n        >\n            Action knapp\n        </ActionButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$q = "import { ActionButton, ButtonGroup } from '@sb1/ffe-buttons-react';";
const dependencies$q = ["@sb1/ffe-buttons-react"];
const sourceFileName$q = "buttons/ActionButton.jsx";

var buttons_ActionButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$q,
  code: code$q,
  sourceCode: sourceCode$q,
  sourceImports: sourceImports$q,
  dependencies: dependencies$q,
  sourceFileName: sourceFileName$q
});

const scope$p = {BackButton: ffeButtonsReact.BackButton};
const code$p = "<BackButton onClick={f => f}>Tilbake</BackButton>;";
const sourceCode$p = "import { BackButton } from '@sb1/ffe-buttons-react';\n\n<BackButton onClick={f => f}>Tilbake</BackButton>;\n";
const sourceImports$p = "import { BackButton } from '@sb1/ffe-buttons-react';";
const dependencies$p = ["@sb1/ffe-buttons-react"];
const sourceFileName$p = "buttons/BackButton.jsx";

var buttons_BackButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$p,
  code: code$p,
  sourceCode: sourceCode$p,
  sourceImports: sourceImports$p,
  dependencies: dependencies$p,
  sourceFileName: sourceFileName$p
});

const scope$o = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$o = "<>\n    <ButtonGroup>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$o = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$o = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$o = ["@sb1/ffe-buttons-react"];
const sourceFileName$o = "buttons/ButtonGroup.jsx";

var buttons_ButtonGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$o,
  code: code$o,
  sourceCode: sourceCode$o,
  sourceImports: sourceImports$o,
  dependencies: dependencies$o,
  sourceFileName: sourceFileName$o
});

const scope$n = {ButtonGroup: ffeButtonsReact.ButtonGroup,PrimaryButton: ffeButtonsReact.PrimaryButton,SecondaryButton: ffeButtonsReact.SecondaryButton,TertiaryButton: ffeButtonsReact.TertiaryButton};
const code$n = "<>\n    <ButtonGroup thin={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;";
const sourceCode$n = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';\n\n<>\n    <ButtonGroup thin={true}>\n        <SecondaryButton>Forrige</SecondaryButton>\n        <PrimaryButton>Neste</PrimaryButton>\n    </ButtonGroup>\n    <ButtonGroup thin={true}>\n        <TertiaryButton>Avbryt</TertiaryButton>\n    </ButtonGroup>\n</>;\n";
const sourceImports$n = "import {\n    ButtonGroup,\n    PrimaryButton,\n    SecondaryButton,\n    TertiaryButton,\n} from '@sb1/ffe-buttons-react';";
const dependencies$n = ["@sb1/ffe-buttons-react"];
const sourceFileName$n = "buttons/ButtonGroup-thin.jsx";

var buttons_ButtonGroup_thin = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$n,
  code: code$n,
  sourceCode: sourceCode$n,
  sourceImports: sourceImports$n,
  dependencies: dependencies$n,
  sourceFileName: sourceFileName$n
});

const scope$m = {useState: react.useState,InlineExpandButton: ffeButtonsReact.InlineExpandButton,Collapse: Collapse__default["default"],Paragraph: ffeCoreReact.Paragraph};
const code$m = "() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (\n        <>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante\n                tilbud.\n                <InlineExpandButton\n                    aria-controls=\"inline-expand-example-details\"\n                    aria-expanded={isExpanded}\n                    isExpanded={isExpanded}\n                    onClick={() => setExpanded(!isExpanded)}\n                >\n                    {isExpanded ? 'Vis mindre' : 'Vis mer'}\n                </InlineExpandButton>\n            </Paragraph>\n\n            <Collapse\n                id=\"inline-expand-example-details\"\n                isOpen={isExpanded}\n                role=\"region\"\n            >\n                <div>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                </div>\n            </Collapse>\n        </>\n    );\n};";
const sourceCode$m = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';\n\n() => {\n    const [isExpanded, setExpanded] = useState(false);\n    return (\n        <>\n            <Paragraph>\n                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter\n                opplysningene om meg, slik at jeg kan få bedre og relevante\n                tilbud.\n                <InlineExpandButton\n                    aria-controls=\"inline-expand-example-details\"\n                    aria-expanded={isExpanded}\n                    isExpanded={isExpanded}\n                    onClick={() => setExpanded(!isExpanded)}\n                >\n                    {isExpanded ? 'Vis mindre' : 'Vis mer'}\n                </InlineExpandButton>\n            </Paragraph>\n\n            <Collapse\n                id=\"inline-expand-example-details\"\n                isOpen={isExpanded}\n                role=\"region\"\n            >\n                <div>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                    <Paragraph>\n                        Jeg samtykker til at selskapene i SpareBank 1 deler og\n                        benytter opplysningene om meg, slik at jeg kan få bedre\n                        og relevante tilbud. Jeg samtykker til at selskapene i\n                        SpareBank 1 deler og benytter opplysningene om meg, slik\n                        at jeg kan få bedre og relevante tilbud.\n                    </Paragraph>\n                </div>\n            </Collapse>\n        </>\n    );\n};\n";
const sourceImports$m = "import { useState } from 'react';\nimport { InlineExpandButton } from '@sb1/ffe-buttons-react';\nimport Collapse from '@sb1/ffe-collapse-react';\nimport { Paragraph } from '@sb1/ffe-core-react';";
const dependencies$m = ["react","@sb1/ffe-buttons-react","@sb1/ffe-collapse-react","@sb1/ffe-core-react"];
const sourceFileName$m = "buttons/InlineExpandButton.jsx";

var buttons_InlineExpandButton = /*#__PURE__*/Object.freeze({
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

const scope$k = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$k = "<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>;";
const sourceCode$k = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage compact={true}>Et lite tips</ContextTipMessage>;\n";
const sourceImports$k = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$k = ["@sb1/ffe-context-message-react"];
const sourceFileName$k = "context-message/ContextTipMessage-compact.jsx";

var context_message_ContextTipMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$k,
  code: code$k,
  sourceCode: sourceCode$k,
  sourceImports: sourceImports$k,
  dependencies: dependencies$k,
  sourceFileName: sourceFileName$k
});

const scope$j = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$j = "<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$j = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage headerText=\"Til info\">\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$j = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$j = ["@sb1/ffe-context-message-react"];
const sourceFileName$j = "context-message/ContextInfoMessage-header.jsx";

var context_message_ContextInfoMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$j,
  code: code$j,
  sourceCode: sourceCode$j,
  sourceImports: sourceImports$j,
  dependencies: dependencies$j,
  sourceFileName: sourceFileName$j
});

const scope$i = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$i = "<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$i = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage headerText=\"Tips\">\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$i = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$i = ["@sb1/ffe-context-message-react"];
const sourceFileName$i = "context-message/ContextTipMessage-header.jsx";

var context_message_ContextTipMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$i,
  code: code$i,
  sourceCode: sourceCode$i,
  sourceImports: sourceImports$i,
  dependencies: dependencies$i,
  sourceFileName: sourceFileName$i
});

const scope$h = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$h = "<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$h = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$h = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$h = ["@sb1/ffe-context-message-react"];
const sourceFileName$h = "context-message/ContextErrorMessage.jsx";

var context_message_ContextErrorMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$h,
  code: code$h,
  sourceCode: sourceCode$h,
  sourceImports: sourceImports$h,
  dependencies: dependencies$h,
  sourceFileName: sourceFileName$h
});

const scope$g = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$g = "<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>;";
const sourceCode$g = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextInfoMessage>;\n";
const sourceImports$g = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$g = ["@sb1/ffe-context-message-react"];
const sourceFileName$g = "context-message/ContextInfoMessage-showCloseButton.jsx";

var context_message_ContextInfoMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$g,
  code: code$g,
  sourceCode: sourceCode$g,
  sourceImports: sourceImports$g,
  dependencies: dependencies$g,
  sourceFileName: sourceFileName$g
});

const scope$f = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage};
const code$f = "<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>;";
const sourceCode$f = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\n\n<ContextTipMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextTipMessage>;\n";
const sourceImports$f = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';";
const dependencies$f = ["@sb1/ffe-context-message-react"];
const sourceFileName$f = "context-message/ContextTipMessage-showCloseButton.jsx";

var context_message_ContextTipMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$f,
  code: code$f,
  sourceCode: sourceCode$f,
  sourceImports: sourceImports$f,
  dependencies: dependencies$f,
  sourceFileName: sourceFileName$f
});

const scope$e = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$e = "<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>;";
const sourceCode$e = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage compact={true}>\n    En liten seier er fortsatt en seier!\n</ContextSuccessMessage>;\n";
const sourceImports$e = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$e = ["@sb1/ffe-context-message-react"];
const sourceFileName$e = "context-message/ContextSuccessMessage-compact.jsx";

var context_message_ContextSuccessMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$e,
  code: code$e,
  sourceCode: sourceCode$e,
  sourceImports: sourceImports$e,
  dependencies: dependencies$e,
  sourceFileName: sourceFileName$e
});

const scope$d = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$d = "<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>;";
const sourceCode$d = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>;\n";
const sourceImports$d = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$d = ["@sb1/ffe-context-message-react"];
const sourceFileName$d = "context-message/ContextErrorMessage-alertFalse.jsx";

var context_message_ContextErrorMessage_alertFalse = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$d,
  code: code$d,
  sourceCode: sourceCode$d,
  sourceImports: sourceImports$d,
  dependencies: dependencies$d,
  sourceFileName: sourceFileName$d
});

const scope$c = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$c = "<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$c = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage headerText=\"Opps...\">\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$c = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$c = ["@sb1/ffe-context-message-react"];
const sourceFileName$c = "context-message/ContextErrorMessage-header.jsx";

var context_message_ContextErrorMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$c,
  code: code$c,
  sourceCode: sourceCode$c,
  sourceImports: sourceImports$c,
  dependencies: dependencies$c,
  sourceFileName: sourceFileName$c
});

const scope$b = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$b = "<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>;";
const sourceCode$b = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage compact={true}>\n    Det skjedde en liten feil\n</ContextErrorMessage>;\n";
const sourceImports$b = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$b = ["@sb1/ffe-context-message-react"];
const sourceFileName$b = "context-message/ContextErrorMessage-compact.jsx";

var context_message_ContextErrorMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$b,
  code: code$b,
  sourceCode: sourceCode$b,
  sourceImports: sourceImports$b,
  dependencies: dependencies$b,
  sourceFileName: sourceFileName$b
});

const scope$a = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$a = "<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$a = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$a = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$a = ["@sb1/ffe-context-message-react"];
const sourceFileName$a = "context-message/ContextInfoMessage.jsx";

var context_message_ContextInfoMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$a,
  code: code$a,
  sourceCode: sourceCode$a,
  sourceImports: sourceImports$a,
  dependencies: dependencies$a,
  sourceFileName: sourceFileName$a
});

const scope$9 = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage};
const code$9 = "<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>;";
const sourceCode$9 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\n\n<ContextErrorMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextErrorMessage>;\n";
const sourceImports$9 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';";
const dependencies$9 = ["@sb1/ffe-context-message-react"];
const sourceFileName$9 = "context-message/ContextErrorMessage-showCloseButton.jsx";

var context_message_ContextErrorMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$9,
  code: code$9,
  sourceCode: sourceCode$9,
  sourceImports: sourceImports$9,
  dependencies: dependencies$9,
  sourceFileName: sourceFileName$9
});

const scope$8 = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$8 = "<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>;";
const sourceCode$8 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage headerText=\"Hurra!\">\n    Betalingen ble registrert!\n</ContextSuccessMessage>;\n";
const sourceImports$8 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$8 = ["@sb1/ffe-context-message-react"];
const sourceFileName$8 = "context-message/ContextSuccessMessage-header.jsx";

var context_message_ContextSuccessMessage_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$8,
  code: code$8,
  sourceCode: sourceCode$8,
  sourceImports: sourceImports$8,
  dependencies: dependencies$8,
  sourceFileName: sourceFileName$8
});

const scope$7 = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage,HakeIkon: ffeIconsReact.HakeIkon};
const code$7 = "<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>;";
const sourceCode$7 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';\n\n<ContextSuccessMessage icon={<HakeIkon />}>\n    Betalingen ble registrert!\n</ContextSuccessMessage>;\n";
const sourceImports$7 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\nimport { HakeIkon } from '@sb1/ffe-icons-react';";
const dependencies$7 = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$7 = "context-message/ContextSuccessMessage-icon.jsx";

var context_message_ContextSuccessMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$7,
  code: code$7,
  sourceCode: sourceCode$7,
  sourceImports: sourceImports$7,
  dependencies: dependencies$7,
  sourceFileName: sourceFileName$7
});

const scope$6 = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage};
const code$6 = "<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>;";
const sourceCode$6 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\n\n<ContextInfoMessage compact={true}>En liten beskjed</ContextInfoMessage>;\n";
const sourceImports$6 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';";
const dependencies$6 = ["@sb1/ffe-context-message-react"];
const sourceFileName$6 = "context-message/ContextInfoMessage-compact.jsx";

var context_message_ContextInfoMessage_compact = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$6,
  code: code$6,
  sourceCode: sourceCode$6,
  sourceImports: sourceImports$6,
  dependencies: dependencies$6,
  sourceFileName: sourceFileName$6
});

const scope$5 = {ContextErrorMessage: ffeContextMessageReact.ContextErrorMessage,UtropstegnIkon: ffeIconsReact.UtropstegnIkon};
const code$5 = "<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;";
const sourceCode$5 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';\n\n<ContextErrorMessage icon={<UtropstegnIkon />}>\n    Dette gikk ikke som forventet i det hele tatt!\n</ContextErrorMessage>;\n";
const sourceImports$5 = "import { ContextErrorMessage } from '@sb1/ffe-context-message-react';\nimport { UtropstegnIkon } from '@sb1/ffe-icons-react';";
const dependencies$5 = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$5 = "context-message/ContextErrorMessage-icon.jsx";

var context_message_ContextErrorMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$5,
  code: code$5,
  sourceCode: sourceCode$5,
  sourceImports: sourceImports$5,
  dependencies: dependencies$5,
  sourceFileName: sourceFileName$5
});

const scope$4 = {ContextTipMessage: ffeContextMessageReact.ContextTipMessage,LyspareIkon: ffeIconsReact.LyspareIkon};
const code$4 = "<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;";
const sourceCode$4 = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';\n\n<ContextTipMessage icon={<LyspareIkon />}>\n    Visste du at du kan få en skattefordel ved sparing i IPS?\n</ContextTipMessage>;\n";
const sourceImports$4 = "import { ContextTipMessage } from '@sb1/ffe-context-message-react';\nimport { LyspareIkon } from '@sb1/ffe-icons-react';";
const dependencies$4 = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$4 = "context-message/ContextTipMessage-icon.jsx";

var context_message_ContextTipMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$4,
  code: code$4,
  sourceCode: sourceCode$4,
  sourceImports: sourceImports$4,
  dependencies: dependencies$4,
  sourceFileName: sourceFileName$4
});

const scope$3 = {ContextInfoMessage: ffeContextMessageReact.ContextInfoMessage,InfoIkon: ffeIconsReact.InfoIkon};
const code$3 = "<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;";
const sourceCode$3 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';\n\n<ContextInfoMessage icon={<InfoIkon />}>\n    Nå har det kommet noe nytt og spennende fra SpareBank 1!\n</ContextInfoMessage>;\n";
const sourceImports$3 = "import { ContextInfoMessage } from '@sb1/ffe-context-message-react';\nimport { InfoIkon } from '@sb1/ffe-icons-react';";
const dependencies$3 = ["@sb1/ffe-context-message-react","@sb1/ffe-icons-react"];
const sourceFileName$3 = "context-message/ContextInfoMessage-icon.jsx";

var context_message_ContextInfoMessage_icon = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$3,
  code: code$3,
  sourceCode: sourceCode$3,
  sourceImports: sourceImports$3,
  dependencies: dependencies$3,
  sourceFileName: sourceFileName$3
});

const scope$2 = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$2 = "<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>;";
const sourceCode$2 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage>Betalingen ble registrert!</ContextSuccessMessage>;\n";
const sourceImports$2 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$2 = ["@sb1/ffe-context-message-react"];
const sourceFileName$2 = "context-message/ContextSuccessMessage.jsx";

var context_message_ContextSuccessMessage = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$2,
  code: code$2,
  sourceCode: sourceCode$2,
  sourceImports: sourceImports$2,
  dependencies: dependencies$2,
  sourceFileName: sourceFileName$2
});

const scope$1 = {ContextSuccessMessage: ffeContextMessageReact.ContextSuccessMessage};
const code$1 = "<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>;";
const sourceCode$1 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';\n\n<ContextSuccessMessage showCloseButton={true}>\n    Jeg kan også lukkes\n</ContextSuccessMessage>;\n";
const sourceImports$1 = "import { ContextSuccessMessage } from '@sb1/ffe-context-message-react';";
const dependencies$1 = ["@sb1/ffe-context-message-react"];
const sourceFileName$1 = "context-message/ContextSuccessMessage-showCloseButton.jsx";

var context_message_ContextSuccessMessage_showCloseButton = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope$1,
  code: code$1,
  sourceCode: sourceCode$1,
  sourceImports: sourceImports$1,
  dependencies: dependencies$1,
  sourceFileName: sourceFileName$1
});

const scope = {useState: react.useState};
const code = "/* eslint-disable jsx-a11y/anchor-is-valid */\n\n\n() => {\n    const [isUserNavOpen, setIsUserNavOpen] = useState(false);\n    return (\n        <div>\n            <header className=\"ffe-header\">\n                <div className=\"ffe-header__wrapper\">\n                    <nav\n                        className=\"ffe-header__secondary-nav\"\n                        role=\"navigation\"\n                    >\n                        <ul className=\"ffe-header__list ffe-header__secondary-nav-list\">\n                            <li className=\"ffe-header__list-item\">\n                                <a\n                                    className=\"ffe-header__link ffe-header__link--active\"\n                                    href=\"#\"\n                                >\n                                    Privat\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Bedrift\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Om oss\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n\n                    <div className=\"ffe-header__logo\">\n                        <a href=\"#\">\n                            <svg\n                                viewBox=\"0 0 182 40\"\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                className=\"ffe-header__logo-svg\"\n                            >\n                                <title>SpareBank 1</title>\n                                <g fill=\"none\" fillRule=\"evenodd\">\n                                    <path\n                                        d=\"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828\"\n                                        fill=\"#F00000\"\n                                    />\n                                    <path\n                                        d=\"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17\"\n                                        fill=\"#B40000\"\n                                    />\n                                    <path\n                                        d=\"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734\"\n                                        fill=\"#FFF\"\n                                    />\n                                    <path\n                                        d=\"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z\"\n                                        fill=\"#002776\"\n                                    />\n                                </g>\n                            </svg>\n                        </a>\n                    </div>\n\n                    <div className=\"ffe-header__user-nav-toggle\">\n                        <button\n                            className=\"ffe-header__icon-button ffe-header__icon-button--user-nav\"\n                            onClick={() => setIsUserNavOpen(!isUserNavOpen)}\n                        >\n                            <span className=\"ffe-header__user-name\">\n                                Jomar Beate Skrothaug\n                                <span className=\"ffe-header__user-chevron\">\n                                    <svg\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                        viewBox=\"0 0 200 200\"\n                                        className=\"ffe-header__svg-icon ffe-header__user-chevron-icon\"\n                                    >\n                                        <path d=\"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z\" />\n                                    </svg>\n                                </span>\n                            </span>\n                            <svg\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                viewBox=\"0 0 200 200\"\n                                className=\"ffe-header__svg-icon ffe-header__user-icon\"\n                            >\n                                <path d=\"M99.656,0c-21.96,0-39.812,17.913-39.812,39.938v13.468c0,22.025,17.852,39.938,39.812,39.938h0.684c21.97,0,39.82-17.913,39.82-39.938v-13.468c0-22.025-17.86-39.938-39.82-39.938h-0.684zm0,14.031h0.684c14.24,0,25.82,11.625,25.82,25.907v13.437c0,14.284-11.58,25.906-25.82,25.906h-0.684c-14.24,0-25.812-11.622-25.812-25.906v-13.437c0-14.282,11.572-25.907,25.812-25.907zm-46.094,87.749c-0.973,0.1-1.932,0.46-2.781,1.1-14.196,10.54-22.781,27.37-22.781,45.28v40.46c0,6.29,5.082,11.38,11.344,11.38h121.32c6.26,0,11.34-5.09,11.34-11.38v-40.46c0-17.91-8.59-34.74-22.78-45.28-2.72-2.02-6.59-1.19-8.28,1.74l-1.35,2.32c-1.42,2.46-0.83,5.64,1.44,7.34,10.57,7.93,16.97,20.5,16.97,33.88v37.81h-116v-37.81c0-13.38,6.399-25.96,16.969-33.88,2.276-1.7,2.859-4.88,1.437-7.34l-1.344-2.32c-1.163-2.01-3.359-3.05-5.5-2.84z\" />\n                            </svg>\n                            <span className=\"ffe-header__notification-bubble\">\n                                5\n                            </span>\n                        </button>\n                    </div>\n\n                    <div className=\"ffe-header__site-nav-toggle\">\n                        <button className=\"ffe-header__icon-button ffe-header__icon-button--site-nav\">\n                            <span className=\"ffe-header__site-nav-hamburger\">\n                                <span className=\"ffe-header__site-nav-hamburger__bar\" />\n                            </span>\n                        </button>\n                    </div>\n                </div>\n\n                <div className=\"ffe-header__border\">\n                    <div className=\"ffe-header__wrapper\">\n                        <nav className=\"ffe-header__user-nav\" role=\"navigation\">\n                            <ul\n                                className={`ffe-header__list ffe-header__user-nav-list ${isUserNavOpen &&\n                                    'ffe-header__user-nav-list--visible'}`}\n                            >\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Huskeliste{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            1\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Postkasse{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            22\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Innstillinger\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <div className=\"ffe-header__link ffe-header__link--disabled\">\n                                        Chat - stengt\n                                    </div>\n                                </li>\n                                <li className=\"ffe-header__list-item ffe-header__list-item--centered\">\n                                    <button className=\"ffe-header__logout-button\">\n                                        <span className=\"ffe-header__logout-button-label\">\n                                            Logg ut\n                                        </span>\n                                        <div\n                                            className=\"ffe-header__logout-button-spinner\"\n                                            aria-hidden=\"true\"\n                                            aria-label=\"Logger deg ut\"\n                                        />\n                                    </button>\n                                </li>\n                            </ul>\n                        </nav>\n\n                        <nav className=\"ffe-header__site-nav\" role=\"navigation\">\n                            <ul className=\"ffe-header__list ffe-header__site-nav-list\">\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Oversikt\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Betaling\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kort\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Lån\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Sparing\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Forsikring\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kundeservice\n                                    </a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n            </header>\n\n            <div className=\"lorem-ipsum\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Proin non lectus in quam iaculis molestie ut nec turpis.\n                    Curabitur feugiat turpis dignissim ex scelerisque ultricies\n                    in vitae est. Proin bibendum tellus leo, non vulputate elit\n                    tempor sed. Cras efficitur justo nisi, non vehicula metus\n                    faucibus ac. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus.\n                </p>\n            </div>\n        </div>\n    );\n};";
const sourceCode = "/* eslint-disable jsx-a11y/anchor-is-valid */\nimport { useState } from 'react';\n\n() => {\n    const [isUserNavOpen, setIsUserNavOpen] = useState(false);\n    return (\n        <div>\n            <header className=\"ffe-header\">\n                <div className=\"ffe-header__wrapper\">\n                    <nav\n                        className=\"ffe-header__secondary-nav\"\n                        role=\"navigation\"\n                    >\n                        <ul className=\"ffe-header__list ffe-header__secondary-nav-list\">\n                            <li className=\"ffe-header__list-item\">\n                                <a\n                                    className=\"ffe-header__link ffe-header__link--active\"\n                                    href=\"#\"\n                                >\n                                    Privat\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Bedrift\n                                </a>\n                            </li>\n                            <li className=\"ffe-header__list-item\">\n                                <a className=\"ffe-header__link\" href=\"#\">\n                                    Om oss\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n\n                    <div className=\"ffe-header__logo\">\n                        <a href=\"#\">\n                            <svg\n                                viewBox=\"0 0 182 40\"\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                className=\"ffe-header__logo-svg\"\n                            >\n                                <title>SpareBank 1</title>\n                                <g fill=\"none\" fillRule=\"evenodd\">\n                                    <path\n                                        d=\"M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828\"\n                                        fill=\"#F00000\"\n                                    />\n                                    <path\n                                        d=\"M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17\"\n                                        fill=\"#B40000\"\n                                    />\n                                    <path\n                                        d=\"M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734\"\n                                        fill=\"#FFF\"\n                                    />\n                                    <path\n                                        d=\"M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z\"\n                                        fill=\"#002776\"\n                                    />\n                                </g>\n                            </svg>\n                        </a>\n                    </div>\n\n                    <div className=\"ffe-header__user-nav-toggle\">\n                        <button\n                            className=\"ffe-header__icon-button ffe-header__icon-button--user-nav\"\n                            onClick={() => setIsUserNavOpen(!isUserNavOpen)}\n                        >\n                            <span className=\"ffe-header__user-name\">\n                                Jomar Beate Skrothaug\n                                <span className=\"ffe-header__user-chevron\">\n                                    <svg\n                                        xmlns=\"http://www.w3.org/2000/svg\"\n                                        viewBox=\"0 0 200 200\"\n                                        className=\"ffe-header__svg-icon ffe-header__user-chevron-icon\"\n                                    >\n                                        <path d=\"m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z\" />\n                                    </svg>\n                                </span>\n                            </span>\n                            <svg\n                                xmlns=\"http://www.w3.org/2000/svg\"\n                                viewBox=\"0 0 200 200\"\n                                className=\"ffe-header__svg-icon ffe-header__user-icon\"\n                            >\n                                <path d=\"M99.656,0c-21.96,0-39.812,17.913-39.812,39.938v13.468c0,22.025,17.852,39.938,39.812,39.938h0.684c21.97,0,39.82-17.913,39.82-39.938v-13.468c0-22.025-17.86-39.938-39.82-39.938h-0.684zm0,14.031h0.684c14.24,0,25.82,11.625,25.82,25.907v13.437c0,14.284-11.58,25.906-25.82,25.906h-0.684c-14.24,0-25.812-11.622-25.812-25.906v-13.437c0-14.282,11.572-25.907,25.812-25.907zm-46.094,87.749c-0.973,0.1-1.932,0.46-2.781,1.1-14.196,10.54-22.781,27.37-22.781,45.28v40.46c0,6.29,5.082,11.38,11.344,11.38h121.32c6.26,0,11.34-5.09,11.34-11.38v-40.46c0-17.91-8.59-34.74-22.78-45.28-2.72-2.02-6.59-1.19-8.28,1.74l-1.35,2.32c-1.42,2.46-0.83,5.64,1.44,7.34,10.57,7.93,16.97,20.5,16.97,33.88v37.81h-116v-37.81c0-13.38,6.399-25.96,16.969-33.88,2.276-1.7,2.859-4.88,1.437-7.34l-1.344-2.32c-1.163-2.01-3.359-3.05-5.5-2.84z\" />\n                            </svg>\n                            <span className=\"ffe-header__notification-bubble\">\n                                5\n                            </span>\n                        </button>\n                    </div>\n\n                    <div className=\"ffe-header__site-nav-toggle\">\n                        <button className=\"ffe-header__icon-button ffe-header__icon-button--site-nav\">\n                            <span className=\"ffe-header__site-nav-hamburger\">\n                                <span className=\"ffe-header__site-nav-hamburger__bar\" />\n                            </span>\n                        </button>\n                    </div>\n                </div>\n\n                <div className=\"ffe-header__border\">\n                    <div className=\"ffe-header__wrapper\">\n                        <nav className=\"ffe-header__user-nav\" role=\"navigation\">\n                            <ul\n                                className={`ffe-header__list ffe-header__user-nav-list ${isUserNavOpen &&\n                                    'ffe-header__user-nav-list--visible'}`}\n                            >\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Huskeliste{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            1\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Postkasse{' '}\n                                        <span className=\"ffe-header__notification-bubble\">\n                                            22\n                                        </span>\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Innstillinger\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <div className=\"ffe-header__link ffe-header__link--disabled\">\n                                        Chat - stengt\n                                    </div>\n                                </li>\n                                <li className=\"ffe-header__list-item ffe-header__list-item--centered\">\n                                    <button className=\"ffe-header__logout-button\">\n                                        <span className=\"ffe-header__logout-button-label\">\n                                            Logg ut\n                                        </span>\n                                        <div\n                                            className=\"ffe-header__logout-button-spinner\"\n                                            aria-hidden=\"true\"\n                                            aria-label=\"Logger deg ut\"\n                                        />\n                                    </button>\n                                </li>\n                            </ul>\n                        </nav>\n\n                        <nav className=\"ffe-header__site-nav\" role=\"navigation\">\n                            <ul className=\"ffe-header__list ffe-header__site-nav-list\">\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Oversikt\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Betaling\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kort\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Lån\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Sparing\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Forsikring\n                                    </a>\n                                </li>\n                                <li className=\"ffe-header__list-item\">\n                                    <a className=\"ffe-header__link\" href=\"#\">\n                                        Kundeservice\n                                    </a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n                </div>\n            </header>\n\n            <div className=\"lorem-ipsum\">\n                <p>\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                    Proin non lectus in quam iaculis molestie ut nec turpis.\n                    Curabitur feugiat turpis dignissim ex scelerisque ultricies\n                    in vitae est. Proin bibendum tellus leo, non vulputate elit\n                    tempor sed. Cras efficitur justo nisi, non vehicula metus\n                    faucibus ac. Interdum et malesuada fames ac ante ipsum\n                    primis in faucibus.\n                </p>\n            </div>\n        </div>\n    );\n};\n";
const sourceImports = "import { useState } from 'react';";
const dependencies = ["react"];
const sourceFileName = "header/header.jsx";

var header_header = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scope: scope,
  code: code,
  sourceCode: sourceCode,
  sourceImports: sourceImports,
  dependencies: dependencies,
  sourceFileName: sourceFileName
});

var index = { typography_Paragraph, typography_LinkText, typography_SmallText, typography_PreformattedText, typography_EmphasizedText, typography_Heading, typography_StrongText, typography_DividerLine, typography_LinkText_icon, typography_MicroText, account_selector_AccountSelector_customListDesign, account_selector_AccountSelector_accountNumberFormatting_off, account_selector_AccountSelector, account_selector_AccountSelector_showBalance, account_selector_AccountSelector_allowCustomAccount, account_selector_AccountSelectorMulti, spinner_Spinner_large, spinner_Spinner, lists_StylizedNumberedList, lists_DescriptionList, lists_DescriptionList_mediumlarge, lists_DescriptionList_horizontal, lists_DescriptionListMultiCol, lists_CheckList_columns, lists_CheckList, lists_NumberedList, lists_BulletList, grid_InlineGrid, grid_GridRow_background, grid_Grid, grid_Grid_4col, grid_GridCol_background, grid_InlineGrid_nested, system_message_SystemSuccessMessage, system_message_SystemInfoMessage, system_message_SystemNewsMessage, system_message_SystemErrorMessage_alertFalse, system_message_SystemErrorMessage, message_box_ErrorMessage, message_box_InfoMessage, message_box_InfoMessageList, message_box_SuccessMessage, message_box_ErrorMessage_alertFalse, message_box_InfoMessage_customIcon, message_box_TipsMessage, tables_Table, tables_Table_advanced, tables_Table_expandedContentMapper, tables_Table_customRender, chart_donut_ChartDonut, chart_donut_ChartDonut_customLabel, form_InputGroup, form_Checkbox_hiddenLabel, form_SuccessFieldMessage, form_InputGroup_multiChildren, form_Checkbox, form_Checkbox_renderProps, form_Tooltip_external, form_TextArea, form_Input_ref, form_Label, form_InputGroup_description, form_Checkbox_invalid, form_InfoFieldMessage, form_InputGroup_fieldMessage, form_PhoneNumber_countryCode_invalid, form_RadioButton_inline, form_RadioButton, form_Input_textLike, form_PhoneNumber_PhoneNumber_invalid, form_PhoneNumber_PhoneNumber_countryCode_invalid, form_RadioSwitch_fieldMessageUnselected, form_TextArea_ref, form_RadioSwitch, form_RadioBlock, form_RadioSwitch_selectedValue, form_ErrorFieldMessage, form_Checkbox_inlineFalse, form_RadioButton_tooltip, form_Input, form_RadioSwitch_fieldMessage, form_RadioButtonInputGroup_extraMarginFalse, form_Checkbox_onChange, form_RadioButtonInputGroup, form_PhoneNumber, form_Tooltip, form_InputGroup_extraMarginFalse, formatting_Percentage, formatting_Birthnumber, formatting_Date, formatting_Accountnumber, formatting_Numbers, formatting_Currency, formatting_Distance, tabs_TabButtonGroup_advanced, tabs_TabButtonGroup, tabs_TabGroup_advanced, tabs_TabButton_selected, tabs_Tab_customProps, tabs_TabButton_customProps, tabs_Tab_selected, tabs_TabButtonGroup_thin, tabs_TabButton, tabs_Tab_condensed, tabs_Tab, tabs_TabGroup_thin, tabs_TabButton_condensed, tabs_TabGroup, details_list_DetailList, datepicker_Datepicker, datepicker_Datepicker_invalid, datepicker_Datepicker_calendarAbove, datepicker_Calendar_en, datepicker_Datepicker_nn, datepicker_Calendar, datepicker_Datepicker_en, datepicker_Calendar_nn, datepicker_Datepicker_fullWidth, datepicker_Datepicker_two, file_upload_FileUpload, collapse_Collapse_onRest, collapse_Collapse, accordion_Accordion_open, accordion_Accordion, accordion_Accordion_managed, dropdown_SearchableDropdown_2attributes, dropdown_SearchableDropdown, dropdown_Dropdown, dropdown_Dropdown_invalid, dropdown_SearchableDropdown_isLoading, dropdown_SearchableDropdown_extraresults, dropdown_SearchableDropdown_customMatchFunction, dropdown_SearchableDropdown_highCapacity, dropdown_SearchableDropdown_selectedItem, dropdown_SearchableDropdown_customListElementBody, cards_TextCard, cards_IconCard_condensed, cards_ImageCard_titleOnly, cards_CardBase, cards_ImageCard, cards_IconCard_greyCharcoal, cards_IconCard, buttons_TertiaryButton, buttons_ButtonGroup_inline, buttons_ariaLoadingMessage, buttons_SecondaryButton, buttons_ExpandButton, buttons_PrimaryButton, buttons_ShortcutButton, buttons_TaskButton, buttons_ActionButton, buttons_BackButton, buttons_ButtonGroup, buttons_ButtonGroup_thin, buttons_InlineExpandButton, context_message_ContextTipMessage, context_message_ContextTipMessage_compact, context_message_ContextInfoMessage_header, context_message_ContextTipMessage_header, context_message_ContextErrorMessage, context_message_ContextInfoMessage_showCloseButton, context_message_ContextTipMessage_showCloseButton, context_message_ContextSuccessMessage_compact, context_message_ContextErrorMessage_alertFalse, context_message_ContextErrorMessage_header, context_message_ContextErrorMessage_compact, context_message_ContextInfoMessage, context_message_ContextErrorMessage_showCloseButton, context_message_ContextSuccessMessage_header, context_message_ContextSuccessMessage_icon, context_message_ContextInfoMessage_compact, context_message_ContextErrorMessage_icon, context_message_ContextTipMessage_icon, context_message_ContextInfoMessage_icon, context_message_ContextSuccessMessage, context_message_ContextSuccessMessage_showCloseButton, header_header };

exports.examples = index;
exports.packages = packageList;
exports.reactDoc = reactdoc;
