import './index.css';
import * as W from '../../mocks/works';
import git from '../../../public/git.svg';
import web from '../../../public/web.svg';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
const WorkCard = ({
  title,
  img,
  github,
  hasDeploy,
  deployLink,
  technologiesFront,
  technologiesBack,
}: W.Work) => {
  let handleClickGit = () => {
    window.open(github, '_blank');
  };
  let handleClickDeploy = () => {
    window.open(deployLink, '_blank');
  };
  return (
    <>
      <div className="cardContainer">
        <div className="ContainerText">
          <h2 className="TextTitle">{title}</h2>
          <div className="ContainerImgTechnology">
            {technologiesFront != undefined
              ? technologiesFront?.map((t: W.Technology) => {
                  return (
                    <img
                      className="technologyImg"
                      src={t.img}
                      alt={`imagem do ${t.name} `}
                    />
                  );
                })
              : null}
          </div>
        </div>

        <div className="ContainerImage">
          <img
            className="imageWork"
            src={img}
            alt={`imagem do projeto ${title}`}
          />
        </div>
        <div className="ContainerGitDeploy">
          <div className="ContainerGithub" onClick={handleClickGit}>
            <span className="TextGitWeb">Github</span>
            <span className="akar-icons--github-fill"></span>
          </div>

          {hasDeploy ? (
            <div className="ContainerDeploy" onClick={handleClickDeploy}>
              <span className="TextGitWeb">Deploy</span>
              <span className="svgContainer"></span>
            </div>
          ) : null}
          <div className="ContainerButton">
            <button className="seeMore">See More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
