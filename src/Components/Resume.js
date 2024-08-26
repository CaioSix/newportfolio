import React, { useState, useEffect } from 'react';
import { getGitHubUserData } from '../Functions/GetDadosGit';

function Resume({ data }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getGitHubUserData('CaioSix');  
      setUserData(data);
    }

    fetchData();
  }, []); 
  if (!data) return null;
  console.log(userData, 'teste');

  const skillmessage = data.skillmessage;
  const education = data.education.map(education => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree} <span>&bull;</span><em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ));

  const work = data.work.map(work => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}<span>&bull;</span> <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  const skills = data.skills.map(skills => {
    const className = 'bar-expand ' + skills.name.toLowerCase();
    return (
      <li key={skills.name}>
        <span style={{ width: skills.level }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Resume;
