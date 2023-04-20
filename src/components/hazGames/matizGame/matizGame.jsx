
import { useState, useRef, useEffect} from 'react';
import matizFrame from '../../../assetss/image/matizGame/background/matiz.png'
import ufo from '../../../assetss/image/matizGame/background/obs_ufo.png'
import gTower from '../../../assetss/image/matizGame/background/obs_5gtower.png'
import steve from '../../../assetss/image/matizGame/background/obs_steve.png'
import wheatley from '../../../assetss/image/matizGame/background/obs_wheatley.png'
import './matizGame.scss';

function MatizGame() {
	const crushElement = useRef("crushElement");
	const mainScene = useRef("mainScene");
	const matizRef = useRef("matizRef");
	
	const [hideElements_matizGame, setHideElements_matizGame] = useState(false)
	const [checkJump, setCheckJump] = useState(false)
	const [sprite, setSprite] = useState()
	const [gameOver, setGameOver] = useState(false)
	const [gameScore, setGameScore] = useState(0)


	const hide_matizGame = () =>{
		setHideElements_matizGame(true)
		mainScene.current.classList.add('moveScene');
		let changeFirstEl;
				changeSprite(changeFirstEl);
		setInterval(()=>{	
			checkGameOver()
		},100);
	}
	
	const restartGame = () => {
		hide_matizGame();
		setGameOver(false)
		crushElement.current.classList.remove('hide');
		matizRef.current.classList.remove('hide');
	}

	function matizJump() {
		if(matizRef.current.classList !== 'jump'){
			matizRef.current.classList.add('jump')
			setTimeout(()=>{
				matizRef.current.classList.remove('jump')
				setCheckJump(false)
			},700)
			
		}	
	}
	function changeSprite(randomEl){
		randomEl = parseInt(Math.random() * (1-0+1))
		crushElement.current.classList.add('crushMove')
			if(randomEl === 0){
				setSprite(true)
			} else if(randomEl === 1){
				setSprite(false)
			}
	}
	let crushElX_max = 0;
	function checkGameOver(){
		let matizY = parseInt( matizRef.current.getBoundingClientRect().bottom - mainScene.current.getBoundingClientRect().bottom);
		let crushElY =crushElement.current.getBoundingClientRect().top - crushElement.current.getBoundingClientRect().bottom  ;
		let crushElX = crushElement.current.offsetLeft;
		crushElX_max = crushElX_max > crushElX ? crushElX_max : crushElX;
		
		if(matizY >= crushElY && crushElX > 20 && crushElX < 120){
			setGameOver(true)
			mainScene.current.classList.remove('moveScene');
			crushElement.current.classList.add('hide');
			matizRef.current.classList.add('hide');
		}
	}
	
	useEffect(()=>{
		window.addEventListener('keydown', (e)=>{
			if(checkJump === false){
				if(e.repeat !== true){
					if(e.code === 'Space'){
						e.preventDefault();
						matizJump();
						setCheckJump(true)
					}
				}
			}
				

		})
		
	},[hideElements_matizGame])
    return (
      <div className='matizGame'>
		<div ref={mainScene} onClick={matizJump} className="matizGameMainScene">
			<div className={gameOver === false ? "matizGameOver hide" : "matizGameOver"}>
				<div className="matizGameOverTitle">Game over</div>
				<div onClick={restartGame} className="matizGameOverRestart hoverAnimBtn"><span>Сыграть по новой</span></div>
			</div>
			<div ref={matizRef} className={hideElements_matizGame === false ? "matizMainElement_car hide" : "matizMainElement_car"}>
				<img src={matizFrame} alt="matizFrame" />
			</div>
			<div ref={crushElement} className='gTower crushElement'>
				<img src={sprite === true ? gTower : steve} alt="gTower" />
			</div>
			<div className='ufo'>
				<img src={ufo} alt="ufo" />
			</div>
			<div className='wheatley'>
				<img src={wheatley} alt="wheatley" />
			</div>
			
		</div>
		<div className={hideElements_matizGame === true ? 'hazGamesStartGame hazGamesStartGame_hide' : 'hazGamesStartGame'}>
			<div className="hazGamesStartGameText">Пролетит ли Матиз через препятствия?</div>
			<div onClick={hide_matizGame} className="hazGamesStartGameButton pinkText hoverAnimBtn"><span>Полетать на Матизе</span></div>
		</div>
      </div>
    );
}
  
  export default MatizGame;