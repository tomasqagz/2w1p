function myFunction() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;
    document.getElementById('texto').innerHTML=' texto de prueba 1233 '+ u +' prueba de texto 12341234 '+ p ;
    
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("texto"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    alert("copiaste el texto")
   }



