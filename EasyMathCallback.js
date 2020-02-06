/**
Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array.
 */

function processArray(arr, callback) {
    return arr.map(callback);
}