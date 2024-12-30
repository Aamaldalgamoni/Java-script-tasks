

function rate(){
    let i=prompt("enter the rate:");     //to make theuser insert valu

    if(i<50){
        document.write("Fail");
    }
    else if(i>=50 && i<=59){
        document.write("E");
    }
    else if(i>=60 && i<=69){
        document.write("D");

    }
    else if(i>=70 && i<=79){
        document.write("C");
    }
    else if(i>=80 && i<=89){
        document.write("B");
    }
    else if(i>=90 && i<=100){
        document.write("A");
    }

}

rate();     //here we call the function