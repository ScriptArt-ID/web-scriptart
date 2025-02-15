import Image from "next/image";
import React from "react";

export default function HeroHome() {
  return (
    // <div className="h-screen w-full">
    //   {/* Hero */}
    //   <div className="pt-[12vh] md:pt-[12vh] bg-white overflow-hidden">
    //     <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
    //       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
    //         {/* Hero Content */}
    //         <div className="order-2 lg:order-1 lg:w-4/5">
    //           <h1 className="text-center lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black ">
    //             Bangun <span className="text-orange-500">Masa Depan</span>{" "}
    //           </h1>
    //           <h1 className="text-center lg:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black ">
    //             <span className="text-orange-500">Digitalmu </span> Sekarang!
    //           </h1>
    //         </div>
    //         {/* Hero Image */}
    //         <div className="order-1 lg:order-2 flex justify-end ml-auto">
    //           <Image
    //             src="/images/hero.png"
    //             width={800}
    //             height={600}
    //             alt="Hero"
    //             className="object-cover"
    //           ></Image>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justivy-center w-full h-screen p-4">
      <div className="p-6 md:m-[150px] rounded-lg overflow-hidden flex flex-col md:flex-row-reverse w-full max-w-full ">
        <div className="w-full items-end justify-end flex">
          <Image
            src="/images/hero.png"
            alt="Image"
            width={250}
            height={250}
            className="w-full h-full items-end justify-end flex pl-24"
          ></Image>
        </div>
        <div className="w-full md:2-1/2 p-4 md:p-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start lg:text-start sm:text-4xl lg:text-6xl xl:text-7xl  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black">
            Bangun <span className="text-orange-500">Masa Depan</span>
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start lg:text-start sm:text-4xl lg:text-6xl xl:text-7xl  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-black">
            <span className="text-orange-500">Digitalmu,</span> Sekarang!
          </h1>
          <h1 className="text-lg pt-4 flex-col text-gray-400 font-bold text-center md:text-start uppercase mt-2">
            Inovasi, Kolaborasi, Prestasi
          </h1>
        </div>
      </div>
    </div>
  );
}
