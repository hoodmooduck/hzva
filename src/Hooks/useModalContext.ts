import * as React from "react";
import { useCallback } from "react";
import { useAppDispatch } from "./hooks-redux";
import {
  closeModalHandler,
  openModalHandler,
} from "../Modules/Redux/actions/modal";

export const componentNameMap = {
  Exile: "ModalExile",
  AboutUs: "ModalAboutUs",
};

export const componentMap: Record<string, React.ComponentType<never>> = {
  // [componentNameMap.Exile]: Exile,
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
