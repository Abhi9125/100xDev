import { Appbar } from "../components/Appbar";
import { BlogCart } from "../components/BlogCart";
import { useBlogFetch } from "../hooks/useBlogsFetch";

export const AllBlogs = () => {
  const { loading, allBlogs } = useBlogFetch();

  if (loading == true) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        loading....
      </div>
    );
  }

  console.log(allBlogs);
  return (
    <div className="min-h-screen bg-gray-50">
      <Appbar />
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {allBlogs.map((blog) => (
          <BlogCart
            id={blog.id}
            title={blog.title}
            content={blog.content}
            userName={blog.author.name}
            publishDate="02/09"
          />
        ))}
      </div>
    </div>
  );
};
