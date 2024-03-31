import Image from "next/image";
import "./about.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

export default function About() {
  return (
    <div className="flex gap-24">
      <div className="flex-1 flex flex-col gap-14">
        <h2 className="text-sky-600 font-bold text-4xl">About Agency</h2>
        <h1 className="text-6xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-sky-600">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sky-600">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sky-600">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/about.png" alt="" width={700} height={500} />
      </div>
    </div>
  );
}
