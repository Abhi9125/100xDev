export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 text-center">Only for today off 20%</div>
      {children}
    </div>
  );
}
