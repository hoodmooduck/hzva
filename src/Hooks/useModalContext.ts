import * as React from "react";
import { useCallback } from "react";
import { useAppDispatch } from "./hooksRedux.ts";
import {
  closeModalHandler,
  openModalHandler,
} from "../Modules/Redux/actions/modal.ts";
import ExileModal from "../Components/ExileModal/ExileModal.tsx";

export const componentNameMap = {
  Exile: "ModalExile",
  AboutUs: "ModalAboutUs",
};

export const componentMap: Record<string, React.ComponentType<any>> = {
  [componentNameMap.Exile]: ExileModal,
  // [componentNameMap.AboutUs]: AboutUs,
};

export const useModalContext = () => {
  const dispatch = useAppDispatch();

  const openModal = useCallback(
    (componentKey: string, needCloseButton = true) => {
      dispatch(openModalHandler({ componentKey, needCloseButton }));
    },
    [dispatch]
  );

  const closeModal = useCallback(() => {
    dispatch(closeModalHandler());
  }, [dispatch]);

  return { openModal, closeModal };
};
