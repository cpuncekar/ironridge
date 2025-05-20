import React from 'react';
import type { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="text-4xl font-serif font-bold text-accent mb-2">{stat.value}</div>
      <div className="text-navy">{stat.label}</div>
    </div>
  );
};

export default StatCard;