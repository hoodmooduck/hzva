import "./aboutUs.scss";
import logoStarojil from "../../Shared/image/logo_aboutUs.svg";
import {
  componentNameMap,
  useModalContext,
} from "../../Hooks/useModalContext.ts";

function AboutUs() {
  const { openModal } = useModalContext();
  return (
    <div className="aboutUs">
      <div className="conteiner">
        <div className="aboutUsColumn">
          <div className="aboutUsLogo">
            <img src={logoStarojil} alt="LogoStarojil" />
          </div>
          <div className="aboutUsButton hoverAnimBtn">
            <div
              onClick={() => openModal(componentNameMap.AboutUs, true, true)}
            >
              Узнать подробнее <span>о Старожилах</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
