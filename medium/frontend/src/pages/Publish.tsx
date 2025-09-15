import { useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [contentTitle, setContentTitle] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function HandleSubmit() {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title: contentTitle,
        content: message,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("userInfo"),
        },
      }
    );
    navigate("/blog/" + res.data.id);
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />

      <div className="max-w-3xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md mt-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Publish Your Blog
        </h1>

        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="disabled-input"
          aria-label="disabled input"
          className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={(e) => setContentTitle(e.target.value)}
        ></input>

        <label className="block text-gray-700 font-medium mb-2">Content</label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          placeholder="Write your thoughts here..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="button"
          className="text-white bg-green-700 my-2 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "
          onClick={HandleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
