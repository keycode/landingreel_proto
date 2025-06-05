
var isMobile = false;
const ctaPopupElement = document.getElementById('ctamain');
        let ctavisible = false;
        let inactivityTimerId = null; // Para el ID del setTimeout
        const inactivityTime = 3000; // 3 segundos

$(document).ready(function () {
  


            setTimeout(() => {
              


              seccion_1_logopieza_tl= gsap.timeline({
              
              });


              var seccion_1_logopieza_properties = [
                { selector: '#seccion_1_logopieza1', x: '-36vw', y: '-19vw', rotation: 0 }, // Top-left
                { selector: '#seccion_1_logopieza2', x: '25vw', y: '-21vw', rotation: 0 },  // Top-right
                { selector: '#seccion_1_logopieza3', x: '29vw', y: '-3vw', rotation: 0 },   // Mid-left
                { selector: '#seccion_1_logopieza4', x: '26vw', y: '15vw', rotation: 0 },  // Mid-right
                { selector: '#seccion_1_logopieza5', x: '-36vw', y: '17vw', rotation:0 },  // Bottom-left
                { selector: '#seccion_1_logopieza6', x: '-40vw', y: '2vw', rotation: 0 }   // Bottom-right
            ];



            seccion_1_logopieza_properties.forEach(item => {
              seccion_1_logopieza_tl.fromTo(item.selector,
                  { 
                      x: 0,
                      y: 0,
                      scale: 0.7,
                      rotation: 0, 
                      opacity: 0,
                      transformOrigin: "50% 50%"
                  },
                  { 
                      x: item.x,
                      y: item.y,
                      scale: 1,
                      rotation: item.rotation,
                      opacity: 1,
                      duration: 0.5, 
                      ease: "power1.in", 
                    
                  },
                "<0.1"
              );
            });



            seccion_1_logopieza_tl.play();
            }, 1000);
                

  









  





    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
      isMobile = true;
  }

    //$(".textoinicial").fadeIn(3000);

    
    $('#menumobile').click(function(e) {
      e.preventDefault();    
      $('#menumobilelink').toggle(); 
    });
    
    $( window ).scroll(function() {
      
    });




    //.addIndicators()

    if (isMobile) {
       
    } else {
  
    }
    

      





 $(".gfw-more-share-options").click(function (e) {
        e.preventDefault(), $(this).prev().toggleClass("active"), $(this).parent().parent().toggleClass("active");
    });
  $(".gfw-mobile-share-btn").click(function (e) {
        


                if (location.href.indexOf("world-play-day-de") > 0) {
                      
                
                  e.preventDefault(),console.log("mobile share request"),
                  navigator.share &&
                      navigator.share({ title: "Lego Education", url: "https://legoeducation.thebravecontent.com/world-play-day-de.html" }).then(() => {
                          console.log("¡Gracias por compartir!");
                      });


            } else {
              
                
              e.preventDefault(),console.log("mobile share request"),
              navigator.share &&
                  navigator.share({ title: "Lego Education", url: "https://legoeducation.thebravecontent.com/world-play-day-en.html" }).then(() => {
                      console.log("¡Gracias por compartir!");
                  });

            }
    
 
    });



  }); //







function escribetexto() {
    
  
      if (location.href.indexOf("world-play-day-de") > 0) {
        ctargetText = "Verwandeln Sie Ihr Klassenzimmer in einen Ort, an dem zielgerichtetes Spielen, Kreativität und nachhaltiges Lernen sich zusammen entfalten dürfen";
      } else {
        ctargetText = "As a teacher, you can turn your classroom into a space where purposeful play, creativity and meaningful learning thrive";
      }

          const targetText = ""+ctargetText;
          const textElement = document.getElementById('animatedText');

  
          gsap.set(textElement, { opacity: 1 });

          textyimeline = gsap.timeline();

          textyimeline.to(textElement, {
              duration: targetText.length * 0.05, 
              text: {value: targetText,},
              ease: "none" 
          });
   
        
}


// Función para mostrar el CTA
function showCTA() {
    if (!ctavisible) {
        ctaPopupElement.classList.add('visible');
        ctavisible = true;
        console.log("CTA visible, ctavisible:", ctavisible);
    }
}

// Función para ocultar el CTA y reiniciar el ciclo de inactividad
// Esta es la función que puedes llamar desde otro lugar
function hideCTAAndRestartInactivityCheck() {
    if (ctavisible) {
        ctaPopupElement.classList.remove('visible');
        ctavisible = false;
        console.log("CTA ocultado por función, ctavisible:", ctavisible);
    }
    // Reinicia el chequeo de inactividad
    resetInactivityCheck();
}

// Función que maneja el temporizador de inactividad
function resetInactivityCheck() {
    // Limpia cualquier temporizador anterior para evitar múltiples ejecuciones
    if (inactivityTimerId) {
        clearTimeout(inactivityTimerId);
    }
    // console.log("Temporizador de inactividad reseteado.");

    // Inicia un nuevo temporizador. Si no hay touch en 'inactivityTime' ms, muestra el CTA.
    inactivityTimerId = setTimeout(() => {
        console.log("3 segundos de inactividad, mostrando CTA.");
        showCTA();
    }, inactivityTime);
}

// Función que se ejecuta en cada evento de touch
function handleUserTouch() {
    // console.log("Evento de touch detectado.");
    // Si el CTA está visible porque el usuario estuvo inactivo,
    // un nuevo toque NO debería ocultarlo automáticamente.
    // Solo reiniciamos el contador para que no aparezca si ya está oculto,
    // o para que vuelva a aparecer después de 3s si se oculta manualmente.
    resetInactivityCheck();
}

// Añadir listeners para eventos de touch
document.addEventListener('touchstart', handleUserTouch, { passive: true });
document.addEventListener('touchmove', handleUserTouch, { passive: true });
// También podrías añadir 'click' si quieres que interacciones de ratón también reseteen el timer en escritorio
// document.addEventListener('click', handleUserTouch);

// Botón de ejemplo para probar la función de ocultar
const hideButton = document.getElementById('hideCtaButton');
if (hideButton) {
    hideButton.addEventListener('click', hideCTAAndRestartInactivityCheck);
}

// Iniciar el chequeo de inactividad al cargar la página
resetInactivityCheck();
console.log("Chequeo de inactividad iniciado.");