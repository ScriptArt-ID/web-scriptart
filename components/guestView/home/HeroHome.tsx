import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function HeroHome() {
  return (
    <div className="flex items-center justify-center w-full h-screen p-4 ">
      <div className=" md:p-6 md:m-[75px] rounded-lg overflow-hidden flex flex-col md:flex-row-reverse w-full max-w-full">
        <div className="w-full md:w-1/2 md:p-6">
          <img src="/assets/images/homeRobots.png" alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-1/2  md:p-6 flex flex-col justify-center">
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-start">BANGUN MASA DEPAN</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-center md:text-start">
            DIGITALMU <span className="text-orange-500">SEKARANG!</span>
          </h1>
          
          <h1 className="text-lg md:text-xl text-gray-400 font-bold text-center md:text-start uppercase mt-2">Siap Membantu Kesulitan Anda!</h1>
          <div className="flex pt-4 flex-col md:flex-row items-center gap-6 md:gap-8">
            <Link
              href="#about"
              className="flex items-center gap-2 text-white bg-orange-500 px-5 py-2 rounded-lg font-semibold transition duration-300 ease-in-out hover:bg-orange-400"
            >
              {" "}
              TENTANG KAMI
              <IoArrowForwardCircleOutline size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
