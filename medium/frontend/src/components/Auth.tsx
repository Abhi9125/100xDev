import type { SignupInput } from "100x-zod-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  async function handleRoutes() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        inputValue
      );

      const data = response.data;

      localStorage.setItem("userInfo", data.token);
      navigate("/allblogs");
    } catch {
      alert("Something went wrong!!");
    }
  }

  return (
    <div className="max-w-md w-full space-y-6 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        {type === "signup" ? "Create an Account" : "Welcome Back"}
      </h2>

      <div className="text-sm text-gray-600 text-center">
        {type === "signin" ? "New One?" : "Already have an account?"}
        <span>
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className="ml-2 text-blue-600 font-semibold hover:underline"
          >
            {type === "signin" ? "signup" : "signin"}
          </Link>
        </span>
      </div>

      <LabelAndInput
        labelHeading="Email"
        placeholder="abhi.singh3132@gmail.com"
        onchange={(e) => {
          setInputValue({
            ...inputValue,
            email: e.target.value,
          });
        }}
      />
      {type === "signup" ? (
        <LabelAndInput
          labelHeading="Name"
          placeholder="Enter your name"
          onchange={(e) => {
            setInputValue({
              ...inputValue,
              name: e.target.value,
            });
          }}
        />
      ) : (
        ""
      )}
      <LabelAndInput
        labelHeading="Password"
        placeholder="Password"
        type="password"
        onchange={(e) => {
          setInputValue({
            ...inputValue,
            password: e.target.value,
          });
        }}
      />

      <button
        type="button"
        className="text-white my-4 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={handleRoutes}
      >
        {type === "signup" ? "SignUp" : "SignIn"}
      </button>
    </div>
  );
};

interface LabelAndInputProps {
  labelHeading?: string;
  placeholder?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelAndInput({
  labelHeading,
  placeholder,
  onchange,
  type,
}: LabelAndInputProps) {
  return (
    <div>
      <label className="block mb-1 text-gray-700 font-medium">
        {labelHeading}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
        onChange={onchange}
        required
      />
    </div>
  );
}
