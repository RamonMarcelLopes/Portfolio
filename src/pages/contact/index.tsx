import './index.css';
import Header from '../../components/HeaderToBack';
import { useLanguageContext } from '../../contexts/language';
import HeaderMobile from '../../components/mobile/header';

const Contact = () => {
  let { interfaceLanguage } = useLanguageContext() ?? {};
  let sendEmail = (): void => {
    const enderecoEmail = 'ramonlopesdev@gmail.com';
    const link = `mailto:${enderecoEmail}`;
    window.open(link);
  };
  let sendWhats = () => {
    const numero = '+5542999952003';
    const link = `https://wa.me/${numero}`;
    window.open(link);
  };

  return (
    <>
      <HeaderMobile />
      <Header />
      <div className="FullContainerContact">
        <div className="ContainerContact">
          <div className="Tracado"></div>
          <h1 className="Contact">{interfaceLanguage?.mycontact}</h1>
          <div className="Tracado"></div>
        </div>
        <div className="InformationContactContainer">
          <div className="ContactMe">
            <h1>{interfaceLanguage?.contactMe}</h1>
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
                +55(42)999952003
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
