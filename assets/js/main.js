
var cvElement = document.querySelector("#marquee")
console.log("Holaaaa")
cvElement.addEventListener("click" , function(){
    let pdf = 'https://docs.google.com/document/d/1NMyZMaKvCYA2FHWQHXZ1gPijCBvvcN21bp5b_c6ouv0';
    let windowOpen = "_blank";
    let enlace = document.createElement("a");
    enlace.href = pdf;
    enlace.target = windowOpen;
    enlace.download = "CV-Carolina Araya.pdf";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
})

