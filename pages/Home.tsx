import React, { useState, useEffect } from 'react';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    { 
      id: 'tutt-street',
      name: "Tutt Street Chiro", 
      cat: "Search Performance", 
      tags: ["Google Ads", "Local SEO", "+60% Leads"], 
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" 
    },
    { 
      id: 'growth-arc',
      name: "Growth Arc Advisors", 
      cat: "Digital Strategy", 
      tags: ["B2B Outbound", "Identity", "Positioning"], 
      img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1600" 
    },
    { 
      id: 'storage-express',
      name: "Storage Express", 
      cat: "Operations Hub", 
      tags: ["Automation", "Custom CRM", "Web Build"], 
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1600" 
    }
  ];

  const capabilities = [
    {
      id: "01",
      title: "AI Lead Systems",
      desc: "Capture every opportunity. We build systems that instantly text back missed calls, qualify leads, and route them to your team.",
      details: ["Missed-Call Text-Back", "Automated Follow-Up", "CRM & Pipeline Setup"],
      metric: "Zero Missed Leads",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "02",
      title: "Conversion Websites",
      desc: "High-performance websites designed to turn local traffic into booked jobs. Fast, mobile-optimized, and built to rank.",
      details: ["Lead Capture Forms", "Mobile-First Design", "Service Area Pages"],
      metric: "More Booked Jobs",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "03",
      title: "Search Visibility",
      desc: "Dominate your local market. We optimize your digital presence so customers find you first when they need a pro.",
      details: ["Local SEO", "Google Business Profile", "Review Generation"],
      metric: "Top Local Ranking",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "04",
      title: "Paid Lead Generation",
      desc: "Targeted Google Ads campaigns that put your business in front of high-intent customers actively searching for your services.",
      details: ["Google Local Services", "Search Ads", "Lead Tracking"],
      metric: "Max ROI",
      img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="min-h-screen w-full relative flex flex-col justify-center pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-brand-ink text-white">
        {/* Exotic background animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
             animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
             transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
             className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-brand-accent/40 to-transparent blur-3xl"
           />
           <motion.div 
             initial={{ opacity: 0, scale: 1.2, rotate: 15 }}
             animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
             transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="absolute -bottom-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-500/30 to-transparent blur-3xl"
           />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
          <Reveal>
             <div className="flex items-center gap-3 mb-12">
                <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                <span className="font-sans text-sm font-medium tracking-tight text-white/70 uppercase tracking-widest">
                   Kelowna, BC • Web & Automation
                </span>
             </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-sans font-semibold leading-[0.95] tracking-tightest mb-12 max-w-6xl">
              Stop losing <br/>
              <span className="text-white/50">local leads.</span>
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end mt-8">
            <div className="md:col-span-6 lg:col-span-5">
              <Reveal delay={400}>
                <Text size="xl" className="mb-12 text-white/70">
                  We help local trades capture, qualify, and follow up with leads automatically. Fewer missed calls, faster response times, and more booked jobs.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button to={RoutePath.CONTACT} className="bg-white text-brand-ink hover:bg-white/90" icon>Book a Discovery Call</Button>
                  <Button to={RoutePath.SERVICES} className="bg-transparent text-white border border-white/20 hover:bg-white/10">See How It Works</Button>
                </div>
              </Reveal>
            </div>
            
            <div className="hidden md:flex md:col-span-6 lg:col-span-7 justify-end gap-16 pb-2">
               <Reveal delay={600} className="flex gap-16">
                 <div className="text-right">
                    <span className="block font-sans text-5xl font-medium tracking-tight mb-2">&lt; 5m</span>
                    <span className="font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest">Lead Response Time</span>
                 </div>
                 <div className="text-right">
                    <span className="block font-sans text-5xl font-medium tracking-tight mb-2">24/7</span>
                    <span className="font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest">Automated Follow-up</span>
                 </div>
               </Reveal>
            </div>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-40 z-10"
        >
           <ArrowDown size={20} strokeWidth={1.5} className="text-white" />
        </motion.div>
      </section>

      {/* SECTION 2: FEATURED WORK */}
      <Section className="bg-brand-muted/5 rounded-[3rem] my-12 mx-4 md:mx-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
           <div className="space-y-4">
              <span className="font-sans text-sm font-medium tracking-tight text-brand-muted">Selected Work</span>
              <Heading level={2}>Case Database</Heading>
           </div>
           <Button to={RoutePath.WORK} variant="link" icon className="hidden md:inline-flex">View Full Archive</Button>
        </div>

        <div className="grid grid-cols-1 gap-12">
           {featuredProjects.map((item, idx) => (
             <Reveal key={idx} delay={idx * 100}>
               <div 
                  className="group cursor-pointer" 
                  onClick={() => navigate(`/work/${item.id}`)}
               >
                  <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9] mb-8 bg-white">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-brand-ink mb-2 group-hover:opacity-70 transition-opacity">{item.name}</h3>
                      <p className="text-brand-muted font-sans text-base">{item.cat}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 rounded-full bg-white text-sm font-medium tracking-tight text-brand-ink border border-black/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
             </Reveal>
           ))}
        </div>
        <div className="mt-12 md:hidden">
          <Button to={RoutePath.WORK} variant="outline" className="w-full">View Full Archive</Button>
        </div>
      </Section>

      {/* SECTION 3: CAPABILITIES */}
      <Section className="bg-white">
        <div className="max-w-3xl mb-24">
          <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">Capabilities</span>
          <Heading level={2} className="mb-8">Systems built for local trades.</Heading>
          <Text size="lg">
            We build high-performance growth systems. AI automation is our main offer, supported by websites and search visibility to ensure you never miss a lead.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {capabilities.map((cap, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="group">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-sm font-medium text-brand-muted">{cap.id}</span>
                  <div className="h-px flex-grow bg-black/5"></div>
                </div>
                <h3 className="text-3xl font-sans font-medium tracking-tight text-brand-ink mb-6">{cap.title}</h3>
                <Text className="mb-8">{cap.desc}</Text>
                <ul className="space-y-3 mb-8">
                  {cap.details.map(detail => (
                    <li key={detail} className="flex items-center gap-3 text-brand-ink font-medium text-sm tracking-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SECTION 4: CTA */}
      <section className="py-32 px-6 md:px-12 bg-brand-ink text-white text-center rounded-[3rem] mx-4 md:mx-8 mb-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold tracking-tightest mb-8 leading-[1.05]">
              Ready to stop <br/>
              <span className="text-white/50">losing leads?</span>
            </h2>
            <Text size="xl" className="text-white/70 mb-12 max-w-2xl mx-auto">
              Let's discuss missed-call text-back, lead qualification, and setting up a CRM pipeline for your business.
            </Text>
            <Button to={RoutePath.CONTACT} variant="secondary" className="bg-white text-brand-ink hover:bg-white/90" icon>
              Get an Automation Plan
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
