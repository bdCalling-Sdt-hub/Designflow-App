import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/Home/Hero";
import OurProjects from "@/components/Home/OurProjects";
import ReadyToTransform from "@/components/Home/ReadyToTransform";

export default function page() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <OurProjects></OurProjects>
      <ReadyToTransform></ReadyToTransform>
      <Footer></Footer>
    </div>
  );
}
