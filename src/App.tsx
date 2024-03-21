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

const messages: MessageProps[] = [
  {
    text: "First message",
    messageTime: "19:20",
    isInter: true,
  },
  {
    text: "Second message",
    messageTime: "19:21",
    isInter: true,
  },
  {
    text: "How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?",
    messageTime: "19:22",
    isInter: true,
  },
  {
    text: "Fourth message",
    messageTime: "4:20",
    isInter: true,
  },
  {
    text: "Fifth message",
    messageTime: "4:21",
    isInter: false,
  },
  {
    text: "Sixth message",
    messageTime: "4:22",
    isInter: true,
  },
  {
    text: "Perpetum mobile",
    messageTime: "4:201488228",
    isInter: false,
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
          messages={messages.reverse()}
        />
      </main>
    </>
  );
};

export default App;
