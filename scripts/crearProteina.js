class Protein {
    constructor(name, weight, servingSize, calories, proteinPerServing,price,imagen,link,imagen2,pricenom) {
      this.name = name;
      this.weight = weight; // En libras (lb)
      this.servingSize = servingSize; // En gramos (g)
      this.calories = calories;
      this.proteinPerServing = proteinPerServing;
      this.price = price; // En pesos colombianos
      this.imagen ="."+imagen; // url imagen
      this.link=link
      this.imagen2=imagen2
      this.pricenom=pricenom
      this.imagen3=imagen
    }
    
  
    getProteinRatio() {
      return this.proteinPerServing / this.servingSize;
    }
  }
          function crearProteinObjeto() {
              let contador = parseInt(sessionStorage.getItem("contadorProtein")) || 0;
              const name = document.getElementById("name-input").value;
              const weight = document.getElementById("weight-input").value;
              const servingSize = document.getElementById("serving-size-input").value;
              const calories = document.getElementById("calories-input").value;
              const proteinPerServing = document.getElementById("protein-per-serving-input").value;
              const price = document.getElementById("price-input").value;
              const imagen = document.getElementById("image-input").value;
              const imagen2 = document.getElementById("image2-input").value;
              const link = document.getElementById("link-input").value;
              const pricenom = document.getElementById("pricenom-input").value;
              sessionStorage.setItem('contadorProtein', contador + 1);
              const proteinObjeto = new Protein(name, weight, servingSize, calories, proteinPerServing, price, imagen, link,imagen2,pricenom);
              localStorage.setItem('nuevaProteina', JSON.stringify(proteinObjeto))
              
  
              console.log(proteinObjeto);
  
              
          Swal.fire({
          title: 'Genial!',
          text: 'PROTEINA CREADA CON EXITO :)',
          icon: 'success',
          confirmButtonText: 'Cool'
          
          })

          document.getElementById("protein-form").reset() 

          setTimeout(function() {
            location.href="../index.html";
          }, 2000);
  
          
          }