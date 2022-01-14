$(document).ready(function(){
	$('#generate').click(function(){
		$('#code').html('');
		makeMountains('mountain1');
		makeMountains('mountain2');
		makeMountains('mountain3');
	});

	function makeMountains(id){

		var nodes = $('#nodes').val();
		var scale = $('#scale').val();
		var smoothness = $('#smooth').val();
		var string = '';
		var steps = 100 / nodes;
		var step = 0;
		var last = 0;
		
		for (let i = 0; i < nodes; i++) {
			string += step + '% ' + getValue() + 'px';
			string +=', '
			step = step + steps;
			last = value;
		}

		string += step + '% ' + getValue() + 'px';
		string +=','; 
		var el = document.getElementById(id);
		
		el.style.clipPath = "polygon("+string.trim()+"100% 100%, 0 100%,0 100%)" ;

		$('#code').append("#"+id+" { clip-path: polygon("+string.trim()+"100% 100%, 0 100%,0 100%) }\n\n");

		function getValue() {
			value = (Math.random() * scale);

			while (Math.abs(last - value) > smoothness) {
				value = (Math.random() * scale);
			}

			return Math.floor(value);

		}
	}
});