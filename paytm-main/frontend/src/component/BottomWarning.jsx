import React from "react";
import { Link } from "react-router-dom";

function BottomWarning({ label, to, buttonText }) {
  return (
    <div className="flex justify-center">
      <div className="font-semibold ">{label}</div>
      <Link to={to} className="pointer underline font-bold">
        {buttonText}
      </Link>
    </div>
  );
}

export default BottomWarning;
