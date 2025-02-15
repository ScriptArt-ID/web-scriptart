import HeroHome from "@/components/guestView/home/HeroHome";
import ServiceHome from "@/components/guestView/home/ServiceHome";
import PriceHome from "@/components/guestView/home/PriceHome";
import Image from "next/image";
import FAQView from "@/components/guestView/home/FaqView";

export default function Home() {
  return (
    <div>
      <HeroHome/>
      <ServiceHome/>
      <PriceHome/>
      <FAQView/>
    </div>
  );
}
