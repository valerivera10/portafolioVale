export const acercaDe = async () => {
  document.querySelector("#main").innerHTML = /*html*/ `
  <section class="-center-img">
  <div>
      <img src="./src/imgs/main-img2.png">
  </div>
</section>
<section class="-main-text">
  <div>
      <h1>Biografia</h1>
  </div>
  <div>
      <p>Soy Valentina, una apasionada desarrolladora de software con una sólida experiencia 
      en la creación de soluciones tecnológicas orientadas a la optimización de procesos. 
      Especializada en geolocalización, gestión de inventarios y ventas, me dedico a desarrollar 
      sistemas eficientes que impulsan la productividad y mejoran la escalabilidad de las operaciones 
      en empresas de logística, retail y tecnología.
      
      Soy una persona que valora el trabajo en equipo y el aprendizaje continuo, lo que me permite estar 
      en constante crecimiento tanto a nivel técnico como interpersonal. Me esfuerzo por crear sistemas de 
      gestión eficientes y escalables, siempre buscando formas innovadoras de resolver problemas y generar 
      un impacto positivo en las organizaciones y la comunidad.
      </p>
  </div>

  <section class="habilidades">
      <div>
          <h1>Habilidades</h1>
      </div>

  </section>

</section>     
    `;
};

export const proyectos = async () => {
  document.querySelector("#main").innerHTML = /*html*/ `
        <section class="center-img">
            <div>
                <img src="./src/imgs/main-img2.png">
            </div>
        </section>
        <section class="main-text">
            <div>
                <h1>Laura Valentina</h1>
            </div>
            <div>
                <p>Desarrolladora de software comprometida con la creacion de sistemas de gestion eficientes que potencian el crecimiento sostenible en las industrias de logistica, retail y tecnologia, creo firmemente en el aprendizaje continuo y la colaboracion como motores de innovación en cada proyecto que realizo</p>
            </div>
            <div>
                <button>Hoja de vida</button>
            </div>
        </section>    
    `;
};
