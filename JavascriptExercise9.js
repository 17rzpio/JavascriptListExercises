function nomeDaFuncao(nota) {
	if(parseInt(nota)<38)
		return "reprovado";
  let nota2 = parseInt(nota)%5;
  let nota3;
  if(nota2>2){
	nota3 = Math.floor(nota / 5)
	nota3=nota3*5+5;
  }
  else{
	nota3 = Math.floor(nota / 5);
	nota3=nota3*5;
  }
	console.log(nota3);
	return "aprovado";
}