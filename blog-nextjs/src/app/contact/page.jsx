import Image from "next/image";
import "./contact.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const contact = () => {
  return (
    <div className=" flex items-center gap-24">
      <div className="flex-1 relative">
        <Image src="/contact.png" alt="" width={500} height={500} />
      </div>
      <div className="flex-1">
        <form className="flex flex-col gap-5">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone number" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default contact;
