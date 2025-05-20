import React from 'react';
import type { Step } from '../../types';

interface StepCardProps {
  step: Step;
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
        {step.number}
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2 text-navy">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;