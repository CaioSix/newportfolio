import React, { useState, useEffect } from 'react';
import { getGitHubUserData } from '../Functions/GetDadosGit';

const Portfolio = (props) => {
  const [userBackWorks, setUserBackWorks] = useState(null);
  const [showBackEndProjects, setShowBackEndProjects] = useState(false); // Estado para controlar a visibilidade da lista

  // Carrega os projetos back-end do GitHub
  useEffect(() => {
    async function fetchData() {
      const data = await getGitHubUserData('CaioSix');
      setUserBackWorks(data);
    }

    fetchData();
  }, []);

  // Se os projetos back-end ainda não foram carregados, retorne null
  if (!userBackWorks) {
    return null;
  }

  console.log(userBackWorks, 'projetos back ');

  // Mapeia os projetos com imagem (front-end)
  let projects = null;
  if (props.data) {
    projects = props.data.projects.map((project) => {
      const projectImage = 'images/portfolio/' + project.image;
      return (
        <div key={project.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={project.url} title={project.title}>
              <img alt={project.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  // Mapeia os projetos back-end (do GitHub)
  const projetosBackEnd = userBackWorks.map((projetoBack) => (
    <li key={projetoBack.name}>
      <h3>
        <a href={projetoBack.html_url} target="_blank" rel="noopener noreferrer">
          {projetoBack.name}
        </a>
      </h3>
    </li>
  ));

  // Função para alternar a visibilidade da lista
  const toggleBackEndProjects = () => {
    setShowBackEndProjects(!showBackEndProjects);
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Dê uma olhada em alguns dos meus projetos.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>

          {/* Seção Projetos Back-End */}
          <div className="back-end-projects">
            <div className="row">
              <div className="three columns header-col">
                <h1>
                  <span>Projetos Back-End</span>
                  {/* Seta para mostrar/ocultar a lista */}
                  <span
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                    onClick={toggleBackEndProjects}
                  >
                    {showBackEndProjects ? '▼' : '▶'} {/* Alterna a seta */}
                  </span>
                </h1>
              </div>
              <div className="nine columns main-col">
                <div className="row item">
                  <div className="twelve columns">
                    {/* Exibe ou oculta a lista de projetos com base no estado */}
                    {showBackEndProjects && (
                      <ul>
                        {projetosBackEnd}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
