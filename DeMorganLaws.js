/* write a card picking function that outputs cards from a standard deck:
       ex. Ace of Clubs,
	       Queen of Hearts,
		   10 of Diamonds,
		   8 of Spaces
There are 4 suits: Hearts, Diamonds, Clubs, Spades
There are 13 cards for each suit: Ace, 2-10, King, Queen, Jack
*/


function getCardSuit(){
  var s0 = Math.random() *3;
	  s  = Math.round(s0) + 1;
  var suit ='';
	
  if (s === 1) suit = 'Hearts';
  else if (s === 2) suit = 'Diamonds';
  else if (s === 3) suit = 'Clubs';
  else  suit = 'Spades';
	
  return suit;
};

function selectCard(){
  var cardType0 = Math.random() * 12;  	
  var cardType = Math.round( cardType0 ) + 1;  
  var card ='';
	
  mySuit = getCardSuit();
  console.log('the suit is '+ mySuit);	
	
  if (cardType === 1) card = 'Ace';
   else if (cardType >=2 && cardType <=10) card = cardType;
   else if (cardType ===11)  card = 'Jack';
   else if (cardType === 12)  card = 'Queen';	
   else   card = 'King';
	
   card = card + ' of ' + mySuit; 	
  return card;
};


 function dieRoll(){
	 //rolls a die and returns a number bet 1 and 6
   var die0 = Math.random() * 5;  	
   var  roll = Math.round( die0 ) + 1; 	 
	 
   return roll;
	 
 }  

 function diceRoll(numDice){
	var res = [];
	 
   for(var i = 0; i < numDice; i++){
	   res.push( dieRoll() );
   }
	 
   return res;	 
	 
 }

function swapEnds(arr){
	//swap the first and last elements of the input array
	//then return
	var hold = "";
	 
	hold = arr[0];
	arr[0] = arr[arr.length-1];
	arr[arr.length-1] = hold;
	
	return arr;
	
}