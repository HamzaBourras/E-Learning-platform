/* eslint-disable no-unused-vars */
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const uncapitalize = (str) =>{
    return str.toLowerCase()
}

export const getArrayById = (array, colName, id) => {
    return id ? array.filter((item) => item[colName] == id) : array;
};

export const generateUsername = (firstname, lastname) => {
    return firstname && lastname ? `${firstname.toLowerCase().charAt(0)}.${lastname.toLowerCase()}` : ''
}

export const countData = (array) => {
    let counter = 0;
    array.forEach(i => {
        counter++
    });
    return counter
}

export const getRecentlyAddedData = (array, comparison, number) => {
    const sortedArray = array.sort((a, b) => b[comparison] - a[comparison]);
    const recentData = sortedArray.slice(0, number);

    return recentData;
}