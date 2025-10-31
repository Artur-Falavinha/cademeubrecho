import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import NewsletterSection from '../components/NewsletterSection';
import ContentSection from '../components/ContentSection';
import GlossarySection from '../components/GlossarySection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import PageTransition from '../components/PageTransition';
import FloatingParticles from '../components/FloatingParticles';
import SectionDivider from '../components/SectionDivider';
import ScrollProgress from '../components/ScrollProgress';
import DecorativePattern from '../components/DecorativePattern';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <DecorativePattern />
        <ScrollProgress />
        <FloatingParticles />
        <CustomCursor />
        <Navbar />
        <main className="pt-20 relative z-10">
          <HeroSection />
          <AboutSection />
          <SectionDivider variant="reverse" />
          <NewsletterSection />
          <SectionDivider variant="default" />
          <ContentSection />
          <SectionDivider variant="reverse" />
          <GlossarySection />
          <SectionDivider variant="default" />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;