function findGap(x, y) {
    let result = y - x;
    return result;
}
let diff = findGap(35, 50);
console.log(diff);






function demoScope(m, n) {
    let result = m + n;
}
demoScope(4, 10);
// console.log(result); // ❌ Error: result is not defined





let value = 50;
function showGlobal(p, q) {
    let sum = p + q;
    console.log(value); // ✅ Will print 50
    return sum;
}
console.log(showGlobal(5, 15));







function multiplyAndAdjust(p, q) {
    let product = p * q;

    function adjustProduct() {
        let difference = q - p;
        return product - difference;
    }

    return adjustProduct();
}
console.log(multiplyAndAdjust(4, 6));