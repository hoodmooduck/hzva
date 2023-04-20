import './matizFlyBlock.scss';
import matizPicture from '../../assetss/image/matiz1.png'
import matizBoom from '../../assetss/image/boomMatiz.mp4'
import matizFly from '../../assetss/image/flyMatiz.mp4'
import { useRef } from 'react';

function MatizFlyBlock() {
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
      <div className='matizBlock'>
          <div className="conteiner">
              <div className="matizFly">
			  	<div className="matizFlyImgBack">
                  <img src={matizPicture} alt="matyz" />
                </div>
				<div className="pinkShadow"></div>
                <div ref={titleRef} className="matizFlyText mainTitle">
                  Большой онлайн и буст популярности дали стримы на <span className='pinkText'>Матизе</span>
				  
                </div>
				
                
              </div>
          </div>
          <div className="matizJump">
		  	<div className="matizJumpInfoBlock matizFly">
			  <video playsInline muted loop autoPlay src={matizFly} />
			  <div className="matizJumpText">		  	
			  		Прыжок с трамплина дал  ребятам побить свой рекорд 
					<span> по онлайну<div className='online82k'>82&nbsp;000</div></span>
			  </div>
			</div>


            <div className="matizBlockLinesOnline">
            	<span className='matizBlockOnlineLine'>
					<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
					<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
            	</span>
            	<span className='matizBlockOnlineLine'>
					<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
            	</span>
            	<span className='matizBlockOnlineLine'>
					<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
            			82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
            		<span className='pinkText'>82&nbsp;000&nbsp;</span>
						82&nbsp;000&nbsp;
            	</span>
            </div>

          </div>
		  <div className="matizJump">
		  	<div className="matizJumpInfoBlock matizBoom">
				  <video playsInline muted loop autoPlay src={matizBoom} />
			  <div className="matizJumpText">
			  	Но перебить рекорд после трамплина смог взрыв матиза
				<span> пик онлайна был<div className='online92k'>92&nbsp;000</div></span>
			  </div>
			</div>


            <div className="matizBlockLinesOnline">
            	<span className='matizBlockOnlineLine'>
					<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
						92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>	
						92&nbsp;000&nbsp;
            	</span>
            	<span className='matizBlockOnlineLine'>
					<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
						92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>	
						92&nbsp;000&nbsp;
            	</span>
				<span className='matizBlockOnlineLine'>
					<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
            			92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>
						92&nbsp;000&nbsp;
            		<span className='pinkText'>92&nbsp;000&nbsp;</span>	
						92&nbsp;000&nbsp;
            	</span>
            </div>
          </div>
      </div>
    );
}
  
  export default MatizFlyBlock;