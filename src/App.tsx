import "./App.css";

import { BrowserRouter } from "react-router-dom";

import Dialog from "./entities/dialog/Dialog";
import Messagespace from "./widgets/messagespace/Messagespace";
import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";

const dialog: Dialog[] = [
  {
    messenger: "telegram",
    username: "All-in One",
    dialogAttributes: {
      lastMessage: "",
      lastMessageTime: "7:bits",
      countOfUnreadMesaages: 7,
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
          userName={dialog[0].username}
          messanger={dialog[0].messenger}
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
