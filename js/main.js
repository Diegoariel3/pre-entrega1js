alert("Calculadora de promos de Supermercados");
alert("Ingrese un Número para seleccionar la Promo deseada");
let opcion=Number(prompt("1- 2X1    2- 2do al 50%    3- 2do al 80%"));
let precio =Number(prompt("Ingrese el precio por unidad"));
let cantidad =Number(prompt("Ingrese la cantidad"));
let precioFinal=0;

function esPar () {
    return cantidad % 2 === 0;}   

function precioUnidadFinal () {
   return precioFinal / cantidad
}
function concatenar (){
    return "El valor por unidad es de $" + precioUnidadFinal();
}
switch(opcion){
  case 1:
  console.log('Ha elegido la opcion 2x1');
  if(esPar()){
    precioFinal= precio * cantidad / 2;
}else{
  precioFinal= precio*(cantidad-1) /2 + precio;
}

console.log('el precio final es de $'+ precioFinal);
    break

  case 2:
  console.log('Ha elegido la opcion 2do al 50%');
  if(esPar()){
 precioFinal= cantidad/2 * (precio + precio/2);
}else{
    precioFinal= ((cantidad-1)/2)* (precio + precio/2)+precio;
  }

console.log('el precio final es de $'+ precioFinal);
    break

  case 3:
  console.log('Ha elegido la opcioon de 2do al 80%');

  if(esPar()){
    precioFinal=cantidad/2 *(precio + (precio*0.2));
}else{
    precioFinal= ((cantidad-1)/2)* (precio + precio*2)+precio;
  }

console.log('el precio final es de $'+ precioFinal);
  
}

console.log(concatenar());