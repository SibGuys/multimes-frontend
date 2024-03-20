import Avatar from "../../featues/avatar/Avatar";
import Message from "../../featues/message/Message";

import logo from "../../assets/svg/icon-logo.svg";
import send from "../../assets/svg/icon-send.svg";

import "./Messagespace.css"

type MessagespaceProps = {
  userName : string;
  messanger? : string;
};

const Messagespace = ({userName, messanger} : MessagespaceProps) => {
  const short_name = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <div className="user">
            <Avatar name={short_name(userName)} messengerIcon={messanger} size="small"/>
            <p className="user-name">{userName}</p>
          </div>
          <a href="">
            <img src={logo} alt="logo Multimes" />
          </a>
        </div>
        <div className="chat_messages">
          <Message userName="Andrey Andreev" text="Hello!" messageTime="14:13"></Message>
        </div>
        <div className="chat-input">
          <input className="chat-input_field" type="text" name="Message-input" id="0" placeholder="Message..."/>
          <span className="chat-input_send">
            <img src={send} alt="send message icon"/>
          </span>
        </div>
      </div>
    </>
  );
};

export default Messagespace;
