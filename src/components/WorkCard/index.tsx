import './index.css';
import * as W from '../../mocks/works';
import git from '../../../public/git.svg';
import web from '../../../public/web.svg';
import { useState } from 'react';
const WorkCard = () => {
  let [Works, setWorks] = useState<W.Work[]>(W.works);
  return (
    <>
      <div className="cardContainer">
        <div className="ContainerText">
          <h2 className="TextTitle">{Works[0].title}</h2>
          <div className="ContainerImgTechnology">
            <img
              className="technologyImg"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="technology"
            />
            <img
              className="technologyImg"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="technology"
            />
            <img
              className="technologyImg"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="technology"
            />
          </div>
        </div>

        <div className="ContainerImage">
          <img
            className="imageWork"
            src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1282566/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
            alt="image do projeto"
          />
        </div>
        <div className="ContainerGitDeploy">
          <div className="ContainerGithub">
            <span className="TextGitWeb">Github</span>
            <span className="akar-icons--github-fill"></span>
          </div>
          <div className="ContainerDeploy">
            <span className="TextGitWeb">Deploy</span>
            <span className="svgContainer"></span>
          </div>
          <div className="ContainerButton">
            <button className="seeMore">See More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
