function myFunction() {
    let u = document.getElementById("user").value;
    let c = document.getElementById("cbu").value;
    let m = document.getElementById("monto").value;
    
    document.getElementById('texto').innerHTML= 
    'User: ' + u + "<br>" +
    ' Retiro fichas ✅'+ "<br>" +
    " Envio dinero ✅ " + "<br>" +
    " Monto : $" + m + "<br>" +
    " CBU : " + c
}

function copyDivToClipboard(id) {
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

}


var input = document.getElementById("user");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input").click();
    }
});


var input2 = document.getElementById("cbu");
input2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input").click();
    }
});


var input3 = document.getElementById("monto");
input3.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input").click();
    }
});