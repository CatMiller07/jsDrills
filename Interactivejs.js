var readline = require('readline');
var rl = readline.createInterface({input:process.stdin,
								    output:process.stdout});

rl.question('whats your name?', function(answer){
	console.log('Your name is ' + answer);
	
})