"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "/public/assets/logo-no-background.png";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from "../ui/Drawer/Drawer";
import { useContext } from "react";
import { AuthContext } from "@/app/(providers)/AuthContext";

type Props = {
  show?: boolean;
};

export const AuthNav: React.FC<Props> = ({ show }) => {
  const { push } = useRouter();
  const pathname = usePathname();
  // const {  } = useContext(AuthContext);

  const links = [
    { name: "Jobs", href: "/jobs" },
    { name: "Rewards", href: "/rewards" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/FAQ" },
    { name: "About Us", href: "/aboutUs" },
  ];
  const shouldShowLinks = show && !["/", "/signup"].includes(pathname);
  return (
    <div className="drawer sticky top-0 z-50 w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full h-[90px] flex justify-between items-center navbar bg-white border-b shadow-sm">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Image src={Logo} alt="logo" className="w-32 h-20 p-2" />
          {shouldShowLinks && (
            <div className="flex-none hidden lg:flex justify-center items-center">
              <ul className="menu-horizontal text-lg h-full justify-center space-x-3 items-center">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-bold p-2 hover:border-primary hover:border-b-2 delay-75 ${
                        link.href === pathname
                          ? "text-primary font-semibold border-b-2 border-primary"
                          : "text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {shouldShowLinks && (
            <div className="pl-4">
              <div className="hidden justify-center items-center space-x-5 mr-5 text-2xl">
                <button
                  onClick={() => push("/")}
                  className="text-xl w-28 h-12 text-[#0d0d0d] font-bold  hover:bg-white hover:text-[#2b656f] transition-all ease-in-out delay-75"
                >
                  Log In
                </button>
                <button
                  onClick={() => push("/signup")}
                  className="bg-[#0d0d0d] text-xl rounded-full text-[#ffffff] w-40 h-12 font-bold hover:bg-white hover:text-[#2b656f] hover:border hover:border-[#2b656f] transition-all ease-in-out delay-75"
                >
                  Sign Up
                </button>
              </div>
              <div
                className="avatar mr-4 hover:cursor-pointer"
                onClick={() => push("/profile")}
              >
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Drawer links={links} show={show} />
    </div>
  );
};
