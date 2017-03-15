export default (columns, data, sortBy, descending) => {

    const sortedData = [...data];

    let compare = (data1, data2) => {
        if (!isNaN(data1[sortBy])) {
            return data1[sortBy] - data2[sortBy];
        }
        return data1[sortBy].localeCompare(data2[sortBy]);
    };

    const column = columns.find(col => col.key === sortBy);
    const customCompare = column && typeof column.compare === 'function' && column.compare;
    if (customCompare) {
        compare = (data1, data2) => customCompare(data1[sortBy], data2[sortBy]);
    }

    sortedData.sort(compare);

    if (descending) {
        sortedData.reverse();
    }

    return sortedData;
};
