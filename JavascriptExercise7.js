function delta(a, b, c){
    let delta1 = b**2 - 4 * a * c;
    return delta1;
}
function baskara(a, b, c) {
  if (delta(a, b, c) < 0) {
    console.log("delta negativo");
  } else {
    var raizum = (-b + (delta(a, b, c))**(1/2))/(2*a);
    var raizdois = (-b - (delta(a, b, c))**(1/2))/(2*a);
    console.log(raizum, raizdois);
  }
}