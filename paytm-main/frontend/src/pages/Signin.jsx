import { useState } from "react";
import BottomWarning from "../component/BottomWarning";
import Button from "../component/Button";
import Heading from "../component/Heading";
import InputBox from "../component/InputBox";
import SubHeading from "../component/SubHeading";

function Signin() {
  const [input, setInput] = useState("");

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl w-full max-w-md">
        <div>
          <Heading label={"Sing In"} />
          <SubHeading label={"Enter your credentials to access your account"} />

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
            label={"Sign In"}
          />
        </div>
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}

export default Signin;
