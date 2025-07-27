import React from "react";
import Signup from "./Signup";

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Transfer Money to Your Buddy 💸
        </h1>
        <Signup />
      </div>
    </div>
  );
}

export default HomePage;
