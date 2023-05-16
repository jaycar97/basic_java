let wheelsnumber = parseInt(prompt("ingresa numero de llantas"));
let transports = prompt("ingresa el tipo de trasnporte").toLowerCase();

if (transports == "" && wheelsnumber == NaN) {
  alert("ingrese datos requeridos");
} else {
  if (wheelsnumber == 4) {
    alert("es un automovil y medio terrestre");
  } else {
    if (wheelsnumber >= 6) alert("es un camion y medio terrestre");
  }
  if (wheelsnumber == 2) {
    alert("es una moto o bicicleta y medio terrestre");
  } else {
    if (wheelsnumber == 1) alert("es un monociclo y vehiculo terrestre.");
  }
  if (wheelsnumber == 0) {
    alert("es un barco y vehiculo acuatico.");
  } else {
    if (wheelsnumber == 20) alert("es un avion y vehiculo aereo");
  }
}