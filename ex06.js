function fonctionTrue(a, b){
    return a > b;
}
fonctionTrue(4, 2);


function fonctionChaine(a){
    return (a);
}
fonctionChaine();


function fonctionConcat(a, b){
    return a + b;
}
fonctionConcat();


function fonctionNombre(nombre1, nombre2){
    if (nombre1 > nombre2){
        return ("Le premier nombre est plus grand.");
    } else if (nombre1 < nombre2){
        return ("Le premier nombre est plus petit.");
    } else{
        return ("Les deux nombres sont identiques.");
    }
}
fonctionNombre(1, 2);