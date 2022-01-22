$(document).ready(function(){
	$('#generate').click(function(){
		$('#code').html('');
		makeMountains('mountain1');
		makeMountains('mountain2');
		makeMountains('mountain3');
	});

	$(document).on({
	    mouseenter: function() {
	        $("#party").fadeIn();
	    },
	    mouseleave: function() {
	        $("#party").fadeOut();
	    }
	}, "#hidden");

	$('#party').click(function(){
		window.intervalID = window.setInterval(doParty, 900);
	});

	$('#new-colors').click(function(){
		newColors();
	});

	function doParty() {
	 	makeMountains('mountain1');
		makeMountains('mountain2');
		makeMountains('mountain3');
		newColors();
	}

	function newColors() {
		var foreground = '#'+Math.floor(Math.random()*16777215).toString(16);
		var midground = getComplementaryColor(foreground);
		var background = getComplementaryColor(midground);
		//console.log(foreground + " " + midground + " " + background);
		$('#mountain1').css('background-color', foreground);
		$('#mountain2').css('background-color', midground);
		$('#mountain3').css('background-color', background);
	}

	function getComplementaryColor(color) {
	    var c = color.slice(1),
	        i = parseInt(c, 16),
	        v = ((1 << 4 * c.length) - 1 - i).toString(16);

	    while (v.length < c.length) {
	        v = '0' + v;
	    }
	    return '#' + v;
	}

	function makeMountains(id){

		var nodes = $('#nodes').val();
		var scale = $('#scale').val();
		var smoothness = $('#smooth').val();
		var string = '';
		var steps = Math.floor(100 / nodes);
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