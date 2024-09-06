function healthInsurance(age){
	if(age<10)
		return 100+80;
	if(age<30)
		return 100+50;
	if(age<60)
		return 100+95;
	if(age>=60)
		return 100+130;
}