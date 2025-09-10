import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quotes";

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex item-center justify-center bg-white p-6 mt-20">
        <Auth type={"signup"} />
      </div>
      <div className="hidden lg:flex bg-gray-100 items-center justify-center p-8">
        <Quotes />
      </div>
    </div>
  );
};
