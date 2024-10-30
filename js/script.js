document.addEventListener("scroll", () => {
    const timeline = document.querySelector(".timeline");
    const progressBar = document.getElementById("progress-bar");
  
    // Altura del timeline y posición en la pantalla
    const timelineTop = timeline.offsetTop;
    const timelineHeight = timeline.scrollHeight;
    const viewportHeight = window.innerHeight;
  
    // Desplazamiento desde la parte superior de la ventana hasta el inicio del timeline
    const scrollPosition = window.scrollY - timelineTop;
  
    // Calcular la altura de la barra de progreso
    const progressHeight = Math.max(0, Math.min(scrollPosition + viewportHeight, timelineHeight));
    progressBar.style.height = `${progressHeight}px`;
  });
  