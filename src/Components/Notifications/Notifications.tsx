import "./Notifications.scss";
// @ts-ignore TODO тоже чекнуть чё там за хуйня
import warningUebki from "../../Shared/image/warning.png";
import { useModalContext } from "../../Hooks/useModalContext.ts";

interface Props {}

function Notifications({}: Props) {
  const { closeModal } = useModalContext();
  return (
    <div className="notifications">
      <div className="notifications__conatiner">
        <div className="notifications__img">
          <img src={warningUebki} alt="warning" />
          <div className="notifications__img-circle" />
        </div>
        <div className="notifications__content">
          <div className="notifications__title">
            Для <span className="pinkText">"крутых"</span> юристов🤓
          </div>
          <div className="notifications__text">
            <p>
              На этом сайте материалы используются исключительно в
              образовательных и развлекательных целях. Все изображения и
              фотографии, размещенные здесь, принадлежат их авторам и
              используются согласно принципам добросовестного использования. Мы
              не преследуем коммерческую выгоду и вся деятельность направлена на
              улучшение общего культурного контента.
            </p>
            <p>
              Хотим напомнить, что если вдруг😯 вы нашли свое изображение🙊 и
              решили🤔, что оно как-то ущемляет😭 ваши права — дайте нам
              знать🥺! Мы с радостью все исправим😄. Кстати, любые совпадения с
              реальными людьми в этой строке — чисто случайность, но не стоит
              сразу угрожать юристами и нападать на бедных студентов😏.
            </p>
            <p>
              Для связи:{" "}
              <a
                className="pinkText"
                target="_blank"
                type="mail"
                href="mailto:snusassassin223@mail.ru"
              >
                snusassassin223@mail.ru
              </a>
            </p>
            <p>
              И помните, только позитивные вибрации, дарите добро миру, и мир,
              может, тоже вам что-то вернет… но не ждите слишком многого, а то
              много добра вывалится в ваши штаны 😇!
            </p>
          </div>
        </div>
        <div
          onClick={closeModal}
          className="notifications__button mainButton hoverAnim"
        >
          ПОНЯЛ + ПРИНЯЛ
        </div>
      </div>
    </div>
  );
}

export default Notifications;
