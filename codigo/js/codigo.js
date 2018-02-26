$(document).ready(function(){
	$("#formatear").click(function(event) {
	  campoluzformat();
	});
	function campoluzformat(){
		var codigo=$("#codigo").val();//Convertimos a la variable codigo en el textarea y sera la variable que guarde el código que se mostrara
		var codigoAUX;//La variable contendra el codigo con el que estaremos trabajando
		var PA=[[0],[codigo.length]];//Es la variable que guardara las posiciones actuales del lenguaje que estemos codificando



		//REMPLAZAR TODOS LOS <?php por <?



		codigo=primerFormato(codigo);//Eliminamos los espacios y saltos de línea y damos un primer formato a todo el código para que el código que no sea HTML,CSS,JS o PHP también se quede formateado.
		codigoAUX=codigo;//Ponemos todo el código despues del primer formato en el codigo auxiliar.
		codigoAUX=sacarCadenaAFormatear(codigoAUX,false);//Sacamos la cadena que vamos a formatear a continuación.false=primera vez y coger el primer resultado true=segunda vez y cogerá el segundo resultado.
		

		//Bucle
		while(codigoAUX!=""){
			alert(codigoAUX);
			//FORMATEAR
			$("#codigo").val(codigoAUX);
			codigo=guardarCodigo(codigoAUX,codigo);//Guardamos el código formateado en su posición dentro del código final.
			codigoAUX=sacarCadenaAFormatear(codigoAUX,true);//Sacamos la cadena que vamos a formatear a continuación.false=primera vez y coger el primer resultado true=segunda vez y cogerá el segundo resultado.
			

		}


		
		// codigo=primerFormato(codigo);//Eliminamos los espacios y saltos de línea y damos un primer formato a todo el código para que el código que no sea HTML,CSS,JS o PHP también se quede formateado.
		// while(resultado!=-1){
		// 	resultado=buscarLenguajeAFormatar(codigo)//Buscamos cuál es el siguiente lenguaje que nos toca formatear
		// }
		
	}
	function guardarCodigo(codigoAUX,codigo){
		return codigo;
	}

	/* Función que sirve para sacar la cadena que formatearemos.false=primera vez y coger el primer resultado true=segunda vez y cogerá el segundo resultado. */
	function sacarCadenaAFormatear(cadena,repetir){
		var htmlPosicion,cssPosicion,jsPosicion,phpPosicion;//Variables que guardaran la posición del primer resultado encontrado de cada lenguaje
		var PA=[[0],[cadena.length]];//Es la variable que guardara las posiciones actuales del lenguaje que estemos codificando

		/* Sacamos la primera posición de cada uno de los lenguajes dentro de la cadena */
		htmlPosicion=cadena.indexOf("<html>");
		cssPosicion=cadena.indexOf("<style>");
		jsPosicion=cadena.indexOf("<script>");
		phpPosicion=cadena.indexOf("<?");
		alert(htmlPosicion+" "+cssPosicion+" "+jsPosicion+" "+phpPosicion);
		/* Si alguno no esta en la cadena ponerle fuera del condicional */
		if(htmlPosicion==-1){
			htmlPosicion=999999999;
		}
		if(cssPosicion==-1){
			cssPosicion=999999999;
		}
		if(jsPosicion==-1){
			jsPosicion=999999999;
		}
		if(phpPosicion==-1){
			phpPosicion=999999999;
		}

		/* Devolvera 1,2,3 o 4 dependiendo de cuál sea el lenguaje que esta primero en la cadena 1=HTML, 2=CSS, 3=JS y 4=PHP */
		if(htmlPosicion<cssPosicion && htmlPosicion < jsPosicion && htmlPosicion < phpPosicion && htmlPosicion!=999999999){
			PA[0][0]=htmlPosicion;
			PA[1][0]=cadena.indexOf("</html>")+7;
			if(repetir==true){
				return sacarCadenaAFormatear(cadena.substring(PA[0][0]+6,PA[1][0]-7),false);
			}else{
				return cadena.substring(PA[0][0],PA[1][0]);
			}
		}else if(cssPosicion<jsPosicion && cssPosicion<phpPosicion && cssPosicion!=999999999){
			PA[0][0]=cssPosicion;
			PA[1][0]=cadena.indexOf("</style>")+8;
			if(repetir==true){
				return sacarCadenaAFormatear(cadena.substring(PA[0][0]+7,PA[1][0]-8),false);
			}else{
				return cadena.substring(PA[0][0],PA[1][0]);
			}
		}else if(jsPosicion<phpPosicion && jsPosicion!=999999999){
			PA[0][0]=jsPosicion;
			PA[1][0]=cadena.indexOf("</script>")+9;
			if(repetir==true){
				return sacarCadenaAFormatear(cadena.substring(PA[0][0]+8,PA[1][0]-9),false);
			}else{
				return cadena.substring(PA[0][0],PA[1][0]);
			}
		}else if(phpPosicion!=999999999){
			PA[0][0]=phpPosicion;
			PA[1][0]=cadena.indexOf("?>")+2;
			if(repetir==true){
				return sacarCadenaAFormatear(cadena.substring(PA[0][0]+1,PA[1][0]-2),false);
			}else{
				return cadena.substring(PA[0][0],PA[1][0]);
			}
		}
		else{
			return "";//Si devuelve esto significa que ya no queda nada más que formatear.
		}
	}

	/* Función que dara un primer formato a todo el código dejando el código que no sea HTML,CSS,JS o PHP con un formato adecuado */
	function primerFormato(codigo){
		codigo=eliminarHuecos(codigo);//Eliminamos los espacios y saltos de línea
		return codigo;
	}

	/* Función que sirve para borrar todos los espacios en blanco y saltos de línea de una cadena dentro de un textarea. */
	function eliminarHuecos(cadena){
		var cadena2="";//Variable auxiliar para el salto de línea

		/* Eliminamos todos los espacios */
		cadena=$.trim(cadena.replace(/\s*[\r\n]+\s*/g, '\n')
       .replace(/(<[^\/][^>]*>)\s*/g, '$1')
       .replace(/\s*(<\/[^>]+>)/g, '$1'));

		/* Eliminamos todos los saltos de línea */
		cadena2=cadena;
		cadena2=cadena2.replace(new RegExp('\n','g'),"").replace(new RegExp('\r','g'),"");

		return cadena2;
	}
});
