import React from 'react';
import { Section, Heading, Text, Button, AccordionItem, Reveal, PageHeader } from '../components/Common';
import { RoutePath } from '../types';
import { Check } from 'lucide-react';
import { trackEvent } from '../src/analytics';

const Pricing: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Investment Models"
        title={
          <>
            Sprint-first <br />
            <span className="text-white/50">pricing</span>
          </>
        }
        subtitle="Start with one workflow. Prove the custom operator works. Expand only after the first build earns its place."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">Primary offer</span>
            <Heading level={2} className="mb-8">The fastest path is a scoped workflow sprint.</Heading>
            <Text size="lg">
              We do not start with vague AI strategy retainers. The first commercial step is one custom system around one painful workflow with a clear operating outcome.
            </Text>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div className="p-10 md:p-12 bg-brand-ink text-white rounded-[2rem] relative overflow-hidden h-full">
                  <div className="absolute inset-0 opacity-10"></div>
                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_12px_#FF4F00]"></div>
                  </div>

                  <div className="relative z-10">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-accent px-3 py-1.5 rounded-full inline-block mb-8 text-brand-accent bg-brand-accent/10">
                      Agency AI Workflow Sprint
                    </span>
                    <div className="mb-6">
                      <span className="text-6xl font-sans font-bold tracking-tighter text-white">$3,500</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-white/50 mt-4">Starting price</span>
                    </div>
                    <p className="font-sans text-white/70 leading-relaxed mb-8">
                      For agencies that need custom execution capacity beyond reskinned CRM automations.
                    </p>
                    <ul className="space-y-5">
                      {[
                        'One high-friction internal workflow',
                        'Browser-use or cross-tool operator logic',
                        'Reporting, QA, research, or delivery ops',
                        'White-label friendly implementation',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white">
                          <Check className="w-5 h-5 text-brand-accent shrink-0" />
                          <span className="font-sans text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="p-10 md:p-12 bg-brand-muted/5 text-brand-ink rounded-[2rem] relative overflow-hidden h-full border border-black/5">
                  <div className="relative z-10">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-8 text-brand-ink">
                      Business Workflow Build
                    </span>
                    <div className="mb-6">
                      <span className="text-6xl font-sans font-bold tracking-tighter text-brand-ink">$1,500</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">Starting price</span>
                    </div>
                    <p className="font-sans text-brand-muted leading-relaxed mb-8">
                      For businesses that need intake, routing, execution, or follow-through systems more advanced than simple trigger automations.
                    </p>
                    <ul className="space-y-5">
                      {[
                        'Lead handling or workflow automation',
                        'Cross-tool logic and handoff rules',
                        'Browser-based execution where needed',
                        'Optional support and expansion',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-brand-ink">
                          <Check className="w-5 h-5 text-brand-accent shrink-0" />
                          <span className="font-sans text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Scope the workflow',
              body: 'Review the exact workflow, tools, edge cases, and where current automation fails in practice.',
            },
            {
              step: '02',
              title: 'Ship the sprint',
              body: 'Build the first custom operator with explicit logic, browser actions if needed, and clean team handoff.',
            },
            {
              step: '03',
              title: 'Expand only after proof',
              body: 'Use the first system to decide whether deeper automation, internal tools, or adjacent workflows should come next.',
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="rounded-3xl border border-black/5 bg-brand-muted/5 p-8 h-full">
                <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Step {item.step}</span>
                <h3 className="text-2xl font-sans font-medium tracking-tight text-brand-ink mb-4">{item.title}</h3>
                <Text className="max-w-none">{item.body}</Text>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-muted/5 py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">After the first sprint</span>
              <Heading level={2} className="mb-6 uppercase tracking-tighter">Expansion paths</Heading>
              <Text className="mb-10 text-brand-muted">Only add the next layer once the first operator has already proven utility inside the business.</Text>
            </Reveal>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="bg-white border border-brand-muted/20 p-8 rounded-3xl h-full">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-8 text-brand-ink">
                  Agency expansion
                </span>
                <div className="mb-6">
                  <span className="text-5xl font-sans font-bold tracking-tighter text-brand-ink">Custom</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">After initial sprint</span>
                </div>
                <p className="font-sans text-brand-muted leading-relaxed mb-8">
                  Add more operators for reporting, QA, onboarding, research, client communication, and internal delivery systems.
                </p>
                <Button to={RoutePath.DEMOS} variant="outline" className="w-full justify-center">
                  See how the system works
                </Button>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-brand-muted/20 p-8 rounded-3xl h-full">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-8 text-brand-ink">
                  Business expansion
                </span>
                <div className="mb-6">
                  <span className="text-5xl font-sans font-bold tracking-tighter text-brand-ink">Custom</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">After workflow validation</span>
                </div>
                <p className="font-sans text-brand-muted leading-relaxed mb-8">
                  Add adjacent automation, browser-based task execution, or broader operational systems once the first workflow is stable.
                </p>
                <Button to={RoutePath.CONTACT} variant="outline" className="w-full justify-center">
                  Ask about expansion
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">FAQ</span>
              <Heading level={2} className="mb-6 uppercase tracking-tighter">Buying clarity</Heading>
              <Text className="mb-10 text-brand-muted">Answer the commercial questions before the call, not after.</Text>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={200}>
              <div className="bg-brand-muted/5 border border-brand-muted/20 p-8 md:p-12 rounded-3xl shadow-sm">
                <AccordionItem title="What happens during the first sprint?">
                  We map the workflow, isolate the edge cases, build the first operator, and review how it behaves before proposing more scope.
                </AccordionItem>
                <AccordionItem title="How fast can the first sprint launch?">
                  In straightforward cases, one to three weeks once access, workflow rules, and the operating owner are clear.
                </AccordionItem>
                <AccordionItem title="What if the workflow spans multiple tools?">
                  That's usually why we are involved. The point is to design a system that can operate across the actual stack instead of pretending one platform owns the whole workflow.
                </AccordionItem>
                <AccordionItem title="Is monthly support required?">
                  No. Ongoing support is optional when you want maintenance, new operators, prompt tuning, QA, or system expansion after launch.
                </AccordionItem>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-ink text-center py-36 rounded-[3rem] mx-4 md:mx-8 mb-12">
        <Reveal>
          <Heading level={2} className="mb-6 text-white uppercase tracking-tighter">Start with the workflow.</Heading>
          <Text className="text-white/70 mx-auto mb-12 max-w-2xl">
            The fastest qualification path is simple: review the demos, identify the workflow that keeps breaking, then book the call if a custom operator is the right answer.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={RoutePath.DEMOS}
              variant="secondary"
              className="bg-white text-brand-ink hover:bg-white/90"
              onClick={() => trackEvent('pricing_cta_click', { destination: 'demos' })}
            >
              See Workflow Demos
            </Button>
            <a
              href="https://cal.com/okvalley/30min"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('cal_click', { source: 'pricing_bottom_cta' })}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-500 hover:bg-white/10"
            >
              Book the workflow call
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Pricing;
