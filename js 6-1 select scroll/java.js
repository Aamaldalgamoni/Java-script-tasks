

function myFunction(){
    let x=document.getElementById("Jordan");
    let y=document.getElementById("Palestine");
    let z=document.getElementById("mySelect").value;
    


if(z=="Jordan"){
    x.style.display="block"
    y.style.display="none"
}else if(z=="Palestine"){
    x.style.display="none"
    y.style.display="block"
}
else{
    x.style.display="none"
    y.style.display="none"
}

}