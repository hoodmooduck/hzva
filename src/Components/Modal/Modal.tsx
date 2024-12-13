import "./Modal.scss";
import { ReactSVG } from "react-svg";
// @ts-ignore хуле выёбывашься всё ты видишь шалупонь, ебанное легаси говно
// TODO посатреть чё там он выёбывается в конфиге
import CloseSVG from "../../Shared/image/iconClose.svg";
import { closeModalHandler } from "../../Modules/Redux/actions/modal.ts";
import { componentMap, useModalContext } from "../../Hooks/useModalContext.ts";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooksRedux.ts";
import { useCallback } from "react";

function Modal() {
  const { openModal, componentKey, needOverlayClose, needCloseButton } =
    useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const { closeModal } = useModalContext();

  const closeModalOverlayHandler = useCallback(() => {
    if (!needOverlayClose) return;
    closeModal();
  }, [needOverlayClose]);

  const ComponentToRender =
    !openModal || !componentKey ? null : componentMap[componentKey];

  return (
    <div className={openModal ? "modal modal--active" : "modal"}>
      <div onClick={closeModalOverlayHandler} className="modal__overlay" />
      <div className="modal__view">
        {needCloseButton && (
          <div onClick={closeModal} className="modal__close-btn">
            <ReactSVG src={CloseSVG}></ReactSVG>
          </div>
        )}
        {ComponentToRender && <ComponentToRender />}
      </div>
    </div>
  );
}

export default Modal;
