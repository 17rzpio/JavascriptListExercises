function triangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("equilatero");
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    console.log("isosceles");
  } else {
    console.log("escaleno");
  }
}