import type { FAQ, Company, PressQuote, Feature, Step, Stat } from '../types';
import { LineChart, MessageSquare, BarChart3, BellRing } from 'lucide-react';

export const faqs: FAQ[] = [
  {
    question: "How much does it cost to work with IronRidge?",
    answer: "We offer transparent tiered pricing based on your investment portfolio size. Our investment services start with low quarterly fees of 0.25% for portfolios under $1M, with reduced rates for larger investments. All fees include full access to our advisory team and digital platform."
  },
  {
    question: "What services do you offer?",
    answer: "IronRidge provides comprehensive financial services including retirement planning, investment management, life insurance solutions, mortgage consulting, and estate strategy planning. Each service can be tailored to meet your specific needs and goals."
  },
  {
    question: "How do I get started?",
    answer: "Getting started is simple. Book a free discovery call with one of our certified advisors who will help map out your financial goals and create an initial plan. There's no obligation, and you'll receive personalized recommendations during your consultation."
  },
  {
    question: "Can I track everything online?",
    answer: "Yes, all clients receive access to our secure client dashboard that gives you full visibility and control over your investments and financial plans. Track performance, chat with advisors, and make adjustments all in one place."
  },
  {
    question: "What makes IronRidge different from other financial firms?",
    answer: "IronRidge combines traditional financial expertise with modern technology to provide a superior client experience. Our industry-leading 98.7% client retention rate speaks to our personalized approach, transparent fee structure, and exceptional service quality."
  }
];

export const companies: Company[] = [
  { name: "Chase", logo: "chase" },
  { name: "Oracle", logo: "oracle" },
  { name: "Coca-Cola", logo: "coca-cola" },
  { name: "Affirm", logo: "affirm" },
  { name: "Cloudflare", logo: "cloudflare" }
];

export const pressQuotes: PressQuote[] = [
  {
    quote: "IronRidge is redefining wealth management for the digital age.",
    source: "Forbes"
  },
  {
    quote: "Top 10 Boutique Investment Firms to Watch",
    source: "Bloomberg"
  },
  {
    quote: "Blending trust with tech-forward transparency.",
    source: "Fast Company"
  }
];

export const dashboardFeatures: Feature[] = [
  {
    title: "Real-time portfolio performance",
    description: "Track your investments with live updates and comprehensive analytics.",
    icon: "LineChart" 
  },
  {
    title: "Budget + net worth tracking",
    description: "See your complete financial picture in one secure dashboard.",
    icon: "BarChart3"
  },
  {
    title: "Chat securely with your advisor",
    description: "Get expert advice exactly when you need it, no phone tag required.",
    icon: "MessageSquare"
  },
  {
    title: "Automated rebalancing alerts",
    description: "Stay informed when your portfolio needs attention or adjustment.",
    icon: "BellRing"
  }
];

export const howItWorksSteps: Step[] = [
  {
    number: 1,
    title: "Schedule a Call",
    description: "Meet with a certified advisor to discuss your goals and needs."
  },
  {
    number: 2,
    title: "Personalized Plan",
    description: "Receive a tailored financial strategy built to match your goals and risk profile."
  },
  {
    number: 3,
    title: "Ongoing Support",
    description: "Track everything in our secure portal with real-time updates and analysis."
  },
  {
    number: 4,
    title: "Grow with Confidence",
    description: "We evolve your strategy over time as your life and goals change."
  }
];

export const recognitionStats: Stat[] = [
  {
    value: "98.7%",
    label: "Client Retention Rate" 
  },
  {
    value: "5-Star",
    label: "Satisfaction, 3 Years Running"
  },
  {
    value: "#1",
    label: "Top Advisor Experience, FinTech Journal 2024"
  }
];