import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  componentKey: string | null;
  openModal: boolean;
  needCloseButton?: boolean;
  needOverlayClose?: boolean;
}

export const initialModalState: ModalState = {
  openModal: false,
  componentKey: null,
  needCloseButton: true,
  needOverlayClose: true,
};

const modalContext = createSlice({
  name: "modalContext",
  initialState: initialModalState,
  reducers: {
    openModalHandler(
      state,
      action: PayloadAction<{
        componentKey: string;
        needCloseButton?: boolean;
        needOverlayClose?: boolean;
      }>
    ) {
      state.openModal = true;
      state.componentKey = action.payload.componentKey;
      state.needCloseButton =
        action.payload.needCloseButton !== undefined
          ? action.payload.needCloseButton
          : true;
      state.needOverlayClose =
        action.payload.needCloseButton !== undefined
          ? action.payload.needOverlayClose
          : true;
    },
    closeModalHandler(state) {
      state.openModal = false;
      state.componentKey = null;
      state.needCloseButton = true;
      state.needOverlayClose = true;
    },
  },
});

export const { openModalHandler, closeModalHandler } = modalContext.actions;
export default modalContext.reducer;
