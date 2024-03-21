import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <section data-testid="home-component">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
};

export default Home;
