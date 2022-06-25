//añade las variables globales y los event listeners que controlan las barras de navegación. 

const button = document.querySelector('.iconTrigger');

button.addEventListener('click', toggleNav);

//este listener sólo tiene sentido si la pantalla mide menos de 600px
if(window.innerWidth < 648){
    const clickableArea = document.querySelector('.navContents');
    clickableArea.addEventListener('click', toggleNav);
}




/*<------------------------------------------------->
<!--	toggleResponsiveNav	-->
<!-------------------------------------------------->
* Descripción:
    
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado:
<!------------------------------------------------->*/




function toggleNav(){
    
    //encuentra la barra de navegación
    var nav = document.querySelector('nav');

    //encuentra el ícono
    var toggleIcon = document.querySelector('#toggleIcon');

    //revisa si la barra está expandida
    if(nav.classList.contains('expanded')){
        //contrae la barra
        nav.classList.remove('expanded');
        //quita el ícono de cerrar
        toggleIcon.classList.remove('fa-xmark');
        //añade el ícono de barras
        toggleIcon.classList.add('fa-bars');
    }else{
        nav.classList.add('expanded');
         //quita el ícono de barras
         toggleIcon.classList.remove('fa-bars');
         //añade el ícono de cerrar
         toggleIcon.classList.add('fa-xmark');
    }
   
}

/*<!------------------------------------------------->
<!--	end toggleResponsiveNav	-->
<!------------------------------------------------->*/


/*<------------------------------------------------->
<!--	spyscroll	-->
<!-------------------------------------------------->
* Descripción:
    Función que detecta qué sección se encuentra desplegada en la pantalla y asigna la clase ".active" a su correspondiente en la barra de navegación. 
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado: añade la clase ".active" al elemento de la barra de navegación que se está desplegando en la pantalla.
<!------------------------------------------------->*/


  
var section = document.querySelectorAll(".spy-scroll > section");
var sections = {};
var i = 0;
  
Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop -50;
      //el menos 80 activa la función 80 pixeles antes de llegar al objetivo.
});
  
    
window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
          }
    }
}
       
/*<!------------------------------------------------->
<!--	end spyscroll	-->
<!------------------------------------------------->*/