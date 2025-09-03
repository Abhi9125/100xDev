import type { BlogContentType } from "../hooks/useBlogsFetch";

export const BlogContent = ({
  blogContent,
}: {
  blogContent: BlogContentType;
}) => {
  return (
    <div className="flex justify-between mx-10 mt-4">
      <div>
        <p>{blogContent.post.title}</p>

        <p>{blogContent.post.content}</p>
      </div>
      <div>
        <p>{blogContent.post.author.name}</p>
        <p>i am full stack developer</p>
      </div>
    </div>
  );
};
