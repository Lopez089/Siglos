function centuryFromYear(year) {

	var anoString = year.toString();
    var primeroDosDijitos = anoString.substring(0,2);
    var segundoDosDijitos = anoString.substring(2,4);
    var NumPrimeros = parseInt(primeroDosDijitos);
    var NumSegundos = parseInt(segundoDosDijitos);

    var primeroDijitos = anoString.substring(0,1);
    var segundoDosDijito = anoString.substring(1,3);
    var tresNumPrimeros = parseInt(primeroDijitos);
    var tresNumSegundos = parseInt(segundoDosDijito);

    if (anoString.length == 4) {
    	if (NumSegundos == 00) {
     		return NumPrimeros
    	 }
    	 else{
     		return NumPrimeros +1
     	}
 	}
 	else if (anoString.length == 3) {
 		if (tresNumSegundos == 00) {
     		return tresNumPrimeros
    	 }
    	 else{
     		return tresNumPrimeros +1
     	}
 	}
 	else {

 		return 1
 	}  

}
 
centuryFromYear(200)