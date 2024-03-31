import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Dialog from "./entities/dialog/Dialog";
import { MessageProps } from "./featues/message/Message";
import Messagespace from "./widgets/messagespace/Messagespace";
import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";

const dialog: Dialog[] = [
  {
    messenger: "telegram",
    username: "Ivan Ivanov",
    dialogAttributes: {
      lastMessage: "Hello",
      lastMessageTime: "19:20",
      countOfUnreadMesaages: 0,
    },
  },
  {
    messenger: "telegram",
    username: "Andrey Andreev",
    dialogAttributes: {
      lastMessage: "Hello",
      lastMessageTime: "19:20",
      countOfUnreadMesaages: 0,
    },
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Navbar />
        <Spacebar title={"Base"} dialogList={dialog} />
        <Messagespace
          userName={dialog[1].username}
          messanger={dialog[1].messenger}
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
