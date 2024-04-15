"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "/public/assets/logo-no-background.png";
import Image from "next/image";
import Link from "next/link";

type Props = {
  links: { name: string; href: string }[];
  show?: boolean;
};

export const Drawer: React.FC<Props> = ({ links, show }) => {
  const { push } = useRouter();
  const open = usePathname();
  const shouldShowLinks = show && !["/", "/signup"].includes(open);

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-[#fafafa] flex flex-col justify-between ">
        <div>
          <Image
            src={Logo}
            alt="pawImage"
            className=" w-32 h-20 space-y-5 mx-auto mb-10"
          />
          {shouldShowLinks && (
            <div>
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-bold text-lg p-2 hover:border-b-2 delay-75  ${
                      link.href === open
                        ? "text-primary font-semibold "
                        : "text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col justify-end items-center space-y-2">
          <button
            onClick={() => push("/signup")}
            className="bg-[#0d0d0d] rounded-full text-[#ffffff] w-[80%] h-10 pl-6 pr-6 hover:bg-white hover:text-[#2b656f] hover:border-[#2b656f] border transition-all ease-in-out delay-75"
          >
            Sign Up
          </button>
          <button
            onClick={() => push("/")}
            className="border border-[#2b656f] rounded-full w-[80%] h-10 text-[#3D3D3D]  hover:bg-white hover:text-[#2b656f] transition-all ease-in-out delay-75"
          >
            Log In
          </button>
        </div>
      </ul>
    </div>
  );
};
