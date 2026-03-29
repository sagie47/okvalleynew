import React from 'react';
import { PageHeader, Section, Heading, Text, Button, Reveal, AccordionItem } from '../components/Common';
import { RoutePath } from '../types';
import { Bot, Workflow, ShieldCheck, ArrowRight } from 'lucide-react';
import { trackEvent } from '../src/analytics';

const workflowExamples = [
  {
    title: 'Client reporting operators',
    body: 'Pull account context, structure the recap, flag anomalies, and prepare the delivery draft instead of rebuilding every report by hand.',
    icon: Bot,
  },
  {
    title: 'Campaign QA workflows',
    body: 'Run recurring checks across tools, spot broken states, and route issues for review before they become client-facing mistakes.',
    icon: ShieldCheck,
  },
  {
    title: 'Onboarding and fulfillment systems',
    body: 'Move new work from signed deal to internal handoff with less founder coordination, fewer dropped steps, and better visibility.',
    icon: Workflow,
  },
];

const fitSignals = [
  'You already tried GoHighLevel, Zapier, or template automations and hit real limits.',
  'Your team is still doing too much repetitive ops inside live software.',
  'Client reporting, QA, onboarding, or delivery work depends on manual coordination.',
  'You want execution capacity without hiring another full-time operator first.',
];

const sprintIncludes = [
  'Workflow mapping and edge-case analysis',
  'Operator design across your real tool stack',
  'Browser-use or cross-tool execution logic',
  'Guardrails, fallbacks, and approval points',
  'Live walkthrough plus expansion recommendation',
];

const Agencies: React.FC = () => {
  return (
    <>
      <PageHeader
        badge="Agency Lane"
        title={
          <>
            Custom AI systems <br />
            <span className="text-white/50">for agencies</span>
          </>
        }
        subtitle="For agencies that are tired of selling or buying template automation dressed up as intelligence. We build custom operators for the workflows that actually break."
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">The problem</span>
              <Heading level={2} className="mb-8">Most agency AI offers stop at the happy path.</Heading>
              <Text size="lg" className="mb-8">
                They can trigger a form response, move a contact in a CRM, or run a canned follow-up sequence. That is not the hard part.
              </Text>
              <Text size="lg">
                The hard part is when the workflow needs live software navigation, branching logic, edge-case handling, internal approvals, or coordination across multiple tools. That is where template automation stops being compelling and where custom operator systems start to matter.
              </Text>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-black/5 bg-brand-muted/5 p-8">
                <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-3">Primary offer</span>
                <span className="block text-5xl font-sans font-semibold tracking-tight text-brand-ink mb-4">$3,500+</span>
                <p className="font-sans text-brand-muted leading-relaxed mb-8">
                  Agency AI Workflow Sprint
                </p>
                <div className="space-y-4">
                  {sprintIncludes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 mt-1 text-brand-accent shrink-0" />
                      <span className="font-sans text-sm text-brand-ink">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-muted/5 rounded-[3rem] my-12 mx-4 md:mx-8">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">Example workflows</span>
            <Heading level={2} className="mb-8">The kind of work we build for agencies.</Heading>
            <Text size="lg">
              Not generic “AI automation.” Specific internal systems that reduce ops drag, improve delivery consistency, and create more execution capacity.
            </Text>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowExamples.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="rounded-3xl border border-black/5 bg-white p-8 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ink text-white mb-6">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-sans font-medium tracking-tight text-brand-ink mb-4">{item.title}</h3>
                  <Text className="max-w-none">{item.body}</Text>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">Agency fit</span>
              <Heading level={2} className="mb-8">Who this is for.</Heading>
              <Text size="lg">
                Founder-led or lean agencies that already know manual ops are dragging delivery, but do not want to solve it with another generic automation layer.
              </Text>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {fitSignals.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <div className="rounded-3xl border border-black/5 p-8 h-full">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Signal 0{index + 1}</span>
                  <Text className="max-w-none text-brand-ink">{item}</Text>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-brand-muted/5 py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">How it works</span>
              <Heading level={2} className="mb-6 uppercase tracking-tighter">One sprint. One workflow. One clear result.</Heading>
              <Text className="mb-10 text-brand-muted">
                The first sale should not be a vague transformation retainer. It should be a scoped workflow build with a clear delivery surface and a clean next step.
              </Text>
            </Reveal>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Map the workflow',
                body: 'Identify the exact internal process, tool stack, and failure points that keep wasting operator time.',
              },
              {
                title: 'Build the operator',
                body: 'Implement the logic, navigation, and review path required to make the workflow usable in production.',
              },
              {
                title: 'Expand after proof',
                body: 'Use the first successful system to decide what adjacent workflow should be automated next.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="rounded-3xl border border-black/5 bg-white p-8 h-full">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Step 0{index + 1}</span>
                  <h3 className="text-2xl font-sans font-medium tracking-tight text-brand-ink mb-4">{item.title}</h3>
                  <Text className="max-w-none">{item.body}</Text>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white py-32 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">FAQ</span>
              <Heading level={2} className="mb-6 uppercase tracking-tighter">Agency buying questions</Heading>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={200}>
              <div className="bg-brand-muted/5 border border-brand-muted/20 p-8 md:p-12 rounded-3xl shadow-sm">
                <AccordionItem title="Is this white-label friendly?">
                  Yes. Agencies can use the systems internally, wrap them into delivery, or treat the build as execution capacity behind their own client relationships.
                </AccordionItem>
                <AccordionItem title="What if the workflow spans several tools?">
                  That is usually the point. We design the operator around the real process, not around the false assumption that one platform owns the whole workflow.
                </AccordionItem>
                <AccordionItem title="What is the best first workflow to automate?">
                  Usually the workflow that burns recurring account-manager or founder time every single week: reporting, QA, onboarding, fulfillment handoff, or research-heavy delivery work.
                </AccordionItem>
                <AccordionItem title="Do we need a long contract?">
                  No. The first step is a scoped sprint. Ongoing support only makes sense after the first operator proves useful.
                </AccordionItem>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-ink text-center py-36 rounded-[3rem] mx-4 md:mx-8 mb-12">
        <Reveal>
          <Heading level={2} className="mb-6 text-white uppercase tracking-tighter">If the workflow is real, the sprint is the next step.</Heading>
          <Text className="text-white/70 mx-auto mb-12 max-w-2xl">
            Review the demos if you want to see execution logic first. If you already know the painful workflow, book the call and we will decide whether it is the right first operator build.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={RoutePath.DEMOS}
              variant="secondary"
              className="bg-white text-brand-ink hover:bg-white/90"
              onClick={() => trackEvent('agency_page_cta', { destination: 'demos' })}
            >
              See Workflow Demos
            </Button>
            <a
              href="https://cal.com/okvalley/30min"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('cal_click', { source: 'agency_page_cta' })}
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

export default Agencies;
