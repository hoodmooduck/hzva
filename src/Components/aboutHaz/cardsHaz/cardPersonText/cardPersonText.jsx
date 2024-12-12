import "./cardPersonText.scss";
import SocialMedia from "../cardPersonText/socialMedia/socialMedia";

function CardPersonText(props) {
  return (
    <div className="cardPersonText">
      <div className="cardPersonDescriptionMain">
        {/* нужно разделить на 2 */}
        <div className="cardPersonTitle">{props.items.nickName}</div>

        <div className="cardPersonInfo">
          {props.items.fullName[0]}
          <span className="pinkText">{props.items.fullName[1]}</span>
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
