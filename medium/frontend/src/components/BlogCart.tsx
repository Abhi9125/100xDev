import { Link } from "react-router-dom";

interface blogCartType {
  id: number;
  title: string;
  content: string;
  userName: string;
  publishDate: string;
}
export const BlogCart = ({
  id,
  title,
  content,
  userName,
  publishDate,
}: blogCartType) => {
  return (
    <Link to={"/blog/" + id}>
      <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition cursor-pointer border border-gray-200">
        <div className="flex items-center mb-4">
          <Avtor userName={userName} />
          <p className="ml-3 text-sm text-gray-500">{publishDate}</p>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <div className="text-gray-600 mb-3">{content.slice(0, 100)} ...</div>
        <div className="text-sm text-gray-400">
          {content.length / 100} mins read{" "}
        </div>
      </div>
    </Link>
  );
};

function Avtor({ userName }: { userName: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {userName[0].toUpperCase()}
      </span>
    </div>
  );
}
