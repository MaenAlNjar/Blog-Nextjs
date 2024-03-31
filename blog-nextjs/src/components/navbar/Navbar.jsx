import Link from "next/link";
import Links from "@/components/navbar/links/Links";
import {auth} from "@/lib/auth"
const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex justify-between h-24 items-center">
      <div className="font-bold text-3xl">Logo</div>
      <div className="text-black">
        <Links  session={session}/>
      </div>
    </div>
  );
};
export default Navbar;
