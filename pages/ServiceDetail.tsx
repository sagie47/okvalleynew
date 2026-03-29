import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowLeft, CheckCircle2, Bot, Layers, Zap, Database, LineChart, Target, Activity, TrendingUp } from 'lucide-react';

type ServiceDetailData = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  deliveryModel: string[];
  benefits: { title: string; desc: string }[];
  caseStudy: {
    client: string;
    metric: string;
    challenge: string;
    solution: string;
    stats: { label: string; value: string }[];
  };
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const serviceData: Record<string, ServiceDetailData> = {
  'agency-ai-operators': {
    title: 'Agency AI Operators',
    subtitle: 'Custom operator systems for agency workflows that break template automation.',
    description: 'Most agency AI offers stop at canned replies, light CRM logic, and dashboard theater. We build custom operators that can navigate real software, handle branching logic, and execute delivery workflows your team cannot realistically automate with off-the-shelf stacks.',
    features: [
      'Browser-use operators across real software',
      'Cross-tool workflow design',
      'Human review and fallback logic',
      'Prompt plus policy guardrails',
      'Task routing and queue logic',
      'Operational visibility and status layers',
      'Deployment support for production use',
    ],
    deliveryModel: [
      'We map the exact workflow that is still manual, brittle, or buried in account manager time.',
      'We define the real branching logic, edge cases, and approval points before anything is built.',
      'We ship an operator your team can actually use inside existing delivery or ops workflows.',
    ],
    benefits: [
      { title: 'More execution capacity', desc: 'Agencies can take on more work without solving every throughput issue with another hire.' },
      { title: 'Less template fragility', desc: 'The system is designed for nuanced steps, software navigation, and exception paths.' },
      { title: 'Better client delivery', desc: 'Operators can support the workflows that clients actually feel, not just internal automation demos.' },
      { title: 'Higher-margin infrastructure', desc: 'You end up with reusable internal leverage instead of one-off manual effort.' },
    ],
    caseStudy: {
      client: 'Paid Media Agency',
      metric: 'Internal delivery ops',
      challenge: 'The team was rebuilding reporting recaps, QA checks, and account summaries by hand across too many tools.',
      solution: 'Built a custom operator workflow that gathers context, structures the recap, flags anomalies, and routes the result for review before client delivery.',
      stats: [
        { label: 'Weekly reporting time', value: '-9 hrs' },
        { label: 'Manual QA passes', value: '-60%' },
        { label: 'Delivery consistency', value: '+1 layer' },
        { label: 'Ops clarity', value: 'Improved' },
      ],
    },
    icon: Bot,
  },
  'agency-workflow-sprints': {
    title: 'Agency Workflow Sprints',
    subtitle: 'A focused sprint to replace one painful workflow with a real operator system.',
    description: 'This is the fast-entry offer for agencies that know something is broken but do not need a broad AI transformation plan. We isolate one high-friction workflow, build the operator logic around it, and leave the team with a usable system plus a path to expand.',
    features: [
      'Workflow audit and scoping',
      'One sprint-sized operator build',
      'Tool mapping and credential plan',
      'Fallback and exception design',
      'Internal training handoff',
      'Workflow documentation',
      'Expansion roadmap for the next operator',
    ],
    deliveryModel: [
      'Week one is workflow mapping, constraints, and execution design.',
      'Week two is build, QA, and the first production-ready operating version.',
      'The sprint ends with a handoff, live walkthrough, and expansion recommendation.',
    ],
    benefits: [
      { title: 'Fast first win', desc: 'Agencies get a working result quickly without buying into a vague long-term retainer first.' },
      { title: 'Clear scope', desc: 'One workflow, one sprint, one concrete outcome instead of diffuse AI strategy.' },
      { title: 'Better buying path', desc: 'It is easier for founders and ops leads to approve a targeted build than an abstract transformation plan.' },
      { title: 'Expansion-ready', desc: 'A successful first sprint becomes the base for more internal operators later.' },
    ],
    caseStudy: {
      client: 'Founder-led lead gen agency',
      metric: 'Proposal and onboarding workflow',
      challenge: 'The founder was still manually moving new deals through proposal prep, internal setup, and kickoff coordination.',
      solution: 'Built a sprint-based workflow system to collect context, assemble the handoff structure, and route onboarding tasks with visibility.',
      stats: [
        { label: 'Proposal prep time', value: '-70%' },
        { label: 'Setup lag', value: '-4 days' },
        { label: 'Manual handoffs', value: 'Reduced' },
        { label: 'Founder involvement', value: 'Lower' },
      ],
    },
    icon: Layers,
  },
  'business-workflow-agents': {
    title: 'Business Workflow Agents',
    subtitle: 'Custom operators for businesses whose workflow logic is too complex for simple automation stacks.',
    description: 'Some businesses do not need generic AI marketing. They need a workflow handled properly: lead qualification, intake routing, scheduling logic, research tasks, ops coordination, or cross-system follow-up. We build agents around the actual work instead of forcing the work into a template.',
    features: [
      'Lead and intake workflow operators',
      'Scheduling and routing logic',
      'Cross-tool task execution',
      'Qualification and approval paths',
      'Exception-aware workflow design',
      'Internal ops automation support',
      'Reporting and visibility layers',
    ],
    deliveryModel: [
      'We start from the broken process, not the tool stack.',
      'We map the real operational rules that determine whether the workflow succeeds or fails.',
      'We implement an agent that fits the business workflow instead of forcing the team into generic automation constraints.',
    ],
    benefits: [
      { title: 'Less manual triage', desc: 'Teams stop wasting time routing and rechecking work that should already have a defined system behind it.' },
      { title: 'Faster response paths', desc: 'Leads, tasks, and internal requests move faster when the decision rules are explicit.' },
      { title: 'Better operational reliability', desc: 'The workflow is built around actual business conditions and exceptions.' },
      { title: 'Practical AI use', desc: 'The system does real work instead of existing as a novelty layer on top of the business.' },
    ],
    caseStudy: {
      client: 'Regional services business',
      metric: 'Lead handling and booking',
      challenge: 'Inbound leads were getting trapped between forms, text follow-up, and manual scheduling decisions.',
      solution: 'Built a workflow agent that qualifies leads, routes urgent cases, and assigns the right booking or review path based on business rules.',
      stats: [
        { label: 'Lead response time', value: '<5 min' },
        { label: 'Manual triage', value: '-65%' },
        { label: 'Dropped leads', value: 'Reduced' },
        { label: 'Ops visibility', value: 'Higher' },
      ],
    },
    icon: Database,
  },
  'business-automation-systems': {
    title: 'Business Automation Systems',
    subtitle: 'Workflow builds for teams that have outgrown simple automations but are not ready to build internal AI infrastructure alone.',
    description: 'This is for businesses that already know their workflows cannot be solved with a few triggers and canned replies. We design and implement a more capable system with the operator layer, logic model, and execution path required to make the workflow hold up under real-world use.',
    features: [
      'Workflow architecture and system design',
      'Operator build and deployment support',
      'Approval and escalation paths',
      'Internal queue and task logic',
      'Tool integration strategy',
      'Observability and reporting',
      'Roadmap for future workflow builds',
    ],
    deliveryModel: [
      'The first step is identifying the workflow where current automation is failing hardest.',
      'We build the logic, execution path, and review structure required to make that workflow usable.',
      'Once stable, the system becomes the template for additional operator builds across the business.',
    ],
    benefits: [
      { title: 'System-level leverage', desc: 'You get a stronger operational base instead of piling more rules onto a weak workflow foundation.' },
      { title: 'Better use of existing tools', desc: 'Operators can work with the software you already pay for instead of forcing a full-stack replacement.' },
      { title: 'Cleaner team handoffs', desc: 'Escalations, approvals, and task ownership become explicit inside the workflow.' },
      { title: 'More room to expand', desc: 'A good first system gives the business a credible base for future agent-driven workflows.' },
    ],
    caseStudy: {
      client: 'Multi-location operations team',
      metric: 'Internal workflow rebuild',
      challenge: 'A growing business had fragmented automations across inboxes, spreadsheets, and dashboards with no clear operating layer.',
      solution: 'Designed a business automation system with explicit routing logic, operator execution, and clear visibility on task state across locations.',
      stats: [
        { label: 'Workflow handoff errors', value: '-50%' },
        { label: 'Status visibility', value: '+1 system' },
        { label: 'Repeatable ops', value: 'Higher' },
        { label: 'Expansion readiness', value: 'Improved' },
      ],
    },
    icon: Zap,
  },
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Heading level={2}>404: Service Not Found</Heading>
          <Button onClick={() => navigate(RoutePath.SERVICES)} className="mt-8">Return to Directory</Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Section className="pt-40 pb-12 bg-white relative">
        <Button
          variant="ghost"
          onClick={() => navigate(RoutePath.SERVICES)}
          className="mb-8 pl-0 text-brand-muted/60 hover:text-brand-ink"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Services
        </Button>

        <Reveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-brand-ink text-white rounded-2xl">
              <Icon className="w-6 h-6" />
            </div>
            <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] px-3 py-1 border border-brand-ink rounded-full">
              Service Protocol
            </span>
          </div>
          <Heading level="display" className="mb-8">{service.title}</Heading>
          <Text size="xl" className="text-brand-ink/80 max-w-5xl">{service.subtitle}</Text>
        </Reveal>
      </Section>

      <Section fullWidth className="border-t border-brand-muted/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <div className="lg:col-span-7 p-6 md:p-24 border-b lg:border-b-0 lg:border-r border-brand-muted/20 bg-white">
            <Reveal delay={200}>
              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                <Activity className="text-brand-accent w-5 h-5" /> Mission Overview
              </h3>
              <Text className="mb-16" size="lg">{service.description}</Text>

              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                <Target className="text-brand-accent w-5 h-5" /> What&apos;s Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 border border-brand-muted/20 p-4 hover:border-brand-ink transition-colors rounded-2xl">
                    <div className="w-1.5 h-1.5 bg-brand-ink rounded-full"></div>
                    <span className="font-sans font-bold uppercase tracking-wide text-xs">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                <TrendingUp className="text-brand-accent w-5 h-5" /> Key Benefits
              </h3>
              <div className="space-y-8 mb-12">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold uppercase text-lg mb-1">{benefit.title}</h4>
                      <p className="font-sans text-brand-muted text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-sans text-xl font-bold uppercase mb-8 flex items-center gap-2">
                <LineChart className="text-brand-accent w-5 h-5" /> Operating Model
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.deliveryModel.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border border-brand-muted/20 p-4 rounded-2xl">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2" />
                    <span className="font-sans font-medium text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <Button to={RoutePath.DEMOS} variant="primary">See Workflow Demos</Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 bg-brand-muted/5 text-brand-ink p-6 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <Reveal delay={400} className="relative z-10">
              <div className="mb-12 border-b border-brand-muted/30 pb-8">
                <span className="font-sans text-brand-accent text-xs uppercase tracking-widest mb-2 block">Case Study Protocol</span>
                <h3 className="text-3xl md:text-5xl font-sans font-bold uppercase leading-none mb-4">{service.caseStudy.client}</h3>
                <span className="inline-block border border-brand-muted/40 px-3 py-1 font-sans text-xs text-brand-muted">
                  PROFILE: {service.caseStudy.metric}
                </span>
              </div>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="font-sans text-sm font-bold uppercase text-brand-muted mb-2">The Challenge</h4>
                  <p className="text-brand-ink font-sans leading-relaxed">{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold uppercase text-brand-muted mb-2">The Solution</h4>
                  <p className="text-brand-ink font-sans leading-relaxed">{service.caseStudy.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {service.caseStudy.stats.map((stat, i) => (
                  <div key={i} className="bg-white border border-brand-muted/20 p-6 rounded-2xl">
                    <span className="block text-3xl md:text-4xl font-sans font-bold text-brand-ink mb-1">{stat.value}</span>
                    <span className="block text-[10px] uppercase tracking-widest text-brand-accent font-bold">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none">
              <Icon className="w-96 h-96" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ServiceDetail;
