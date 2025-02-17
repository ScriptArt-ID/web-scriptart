
import HeroHome from "@/components/guestView/home/HeroHome";
import ServiceHome from "@/components/guestView/home/ServiceHome";
import PriceHome from "@/components/guestView/home/PriceHome";
import Image from "next/image";
import FAQView from "@/components/guestView/home/FaqView";
import Layanan from "@/components/guestView/home/Service";
import EcoSmartSection from "@/components/guestView/home/test";
import Portofolio from "@/components/guestView/home/Portofolio";
import TestimoniView from "@/components/guestView/home/TestimoniView";

export default function Home() {
  return (
    <div>
      <HeroHome/>
      <ServiceHome/>
      {/* <Layanan/> */}
      <PriceHome/>
      <Portofolio/>
      <TestimoniView/>
      <FAQView/>
      {/* <EcoSmartSection/> */}
    </div>
  );
}
