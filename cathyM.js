//Question 1
 $('#contact-div').text();

//Question 2

$("#card-text").find("p";  
  
//Question3
$("#card-text").find("p").html("");
//Question4
$(document).ready(function(){
 
  $('#contact-div').on('click',function(){
      $("#card-text").html("");
       });
});

//Question 5
 var newText1= $('<form method=\”post" action="submit.php">'); 
 var newText2=$('<span>Name:</span><input type=”text" name=”name” id="form-nm">');
 var newText3=$('<span>Phone number</span><input type=”text”    name=”phone" id="form-ph">');
 var newText4= $('<span>Email:</span><input type=”text” name="email" id="form-e">');
 var newText5=$('<button type=”submit”>Submit</button></form>');   

   $('#contact-div').on('click',function(){
		  $("#card-text").find("p").html("");
	                       $('.card-content')
	                          .append(newText1,newText2,newText3,newText4,newText5);
   });

//Question 6 
var newText1= $('<form method=\”post" action="submit.php">'); 
 var newText2=$('<span>Name:</span><input type=”text" name=”name” id="form-nm">');
 var newText3=$('<span>Phone number</span><input type=”text”    name=”phone" id="form-ph">');
 var newText4= $('<span>Email:</span><input type=”text” name="email" id="form-e">');
 var newText5=$('<button type=”submit”>Submit</button></form>');   
   $('#contact-div').on('click',function(){
		  $("#card-text").find("p").html("");
	                       $('.card-content')
	                          .append(newText1,newText2,newText3,newText4,newText5);
           $('.card-action').find('a').css({'display':'none'});
   })
   //Question 7
   $(document).ready(function){
    var newText1= $('<form method=\”post" action="submit.php">'); 
    var newText2=$('<span>Name:</span><input type=”text" name=”name” id="form-nm">');
    var newText3=$('<span>Phone number</span><input type=”text”    name=”phone" id="form-ph">');
    var newText4= $('<span>Email:</span><input type=”text” name="email" id="form-e">');
    var newText5=$('<button type=”submit”>Submit</button></form>');   

       $('#contact-div').on('click',function(){
		  $("#card-text").find("p").html("");
	                       $('.card-content')
	                          .append(newText1,newText2,newText3,newText4,newText5);
        $('.card-action').find('a').css({'display':'none'});
        })  
   });