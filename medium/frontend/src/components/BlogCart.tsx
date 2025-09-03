interface blogCartType {
  title: string;
  content: string;
  userName: string;
  publishDate: string;
}
export const BlogCart = ({
  title,
  content,
  userName,
  publishDate,
}: blogCartType) => {
  return (
    <div className="flex flex-col justify-center border-b mt-4">
      <div className="flex">
        <Avtor userName={userName} />
        <p className="mx-2 mt-3">{publishDate}</p>
      </div>
      <div>{title}</div>
      <div>{content.slice(0, 100)} ...</div>
      <div>{content.length / 100} mins read </div>
    </div>
  );
};

function Avtor({ userName }: { userName: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {userName[0]}
      </span>
    </div>
  );
}
