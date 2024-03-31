import "./postPage.css";
import PostCard from "@/components/postCard/postCard.jsx";
import {getPosts} from "@/lib/data"


const PostPage = async () => {
  const posts = await getPosts();
  return (
    <div className="flex flex-wrap gap-5">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostPage;
