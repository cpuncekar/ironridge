import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import FeatureCard from '../ui/FeatureCard';
import { dashboardFeatures } from '../../data/content';

const TrackInvestments: React.FC = () => {
  return (
    <section id="investments" className="section bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-4 text-navy">
              Stay on Top of Every Dollar
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our client dashboard gives you full transparency 24/7, putting powerful financial insights at your fingertips.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {dashboardFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">
                Log In
              </Button>
              <Button variant="secondary">
                Explore the Platform
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-4 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="../images/pexels-romulo-queiroz-2079642-11798250.jpg" 
                alt="IronRidge Financial Dashboard" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-medium">Updated in real-time</p>
              <p className="text-sm text-white/80">Secure 256-bit encryption</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrackInvestments;