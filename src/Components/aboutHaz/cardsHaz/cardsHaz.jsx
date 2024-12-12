import "./cardsHaz.scss";
import CardPerson from "./cardPerson/cardPerson";
import { useEffect, useRef } from "react";

import { listPersons } from "./listPersons";
import CardPersonText from "./cardPersonText/cardPersonText";

function CardsHaz() {
  const picBlock = useRef();
  const textBlock = useRef();
  const textBlockColumn = useRef();

  // ебать это чё за хуйня как это дебажить, я это под чем писал нахуй
  // TODO: потом на swiper перепишу ебанный-ссаный, лишь бы не выебали + обоссали за такое

  let posElem = [200, -587, -1374, -2161, -2948, -3735, -4522, -5309];
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let picBlockX = picBlock.current.getBoundingClientRect().top;
      if (window.innerWidth > 1215) {
        if (picBlockX <= 0 && picBlockX >= -5544) {
          textBlockColumn.current.classList.add("fixed");
          textBlockColumn.current.classList.remove("absoluteBottom");
        }
        if (picBlockX <= -5544) {
          textBlockColumn.current.classList.remove("fixed");
          textBlockColumn.current.classList.add("absoluteBottom");
        }
        if (picBlockX >= 0) {
          textBlockColumn.current.classList.remove("fixed");
        }
        posElem.map((el, idx) => {
          if (el - 100 >= picBlockX) {
            textBlock.current.setAttribute(
              "style",
              `transform: translate(0px, ${idx * -796}px);`
            );
          }
        });
      }
      if (window.innerWidth <= 1215) {
        textBlock.current.setAttribute(
          "style",
          `transform: translate(0px, 0px);`
        );
        textBlockColumn.current.classList.remove("fixed");
        textBlockColumn.current.classList.remove("absoluteBottom");
      }
    });
  });

  const cardPersonText = listPersons.map((item, idx) => (
    <CardPersonText key={idx} items={item} />
  ));
  return (
    <div className="cardsHaz">
      <div className="conteiner">
        <div className="cardsHazColumn">
          <div ref={textBlockColumn} className="cardHazConteiner">
            <div ref={textBlock} className="cardsHazRow cardsHazRowText">
              {cardPersonText}
            </div>
          </div>
          <div ref={picBlock} className="cardsHazRow">
            {listPersons.map((item, idx) => (
              <CardPerson key={idx} items={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsHaz;
