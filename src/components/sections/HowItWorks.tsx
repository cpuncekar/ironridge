import React from 'react';
import Container from '../ui/Container';
import StepCard from '../ui/StepCard';
import { howItWorksSteps } from '../../data/content';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-navy">
            Here's How IronRidge Works for You
          </h2>
          <p className="text-xl text-gray-600">
            Our proven process helps you achieve your financial goals with clarity and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;