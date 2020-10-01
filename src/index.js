exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce(
            (acc, next) => (isNaN(next) ? 0 : Math.min(acc, next)),
            array[0]
        );
    }
    return 0;
};
//array = [2,-24,13,-11,16,-12,-16,24,13,-38,19,-16,19,3,2,32,0,-10,-19,-27]; min(array);

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce(
            (acc, next) => (isNaN(next) ? 0 : Math.max(acc, next)),
            array[0]
        );
    }
    return 0;
};

exports.avg = function avg(array) {
    let sum = 0;
    if (Array.isArray(array) === true) {
        sum = array.reduce((acc, next) => (acc += next), 0);
    }
    if (sum != 0) {
        return sum / array.length;
    }
    return 0;
};
