import React from 'react';
import { Section, Heading, Text, Button, AccordionItem, Reveal, PageHeader } from '../components/Common';
import { RoutePath } from '../types';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <>
      <PageHeader 
        badge="Investment Models"
        title={<>Transparent <br/><span className="text-white/50">Pricing</span></>}
        subtitle="Choose the model that fits your business. We offer pilot pricing for our AI systems and flexible options for conversion websites."
      />

      <div className="px-6 md:px-12 py-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-ink/10 border border-brand-muted/20 rounded-3xl overflow-hidden">
          {/* Tier 1: AI Lead System */}
          <Reveal delay={100} className="h-full">
            <div className="p-10 md:p-12 bg-brand-ink text-white relative h-full flex flex-col overflow-hidden group">
              <div className="absolute inset-0 opacity-10"></div>
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_12px_#FF4F00]"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-accent px-3 py-1.5 rounded-full inline-block mb-10 w-fit text-brand-accent bg-brand-accent/10">AI Lead System</span>
                <div className="mb-8">
                  <span className="text-6xl font-sans font-bold tracking-tighter text-white">$1,500</span>
                  <span className="block font-sans text-[10px] uppercase tracking-widest text-white/50 mt-4">Pilot Setup Fee</span>
                </div>
                <p className="font-sans text-white/70 mb-12 min-h-[3rem] leading-relaxed">Stop losing leads to missed calls. We build the system, you close the deals.</p>
                
                <div className="w-full h-px bg-white/10 mb-8"></div>
                
                <ul className="space-y-5 mb-12 flex-grow">
                  {['Missed-Call Text-Back', 'Automated Lead Qualification', 'CRM & Pipeline Setup', 'Instant Lead Notifications', 'Optional $299/mo Support'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white">
                      <Check className="w-5 h-5 text-brand-accent shrink-0" />
                      <span className="font-sans text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button to={RoutePath.CONTACT} variant="secondary" className="w-full justify-center bg-white text-brand-ink hover:bg-white/90">Get Started</Button>
              </div>
            </div>
          </Reveal>

          {/* Tier 2: Website Lump Sum */}
          <Reveal delay={200} className="h-full">
            <div className="p-10 md:p-12 bg-white hover:bg-brand-muted/5 transition-colors duration-500 h-full flex flex-col">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-10 w-fit text-brand-ink">Website (Lump Sum)</span>
              <div className="mb-8">
                <span className="text-6xl font-sans font-bold tracking-tighter text-brand-ink">$3,800</span>
                <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">+ $25/mo hosting</span>
              </div>
              <p className="font-sans text-brand-muted mb-12 min-h-[3rem] leading-relaxed">Standard ownership model. Pay once, own the infrastructure forever.</p>
              
              <div className="w-full h-px bg-brand-ink/10 mb-8"></div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {['Design & Dev (5 Pages)', 'Lead Capture Forms', 'Mobile-First Design', 'Optional +$50/mo Unlimited Edits', '+$250 to Add Blog'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-ink">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button to={RoutePath.CONTACT} variant="outline" className="w-full justify-center">Select Plan</Button>
            </div>
          </Reveal>

          {/* Tier 3: Website Monthly */}
          <Reveal delay={300} className="h-full">
            <div className="p-10 md:p-12 bg-white hover:bg-brand-muted/5 transition-colors duration-500 h-full flex flex-col">
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-brand-muted/20 px-3 py-1.5 rounded-full inline-block mb-10 w-fit text-brand-ink">Website (Monthly)</span>
              <div className="mb-8">
                <span className="text-6xl font-sans font-bold tracking-tighter text-brand-ink">$175</span>
                <span className="block font-sans text-[10px] uppercase tracking-widest text-brand-muted mt-4">Per Month / $0 Down</span>
              </div>
              <p className="font-sans text-brand-muted mb-12 min-h-[3rem] leading-relaxed">Cashflow friendly. Includes everything, forever. Our most popular website model.</p>
              
              <div className="w-full h-px bg-brand-ink/10 mb-8"></div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {['Design & Dev (5 Pages)', 'Hosting Included', 'Unlimited Edits', '24/7 Support & Updates', '+$250 to Add Blog'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-ink">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button to={RoutePath.CONTACT} variant="outline" className="w-full justify-center">Select Plan</Button>
            </div>
          </Reveal>
        </div>
      </div>

      <Section className="bg-brand-muted/5 py-32 md:py-48 relative overflow-hidden">
         
         <div className="grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
            <div className="md:col-span-4">
               <Reveal>
                 <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4 block">Knowledge Base</span>
                 <Heading level={2} className="mb-6 uppercase tracking-tighter">Pricing <br/>FAQ</Heading>
                 <Text className="mb-10 text-brand-muted">Details on our billing structures, terms, and what's included.</Text>
                 <Button to={RoutePath.CONTACT} variant="outline">Ask a Question</Button>
               </Reveal>
            </div>
            <div className="md:col-span-8">
                <Reveal delay={200}>
                 <div className="bg-white border border-brand-muted/20 p-8 md:p-12 rounded-3xl shadow-sm">
                    <AccordionItem title="What is included in the AI Lead System pilot?">
                       We set up a dedicated phone number, configure missed-call text-back, build a lead capture form, and set up a basic CRM pipeline so you never lose track of a lead.
                    </AccordionItem>
                    <AccordionItem title="What is included in the monthly website plan?">
                       Custom 5-page site, hosting, unlimited edits, 24/7 support, lifetime updates; extra pages $100 each.
                    </AccordionItem>
                    <AccordionItem title="Is there a contract for the monthly website plan?">
                       12-month minimum, then month-to-month.
                    </AccordionItem>
                    <AccordionItem title="What happens if I want to cancel the website plan?">
                       Remaining balance due within the 12 months; after that, 30 days notice.
                    </AccordionItem>
                 </div>
               </Reveal>
            </div>
         </div>
      </Section>

      <Section className="bg-white text-center py-40 border-t border-brand-muted/20">
        <Reveal>
           <Heading level={2} className="mb-6 uppercase tracking-tighter">Ready to stop losing leads?</Heading>
           <Text className="text-brand-muted mx-auto mb-12 max-w-xl">Tell us about your business and we'll recommend the optimal automation or website setup.</Text>
           <Button to={RoutePath.CONTACT} variant="primary">Contact Us</Button>
        </Reveal>
      </Section>
    </>
  );
};

export default Pricing;