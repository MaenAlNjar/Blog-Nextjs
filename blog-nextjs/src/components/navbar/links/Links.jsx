"use client";

import Link from "next/link";
import style from "../links/Links.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import{handleLogout}from '@/lib/action'
const Links =  ({session}) => {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const isAdmin = true;

  return (
    <div>
      <div className="flex  items-center  gap-10">
        {links.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className={`link ${pathName === link.path ? "active" : ""}`}
          >
            {link.title}
          </Link>
        ))}
        {session?.user ? (
          <>
            {isAdmin && (
              <Link
                href={{ pathname: "/admin" }}
                item={{ title: "Admin" }}
                className="link"
              >
                Admin
              </Link>
            )}
            <form action={handleLogout}>
              <button className="logout">Logout</button>
            </form>
          </>
        ) : (
          <Link href={{ pathname: "/login" }} item={{ title: "Login" }}>
            Login
          </Link>
        )}
      </div>
      <Image
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        className="menuButton"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="mobileLinks">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.title}
              className={`links ${pathName === link.path ? "active" : ""}`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
