import "./Messagespace.css";

import { SetStateAction, useEffect, useRef, useState } from "react";
import Message, { MessageProps } from "src/featues/message/Message";

import logo from "../../assets/svg/icon-logo.svg";
import send from "../../assets/svg/icon-send.svg";
import Avatar from "../../featues/avatar/Avatar";

type MessagespaceProps = {
  userName: string;
  messanger?: string;
};

const Messagespace = ({ userName, messanger }: MessagespaceProps) => {
  const short_name = (name: string) => {
    if (name.split(" ").length > 2) {
      return name.split(" ")[0][0] + name.split(" ")[1][0];
    } else {
      return name.split(" ")[0][0];
    }
  };

  const mesList: MessageProps[] = [];

  const [messages, setMessages] = useState(mesList);

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

  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      getMessages();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
    let d = new Date();
    var datestring =
      ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    if (messageText !== "") {
      const mes: MessageProps = {
        userName: "FRONT",
        text: messageText,
        messageTime: datestring,
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
    }
    setMessage("");
    forceRerender();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
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
            userName={message.userName}
            text={message.text}
            messageTime={message.messageTime}
            isInter={message.isInter}
          />
        ))}
        <div ref={messagesEndRef} />
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
          onKeyDown={handleKeyDown}
        />
        <span className="chat-input_send" onClick={sendMessage}>
          <img src={send} alt="send message icon" />
        </span>
      </div>
    </div>
  );
};

export default Messagespace;
