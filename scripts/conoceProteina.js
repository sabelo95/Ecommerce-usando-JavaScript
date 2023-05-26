function conoceProteina(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    document.getElementById("resultado-conoce").innerHTML=""
    document.getElementById("resultado").innerHTML=""

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let masa = document.getElementById("masa").value;
    let estatura = document.getElementById("estatura").value;

    let indice = masa / (estatura / 100) ** 2;

    document.getElementById("resultado").innerHTML = nombre.toUpperCase() + " " +  apellido.toUpperCase() + " tu índice de masa corporal es: " + indice.toFixed(2) +  " te recomendamos las siguientes proteinas:";
    
    

      setTimeout(() => {
        fetch("../pages/json/proteinas.json")
        .then( (res) => res.json())
        .then( (data) => {
        if (indice <= 18.5) {
          let highCalories = data.filter((el) => el.calories > 120);
          highCalories.forEach((proteina) => {
            document.getElementById("resultado-conoce").innerHTML += `
            <div>
              <strong>Nombre:</strong> ${proteina.name}<br>
              <strong>Peso:</strong> ${proteina.weight} lb<br>
              <strong>Tamaño del servicio:</strong> ${proteina.servings} g<br>
              <strong>Calorías:</strong> ${proteina.calories} kcal<br>
              <strong>Proteína por servicio:</strong> ${proteina.proteinPerServing} g<br>
            </div>
            
             
            `;
          });
        } else if (indice <= 30) {
          let mediumCalories = data.filter((el) => el.calories >= 110 && el.calories <= 120);
          mediumCalories.forEach((proteina) => {
            document.getElementById("resultado-conoce").innerHTML += `
            <div>
            <strong>Nombre:</strong> ${proteina.name}<br>
            <strong>Peso:</strong> ${proteina.weight} lb<br>
            <strong>Tamaño del servicio:</strong> ${proteina.servings} g<br>
            <strong>Calorías:</strong> ${proteina.calories} kcal<br>
            <strong>Proteína por servicio:</strong> ${proteina.proteinPerServing} g<br>
          </div>
           
          `;
          });
        } else if (indice > 30) {
          let lowCalories = data.filter((el) => el.calories < 110);
          lowCalories.forEach((proteina) => {
            document.getElementById("resultado-conoce").innerHTML += `
            <div>
            <strong>Nombre:</strong> ${proteina.name}<br>
            <strong>Peso:</strong> ${proteina.weight} lb<br>
            <strong>Tamaño del servicio:</strong> ${proteina.servings} g<br>
            <strong>Calorías:</strong> ${proteina.calories} kcal<br>
            <strong>Proteína por servicio:</strong> ${proteina.proteinPerServing} g<br>
          </div>
           
          `;
            });
        }
        document.getElementById("div-boton").innerHTML += `
        <div>
        <button class="btn btn-dark boton-principal" ><a style="text-decoration: none;color: inherit; " href="../index.html">PAGINA PRINCIPAL</a></button>
      </div>
       
      `
        })
      }, 3000)


    

    

    
}

document.getElementById("formulario").addEventListener("submit", conoceProteina);
