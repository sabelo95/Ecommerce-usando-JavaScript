// codigo para añadir nuevas filas a la tabla y añadir los elementos que tengo en el local storage

 
function agregarTablas(){

if(sessionStorage.length>=1){
   for (i=0; i<=(JSON.parse(sessionStorage.getItem('carrito')).proteinas.length-1) ; i++){
    let fila= document.createElement('tr');
    let columna1=document.createElement("td");
    let columna2=document.createElement("td");
    let columna3=document.createElement("td");
    let columna4=document.createElement("td");
    let columna5=document.createElement("td");
    columna1.innerHTML='<img style="width: 120px; height: 120px;"  src="" alt="Imagen del producto" id="imagen-producto'+i+'">'
    
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    fila.appendChild(columna3);
    fila.appendChild(columna4);
    fila.appendChild(columna5);
    cuerpoTabla=document.getElementById("body-tabla")
    cuerpoTabla.appendChild(fila)
    document.getElementById('imagen-producto'+i).src=JSON.parse(sessionStorage.getItem('carrito')).proteinas[i].imagen
    columna2.innerHTML=JSON.parse(sessionStorage.getItem('carrito')).proteinas[i].name
    columna3.innerHTML=JSON.parse(sessionStorage.getItem('carrito')).proteinas[i].price
    columna4.innerHTML=parseInt(JSON.parse(sessionStorage.getItem('carrito')).cantidades[i])
    columna5.innerHTML=parseInt(columna3.innerHTML)*parseInt(JSON.parse(sessionStorage.getItem('carrito')).cantidades[i])
    columna3.classList.add("precioUnitario")
    columna5.classList.add("subtotal")
   }

} 
}





agregarTablas()
// calculo total del valor de los producto
function calculoTotal(){

let suma=0 
for(j=0;j<document.getElementsByClassName("subtotal").length;j++){
    suma=suma+parseInt(document.getElementsByClassName("subtotal")[j].innerHTML)
}

document.getElementsByClassName("precio-total")[0].innerHTML=parseInt(document.getElementsByClassName("precio-total")[0].innerHTML)+suma
}

calculoTotal()
