/*
 * This is where magic happens
 *
 */

function update(category) {


	if($('#main').is(":hidden") ) {
		$('#main').slideDown('slow', 
				function() {
				$('#content').fadeOut('fast', function() {
					$('#content').css('display', 'none');
					update_content(category);
					}
					);
				}
				);
	} else {
		$('#content').fadeOut('fast', function() {
				$('#content').css('display', 'none');
				update_content(category);
				}
				);
	}
}

function update_content(category ) {

	var filename =  "js/" + category + ".txt";

	var xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("content").innerHTML=xmlhttp.responseText;
			$('#content').fadeIn();
		}
	}

	// Formats the source of the information,
	xmlhttp.open("GET", filename , true);

	// Sends request
	xmlhttp.send();
}

