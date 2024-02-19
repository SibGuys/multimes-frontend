import "./Spacebar.css";

import settingsSvg from "src/assets/svg/settings.svg";
import Dialog from "src/entities/dialog/Dialog";

export type SpacebarProps = {
  title?: string;
  dialogList: Dialog[];
};

const Spacebar = ({ title, dialogList }: SpacebarProps) => {
  return (
    <section className="spacebar">
      <header className="spacebar__header">
        <h1 className="spacebar__header-title">{title}</h1>
        <button className="spacebar__header-settings">
          <img src={settingsSvg} alt="Space settings button" />
        </button>
      </header>
      <main className="spacebar__main">
        {dialogList.map((dialog) => (
          <div key={dialog.username} className="dialog">
            <img className="dialog__user-icon" alt="User icon"></img>
            <img
              className="dialog__messanger-icon"
              src={dialog.messenger}
              alt="Icon of messanger"
            ></img>
            <header className="dialog__header">
              <h1 className="dialog__header-username">{dialog.username}</h1>
              <p className="dialog__header-last-message-time">
                {dialog.dialogAttributes?.lastMessageTime}
              </p>
            </header>
            <main className="dialog__main">
              <p className="dialog__main-last-message">
                {dialog.dialogAttributes?.lastMessage}
              </p>
              <p className="dialog__main-count-of-unread-messages">
                {dialog.dialogAttributes?.countOfUnreadMesaages}
              </p>
            </main>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Spacebar;
