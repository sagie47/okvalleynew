import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowLeft, CheckCircle2, Code, Bot, Search, Globe, Zap, Database, LineChart, Users, Target, Activity, TrendingUp } from 'lucide-react';

// Enhanced Service Data Structure
const serviceData: Record<string, any> = {
  'ai-lead-systems': {
    title: "AI Lead Systems",
    subtitle: "Build an Always-On Growth Control Plane",
    description: "Stop losing jobs because you were unreachable. We build agentic systems that instantly respond to missed calls, route inquiries by logic, and keep your team in sync on every opportunity.",
    features: [
      "Missed-call text-back automation",
      "Web chat to SMS routing",
      "Automated lead qualification with filters",
      "Lead state tracking and routing",
      "Instant team notifications",
      "CRM setup and integration",
      "Review request automation"
    ],
    deliveryModel: [
      "Pipeline architecture mapped to your actual team workflow",
      "Decision rules for qualification, urgency, and routing",
      "Quality checks for duplicates, spam, and out-of-scope leads"
    ],
    benefits: [
      { title: "Zero Missed Leads", desc: "Every missed call gets an instant text, keeping the prospect engaged with your business." },
      { title: "Faster Response Time", desc: "Engage leads in seconds with scripted logic that preserves a human-first experience." },
      { title: "Reduced Admin Work", desc: "Automate the back-and-forth of scheduling and basic questions." },
      { title: "More 5-Star Reviews", desc: "Automated review prompts and follow-up cadence to strengthen local trust signals." }
    ],
    caseStudy: {
      client: "Local HVAC Company",
      metric: "Lead Capture",
      challenge: "Losing 10+ jobs a month because technicians couldn't answer calls while on site.",
      solution: "Implemented missed-call text-back and automated web chat routing directly to the owner's phone with qualification logic and routing rules.",
      stats: [
        { label: "Missed Calls Saved", value: "15/mo" },
        { label: "Response Time", value: "<1 min" },
        { label: "New Bookings", value: "+22%" },
        { label: "Admin Hours", value: "-10 hrs" }
      ]
    },
    icon: Bot
  },
  'conversion-websites': {
    title: "Conversion Websites",
    subtitle: "High-Performance Sites Engineered for Booking",
    description: "Your website should behave like an acquisition system. We build fast, mobile-first sites with structured capture, clear service paths, and measurable conversion points.",
    features: [
      "Mobile-first design",
      "Service-specific landing pages",
      "Decision-led CTA paths",
      "Trust signals (reviews, licensing)",
      "Fast loading speeds",
      "Lead capture integration with CRM logic"
    ],
    deliveryModel: [
      "Conversion architecture around user intent and urgency",
      "A/B-tested micro-interactions on booking and inquiry paths",
      "Content, page speed, and schema tuned for local SEO signal"
    ],
    benefits: [
      { title: "More Booked Jobs", desc: "Designed to guide visitors straight to calling you or filling out a quote request." },
      { title: "Professional Image", desc: "Position your business as the most reliable and trusted operator in your area." },
      { title: "Mobile Optimized", desc: "Perfectly formatted for customers searching for emergency services on their phones." },
      { title: "Built to Rank", desc: "Clean code and structure that Google loves, helping your local SEO efforts." }
    ],
    caseStudy: {
      client: "Kelowna Plumbing Pros",
      metric: "Website Rebuild",
      challenge: "Old, slow website that didn't work well on mobile and had no clear way to request service.",
      solution: "Complete rebuild focused on mobile speed, clear service pages, and integrated quote forms.",
      stats: [
        { label: "Mobile Traffic", value: "75%" },
        { label: "Conversion Rate", value: "4.5%" },
        { label: "Page Speed", value: "98/100" },
        { label: "Online Quotes", value: "+150%" }
      ]
    },
    icon: Globe
  },
  'search-visibility': {
    title: "Search Visibility",
    subtitle: "Signal Dominance in Local Search",
    description: "When someone needs your services fast, your local search stack needs to answer with confidence. We optimize GBP, website structure, and reputation signals so you win discoverability.",
    features: [
      "Google Business Profile optimization",
      "Local citation building",
      "Search intent mapping by service area",
      "Review generation strategy",
      "Keyword tracking & reporting",
      "Competitor analysis"
    ],
    deliveryModel: [
      "Search map of current ranking opportunities and visibility gaps",
      "Reputation loop through structured review requests and response templates",
      "Reporting cadence aligned to lead-to-booking outcomes"
    ],
    benefits: [
      { title: "Map Pack Rankings", desc: "Get your business into the top 3 spots on Google Maps for your main services." },
      { title: "High-Intent Traffic", desc: "Attract customers who are actively searching for exactly what you do." },
      { title: "Trust & Authority", desc: "A strong local presence with consistent reviews builds immediate trust." },
      { title: "Long-Term Growth", desc: "Organic visibility compounds over time, reducing your reliance on paid ads." }
    ],
    caseStudy: {
      client: "Okanagan Roofing",
      metric: "Local SEO",
      challenge: "Invisible on Google Maps for 'roof repair' despite having great reviews.",
      solution: "Optimized GBP, built local citations, and created dedicated service area pages.",
      stats: [
        { label: "Map Views", value: "+300%" },
        { label: "Calls from Google", value: "+85%" },
        { label: "Top 3 Rankings", value: "12 terms" },
        { label: "Organic Leads", value: "+40%" }
      ]
    },
    icon: Search
  },
  'paid-lead-generation': {
    title: "Paid Lead Generation",
    subtitle: "Controlled Demand Systems for Immediate Demand",
    description: "Put your business in front of high-intent customers exactly when they need a solution, with campaign logic tied to booking quality and margin goals.",
    features: [
      "Google Local Services Ads (LSA) setup",
      "Search campaign management",
      "Negative keyword controls and intent filters",
      "Call tracking & recording",
      "Landing page optimization",
      "ROI reporting and optimization experiments"
    ],
    deliveryModel: [
      "Search intent segmentation for high-margin service requests",
      "Negative keyword governance and spend guardrails",
      "Continuous campaign experiments for cost per booked lead"
    ],
    benefits: [
      { title: "Immediate Visibility", desc: "Skip the SEO waiting game and appear at the top of search results today." },
      { title: "Pay for Leads, Not Clicks", desc: "With LSA, you only pay when a qualified customer actually contacts you." },
      { title: "Controlled Growth", desc: "Turn the lead flow up or down based on your team's capacity." },
      { title: "Measurable ROI", desc: "Track exactly how much revenue every advertising dollar generates." }
    ],
    caseStudy: {
      client: "Valley Electricians",
      metric: "Google Ads",
      challenge: "Wasting money on broad keywords and getting calls for services they didn't offer.",
      solution: "Restructured campaigns to focus only on high-margin services and implemented strict negative keywords.",
      stats: [
        { label: "Cost Per Lead", value: "-35%" },
        { label: "Lead Quality", value: "High" },
        { label: "Wasted Spend", value: "Eliminated" },
        { label: "ROI", value: "4.2x" }
      ]
    },
    icon: Target
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Heading level={2}>404: Service Not Found</Heading>
          <Button onClick={() => navigate(RoutePath.SERVICES)} className="mt-8">Return to Directory</Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Header */}
      <Section className="pt-40 pb-12 bg-white relative">
        <Button 
          variant="ghost" 
          onClick={() => navigate(RoutePath.SERVICES)} 
          className="mb-8 pl-0 text-brand-muted/60 hover:text-brand-ink"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Services
        </Button>
        
        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-ink text-white">
                <Icon className="w-6 h-6" />
            </div>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] px-3 py-1 border border-brand-ink">
              Service Protocol
            </span>
          </div>
          <Heading level="display" className="mb-8">{service.title}</Heading>
          <Text size="xl" className="text-brand-ink/80 max-w-5xl">{service.subtitle}</Text>
        </Reveal>
      </Section>

      {/* Main Content */}
      <Section fullWidth className="border-t border-brand-muted/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          
          {/* Left Column: Description, Features, Benefits */}
          <div className="lg:col-span-7 p-6 md:p-24 border-b lg:border-b-0 lg:border-r border-brand-muted/20 bg-white">
            <Reveal delay={200}>
              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                 <Activity className="text-brand-accent w-5 h-5" /> Mission Overview
              </h3>
              <Text className="mb-16" size="lg">{service.description}</Text>
              
              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                 <Target className="text-brand-accent w-5 h-5" /> What's Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {service.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 border border-brand-muted/20 p-4 hover:border-brand-ink transition-colors">
                     <div className="w-1.5 h-1.5 bg-brand-ink rounded-full"></div>
                     <span className="font-sans font-bold uppercase tracking-wide text-xs">{feature}</span>
                  </div>
                ))}
              </div>
              
              {service.benefits && (
                 <>
                   <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                      <TrendingUp className="text-brand-accent w-5 h-5" /> Key Benefits
                   </h3>
                   <div className="space-y-8 mb-12">
                      {service.benefits.map((b: any, i: number) => (
                         <div key={i} className="flex items-start gap-4">
                           <div className="mt-1">
                              <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                           </div>
                           <div>
                              <h4 className="font-sans font-bold uppercase text-lg mb-1">{b.title}</h4>
                              <p className="font-sans text-brand-muted text-sm leading-relaxed">{b.desc}</p>
                           </div>
                         </div>
                     ))}
                   </div>
                 </>
              )}

              {service.deliveryModel && (
                <>
                  <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                    <LineChart className="text-brand-accent w-5 h-5" /> Operating Model
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {service.deliveryModel.map((item: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 border border-brand-muted/20 p-4">
                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2" />
                        <span className="font-sans font-medium text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-16">
                 <Button to={RoutePath.CONTACT} variant="primary">Initialize Project</Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Case Study Protocol */}
          <div className="lg:col-span-5 bg-brand-muted/5 text-brand-ink p-6 md:p-12 relative overflow-hidden flex flex-col justify-center">
             <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
             
             {service.caseStudy && (
                 <Reveal delay={400} className="relative z-10">
                   <div className="mb-12 border-b border-brand-muted/30 pb-8">
                      <span className="font-sans text-brand-accent text-xs uppercase tracking-widest mb-2 block">Case Study Protocol</span>
                      <h3 className="text-3xl md:text-5xl font-sans font-bold uppercase leading-none mb-4">{service.caseStudy.client}</h3>
                      <span className="inline-block border border-brand-muted/40 px-3 py-1 font-sans text-xs text-brand-muted">
                         PROFILE: {service.caseStudy.metric}
                      </span>
                   </div>

                   <div className="space-y-8 mb-12">
                      <div>
                         <h4 className="font-sans text-sm font-bold uppercase text-brand-muted mb-2">The Challenge</h4>
                         <p className="text-brand-ink font-sans leading-relaxed">{service.caseStudy.challenge}</p>
                      </div>
                      <div>
                         <h4 className="font-sans text-sm font-bold uppercase text-brand-muted mb-2">The Solution</h4>
                         <p className="text-brand-ink font-sans leading-relaxed">{service.caseStudy.solution}</p>
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      {service.caseStudy.stats.map((stat: any, i: number) => (
                         <div key={i} className="bg-white border border-brand-muted/20 p-6">
                            <span className="block text-3xl md:text-4xl font-sans font-bold text-brand-ink mb-1">{stat.value}</span>
                            <span className="block text-[10px] uppercase tracking-widest text-brand-accent font-bold">{stat.label}</span>
                         </div>
                      ))}
                   </div>
                 </Reveal>
             )}

             <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none">
                <Icon className="w-96 h-96" />
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetail;
