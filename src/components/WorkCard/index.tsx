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
    hasDeploy
      ? window.open(deployLink, '_blank')
      : console.log(
          `sorry we don't have deploy for this app, opening see more `
        );
  };
  let debug = () => {};
  return (
    <>
      <div className="cardContainer">
        <div className="ContainerText">
          <h2 className="TextTitle">{title}</h2>
          <div className="ContainerImgTechnology">
            {technologiesFront?.map((t: W.Technology) => {
              return (
                <img
                  key={t.name}
                  className="technologyImg"
                  src={t.img}
                  alt={`imagem do ${t.name} `}
                />
              );
            })}
            {technologiesBack?.map((bt: W.Technology) => {
              return (
                <img
                  key={bt.name}
                  className="technologyImg"
                  src={bt.img}
                  alt={`imagem do ${bt.name} `}
                />
              );
            })}
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

          <div className="ContainerDeploy" onClick={handleClickDeploy}>
            {hasDeploy ? (
              <>
                <span className="TextGitWeb">Deploy</span>
                <span className="svgContainer"></span>
              </>
            ) : null}
          </div>
          <div className="ContainerButton">
            <button className="seeMore" onClick={debug}>
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
