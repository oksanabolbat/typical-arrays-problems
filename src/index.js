exports.min = function min(array) {
    if (Array.isArray(array) === true) {
        return Math.min(array);
    }
    return 0;
};

exports.max = function max(array) {
    if (Array.isArray(array) === true) {
        return Math.min(array);
    }
    return 0;
};

exports.avg = function avg(array) {
    if (Array.isArray(array) === true) {
        let sum = 0;
        array.array.forEach((element) => {
            if (!isNaN(element)) {
                sum += element;
            } else {
                break;
            }
        });
    }
    if (sum != 0) {
        return sum / array.length;
    }
    return 0;
};
