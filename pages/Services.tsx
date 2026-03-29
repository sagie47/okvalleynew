import React from 'react';
import { Section, Heading, Text, Button, Reveal, AccordionItem, PageHeader } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowRight, Code, Search, Layers, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'agency-ai-operators',
      num: '01',
      title: 'Agency AI Operators',
      desc: 'Custom operators for agencies that need browser-based execution, reporting workflows, QA logic, and internal delivery systems beyond template automation.',
      tags: ['Browser Use', 'Client Reporting', 'White-Label Ops'],
      price: 'Sprint Offer',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'agency-workflow-sprints',
      num: '02',
      title: 'Agency Workflow Sprints',
      desc: 'Productized builds for one painful internal workflow at a time: scoped, shipped fast, and designed to replace recurring manual ops.',
      tags: ['2-Week Build', 'Internal Tools', 'Fulfillment Ops'],
      price: 'Project Based',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'business-workflow-agents',
      num: '03',
      title: 'Business Workflow Agents',
      desc: 'Custom AI systems for businesses that need lead handling, browser-driven execution, intake automation, and follow-through that simple trigger stacks cannot support.',
      tags: ['Lead Ops', 'Cross-Tool Logic', 'Handoff Rules'],
      price: 'Sprint Offer',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'business-automation-systems',
      num: '04',
      title: 'Business Automation Systems',
      desc: 'Longer-scope builds for businesses that need multiple workflows connected into one operating layer with observability, routing, and controlled automation.',
      tags: ['Ops Layer', 'Workflow Control', 'System Design'],
      price: 'Custom Scope',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const process = [
    { icon: Search, title: "Map", desc: "Inspect the real workflow, tool stack, edge cases, and where the current automation breaks." },
    { icon: Layers, title: "Architect", desc: "Design the operator logic, browser actions, fallbacks, and handoff rules before implementation." },
    { icon: Code, title: "Implement", desc: "Build the system in a scoped sprint with testing, guardrails, and production-ready control points." },
    { icon: Zap, title: "Expand", desc: "Add adjacent workflows only after the first system proves it can handle real operating conditions." }
  ];

  return (
    <>
      <PageHeader
        badge="Service Directory"
        title={<>Systems for <br/><span className="text-white/50">Agencies and Operators</span></>}
        subtitle="Two lanes, one standard: custom AI systems for workflows that break template automation."
      />

      <Section className="bg-brand-ink text-white py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {process.map((step, i) => (
              <div key={i} className="p-8 group hover:bg-white/5 transition-colors duration-500 cursor-default rounded-3xl border border-white/10">
                <div className="flex justify-between items-start mb-8">
                  <step.icon className="w-6 h-6 text-brand-accent opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  <span className="font-sans text-sm font-medium opacity-30 tracking-tight">0{i + 1}</span>
                </div>
                <h3 className="font-sans text-xl font-medium mb-3 tracking-tight">{step.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="w-full border-t border-brand-ink">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => navigate(`/services/${service.id}`)}
            className="group relative border-b border-brand-ink hover:bg-brand-ink hover:text-white transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 hidden md:block mix-blend-difference">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20">
              <div className="md:col-span-1 font-sans font-bold uppercase tracking-widest text-xs opacity-50 mb-4 md:mb-0">
                /{service.num}
              </div>

              <div className="md:col-span-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium uppercase leading-none group-hover:translate-x-4 transition-transform duration-300 mb-4">
                  {service.title}
                </h2>
                <p className="font-sans text-brand-muted group-hover:text-white max-w-md leading-relaxed transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-wrap content-center gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="border border-brand-ink group-hover:border-white px-2 py-1 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="md:col-span-2 flex flex-col items-end justify-center gap-4">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-white transition-colors duration-300">{service.price}</span>
                <ArrowRight className="w-8 h-8 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section className="bg-brand-muted/5 py-32 md:py-48 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-4 block">Knowledge Base</span>
              <Heading level={2} className="mb-6 tracking-tight">System <br/>FAQ</Heading>
              <Text className="mb-10 text-brand-muted">Common questions about custom operators, workflow sprints, and where browser-based systems fit.</Text>
              <Button to={RoutePath.DEMOS} variant="outline">See Workflow Demos</Button>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={200}>
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-ink/5">
                <AccordionItem title="What is an AI lead system?">
                  It's one example of a workflow operator. The larger point is that we build systems that can route, qualify, act inside software, and hand work off cleanly when no-code templates stop being enough.
                </AccordionItem>
                <AccordionItem title="Who is this for?">
                  Primarily founder-led agencies that need white-label AI execution capacity, plus businesses with operational workflows too complex for Zapier, GoHighLevel, or canned CRM automations.
                </AccordionItem>
                <AccordionItem title="How long does a sprint take?">
                  Most first-sprint builds take one to three weeks depending on the workflow, tool access, and how many edge cases need to be covered.
                </AccordionItem>
                <AccordionItem title="Why not just use GoHighLevel or a template stack?">
                  Those tools are fine for basic happy-path automations. They usually break when the workflow needs live navigation, branching logic, exception handling, or action across multiple tools.
                </AccordionItem>
                <AccordionItem title="Do you offer ongoing support?">
                  Yes. We can stay on for operator maintenance, new workflow builds, QA, and ongoing system expansion after the first sprint ships.
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
