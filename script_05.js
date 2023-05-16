//condicionales - if/ else -  switch;

//algoritmo que dependiendo si el susuario es mayor de 18 años  habilita un catalogo de peliculas violentas;
//si el pais es china asi sea mayor de 18 no habilite el catalogo.

let age = prompt("ingresa tu edad");
let country = prompt("ingresa tu pais")


if (age>= 18 || country != "china") {
alert("se ha desbloqueado el catologo de pelis violentas");
} else {
alert("No tienes permisos para ver este catalogo")
}


/**
 *>:indicar que es mayor a algo
*<menor que algo
*==:comparar si un valor es igual al otro
>=si es mayor o igual
<si es menor o igual
* != : diferente
*operador logicos
*&&: Y
*||:O
 */