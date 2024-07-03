import Image, { ImageProps } from "next/image";

export default function BlogImg(props: ImageProps) {
  return (
    <div className="w-fit mx-auto">
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className="my-3 w-full"
      />
    </div>
  );
}
