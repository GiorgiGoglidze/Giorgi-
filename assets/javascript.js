// var fruit=["ვაშლი", "მსხალი", "ატამი"];
// fruit.pop();
// fruit.pop();
// fruit.pop();
// fruit.push("ატამი");
// fruit.push("მსხალი");
// fruit.push("ვაშლი");
// document.write(fruit);


var welcome;
var dro = new Date();
var month = dro.getMonth();
var day= dro.getDay();
 if ( day=0,5,6 && month<4)  {
   
    welcome="vgundaobt";}

else if (month<4) {
    welcome="ცივა";
}
 
else if ( day=0,5,6 && month<8)  {
   
    welcome="vcuravt";} 

else if  (month<8)
{
    welcome="ოთხი ";}


    else 
    welcome="პარასკევი";
        

document.write(welcome);