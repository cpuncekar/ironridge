import React from 'react';
import { LineChart, MessageSquare, BarChart3, BellRing } from 'lucide-react';
import type { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const getIcon = () => {
    switch (feature.icon) {
      case 'LineChart':
        return <LineChart className="h-8 w-8 text-accent" />;
      case 'MessageSquare':
        return <MessageSquare className="h-8 w-8 text-accent" />;
      case 'BarChart3':
        return <BarChart3 className="h-8 w-8 text-accent" />;
      case 'BellRing':
        return <BellRing className="h-8 w-8 text-accent" />;
      default:
        return <LineChart className="h-8 w-8 text-accent" />;
    }
  };

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp animate-delay-${index * 100}`}
    >
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-xl font-medium mb-2 text-navy">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;