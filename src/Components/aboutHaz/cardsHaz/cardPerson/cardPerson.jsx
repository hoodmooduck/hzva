import "./cardPerson.scss";
import { useState, useEffect, useRef } from "react";

function CardPerson(props) {
  const [scrolling, setScrolling] = useState();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setScrolling(e.target.documentElement.scrollTop);
    });
  }, [scrolling]);
  return (
    <div className="cardPerson">
      <div className="cardPersonColumn">
        <div className="cardPersonPicture ">
          <img
            className={`${props.items.avatarImg}Shadow`}
            src={props.items.avatarImg}
            alt={props.items.nickName}
          />
        </div>
      </div>
    </div>
  );
}

export default CardPerson;
