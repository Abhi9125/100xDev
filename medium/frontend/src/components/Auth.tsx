import type { SignupInput } from "100x-zod-common";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [inputValue, setInputValue] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  console.log(inputValue);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>Create an account</div>
      <div>
        {type === "signin" ? "Already have an account?" : "New one"}
        <span>
          <Link
            to={type === "signin" ? "signup" : "signin"}
            className="mx-2 font-bold underline underline-offset-1"
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
      <LabelAndInput
        labelHeading="Password"
        placeholder="password"
        type="password"
        onchange={(e) => {
          setInputValue({
            ...inputValue,
            password: e.target.value,
          });
        }}
      />
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

      <button
        type="button"
        className="text-white my-4 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        Dark
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
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
        {labelHeading}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        onChange={onchange}
        required
      />
    </div>
  );
}
