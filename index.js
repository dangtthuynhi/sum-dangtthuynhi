
function sumIntegers(...args) {
    return args.reduce((acc, val) => acc + (Number.isInteger(val) ? val : 0), 0);
}

function sumFloats(...args) {
    return args.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
}

function sumArrays(...args) {
    return args.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc + val.reduce((subAcc, subVal) => subAcc + (typeof subVal === 'number' ? subVal : 0), 0);
        }
        return acc;
    }, 0);
}

function sum(...args) {
    return args.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc + sumArrays(val);
        }
        return acc + (typeof val === 'number' ? val : 0);
    }, 0);
}


module.exports = {
    sumIntegers,
    sumFloats
};
