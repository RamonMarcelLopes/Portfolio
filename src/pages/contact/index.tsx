import './index.css';
import Header from '../../components/HeaderToBack';
import * as L from './language';
import { useState } from 'react';

const Contact = () => {
  let sendEmail = (): void => {
    const enderecoEmail = 'ramonlopesdev@gmail.com';
    const link = `mailto:${enderecoEmail}`;
    window.open(link);
  };
  let sendWhats = () => {
    const numero = '42999952003';
    const link = `https://wa.me/${numero}`;
    window.open(link);
  };

  let en: L.Texts = L.textEN;
  let pt: L.Texts = L.textPT;
  let [language, setLanguage] = useState<L.Texts>(en);
  return (
    <>
      <Header />
      <div className="FullContainerContact">
        <div className="ContainerContact">
          <div className="Tracado"></div>
          <h1 className="Contact">{language.mycontact}</h1>
          <div className="Tracado"></div>
        </div>
        <div className="InformationContactContainer">
          <div className="ContactMe">
            <h1>{language.contactMe}</h1>
          </div>
          <div className="ContainerContacts">
            <div className="LnContainer">
              <img
                className="LnImg"
                src="https://skillicons.dev/icons?i=gmail"
              />
              <h2 className="canClick" onClick={sendEmail}>
                ramonlopesdev@gmail.com
              </h2>
            </div>

            <div className="LnContainer">
              <img
                className="LnImg"
                src="https://skillicons.dev/icons?i=linkedin"
              />
              <a
                href="https://www.linkedin.com/in/ramon-lopes-santana/"
                target="_blank"
                rel="Ramon Lopes linkedin"
              >
                <h2 className="canClick">Ramon Lopes</h2>
              </a>
            </div>
            <div className="LnContainer">
              <img
                className="LnImg"
                src="https://jacaimages.vercel.app/imgs/logos/whatsapp.png"
                alt=""
              />
              <h2 className="canClick" onClick={sendWhats}>
                (42) 999952003
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
