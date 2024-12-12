import "./Modal.scss";
import { ReactSVG } from "react-svg";
// @ts-ignore хуле выёбывашься всё ты видишь шалупонь, ебанное легаси говно
// TODO посатреть чё там он выёбывается в конфиге
import CloseSVG from "../../Shared/image/iconClose.svg";
import { closeModalHandler } from "../../Modules/Redux/actions/modal.ts";
import { componentMap } from "../../Hooks/useModalContext.ts";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooksRedux.ts";

function Modal() {
  const { openModal, componentKey } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  if (!openModal || !componentKey) return null;
  const ComponentToRender = componentMap[componentKey];

  return (
    <div className={openModal ? "modal modal--active" : "modal"}>
      <div className="modal__overlay" />
      <div className="modal__view">
        <div
          onClick={() => dispatch(closeModalHandler())}
          className="modal__close-btn"
        >
          <ReactSVG src={CloseSVG}></ReactSVG>
        </div>
        {ComponentToRender && <ComponentToRender />}
      </div>
    </div>
  );
}

export default Modal;
