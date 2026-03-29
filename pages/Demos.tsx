import React, { useState } from 'react';
import { PageHeader, Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { trackEvent } from '../src/analytics';
import { ArrowRight, BellRing, MessageSquareMore, Route, CheckCircle2 } from 'lucide-react';

type DemoStep = {
  heading: string;
  body: string;
  signal: string;
};

type DemoCard = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  result: string;
  steps: DemoStep[];
};

const demoCards: DemoCard[] = [
  {
    id: 'missed-call',
    badge: 'Demo 01',
    title: 'Missed-call text-back',
    summary: 'Show how a missed inbound call becomes an immediate reply, a qualified record, and a clear next action.',
    icon: BellRing,
    result: 'Lead gets a response in under 1 minute.',
    steps: [
      {
        heading: 'Missed call detected',
        body: 'The system catches a missed inbound call, tags the source, and checks time-of-day routing rules before anything is sent.',
        signal: 'Trigger: inbound missed call',
      },
      {
        heading: 'Instant text reply',
        body: 'A short reply confirms receipt, offers the next step, and avoids making promises the shop cannot keep.',
        signal: 'Output: trust-preserving first response',
      },
      {
        heading: 'Team handoff',
        body: 'The lead is pushed into the pipeline with urgency, call context, and an assigned owner so nobody has to rebuild context manually.',
        signal: 'Outcome: clear owner and next task',
      },
    ],
  },
  {
    id: 'web-routing',
    badge: 'Demo 02',
    title: 'Web lead routing',
    summary: 'Show how a website inquiry moves from form submission into routing logic, urgency tagging, and follow-up.',
    icon: Route,
    result: 'The right person gets the right lead without inbox chaos.',
    steps: [
      {
        heading: 'Form captured',
        body: 'A clean form captures only first-contact data, reducing friction and improving quote-start rate on mobile.',
        signal: 'Trigger: short form submit',
      },
      {
        heading: 'Routing logic applied',
        body: 'Trade type, urgency, and service area determine where the lead goes and whether it becomes a same-day priority.',
        signal: 'Logic: service area + urgency + job type',
      },
      {
        heading: 'Follow-up sequence queued',
        body: 'If the lead is not handled quickly, the system schedules reminders so demand does not disappear after the first touch.',
        signal: 'Outcome: no silent lead decay',
      },
    ],
  },
  {
    id: 'qualification',
    badge: 'Demo 03',
    title: 'Qualification to booking',
    summary: 'Show how a lead is filtered, clarified, and moved toward a booked slot without adding admin drag.',
    icon: MessageSquareMore,
    result: 'Low-intent leads get filtered before they waste technician time.',
    steps: [
      {
        heading: 'Basic qualification',
        body: 'The system asks for the minimum details needed to tell whether the request is a fit, urgent, or out of scope.',
        signal: 'Check: fit before booking',
      },
      {
        heading: 'Booking path selected',
        body: 'Qualified leads are pointed to the correct next step: callback, calendar slot, or manual review if the job needs context.',
        signal: 'Output: controlled booking path',
      },
      {
        heading: 'Operational visibility',
        body: 'Every status change is visible so the shop can see what is booked, pending, ignored, or escalated.',
        signal: 'Outcome: fewer dropped conversations',
      },
    ],
  },
];

const Demos: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState<Record<string, number>>(
    Object.fromEntries(demoCards.map((demo) => [demo.id, 0])),
  );

  const advanceStep = (demoId: string, stepsLength: number) => {
    setActiveSteps((current) => ({
      ...current,
      [demoId]: (current[demoId] + 1) % stepsLength,
    }));
    trackEvent('demo_step_advanced', { demo_id: demoId });
  };

  return (
    <>
      <PageHeader
        badge="Live Demos"
        title={
          <>
            See the <br />
            <span className="text-white/50">lead system</span>
          </>
        }
        subtitle="Three interactive walkthroughs that show how missed demand becomes booked work without chaos, lag, or blind automation."
      />

      <Section className="bg-white">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <Heading level={2} className="mb-6">Built to answer the first buyer question.</Heading>
              <Text size="lg">
                What does this actually do inside a real shop? These demos show the response path, routing logic, and booking control layer in plain language.
              </Text>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-brand-muted/5 border border-black/5 rounded-3xl p-8">
                <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-3">Pilot starting price</span>
                <span className="block text-5xl font-sans font-semibold tracking-tight text-brand-ink mb-4">$1,500</span>
                <Text className="max-w-none">
                  Fast setup for the response layer first. Website, search, and paid demand expansion come after the system is proven.
                </Text>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-10">
          {demoCards.map((demo, index) => {
            const activeStep = demo.steps[activeSteps[demo.id]];
            const Icon = demo.icon;

            return (
              <Reveal key={demo.id} delay={index * 100}>
                <section className="rounded-[2rem] border border-black/5 bg-brand-muted/5 p-8 md:p-12">
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                    <div className="xl:col-span-4">
                      <span className="inline-block text-[10px] uppercase tracking-widest border border-black/10 rounded-full px-3 py-1.5 mb-6">
                        {demo.badge}
                      </span>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ink text-white">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <Heading level={3}>{demo.title}</Heading>
                      </div>
                      <Text className="mb-8 max-w-none">{demo.summary}</Text>
                      <div className="rounded-3xl bg-white border border-black/5 p-6">
                        <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-3">Expected result</span>
                        <p className="font-sans text-lg font-medium text-brand-ink">{demo.result}</p>
                      </div>
                    </div>

                    <div className="xl:col-span-5">
                      <div className="rounded-3xl bg-brand-ink text-white p-8 min-h-full">
                        <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-3">Current step</span>
                        <h3 className="text-3xl font-sans font-medium tracking-tight mb-4">{activeStep.heading}</h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-8">{activeStep.body}</p>
                        <div className="border border-white/10 rounded-3xl p-5 bg-white/5">
                          <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">System signal</span>
                          <p className="font-sans font-medium">{activeStep.signal}</p>
                        </div>
                        <div className="mt-8">
                          <Button
                            onClick={() => advanceStep(demo.id, demo.steps.length)}
                            className="bg-white text-brand-ink hover:bg-white/90"
                            icon
                          >
                            Next step
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-3">
                      <div className="space-y-4">
                        {demo.steps.map((step, stepIndex) => {
                          const isActive = stepIndex === activeSteps[demo.id];

                          return (
                            <div
                              key={`${demo.id}-${step.heading}`}
                              className={`rounded-3xl border p-5 transition-colors ${
                                isActive
                                  ? 'border-brand-ink bg-white'
                                  : 'border-black/5 bg-white/60'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className={`w-5 h-5 mt-0.5 ${isActive ? 'text-brand-accent' : 'text-black/20'}`} />
                                <div>
                                  <p className="font-sans text-sm font-semibold text-brand-ink">{step.heading}</p>
                                  <p className="mt-2 text-sm text-brand-muted">{step.signal}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-brand-ink text-white rounded-[3rem] my-12 mx-4 md:mx-8">
        <Reveal>
          <div className="max-w-4xl">
            <span className="block text-[10px] uppercase tracking-widest text-white/50 mb-4">Next step</span>
            <Heading level={2} className="mb-6 text-white">If the demos map to your actual lead flow, book the system call.</Heading>
            <Text size="lg" className="text-white/70 mb-10 max-w-2xl">
              We use the call to map your intake path, identify the first control point, and decide whether a $1,500 pilot is the right first build.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/okvalley/30min"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('cal_click', { source: 'demos_cta' })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-ink transition-all duration-500 hover:scale-[1.02] hover:bg-white/90"
              >
                Book the system call
              </a>
              <Button to={RoutePath.PRICING} className="bg-transparent text-white border border-white/20 hover:bg-white/10">
                Review pilot pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Demos;
