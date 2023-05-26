
 //definiendo clases

     

 class Protein {
  constructor(name, weight, servingSize, calories, proteinPerServing,price,imagen,link,imagen2) {
    this.name = name;
    this.weight = weight; // En libras (lb)
    this.servingSize = servingSize; // En gramos (g)
    this.calories = calories;
    this.proteinPerServing = proteinPerServing;
    this.price = price; // En pesos colombianos
    this.imagen = imagen; // url imagen
    this.link=link
    this.imagen2=imagen2
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

     let proteinas = [goldWhey5lb,goldWhey10lb,goldWhey2lb,bipro3lb,bipro2lb,seriousMass, smartGainer,goldIsolate,megaplex,goldIsolate16,seriousMass6,biproclassic];
     
if (localStorage.getItem("nuevaProteina")){
     let nuevaProteina=JSON.parse(localStorage.getItem("nuevaProteina"))
     proteinas.push(nuevaProteina)

   
const divProteina = document.createElement("div");
divProteina.classList.add("div-proteina");
divProteina.id = "proteina"+proteinas.length;


const img1 = document.createElement("img");
img1.src = nuevaProteina.imagen3;
img1.alt = nuevaProteina.name;



const img2 = document.createElement("img");
img2.src = nuevaProteina.imagen2
img2.classList.add("seconday-image");


const divPrecio = document.createElement("div");
divPrecio.classList.add("precio");
divPrecio.textContent = nuevaProteina.pricenom;


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
      let inputCantidad = boton.parentNode.querySelector(".input-cantidad");
       let cantidadActual = parseInt(inputCantidad.value);
      let nuevaCantidad = operacion === "suma" ? cantidadActual + 1 : cantidadActual - 1;
      if (nuevaCantidad >= 0) {
         inputCantidad.value = nuevaCantidad;
    }
    }
     
     let botonesMenos = document.querySelectorAll(".boton-menos");
    for (let i = 0; i < botonesMenos.length; i++) {
       botonesMenos[i].addEventListener("click", function() {
         cambiarCantidad(this, "resta");
       });
     }
     
     let botonesMas = document.querySelectorAll(".boton-mas");
    for (let i = 0; i < botonesMas.length; i++) {
      botonesMas[i].addEventListener("click", function() {
         cambiarCantidad(this, "suma");
       });
     }

     
    
      // añadir al carrito
     
     function anadirAlCarrito() {
      let carrito = JSON.parse(sessionStorage.getItem('carrito')) || {
        contador: 0,
        proteinas: [],
        cantidades: [],
      };
    
      const botonesAnadir = document.getElementsByClassName('boton-anadir');
      const contadorCarrito = document.getElementById('contador-carrito');
      const cantidades = document.getElementsByClassName('input-cantidad');
    
      for (let j = 0; j < botonesAnadir.length; j++) {
        botonesAnadir[j].addEventListener('click', () => {
          const cantidad = parseInt(cantidades[j].value);
          const contadorCarritoValor = parseInt(contadorCarrito.innerHTML) || 0;
    
          contadorCarrito.innerHTML = contadorCarritoValor + cantidad;
    
          carrito.cantidades.push(cantidad);
          carrito.proteinas.push(proteinas[j]);
    
          sessionStorage.setItem('carrito', JSON.stringify(carrito));
    
          cantidades[j].value = 0;
    
          carrito.contador++;
        });
      }
    }
    
    anadirAlCarrito();
    

    

// buscar proteina por nombre


function buscar() {
  proteinas
  let resultado = proteinas.filter((el) => el.name.includes(document.getElementById("buscador").value.toUpperCase()));
  console.log(resultado)
  if (resultado.length > 0) {
    window.location.href = resultado[0].link;
  }
}








  
      

      





      
   

   

  

    



