

var count=0;
function counter(){
 return count++;   
}

function resetcounter(){
    let lastcount=count;
    count=0;
    return lastcount +" "+ "the counter has been reset";
}
console.log(counter())
console.log(counter())
console.log(resetcounter())
