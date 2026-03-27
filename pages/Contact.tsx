import React from 'react';
import { Heading, Text, Button, Reveal } from '../components/Common';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row pt-24 bg-white relative overflow-hidden">
      {/* Left Info */}
      <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-brand-ink text-white flex flex-col justify-between relative m-4 md:m-8 rounded-[3rem] overflow-hidden">
        {/* Exotic background animations */}
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

        <div className="relative z-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
               <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
               <span className="font-sans text-sm font-medium tracking-tight text-white/70 uppercase tracking-widest">Communication Link</span>
            </div>
            <Heading level={1} className="mb-8 tracking-tightest leading-[0.95]">
              Let's <br/>
              <span className="text-white/50">Talk</span>
            </Heading>
            <Text className="text-white/70 max-w-md text-lg">
              Reach out to discuss how we can help your business grow. We respond to all inquiries within 24 hours.
            </Text>
          </Reveal>
        </div>
        
        <div className="mt-16 space-y-4 relative z-10">
           <Reveal delay={100}>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer group" onClick={() => window.location.href='mailto:info@okvalleyweb.com'}>
               <span className="block font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest mb-2">Email Us</span>
               <a href="mailto:info@okvalleyweb.com" className="text-xl md:text-2xl font-sans font-medium text-white tracking-tight">info@okvalleyweb.com</a>
             </div>
           </Reveal>
           <Reveal delay={200}>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer group" onClick={() => window.location.href='tel:+17787694402'}>
               <span className="block font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest mb-2">Call Us</span>
               <a href="tel:+17787694402" className="text-xl md:text-2xl font-sans font-medium text-white tracking-tight">(778) 769-4402</a>
             </div>
           </Reveal>
           <Reveal delay={300}>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer group" onClick={() => window.open('https://cal.com/okvalley/30min', '_blank')}>
               <span className="block font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest mb-2">Book a Call</span>
               <span className="text-xl md:text-2xl font-sans font-medium text-white tracking-tight">Schedule 30-Min Discovery</span>
             </div>
           </Reveal>
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-white relative flex flex-col justify-center">
        <Reveal delay={200}>
          <div className="mb-16">
             <Heading level={2} className="tracking-tight mb-4">Send a Message</Heading>
             <p className="text-brand-muted font-sans text-lg">Fill out the form below and we'll get back to you to discuss your business goals.</p>
          </div>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="group relative">
                 <input type="text" placeholder="First Name" className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
               </div>
               <div className="group relative">
                 <input type="text" placeholder="Last Name" className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
               </div>
            </div>
            <div className="group relative">
              <input type="email" placeholder="Email Address" className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
            </div>
            <div className="group relative">
               <input type="tel" placeholder="Phone Number" className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
            </div>
            <div className="group relative">
              <select className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black appearance-none rounded-none text-brand-muted focus:text-brand-ink transition-colors cursor-pointer">
                 <option value="" disabled selected>What are you interested in?</option>
                 <option value="ai" className="text-base font-sans">AI Lead Systems</option>
                 <option value="web" className="text-base font-sans">Websites</option>
                 <option value="seo" className="text-base font-sans">SEO & Search</option>
                 <option value="ads" className="text-base font-sans">Google Ads</option>
                 <option value="other" className="text-base font-sans">Other Inquiry</option>
              </select>
            </div>
            <div className="group relative">
               <textarea placeholder="Tell us about your business" rows={4} className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted resize-none transition-colors"></textarea>
            </div>
            
            <Button variant="primary" className="w-full justify-center py-6 text-lg mt-8" icon>Send Message</Button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;