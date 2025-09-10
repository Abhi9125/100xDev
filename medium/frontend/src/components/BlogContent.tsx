import type { BlogContentType } from "../hooks/useBlogsFetch";
import { Appbar } from "./Appbar";

export const BlogContent = ({
  blogContent,
}: {
  blogContent: BlogContentType;
}) => {
  return (
    <div>
      <Appbar userName="abhi" />
      <div className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-lg shadow-md mt-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Blog Title + Content */}
          <div className="flex-1">
            {" "}
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {blogContent.post.title}
            </h1>
            <div className="prose max-w-none text-gray-700 mb-6">
              {blogContent.post.content}
            </div>
          </div>

          {/* Blog writer Info */}
          <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg shadow-inner">
            <div className="flex flex-col items-center text-center"></div>
            <p className="font-semibold text-gray-800">
              {blogContent.post.author.name}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              i am full stack developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
