function numberInWords(figure){
	switch(figure){
		case "1":
			return "One";
		case "2":
			return "two";
		case "3":
			return "three";
		case "4":
			return "four";
		case "5":
			return "five";
		case "6":
			return "six";
		case "7":
			return "seven";
		case "8":
			return "eigth";
		case "9":
			return "nine";
		case "10":
			return "ten";
		case "0":
			return "zero";
		default:
			return "number out interval";
	}
}