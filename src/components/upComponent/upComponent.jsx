import { useRef } from 'react';
import { useEffect, useState } from 'react';
import './upComponent.scss';
import upComp from '../../assetss/image/upComp.svg'


function UpComponent() {
    const upComponentRef = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', (e) => {
            if(e.target.documentElement.scrollTop >= 600){
                upComponentRef.current.classList.remove('hide');
            }
            else if(e.target.documentElement.scrollTop <= 600){
                upComponentRef.current.classList.add('hide');
            }
        })
    },[])

    return (
      <div ref={upComponentRef} className='upComponent hoverAnim hide'>
         <a href="#firstBlock"><img src={upComp} alt="up" /></a>
      </div>
    );
}
  
  export default UpComponent;