/**
 * 
 */

var response = [];
var div;
var i = 0;

document.addEventListener('DOMContentLoaded', function() {
	var button = document.getElementById('button');
	div = document.getElementById('div');
	
	button.addEventListener('click', function () {
		Ajax.request('GET', 'task2.php', true, function(data) {
			response = JSON.parse(data);
			console.log(response);
		});
	}, false);

	
	setInterval(function() {
		console.log(response);
		if (response.length == 0) {
			return;
		}
		console.log(2);
		if (response[i] != 0) {
			console.log(1);
			div.style.backgroundColor = response[i];
			i++;
			console.log(response);
			
		}		
		
		i == 2 ? i = 0 : false;
		
	}, 500);

}, false);



