import { useRef } from 'react';
import './merchBLock.scss';
import mysteryBox from '../../Shared/image/burmaldabox.png'
import cap from '../../Shared/image/cap.png'
import tishka from '../../Shared/image/tishka.png'
import sticker1 from '../../Shared/image/matizSticker.png'
import sticker2 from '../../Shared/image/logoSticker.png'
import { useEffect } from 'react';

function MerchBLock() {
  const titleRef = useRef();


  useEffect(()=>{
  window.addEventListener('scroll', (e)=>{
    let top;
    if(titleRef.current){
       top = titleRef.current.getBoundingClientRect().top;
       if((top <= 1100)){
        titleRef.current.classList.add('mainTitle_show')
        }
    }
    return () => window.removeEventListener('scroll')
    })
  })

    return (
      <div id='merch' className='merchBLock'>
          <div className="conteiner">
              <div className="merchBlockColumn">
                <div ref={titleRef} className="merchBLockTitle mainTitle">
                  Поиграли, теперь можно закупиться <span className="pinkText">мерчом</span> или...
                </div>
                <div className="merchBLockContent">
                  <div className="merchBLockContentColumn">
                    <div className="merchBLockContentRow">
                    <div className="merchBLockContentTextMB">Мистери бокс</div>
                    <div className="merchBLockContentImg mysBox">
                      <img src={mysteryBox} alt="mb" />
                    </div>

                  </div>


                  </div>
                  <div className="merchBLockContentColumn">
                    <div className="merchBLockContentRow">
                      <div className="merchBLockContentText">Кепка</div>
                      <div className="merchBLockContentImg cap">
                        <a href='https://www.youtube.com/watch?v=4aAg7gHpfMo&ab_channel=whatever' target='_blank' rel="noreferrer" className='playVideo hoverAnim'>Обзор</a>
                        <img src={cap} alt="cap" />
                      </div>

                    </div>
                    <div className="merchBLockContentRow">
                      <div className="merchBLockContentText">Футболка</div>
                      <div className="merchBLockContentImg tishka">
                        <img src={tishka} alt="tishka" />
                      </div>

                    </div>
                    <div className="merchBLockContentRow">
                      <div className="merchBLockContentText">Стикеры</div>
                      <div className="stickerBlock">
                        <img src={sticker1} alt="sticker1" />
                        <img src={sticker2} alt="sticker2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="merchBlockRibbon backLine">
            <span>comming&nbsp;soon&nbsp;</span> <span>comming&nbsp;soon&nbsp;</span> <span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span>
          </div>
          <div className="merchBlockRibbon">
            <div className="ribbonBlockLine">
            <span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span>
            </div>
              <div className="text">
              <span>comming&nbsp;soon&nbsp;</span> <span>comming&nbsp;soon&nbsp;</span> <span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span><span>comming&nbsp;soon&nbsp;</span>
              </div>
              <div className="ribbonBlockLine bottom">
              <span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span><span className="blockLineItem"></span>
              </div>
          </div>

      </div>
    );
}

  export default MerchBLock;