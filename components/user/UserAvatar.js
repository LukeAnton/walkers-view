import React from "react";
import { Avatar } from "react-native-paper";

const UserAvatar = () => (
  <Avatar.Image
    style={{ position: "absolute", right: 10, top: 45 }}
    size={50}
    source={require("../../assets/avatar.png")}
  />
);

export default UserAvatar;
