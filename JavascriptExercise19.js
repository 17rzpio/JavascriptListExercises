function cafeteriaOrder(requestCode,amount){
	switch(requestCode){
		case "100":
			return 3*amount;
		case "200":
			return 4*amount;
		case "300":
			return 5.5*amount;
		case "400":
			return 7.5*amount;
		case "500":
			return 3.5*amount;
		case "600":
			return 2.8*amount;
		default:
			return "the product does not exist";
	}
}