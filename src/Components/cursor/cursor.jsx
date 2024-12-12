import './cursor.scss';
import cursorImg from '../../Shared/image/cursor_48x48.svg'
import { useEffect, useState } from 'react';
import { useRef } from 'react';



function Cursor() {
    const cursor = useRef("cursor")
    const [checkCursor, setCheckCursor] = useState(true)
    useEffect(() => {

        document.addEventListener('mousemove', (e)=>{

            const x = e.clientX - 20;
            const y = e.clientY - 20;
            cursor.current.style.left = x +'px';
            cursor.current.style.top = y +'px';
            // if(x <= -20 || y <= -20){
            //   setCheckCursor(false)
            // }
            // else{
            //   setCheckCursor(true)
            // }
        })
    })

    return (
      <div ref={cursor} className={checkCursor ? 'cursor' : 'hidden'}>
         <img src={cursorImg} alt="cursor)" />
      </div>
    );
}

  export default Cursor;