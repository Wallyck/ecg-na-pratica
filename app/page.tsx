import Header       from "@/components/Header";
import Hero         from "@/components/Hero";
import PainPoints   from "@/components/PainPoints";
import CourseDetails from "@/components/CourseDetails";
import LearningGrid from "@/components/LearningGrid";
import EcgAnimation from "@/components/EcgAnimation";
import TargetAudience from "@/components/TargetAudience";
import Pricing      from "@/components/Pricing";
import Instructor   from "@/components/Instructor";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PainPoints />
      <CourseDetails />
      <LearningGrid />
      <EcgAnimation />
      <TargetAudience />
      <Pricing />
      <Instructor />
      <Footer />
    </main>
  );
}
