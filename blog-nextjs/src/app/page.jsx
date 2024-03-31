import Image from "next/image";
import "./homepage.css";
export default function Home() {
  return (
    <div className="flex  gap-24">
      <div className="flex-1 flex flex-col  gap-14">
        <h1 className="text-8xl">Creative Thoughts.</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
          officia cupiditate vel suscipit, sit a, quibusdam ad pariatur rerum
          necessitatibus omnis ullam molestiae. Cum magni adipisci error illo
          neque.
        </p>
        <div className="flex gap-10 ">
          <button className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer">
            Learn More
          </button>
          <button className="py-2 px-4  text-black rounded-md bg-white cursor-pointer">
            Contact
          </button>
        </div>
        <div className="brands">
          <Image src="/brands.png" alt="" width={500} height={100} />
        </div>
      </div>
      <div className="imgContainer">
        <Image src="/hero.gif" alt="" width={500} height={100} />
      </div>
    </div>
  );
}
