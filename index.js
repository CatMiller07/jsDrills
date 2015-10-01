/*
   Write a function that takes in an array and string and returns either\
   true or false when the string is found in one of the array's elements.
*/


function findString(theArray,theString){
    var result = false;
    
    theArray.forEach(function(element){
       if (element === theString) {
          result = true;
        }
    
    });
    return result;
}
/*
   Write a function that looks for an element in an array and return the
   index of that element.
*/
function getArrayIndex(theArray,theString){
    var  result = 0;   
      result = -1;
    theArray.forEach(function(element,index){
      
       if (element === theString) {
          result = index;
        }
    
    });
    
    if (result >= 0) {
       return result;
    }
     
}

