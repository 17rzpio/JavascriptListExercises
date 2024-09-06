function jotBanknote(worth){
	let hundred;
	let fifth;
	let remainder;
	let twenth;
	let ten;
	let five;
	let two;
	if(worth>=100){
		hundred=~~(worth/100);
		remainder=worth%100;
	}
	else
		remainder = worth;
	if(remainder>=50){
		fifth=1;
		remainder=remainder%50;
	}
	if(remainder>=20){
		twenth=~~(remainder/20);
		remainder=worth%20;
	}
	if(remainder>=10){
		ten=1;
		remainder=remainder%10;
	}	
	if(remainder>=5){
		five=1;
		remainder=remainder%5;
	}	
	if(remainder>=2){
		two=~~(remainder/2);
	}
	return	"notas de 100: "+hundred+" notas de 50: "+fifth+" notas de 20: "+twenth+" notas de 10: "+ten+" notas de cinco: " + five+" notas de 2: "+two;
}
