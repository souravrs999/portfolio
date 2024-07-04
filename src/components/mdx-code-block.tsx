export default function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex overflow-hidden p-2 relative flex-col mx-auto my-5 space-y-5 w-full font-mono text-sm bg-white border dark:bg-[#1e1e1e] dark:border-[#1e1e1e]">
      <div className="">{children}</div>
    </div>
  );
}
