"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const services = [
  { imageSrc: "/assets/images/web-development.png", title: "WEB DEVELOPMENT", description: "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!" },
  { imageSrc: "/assets/images/mobile.png", title: "MOBILE", description: "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi. Dari pembuatan website hingga pengelolaan media sosial, kami siap memberikan solusi terbaik yang disesuaikan dengan kebutuhan Anda." },
  { imageSrc: "/assets/images/ui-ux.png", title: "UI/UX DESAIN", description: "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan." },
  { imageSrc: "/assets/images/graphic-design.png", title: "GRAPHIC DESIGN", description: "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!" },
  { imageSrc: "/assets/images/vidiograpy.png", title: "VIDIOGRAPY", description: "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi. Dari pembuatan website hingga pengelolaan media sosial, kami siap memberikan solusi terbaik yang disesuaikan dengan kebutuhan Anda." },
  { imageSrc: "/assets/images/social-media.png", title: "SOCIAL MEDIA", description: "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan." },
  { imageSrc: "/assets/images/photograpy.png", title: "PHOTOGRAPY", description: "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan." }
];

const CustomCard: FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
      <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full bg-orange-500">
        <Image src={imageSrc} alt={title} width={64} height={64} className="object-contain" />
      </div>
      <h2 className="text-xl text-black font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleServices, setVisibleServices] = useState(services.slice(0, 3)); // Hanya tampilkan 3 pertama

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % (services.length - 2); // Geser mulai dari index ke-3
        setVisibleServices(services.slice(nextIndex, nextIndex + 3));
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-orange-500 px-6 py-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        Layanan Kami
      </h1>
      <p className="max-w-3xl text-center text-white text-lg mb-8">
        Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi.
      </p>
      
      {/* Desktop Mode: Hanya tampilkan 3 awal dan auto slide */}
      <div className="hidden md:flex gap-6 justify-center">
        {visibleServices.map((service, i) => (
          <CustomCard key={i} {...service} />
        ))}
      </div>

      {/* Mobile Mode: Slide per satuan, tidak diubah */}
      <div className="md:hidden w-full max-w-md overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {services.map((service, i) => (
            <div key={i} className="w-full flex-shrink-0 flex justify-center">
              <CustomCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
