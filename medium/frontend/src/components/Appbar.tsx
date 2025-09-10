import { Link, useNavigate } from "react-router-dom";

export const Appbar = ({ userName }: { userName: string }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/publish");
  }

  return (
    <div className="flex justify-between mx-4 my-4">
      <Link to={"/allblogs"}>
        <div>Medium</div>
      </Link>

      <button
        type="button"
        className="text-white bg-green-700 ml-100 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
        onClick={handleClick}
      >
        Create Blog
      </button>
      <Avtor userName={userName} />
    </div>
  );
};

function Avtor({ userName }: { userName: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {userName[0]}
      </span>
    </div>
  );
}
