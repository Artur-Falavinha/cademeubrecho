import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import NewsletterSection from '../components/NewsletterSection';
import ContentSection from '../components/ContentSection';
import GlossarySection from '../components/GlossarySection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <NewsletterSection />
        <ContentSection />
        <GlossarySection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;