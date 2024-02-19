import DialogAttributes from "src/entities/dialog-attributes/DialogAttributes";

type Dialog = {
  messenger?: string;
  username?: string;
  isOnline?: boolean;
  dialogAttributes?: DialogAttributes;
};

export default Dialog;
