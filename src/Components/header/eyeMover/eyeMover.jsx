import './eyeMover.scss';
import { useState, useEffect,useRef } from 'react';



function EyeMover() {
    const [checkMousePositionX, setCheckMousePositionX] = useState(0);
    const [checkMousePositionY, setCheckMousePositionY] = useState(0);
    const xMax = 8;
    const yMax = 7;
    useEffect(()=>{
        window.addEventListener('mousemove', function moveEye(e){
            const pupil = document.querySelectorAll('.eyePupil')
            let y = e.y - 55;
            let x = e.x - pupil[0].getBoundingClientRect().x;
            if(x > 29){
                setCheckMousePositionX(xMax)
            }else if(x < -2){
                setCheckMousePositionX(0.5)
            }else{
                setCheckMousePositionX(xMax/2)
            }

            if(y > 3){
                setCheckMousePositionY(yMax)
            }
            else if(y < -15){
                setCheckMousePositionY(0.5)
            }
            else{
                setCheckMousePositionY(yMax/2)
            }
            
        })
        
    },[checkMousePositionY])
    
    return (
        <div className="eyeMover">
            <div className="eye eye_left" >
                <div  style={{ left: checkMousePositionX, top: checkMousePositionY }}  className="eyePupil">
                </div>
            </div>
            <div  className="eye eye_right">
                <div style={{ left: checkMousePositionX, top: checkMousePositionY }} className="eyePupil">   
                </div>
            </div>
        </div>
      );
}

export default EyeMover;