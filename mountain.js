$(document).ready(function(){
	$('input').change(function(){
		makeMountains();
	});

	$('#generate').click(function(){
		makeMountains();
	});

	function makeMountains(){

		var nodes = $('#nodes').val();
		var scale = $('#scale').val();
		var smoothness = $('#smooth').val();
		var string = '';
		var steps = 100 / nodes;
		var step = 0;
		var last = 0;
		console.log(steps);
		
		for (let i = 0; i < nodes; i++) {

			
			string += step + '% ' + getValue() + 'px';
			string +=', '
			step = step + steps;
			last = value;
		}

		string += step + '% ' + getValue() + 'px';
		string +=','; 
		var el = document.getElementById("mountain");
		el.style.clipPath = "polygon("+string.trim()+"100% 100%, 0 100%,0 100%)" ;
		$('#code').html("clip-path: polygon("+string.trim()+"100% 100%, 0 100%,0 100%)");

		function getValue(){
		value = (Math.random() * scale);

		while (Math.abs(last - value) > smoothness) {
			value = (Math.random() * scale);
			
		}
		return Math.floor(value);;
		}
	}
	

	
});

