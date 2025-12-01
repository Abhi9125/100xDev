import React, { useContext } from "react";
import { userContext } from "../userContext";

const Navbar = () => {
  const user = useContext(userContext);
  return <div>{user}</div>;
};

export default Navbar;
