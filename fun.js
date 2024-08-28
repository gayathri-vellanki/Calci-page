function add() {
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var result = num1 + num2;
    document.getElementById('res').value = result;
}

function sub() {
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var result = num1 - num2;
    document.getElementById('res').value = result;
}

function mul() {
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var result = num1 * num2;
    document.getElementById('res').value = result;
}
function div() {
    var num1 = parseFloat(document.getElementById('n1').value);
    var num2 = parseFloat(document.getElementById('n2').value);
    var result = num1 / num2;
    document.getElementById('res').value = result;
}

