function juro(capital, taxa, tempo){
    let total = capital * taxa * tempo;
    console.log(total);
}

function juroComposto(capital,taxa,tempo){
    let total = capital * ( 1 + taxa/tempo)**(taxa*tempo);
    console.log(total);
}