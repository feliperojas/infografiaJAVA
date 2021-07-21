var p = document.getElementsByClassName("paragraph");
var c = document.getElementsByClassName("concept");

function desplegar(apuntador){
    for (let index = 0; index < c.length; index++) {
        c[index].style.visibility="hidden";   
    }
    c[apuntador].style.visibility="visible";
    p[apuntador].style.visibility="visible";
    c[apuntador].style.width= "80%";
    c[apuntador].style.height= "120px";
    c[apuntador].style.background = "rgb(209, 223, 142)";


}
function contraer(apuntador){
    for (let index = 0; index < c.length; index++) {
        c[index].style.visibility="visible";
        p[index].style.visibility="hidden";        
    }
    c[apuntador].style.width= "60%";
    c[apuntador].style.height= "50px";
    c[apuntador].style.background ="white";

}