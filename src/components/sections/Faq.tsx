import React from 'react';
import Container from '../ui/Container';
import Accordion from '../ui/Accordion';
import { faqs } from '../../data/content';

const Faq: React.FC = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-navy">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to commonly asked questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
};

export default Faq;