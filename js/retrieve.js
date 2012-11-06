function retrieve(url) {

	var storage = document.getElementById("storage");
	var xhr = createXHR();

	xhr.onreadystatechange=function()
	{ 
		if(xhr.readyState == 4)
		{
			if(xhr.status == 200)
			{
				document.getElementById("main").innerHTML=xhr.responseText;
			}
		} 
	}; 


	if(AjaxCaching == false)
		url = url + "?nocache=" + Math.random();

	xhr.open("GET", url , true);
	xhr.send(null); 

}



function getStudents() {
	alert("getting students");
	/*
	// Create request object
	xmlhttp=new XMLHttpRequest();

	xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
	document.getElementById("main").innerHTML=xmlhttp.responseText;
	}
	}

	// Formats the source of the information,
	xmlhttp.open("GET","https://www.fe.up.pt/si/alunos_geral.querylist?p_estado=F&p_cur_sigla=MESHO&P_N_REGISTOS=1000", true);

	// Sends request
	xmlhttp.send();
	*/
	var xhr = createXHR();

	var script = "get_students.php";
	var filename = "ajax-cross-get.txt";

		xhr.onreadystatechange=function()
		{ 
			if(xhr.readyState == 4)
			{
				alert("pong");
				retrieve(filename);
				document.getElementById("main").innerHTML=xmlhttp.responseText;
			}
		}; 
	xhr.open("POST", script, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send(null); 


}
