window.onload = () => {


  //VARIABLE NIVEL ------------------------------------------

  let level = 0;







  //DATOS SOBRE DISEÑADORES (LATERAL)------------------------------------------

      // ARRAYS DATOS LOGOS POR CATEGORÍAS

      let info = ['El logotipo de I love NY es un jeroglífico que fue creado por Milton Glaser', 
      'Cruz Novillo consultó amplia documentación sobre la simbología de otros partidos socialistas.',
      'En 1993, se lanzó el nuevo Windows 3.1. Junto con él se desarrolló una nueva marca, que fue la cara del sistema a lo largo de los años 90.',
      'El rombo, desde el diseño de Vasarely, ha desplazado a cualquier otro símbolo en la identificación corporativa de Renault.',
      'Resuelve todos los puzzles de los distintos logotipos y aprende curiosidades sobre sus creadores'  
    ];

      let imagen = ["assets/images/NY_AUTOR.jpg","assets/images/PSOE_AUTOR.jpg", "assets/images/WINDOWS_AUTOR.jpg", "assets/images/RENAULT_AUTOR.jpg", "assets/images/BIENVENIDOS.jpg"];

      let alternativo = ["retrato de Milton Glaser", "retrato de Bill Gates", "retrato de Jean-Pierre Vasarely", "Icono de bienvenida"];



      
  // GENERO HTML /DATOS SOBRE DISEÑADORES (LATERAL)------------------------------------------   
         
        function pintarDatos (designer) {
          let genVentama = document.querySelector("#ventana_info");
          genVentama.innerHTML = `
          <div class="nivel">${level} de 4</div>
          <div class="info"><p>${info[designer]}</p></div>
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






  //QUE PASA CUANDO ACERTAMOS------------------------------------------


  function done_A () { 
    for(numero_A=1;numero_A<5;numero_A++) {  
      let borro_A= document.querySelector(`.A${numero_A}`);
      borro_A.removeChild(borro_A.firstElementChild);
      borro_A.insertAdjacentHTML('afterbegin', `<img id="logo_Resuelto" src="assets/images/DONE.jpg" alt="¡Bien hecho!"/>`);
    }
  };

  function done_B () { 
    for(numero_B=1;numero_B<5;numero_B++) {  
      let borro_B= document.querySelector(`.B${numero_B}`);
      borro_B.removeChild(borro_B.firstElementChild);
      borro_B.insertAdjacentHTML('afterbegin', `<img id="logo_Resuelto" src="assets/images/DONE.jpg" alt="¡Bien hecho!"/>`);
    }
  };
           
  function done_C () { 
    for(numero_C=1;numero_C<5;numero_C++) {  
      let borro_C= document.querySelector(`.C${numero_C}`);
      borro_C.removeChild(borro_C.firstElementChild);
      borro_C.insertAdjacentHTML('afterbegin', `<img id="logo_Resuelto" src="assets/images/DONE.jpg" alt="¡Bien hecho!"/>`);
    }
  };


  function done_D () { 
    for(numero_D=1;numero_D<5;numero_D++) {  
      let borro_D= document.querySelector(`.D${numero_D}`);
      borro_D.removeChild(borro_D.firstElementChild);
      borro_D.insertAdjacentHTML('afterbegin', `<img id="logo_Resuelto" src="assets/images/DONE.jpg" alt="¡Bien hecho!"/>`);
    }
  };




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





  //LANZANDO UNA JUGADA 

  resultado = (a) => {

    console.log(`Jugada hasta ahora ${jugada}`);


    //para el logo A-------------------------------

    if (jugada[0]===ganadora_A[0] & jugada[1]===ganadora_A[1] & jugada[2]===ganadora_A[2] & jugada[3]===ganadora_A[3]) {
  
        done_A();
        level++;
        pintarDatos(0);
        ganadora_A = ["resuelto_A"];
        win();      
      } 


    
    //para el logo B-------------------------------

    if (jugada[0]===ganadora_B[0] & jugada[1]===ganadora_B[1] & jugada[2]===ganadora_B[2] & jugada[3]===ganadora_B[3]) {
      
      done_B();
      level++;
      pintarDatos(3);
      ganadora_B = ["resuelto_B"];
      win();       
      } 


    //para el logo C-------------------------------

    if (jugada[0]===ganadora_C[0] & jugada[1]===ganadora_C[1] & jugada[2]===ganadora_C[2] & jugada[3]===ganadora_C[3]) {
      console.log("BIEN_C");

      done_C();
      level++;
      pintarDatos(1);
      ganadora_C = ["resuelto_C"];
      win();     
      } 


    //para el logo D-------------------------------

    if (jugada[0]===ganadora_D[0] & jugada[1]===ganadora_D[1] & jugada[2]===ganadora_D[2] & jugada[3]===ganadora_D[3]) {
      console.log("BIEN_D");
      
      done_D();
      level++;
      pintarDatos(2);
      ganadora_D = ["resuelto_D"];
      win();    
      }       


        



        
   //CIERRE DE LANZANDO UNA JUGADA   

  };


 


  


  //SWIPER CREACIÓN DE CUBOS------------------------------------------


  // DESISTO DE INTENTARLO CON "FOR" Y GENERO LOS CUATRO CUBOS POR SEPARADO



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
        slideChangeTransitionEnd: function () {
          let detectaUno = document.querySelectorAll(`.mySwiper1 .swiper-slide-active`);
          let resultadoUno = detectaUno[0].classList[0];
          console.log(`resultado del cubo uno:${resultadoUno}`);
          jugada.splice(0,1,resultadoUno);       
          resultado (jugada,ganadora_A);          
        },
      },
    });
    

  //CUBO DOS------------------------------------------ 

    var swiper = new Swiper(`.mySwiper2`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChangeTransitionEnd: function () {
          let detectaDos = document.querySelectorAll(`.mySwiper2 .swiper-slide-active`);      
          let resultadoDos = detectaDos[0].classList[0];
          console.log(`resultado del cubo dos:${resultadoDos}`);
          jugada.splice(1,1,resultadoDos);
          resultado (jugada,ganadora_A); 

        },
      },
    });


    //CUBO TRES------------------------------------------ 

    var swiper = new Swiper(`.mySwiper3`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChangeTransitionEnd: function () {
          let detectaTres = document.querySelectorAll(`.mySwiper3 .swiper-slide-active`);      
          let resultadoTres = detectaTres[0].classList[0];
          console.log(`resultado del cubo tres:${resultadoTres}`);
          jugada.splice(2,1,resultadoTres);
          resultado (jugada,ganadora_A); 
        },
      },
    });


    //CUBO CUATRO------------------------------------------ 

    var swiper = new Swiper(`.mySwiper4`, {
      effect: "cube",
      grabCursor: true,
      loop: true,

      cubeEffect: {
        shadow: false,
        slideShadows: true,
      },

      on: {
        slideChangeTransitionEnd: function () {
          let detectaCuatro = document.querySelectorAll(`.mySwiper4 .swiper-slide-active`);      
          let resultadoCuatro = detectaCuatro[0].classList[0];
          console.log(`resultado del cubo cuatro:${resultadoCuatro}`);
          jugada.splice(3,1,resultadoCuatro);
          resultado (jugada,ganadora_A); 
        },
      },
    });

    //AQUÍ FINALIZA LA CREACIÓN DE CUBOS


 
    

      


    //RESETEA EL JUEGO

    let reinicia = document.querySelector("#reseteo");

    reinicia.addEventListener("click", () => {
      
      location.reload();
    });








  //CIERRE DEL WINDOW ON LOAD (NO QUITAR)

};






