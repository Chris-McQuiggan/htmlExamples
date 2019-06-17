function getA() {
    return Number(document.calculator.number1.value);
}
function getB() {
    return Number(document.calculator.number2.value);
}
function returnRes(res) {
    document.calculator.result.value = res;
}
function multiplyer() {
    returnRes(getA() * getB());
}
function divider() {
    returnRes(getA() / getB());
}
function adder() {
    returnRes(getA() + getB());
}
function subtracter() {
    returnRes(getA() - getB());
}