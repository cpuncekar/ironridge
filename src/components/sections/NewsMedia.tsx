import React from 'react';
import Container from '../ui/Container';
import QuoteCard from '../ui/QuoteCard';
import { pressQuotes } from '../../data/content';

const NewsMedia: React.FC = () => {
  return (
    <section className="section bg-white" id="about">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-navy">
            Trusted. Talked About. Trailblazing.
          </h2>
          <p className="text-xl text-gray-600">
            What industry leaders are saying about IronRidge Financial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pressQuotes.map((quote, index) => (
            <QuoteCard key={index} quote={quote} index={index} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors">
            View All Press Coverage
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default NewsMedia;