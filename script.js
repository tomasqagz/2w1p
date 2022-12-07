function myFunction() {
    let u = document.getElementById("user").value;
    
    document.getElementById('texto').innerHTML=' Usuario : ' + u + "<br>" + ' Contraseña: casino1 ' 
}

function copyDivToClipboard(id) {
    var range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    alert("Texto copiado correctamente")
}


var input = document.getElementById("user");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("input").click();
    }
});