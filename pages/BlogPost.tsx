import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowLeft, Share2 } from 'lucide-react';

// Blog Data Store
const blogData: Record<string, any> = {
  'allocators-premium': {
    title: "The Allocator’s Premium",
    date: "NOV 15, 2024",
    author: "OK VALLEY",
    image: "https://picsum.photos/1920/1080?random=21",
    tags: ['Economics', 'Strategy', 'Future of Work'],
    toc: ["From Production to Allocation", "The New Scarcity", "The Billable Hour", "The Audit Economy", "Where Winners Sit"],
    content: (
      <>
        <p className="lead text-2xl font-serif leading-relaxed mb-12 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          For most of modern economic history, “smart work” was scarce. A company could only ship as much software, analysis, design, legal strategy, or marketing as it could hire humans to produce. Time was the throttle. Skill was the choke point.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          The billable hour, the retainer, the salary band—entire industries were built around the assumption that cognition, like labor on a factory floor, had a natural limit.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          That assumption is failing. Generative AI hasn’t made intelligence free. What it has made cheap—often shockingly cheap—is <em>first-pass execution</em>. The economy is now swimming in competent output. The bottleneck is moving upstream.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed font-bold">
           Not “How do we do it?” but “What should we do, and what are we willing to be responsible for?”
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This is where the allocator’s premium comes from: value migrates toward the people and firms who can set the objective, choose among plausible options, absorb downside, and defend the decision when it goes wrong.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">From production to allocation</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           It’s tempting to describe this moment as an “Industrial Revolution for the mind,” but that metaphor obscures what’s actually changing. The industrial era collapsed the cost of physical force by putting power behind machines. The AI era collapses the cost of <em>cognitive throughput</em> by putting credible drafts behind a prompt.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           When output becomes abundant, the market stops paying for output as such. It pays for complements: context, verification, integration, trust, and accountability. You can see this shift in how the work is starting to be organized:
        </p>
        <ul className="list-none space-y-6 mb-12">
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Engineering</strong>
              <span className="font-serif text-brand-muted">A senior engineer spends less time writing new code and more time shaping architectures, reviewing merges, and deciding which systems <em>should exist at all</em>.</span>
           </li>
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Design</strong>
              <span className="font-serif text-brand-muted">A creative lead becomes less an originator than a curator of hundreds of generated options—building a coherent aesthetic from a noisy flood.</span>
           </li>
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Strategy</strong>
              <span className="font-serif text-brand-muted">A partner-level lawyer becomes the final checkpoint: not the typist of the argument, but the person whose name sits on it.</span>
           </li>
        </ul>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           In each case, what is being purchased isn’t keystrokes. It’s decision quality and responsibility.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The new scarcity: “being wrong” is expensive</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           One clean way to understand the transition is to track the economics of error. In a world where drafts are cheap, the value of a human contribution rises with the cost of being wrong.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Low-stakes output—generic copy, routine summaries, basic designs—gets priced down because mistakes don’t carry much liability. High-stakes domains behave differently. In medicine, law, finance, and critical infrastructure, an error is not an inconvenience. It is a regulatory event, a blown deal, or a system down.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This pushes value toward the people who can do three things reliably:
        </p>
        <ol className="list-decimal pl-6 space-y-4 mb-8 font-serif text-brand-muted">
           <li><strong>Define the objective function.</strong> What counts as “good” here? What are we optimizing for?</li>
           <li><strong>Reject bad outputs.</strong> In a sea of plausible drafts, discernment becomes labor.</li>
           <li><strong>Assume accountability.</strong> Someone still has to sign, ship, and own the outcome.</li>
        </ol>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">Why the billable hour starts to crack</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This pressure shows up first where time has historically been the product. The billable hour worked because hours were scarce and output was correlated to effort. When a ten-hour task becomes a ten-minute draft plus forty minutes of review, time stops functioning as a credible proxy for value. Clients can sense the arbitrage.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           The early market response is not subtle: pricing shifts from time to outcomes. Agencies stop selling “content creation” and sell pipeline. Consultants stop selling slides and sell measurable decisions.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The Audit Economy</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           As production gets cheaper, verification becomes a line item. We’re entering an audit-heavy era in which organizations spend a growing share of attention not on generating content, but on ensuring that generated content is correct, compliant, safe, and aligned with business goals.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This creates a paradox. AI is sold as automation, but its adoption often increases the amount of checking—at least until systems mature. The future of work isn’t only fewer tasks. It’s a reallocation of tasks from producing to proving.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">Where the real winners sit</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           There’s a story that AI primarily benefits the biggest companies. That may be true in compute, data, and distribution. But on the ground—in the messy interior of work—another split matters more:
        </p>
        <blockquote className="border-l-4 border-brand-accent pl-8 italic text-2xl my-12 font-serif">
           "Organizations that can integrate AI into workflow vs. organizations that treat AI as a toy."
        </blockquote>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           The deeper shift happens when AI is wired into the system of record—when a draft becomes a ticket, a request becomes a scheduled job, a summary becomes a decision memo, and the workflow is redesigned around faster iteration <em>with accountability preserved</em>.
        </p>
        
        <div className="bg-brand-muted/5 p-8 border-l-4 border-brand-ink mt-12">
           <h4 className="font-sans font-bold uppercase mb-4">The thesis, trimmed to its bones</h4>
           <p className="mb-4 font-serif">A world flooded with cheap execution doesn’t eliminate value. It relocates it.</p>
           <ul className="space-y-2 font-serif text-sm">
              <li>/ The premium rises on <strong>judgment</strong>.</li>
              <li>/ The premium rises on <strong>verification</strong>.</li>
              <li>/ The premium rises on <strong>accountability</strong>.</li>
           </ul>
        </div>
      </>
    )
  },
  'real-ai-revolution': {
    title: "The Real AI Revolution Is Answering the Phone",
    date: "NOV 02, 2024",
    author: "OK VALLEY",
    image: "https://picsum.photos/1920/1080?random=12",
    tags: ['Operations', 'AI', 'Service Business'],
    toc: ["The Missed-Call Economy", "The Silent Tech Stack", "Why Plug and Play is a Lie", "The Split That Matters"],
    content: (
      <>
        <p className="lead text-2xl font-serif leading-relaxed mb-12 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          The loudest debates about artificial intelligence are still conducted in abstractions: whether models will become conscious, whether “AGI” is close, whether the new machines will rescue us or ruin us. Meanwhile, a quieter revolution is spreading through places that don’t sound like the future—plumbing vans, dental front desks, HVAC dispatch boards—where the problem isn’t intelligence at all.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed font-bold">
           It’s contact.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           In local services, the most consequential failure mode is embarrassingly simple: the phone rings, nobody answers, and the customer moves on. The point-of-sale is a human being who can’t pick up while under a sink, on a roof, or in a treatment room. And unlike a neglected email thread, a missed call is often unrecoverable.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           The popular story says AI will first transform the office—copywriting, slide decks, email. The story in the trades is different. Here, AI is not a writing assistant. It is a thin operational layer that routes, books, confirms, and follows up: the scaffolding of revenue.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The missed-call economy</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Vendor decks love to cite breathless numbers—six figures “lost” to missed calls—because big numbers sell. A better way to understand the incentive is to do the kind of napkin math an operator would actually trust.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Start with two conservative facts. First: the missed-call rate is real. Data consistently puts it around <strong>20-30%</strong> for home services. Second: voicemail is not a safety net. Less than <strong>3%</strong> of callers who reach voicemail leave a message. In other words, the “we’ll call them back” plan usually depends on a message that never arrives.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Now translate that into a small shop. Imagine a two-truck HVAC business. Miss two calls a day—one at lunch, one after hours. Over a working year, that’s roughly 500 missed calls. Even if you apply conservative conversion rates, you get a meaningful number of jobs that never exist.
        </p>
        <blockquote className="border-l-4 border-brand-accent pl-8 italic text-2xl my-12 font-serif">
           "A single booked job is not a 'conversion' on a dashboard; it’s a technician, a route, an invoice, a review, a repeat customer."
        </blockquote>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This is why the most honest claim here is not “AI adds $X.” It’s that responsiveness itself is a revenue system—and most small businesses run it on luck.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The silent tech stack</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           The tools that matter in this world are not the general-purpose models that dominate the headlines. They are narrower systems, designed to live inside the shop’s actual workflow: calendars, dispatch, intake, and billing.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Platforms like Jobber, Smith.ai, and ServiceTitan are pushing layers that handle calls and texts, schedule jobs, and create requests. What’s striking is not that these products exist; it’s where they sit. They live in the thin seam between customer intent and operational reality: “Can you come today?” “What’s the next available slot?”
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           This is why the “future of work” story looks different outside the office. In a plumbing business, the point is not to generate better prose. It is to reduce the number of times a skilled person has to stop a skilled task to do a low-skill one. Every minute a technician spends triaging voicemail is a minute they aren’t producing billable work.
        </p>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">Why “plug and play” is a lie</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           If the economics are so obvious, why isn’t every shop doing this? Because buying software is easy. Installing it into messy reality is the hard part.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           That gap—between tool and workflow—is where most “AI projects” go to die. And it’s where a new kind of work quietly emerges: not prompt engineering, but operations architecture. There are three predictable failure modes:
        </p>
        
        <ul className="list-none space-y-8 mb-12">
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Spam and Noise</strong>
              <span className="font-serif text-brand-muted">A naïve answering agent will cheerfully pick up robocalls and wrong numbers and burn budget. The fix is rarely glamorous: filtering, routing rules, and escalation paths.</span>
           </li>
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Overpromising</strong>
              <span className="font-serif text-brand-muted">AI systems are good at sounding confident. In services, the risk is booking the wrong job or promising the wrong price. The fix is “trust budgeting”: strict permissions and safe defaults.</span>
           </li>
           <li className="pl-6 border-l-2 border-brand-ink">
              <strong className="block font-sans font-bold uppercase mb-2">Integration</strong>
              <span className="font-serif text-brand-muted">A receptionist that cannot see the schedule is just a talking machine. “AI” doesn’t feel like magic until it’s connected to calendars and dispatch.</span>
           </li>
        </ul>

        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The split that matters</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           There’s a popular narrative that AI will widen the advantage of big companies over small ones. In practice, the first-order effect may be a different split: between organizations that can integrate tools into workflow and those that cannot.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
           Large enterprises are often cautious for rational reasons—compliance, security, procurement. Smaller firms can decide quickly and ship changes into the real world. In local services, “implementation” can mean something as simple—and as valuable—as reliably answering calls and turning intent into booked work.
        </p>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed font-bold">
           That is what makes this moment feel like an inflection point. Not the arrival of new intelligence, but the spread of new coordination. The technology is here. The bottleneck isn’t intelligence. It’s integration.
        </p>
        
        <div className="mt-16 pt-8 border-t border-brand-muted/20 text-xs text-brand-muted font-sans">
           <p className="mb-2"><strong>Sources & Notes:</strong></p>
           <ul className="space-y-1">
              <li>[1] Invoca Benchmarks: Call miss rates and lead conversion data.</li>
              <li>[2] OECD/ISED Canada: SME adoption barriers and skills gaps.</li>
              <li>[3] CFIB Reports: Digital integration in small business operations.</li>
           </ul>
        </div>
      </>
    )
  },
  'why-speed-is-revenue': {
    title: 'Why Speed is Revenue',
    date: 'OCT 12, 2024',
    author: 'OK VALLEY',
    image: 'https://picsum.photos/1920/1080?random=11',
    tags: ['Performance', 'Revenue', 'Operations'],
    toc: ['Speed changes conversion', 'Response time compounds', 'What to fix first'],
    content: (
      <>
        <p className="lead text-2xl font-serif leading-relaxed mb-12 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          In service businesses, speed is not a nice-to-have metric. It is the mechanism that decides whether demand turns into booked work or vanishes into the market.
        </p>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">Speed changes conversion</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          Faster load times reduce bounce. Faster call response reduces abandonment. Faster follow-up raises show rates. The commercial effect is simple: the business that responds first usually gets the chance to earn trust first.
        </p>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">Response time compounds</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          Small delays stack. A slow site creates fewer leads. Slow routing creates fewer booked calls. Slow follow-up lowers close rates. The leakage shows up everywhere, which is why operators often underestimate it.
        </p>
        <blockquote className="border-l-4 border-brand-accent pl-8 italic text-2xl my-12 font-serif">
          "Speed is not just UX. It is sales infrastructure."
        </blockquote>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">What to fix first</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8 font-serif text-brand-muted">
          <li>Cut page-weight and improve load time on the highest-intent pages.</li>
          <li>Automate missed-call response so leads get a reply immediately.</li>
          <li>Reduce form friction to shorten the path from visit to inquiry.</li>
        </ul>
      </>
    )
  },
  'seo-is-broken': {
    title: 'SEO is Broken. Here is the Fix.',
    date: 'SEP 14, 2024',
    author: 'OK VALLEY',
    image: 'https://picsum.photos/1920/1080?random=13',
    tags: ['Strategy', 'SEO', 'Demand Capture'],
    toc: ['The old playbook', 'What search rewards now', 'The practical fix'],
    content: (
      <>
        <p className="lead text-2xl font-serif leading-relaxed mb-12 first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
          SEO is not dead. What is dead is the habit of publishing generic, undifferentiated pages and expecting rankings to appear because the keywords are technically present.
        </p>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The old playbook</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          Thin service pages, vague blog content, and recycled agency copy used to produce enough signal to rank. That margin is gone. Search now filters harder because generic pages are abundant.
        </p>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">What search rewards now</h2>
        <p className="mb-8 font-serif text-brand-muted leading-relaxed">
          The pages that still perform are the ones with clear intent matching, local proof, sharp structure, and real operational detail. They answer the job the user is trying to complete.
        </p>
        <h2 className="font-sans text-3xl font-bold uppercase mt-16 mb-8">The practical fix</h2>
        <ol className="list-decimal pl-6 space-y-4 mb-8 font-serif text-brand-muted">
          <li>Build pages around real service intent instead of broad vanity terms.</li>
          <li>Add proof that is local, specific, and commercially relevant.</li>
          <li>Improve performance so the page experience supports the ranking.</li>
        </ol>
      </>
    )
  }
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = slug ? blogData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (!post) {
     return (
        <div className="h-screen flex items-center justify-center bg-white">
           <div className="text-center">
              <Heading level={2}>404: Signal Not Found</Heading>
              <Button onClick={() => navigate(RoutePath.BLOG)} className="mt-8">Return to Signals</Button>
           </div>
        </div>
     );
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-brand-accent z-[60] transition-all duration-100" style={{ width: `${scrollProgress * 100}%` }}></div>

      <Section className="pt-40 pb-12">
        <Button 
           variant="ghost" 
           onClick={() => navigate(RoutePath.BLOG)} 
           className="mb-8 pl-0 text-brand-muted/60 hover:text-brand-ink"
        >
           <ArrowLeft size={16} className="mr-2" /> All Insights
        </Button>
        <Reveal>
           <div className="flex gap-4 font-sans text-xs font-bold uppercase tracking-widest text-brand-muted/60 mb-6">
              <span>{post.date}</span>
              <span>//</span>
              <span>{post.author}</span>
           </div>
           <h1 className="text-5xl md:text-8xl font-sans font-bold uppercase leading-[0.9] mb-12">{post.title}</h1>
        </Reveal>
      </Section>

      <div className="w-full h-[60vh] overflow-hidden relative mb-24">
         <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      <Section fullWidth className="grid grid-cols-1 md:grid-cols-12 gap-12 px-6 md:px-12">
         <div className="md:col-span-3 hidden md:block">
            <div className="sticky top-32">
               <h4 className="font-sans font-bold uppercase mb-4 text-xs tracking-widest text-brand-accent">Table of Contents</h4>
               <ul className="space-y-2 text-sm text-brand-muted/60 font-medium">
                  {post.toc ? post.toc.map((item: string, i: number) => (
                     <li key={i} className="hover:text-brand-ink transition-colors">{item}</li>
                  )) : (
                     <li className="text-brand-ink">Read Full Article</li>
                  )}
               </ul>
               <div className="mt-12">
                  <button
                    className="flex items-center gap-2 text-xs font-bold font-sans uppercase tracking-widest hover:text-brand-accent"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
                        return;
                      }
                      navigator.clipboard?.writeText(window.location.href);
                    }}
                  >
                     <Share2 size={14} /> Share Article
                  </button>
               </div>
            </div>
         </div>
         
         <div className="md:col-span-7">
            <article className="prose prose-xl prose-stone max-w-none">
               {post.content}
            </article>
            
            <div className="border-t border-brand-muted/20 mt-24 pt-12">
               <h4 className="font-sans font-bold uppercase mb-8">Tags</h4>
               <div className="flex gap-4">
                  {post.tags.map((tag: string) => (
                     <span key={tag} className="border border-brand-muted/30 px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-ink hover:text-white transition-colors cursor-pointer">
                        {tag}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default BlogPost;
