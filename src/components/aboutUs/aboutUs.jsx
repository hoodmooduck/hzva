import './aboutUs.scss';
import logoStarojil from '../../assetss/image/logo_aboutUs.svg'
import { useState } from 'react';
import ContextComp from '../parentContext';
import { useContext } from 'react';
import ContextContent from '../contextConetnt';


function AboutUs(props) {
  const { setIsActive } = useContext(ContextComp)
  const { setIsExile } = useContext(ContextContent)
  function changeOpen(){
    document.querySelector('html').classList.add('disableScroll')	
    setIsActive(true)
    setIsExile(false);
  }

    return (
      <div className='aboutUs'>
         <div className="conteiner">
            <div className="aboutUsColumn">
              <div className="aboutUsLogo">
                <img src={logoStarojil} alt="LogoStarojil" />
              </div>
              <div onClick={changeOpen} className="aboutUsButton hoverAnimBtn">
                <div>Узнать подробнее <span>о Старожилах</span></div>
              </div>
            </div>
         </div>
      </div>
    );
}
  
  export default AboutUs;