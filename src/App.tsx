import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Dialog from "./entities/dialog/Dialog";
import Messagespace from "./widgets/messagespace/Messagespace";
import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";
import { Provider } from "react-redux";
import { store } from "./shared/ui/space/store/store";

type DialogFromBackend = {
  dialogId: number;
  fullName: string;
  messengerType: string;
};

const App = () => {
  const dialogList: Dialog[] = [];

  const [dialogs, setDialogs] = useState(dialogList);

  const getDialogs = () => {
    fetch(`http://localhost:8080/dialogs`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: DialogFromBackend[]) => {
        setDialogs(
          response.map((r) => {
            return {
              username: r.fullName,
              messenger: r.messengerType,
              dialogAttributes: dialogAttributes,
            };
          }),
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dialogAttributes = {
    lastMessage: "",
    lastMessageTime: "",
    countOfUnreadMesaages: undefined,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDialogs();
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className="main">
          <Navbar />
          <Spacebar title={"Base"} dialogList={dialogs} />
          <></>
          <Messagespace
            userName={dialogs.length > 0 ? dialogs[0].username : "empty"}
            messanger={dialogs.length > 0 ? dialogs[0].messenger : "vk"}
          />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
