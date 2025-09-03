import { Appbar } from "../components/Appbar";
import { BlogCart } from "../components/BlogCart";
import { useBlogFetch } from "../hooks/useBlogsFetch";

export const Blog = () => {
  const { loading, allBlogs } = useBlogFetch();

  if (loading == true) {
    return <div>loading....</div>;
  }

  console.log(allBlogs);
  return (
    <div>
      <Appbar userName="abhi" />
      {allBlogs.map((blog) => (
        <BlogCart
          title={blog.title}
          content={blog.content}
          userName={blog.author.name}
          publishDate="02/09"
        />
      ))}
    </div>
  );
};
