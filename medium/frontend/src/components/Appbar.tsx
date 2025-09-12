import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";

export const Appbar = ({ userName }: { userName: string }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/publish");
  }

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 sticky top-0 z-10">
      <Link to={"/allblogs"}>
        <div className="ml-5 font-extrabold">Medium</div>
      </Link>

      <button
        type="button"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition "
        onClick={handleClick}
      >
        Create Blog
      </button>
      <Avtor userName={userName} />
    </div>
  );
};

function Avtor({ userName }: { userName: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleLogOut() {
    return isModalOpen === true ? setIsModalOpen(false) : setIsModalOpen(true);
  }
  return (
    <div>
      <div
        className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600"
        onClick={handleLogOut}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {userName[0]}
        </span>
      </div>
      <div>{isModalOpen && <Modal />}</div>
    </div>
  );
}
