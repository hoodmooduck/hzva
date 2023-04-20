import { useRef } from 'react';
import './frameTamerTalk.scss';
import talkGif from '../../assetss/image/frameTamerTalking.mp4'




function FrameTamerTalk() {
    const titleRef = useRef();
  window.addEventListener('scroll', (e)=>{
    let top;
    if(titleRef.current){
       top = titleRef.current.getBoundingClientRect().top;
       if((top <= 900)){
        titleRef.current.classList.add('mainTitle_show')
        }
    }
    return () => window.removeEventListener('scroll')
    })
  return (
    <div className='frameTamerTalk'>
        <div className="conteiner">
            <div className="frameTamerTalkColumn">
                <div ref={titleRef} className="frameTamerTalkTitle mainTitle">
                Очень точно описал сквад <span className='pinkText'>Фраме Тамер</span> <br/>в интервью для Вписки
                </div>
                <div className="frameTamerTalkQuote">
                    <div className="frameTamerTalkGif">
                        <video playsInline autoPlay muted loop src={talkGif}></video>
                    </div>
                    <div className="frameTamerTalkText">
                        <span className='pinkText'>«</span>Просто пацаны, которым не хватает детства, которые играют в дорогие игрушки. Что может быть интереснее?<span className='pinkText'>»</span>
                    </div>
                    <div className="frameTamerTalkWatchYtButton hoverAnimBtn">
                    <span className='iconYT'></span><a target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=4i49YXrF9BU">Посмотреть <span className='pinkText'>полное</span> интервью</a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FrameTamerTalk;