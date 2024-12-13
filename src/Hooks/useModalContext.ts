import * as React from "react";
import { useCallback } from "react";
import { useAppDispatch } from "./hooksRedux.ts";
import {
  closeModalHandler,
  openModalHandler,
} from "../Modules/Redux/actions/modal.ts";
import ExileModal from "../Components/ExileModal/ExileModal.tsx";
import Notification from "../Components/Notifications/Notifications.tsx";
import AboutUsModal from "../Components/aboutUsModal/AboutUsModal.tsx";

export const componentNameMap = {
  Exile: "ModalExile",
  AboutUs: "ModalAboutUs",
  Notification: "Notification",
};

export const componentMap: Record<string, React.ComponentType<any>> = {
  [componentNameMap.Exile]: ExileModal,
  [componentNameMap.Notification]: Notification,
  [componentNameMap.AboutUs]: AboutUsModal,
};

export const useModalContext = () => {
  const dispatch = useAppDispatch();
  const html = document.querySelector("html");

  const openModal = useCallback(
    (componentKey: string, needCloseButton = true, needOverlayClose = true) => {
      html?.classList.add("disableScroll");
      dispatch(
        openModalHandler({ componentKey, needCloseButton, needOverlayClose })
      );
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    html?.classList.remove("disableScroll");
    dispatch(closeModalHandler());
  }, [dispatch]);

  return { openModal, closeModal };
};
