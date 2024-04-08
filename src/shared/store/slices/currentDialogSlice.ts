import Dialog from "src/entities/dialog/Dialog";
import { createAppSlice } from "../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type CurrentDialogSliceState = {
  value: Dialog;
  status: "idle" | "loading" | "failed";
};

const dialogAttributes = {
  lastMessage: "",
  lastMessageTime: "",
  countOfUnreadMesaages: undefined,
};

const initialState: CurrentDialogSliceState = {
  value: {
    dialogId: 0,
    username: "",
    messenger: "vk",
    dialogAttributes: dialogAttributes,
  },
  status: "idle",
};

export const currentDialogSlice = createAppSlice({
  name: "currentDialog",
  initialState,
  reducers: (create) => ({
    setCurrentDialog: create.reducer((state, action: PayloadAction<Dialog>) => {
      console.log(action.payload);

      state.value = {
        ...action.payload,
      };
    }),
  }),
  selectors: {
    selectCurrentDialog: (currentDialog) => currentDialog.value,
    selectStatus: (currentDialog) => currentDialog.status,
  },
});

export const { setCurrentDialog } = currentDialogSlice.actions;

export const { selectCurrentDialog, selectStatus } =
  currentDialogSlice.selectors;
