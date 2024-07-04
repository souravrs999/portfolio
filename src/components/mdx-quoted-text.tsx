export default function QuotedText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 mx-auto my-3 border-l-4 bg-gray-100 dark:bg-[#1e1e1e] border-[#1e1e1e] dark:border-white">
      <div className="text-base italic text-[#111] [&_p]:text-gray-700">
        {children}
      </div>
    </div>
  );
}
