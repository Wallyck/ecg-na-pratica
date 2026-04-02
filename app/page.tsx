/* Ordem exata do Figma — sem Header separado (logo está no Hero) */
import Hero          from "@/components/Hero";
import PainPoints    from "@/components/PainPoints";
import CourseDetails from "@/components/CourseDetails";
import LearningGrid  from "@/components/LearningGrid";
import EcgMonitor    from "@/components/EcgMonitor";
import TargetAudience from "@/components/TargetAudience";
import Pricing       from "@/components/Pricing";
import Instructor    from "@/components/Instructor";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <CourseDetails />
      <LearningGrid />
      <EcgMonitor />
      <TargetAudience />
      <Pricing />
      <Instructor />
      <Footer />
    </main>
  );
}
