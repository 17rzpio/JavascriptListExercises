function addingMachine(firstValue,operation,secondValue){
	switch(operation){
		case "+":
			return firstValue+secondValue;
		case "-":
			return firstValue-secondValue;
		case "*":
			return firstValue*secondValue;
		case "/":
			return firstValue/secondValue;
		default:
			return "impossible of calculate";
	}
}