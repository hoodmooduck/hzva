import './cardPersonText.scss';
import SocialMedia from '../cardPersonText/socialMedia/socialMedia';
import { forwardRef, useContext, useRef } from 'react';
import ContextComp from '../../../parentContext';
import ContextConetnt from '../../../contextConetnt';
import { useEffect } from 'react';



function CardPersonText(props) {
  const { setIsActive } = useContext(ContextComp)
  const { setIsExile } = useContext(ContextConetnt)
  function isEx(){
    document.querySelector('html').classList.add('disableScroll')	
    setIsActive(true)
    setIsExile(true)
  }
  function notEx(){
    setIsActive(false)
  }

    return (
      <div className='cardPersonText'>
        <div className="cardPersonDescriptionMain">{/* нужно разделить на 2 */}
              <div className="cardPersonTitle">
                {props.items.nickName}
              </div>

              <div onClick={props.items.onclck ? isEx : notEx} className="cardPersonInfo">
                {props.items.fullName[0]}<span className='pinkText'>{props.items.fullName[1]}</span>
              </div>

              <div className="cardPersonDescription">
                {props.items.description}
              </div>

              <div className="cardPersonSocialMedia">
                {props.items.socialMediaLinks.map((item, idx)=>(
                  <SocialMedia className='cardPersonSocialMediaLinks' key={`id ${idx}`} mediaLinks={ item }/>
                ))}
                
              </div>
          </div>
      </div>
    );
}
  
  export default CardPersonText;