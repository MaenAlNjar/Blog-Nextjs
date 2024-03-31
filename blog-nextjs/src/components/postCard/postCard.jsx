import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <div className="flex items-center">
        <div className="w-1/10 h-64 relative">
          <Image src={post?.img} alt="" width={200} height={100} className="" />
        </div>
        <span className="text-xs transform rotate-90">01.01.2024</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl mb-4">{post.title}</h1>
        <p className="mb-4 text-gray-500">{post.body}</p>
        <Link href={`/blog/${post.slug}`} className="underline">
          Read me
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
