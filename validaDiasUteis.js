
var utilDays = [1,2,3,4,5]
var feriados = ["01/01", "05/03", "19/04", "01/05", "20/06", "09/07", "15/08", "12/10","15/11", "20/11", "25/12", "31/12"];
var diasDeCompensacao = 4;

//21/02/2020

function validaFeriadoFinalSemana(data){
let resultado = data; //4 dias uteis
var flag = 0;

	while(flag < 4){ 
		//flag = 4
		data.getDate() + 1;

		var ehFinalDeSemana = !utilDays.some(x => x == data.getDay())
		var ehFeriado = feriados.some(x => x = `{data.getDate()/data.getMonth()}`);
		if(ehFeriado || ehFinalDeSemana)
			continue;

		resultado.getDate() + 1;
		flag++;
	}

	return resultado;
}

var ehFinalSemana = utilDays.some(x => x == data.getDay());
var ehFeriado = feriados.some(y => y = `data.getDate()/data.getMonth()`);


function formatStringData(data){
    var dia = data.split("/")[0];
    var mes = data.split("/")[1];
    var ano = data.split("/")[2];

    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);

}