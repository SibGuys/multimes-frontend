import "./Message.css";

import Avatar from "../avatar/Avatar";

export type MessageProps = {
  userName: string;
  text: string;
  messageTime: string;
};

const Message = ({ userName, text, messageTime }: MessageProps) => {
  const short_name = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  return (
    <>
      <div className="message">
        <Avatar name={short_name(userName)} messengerIcon="" size="small" />
        <p className="message_user-name">{userName}</p>
        <p className="message-text">{text}</p>
        <p className="message-time">{messageTime}</p>
      </div>
    </>
  );
};

export default Message;
