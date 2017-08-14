const exports = module.exports = {};

exports.companies = [
    {
        organizationName: "Bedriften",
        organizationNumber: "912602370",
        quantityUnprocessedMessages: 5,
    },
    {
        organizationName: "Sønn & co",
        organizationNumber: "812602372",
        quantityUnprocessedMessages: 3,
    },
    {
        organizationName: "Beslag skytter",
        organizationNumber: "812602552",
        quantityUnprocessedMessages: 1,
    },
    {
        organizationName: "Rør og sånt",
        organizationNumber: "812602399",
        quantityUnprocessedMessages: 7,
    },
    {
        organizationName: "Kaffekoppen",
        organizationNumber: "812602222",
        quantityUnprocessedMessages: 8,
    },
    {
        organizationName: "Sats",
        organizationNumber: "809602772",
        quantityUnprocessedMessages: 2,
    }
];

exports.initialInputValue ='';
let selectedCompanyName = exports.companies[0].organizationName;

exports.onSelect = function (company) {
    selectedCompanyName = company.organizationName;
    return selectedCompanyName;
};

exports.onReset = function () {
    return '';
};

exports.onChange = function (value) {
    return value;
};

