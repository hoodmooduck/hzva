import "./mainPresBlock.scss";
import arrowDown from "../../Shared/image/Icon_firstBlock_arrowDown.png";
import pictures from "./pictures.js";
import Picture from "./pictures/pictures.jsx";

function MainPresBlock() {
  let picturesMod1 = [...pictures.slice(6), ...pictures.slice(6)];
  let picturesMod2 = [...pictures.slice(0, 6), ...pictures.slice(0, 6)];

  return (
    <div className="mainPresBlock">
      <div
        style={{
          left: (window.innerWidth - 1920) / 1.7,
        }}
        className="mainPresBlockPictureConteiner"
      >
        {pictures.map((item, idx) => (
          <Picture key={idx} items={item} />
        ))}
      </div>

      <div className="mainPresBlockPictureColumn">
        <div className="mainPresBlockPictureRow row1">
          {picturesMod2.map((item, idx) => (
            <Picture key={idx} items={item} />
          ))}
        </div>
        <div className="mainPresBlockPictureRow row2">
          {picturesMod1.map((item, idx) => (
            <Picture key={idx} items={item} />
          ))}
        </div>
      </div>

      <div id="firstBlock" className="conteiner">
        <div className="mainPresBlockColumn">
          <div className="mainPresBlock_textColumn">
            <div className="mainPresBlock_textBlock">
              <div className="mainPresBlock_text">Стрим идет</div>
            </div>
            <div className="mainPresBlock_textBlock">
              <div className="mainPresBlock_text">
                Хазяева
                <span>
                  <span>едут</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mainPresBlock_arrowLink">
            <a href="#whoIsHaz">
              <img src={arrowDown} alt="arrowDown" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPresBlock;
