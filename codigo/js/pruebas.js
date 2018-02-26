$(document).ready(function(){
	  campoluzformat();
	function campoluzformat(){
	    var texto = "<html>hola<style>hola2<script>hola3<style>hola4</style></script></style></html>";
	    var txtSep=texto.indexOf("<style>");
	    var txtSepFinal=texto.indexOf("<style>");
	    console.log(txtSep);

	}
});
// <html>   1    /6
// hola
// <style>   2    /3
// hola2
// <script>   3   /2
// hola3
// <style>   4  /1



// hola4
// </style>  /1
// </script>  /2
// </style>  /3



// <script>   5 /4
//<style>  6  /5




//</script> /4
//</style>  /5
// </html>   /6



// indexOf(searchvalue, [start]): 
// Returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs. This method is case sensitive!
// var str="Hello world, welcome to the my blog.";
// var n=str.indexOf("welcome");

// // lastIndexOf(searchvalue, [start]):

// substring(from, [to]): The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string. This method extracts the characters in a string between "from" and "to", not including "to" itself.
// 1
// var str="Hello world!";
// 2
// var n=str.substring(2,3)
// 3
 
// 4
// //Output will be "l"

// toLowerCase(): The toLowerCase() method converts a string to lowercase letters.
// 1
// var str="HELLO WoRld!";
// 2
// str = str.toLowerCase();
// 3
// //Output will be "hello world!"


// replace(searchvalue, newvalue): The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
// 1
// var str="Visit jQuery Blog!";
// 2
// var n = str.replace("jQuery ","jQuery By Example ");
// 3
 
// 4
// //Output will be "Visit jQuery By Example Blog!"


// slice(start, [end]): The slice() method extract parts of a string and returns the extracted parts in a new string. Use the start and end parameters to specify the part of the string you want to extract. The first character has the position 0, the second has position 1, and so on.
// 1
// var str="Visit jQuery Blog!";
// 2
// var n = str.slice(6,12);
// 3
 
// 4
// //Output will be "jQuery"




// $(document).ready(function(){
// 	$("#formatear").click(function(event) {
// 	  campoluzformat();
// 	});
// 	function campoluzformat(){
// 		var codigo=$("#codigo").val();//Convertimos a la variable codigo en el textarea
// 		var codigoFormato; //Es la variable que tendra el código que se esta formateando actualmente
// 		var formato; //Es la variable que tendrá el id del lenguaje encontrado en primer lugar
// 		codigo=eliminarHuecos(codigo);//Eliminamos los espacios y saltos de línea
// 		formato=sacarFormato(codigo);//Buscamos el lenguaje al que le daremos formato primero
		/* Si no tiene HTML,CSS,JS o PHP se dejara con el formato basico */
		// alert(formato);
		// if(formato<1 || formato>4){
		// 	$("#codigo").val(codigo);
		// }else{
		// 	codigoFormato=obtenerCadena(codigo,formato);
		// 	alert(formato);
		// 	// while(formato!=5){
		// 	// 	formato=sacarFormato(codigoFormato);
		// 	// 	alert("formato:"+formato);
		// 	// 	if(formato!=5){
		// 	// 		alert("COSDIGOFORMATO1:"+codigoFormato);
		// 	// 		codigoFormato=obtenerCadena(codigoFormato,formato);
		// 	// 		alert("CODIGOSORMSAIF2:"+codigoFormato);
		// 	// 	}
		// 	// }
		// 	//codigoSobrante

		// 	$("#codigo").val(codigoFormato);
		// }
		




		
	// }

	// /* Función que sigue buscando el código a formatear mientras el codigo actual a formatear tenga otro código que pueda ser formateado de otro lenguaje dentro de el mismo */
	// function masFormatos(cadena){
	// 	var formato; //Es la variable que tendrá el id del lenguaje encontrado en primer lugar
	// 	var codigoFormato; //Es la variable que tendra el código que se esta formateando actualmente

	// 	formato=sacarFormato(cadena);
	// 	if(formato==5){
	// 		codigoFormato=obtenerCadena(cadena,formato);

	// 	}
		
	// }

	/* Función que sirve para borrar todos los espacios en blanco y saltos de línea de una cadena dentro de un textarea. */
	// function eliminarHuecos(cadena){
	// 	var cadena2="";//Variable auxiliar para el salto de línea

	// 	/* Eliminamos todos los espacios */
	// 	cadena=$.trim(cadena.replace(/\s*[\r\n]+\s*/g, '\n')
 //       .replace(/(<[^\/][^>]*>)\s*/g, '$1')
 //       .replace(/\s*(<\/[^>]+>)/g, '$1'));

	// 	/* Eliminamos todos los saltos de línea */
	// 	cadena2=cadena;
	// 	cadena2=cadena2.replace(new RegExp('\n','g'),"").replace(new RegExp('\r','g'),"");

	// 	return cadena2;
	// }

	/* Función que sirve para sacar el lenguaje de programación al que le daremos primero formato */
	// function sacarFormato(cadena){
	// 	var htmlPosicion,cssPosicion,jsPosicion,phpPosicion;//Hacemos las variables que vamos a usar locales

	// 	/* Sacamos la primera posición de cada uno de los lenguajes dentro de la cadena */
	// 	htmlPosicion=cadena.indexOf("<html>");
	// 	cssPosicion=cadena.indexOf("<style>");
	// 	jsPosicion=cadena.indexOf("<script>");
	// 	phpPosicion=cadena.indexOf("<?");

	// 	/* Si alguno no esta en la cadena ponerle fuera del condicional */
	// 	if(htmlPosicion==-1){
	// 		htmlPosicion=999999999;
	// 	}
	// 	if(cssPosicion==-1){
	// 		cssPosicion=999999999;
	// 	}
	// 	if(jsPosicion==-1){
	// 		jsPosicion=999999999;
	// 	}
	// 	if(phpPosicion==-1){
	// 		phpPosicion=999999999;
	// 	}
	// 	alert(htmlPosicion+" "+cssPosicion+" "+jsPosicion+" "+phpPosicion);

		/* Devolvera 1,2,3 o 4 dependiendo de cuál sea el lenguaje que esta primero en la cadena 1=HTML, 2=CSS, 3=JS, 4=PHP */
	// 	if(htmlPosicion<cssPosicion && htmlPosicion < jsPosicion && htmlPosicion < phpPosicion && htmlPosicion!=999999999){
	// 		return 1;
	// 	}else if(cssPosicion<jsPosicion && cssPosicion<phpPosicion && cssPosicion!=999999999){
	// 		return 2;
	// 	}else if(jsPosicion<phpPosicion && jsPosicion!=999999999){
	// 		return 3;
	// 	}else if(phpPosicion!=999999999){
	// 		return 4;
	// 	}else{
	// 		return 5;
	// 	}
	// }

	/* Función que saca el contenido de entre 2 palabras dadas */
	// function obtenerCadena(contenido,formato){
	// 	var inicio,fin; //Variables donde ira la primera y última palabra a sacar con el split ellas no incluidas
		/* Sacamos las palabras de inicio y fin */
		// switch(formato) {
		//     case 1:
		//     	inicio="<html>";
		//     	fin="</html>";
		//         break;
		//     case 2:
		//     	inicio="<style>";
		//     	fin="</style>";
		//         break;
		//     case 3:
		//     	inicio="<script>";
		//     	fin="</script>";
		//         break;
		//     case 4:
		//     	inicio="<?";
		//     	fin="?>";
		//         break;
		// }
		/* Sacamos el texto a formatear */
// 	    if(contenido!=""){	
// 	    	contenido=contenido.split(inicio);
// 	    	contenido=contenido[1].split(fin);
// 	    	return contenido[0];
// 	    }else{
// 	    	return "Inserte algo de código";
// 	    }
// 	}
// });

// <html
// hola
// <style>
// hola2
// <script>
// hola3
// <style>
// hola4
// </style>
// </script>
// </style>
// </html>

	// /* Función que sigue buscando el código a formatear mientras el codigo actual a formatear tenga otro código que pueda ser formateado de otro lenguaje dentro de el mismo */
	// function masFormatos(cadena){
	// 	var formato; //Es la variable que tendrá el id del lenguaje encontrado en primer lugar
	// 	var codigoFormato; //Es la variable que tendra el código que se esta formateando actualmente

	// 	formato=sacarFormato(cadena);
	// 	if(formato==5){
	// 		codigoFormato=obtenerCadena(cadena,formato);

	// 	}
		
	// }


// 	<html>
// <style>
// </style>
// <script>
// </script>
// <?php
// echo "<script>alert("HOLA");</script>";
// echo "<style>.color{text-weight:bold;}</style>";
// ?>
// </html>