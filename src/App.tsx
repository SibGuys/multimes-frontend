import Navbar from "./widgets/navbar/Navbar";
import Spacebar from "./widgets/spacebar/Spacebar";

const App = () => {
  return (
    <>
      <Navbar />
      <Spacebar
        title="Space name"
        dialogList={[
          {
            messenger: "tg",
            username: "Andrey Shelyagin",
            isOnline: false,
            dialogAttributes: {
              lastMessage: "hello",
              lastMessageTime: "12:00",
              countOfUnreadMesaages: 1,
            },
          },
        ]}
      />
    </>
  );
};

export default App;
