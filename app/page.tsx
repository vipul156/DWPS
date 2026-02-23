import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NoticeTicker from "@/components/NoticeTicker";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyDWPS from "@/components/WhyDWPS";
import ExploreDWPS from "@/components/ExploreDWPS";
import AdmissionSection from "@/components/AdmissionSection";
import StatsSection from "@/components/StatsSection";
import EnrollSection from "@/components/EnrollSection";
import AchievementsBirthdaySection from "@/components/AchievementsBirthdaySection";
import FacilitiesSection from "@/components/FacilitiesSection";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import NewsEvents from "@/components/NewsEvents";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <NoticeTicker />
      <Hero />
      <About />
      <WhyDWPS />
      <ExploreDWPS />
      <FacilitiesSection />
      <StatsSection />
      <EnrollSection />
      <AchievementsBirthdaySection />
      <Gallery />
      <Testimonials />
      <AdmissionSection />
      <NewsEvents />
      <Footer />
    </main>
  );
}
