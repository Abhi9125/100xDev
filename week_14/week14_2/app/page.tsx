import Image from "next/image";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );

  return res.data;
}

export default async function Home() {
  const userData = await getData();
  console.log(userData);
  return (
    <div>
      Name : {userData.name}
      <p>{userData.email}</p>
    </div>
  );
}
