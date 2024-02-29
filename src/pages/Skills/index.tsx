import './index.css';
import * as T from '../../mocks/skills';
import * as L from './language';
import Header from '../../components/HeaderToBack';
import { useState } from 'react';
import { useLanguageContext } from '../../contexts/language';
const Skills = () => {
  let sk: T.Technology[] = T.technology;
  let { interfaceLanguage } = useLanguageContext() ?? {};
  let [skills, setSkills] = useState<T.Technology[]>(sk);

  return (
    <>
      <Header />
      <div className="containerAllSkills">
        <div className="mySkillsTitleContainer">
          <div className="Tracado"></div>
          <h1 className="MySkillsH1">{interfaceLanguage?.skills}</h1>
          <div className="Tracado"></div>
        </div>
        <div className="mySkills">
          {skills.map((e: T.Technology) => {
            return (
              <>
                <img key={e.id} className="imgIc" src={e.img} alt="" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Skills;
