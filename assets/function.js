// function display (x,test)
// {
//     var message = test(x);
//     document.write(message);
// }

// function welcome (time)
// {if (time<10)
//     return "morning"
//     else if(time>15)
//     return "good after"
//     else 
//     return "eveningS"


// }


// display (11,welcome)



// function display(x,y){
//     if(y===undefined) y=x;
//     var z= x * y;
//     document.write(x + "</br>" +y + "</br>" +z);
// }
// display(6,7);

// var y=5;
// var z = square(y);
// function square(x){
//     return x*x;
// }
// document.write(y+ "</br>" +z);



function.display


// function display (testmessage,x) {
//     var message = testmessage();
//      document.write(message);
//  }
//  function welcomeMesasge(time){
//      if (time<12)
//      return "Good Morning";
//      else if (time<18)
//      return "Good Afternoon";
//      else
//      return "Good Evening";
//  }
//  function ledzepp(sallary){
//  if (sallary<900)
//  return "bad ";
//  else if (sallary>900)
//  return "good";
//  else
//  return "veryg";
// }


//  display (ledzepp,1000);
//  display (welcomeMesasge,14);


var rockbands =["Led zeppelin", "Pink Floyd",  "Deep Purple", "The beatles","The Doors" ] ;

for (var i =0; i < rockbands.length; i++){
console.log(rockbands[i]);
}




function display (brad,x) 
    {
        var Price = brad(x);
        alert(Price);
     }
     
function pricemessage(bradPrice)
     {
         
         if (bradPrice<=1)
         return "პური იაფია";
         else if (bradPrice>1 && bradPrice<=2)
         return "პურის ფასი ნორმალურია";
         else if (bradPrice>2 && bradPrice<4)
         return "პურის ფასი ძვირია";
         else
         return "პურის ფასი ძალიან ძვირია ";
     }
     var str1 = prompt("პურის ფასი",)
     display (pricemessage,str1);



var mas = [ 15,53,22,198,10,28,16,70,33,951];
var result =mas.filter ((n) => n%2 ==1)
document.write(result);
