"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { webCollection } from "@/lib/firebase";
import { getDocs } from "firebase/firestore";

interface Web {
  id: string;
  titleWebs: string;
  linkFull: string;
  imageUrl: string;
  category?: string;
  dateCreated: string;
}

const categories = [
  "All categories",
  "Web Development",
  "Mobile",
  "UI-UX",
  "Graphic Design",
  "Social Media",
  "Photography",
  "Videography",
];

export default function Portofolio() {
  const [webs, setWebs] = useState<Web[]>([]);
  const [filteredWebs, setFilteredWebs] = useState<Web[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(webCollection);
      const webData = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as Web)
      );
      setWebs(webData);
      setFilteredWebs(webData);
    };
    fetchData();
  }, []);

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
    if (category === "All categories") {
      setFilteredWebs(webs);
    } else {
      setFilteredWebs(webs.filter((web) => web.category === category));
    }
  };

  return (
    <div className="xl:h-screen h-full w-full ">
      <div className=" lg:h-screen h-full pt-24 lg:px-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 text-center">
          Portofolio
        </h1>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap lg:pt-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`px-5 py-2.5 text-base font-medium rounded-full me-3 mb-3 border focus:ring-4 transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-[36px]">
            {filteredWebs.map((web) => (
              <div key={web.id} className="flex flex-col rounded-xl space-y-4 shadow-md">
                <Image
                  className="h-auto max-w-full rounded-lg aspect-video object-cover"
                  src={web.imageUrl}
                  alt={web.titleWebs}
                  width={620}
                  height={440}
                />
                <div className="flex flex-row justify-between p-2">
                  <div className="flex flex-col pt-4">
                    <p className="text-xl text-black font-bold">
                      {web.titleWebs}
                    </p>
                    <p className="text-[#757575] text-lg">{web.category}</p>
                  </div>
                  <a
                    href={web.linkFull}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-4 mt-1"
                  >
                    <div className="flex flex-row items-center justify-center h-[44px] w-[44px] rounded-full bg-blue-300 space-x-1">
                      <GoArrowUpRight className="w-16 h-16 cursor-pointer" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
