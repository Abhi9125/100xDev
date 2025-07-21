import { useState } from "react";
import BottomWarning from "../component/BottomWarning";
import Button from "../component/Button";
import Heading from "../component/Heading";
import InputBox from "../component/InputBox";
import SubHeading from "../component/SubHeading";

function Signup() {
  const [input, setInput] = useState("");

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl w-full max-w-md">
        <div>
          <Heading label={"Sing Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setInput(e.target.value);
            }}
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setInput(e.target.value)}
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setInput(e.target.value)}
            label={"Email"}
          />
          <InputBox
            onChnage={(e) => setInput(e.target.value)}
            label={"Password"}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              <Link to="/dashboard"></Link>;
            }}
            label={"Sign Up"}
          />
        </div>
        <BottomWarning
          label={"Already have an account?"}
          buttonText={"Signin"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}

export default Signup;
