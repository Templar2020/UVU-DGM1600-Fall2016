var key = 0;

var inventory = {
  keys: 0,
  coins: 0,
  apples: 0,
  magic_Cloak:"yes please"
  
  
}
function checkInv(){
  alert(
    "Keys = "+inventory.keys+" "+
    "Coins = "+inventory.coins+" "+
    "Apples = "+inventory.apples+" "+
    "Magic Cloak = "+inventory.magic_Cloak
    
  )
}

alert("You see a key on the ground");
var choice = prompt("what will you do? (pick up key or move on)");

if(choice =="pick up key"){
  inventory.keys = 1;
  console.log("Keys = "+inventory.keys);
}
else if(choice=="Check"){
   checkInv();
}
else
  {
    alert("You move on!");
    console.log("Keys = "+inventory.keys);    
  }



alert("You see a apple on the ground");
var choice = prompt("what will you do? (pick up apple or move on)");

if(choice =="pick up apple"){
  inventory.apples = 1;
  console.log("Apples = "+inventory.apples);
}
else if(choice=="Check"){
   checkInv();
}
else
  {
    alert("You move on!");
    console.log("Apples = "+inventory.apples);
  }



