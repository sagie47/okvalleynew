import React from 'react';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowDown, BellRing, MessageSquareMore, Route } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { trackEvent } from '../src/analytics';

const featuredProjects = [
  {
    id: 'tutt-street',
    name: 'Tutt Street Chiro',
    category: 'Search Performance',
    tags: ['Google Ads', 'Local SEO', '+60% leads'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: 'storage-express',
    name: 'Storage Express',
    category: 'Operations Hub',
    tags: ['Automation', 'Unified ops', 'Web build'],
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1600',
  },
  {
    id: 'kelowna-boat',
    name: 'Kelowna Boat Detailing',
    category: 'Web Build',
    tags: ['Premium positioning', 'Booking path', 'Conversion'],
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1600',
  },
];

const demoPreviews = [
  {
    title: 'Browser-use execution',
    body: 'See how a custom operator moves through live software, handles branching logic, and completes multi-step work.',
    icon: BellRing,
  },
  {
    title: 'Agency reporting flow',
    body: 'See how recurring client updates, data pulls, and recap generation become one controlled system instead of manual admin.',
    icon: Route,
  },
  {
    title: 'Lead ops automation',
    body: 'See how inbound leads are qualified, routed, and handed off without relying on brittle template automations.',
    icon: MessageSquareMore,
  },
];

const proofItems = [
  { value: '2', label: 'delivery lanes' },
  { value: 'custom', label: 'operator builds' },
  { value: 'cross-tool', label: 'workflow scope' },
  { value: 'sprint', label: 'engagement model' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen w-full relative flex flex-col justify-center pt-32 pb-12 px-6 md:px-12 overflow-hidden bg-brand-ink text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-brand-accent/40 to-transparent blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 1.2, rotate: 15 }}
            animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute -bottom-[30%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-blue-500/30 to-transparent blur-3xl"
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 flex-grow flex flex-col justify-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
              <span className="font-sans text-sm font-medium tracking-tight text-white/70 uppercase tracking-widest">
                Kelowna, BC / Custom AI systems for agencies and operators
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-6xl md:text-8xl lg:text-[9vw] font-sans font-semibold leading-[0.95] tracking-tightest mb-8 max-w-6xl">
              Advanced AI operators for workflows templates cannot handle
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end mt-8">
            <div className="md:col-span-7">
              <Reveal delay={400}>
                <Text size="xl" className="mb-12 text-white/70 max-w-3xl">
                  Most agency AI offers stop at canned CRM automations and re-skinned templates. We build custom browser-use and agent systems for cross-tool workflows, messy edge cases, and execution work your team cannot automate with off-the-shelf stacks.
                </Text>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    to={RoutePath.DEMOS}
                    className="bg-white text-brand-ink hover:bg-white/90"
                    icon
                    onClick={() => trackEvent('homepage_primary_cta', { destination: 'demos' })}
                  >
                    See Workflow Demos
                  </Button>
                  <Button
                    to={RoutePath.PRICING}
                    className="bg-transparent text-white border border-white/20 hover:bg-white/10"
                    onClick={() => trackEvent('homepage_secondary_cta', { destination: 'pricing' })}
                  >
                    Review Sprint Models
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="hidden md:flex md:col-span-5 justify-end gap-12 pb-2">
              <Reveal delay={600} className="grid grid-cols-2 gap-6">
                {proofItems.map((item) => (
                  <div key={item.label} className="text-right">
                    <span className="block font-sans text-5xl font-medium tracking-tight mb-2">{item.value}</span>
                    <span className="font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest">
                      {item.label}
                    </span>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 opacity-40 z-10"
        >
          <ArrowDown size={20} strokeWidth={1.5} className="text-white" />
        </motion.div>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">What we actually sell</span>
          <Heading level={2} className="mb-8">The gap between happy-path automation and real execution.</Heading>
          <Text size="lg">
            Basic automations work until the workflow needs live logins, branching decisions, browser actions, exception handling, or cross-tool coordination. That is where most packaged AI offers break and where our work starts.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Reveal>
            <div className="rounded-3xl border border-black/5 bg-brand-muted/5 p-8 h-full">
              <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Lane 01</span>
              <h3 className="text-3xl font-sans font-medium tracking-tight text-brand-ink mb-4">For marketing agencies</h3>
              <Text className="max-w-none">
                White-label AI execution systems for agencies that need more than GoHighLevel-style automation. We build client reporting operators, QA flows, research agents, internal ops systems, and delivery accelerators.
              </Text>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-black/5 bg-brand-muted/5 p-8 h-full">
              <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Lane 02</span>
              <h3 className="text-3xl font-sans font-medium tracking-tight text-brand-ink mb-4">For businesses</h3>
              <Text className="max-w-none">
                Custom workflow agents for teams that need intake automation, browser-based execution, client communication systems, and operational follow-through beyond simple triggers and canned sequences.
              </Text>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoPreviews.map((demo, index) => {
            const Icon = demo.icon;

            return (
              <Reveal key={demo.title} delay={index * 100}>
                <div className="rounded-3xl border border-black/5 bg-brand-muted/5 p-8 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ink text-white mb-6">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-sans font-medium tracking-tight text-brand-ink mb-4">{demo.title}</h3>
                  <Text className="max-w-none mb-8">{demo.body}</Text>
                  <Button
                    to={RoutePath.DEMOS}
                    variant="link"
                    icon
                    onClick={() => trackEvent('demo_preview_click', { demo: demo.title })}
                  >
                    Open the walkthrough
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-brand-muted/5 rounded-[3rem] my-12 mx-4 md:mx-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-4 block">Implementation proof</span>
            <Heading level={2} className="mb-6">Selected work that shows we ship systems, not just ideas.</Heading>
            <Text size="lg">
              The archive still matters because advanced operators need strong foundations: clear conversion paths, disciplined implementation, and systems that survive real operating conditions.
            </Text>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <Button to={RoutePath.WORK} variant="link" icon>
              View full archive
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {featuredProjects.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 100}>
              <div
                className="group cursor-pointer"
                onClick={() => navigate(`/work/${item.id}`)}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9] mb-8 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-brand-ink mb-2 group-hover:opacity-70 transition-opacity">{item.name}</h3>
                    <p className="text-brand-muted font-sans text-base">{item.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full bg-white text-sm font-medium tracking-tight text-brand-ink border border-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="font-sans text-sm font-medium tracking-tight text-brand-muted mb-6 block">How we engage</span>
            <Heading level={2} className="mb-8">One workflow first. Then scale.</Heading>
            <Text size="lg">
              We do not start with vague AI strategy. We isolate one high-friction workflow, build the operator around it, then expand only after the first system proves itself.
            </Text>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Map the workflow',
                body: 'Break down the exact task, tool stack, edge cases, and failure points instead of pretending a generic template will cover it.',
              },
              {
                title: 'Build the operator',
                body: 'Implement the first custom system with explicit branching logic, guardrails, and a usable handoff back to your team.',
              },
              {
                title: 'Expand after proof',
                body: 'Once the first workflow holds up, add adjacent systems for reporting, fulfillment, intake, QA, or growth operations.',
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="rounded-3xl border border-black/5 p-8 h-full">
                  <span className="block text-[10px] uppercase tracking-widest text-brand-muted mb-4">Step 0{index + 1}</span>
                  <h3 className="text-2xl font-sans font-medium tracking-tight text-brand-ink mb-4">{item.title}</h3>
                  <Text className="max-w-none">{item.body}</Text>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
