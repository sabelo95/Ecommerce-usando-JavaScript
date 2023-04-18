

    
    // el siguiente codigo lo que hace es aumentar o reducir la cantidad de un producto al pulsar los botones

    function cambiarCantidad(boton, operacion) {
      var inputCantidad = boton.parentNode.querySelector(".input-cantidad");
       var cantidadActual = parseInt(inputCantidad.value);
      var nuevaCantidad = operacion === "suma" ? cantidadActual + 1 : cantidadActual - 1;
      if (nuevaCantidad >= 0) {
         inputCantidad.value = nuevaCantidad;
    }
    }
     
     var botonesMenos = document.querySelectorAll(".boton-menos");
    for (var i = 0; i < botonesMenos.length; i++) {
       botonesMenos[i].addEventListener("click", function() {
         cambiarCantidad(this, "resta");
       });
     }
     
     var botonesMas = document.querySelectorAll(".boton-mas");
    for (var i = 0; i < botonesMas.length; i++) {
      botonesMas[i].addEventListener("click", function() {
         cambiarCantidad(this, "suma");
       });
     }

     // el siguiente codigo lo que hará es aumentar el contador en añadir carrito

     function anadirAlCarrito(){
       for (var j=0; j<document.getElementsByClassName("boton-anadir").length; j++){
         (function (j){
         document.getElementsByClassName("boton-anadir")[j].addEventListener("click", () =>{
           
           if(document.getElementById("contador-carrito").innerHTML == '' ){
             document.getElementById("contador-carrito").innerHTML=0
            
           }
           document.getElementById("contador-carrito").innerHTML =parseInt(document.getElementById("contador-carrito").innerHTML) + parseInt(document.getElementsByClassName("input-cantidad")[j].value)

         })
       })(j);
       }
     }

     anadirAlCarrito();



     //definiendo clases

     class Protein {
       constructor(name, weight, servingSize, calories, proteinPerServing) {
         this.name = name;
         this.weight = weight; // En libras (lb)
         this.servingSize = servingSize; // En gramos (g)
         this.calories = calories;
         this.proteinPerServing = proteinPerServing; // En gramos (g)
       }
       
     
       getProteinRatio() {
         return this.proteinPerServing / this.servingSize;
       }
     }

     
     
     
     

     const goldWhey5lb = new Protein('Gold Whey 5 lb', 5, 30, 120, 24);
     const goldWhey10lb = new Protein('Gold Whey 10 lb', 10, 30, 120, 24);
     const goldWhey2lb = new Protein('Gold Whey 2 lb', 2, 30, 120, 24);
     const seriousMass = new Protein('Serious Mass', 12, 334, 1250, 50, 250);
     const bipro3lb = new Protein('BiPro 3 lb', 3, 25, 80, 20);
     const bipro2lb = new Protein('BiPro 2 lb', 2, 25, 80, 20);
     const bipro5lb = new Protein('BiPro 5 lb', 5, 25, 80, 20);
     const goldIsolate = new Protein('goldIsolate 5 lb', 5, 31, 110, 25);
     const smartGainer = new Protein('smartGainer 13 lb', 13, 100, 920, 44);

     //añadiendo nuevas proteinas

     var proteinas = [goldWhey10lb,goldWhey5lb,goldWhey2lb,seriousMass,bipro3lb,bipro2lb,bipro5lb,goldIsolate,smartGainer];
     function agregarProteina(){
     var agregar=prompt("¿quieres agregar una nueva proteina?")
     while (agregar.toUpperCase()=="SI"){
       var nombreProteina=prompt("Ingresa nombre")
       var pesoProteina= parseInt(prompt("ingresa peso en libras"))
       var TamanoServicio=parseInt(prompt("ingresa tamaño servicio en gramos"))
       var cantidadCalorias=parseInt(prompt("ingresa cantidad de calorias por porcion"))
       var proteinasProteina=parseInt(prompt("ingresa cantidad de proteina por porcion"))
       
      var Proteinas = new Protein (nombreProteina,pesoProteina,TamanoServicio,cantidadCalorias,proteinasProteina)
        proteinas.push(Proteinas)
        alert("tu proteina ingresada es " + JSON.stringify(proteinas[proteinas.length-1]))
        agregar=prompt("¿quieres agregar una nueva proteina?")
      }

     }

     document.getElementById("anadir-producto").addEventListener("click",agregarProteina)

     
function conoceProteina(){
     var nombre = prompt("Escribe tu nombre por favor");
var apellido = prompt("Escribe tu apellido por favor");

var masa = "";
var estatura = "";



// ciclo while para validar la variable masa
while (isNaN(parseInt(masa))) {
 masa = prompt("Escribe tu peso en kilogramos; solo numeros");
}

// ciclo while para validar la variable estatura
while (isNaN(parseInt(estatura))) {
 estatura = prompt("Escribe tu estatura en cm");
}

var indice = masa / (estatura / 100) ** 2;

alert("tu indice de masa corporal es: " + indice);

if (indice <= 18.5) {
 alert(nombre + " " + apellido + " estas delgado para tu estatura, te recomendamos una proteina para ganar masa muscular hipercalorica"
 );
} else if (indice <= 30) {
 alert(nombre + " "+  apellido +  " estas en un peso normal, te recomendamos una proteina para ganar masa muscular y mantener un peso saludable"
 );
} else if (indice > 30) {
 alert(nombre + " " + apellido +  " estas en sobrepeso, te recomendamos una proteina para mantener masa muscular y perder grasa"
 );
}

// codigo para escoger las mejores proteinas segun indice de masa corporal

if (indice <= 18.5) {
  var highCalories= proteinas.filter((el) => el.calories > 120)
  highCalories.forEach((proteina) =>{
alert(`nombre: ${proteina.name},
peso: ${proteina.weight} lb,
tamaño servicio: ${proteina.servingSize} g,
calorias: ${proteina.calories} kcal,
proteina por servicio: ${proteina.proteinPerServing} g,
relacion proteina/servicio ${proteina.getProteinRatio()}`)
  })
  
 } else if (indice <= 30) {
  var mediumCalories= proteinas.filter((el) => (el.calories >= 110 && el.calories <= 120))
  mediumCalories.forEach((proteina) =>{
alert(`nombre: ${proteina.name},
peso: ${proteina.weight} lb,
tamaño servicio: ${proteina.servingSize} g,
calorias: ${proteina.calories} kcal,
proteina por servicio: ${proteina.proteinPerServing} g,
relacion proteina/servicio ${proteina.getProteinRatio()}`)
  })
  
  
 } else if (indice > 30) {
  var lowCalories= proteinas.filter((el) => (el.calories < 110))
  lowCalories.forEach((proteina) =>{
alert(`nombre: ${proteina.name},
peso: ${proteina.weight} lb,
tamaño servicio: ${proteina.servingSize} g,
calorias: ${proteina.calories} kcal,
proteina por servicio: ${proteina.proteinPerServing} g,
relacion proteina/servicio ${proteina.getProteinRatio()}`)
      })
  
 }



}




document.getElementById("conoce-proteina").addEventListener("click",conoceProteina)


  
      

      





      
   

   

  

    



