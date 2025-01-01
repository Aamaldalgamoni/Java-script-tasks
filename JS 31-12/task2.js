




function myFunction1(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("p1").style.fontFamily = listValue;
  }
  function myFunction2(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("p1").style.fontSize = listValue;
  }

// function fantasy1(){
//     document.getElementById("p1").style.fontFamily="Fantasy";
// }




// document.getElementById("v4").addEventListener("click",function(){

//     document.getElementById("p1").style.fontSize="15px";
// })
// document.getElementById("v2").addEventListener("click",function(){
//     document.getElementById("p1").style.fontFamily="Fantasy";
// })


document.getElementById("box1").addEventListener("click",function(){

document.getElementById("p1").style.fontFamily="italic";

}
)
document.getElementById("box2").addEventListener("click",function(){
    document.getElementById("p1").style.fontWeight="Bold";
})
document.getElementById("box3").addEventListener("click",function(){

    document.getElementById("p1").style.textDecorationLine="underline";
})