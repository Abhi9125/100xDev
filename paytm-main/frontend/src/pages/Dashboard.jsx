import React from "react";
import { Appbar } from "../component/Appbar";
import { Balance } from "../component/Balance";
import Users from "../component/Users";

function Dashboard() {
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
      <></>
    </div>
  );
}

export default Dashboard;
