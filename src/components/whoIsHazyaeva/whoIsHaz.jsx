import './whoIsHaz.scss';
import '../../styles/index.scss';
import perdevich_upal from '../../assetss/image/perdevich_upal_smeshno.mp4';
import { useRef } from 'react';

function WhoIsHaz() {
  const titleRef = useRef();
  window.addEventListener('scroll', (e)=>{
    let top;
    if(titleRef.current){
       top = titleRef.current.getBoundingClientRect().top;
       if((top <= 1000)){
        titleRef.current.classList.add('mainTitle_show')
        }
    }
    return () => window.removeEventListener('scroll')
  })

    return (
      <div className='whoIsHaz'>
          <div className="conteiner">
              <div className="whoIsHazColumn">
                  <div ref={titleRef} id='whoIsHaz' className="whoIsHazTitle mainTitle">
                    Сейчас вы узнаете в приятном визуальном формате, 
                    а кто же такие эти ваши <span className='pinkText'>Хазяева</span>?
                    <span className='whoIsHazEyes'>
                        <div><span></span></div>
                        <div><span></span></div>
                    </span>
                  </div>
                  <div className="whoIsHazGifElement">
                    <video loop autoPlay muted src={perdevich_upal} alt="rofloGif" />
                  </div>
              </div>
          </div>
      </div>
    );
}
  
  export default WhoIsHaz;