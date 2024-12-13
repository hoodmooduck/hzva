import "./cursor.scss";
import cursorImg from "../../Shared/image/cursor_48x48.svg";
import { useEffect, useRef, useState } from "react";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        const x = e.clientX + 80;
        const y = e.clientY + 80;
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        console.log(x, y);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (window.innerWidth <= 1215) return null;

  return (
    <div ref={cursorRef} className="cursor">
      <img src={cursorImg} alt="cursor" />
    </div>
  );
}

export default Cursor;
