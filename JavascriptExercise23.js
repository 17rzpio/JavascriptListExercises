function testGrade(code,firstGrade,secondGrade,thirdGrade){
	if(firstGrade>secondGrade)
		if(firtsGrade>thirdGrade){
			firstGrade=firstGrade*0.4;
			secondGrade=secondGrade*0.3;
			thirdGrade=thirdGrade*0.3;
			return (firstGrade+secondGrade+thirdGrade);
		}
		else
			if(secondGrade>thirdGrade){
				secondGrade=secondGrade*0.4;
				firstGrade=firstGrade*0.3;
				thirdGrade=thirdGrade*0.3;
				return (firstGrade+secondGrade+thirdGrade);
			
			}
			else{
				thirdGrade=thirdGrade*0.4;
				firstGrade=firstGrade*0.3;
				secondGrade=secondGrade*0.3;
				return (firstGrade+secondGrade+thirdGrade);
			
			}
	else
	{
		if(secondGrade>thirdGrade){
				secondGrade=secondGrade*0.4;
				firstGrade=firstGrade*0.3;
				thirdGrade=thirdGrade*0.3;
				return (firstGrade+secondGrade+thirdGrade);
			
			}
			else{
				thirdGrade=thirdGrade*0.4;
				firstGrade=firstGrade*0.3;
				secondGrade=secondGrade*0.3;
				return (firstGrade+secondGrade+thirdGrade);
			
			}
	}
		
	return;
}
function result(code,firstGrade,secondGrade,thirdGrade){
	while(code>=0){
		var result2 = testGrade(code,firstGrade,secondGrade,thirdGrade);
		if(result2>=5)
			console.log(code,firstGrade,secondGrade,thirdGrade,result2,"APROVADO");
		else
			console.log(code,firstGrade,secondGrade,thirdGrade,result2,"REPROVADO");
		code = prompt("Digite o seu code:");
		firstGrade = prompt("Digite o seu firstGrade:");
		secondGrade = prompt("Digite o seu secondGrade:");
		thirdGrade = prompt("Digite o seu thirdGrade:");
	}

}