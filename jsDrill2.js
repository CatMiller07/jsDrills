/* write a function which receives an array as input and
returns a string representing each element in the array,
separated by spaces.
*/

function concatArr(theArray){
    var str="";
    
    theArray.forEach(function(element){
            str = str + " "+ element;     
    });
    return str;
}

/*
*/
function appendToElement(elem,num){
    for (var i=0; i < num; i++){
        $(elem).append("<h1>Title "+ i +"</h>");
    }
}
