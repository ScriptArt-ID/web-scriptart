import Image from 'next/image';

export default function EcoSmartSection() {
  return (
    <section className="w-full h-screen max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
          <Image src="/eco-smart-logo.png" width={150} height={150} alt="Eco Smart Logo" className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-orange-600">Eco Smart</h2>
          <p className="text-gray-700 mt-2">
            Ecosmart adalah platform inovatif yang berfokus pada pemberdayaan lingkungan melalui teknologi dan kolaborasi masyarakat. Dengan visi menciptakan dunia yang lebih hijau dan berkelanjutan, Ecosmart menyediakan berbagai fitur untuk mendukung gaya hidup ramah lingkungan.
          </p>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
            Kunjungi
          </button>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-orange-600">Informasi Proyek</h3>
        <p className="text-gray-700 mt-2">
          Ecosmart adalah sebuah platform berbasis web yang dirancang untuk mendukung pemberdayaan lingkungan melalui teknologi modern. Website ini dikembangkan menggunakan Next.js untuk memberikan pengalaman cepat dan responsif.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-orange-600">Fitur Utama</h3>
        <ul className="list-disc pl-5 text-gray-700 mt-2">
          <li>Marketplace Produk Ramah Lingkungan</li>
          <li>Pesan Mudah via WhatsApp</li>
          <li>Manfaatkan Next.js API Routes untuk request data secara efisien</li>
        </ul>
      </div>
    </section>
  );
}
