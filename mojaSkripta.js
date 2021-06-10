function plus() {
    var x = parseInt(document.getElementById('cisloA').value);
    var y = parseInt(document.getElementById('cisloB').value);
    document.getElementById('rezultat').innerHTML = zrataj(x, y);
}
function minus() {
    var x = document.getElementById('cisloA').value;
    var y = document.getElementById('cisloB').value;
    document.getElementById('rezultat').innerHTML = odrataj(x, y);
}
function krat() {
    var x = document.getElementById('cisloA').value;
    var y = document.getElementById('cisloB').value;
    document.getElementById('rezultat').innerHTML = vynasob(x, y);
}
function delene() {
    var x = document.getElementById('cisloA').value;
    var y = document.getElementById('cisloB').value;
    document.getElementById('rezultat').innerHTML = podel(x, y);
}

function zrataj(a, b) {
    return a + b;
}
function odrataj(a, b) {
    return a - b;
}
function vynasob(a, b) {
    return a * b;
}
function podel(a, b) {
    return a / b;
}