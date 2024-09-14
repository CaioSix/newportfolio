import React, { useState, useEffect } from 'react';
import { getGitHubUserData } from '../Functions/GetDadosGit';

function Resume({ data }) {

  if (!data) return null;
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




  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Educação</span></h1>
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
