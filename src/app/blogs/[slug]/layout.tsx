import BlogsSuggestions from "@/components/blogs-suggestions";
import "../../nord.css";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex flex-col xl:flex-row">
      {children}
      <div className="w-full xl:w-[30rem] p-12 shrink-0">
        <BlogsSuggestions />
      </div>
    </div>
  );
}
