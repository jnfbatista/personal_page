<?php

// Gets the photos of this class
$url="https://www.fe.up.pt/si/alunos_geral.querylist?p_estado=F&p_cur_sigla=MESHO&P_N_REGISTOS=1000"
$raw = file_get_contents($url); //Get content
// Convert content to utf8
$raw = mb_convert_encoding($raw, 'UTF-8', mb_detect_encoding($raw, 'UTF-8, ISO-8859-1', true));

//Removing newlines
$newlines = array("\t","\n","\r","\x20\x20","\0","\x0B");
$content = str_replace($newlines, "", $raw);

//limit the data to the table with the fotos
$start = strpos($content,'<body >');
$end = strpos($content,'</body>',$start);
$body = substr($content,$start + 7 ,$end-$start);

//Removes scripts so it never outputs the button when there is no students in the course
//$body =  preg_replace("/<script.*<\/script>/", "", $body);
//Removes the h1 headers
//$body =  preg_replace("/<h1.*<\/h1>/", "", $body);
//echo $body;
//corrects the photos url and outputs them 
//echo preg_replace("/(fotografias_service.foto)/", "http://www.fe.up.pt/si/fotografias_service.foto",$body);
$nfile = fopen("ajax-cross-get.txt", "w");
if($nfile != false)
{
	fwrite($nfile, $body);
	fclose($nfile);
}

?>
