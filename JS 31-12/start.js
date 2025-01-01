//id

let myElement = document.getElementById("myId") // just element becuase id is uniqe
myElement.innerHTML = "changed by JS in Id of the element"

// Name

let myElement2 = document.getElementsByTagName("p")
myElement2.innerHTML = "changeed by JS 2" 
myElement2[1].innerHTML = "changed by JS in Name of element" 

// ClassName

let myElement3 = document.getElementsByClassName("test")
myElement3[0].innerHTML = "Changed the p class by JS"


// className in For Loop

let myElement3 = document.getElementsByClassName("test")
for(let i = 0; i < myElement3.length; i++)
    {
    myElement3[i].innerHTML = "Changed the p class by JS in loop"

}


// query Selector

let myElement4 = document.querySelectorAll("p.testq")
myElement4[0].innerHTML = "changed by JS in query"