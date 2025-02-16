"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FAQView() {
  return (
    <section className=" w-full h-auto xl:h-screen px-6 py-24">
      <div className="text-center mb-8">
        <h2 className="text-orange-500 text-4xl font-bold">FAQ</h2>
      </div>
      <div>
        <div className="w-full xl:px-[60px] flex flex-col md:flex-row items-center md:mt-10">
          <div className="w-full md:w-3/4 xl:px-[60px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  1. Apa saja layanan yang tersedia?
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    Kami menawarkan berbagai layanan digital, termasuk pembuatan
                    website, pengembangan aplikasi mobile, UI/UX design, graphic
                    design, pengelolaan media sosial, serta layanan photography
                    & videography untuk kebutuhan bisnis atau personal Anda.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  2. Berapa harga jasa yang ditawarkan?
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    Harga layanan bervariasi tergantung pada kompleksitas dan
                    kebutuhan proyek. Kami menawarkan harga yang kompetitif dan
                    fleksibel. Untuk detail lebih lanjut, silakan hubungi kami
                    melalui tombol "Ayo Mulai!".
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  3. Apakah saya bisa meminta desain khusus sesuai keinginan?
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    Tentu! Kami menerima permintaan desain yang disesuaikan
                    dengan preferensi dan kebutuhan Anda, baik untuk website,
                    aplikasi, UI/UX, maupun graphic design.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  4. Bagaimana sistem pengerjaannya?
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    Kami memulai dengan konsultasi untuk memahami kebutuhan
                    Anda. Setelah itu, kami akan membuat konsep, melakukan
                    pengembangan, dan memberikan revisi sesuai dengan
                    kesepakatan awal hingga hasil akhir sesuai ekspektasi Anda.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  5. Bagaimana cara memesan layanan ini?
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    Anda dapat langsung menghubungi kami melalui tombol "Ayo
                    Mulai!" untuk berdiskusi mengenai kebutuhan Anda. Kami siap
                    membantu dari tahap konsultasi hingga hasil akhir yang
                    memuaskan.
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-6 md:mt-0">
            <Image
              src="/images/robot-faq.png"
              width={300}
              height={300}
              alt="FAQ Robot"
              className="w-2/3 md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
