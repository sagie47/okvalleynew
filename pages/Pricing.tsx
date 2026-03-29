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
            Pilot-first <br />
            <span className="text-white/50">pricing</span>
          </>
        }
        subtitle="Start with the response layer first. Expand into websites, search, or paid demand only after the system proves itself."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">Primary offer</span>
            <Heading level={2} className="mb-8">The fastest path to revenue is the pilot.</Heading>
            <Text size="lg">
              We do not start with a giant build unless the response path already works. The first commercial step is the AI lead system pilot.
            </Text>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <div className="p-10 md:p-12 bg-brand-ink text-white rounded-[2rem] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"></div>
                <div className="absolute top-0 right-0 p-8">
                  <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_12px_#FF4F00]"></div>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-accent px-3 py-1.5 rounded-full inline-block mb-8 text-brand-accent bg-brand-accent/10">
                      AI Lead System Pilot
                    </span>
                    <div className="mb-6">
                      <span className="text-6xl font-sans font-bold tracking-tighter text-white">$1,500</span>
                      <span className="block font-sans text-[10px] uppercase tracking-widest text-white/50 mt-4">Starting price</span>
                    </div>
                    <p className="font-sans text-white/70 leading-relaxed">
                      Stop losing high-intent demand. We install the response architecture, then measure whether it should become your long-term operating layer.
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-5">
                      {[
                        'Missed-call text-back',
                        'Lead routing logic',
                        'Basic qualification flow',
                        'CRM or pipeline handoff',
                        'Follow-up reminders',
                        'Optional monthly support',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-white">
                          <Check className="w-5 h-5 text-brand-accent shrink-0" />
                          <span className="font-sans text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'System call',
              body: 'Review your current response path, where leads leak, and whether a pilot fits the business.',
            },
            {
              step: '02',
              title: 'Pilot build',
              body: 'Install the first control point without forcing a full rebuild or changing the entire stack on day one.',
            },
            {
              step: '03',
              title: 'Expansion decision',
              body: 'Use the pilot data to decide whether site, search, or paid demand should be the next investment.',
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
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">After the pilot</span>
              <Heading level={2} className="mb-6 uppercase tracking-tighter">Expansion paths</Heading>
              <Text className="mb-10 text-brand-muted">Only add the next layer once the response engine is in place and worth scaling.</Text>
            </Reveal>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="bg-white border border-brand-muted/20 p-8 rounded-3xl h-full">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-8 text-brand-ink">
                  Growth website
                </span>
                <div className="mb-6">
                  <span className="text-5xl font-sans font-bold tracking-tighter text-brand-ink">$3,800</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">Or $175/mo</span>
                </div>
                <p className="font-sans text-brand-muted leading-relaxed mb-8">
                  Rebuild the site around the conversion logic that the pilot already validated.
                </p>
                <Button to={RoutePath.DEMOS} variant="outline" className="w-full justify-center">
                  See how the system works
                </Button>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="bg-white border border-brand-muted/20 p-8 rounded-3xl h-full">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-8 text-brand-ink">
                  Search or paid demand
                </span>
                <div className="mb-6">
                  <span className="text-5xl font-sans font-bold tracking-tighter text-brand-ink">Custom</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">After pilot validation</span>
                </div>
                <p className="font-sans text-brand-muted leading-relaxed mb-8">
                  Add search visibility or paid demand only after the business can respond to increased volume cleanly.
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
                <AccordionItem title="What happens during the pilot?">
                  We map your current intake path, install the first response layer, route leads into a controlled handoff, and review early conversion signals with you.
                </AccordionItem>
                <AccordionItem title="How fast can the pilot launch?">
                  In straightforward setups, the pilot can launch in one to two weeks once inputs, access, and routing rules are clear.
                </AccordionItem>
                <AccordionItem title="What if I need a website first?">
                  If the real blocker is site credibility or form friction, we will tell you directly. The point is to start with the shortest path to revenue, not force one package.
                </AccordionItem>
                <AccordionItem title="Is monthly support required?">
                  No. Monthly support is optional when you want ongoing optimization, rule changes, or reporting support after launch.
                </AccordionItem>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-ink text-center py-36 rounded-[3rem] mx-4 md:mx-8 mb-12">
        <Reveal>
          <Heading level={2} className="mb-6 text-white uppercase tracking-tighter">Start with the demos.</Heading>
          <Text className="text-white/70 mx-auto mb-12 max-w-2xl">
            The fastest qualification path is simple: watch the system, review the pilot, then book the call if it maps to your actual business.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={RoutePath.DEMOS}
              variant="secondary"
              className="bg-white text-brand-ink hover:bg-white/90"
              onClick={() => trackEvent('pricing_cta_click', { destination: 'demos' })}
            >
              See Live Demos
            </Button>
            <a
              href="https://cal.com/okvalley/30min"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('cal_click', { source: 'pricing_bottom_cta' })}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all duration-500 hover:bg-white/10"
            >
              Book the system call
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Pricing;
