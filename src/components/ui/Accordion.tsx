import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../../types';

interface AccordionProps {
  items: FAQ[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden bg-white"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-lg text-navy">{item.question}</span>
            <ChevronDown
              className={`ml-2 h-5 w-5 text-gray transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div 
            className={`accordion-content px-6 bg-gray-50 ${openIndex === index ? 'open' : ''}`}
          >
            <div className="py-4">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;