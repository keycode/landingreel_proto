
let mainEmbla;
let nestedEmbla; 

var isInIframe = (parent !== window);

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('message', function(event) {
     
        if (event.origin === window.location.origin) { 
            console.log(event.data);
            if(event.data=="slidedown") mainEmbla.scrollNext();
            if(event.data=="slideup") mainEmbla.scrollPrev();
        }
    });
     //   $(".landindreel-container").css("padding-right","10px")
  
    const emblaNode = document.querySelector('.landingreel');
    const emblaDots = document.querySelector('.landingreel-dots');
    const slides = emblaNode.querySelectorAll('.landingreel__slide');


    const mainEmblaOptions = {
        axis: 'y', 
        loop: false, 
        dragFree: false, 
        align: 'center', 
        

        
    };

    mainEmbla = EmblaCarousel(emblaNode, mainEmblaOptions);

    // --- 2. Configurar los Dots de Navegación ---
    const setupDots = () => {
        const dots = emblaDots.querySelectorAll('.landingreel-dot');

        // Función para actualizar la clase 'is-selected' del dot activo
        const updateDots = () => {
            const selected = mainEmbla.selectedScrollSnap();
            dots.forEach((dot, index) => {
                if (index === selected) {
                    dot.classList.add('is-selected');
                } else {
                    dot.classList.remove('is-selected');
                }
            });
        };


        // Añadir listeners de click a los dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                mainEmbla.scrollTo(index);
            });
        });

        // Actualizar los dots al seleccionar un slide y al inicializar
        mainEmbla.on('select', updateDots);
        mainEmbla.on('init', updateDots);
    };

    const setupLines = (mode) => {

       
        const dots = emblaDots.querySelectorAll('.landingreel-dot');

     
            dots.forEach((dot, index) => {
                if (mode == 'dark') {
                    console.log('add darkline')
                    dot.classList.add('darkline');
                } else {
                    dot.classList.remove('darkline');
                }
            });
        
        

    }

    setupDots(); // Llamar para configurar los dots

    // --- 3. Definir Funciones de Entrada y Salida para Cada Slide ---

    // Slide 1: Entrada de texto con fade-in
    const handleSlide1Entry = () => {
        console.log('Entrando a Slide 1');

        setupLines(); 
       
    };
    const handleSlide1Exit = () => {
        console.log('Saliendo de Slide 1');
        
    };

    // Slide 2: Video al estilo TikTok/Reels
    const handleSlide2Entry = () => {
        console.log('Entrando a Slide 2');

        setupLines('dark'); 
        const videoElement = slides[1].querySelector('video');
        if (videoElement) {
            videoElement.play().catch((error) => {
                console.error('Error al reproducir video en Slide 2:', error);
            });
        }
    };
    const handleSlide2Exit = () => {
        console.log('Saliendo de Slide 2');
        const videoElement = slides[1].querySelector('video');
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0; // Reiniciar video al salir
        };
       
    };

    // Control de mute/unmute para el video de la Slide 2
    const soundToggleButton = slides[1].querySelector('.sound-toggle');
    const videoElementSlide2 = slides[1].querySelector('video');
    if (soundToggleButton && videoElementSlide2) {
        soundToggleButton.addEventListener('click', () => {
            videoElementSlide2.muted = !videoElementSlide2.muted;
            const icon = soundToggleButton.querySelector('i');
            if (videoElementSlide2.muted) {
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
            } else {
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            }
        });
    }

    // Slide 3: Carrusel horizontal anidado
    const handleSlide3Entry = () => {
        console.log('Entrando a Slide 3');
        setupLines('dark'); 
        escribetexto();
        // Se ha quitado la lógica de reanudar el autoplay
    };
    const handleSlide3Exit = () => {
        console.log('Saliendo de Slide 3');
        if (nestedEmbla) {
            // Se ha quitado la lógica de pausar el autoplay
            // Si quieres que el carrusel anidado se reinicie al volver a entrar,
            // podrías añadir aquí lógica para resetear su posición si no está en loop.
        }
    };

    // Slide 4: Texto de cierre
    const handleSlide4Entry = () => {
        console.log('Entrando a Slide 4');
        setupLines('');
    };
    const handleSlide4Exit = () => {
        console.log('Saliendo de Slide 4');
        // No hay animación específica, solo un log
    };

    // Rellenar el array slidesData con las funciones
    const slidesData = [
        { id: 'slide1', entry: handleSlide1Entry, exit: handleSlide1Exit },
        { id: 'slide2', entry: handleSlide2Entry, exit: handleSlide2Exit },
        { id: 'slide3', entry: handleSlide3Entry, exit: handleSlide3Exit },
        { id: 'slide4', entry: handleSlide4Entry, exit: handleSlide4Exit },
    ];

    // --- 4. Adjuntar Listeners de Eventos de Embla para Entrada/Salida ---

    // Función para manejar el cambio de slide y disparar eventos de entrada/salida
    const onSelect = () => {
        const previousIndex = mainEmbla.previousScrollSnap();
        const currentIndex = mainEmbla.selectedScrollSnap();

        // Disparar evento de salida para el slide anterior
        if (slidesData[previousIndex]) {
            slidesData[previousIndex].exit(); // Llama a la lógica de salida específica (ej: pausa de video)
            // Animación de salida: zoom out y fade out
            gsap.to(slides[previousIndex], {
                opacity: 0.7,
            
                duration: 0.1,
                ease: 'fade.in',
            });
        }

        // Disparar evento de entrada para el slide actual
        if (slidesData[currentIndex]) {
            console.log("entro en la slide " + slides[currentIndex]);
            slidesData[currentIndex].entry(); // Llama a la lógica de entrada específica (ej: reproducción de video)
            // Animación de entrada: zoom in y fade in
            gsap.fromTo(
                slides[currentIndex],
                { opacity: 0.7 }, // Comienza desde escalado y desvanecido
                { opacity: 1,  ease: 'fade.in' } // Anima a tamaño normal y opacidad completa
            );
        }

        // Asegurar que todas las slides no seleccionadas estén en el estado "salido"
        slides.forEach((slide, index) => {
            if (index !== currentIndex && index !== previousIndex) {
                gsap.set(slide, { opacity: 1});
            }
        });
    };

    // Manejar pausa/reproducción de video principal durante el arrastre
    mainEmbla.on('pointerDown', () => {
        const currentVideo =
            slides[mainEmbla.selectedScrollSnap()].querySelector('video');
        if (currentVideo) {
            currentVideo.pause();
        }
    });

    mainEmbla.on('settle', () => {
        // 'settle' se dispara cuando el carrusel deja de moverse
        const currentVideo =
            slides[mainEmbla.selectedScrollSnap()].querySelector('video');
        if (currentVideo) {
            currentVideo.play().catch((error) => {
                console.error(
                    'Error al reanudar reproducción después de arrastre:',
                    error
                );
            });
        }
    });

    mainEmbla.on('select', onSelect); // Escucha el evento de cambio de slide

    // Disparar el evento de entrada para el slide inicial al cargar la página
    mainEmbla.on('init', () => {
        onSelect(); // Esto configurará el estado inicial para la primera slide y las demás
        // Asegurar que todas las slides comiencen en un estado "oculto" excepto la primera
        slides.forEach((slide, index) => {
            if (index !== mainEmbla.selectedScrollSnap()) {
                gsap.set(slide, { opacity: 1 });
            }
        });
    });
});


