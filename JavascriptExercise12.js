function factorial(installment){
	if(installment==0){
		return 1;
	}
	else{
		return installment*factorial(installment-1);
	}

}