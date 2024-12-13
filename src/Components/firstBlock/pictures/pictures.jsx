import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import "./pictures.scss";

function Picture(props) {
  const movePicRef = useRef();
  const [movePic, setMovePic] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", function movePicture(e) {
      if (document.documentElement.offsetWidth > 1215) {
        let x = e.x;
        let y = e.y;
        movePicRef.current.style.transform = `
        translateX(${x / 100}%) 
        translateZ(${0}px) 
        translateY(${y / 100}%)`;
        return (e) => window.removeEventListener("mousemove", movePicture());
      }
    });
  }, [movePic]);

  return (
    <div
      ref={movePicRef}
      style={{
        width: props.items.width + "px",
        height: props.items.width + "px",
        left: props.items.left - 20 + "px",
        top: props.items.top + 120 + "px",
      }}
      className="picture"
    >
      <img src={props.items.img} alt="picture" />
    </div>
  );
}

export default Picture;
