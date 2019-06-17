function getA() {
    return Number(document.calculator.number1.value);
}
function getB() {
    return Number(document.calculator.number2.value);
}
function returnRes(res) {
    sessionStorage.setItem('result', res);
    document.location.href = 'result.html';
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