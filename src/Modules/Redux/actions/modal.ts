import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  componentKey: string | null;
  openModal: boolean;
  needCloseButton?: boolean;
}

export const initialModalState: ModalState = {
  openModal: false,
  componentKey: null,
  needCloseButton: true,
};

const modalContext = createSlice({
  name: "modalContext",
  initialState: initialModalState,
  reducers: {
    openModalHandler(
      state,
      action: PayloadAction<{ componentKey: string; needCloseButton?: boolean }>
    ) {
      state.openModal = true;
      state.componentKey = action.payload.componentKey;
      state.needCloseButton =
        action.payload.needCloseButton !== undefined
          ? action.payload.needCloseButton
          : true;
    },
    closeModalHandler(state) {
      state.openModal = false;
      state.componentKey = null;
      state.needCloseButton = true;
    },
  },
});

export const { openModalHandler, closeModalHandler } = modalContext.actions;
export default modalContext.reducer;
