import React from 'react';
import type { PressQuote } from '../../types';

interface QuoteCardProps {
  quote: PressQuote;
  index: number;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, index }) => {
  return (
    <blockquote 
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-accent animate-fadeInUp animate-delay-${index * 100}`}
    >
      <p className="text-lg font-medium mb-3 text-gray-800 italic">"{quote.quote}"</p>
      <footer className="text-navy font-semibold">— {quote.source}</footer>
    </blockquote>
  );
};

export default QuoteCard;