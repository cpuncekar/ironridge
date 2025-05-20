import React from 'react';
import Container from '../ui/Container';
import { companies } from '../../data/content';

const Partners: React.FC = () => {
  return (
    <section className="section bg-white py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-navy">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            We proudly support professionals from top global brands.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <div className="h-12 flex items-center">
                <span className="font-serif text-2xl text-gray-600">{company.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;