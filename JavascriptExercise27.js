function exercise27(){
	var height;
	var height2;
	var height3;
	var annualHeightIncreaseRate;
	var annualHeightIncreaseRate2;
	var count=0;
	height = prompt("altura criança um em centimetro");
	height2=prompt("altura criança dois em centimetro");
	annualHeightIncreaseRate = prompt("taxa crescimento criança um em procentagem");
	annualHeightIncreaseRate2=prompt("taxa crescimento criança dois em porcentagem");
	if(height==height2){
		console.log("as crianças tem mesma altura");
	}
	else{
		if(height2>height){
			if(annualHeightIncreaseRate>annualHeightIncreaseRate2){			
				height3=height2;
				while(height3<height){
					count++;
					height3=height3+=(height2*=(annualHeightIncreaseRate2/100))
				}
				console.log("criança um ultrapassara criança dois em anos",count);
			}
			else{
				console.log("a criança 2 nao ultrassa a criança 1 em altura");
			}			
		}
		else{
			if(annualHeightIncreaseRate2>annualHeightIncreaseRate){
				height3=height;
				while(height3<height2){
					count++;
					height3=height3+=(height*=(annualHeightIncreaseRate/100))
				}
				console.log("criança 2 ultrapassara criança um em anos",count);
			}			
		}
	}
	return;
}