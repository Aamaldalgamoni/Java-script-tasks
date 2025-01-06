

let x=document.getElementById("Name");
x.onkeyup=function(){
    localStorage.setItem("Name",x.value);
}

let x1=document.getElementById("Age");
x1.onkeyup=function(){
    localStorage.setItem("Age",x1.value);
}

let x2=document.getElementById("Gender");
x2.onkeyup=function(){
    localStorage.setItem("Gender",x2.value);
}
let x3=document.getElementById("Birth Date");
x3.onclick=function(){
    localStorage.setItem("Birth Date",x3.value);
}
let x4=document.getElementById("Upload Your Image");
x4.onclick=function(){
    localStorage.setItem("Upload Your Image",x4.file);
}
let x5=document.getElementById("Description");
x5.onkeyup=function(){
    localStorage.setItem("Description",x5.value);
}
let x6=document.getElementById("Major & University");
x6.onkeyup=function(){
    localStorage.setItem("Major & University",x6.value);
}



let x7=document.getElementById("html1");
x7.onclick= function(){
    localStorage.setItem("Programming language",x7.value)
}
// let x7=document.getElementById("html1");
// x7.addEventListener("click",function(){
//   localStorage.setItem("Programming Language","html");
//   localStorage.setItem=

    
// })
// x7.onclick=function(){
//     localStorage.setItem("Programming Language","html");
    
// }
// let x77=document.getElementById("css1");
// x7.onclick=function(){
//     localStorage.setItem("Programming Language","css");
// }


let x77=document.getElementById("css1");
x77.onclick= function(){
    localStorage.setItem("Programming language", +"  "+x7.value +"   "+x77.value)
}
let x777=document.getElementById("js");
x777.onclick= function(){
    localStorage.setItem("Programming language",+"  "+x7.value +"   "+x77.value+" "+x777.value)
}


let x8=document.getElementById("Silblings Number");
x8.onkeyup=function(){
    localStorage.setItem("Silblings Number",x8.value);
}
let x9=document.getElementById("Description of Silblings");
x9.onkeyup=function(){
    localStorage.setItem("Description of Silblings",x9.value);
}






function myfunction(event){
    event.preventDefault();
    // document.write(localStorage.getItem("Name"+"  "+"Age")
    


}