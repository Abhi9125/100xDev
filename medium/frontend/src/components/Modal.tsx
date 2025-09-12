import { useNavigate } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
      <p className="text-gray-700 mb-4">User Info</p>
      <button
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        onClick={() => navigate("/")}
      >
        Logout
      </button>
    </div>
  );
}
