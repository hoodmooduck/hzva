import "./cardPersonText.scss";
import SocialMedia from "../cardPersonText/socialMedia/socialMedia";
import {
  componentNameMap,
  useModalContext,
} from "../../../../Hooks/useModalContext.ts";

function CardPersonText(props) {
  const { openModal } = useModalContext();
  const openModalExile = () => {
    openModal(componentNameMap.Exile);
  };

  return (
    <div className="cardPersonText">
      <div className="cardPersonDescriptionMain">
        {/* нужно разделить на 2 */}
        {/* что блять разделить TODO себя раздели конч */}
        <div className="cardPersonTitle">{props.items.nickName}</div>

        <div className="cardPersonInfo">
          {props.items.fullName[0]}
          <span onClick={openModalExile} className="pinkText">
            {props.items.fullName[1]}
          </span>
        </div>

        <div className="cardPersonDescription">{props.items.description}</div>

        <div className="cardPersonSocialMedia">
          {props.items.socialMediaLinks.map((item, idx) => (
            <SocialMedia
              className="cardPersonSocialMediaLinks"
              key={`id ${idx}`}
              mediaLinks={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardPersonText;
