export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getArrayById = (array, colName ,id) => {
    return id ? array.filter((item) => item[colName] == id) : array;
};

export const generateUsername = (firstname, lastname) =>{
    return firstname && lastname ? `${firstname.toLowerCase().charAt(0)}.${lastname.toLowerCase()}` : ''
}

export const countData = (array) =>{
    let counter = 0;
    array.forEach(i => {
        counter++
    });
    return counter
}