import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";
import Avatar from "./featues/avatar/Avatar";
import Space from "@/shared/ui/space/Space";
import DialogAttributes from "./entities/dialog-attributes/DialogAttributes";
import Dialog from "./entities/dialog/Dialog";

const dialog : Dialog[] = [
  {
    messenger : "telegram",
    username : "Gerhard",
    isOnline : false,
    dialogAttributes : {
      lastMessage : "Hello",
      lastMessageTime : "19:20",
      countOfUnreadMesaages : 9
    }
  }
]

const App = () => {
  return (
    <>
      {
        <Navbar />
        <Spacebar title="Base" dialogList={dialog}></Spacebar>
      }
    </>
  );
};

export default App;
