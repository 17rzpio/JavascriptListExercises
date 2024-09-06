function weekday(titular){
	switch(titular){
		case 1:
		case 7:
			return "weekend";
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			return "business-day";
		default:
			return "ill-founded day";
	}
}