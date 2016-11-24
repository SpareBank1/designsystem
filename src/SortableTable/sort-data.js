export default (columns, data, sortBy, descending) => {

    var sortedData = [...data];

    const sortByKey = columns[sortBy].dataKey;
    const compare = (data1, data2) => {
        if (!isNaN(data1[sortByKey])) {
            return data1[sortByKey] - data2[sortByKey];
        } else {
            return data1[sortByKey].localeCompare(data2[sortByKey]);
        }
    };

    sortedData.sort(compare);

    if (descending) {
        sortedData.reverse();
    }

    return sortedData;
};
