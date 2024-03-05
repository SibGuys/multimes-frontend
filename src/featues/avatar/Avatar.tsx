import React from "react";
import "./Avatar.css";

type AvatarProps = {
  name: string;
  messengerIcon: string;
};
const Avatar = ({ name, messengerIcon }: AvatarProps) => {
  return (
    <div className="avatar">
      <p className="avatar-name"> {name}</p>
      <img
        className="messenger-icon"
        src={`src/assets/svg/${messengerIcon}.svg`}
        alt={messengerIcon}
      ></img>
    </div>
  );
};
export default Avatar;
