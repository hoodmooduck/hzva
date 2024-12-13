import "./aboutUsModal.scss";
// @ts-ignore
import art from "../../Shared/image/artAboutUs.png";
import { description } from "./description.ts";
import { useState, useRef } from "react";

function AboutUsModal() {
  const keyRef = useRef<HTMLInputElement>(null);
  const [clickCopy, setClickCopy] = useState(false);

  const handleCopy = () => {
    setClickCopy(true);
    setTimeout(() => {
      setClickCopy(false);
    }, 2000);
    if (keyRef.current) {
      navigator.clipboard
        .writeText(keyRef.current.value)
        .then(() => console.log("Copied to clipboard"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="aboutUsModal">
      <div className="aboutUsModal__container">
        <div className="aboutUsModalPicture">
          <img src={art} alt="art" />
        </div>
        <div className="aboutUsModalText">
          <div className="aboutUsModalTitle">
            <span>
              <span className="pinkText">Кто мы</span> такие и зачем сделали
              <span className="pinkText"> сайт</span>?
            </span>
          </div>
          <div className="aboutUsModalDescription">
            {description.AboutUs.description}
          </div>
        </div>
        <div className="aboutUsModalLinks">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.donationalerts.com/r/starozhili"
            className="aboutUsModalLink hoverAnim alr"
          >
            Задонатить
          </a>
          <button
            onClick={handleCopy}
            className="aboutUsModalLink hoverAnim crpt"
          >
            <div className="tooltip">
              {clickCopy ? "Скопировано!" : "Скопировать"}
            </div>
            Задонатить в крипте
          </button>
          <input
            ref={keyRef}
            hidden
            value="0xe9a193dB4331Ee910Edb3B9fF8946a98824f675a"
            readOnly
            type="text"
          />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/+17PW-qTXYjxkYjQy"
            className="aboutUsModalLink hoverAnim tg"
          >
            Читать нас
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUsModal;
