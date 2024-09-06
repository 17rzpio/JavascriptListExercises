function wage(surfaceWork,actualWage){
	switch(surfaceWork){
		case "A":
			return actualWage+actualWage*0.1;
		case "B":
			return actualWage+actualWage*0.15;
		case "C":
			return actualWage+actualWage*0.2;
		default:
			return "don't exist this surface work";
	}
}