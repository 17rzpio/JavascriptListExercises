function pontuacao(listaDeStrings) {
	let meuArray = listaDeStrings.split(" ");
	let record = 0;
	let least=meuArray.length;
	for (let i = 0; i < meuArray.length; i++) {
		if(parseInt(meuArray[i])>record){
			record = meuArray[i];
		}
		if(meuArray[i]<least){
			least = i;
		}
			
	  console.log(meuArray[i]);
	}
	let vetor = [record, least+1];
  return vetor;
}
pontuacao("10 20 20 8 25 3 0 30 31");