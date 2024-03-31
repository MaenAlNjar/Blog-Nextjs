import { getUser } from "@/lib/data";
import Image from "next/image";
import "./styles.css";
const PostUser = async ({ userId }) => {
  const user = await getUser(userId);

  return (
    <div className="contaner">
      <Image
        className="avatar"
        src={user.img ? user.img : "/post.png"}
        alt=""
        width={100}
        height={100}
      />
      <div className="texts">
        <span className="title">Auther</span>
        <span className="username">{user.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
