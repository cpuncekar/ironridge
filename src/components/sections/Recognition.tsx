import React from 'react';
import Container from '../ui/Container';
import StatCard from '../ui/StatCard';
import { recognitionStats } from '../../data/content';

const Recognition: React.FC = () => {
  return (
    <section className="section bg-gray-50 py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-navy">
            #1 in Client Retention for Mid-Market Financial Firms
          </h2>
          <p className="text-xl text-gray-600">
            Our clients don't just invest — they stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {recognitionStats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Recognition;