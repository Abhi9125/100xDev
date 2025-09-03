export const Appbar = ({ userName }: { userName: string }) => {
  return (
    <div className="flex justify-between mx-4">
      <div>Medium</div>
      <Avtor userName={userName} />
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
