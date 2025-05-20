import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-navy text-white overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(26, 42, 66, 0.9), rgba(26, 42, 66, 0.95)), url(https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fadeInUp">
            Build Your Future with Confidence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fadeInUp animate-delay-100">
            Expert financial planning and investment strategies tailored to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-200">
            <Button 
              variant="primary" 
              size="lg"
              className="shadow-lg hover:shadow-xl"
            >
              Book a Free Consultation
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </Container>

      {/* Geometric shapes for visual interest */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white" 
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 30%, 0 100%)' }}
      ></div>
    </section>
  );
};

export default Hero;