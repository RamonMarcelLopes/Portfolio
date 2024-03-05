import Header from '../../components/HeaderToBack';
import './index.css';
import WorkCard from '../../components/WorkCard';
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
          {Array.from({ length: 6 }).map((e) => {
            return <WorkCard />;
          })}
        </div>
      </div>
    </>
  );
};
export default Works;
