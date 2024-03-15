import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";
import Avatar from "./featues/avatar/Avatar";
import Space from "@/shared/ui/space/Space";
import DialogAttributes from "./entities/dialog-attributes/DialogAttributes";
import Dialog from "./entities/dialog/Dialog";

import "./App.css";

const dialog: Dialog[] = [
  {
    messenger: "telegram",
    username: "Ivan Ivanov",
    dialogAttributes: {
      lastMessage: "Hello",
      lastMessageTime: "19:20",
      countOfUnreadMesaages: 9,
    },
  },
  {
    messenger: "telegram",
    username: "Andrey Andreev",
    dialogAttributes: {
      lastMessage: "Hello",
      lastMessageTime: "19:20",
      countOfUnreadMesaages: 9,
    },
  },
];

const App = () => {
  return (
    <>
      <main className="main">
        <Navbar />
        <Spacebar title={"Base"} dialogList={dialog} />
      </main>
    </>
  );
};

export default App;
