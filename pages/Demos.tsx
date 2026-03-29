import React, { useState } from 'react';
import { PageHeader, Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { trackEvent } from '../src/analytics';
import { MonitorCog, LineChart, Workflow, CheckCircle2 } from 'lucide-react';

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
    id: 'browser-use-execution',
    badge: 'Demo 01',
    title: 'Browser-use execution operator',
    summary: 'Show how a custom operator works across live software, branching logic, and exception handling instead of stopping at a canned webhook chain.',
    icon: MonitorCog,
    result: 'Complex workflow steps get executed in the same tools your team already uses.',
    steps: [
      {
        heading: 'Context collected',
        body: 'The operator starts with the right account, task type, workflow rules, and guardrails instead of guessing from a generic prompt.',
        signal: 'Input: account context plus workflow instructions',
      },
      {
        heading: 'Software navigation',
        body: 'It logs into the required tools, moves through the actual interface, and handles the work where the system already lives.',
        signal: 'Action: browser-use across real software',
      },
      {
        heading: 'Exception path handled',
        body: 'If the workflow branches or something unexpected appears, the operator follows the fallback logic instead of silently failing.',
        signal: 'Outcome: resilient execution beyond the happy path',
      },
    ],
  },
  {
    id: 'agency-reporting',
    badge: 'Demo 02',
    title: 'Agency reporting flow',
    summary: 'Show how an agency can turn scattered account data and manual recap work into a repeatable reporting workflow with operator logic.',
    icon: LineChart,
    result: 'Account managers stop rebuilding the same report every week by hand.',
    steps: [
      {
        heading: 'Source data gathered',
        body: 'The operator pulls performance context from the required tools, keeping channel-level details tied to the right client.',
        signal: 'Trigger: scheduled reporting window',
      },
      {
        heading: 'Narrative generated',
        body: 'Results are translated into a usable recap with movement, anomalies, and next actions instead of raw screenshots and guesswork.',
        signal: 'Logic: metrics plus interpretation rules',
      },
      {
        heading: 'Delivery path selected',
        body: 'The final output is routed into the right format for internal review, client sharing, or follow-up task creation.',
        signal: 'Outcome: less admin drag and cleaner client delivery',
      },
    ],
  },
  {
    id: 'lead-ops-automation',
    badge: 'Demo 03',
    title: 'Lead ops automation',
    summary: 'Show how inbound leads move from capture to qualification to routing when the business logic is too messy for a simple CRM template.',
    icon: Workflow,
    result: 'Leads are routed by fit, urgency, and next action instead of dropping into a generic queue.',
    steps: [
      {
        heading: 'Lead captured',
        body: 'The system receives the first signal from a form, call, or inbound channel and immediately tags the source and context.',
        signal: 'Trigger: inbound lead event',
      },
      {
        heading: 'Qualification applied',
        body: 'Rules decide whether the lead should be accepted, filtered, escalated, or sent to a human review step.',
        signal: 'Logic: fit, urgency, and workflow conditions',
      },
      {
        heading: 'Next action assigned',
        body: 'The lead is moved into the right owner, queue, or booking path with clear visibility on what happens next.',
        signal: 'Outcome: fewer dropped leads and less manual triage',
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
        badge="Workflow Demos"
        title={
          <>
            See the <br />
            <span className="text-white/50">operator logic</span>
          </>
        }
        subtitle="Three walkthroughs that show how OK Valley handles workflows that break template automation: live software navigation, branching logic, and real execution paths."
      />

      <Section className="bg-white">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <Heading level={2} className="mb-6">Built for the workflows most AI offers cannot actually handle.</Heading>
              <Text size="lg">
                These demos are not chatbot theater. They show where operator logic matters: navigating software, following branching rules, and moving work forward when the real process gets messy.
              </Text>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-brand-muted/5 border border-black/5 rounded-3xl p-8">
                <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-3">Sprint starting price</span>
                <span className="block text-5xl font-sans font-semibold tracking-tight text-brand-ink mb-4">$1,500</span>
                <Text className="max-w-none">
                  Businesses can start with a focused workflow build. Agencies usually start with a larger sprint once the first operator and delivery surface are mapped.
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
            <Heading level={2} className="mb-6 text-white">If the demos map to your real workflow, book the workflow call.</Heading>
            <Text size="lg" className="text-white/70 mb-10 max-w-2xl">
              We use the call to find the highest-friction workflow, assess whether your current stack is failing on logic or execution, and decide whether a business build or agency sprint is the right first engagement.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cal.com/okvalley/30min"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('cal_click', { source: 'demos_cta' })}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-ink transition-all duration-500 hover:scale-[1.02] hover:bg-white/90"
              >
                Book the workflow call
              </a>
              <Button to={RoutePath.PRICING} className="bg-transparent text-white border border-white/20 hover:bg-white/10">
                Review sprint pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
};

export default Demos;
