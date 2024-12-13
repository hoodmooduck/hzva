import "./ExileModal.scss";
// @ts-ignore
import ExileImg from "../../Shared/image/exileModal.png";

// ебать за 2 минуты сверстал с нуля вот это скилл))

function ExileModal() {
  return (
    <div className="exile-modal">
      <div className="exile-modal__container">
        <div className="exile-modal__img">
          <img src={ExileImg} alt="exileimg" />
        </div>
        <div className="exile-modal__title">
          С днём рождения, <span className="pinkText">Илья</span>!
        </div>
        <div className="exile-modal__text">
          Сколько стукнуло тебе сегодня, Илья? Впрочем, это не так уж важно, не
          время грустить о возрасте, куда важнее помечтать о том, что ждет
          впереди – долгие годы счастливой благополучной жизни, в которой
          исполняются все мечты и окружают только самые настоящие друзья и самые
          близкие люди!
        </div>
      </div>
    </div>
  );
}

export default ExileModal;
