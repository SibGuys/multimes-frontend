import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/shared/store/hooks";
import {
  getDialogs,
  selectDialogs,
} from "src/shared/store/slices/dialogsSlice";
import Messagespace from "src/widgets/messagespace/Messagespace";
import Navbar from "src/widgets/navbar/Navbar";
import Spacebar from "src/widgets/spacebar/Spacebar";

const Main = () => {
  const dispatch = useAppDispatch();
  const dialogs = useAppSelector(selectDialogs);

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
        userName={dialogs.length > 0 ? dialogs[0].username : "empty"}
        messanger={dialogs.length > 0 ? dialogs[0].messenger : "vk"}
      />
    </main>
  );
};

export default Main;
