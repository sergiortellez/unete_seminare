  /* 

  ***funciones***

  */

// function integers
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // function decimal
function animateDecimals(obj, start, end, duration, decimals) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const decimalValue = progress * (end - start) + start;
      obj.innerHTML = decimalValue.toFixed(decimals);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  /* 

  ***end funciones***

  */
  
  /* 

  ***implementation***

  */

  //alumnos Egresados
  const alumnosEgresados = document.getElementById("alumnosEgresados");
  animateValue(alumnosEgresados, 0,800 , 2000);

  //Startups Creadas
  const startupsCreadas = document.getElementById("startupsCreadas");
  animateValue(startupsCreadas, 0,17 , 1000);

      //Startups simuladas
  const startupsSimuladas = document.getElementById("startupsSimuladas");
  animateValue(startupsSimuladas, 0, 460 , 1500);

  /* 

  *** end implementation***

  */