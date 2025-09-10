import { Auth } from "../components/Auth";
import { Quotes } from "../components/Quotes";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="flex items-center justify-center bg-white p-6">
        <Auth type={"signin"} />
      </div>
      <div className="hidden lg:flex bg-gray-100 items-center justify-center p-8">
        <Quotes />
      </div>
    </div>
  );
};
