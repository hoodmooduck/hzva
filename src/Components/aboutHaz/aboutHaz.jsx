import { useRef } from 'react';
import './aboutHaz.scss';
import CardsHaz from './cardsHaz/cardsHaz';

function AboutHaz() {
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
      <div id='hype' className='aboutHaz'>
             <div className="aboutHazColumn">
                 <div className="conteiner">
                    <div ref={titleRef} className="aboutHazTitle mainTitle">
                       Каждый из ребят очень <span className='pinkText'>уникален</span> и привносит свою лепту в Хазяев
                    </div>
                 </div>
                 <div className="aboutHazCards">
                   <CardsHaz />
                 </div>
             </div>
         
      </div>
    );
}
  
  export default AboutHaz;