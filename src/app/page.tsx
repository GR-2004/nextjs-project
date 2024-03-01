import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialised bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <MusicSchoolTestimonialCards/>
      <UpcomingWebinar/>
    </main>
  );
}
