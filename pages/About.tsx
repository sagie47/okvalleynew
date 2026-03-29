import React from 'react';
import { Section, Heading, Text, Button, ImageFrame, Reveal, PageHeader } from '../components/Common';
import { RoutePath } from '../types';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", label: "STRUCTURE_01" },
  { src: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", label: "LOGIC_V2" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", label: "INTERACT_03" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200", label: "FLOW_STATE" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", label: "NODE_X" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", label: "CODE_BASE" }
];

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title={<>About <br/>OK Valley Web</>}
        subtitle="We build AI lead systems and growth software for local service operators."
      />

      <Section className="bg-brand-muted/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <Heading level={4}>Our Story</Heading>
            </Reveal>
          </div>
          <div className="md:col-span-8 space-y-8">
            <Reveal delay={100}>
              <Text size="lg" className="text-brand-muted">
                Founded in Kelowna, BC, we build growth systems for local service businesses in trades, from HVAC and plumbing to roofing and landscaping.
              </Text>
            </Reveal>
            <Reveal delay={200}>
              <Text size="lg" className="text-brand-muted">
                We realized that traffic alone wasn't enough. Our clients were losing jobs because they could not answer the phone while on site. That changed us, and we shifted from campaign-only work to automated system design.
              </Text>
            </Reveal>
            <Reveal delay={300}>
              <Text size="lg" className="text-brand-muted">
                Today we combine marketing strategy with software logic: websites that convert, SEO that compounds, and AI automation that turns intent into assigned next actions.
              </Text>
            </Reveal>
            <Reveal delay={400}>
              <Text size="lg" className="text-brand-muted">
                We position every offer as a system with quality checks, instrumentation, and repeatable optimization loops for sustainable revenue growth.
              </Text>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Operational Reality Gallery */}
      <Section className="bg-white">
        <div className="mb-20">
          <Reveal>
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">Our Work</span>
            <Heading level={1} className="uppercase tracking-tighter">Built for Trades</Heading>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 100}>
              <ImageFrame 
                src={img.src} 
                label={img.label} 
                className={`${i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'} shadow-lg`} 
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <div className="bg-brand-muted/5 text-brand-ink py-24 px-6 md:px-12 relative overflow-hidden">
        <Reveal>
          <Heading level={2} className="mb-16 relative z-10 uppercase">Our Method</Heading>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-muted/20 pt-12 relative z-10">
          {[
            { title: "Systems Thinking", desc: "We design growth as a state machine: capture, qualify, assign, follow, and report." },
            { title: "Software Discipline", desc: "Clean code, reliable routing, and explicit logic for how leads move through your pipeline." },
            { title: "Measurement-Led Growth", desc: "Build, test, evaluate, and improve across channels every cycle." },
            { title: "AI Operations", desc: "Agentic workflows handle repetitive responses while your team focuses on delivery and relationships." },
            { title: "Trust + Clarity", desc: "Transparent updates, clear milestones, and a clear accountability chain for every campaign." },
            { title: "Commercial Expansion", desc: "Every project is designed to compound into predictable lead quality and higher booking confidence." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100} className="group">
              <span className="block font-sans text-6xl font-bold text-brand-accent mb-4 opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <h3 className="text-xl font-sans font-bold uppercase mb-4 text-brand-ink">{item.title}</h3>
              <p className="text-brand-muted font-sans max-w-sm">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
      
      <Section className="text-center py-48 bg-white border-t border-brand-muted/20">
        <Reveal>
          <Heading level={2} className="mb-6 uppercase">Ready to grow your business?</Heading>
          <Text className="mx-auto mb-12 max-w-xl text-brand-muted">Let's design your lead system architecture for faster response, better qualification, and more reliable growth.</Text>
          <Button to={RoutePath.CONTACT} variant="primary">Contact Us</Button>
        </Reveal>
      </Section>
    </>
  );
};

export default About;
