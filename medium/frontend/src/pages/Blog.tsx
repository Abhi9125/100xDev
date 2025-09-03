import { useParams } from "react-router-dom";
import { BlogContent } from "../components/BlogContent";
import { useBlogContentFetch } from "../hooks/useBlogsFetch";

export const Blog = () => {
  const { id } = useParams();

  const { loading, blogContent } = useBlogContentFetch({ id: id || "" });
  if (loading || !blogContent) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <BlogContent blogContent={blogContent} />
    </div>
  );
};
