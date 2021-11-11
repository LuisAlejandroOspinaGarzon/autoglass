import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import ContactButton from  '../ContactButton';
import FadeInAnimation from "../FadeInAnimation";
import WhatsappButton from '../WhatsappButton';

function Home() {
  return (
    <div>
        <WhatsappButton />
        <FadeInAnimation direction="down">
            <ContactButton />
        </FadeInAnimation>
        <FadeInAnimation direction="up">
            <HeroSection />
        </FadeInAnimation>
        <FadeInAnimation direction="up" delay={2}>
            <Cards />
        </FadeInAnimation>
        <Footer />
    </div>
  );
}

export default Home;