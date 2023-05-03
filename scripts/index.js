
 //definiendo clases

     

 class Protein {
  constructor(name, weight, servingSize, calories, proteinPerServing,price,imagen,link) {
    this.name = name;
    this.weight = weight; // En libras (lb)
    this.servingSize = servingSize; // En gramos (g)
    this.calories = calories;
    this.proteinPerServing = proteinPerServing;
    this.price = price; // En pesos colombianos
    this.imagen = imagen; // url imagen
    this.link=link
  }
  

  getProteinRatio() {
    return this.proteinPerServing / this.servingSize;
  }
}
// añadiendo objetos de la clase Protein

    const goldWhey5lb = new Protein('GOLD WHEY 5 LB', 5, 30, 120, 24,369000,'../images/gold-standard-5-lb-1.webp','#proteina1');
     const goldWhey10lb = new Protein('GOLD WHEY 10 LB', 10, 30, 120,24, 649000,'../images/gold-standard-10-lb-1.webp','#proteina2');
     const goldWhey2lb = new Protein('GOLD WHEY 2 lb', 2, 30, 120, 24,196000,'../images/gold-standard-2-lb-1.webp','#proteina3');
     const seriousMass = new Protein('SERIOUS MASS', 12, 334, 1250, 50,369000,'../images/serious-mass-12-lb.webp','#proteina4');
     const bipro3lb = new Protein('BIPRO 3 LB', 3, 25, 80, 20,200000,'../images/BI-PRO-3lb-300x300.webp','#proteina5');
     const bipro2lb = new Protein('BIPRO 2 LB', 2, 25, 80, 20,150000,'../images/Plantilla-zonafit-Promo-25-enero-bipro-2lb-e1605881324437.jpg','#proteina6');
     const biproclassic = new Protein('BIPRO CLASSIC 2 LB', 2, 25, 80, 20,130000,'../images/bipro-classic-2-lb.webp','#proteina7');
     const goldIsolate = new Protein('GOLD ISOLATE 5 LB', 5, 31, 110, 25,429000,'../images/isolate-5-lb.webp','#proteina8');
     const smartGainer = new Protein('SMARTGAINER 13 lb', 13, 100, 920, 44,250000,'../images/smart-gainer-13-lb-2.webp','#proteina9');
     const goldIsolate16 = new Protein('GOLD ISOLATE 1.6 LB', 1.6, 31, 110, 25,190000,'../images/bipro-classic-2-lb.webp','#proteina10');
     const megaplex = new Protein('MEGAPLEX', 10, 150, 200, 44,240000,'../images/megaplex-10-lb-2.webp','#proteina11');
     const seriousMass6 = new Protein('SERIOUS MASS 6 LB', 6, 334, 1250, 50,280000,'../images/serious-mas-6-lb.webp','#proteina12');

      //añadiendo nuevas proteinas

     var proteinas = [goldWhey5lb,goldWhey10lb,goldWhey2lb,bipro3lb,bipro2lb,seriousMass, smartGainer,goldIsolate,megaplex,goldIsolate16,seriousMass6,biproclassic];
     
if (localStorage.getItem("nuevaProteina")){
     var nuevaProteina=JSON.parse(localStorage.getItem("nuevaProteina"))
     proteinas.push(nuevaProteina)

   
const divProteina = document.createElement("div");
divProteina.classList.add("div-proteina");
divProteina.id = "proteina7";


const img1 = document.createElement("img");
img1.src = nuevaProteina.imagen;
img1.alt = nuevaProteina.name;


const img2 = document.createElement("img");
img2.src = "./images/BI-PRO-2lb-tabla.webp";
img2.classList.add("seconday-image");


const divPrecio = document.createElement("div");
divPrecio.classList.add("precio");
divPrecio.textContent = nuevaProteina.price;


const divBotonesInput = document.createElement("div");
divBotonesInput.style.display = "flex";


const botonMenos = document.createElement("button");
botonMenos.classList.add("boton-menos", "btn", "btn-outline-secondary");
botonMenos.textContent = "-";


const inputCantidad = document.createElement("input");
inputCantidad.classList.add("input-cantidad");
inputCantidad.value = 0;
inputCantidad.type = "text";
inputCantidad.style.width = "50px";


const botonMas = document.createElement("button");
botonMas.classList.add("boton-mas", "btn", "btn-outline-secondary");
botonMas.textContent = "+";


const botonAnadir = document.createElement("button");
botonAnadir.classList.add("boton-anadir", "btn", "btn-outline-secondary");
botonAnadir.textContent = "AÑADIR AL CARRITO";


divBotonesInput.appendChild(botonMenos);
divBotonesInput.appendChild(inputCantidad);
divBotonesInput.appendChild(botonMas);
divBotonesInput.appendChild(botonAnadir);


divProteina.appendChild(img1);
divProteina.appendChild(img2);
divProteina.appendChild(divPrecio);
divProteina.appendChild(divBotonesInput);

// agrega el div principal al body
document.getElementById("proteinas").appendChild(divProteina);

}
    
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

     // el siguiente codigo lo que hará es aumentar el contador en añadir carrito y agregar los productos a la pagina del carrito

     function anadirAlCarrito() {
      // Recuperar el valor de contador almacenado en localStorage
      var contador = parseInt(localStorage.getItem("contadorCarrito")) || 0;
    
      for (var j = 0; j < document.getElementsByClassName("boton-anadir").length; j++) {
        (function(j) {
          document.getElementsByClassName("boton-anadir")[j].addEventListener("click", () => {
    
            if (document.getElementById("contador-carrito").innerHTML == '') {
              document.getElementById("contador-carrito").innerHTML = 0
            }
            document.getElementById("contador-carrito").innerHTML = parseInt(document.getElementById("contador-carrito").innerHTML) + parseInt(document.getElementsByClassName("input-cantidad")[j].value)
            localStorage.setItem('CantidadProteina'+ contador,parseInt(document.getElementsByClassName("input-cantidad")[j].value))
            document.getElementsByClassName("input-cantidad")[j].value = 0
            localStorage.setItem('contadorCarrito', contador + 1);
            localStorage.setItem('ProteinaCarrito' + contador, JSON.stringify(proteinas[j]));
           
            contador++;
          })
        })(j);
      }
    }
    

     anadirAlCarrito();

    
   

     // codigo para conocer proteina ideal
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

// buscar proteina por nombre


function buscar() {
  var resultado = proteinas.filter((el) => el.name.includes(document.getElementById("buscador").value.toUpperCase()));

  if (resultado.length > 0) {
    window.location.href = resultado[0].link;
  }
}








  
      

      





      
   

   

  

    



