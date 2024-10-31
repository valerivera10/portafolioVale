

document.getElementById("acerca").addEventListener("click", () => {
  const barLeft = document.getElementById("bar-left");
  const barRight = document.getElementById("bar-right");
  const content = document.getElementById("content");

  // Mover las barras al centro
  barLeft.style.transform = "translateX(0)";
  barRight.style.transform = "translateX(0)";

  // Esperar a que termine la transición de las barras antes de mostrar el contenido
  setTimeout(() => {
    barLeft.style.transform = "translateX(-100%)";
    barRight.style.transform = "translateX(100%)";
    content.classList.add("visible");
  }, 1000); // Espera el tiempo de la animación de las barras
});

document.getElementById("proyectos").addEventListener("click", () => {
  const barLeft = document.getElementById("bar-left");
  const barRight = document.getElementById("bar-right");
  const content = document.getElementById("content");

  // Mover las barras al centro
  barLeft.style.transform = "translateX(0)";
  barRight.style.transform = "translateX(0)";

  // Esperar a que termine la transición de las barras antes de mostrar el contenido
  setTimeout(() => {
    barLeft.style.transform = "translateX(-100%)";
    barRight.style.transform = "translateX(100%)";
    content.classList.add("visible");
  }, 1000); // Espera el tiempo de la animación de las barras
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");

  // Esperar un momento antes de hacer la transición
  setTimeout(() => {
    preloader.classList.add("hidden"); // Desaparece el preloader
    content.classList.add("visible"); // Muestra el contenido principal
  }, 2000); // Duración del preloader en milisegundos
});

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
  