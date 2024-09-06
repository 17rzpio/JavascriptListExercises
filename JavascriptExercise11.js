function twelvemonthLeap(anno2){
	let anno = parseInt(anno2);
	if(anno>399){
		if(anno%100==0){
			if(anno%400==0){
				return true;
			}
			else{
				return false;
			}
		}
		else{
			if(anno%4==0){
				return true;
			}
			else{
				return false;
			}
		}
	}
	else{
		if(anno%100==0){
			return false;
		}
		else{
			if(anno%4==0){
				return true;
			}
			else{
				return false;
			}
		}
	}
}