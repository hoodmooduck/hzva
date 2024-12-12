import { useEffect } from 'react';
import { useState } from 'react';
import iconYt from '../../../../../Shared/image/iconYt.svg'
import iconTw from '../../../../../Shared/image/iconTw.svg'
import iconTg from '../../../../../Shared/image/iconTg.svg'
import './socialMedia.scss';

function SocialMedia(props) {
  const [checkImgYt, setCheckImgYt] = useState(false)
  const [checkImgTw, setCheckImgTw] = useState(false)
  const [checkImgTg, setCheckImgTg] = useState(false)
  useEffect(()=>{
    if(props.mediaLinks.img === 'yt'){
      setCheckImgYt(true)
    }
    if(props.mediaLinks.img === 'tw'){
      setCheckImgTw(true)
    }
    if(props.mediaLinks.img === 'tg'){
      setCheckImgTg(true)
    }
  }, [])
    return (
      <div className='socialMedia hoverAnim'>
        <a target="_blank" rel="noopener noreferrer" href={props.mediaLinks.link}>
          <img src={ checkImgYt === true ? iconYt : checkImgTw === true ? iconTw : checkImgTg === true ? iconTg : ''}
          alt={props.mediaLinks.link} />
        </a>

      </div>
    );
}

  export default SocialMedia;