function pow(base, expoente) {
    for(i=0;i<expoente-1;i++){
        base = base * base;
    }
    console.log(base);
}
