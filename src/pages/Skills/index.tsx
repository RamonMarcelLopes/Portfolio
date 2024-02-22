import './index.css';
import * as T from '../../mocks/skills';
import * as L from './language';
import Header from '../../components/HeaderToBack';
import { useState } from 'react';
const Skills = () => {
  let sk: T.Technology[] = T.technology;
  const pt: L.Texts = L.textPT;
  const en: L.Texts = L.textEN;
  let [skills, setSkills] = useState<T.Technology[]>(sk);
  let [language, setLanguage] = useState<L.Texts>(en);
  return (
    <>
      <Header />
      <div className="containerAllSkills">
        <div className="mySkillsTitleContainer">
          <div className="Tracado"></div>
          <h1 className="MySkillsH1">{language.skills}</h1>
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
