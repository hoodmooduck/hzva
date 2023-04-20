	
import { useState,useRef } from 'react';

import './whoWinGame.scss';

function WhoWinGame() {
	const button = useRef(); 
	const circleText = useRef();
	const interactiveBlock = useRef();
	const noTarget = useRef();
	const smallCircle = useRef();
	const bigCircle = useRef();

	const [hideElements_whoWin, setHideElements_whoWin] = useState(false)
	const [buttonText, setButtonText] = useState(false);
	const [circleClick, setCircleClick] = useState(0)
	let randomEl;

	const hide_whoWin = () =>{
		setHideElements_whoWin(true)
		if(document.documentElement.offsetWidth <= 790){
			smallCircle.current.style.bottom = 75 + '%';
			bigCircle.current.style.bottom = 33 + '%';
		}
		button.current.classList.remove('hide');
		circleText.current.classList.add('disapear')
		setTimeout(()=>{
			noTarget.current.classList.add('noTarget');
		},200)
	}
	
	function whoWin(){
		button.current.classList.add('disapear');
		smallCircle.current.classList.add('clickAnimation');
		setTimeout(()=>{
			smallCircle.current.classList.remove('clickAnimation');
			button.current.classList.remove('disapear');
		},1200)
		randomEl = parseInt(Math.random() * (1-0+1))
		button.current.classList.add('buttonDown');
		setButtonText(true)
		interactiveBlock.current.classList.remove('disapear');
		if(randomEl === 1){
			setCircleClick(1)
		}else{
			setCircleClick(2)
		}
		
	}


	
    return (
      <div className='whoWinGame'>    
      	<div ref={noTarget} className={hideElements_whoWin === true ? "hazGamesStartGame hazGamesStartGame_hide" : "hazGamesStartGame"}>
	  		<div className="hazGamesStartGameText">Кто победит в новом видео у Эксайла?</div>
	  		<div onClick={hide_whoWin} className="hazGamesStartGameButton pinkText hoverAnimBtn"><span>Выбрать победителя</span></div>
	  	</div>
		<div className="whoWinGameScene">
			<div ref={smallCircle} className={circleClick === 0 ? 'whoWin_smallCircle' : circleClick === 1 ? 'whoWin_smallCircle blueTeam clickAnimation' : ' whoWin_smallCircle redTeam clickAnimation' }>
				<span ref={circleText} className='bigText'>?</span><span ref={interactiveBlock} className='smallText disapear'>{circleClick === 1 ? 'Синие\nпобедят' : 'Красные\nпобедят'}</span>
				<button onClick={whoWin} ref={button} className="whoWinGameButton hoverAnimBtn mainButton hide"><span>{ buttonText ? 'Переиграть' : 'Тыкни и узнаешь победителя' }</span></button>
				</div>
			<div ref={bigCircle} className={circleClick === 0 ? 'whoWin_bigCircle' : circleClick === 1? 'whoWin_bigCircle blueTeam' : ' whoWin_bigCircle redTeam'}>
				<div className={circleClick === 0 ? 'whoWin_middleCircle' : circleClick === 1 ? 'whoWin_middleCircle blueTeam' : ' whoWin_middleCircle redTeam'}></div>
			</div>
			
		</div>
      </div>
    );
}
  
  export default WhoWinGame;