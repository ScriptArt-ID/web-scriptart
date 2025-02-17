"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillProduct } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import { MdDashboard, MdEvent } from "react-icons/md";
import { SiLimesurvey } from "react-icons/si";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname.startsWith("/admin"))
    return (
      <>
        {/* Tombol Menu untuk Mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-40 bg-orange-500 text-white p-3 rounded-md shadow-md"
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>

        {/* Overlay untuk menutup sidebar di mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`bg-white w-[300px] h-full fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          <div className="w-full h-auto p-4">
            {/* Tombol Close untuk Mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden  p-4 text-3xl text-orange-500"
            >
              <HiX />
            </button>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="HMPTI"
                    width={150}
                    height={150}
                  />
                </Link>
              </div>
            </div>

            <ul className="list-none p-0 mt-6">
              {[
                {
                  href: "/admin/",
                  icon: <MdDashboard />,
                  label: "Dashboard",
                },
                {
                  href: "/admin/web",
                  icon: <FaPeopleGroup />,
                  label: "Web",
                },
              ].map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li
                    key={item.href}
                    className={`flex p-4 my-2 mx-4 rounded-xl items-center ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-orange-500 hover:bg-orange-500 hover:text-white"
                    }`}
                  >
                    <span className="text-2xl pr-2">{item.icon}</span>
                    <Link href={item.href} className="block font-bold">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
}
