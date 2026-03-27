import React from 'react';
import { Section, Heading, Text, Button, Reveal, AccordionItem, PageHeader } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowRight, Code, Search, Layers, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'ai-lead-systems',
      num: '01',
      title: 'AI Lead Systems',
      desc: 'Capture every opportunity. We build systems that instantly text back missed calls, qualify leads, and route them to your team.',
      tags: ['Missed-Call Text-Back', 'Automated Follow-Up', 'CRM Setup'],
      price: 'Pilot Offer',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'conversion-websites',
      num: '02',
      title: 'Conversion Websites',
      desc: 'High-performance websites designed to turn local traffic into booked jobs. Fast, mobile-optimized, and built to rank.',
      tags: ['Lead Capture', 'Mobile-First', 'Service Pages'],
      price: 'Project Based',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'search-visibility',
      num: '03',
      title: 'Search Visibility',
      desc: 'Dominate your local market. We optimize your digital presence so customers find you first when they need a pro.',
      tags: ['Local SEO', 'Google Business', 'Reviews'],
      price: 'Retainer',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'paid-lead-generation',
      num: '04',
      title: 'Paid Lead Gen',
      desc: 'Targeted Google Ads campaigns that put your business in front of high-intent customers actively searching for your services.',
      tags: ['Local Services Ads', 'Search Ads', 'Tracking'],
      price: 'Retainer',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const process = [
    { icon: Search, title: "Audit", desc: "Deep dive into your current metrics and stack." },
    { icon: Layers, title: "Architect", desc: "Blueprinting the solution for scalability." },
    { icon: Code, title: "Execute", desc: "Agile development sprints with weekly comms." },
    { icon: Zap, title: "Scale", desc: "Launch, measure, and iterate for growth." }
  ];

  return (
    <>
      {/* HERO */}
      <PageHeader 
        badge="Service Directory"
        title={<>Systems for <br/><span className="text-white/50">Local Trades</span></>}
        subtitle="OK Valley Web builds systems that help local service businesses respond faster, reduce admin work, and convert more leads."
      />

      {/* PROCESS STRIP */}
      <Section className="bg-brand-ink text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {process.map((step, i) => (
                 <div key={i} className="p-8 group hover:bg-white/5 transition-colors duration-500 cursor-default rounded-3xl border border-white/10">
                    <div className="flex justify-between items-start mb-8">
                       <step.icon className="w-6 h-6 text-brand-accent opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                       <span className="font-sans text-sm font-medium opacity-30 tracking-tight">0{i+1}</span>
                    </div>
                    <h3 className="font-sans text-xl font-medium mb-3 tracking-tight">{step.title}</h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">{step.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </Section>

      {/* SERVICE INDEX */}
      <div className="w-full border-t border-brand-ink">
        {services.map((service, index) => (
          <div 
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className="group relative border-b border-brand-ink hover:bg-brand-ink hover:text-white transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 hidden md:block mix-blend-difference">
               <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20">
               {/* Number */}
               <div className="md:col-span-1 font-sans font-bold uppercase tracking-widest text-xs opacity-50 mb-4 md:mb-0">
                  /{service.num}
               </div>
               
               {/* Main Info */}
               <div className="md:col-span-5">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium uppercase leading-none group-hover:translate-x-4 transition-transform duration-300 mb-4">
                     {service.title}
                  </h2>
                  <p className="font-sans text-brand-muted group-hover:text-white max-w-md leading-relaxed transition-colors duration-300">
                     {service.desc}
                  </p>
               </div>

               {/* Tech/Tags */}
               <div className="md:col-span-4 flex flex-wrap content-center gap-2">
                  {service.tags.map(tag => (
                     <span key={tag} className="border border-brand-ink group-hover:border-white px-2 py-1 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                        {tag}
                     </span>
                  ))}
               </div>

               {/* Action */}
               <div className="md:col-span-2 flex flex-col items-end justify-center gap-4">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-white transition-colors duration-300">{service.price}</span>
                  <ArrowRight className="w-8 h-8 group-hover:-rotate-45 transition-transform duration-300" />
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ SECTION */}
      <Section className="bg-brand-muted/5 py-32 md:py-48 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-4">
             <Reveal>
               <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-4 block">Knowledge Base</span>
               <Heading level={2} className="mb-6 tracking-tight">System <br/>FAQ</Heading>
               <Text className="mb-10 text-brand-muted">Common queries regarding our automation setups and websites.</Text>
               <Button to={RoutePath.CONTACT} variant="outline">Ask a Question</Button>
             </Reveal>
          </div>
          <div className="md:col-span-8">
             <Reveal delay={200}>
               <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-ink/5">
                   <AccordionItem title="What is an AI Lead System?">
                      It's a setup that automatically texts back missed calls, captures leads from your website, qualifies them, and notifies you instantly. It stops leads from going to competitors when you're busy on a job.
                   </AccordionItem>
                   <AccordionItem title="How much does a website cost?">
                      Our conversion-focused websites start at $3,800. We also offer a $175/mo option with $0 down for businesses looking for a lower upfront cost.
                   </AccordionItem>
                   <AccordionItem title="How long does it take to set up?">
                      AI Lead Systems can be deployed in 1-2 weeks. Custom websites typically take 4-6 weeks to design, build, and launch.
                   </AccordionItem>
                   <AccordionItem title="Do you offer ongoing support?">
                      Yes. We offer monthly optimization and support plans for our AI systems, as well as unlimited edits and maintenance for our website clients.
                   </AccordionItem>
               </div>
             </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Services;
