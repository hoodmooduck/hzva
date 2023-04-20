import { useRef, useState } from 'react';
import MatizGame from './matizGame/matizGame.jsx';
import WhowWinGame from './whoWinGame/whoWinGame';
import './hazGames.scss';

function HazGames() {
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
      <div id='games' className='hazGames'>
          <div className="conteiner">
             <div className="hazGamesColumn">
               <div ref={titleRef} className="hazGamesTitle mainTitle">
            		Давайте немного <span className='pinkText'>поиграем</span> и <span className='pinkText'>отдохнем</span>
               </div>
               <div className="hazGamesMainBlock">
				   <div className="hazGames_matizGame gameBlock">
						<MatizGame/>
				   </div>
				   <div className="hazGames_whoWin gameBlock">
				   		<div className="whoWinMainScene">
							<WhowWinGame />
						</div>
						
				   </div>
			   </div>
             </div>
          </div>
      </div>
    );
}
  
  export default HazGames;