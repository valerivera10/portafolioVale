export const acercaDe = async () => {
  document.querySelector("#main").innerHTML = /*html*/ `
        <div class="main-acerca"> 
            <section class="parte-inicial">
                <div class="biografia">
                    <div>
                        <h1><b>Biografia</b></h1>
                    </div>
                    <div>
                        <p>Soy Valentina, una apasionada desarrolladora de software con una sólida experiencia 
                        en la creación de soluciones tecnológicas orientadas a la optimización de procesos. Me dedico a desarrollar 
                        sistemas eficientes que impulsan la productividad y mejoran la escalabilidad de las operaciones 
                        en empresas de logística, retail y tecnología.
                        
                        Soy una persona que valora el trabajo en equipo y el aprendizaje continuo, lo que me permite estar 
                        en constante crecimiento tanto a nivel técnico como interpersonal. Me esfuerzo por crear sistemas de 
                        gestión eficientes y escalables, siempre buscando formas innovadoras de resolver problemas y generar 
                        un impacto positivo en las organizaciones y la comunidad.
                        </p>
                    </div>
                </div>
                <div class="imagen-inicial">
                    <div>
                        <img src="./src/imgs/main-img2.png">
                    </div>
                </div>
            </section>
            <section class="habilidades">
                <h1>Skills</h1>
                <div class="diagram-container">
                    <!-- Circles -->
                    <div class="circle circle1"></div>
                    <div class="circle circle2"></div>
                    <div class="circle circle3"></div>
                    <div class="circle circle4"></div>
                
                    <!-- Center Skill -->
                    <div id="skill" class="center-skill">Web</div>
                
                    <!-- Skills -->
                    <div class="skill Python">Python</div>
                    <div class="skill Postgresql">Postgresql</div>
                    <div class="skill Html">Html</div>
                    <div class="skill javascript">JavaScript</div>
                    <div class="skill MySQL">MySQL</div>
                    <div class="skill Springboot">Springboot</div>
                    <div class="skill Java">Java</div>
                    <div class="skill css">CSS</div>
                </div>
            </section>
            <section class="MV">
                <div class="mision">
                    <h1>Mision</h1>
                    <p>Mi misión profesional es desarrollar soluciones tecnológicas innovadoras que optimicen procesos logísticos y mejoren la toma de decisiones en empresas de logística, retail y tecnología. Con enfoque en software, geolocalización y bases de datos, diseño sistemas de gestión de inventarios y ventas que reducen tiempos de respuesta y maximizan la eficiencia operativa. Comprometida con la colaboración y el aprendizaje continuo, ofrezco soluciones personalizadas que apoyan el crecimiento sostenible de las organizaciones y generan un impacto positivo en la sociedad.</p>
                </div>
                <div class="vision">
                    <h1>Vision</h1>
                    <p>Ser un referente en el desarrollo de soluciones tecnológicas para la optimización de procesos logísticos y eficiencia operativa empresarial, generando un impacto positivo en el sector. Aspiro a liderar proyectos innovadores que aborden problemáticas sociales y ambientales, en equipos multidisciplinarios que impulsen la colaboración y el aprendizaje continuo. Comprometida con la gestión eficiente y la comunicación efectiva, busco diversificar mi cartera de clientes mediante soluciones adaptables y escalables para múltiples industrias, fortaleciendo constantemente mis habilidades técnicas y personales para enfrentar los desafíos del entorno laboral actual.</p>
                </div>
            </section>
            <section class="education">

                <div class="container">
                    <div class="timeline">
                        <h1>Educacion</h1>
                        <div class="progress-bar" id="progress-bar"></div>
                    
                    <!-- Timeline Item 1 -->
                        <div class="timeline-item">
                            <div class="dot"></div>
                            <div class="content">
                                <h3>Campuslands</h3>
                                <p class="minitext">2024 | Zona Franca, Bucaramanga</p>
                                <p class="normaltext">Certificación en centro de estudio con duracion de 10 meses sobre desarrollo web con enfoques en Fullstack.</p>
                            </div>
                        </div>
                    
                    <!-- Timeline Item 2 -->
                        <div class="timeline-item">
                            <div class="dot"></div>
                            <div class="content">
                                <h3>Colegio Andalucia</h3>
                                <p class="minitext">2023 | Floridablanca, Santander</p>
                                <p class="normaltext">Titulo de bachiller con un desempeño destacable y ocupando puestos honorificos en el año escolar.</p>
                            </div>
                        </div>
            
                    </div>
                </div>
            </section>
            
            <script src="./js/script.js"></script>
        </div>
    `;
};

export const proyectos = async () => {
  document.querySelector("#main").innerHTML = /*html*/ `
  <section class="main-proyectos">

  <div class="proyecto">
      <div class="img">
          <img src="./src/imgs/project1img.avif" alt="">
      </div>
      <div class="info">
          <div class="titulo">
              <h1>Confecciones Pepita</h1>
          </div>
          <div class="descripcion">
              <p>El proyecto "Confecciones Pepita" es una tienda 
              en línea dedicada a ofrecer moda y confección, 
              enfocándose en brindar prendas de alta calidad, 
              estilo y comodidad. Se orienta a realzar el estilo 
              personal de los clientes, ofreciendo una amplia gama 
              de productos que se adaptan a diversas necesidades y 
              estilos de vida.</p>
          </div>
          <div class="repo">
              <a href="https://github.com/SebastianDuarte13/Confecciones_Pepita">
                  <button>Visit Project</button>
              </a>
          </div>
      </div>
  </div>

  <div class="proyecto">
      <div class="img">
          <img src="./src/imgs/project2img.avif">
      </div>
      <div class="info">
          <div class="titulo">
              <h1>Programa De Seguimiento Campusland</h1>
          </div>
          <div class="descripcion">
              <p>Programa de seguimiento para CampusLand, un centro
              de reclutamiento intensivo de jóvenes programadores. 
              Los usuarios pueden registrarse y se les asigna un horario, 
              un salón y un profesor, facilitando la organización y gestión 
              del proceso de formación. El sistema busca optimizar la asignación 
              de recursos para mejorar la experiencia educativa de los estudiantes.
              </p>
          </div>
          <div class="repo">
              <a href="https://github.com/valerivera10/proyectoPython">
                  <button>Visit Project</button>
              </a>
          </div>
      </div>
  </div>

  <div class="proyecto">
      <div class="img">
          <img src="./src/imgs/project3img.avif" alt="">
      </div>
      <div class="info">
          <div class="titulo">
              <h1>Empresa</h1>
          </div>
          <div class="descripcion">
              <p>sistema de gestión empresarial que optimiza procesos
               clave como inventarios, ventas y órdenes de compra, 
               diseñado para mejorar la eficiencia operativa mediante 
               una arquitectura escalable y adaptable a diferentes industrias.</p>
          </div>
          <div class="repo">
              <a href="https://github.com/valerivera10/empresa">
                  <button>Visit Project</button>
              </a>
          </div>
      </div>
  </div>

  
</section>
    `;
};
