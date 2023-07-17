import Navbar from "../shared/Navbar";
import HomeAcordion from "./HomeAcordion";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <HomeAcordion />
    </>
  );
}
