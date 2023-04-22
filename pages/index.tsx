import React from 'react';
import TopBanner from '../components/TopBanner';
import About from '../components/About';
import Services from '../components/Services';
import Resources from '../components/Resources';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import NavBar from '../components/NavBar';

const JaneRukariaLaw: React.FC = () => {
  return (
    <div className='flex-col w-full h-full'>
      <NavBar />
      <TopBanner />
      <About />
      <Services />
      <Resources />
      {/* <Testimonials /> */}
      <ContactForm />
    </div>
  );
};

export default JaneRukariaLaw;
