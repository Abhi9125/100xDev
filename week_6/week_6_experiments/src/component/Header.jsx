import React from "react";

const Header = React.memo(function Header({ title }) {
  return <div>My name is {title}</div>;
});

export default Header;
