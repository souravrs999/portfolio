import BlogsSuggestions from "@/components/blogs-suggestions";
import "../../nord.css";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex">
      {children}
      <div className="hidden xl:block w-[30rem] p-12 shrink-0">
        <BlogsSuggestions />
      </div>
    </div>
  );
}
