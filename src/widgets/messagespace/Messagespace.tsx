import "./Messagespace.css";

import { SetStateAction, useEffect, useRef, useState } from "react";
import Message from "src/featues/message/Message";
import { short_name } from "src/shared/shortName";

import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";

import logo from "../../assets/svg/icon-logo.svg";
import send from "../../assets/svg/icon-send.svg";
import Avatar from "../../featues/avatar/Avatar";
import {
  getMessages,
  MessageToBack,
  selectMessages,
  selectStatus,
  sendMessage,
} from "./messagesSlice";

type MessagespaceProps = {
  userName: string;
  messanger?: string;
};

const Messagespace = ({ userName, messanger }: MessagespaceProps) => {
  let i = 0;

  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const status = useAppSelector(selectStatus);

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
      dispatch(getMessages(1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [messageText, setMessage] = useState("");

  const handleMessageChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  const sendMessageLambda = () => {
    if (messageText !== "") {
      const mes: MessageToBack = {
        text: messageText,
        dialogId: 1,
      };
      console.log(mes);
      dispatch(sendMessage(mes));
    }
    setMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessageLambda();
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
            key={message.time + ++i}
            userName={userName}
            text={message.text}
            messageTime={message.time}
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
        <span className="chat-input_send" onClick={sendMessageLambda}>
          <img src={send} alt="send message icon" />
        </span>
      </div>
    </div>
  );
};

export default Messagespace;
