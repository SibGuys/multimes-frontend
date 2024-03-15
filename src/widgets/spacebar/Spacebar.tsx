import Avatar from "../../featues/avatar/Avatar";
import "./Spacebar.css";

import settingsSvg from "src/assets/svg/icon-settings.svg";
import Dialog from "src/entities/dialog/Dialog";

export type SpacebarProps = {
  title?: string;
  dialogList: Dialog[];
};

const Spacebar = ({ title, dialogList }: SpacebarProps) => {
  const short_name = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

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
            <Avatar
              name={short_name(dialog.username)}
              messengerIcon={dialog.messenger}
            ></Avatar>
            <div className="dialog__content">
              <header className="dialog__content_header">
                <h1 className="dialog__content_header-username">
                  {dialog.username}
                </h1>
                <p className="dialog__content_header-last-message-time">
                  {dialog.dialogAttributes?.lastMessageTime}
                </p>
              </header>
              <main className="dialog__content_main">
                <p className="dialog__content_main-last-message">
                  {dialog.dialogAttributes?.lastMessage}
                </p>
                <p className="dialog__content_main-count-of-unread-messages">
                  {dialog.dialogAttributes?.countOfUnreadMesaages}
                </p>
              </main>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Spacebar;
