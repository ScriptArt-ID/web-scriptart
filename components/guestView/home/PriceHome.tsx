import React from "react";
import Image from "next/image";

export default function Harga() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center px-6 py-10">
        {/* Judul Harga */}
        <h1 className="text-orange-500 text-3xl sm:text-4xl font-bold mb-6">
          Harga
        </h1>

        {/* Kontainer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center max-w-6xl w-full gap-10">
          {/* Gambar */}
          <div className="justify-center">
            <Image
              src="/images/harga.png"
              alt="Harga Image"
              width={400}
              height={400}
              className="w-full"
            />
          </div>

          {/* Konten Teks */}
          <div className="text-black space-y-4 col-span-2 align-top">
            <h2 className="text-2xl font-bold">Mulai Dari</h2>
            <p className="text-orange-500 text-xl font-semibold">
              Rp. 49.000,00
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami menawarkan layanan pembuatan website dengan harga yang
              kompetitif, mulai dari Rp. 49.000,00. Dengan biaya terjangkau,
              Anda bisa mendapatkan website profesional yang sesuai dengan
              kebutuhan dan keinginan Anda.
              <br />
              <br />
              Kami memahami bahwa setiap proyek memiliki spesifikasi yang
              berbeda, oleh karena itu kami menyediakan layanan yang fleksibel
              dan dapat disesuaikan. Ingin berdiskusi lebih lanjut mengenai
              harga atau desain yang diinginkan? Klik tombol "Let’s Talk" dan
              langsung terhubung dengan tim kami melalui WhatsApp.
            </p>
            {/* Tombol Ayo Mulai */}
            <div className="flex items-end justify-end">
              <button className="border-2 border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all">
                Ayo Mulai!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
