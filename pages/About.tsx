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
        subtitle="We build custom AI operators for agencies and businesses when template automation stops being compelling."
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
                Founded in Kelowna, BC, OK Valley started from a simple observation: most AI offers in the market are just thin wrappers around simple automations.
              </Text>
            </Reveal>
            <Reveal delay={200}>
              <Text size="lg" className="text-brand-muted">
                They look impressive in a sales deck, but they fall apart when the workflow needs live logins, branching decisions, browser actions, exception handling, or cross-tool coordination.
              </Text>
            </Reveal>
            <Reveal delay={300}>
              <Text size="lg" className="text-brand-muted">
                That gap shaped the company. We shifted away from generic marketing packaging and toward custom AI execution systems that agencies and operating teams can actually use in real work.
              </Text>
            </Reveal>
            <Reveal delay={400}>
              <Text size="lg" className="text-brand-muted">
                Today the work runs across two lanes: white-label systems for agencies and custom workflow agents for businesses. In both cases, the standard is the same: real implementation, explicit logic, and systems that survive messy operating conditions.
              </Text>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-20">
          <Reveal>
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">Our Work</span>
            <Heading level={1} className="uppercase tracking-tighter">Built for Real Workflows</Heading>
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
            { title: "Workflow First", desc: "We start with the exact task and failure points, not a preferred tool or a canned package." },
            { title: "Operator Logic", desc: "Every build has explicit branching rules, browser actions, fallbacks, and clean handoff points." },
            { title: "Software Discipline", desc: "Custom systems need QA, observability, and implementation rigor, not just marketing copy." },
            { title: "Agency Utility", desc: "For agencies, the goal is more delivery capacity without hiring another operator for every repetitive workflow." },
            { title: "Business Utility", desc: "For businesses, the goal is operational leverage where intake, execution, and follow-through need more than simple automation." },
            { title: "Commercial Clarity", desc: "We package the first engagement as a scoped sprint so you can prove one workflow before expanding." }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100} className="group">
              <span className="block font-sans text-6xl font-bold text-brand-accent mb-4 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
              <h3 className="text-xl font-sans font-bold uppercase mb-4 text-brand-ink">{item.title}</h3>
              <p className="text-brand-muted font-sans max-w-sm">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Section className="text-center py-48 bg-white border-t border-brand-muted/20">
        <Reveal>
          <Heading level={2} className="mb-6 uppercase">Ready to replace template automation?</Heading>
          <Text className="mx-auto mb-12 max-w-xl text-brand-muted">Book a call if you need a custom AI system for a workflow your current stack cannot actually handle.</Text>
          <Button to={RoutePath.CONTACT} variant="primary">Contact Us</Button>
        </Reveal>
      </Section>
    </>
  );
};

export default About;
