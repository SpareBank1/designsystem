const exports = module.exports = {};

exports.companies = [{companyName: "Bedrift 1"}, {companyName:"Bedrift 2"}];

exports.initialInputValue = exports.companies[0].companyName;
let selectedCompanyName = exports.companies[0].companyName;

exports.onSelect = function (company) {
    selectedCompanyName = company.companyName;
    return selectedCompanyName;
};

exports.onReset = function () {
    return '';
};

exports.onChange = function (value) {
    return value;
};
