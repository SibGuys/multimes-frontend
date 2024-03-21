import "./Messagespace.css";

import Message, { MessageProps } from "src/featues/message/Message";

import logo from "../../assets/svg/icon-logo.svg";
import send from "../../assets/svg/icon-send.svg";
import Avatar from "../../featues/avatar/Avatar";

type MessagespaceProps = {
  userName: string;
  messanger?: string;
  messages: MessageProps[];
};

const Messagespace = ({ userName, messanger, messages }: MessagespaceProps) => {
  const short_name = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="user">
          <Avatar
            name={short_name(userName)}
            messengerIcon={messanger}
            size="small"
          />
          <p className="user-name">{userName}</p>
        </div>
        <a href="#link">
          <img src={logo} alt="logo Multimes" />
        </a>
      </div>
      <div className="chat_messages">
        {messages.map((message) => (
          <Message
            key={message.messageTime}
            userName={userName}
            text={message.text}
            messageTime={message.messageTime}
            isInter={message.isInter}
          />
        ))}
      </div>
      <div className="chat-input">
        <input
          className="chat-input_field"
          type="text"
          name="Message-input"
          id="0"
          placeholder="Message..."
        />
        <span className="chat-input_send">
          <img src={send} alt="send message icon" />
        </span>
      </div>
    </div>
  );
};

export default Messagespace;
