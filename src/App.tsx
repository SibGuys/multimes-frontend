import "./App.css";

import Dialog from "./entities/dialog/Dialog";
import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";
import Messagespace from "./widgets/messagespace/Messagespace";
import { MessageProps } from "./featues/message/Message";

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

const messages: MessageProps[] = [
  { userName: "Oleg Tinkov", text: "Hello", messageTime: "19:20" },
  {
    userName: "Oleg Tinkov",
    text: "How are you?",
    messageTime: "19:21",
  },
];

const App = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <Spacebar title={"Base"} dialogList={dialog} />
        <Messagespace
          userName={dialog[1].username}
          messanger={dialog[1].messenger}
          messages={messages}
        />
      </main>
    </>
  );
};

export default App;
