import "./Message.css";

import Avatar from "../avatar/Avatar";

export type MessageProps = {
  userName?: string;
  text: string;
  messageTime: string;
  isInter: boolean;
};

const Message = ({ userName, text, messageTime, isInter }: MessageProps) => {
  const short_name = (name: string) => {
    if (name.split(" ").length > 2) {
      return name.split(" ")[0][0] + name.split(" ")[1][0];
    } else {
      return name.split(" ")[0][0];
    }
  };

  return (
    <div className={isInter ? "message__left-side" : "message__right-side"}>
      {isInter ? (
        <>
          <Avatar name={short_name(userName!)} messengerIcon="" size="small" />
          <p className="message_user-name">{userName}</p>
        </>
      ) : (
        <></>
      )}
      <p className="message-text">{text}</p>
      <p className="message-time">{messageTime}</p>
    </div>
  );
};

export default Message;
