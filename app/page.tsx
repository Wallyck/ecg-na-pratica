import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import CourseDetails from "@/components/CourseDetails";
import LearningGrid from "@/components/LearningGrid";
import EcgAnimation from "@/components/EcgAnimation";
import Instructor from "@/components/Instructor";
import TargetAudience from "@/components/TargetAudience";
import Pricing from "@/components/Pricing";
import Urgency from "@/components/Urgency";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <CourseDetails />
      <LearningGrid />
      <EcgAnimation />
      <Instructor />
      <TargetAudience />
      <Pricing />
      <Urgency />
      <Footer />
      <StickyBar />
    </main>
  );
}
