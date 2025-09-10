import { useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent";
import { useBlogContentFetch } from "../hooks/useBlogsFetch";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blogContent } = useBlogContentFetch({ id: id || "" });
  if (loading || !blogContent) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        Loading....
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogContent blogContent={blogContent} />
    </div>
  );
};
