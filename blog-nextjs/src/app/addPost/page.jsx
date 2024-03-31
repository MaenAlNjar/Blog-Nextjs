import { addPost ,deletePost } from "@/lib/action";

const AddPost = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <form action={addPost} className="flex flex-col gap-4 w-40  ">
        <input
          type="text"
          placeholder="title"
          name="title"
          className="border border-black"
        />
        <input
          type="text"
          placeholder="desc"
          name="desc"
          className="border border-black"
        />
        <input
          type="text"
          placeholder="slug"
          name="slug"
          className="border border-black"
        />
        <input
          type="text"
          placeholder="userId"
          name="userId"
          className="border border-black"
        />
        <button className="border border-black" type="submit">
          Create
        </button>
      </form>

      <form action={deletePost} className="flex flex-col gap-2" >
        <input type="text" placeholder="postId" name="id" className="border border-black" />
        <button className="border border-black" >Delete</button>
      </form>
    </div>
  );
};
export default AddPost;
