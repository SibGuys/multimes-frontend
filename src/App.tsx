import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Dialog from "./entities/dialog/Dialog";
import Messagespace from "./widgets/messagespace/Messagespace";
import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";

type DialogFromBackend = {
  dialogId: number;
  fullName: string;
  messengerType: string;
};

const App = () => {
  const dialogFromBackendList: DialogFromBackend[] = [];
  const dialogList: Dialog[] = [];

  const [dialogs, setDialogs] = useState(dialogFromBackendList);
  const [dialogsProp, setDialogProp] = useState(dialogList);

  const getDialogs = () => {
    fetch(`http://localhost:8080/dialogs`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: DialogFromBackend[]) => {
        console.log(response);
        setDialogs(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const dialogAttributes = {
      lastMessage: "",
      lastMessageTime: "",
      countOfUnreadMesaages: undefined,
    };
    const dialogsToProps = () => {
      const result: Dialog[] = [];
      dialogs.forEach((dialog) => {
        result.push({
          username: dialog.fullName,
          messenger: dialog.messengerType,
          dialogAttributes: dialogAttributes,
        });
      });
      return result;
    };
    const interval = setInterval(() => {
      getDialogs();
      setDialogProp(dialogsToProps());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      <main className="main">
        <Navbar />
        <Spacebar title={"Base"} dialogList={dialogsProp} />
        <></>
        <Messagespace
          userName={dialogsProp.length > 0 ? dialogsProp[0].username : "empty"}
          messanger={dialogsProp.length > 0 ? dialogsProp[0].messenger : "vk"}
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
