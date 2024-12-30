

/*function printnumberpattern(n) {               //here is print 8 lines in each line many numbers
var number=1;                        
for(let i=1 ; i<=n ; i++){
    for(let j=1; j<=i; j++){
        document.write(number);
        number++;
    }
    document.write("<br>");
    
}
    
}
printnumberpattern(8);*/




function printnumberpattern(n) {               //here is print 8 lines in each line many numbers with the oreganal 
    var number=1;                        
    for(let i=1 ; i<=n ; i++){
        for(let j=1; j<=i; j++){
            document.write(j +" ");
          
        }
        document.write("<br>");
        
    }
        
    }
    printnumberpattern(8);