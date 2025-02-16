import HeroHome from "@/components/guestView/home/HeroHome";
import PriceHome from "@/components/guestView/home/PriceHome";
import FAQView from "@/components/guestView/home/FaqView";
import Layanan from "@/components/guestView/home/Layanan";

export default function Home() {
  return (
    <div>
      <HeroHome/>
      <Layanan/>
      <PriceHome/>
      <FAQView/>
    </div>
  );
}
