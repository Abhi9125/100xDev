import { useState } from "react";
import BottomWarning from "../component/BottomWarning";
import Button from "../component/Button";
import Heading from "../component/Heading";
import InputBox from "../component/InputBox";
import SubHeading from "../component/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl w-full max-w-md">
        <div>
          <Heading label={"Sing Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => setUserName(e.target.value)}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
          />
        </div>
        <div>
          <Button
            onClick={async () => {
              const respose = await axios.post(
                "http://localhost:3000/api/v1/user/signup",
                {
                  firstName,
                  lastName,
                  userName,
                  password,
                }
              );
              console.log(respose.data.token);
              localStorage.setItem("token", respose.data.token);
              console.log("Signup success, navigating now...");
              navigate("/dashboard");
              console.log("Navigation attempted");
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
