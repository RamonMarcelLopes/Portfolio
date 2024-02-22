import './index.css';
import * as T from '../../mocks/skills';
import Header from '../../components/HeaderToBack';
import { useState } from 'react';
const Skills = () => {
  let sk: T.Technology[] = T.technology;
  let [skills, setSkills] = useState<T.Technology[]>(sk);
  return (
    <>
      <Header />
      <div className="containerAllSkills">
        <div className="mySkillsTitleContainer">
          <div className="Tracado"></div>
          <h1 className="MySkillsH1">My Skills</h1>
          <div className="Tracado"></div>
        </div>
        <div className="mySkills">
          {skills.map((e: T.Technology) => {
            return (
              <>
                <img className="imgIc" src={e.img} alt="" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Skills;
