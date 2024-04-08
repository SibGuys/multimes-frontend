import {
  selectCurrentDialog,
} from "src/shared/store/slices/currentDialogSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import {
  getDialogs,
  selectDialogs,
  selectDialogsStatus,
} from "src/shared/store/slices/dialogsSlice";
import Messagespace from "src/widgets/messagespace/Messagespace";
import Navbar from "src/widgets/navbar/Navbar";
import Spacebar from "src/widgets/spacebar/Spacebar";

const Main = () => {
  const dispatch = useAppDispatch();
  const dialogs = useAppSelector(selectDialogs);
  const dialogsStatus = useAppSelector(selectDialogsStatus);

  const currentDialog = useAppSelector(selectCurrentDialog);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getDialogs(dialogs));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="main">
      <Navbar />
      <Spacebar title={"Base"} dialogList={dialogs} />
      <Messagespace
        userName={"empty"}
        messanger={"vk"}
      />
    </main>
  );
};

export default Main;
