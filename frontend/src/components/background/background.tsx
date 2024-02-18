import Image from "next/image";

export const Background = ({ img }: { img: string }) => {
  return (
    <Image
      src={img}
      alt={"background da página"}
      width="0"
      height="0"
      sizes="100vw"
      className="w-full h-full object-cover object-center"
    />
  );
};
