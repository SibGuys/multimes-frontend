import "./Messagespace.css";

import Message, { MessageProps } from "src/featues/message/Message";

import logo from "../../assets/svg/icon-logo.svg";
import send from "../../assets/svg/icon-send.svg";
import Avatar from "../../featues/avatar/Avatar";
import { SetStateAction, useEffect, useState } from "react";

type MessagespaceProps = {
  userName: string;
  messanger?: string;
};

const Messagespace = ({ userName, messanger }: MessagespaceProps) => {
  const short_name = (name: string) => {
    return name.split(" ")[0][0] + name.split(" ")[1][0];
  };

  const mesList: MessageProps[] = [];

  let [messages, setMessages] = useState(mesList);

  const getMessages = () => {
    fetch("http://localhost:8080/messages", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response: MessageProps[]) => {
        setMessages(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 1000)
    return () => clearInterval(interval)
  }, []);

  useEffect(getMessages, []);

  const [messageText, setMessage] = useState("");

  const [rendererFlag, setRendererFlag] = useState(false);

  const forceRerender = () => {
    setRendererFlag((flag) => !flag);
  };

  const handleMessageChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    const mes: MessageProps = {
      userName: "FRONT",
      text: messageText,
      messageTime: "1",
      isInter: false,
    };
    fetch("http://localhost:8080/messages", {
      method: "POST",
      body: JSON.stringify(mes),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    messages.push(mes);
    forceRerender();
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
          onChange={handleMessageChange}
          value={messageText}
          placeholder="Message..."
        />
        <span className="chat-input_send" onClick={sendMessage}>
          <img src={send} alt="send message icon" />
        </span>
      </div>
    </div>
  );
};

export default Messagespace;
