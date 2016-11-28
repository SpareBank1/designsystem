export default (columns, data, sortBy, descending) => {

    var sortedData = [...data];

    const compare = (data1, data2) => {
        if (!isNaN(data1[sortBy])) {
            return data1[sortBy] - data2[sortBy];
        } else {
            return data1[sortBy].localeCompare(data2[sortBy]);
        }
    };

    sortedData.sort(compare);

    if (descending) {
        sortedData.reverse();
    }

    return sortedData;
};
