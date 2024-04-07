import DialogAttributes from "src/entities/dialog-attributes/DialogAttributes";

type Dialog = {
  username: string;
  messenger?: string;
  dialogAttributes?: DialogAttributes;
};

export default Dialog;
