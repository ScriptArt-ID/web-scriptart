import Image from "next/image";
import React from "react";

export default function ServiceHome() {
  return (
    <div className="bg-orange-500 py-24 w-full h-auto xl:h-screen">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Layanan Kami
        </h1>
        <p className="text-white mt-4 text-lg">
          Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan
          layanan digital berkualitas tinggi. Dari pembuatan website hingga
          pengelolaan media sosial, kami siap memberikan solusi terbaik yang
          disesuaikan dengan kebutuhan Anda.
        </p>
      </div>

      <div className="flex flex-wrap lg:grid-cols-3 lg:grid justify-center gap-8 mt-10">
        {[
          {
            title: "Web Development",
            description:
              "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!",
          },
          {
            title: "Mobile Application",
            description:
              "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi. Dari pembuatan website hingga pengelolaan media sosial, kami siap memberikan solusi terbaik yang disesuaikan dengan kebutuhan Anda.",
          },
          {
            title: "UI/UX Design",
            description:
              "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white max-w-sm w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          >
            <Image
              className="rounded-full mx-auto mb-4"
              src="/images/image.png"
              alt={service.title}
              width={120}
              height={120}
            />
            <h5 className="text-xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
