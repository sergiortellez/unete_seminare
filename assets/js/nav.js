/*<------------------------------------------------->
<!--	toogleResponsiveNav	-->
<!-------------------------------------------------->
* Descripción:
    Añade un listener al botón que despliega los contenidos de la barra de navegación cuando el navegador mide menos de 600px (controlado desde el CSS). Sólo añade la clase 'responsive' al cuerpo de la barra de tareas.
* Parámetros:
    -ninguno
* Dependencias:ninguna
* Devuelve/resultado:hace visible el contenido de la barra de herramientas en dispositivos con ancho menor a 600px
<!------------------------------------------------->*/

const button = document.querySelector('.iconTrigger');
button.addEventListener('click', ()=>{
    var nav = document.querySelector('nav');
    nav.classList.toggle('responsive');
});

/*<!------------------------------------------------->
<!--	end toogleResponsiveNav	-->
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