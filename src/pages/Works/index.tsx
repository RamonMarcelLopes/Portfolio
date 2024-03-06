import Header from '../../components/HeaderToBack';
import './index.css';
import WorkCard from '../../components/WorkCard';
import * as W from '../../mocks/works';
const Works = () => {
  return (
    <>
      <Header />
      <div className="containerAllWorks">
        <div className="ContainerTracado">
          <div className="TracadoWorks">.</div>
          <h1 className="h1Myworks">{'My Works'}</h1>
          <div className="TracadoWorks">.</div>
        </div>
        <div className="MyWorksDisplay">
          {W.works.map((e: W.Work) => {
            return (
              <WorkCard
                title={e.title}
                img={e.img}
                hasDeploy={e.hasDeploy}
                deployLink={e.deployLink}
                github={e.github}
                technologiesFront={e.technologiesFront}
                key={e.id}
                technologiesBack={e.technologiesBack}
                id={e.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Works;
