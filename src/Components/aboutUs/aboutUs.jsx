import "./aboutUs.scss";
import logoStarojil from "../../Shared/image/logo_aboutUs.svg";

function AboutUs() {
  function changeOpen() {
    document.querySelector("html").classList.add("disableScroll");
  }

  return (
    <div className="aboutUs">
      <div className="conteiner">
        <div className="aboutUsColumn">
          <div className="aboutUsLogo">
            <img src={logoStarojil} alt="LogoStarojil" />
          </div>
          <div onClick={changeOpen} className="aboutUsButton hoverAnimBtn">
            <div>
              Узнать подробнее <span>о Старожилах</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
