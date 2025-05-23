"use client";
import { useRouter } from "next/navigation";

const Tag = ({ tag }) => {
  const router = useRouter();
  console.log("Tag", tag);

  const handleClick = () => {
    router.push(`/events?tag=${encodeURIComponent(tag)}`);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-orange-300 px-3 py-1 rounded-full text-white hover:bg-orange-400"
    >
      {tag}
    </button>
  );
};

export default Tag;
