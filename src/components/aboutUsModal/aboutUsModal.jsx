import './aboutUsModal.scss';
import art from '../../assetss/image/artAboutUsModal.png'
import exileModal from '../../assetss/image/exileModal.png';
import { useContext, useRef, useState, useEffect} from 'react';
import description from './description.json';
import iconClose from '../../assetss/image/iconClose.svg'
import ContextComp from '../parentContext';
import ContextContent from '../contextConetnt';
import tooltip from '../../assetss/image/tooltip.svg'


function AboutUsModal(props) {
  const keyRef = useRef();
  const copyRef = useRef();
  const isActive = useContext(ContextComp)
  const { setIsActive } = useContext(ContextComp)
  const isExile = useContext(ContextContent)
  const [clickCopy, setClickCopy] = useState(false);

  const modalRef = useRef();

  function closeModal() {
    setIsActive(false);
    document.querySelector('html').classList.remove('disableScroll')	
  }
  

  useEffect(()=>{
    copyRef.current.addEventListener("click", e => {
      setClickCopy(true)
      setTimeout(()=>{
        setClickCopy(false)
      },2000)
      navigator.clipboard.writeText(keyRef.current.value)
        .then()
        .catch(err => console.error(err))
    })
    window.addEventListener('scroll', (e)=>{
      modalRef.current.style.top = e.target.documentElement.scrollTop + 'px';
    })
    
  })
    return (
      
      <div ref={modalRef} className={isActive.isActive ? "mainAboutUsModal" :  "mainAboutUsModal hide"}>
        
        <div className='aboutUsModal'>
            <div className="aboutUsModalPicture">
              <img src={ isExile.isExile ? exileModal : art } alt="art" />
            </div>
            <div className="aboutUsModalText">
              <div className="aboutUsModalTitle">
                <span>{ isExile.isExile ? 
                description.Exile.title[0] + description.Exile.title[1]
                : 
                description.AboutUs.title[0] + description.AboutUs.title[1] + description.AboutUs.title[2]}</span>
              </div>
              <div className="aboutUsModalDescription">
                { isExile.isExile ? description.Exile.description : description.AboutUs.description }
              </div>
            </div>
            <div className={isExile.isExile ? "aboutUsModalLinks hide" : "aboutUsModalLinks"}>
              
              <a target='_blank' rel="noreferrer" href="https://www.donationalerts.com/r/starozhili" className="aboutUsModalLink hoverAnim alr">Задонатить</a>
              <button ref={copyRef} href="" className="aboutUsModalLink hoverAnim crpt"> 
              <div className="tooltip">
                {clickCopy ? 'Скопированно!' : 'Скопировать'}
              </div>
              Задонатить в крипте
              </button>
              <input ref={keyRef} hidden value='0xe9a193dB4331Ee910Edb3B9fF8946a98824f675a' readOnly  type="text"/>
              <a target='_blank' rel="noreferrer" href="https://t.me/+17PW-qTXYjxkYjQy" className="aboutUsModalLink hoverAnim tg">Читать нас</a>
            </div>
         </div>
         <div onClick={closeModal} className="iconClose">
            <img src={iconClose} alt="iconClose" />
        </div>
      </div>
    );
}
  
  export default AboutUsModal;