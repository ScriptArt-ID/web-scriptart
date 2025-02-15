// import Image from "next/image";
// import React from "react";

// export default function ServiceHome() {
//   return (
//     <div className="bg-orange-500 py-10 px-4 md:px-10 lg:px-20">
//       <div className="text-center max-w-2xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
//           Layanan Kami
//         </h1>
//         <p className="text-white mt-4 text-lg">
//           Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan
//           layanan digital berkualitas tinggi. Dari pembuatan website hingga
//           pengelolaan media sosial, kami siap memberikan solusi terbaik yang
//           disesuaikan dengan kebutuhan Anda.
//         </p>
//       </div>

//       <div className="flex flex-wrap lg:grid-cols-3 lg:grid justify-center gap-8 mt-10">
//         {[
//           {
//             title: "Web Development",
//             description:
//               "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!",
//           },
//           {
//             title: "Mobile Application",
//             description:
//               "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi. Dari pembuatan website hingga pengelolaan media sosial, kami siap memberikan solusi terbaik yang disesuaikan dengan kebutuhan Anda.",
//           },
//           {
//             title: "UI/UX Design",
//             description:
//               "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna! Kami menciptakan desain UI/UX interaktif dan intuitif yang membuat aplikasi dan website Anda semakin menarik, mudah digunakan, dan meningkatkan kepuasan pelanggan.",
//           },
//         ].map((service, index) => (
//           <div
//             key={index}
//             className="bg-white max-w-sm w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
//           >
//             <Image
//               className="rounded-full mx-auto mb-4"
//               src="/images/image.png"
//               alt={service.title}
//               width={120}
//               height={120}
//             />
//             <h5 className="text-xl font-bold text-gray-900 dark:text-white">
//               {service.title}
//             </h5>
//             <p className="text-gray-700 dark:text-gray-400 mt-2">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client"

import React, { useEffect, useState, FC } from "react";
import { motion } from "framer-motion";

interface ServiceProps {
  title: string;
  description: string;
  buttonText: string;
}

const services: ServiceProps[] = [
  { title: "WEB DEVELOPMENT", description: "Ingin memiliki website yang modern, cepat, dan responsif? Kami siap membangun website yang tidak hanya terlihat menarik tetapi juga SEO-friendly dan mobile-friendly, memastikan bisnis Anda lebih mudah ditemukan dan diakses kapan saja!", buttonText: "Selengkapnya" },
  { title: "MOBILE", description: "Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi.", buttonText: "Selengkapnya" },
  { title: "UI/UX DESAIN", description: "Desain bukan hanya soal estetika, tetapi juga pengalaman pengguna!", buttonText: "Selengkapnya" },
  { title: "E-COMMERCE", description: "Kami menyediakan solusi e-commerce yang lengkap dan terintegrasi.", buttonText: "Selengkapnya" },
  { title: "SEO & DIGITAL MARKETING", description: "Optimalkan visibilitas bisnis Anda dengan strategi SEO yang efektif.", buttonText: "Selengkapnya" },
  { title: "CYBER SECURITY", description: "Kami membantu melindungi data dan sistem bisnis Anda dengan keamanan siber yang canggih.", buttonText: "Selengkapnya" },
  { title: "SOFTWARE DEVELOPMENT", description: "Kembangkan perangkat lunak sesuai dengan kebutuhan bisnis Anda.", buttonText: "Selengkapnya" },
  { title: "CLOUD COMPUTING", description: "Migrasikan bisnis Anda ke cloud untuk efisiensi lebih tinggi.", buttonText: "Selengkapnya" }
];

const CustomCard: FC<ServiceProps> = ({ title, description, buttonText }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-xl bg-white p-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-base text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
        {buttonText}
      </button>
    </div>
  );
};

const Layanan: FC = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-orange-500 px-6 py-8">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        Layanan Kami
      </h1>
      <p className="max-w-3xl text-center text-white text-lg mb-12">
        Kami hadir untuk membantu bisnis dan brand Anda berkembang dengan layanan digital berkualitas tinggi.
      </p>
      <div className="overflow-hidden w-full max-w-screen-xl relative">
        <motion.div 
          className="flex space-x-8"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {services.map((service, i) => (
            <div key={i} className="min-w-[300px]">
              <CustomCard 
                title={service.title} 
                description={service.description} 
                buttonText={service.buttonText} 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Layanan;

