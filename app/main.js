window.onload = () => {


  //VARIABLE NIVEL ------------------------------------------

  let level = 0;


  //DATOS SOBRE DISEÑADORES (LATERAL)------------------------------------------

      // ARRAYS DATOS LOGOS POR CATEGORÍAS

      let info = ['El logotipo de I love NY es un jeroglífico que fue creado por Milton Glaser.', 
      'Cruz Novillo consultó amplia documentación sobre la simbología de otros partidos socialistas.',
      'En 1993, se lanzó el nuevo Windows 3.1. Junto con él se desarrolló una nueva marca, que fue la cara del sistema a lo largo de los años 90.',
      'El rombo, desde el diseño de Vasarely, ha desplazado a cualquier otro símbolo en la identificación corporativa de Renault.',
      'Gira los cubos del puzzle para componer cada uno de los cuatro logos que aparecen en la imagen de la parte superior.'  
    ];

      let imagen = ["assets/images/NY_AUTOR.jpg","assets/images/PSOE_AUTOR.jpg", "assets/images/WINDOWS_AUTOR.jpg", "assets/images/RENAULT_AUTOR.jpg", "assets/images/BIENVENIDOS.jpg"];

      let alternativo = ["retrato de Milton Glaser", "retrato de Bill Gates", "retrato de Jean-Pierre Vasarely", "Icono de bienvenida"];

      let instrucciones = ["assets/images/todos.jpg", "logotipos de I Love New York, Renault, PSOE y Windows 95"];



      
  // GENERO HTML /DATOS SOBRE DISEÑADORES (LATERAL)------------------------------------------   
         
        function pintarDatos (designer) {
          let genVentama = document.querySelector("#ventana_info");
          genVentama.innerHTML = `
          <div class="nivel">${level} de 4</div>
          <div class="info"><p>${info[designer]}</p></div>
          <img src="${instrucciones[0]}" alt="${instrucciones[1]}" class="modelos">
          <img src="${imagen[designer]}" alt="${alternativo[designer]}" class="pic">
          `;}          
          pintarDatos(4);


   //CONTENIDO Y GENERACIÓN DINÁMICA HTML CUBOS------------------------------------------

    // ARRAY CONTENIDO CUBO 1
    let cuboUno = [
      `<article id="A" class="A1 swiper-slide">
        <img id="logo_A1" src="assets/images/NY_01.jpg" alt="detalle de logotipo" />
      </article>`,
      `<article id="A" class="B1 swiper-slide">
        <img id="logo_B1" src="assets/images/RENAULT_01.jpg" alt="detalle de logotipo" />
      </article>`,
      `<article id="A" class="C1 swiper-slide">
        <img id="logo_C1" src="assets/images/PSOE_01.jpg" alt="detalle de logotipo" />
      </article>`,
      `<article id="A" class="D1 swiper-slide">
        <img id="logo_D1" src="assets/images/WINDOWS_01.jpg" alt="detalle de logotipo" />
      </article>`
    ];
    
    // GENERO HTML CUBO 1
    let llenoCuboUno = document.querySelector("#logo_1");
  
    llenoCuboUno.innerHTML = `${cuboUno[0]}
    ${cuboUno[1]}
    ${cuboUno[2]}
    ${cuboUno[3]}
    `;


  // ARRAY CONTENIDO CUBO 2
  let cuboDos = [
    `<article class="C2 swiper-slide">
        <img id="logo_C2" src="assets/images/PSOE_02.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="A2 swiper-slide">
        <img id="logo_A2" src="assets/images/NY_02.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="D2 swiper-slide">
        <img id="logo_D2" src="assets/images/WINDOWS_02.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="B2 swiper-slide">
        <img id="logo_B2" src="assets/images/RENAULT_02.jpg" alt="detalle de logotipo" />
    </article>`,
  ];

  // GENERO HTML CUBO 2
  let llenoCuboDos = document.querySelector("#logo_2");

  llenoCuboDos.innerHTML = `${cuboDos[0]}
  ${cuboDos[1]}
  ${cuboDos[2]}
  ${cuboDos[3]}
  `;



  // ARRAY CONTENIDO CUBO 3
  let cuboTres = [
    `<article class="D3 swiper-slide">
          <img id="logo_D3" src="assets/images/WINDOWS_03.jpg" alt="detalle de logotipo" />
        </article>`,

    `<article class="B3 swiper-slide">
          <img id="logo_B3" src="assets/images/RENAULT_03.jpg" alt="detalle de logotipo" />
        </article>`,

    `<article class="A3 swiper-slide">
           <img id="logo_A3" src="assets/images/NY_03.jpg" alt="detalle de logotipo" />
        </article>`,

    `<article class="C3 swiper-slide">
          <img id="logo_C3" src="assets/images/PSOE_03.jpg" alt="detalle de logotipo" />
        </article>`,
  ];

  // GENERO HTML CUBO 3

  let llenoCuboTres = document.querySelector("#logo_3");

  llenoCuboTres.innerHTML = `${cuboTres[0]}
      ${cuboTres[1]}
      ${cuboTres[2]}
      ${cuboTres[3]}
      `;


  // ARRAY CONTENIDO CUBO 4
  let cuboCuatro = [
    `<article class="B4 swiper-slide">
      <img id="logo_B4" src="assets/images/RENAULT_04.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="C4 swiper-slide">
      <img id="logo_C4" src="assets/images/PSOE_04.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="D4 swiper-slide">
      <img id="logo_D4" src="assets/images/WINDOWS_04.jpg" alt="detalle de logotipo" />
    </article>`,
    `<article class="A4 swiper-slide">
      <img id="logo_A4" src="assets/images/NY_04.jpg" alt="detalle de logotipo" />
    </article>`

  ];

  // GENERO HTML CUBO 4

  let llenoCuboCuatro = document.querySelector("#logo_4");

  llenoCuboCuatro.innerHTML = `${cuboCuatro[0]}
      ${cuboCuatro[1]}
      ${cuboCuatro[2]}
      ${cuboCuatro[3]}
      `;


  //COMBINACIONES GANADORAS-------------------------------
  
  let ganadora_A = ["A1", "A2", "A3","A4"];
  let ganadora_B = ["B1", "B2", "B3","B4"];
  let ganadora_C = ["C1", "C2", "C3","C4"];
  let ganadora_D = ["D1", "D2", "D3","D4"];
  
  let jugada = [];



  //QUE PASA CUANDO GANAMOS------------------------------------------

  function win() {

    if (level>3) {
      let ganador = document.querySelector("#win_win");
      ganador.classList.add('visible');
      ganador.addEventListener('click', (e)=> {
        location.reload();
      })
    };   
  }




  //VALORANDO JUGADA

    let prev = "";
    let resultadoUno = "A1";
    let resultadoDos = "C2";
    let resultadoTres = "D3";
    let resultadoCuatro = "B4";
  
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  
  
    let checkMovement = () => {
      jugada = [];
      jugada.push(resultadoUno, resultadoDos, resultadoTres,resultadoCuatro);
  
      if(equals(jugada, ganadora_A)){      
        level++;
        pintarDatos(0);
        ganadora_A = ["resuelto_A"];
        win();    
      };
  
      if(equals(jugada, ganadora_B)){
        level++;
        pintarDatos(3);
        ganadora_B = ["resuelto_B"];
        win();     
      };
  
      if(equals(jugada, ganadora_C)){
        level++;
        pintarDatos(1);
        ganadora_C = ["resuelto_C"]; 
        win();  
      };
  
      if(equals(jugada, ganadora_D)){
        level++;
        pintarDatos(2);
        ganadora_D = ["resuelto_D"];
        win();  
        
      };

      if(equals(jugada, ganadora_A) || equals(jugada, ganadora_B) || equals(jugada, ganadora_C) || equals(jugada, ganadora_D)){
          
          win();  
      };
    }
  
  //CIERRE VALORANDO JUGADA





  //SWIPER CREACIÓN DE CUBOS------------------------------------------

   //CUBO UNO------------------------------------------
    
    
     var swiper = new Swiper(`.mySwiper1`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {        
        slideChange: function () {
          switch (this.activeIndex) {
            case 1, 5:
              resultadoUno = "A1"; //IloveNY
              break;
            case 2:
                resultadoUno = "B1"; //renault
                break;
            case 3:
              resultadoUno = "C1"; //psoe
              break;
            case 4:
              resultadoUno = "D1"; //windows
              break;
            default:
              break;
          }
          console.log(resultadoUno);
          if(prev!=resultadoUno){
            prev=resultadoUno;
            checkMovement();
          }
        },
      },
    });
    

  //CUBO DOS------------------------------------------ 
    
    var swiper2 = new Swiper(`.mySwiper2`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChange: function () {
          
          //console.log(this.activeIndex)
          switch (this.activeIndex) {
            case 1, 5:
              resultadoDos = "C2"; //psoe
              break;
            case 2:
                resultadoDos = "A2"; //NY
                break;
            case 3:
              resultadoDos = "D2"; //windows
              break;
            case 4:
              resultadoDos = "B2"; //renault
              break;
            default:
              break;
          }
          console.log(resultadoDos);
          if(prev!=resultadoDos){
            prev=resultadoDos;
            checkMovement();
          }

        },
      },
    });


    //CUBO TRES------------------------------------------ 
   
    var swiper3 = new Swiper(`.mySwiper3`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChange: function () {

          switch (this.activeIndex) {
            case 1, 5:
              resultadoTres = "D3"; //windows 
              break;
            case 2:
                resultadoTres = "B3"; //renault 
                break;
            case 3:
              resultadoTres = "A3"; //NY
              break;
            case 4:
              resultadoTres = "C3"; //psoe
              break;
            default:
              break;
          }
          console.log(resultadoTres);
          if(prev!=resultadoTres){
            prev=resultadoTres;
            checkMovement();
          }
        },
      },
    });


    //CUBO CUATRO------------------------------------------ 
    
    var swiper4 = new Swiper(`.mySwiper4`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChange: function () {

          switch (this.activeIndex) {
            case 1, 5:
              resultadoCuatro = "B4"; //renault 
              break;
            case 2:
                resultadoCuatro = "C4"; //psoe
                break;
            case 3:
              resultadoCuatro = "D4"; //windows 
              break;
            case 4:
              resultadoCuatro = "A4"; //NY 
              break;
            default:
              break;
          }
          console.log(resultadoCuatro);
          if(prev!=resultadoCuatro){
            prev=resultadoCuatro;
            checkMovement();
          }
          
        },
      },
    });

    //AQUÍ FINALIZA LA CREACIÓN DE CUBOS



    //RESETEA EL JUEGO

    let reinicia = document.querySelector("#reseteo");

    reinicia.addEventListener("click", () => {
      location.reload();
    });


    //RESETEA EL JUEGO EN RESPONSIVE

    let reinicia_res = document.querySelector(".reset_res");

    reinicia_res.addEventListener("click", () => {
       location.reload();
     });
  




  //CIERRE DEL WINDOW ON LOAD (NO QUITAR)

}






