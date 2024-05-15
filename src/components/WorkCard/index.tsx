import './index.css';
import * as W from '../../mocks/works';
import git from '../../public/git.svg';
import web2 from '../../public/web2.svg';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import Modal from 'react-modal';
import { useLanguageContext } from '../../contexts/language';

Modal.setAppElement('#root');
const WorkCard = ({
  title,
  img,
  github,
  hasDeploy,
  deployLink,
  technologiesFront,
  technologiesBack,
}: W.Work) => {
  let { interfaceLanguage } = useLanguageContext() ?? {};
  let handleClickGit = () => {
    window.open(github, '_blank');
  };
  let handleClickDeploy = () => {
    hasDeploy
      ? window.open(deployLink, '_blank')
      : console.log(
          `sorry we don't have deploy for this app, opening see more `
        ),
      hasDeploy ? null : openModal();
  };
  let [transition, setTransition] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setTransition('modalOpen');
    }, 100);
  };
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setTransition('modalClose');
    }, 100);
  };
  return (
    <>
      {/*  */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="example modal"
        overlayClassName={`modal-overlay ${transition}`}
        className="modal-content"
      >
        <div className="containerAllModal">
          <div className="imageModalContainer">
            <img
              src={img}
              alt={`imagem do projeto ${title}`}
              className="imgForModal"
              onClick={() => window.open(img, '_blank')}
            />
          </div>
          <div className="informationModalContainer">
            <div className="containerTitleModalAndClose">
              <div className="tittleModalContainer">
                <h1 className="h1TitleProject">{title}</h1>
              </div>
              <div className="closeModalContainer" onClick={closeModal}>
                <h4 className="xToClose">X</h4>
              </div>
            </div>
            <div className="containerUsedTechnologies">
              <h4 className="h4UsedTechnologies">
                {interfaceLanguage?.technologiesUsed}
              </h4>
              <div className="imagesFromMap">
                {technologiesFront?.map((tf: W.Technology) => {
                  return (
                    <img
                      className="imgTechnologyToShowOnModal"
                      src={tf.img}
                      alt={tf.name}
                      key={tf.name}
                    />
                  );
                })}
                {technologiesBack?.map((tb: W.Technology) => {
                  return (
                    <img
                      className="imgTechnologyToShowOnModal"
                      src={tb.img}
                      alt={tb.name}
                      key={tb.name}
                    />
                  );
                })}
              </div>
            </div>
            <div className="containerDescriptionProject">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                praesentium quia adipisci amet hic in tempore sapiente rerum
                provident reprehenderit accusamus
              </span>
            </div>
            <div className="containerButtonGitDeploy">
              <button onClick={handleClickGit} className="buttonLink">
                GitHub
                <img className="logos" src={git} alt="icon of github" />
              </button>

              {hasDeploy ? (
                <button onClick={handleClickDeploy} className="buttonLink">
                  Deploy
                  <img className="logos" src={web2} alt="random icon of web" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </Modal>
      {/*  */}
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
            <button className="seeMore" onClick={() => openModal()}>
              {interfaceLanguage?.seeMore}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
