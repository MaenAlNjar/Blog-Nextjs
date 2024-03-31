import Image from "next/image";
import "./singlePost.css";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import { Suspense } from "react";


export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className="flex gap-24">
      {post.img && typeof post.img === "string" && ( // Check if post.img is a string
        <div className="imgContainer">
          <Image src={post.img} alt={post.title} width={800} height={600} />
        </div>
      )}
      <div className="textContainer flex flex-col">
        <h1 className="text-6xl">{post.title}</h1>
        <div className="flex flex-col gap-3">
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className="flex flex-col gap-3">
            <span className="text text-gray-500 font-bold">Published</span>
            <span className="font-medium">
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className="text-xl">{post.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
