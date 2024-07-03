"use client";
import { toast } from "sonner";
import { Icons } from "./icons/lucide-icon";
import SimpleIcon from "./icons/simple-icon";

export default function SocialSharable({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  function fbShare() {
    window.open(
      encodeURI(
        `https://www.facebook.com/sharer/sharer.php?u=https://www.souravrs.com/blogs/${slug}`
      ),
      "sharer",
      "toolbar=0,status=0,width=548,height=325"
    );
  }

  function twShare() {
    window.open(
      encodeURI(
        `https://twitter.com/share?lang=en&text=${title}&url=https://www.souravrs.com/blogs/${slug}`
      ),
      "sharer",
      "toolbar=0,status=0,width=548,height=325"
    );
  }

  function CopiedLinkMsg() {
    navigator.clipboard.writeText(`https://www.souravrs.com/blogs/${slug}`);
    toast("Link copied successfully.");
  }

  return (
    <div className="flex items-center text-gray-800 dark:text-gray-300">
      <p className="text-lg mr-6 capitalize font-bold">Share this article</p>
      <div className="flex gap-4">
        <span className="cursor-pointer" onClick={fbShare}>
          <SimpleIcon iconName="facebook" size={20} />
        </span>
        <span className="cursor-pointer" onClick={twShare}>
          <SimpleIcon iconName="x" size={20} />
        </span>
        <span className="cursor-pointer" onClick={CopiedLinkMsg}>
          <Icons.share size={20} />
        </span>
      </div>
    </div>
  );
}
