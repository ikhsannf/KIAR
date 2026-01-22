import { Header, Footer } from "@/components/layout";
import { Hero, Featured, StoryPreview, TestimonialsPreview, CallToAction } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <StoryPreview />
        <TestimonialsPreview />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
