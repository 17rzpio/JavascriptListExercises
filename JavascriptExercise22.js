function annuity(month,worth){
	switch(month){
		case "1":
			return worth;
		case "2":
			return worth+worth*0.05;
		case "3":
			return worth*(1+0.05)**2;
		case "4":
			return worth*(1+0.05)**3;
		case "5":
			return worth*(1+0.05)**4;
		case "6":
			return worth*(1+0.05)**5;
		case "7":
			return worth*(1+0.05)**6;
		case "8":
			return worth*(1+0.05)**7;
		case "9":
			return worth*(1+0.05)**8;
		case "10":
			return worth*(1+0.05)**9;
		case "11":
			return worth*(1+0.05)**10;
		case "12":
			return worth*(1+0.05)**11;
	}
	return;
}