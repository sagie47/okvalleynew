import React, { useState } from 'react';
import { Heading, Text, Button, Reveal } from '../components/Common';
import { motion } from 'motion/react';
import { trackEvent } from '../src/analytics';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const firstName = String(form.get('firstName') ?? '').trim();
    const lastName = String(form.get('lastName') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const inquiry = String(form.get('inquiry') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    if (!firstName || !lastName || !email || !inquiry || !message) {
      setStatus('error');
      return;
    }

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Inquiry: ${inquiry}`,
      '',
      message,
    ].join('\n');

    trackEvent('fallback_form_submit', { inquiry });
    window.location.href = `mailto:info@okvalleyweb.com?subject=${encodeURIComponent(`New website inquiry: ${inquiry}`)}&body=${encodeURIComponent(body)}`;
    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row pt-24 bg-white relative overflow-hidden">
      <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-brand-ink text-white flex flex-col justify-between relative m-4 md:m-8 rounded-[3rem] overflow-hidden">
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
              <span className="font-sans text-sm font-medium tracking-tight text-white/70 uppercase tracking-widest">Booking path</span>
            </div>
            <Heading level={1} className="mb-8 tracking-tightest leading-[0.95]">
              Book the <br />
              <span className="text-white/50">system call</span>
            </Heading>
            <Text className="text-white/70 max-w-md text-lg">
              The fastest route is still a direct call. Use the fallback form only if you need to send context before we talk.
            </Text>
          </Reveal>
        </div>

        <div className="mt-16 space-y-4 relative z-10">
          <Reveal delay={100}>
            <a
              href="https://cal.com/okvalley/30min"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('cal_click', { source: 'contact_primary_card' })}
              className="block bg-white text-brand-ink border border-white/10 p-8 rounded-3xl hover:bg-white/90 transition-all duration-500 group"
            >
              <span className="block font-sans text-sm font-medium tracking-tight text-brand-muted uppercase tracking-widest mb-2">Primary</span>
              <span className="text-xl md:text-2xl font-sans font-medium tracking-tight">Schedule 30-minute system call</span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <span className="block font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest mb-2">Email</span>
              <a href="mailto:info@okvalleyweb.com" className="text-xl md:text-2xl font-sans font-medium text-white tracking-tight">info@okvalleyweb.com</a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 group">
              <span className="block font-sans text-sm font-medium tracking-tight text-white/50 uppercase tracking-widest mb-2">Phone</span>
              <a href="tel:+17787694402" className="text-xl md:text-2xl font-sans font-medium text-white tracking-tight">(778) 769-4402</a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="lg:w-1/2 p-6 md:p-12 lg:p-24 bg-white relative flex flex-col justify-center">
        <Reveal delay={200}>
          <div className="mb-16">
            <Heading level={2} className="tracking-tight mb-4">Send context before the call</Heading>
            <p className="text-brand-muted font-sans text-lg">Use this only if the call is not the right first step. Keep it short and practical.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <input type="text" name="firstName" placeholder="First Name" className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
              </div>
              <div className="group relative">
                <input type="text" name="lastName" placeholder="Last Name" className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
              </div>
            </div>
            <div className="group relative">
              <input type="email" name="email" placeholder="Email Address" className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
            </div>
            <div className="group relative">
              <input type="tel" name="phone" placeholder="Phone Number" className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted transition-colors" />
            </div>
            <div className="group relative">
              <select name="inquiry" defaultValue="" className="w-full text-xl md:text-2xl font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black appearance-none rounded-none text-brand-muted focus:text-brand-ink transition-colors cursor-pointer">
                <option value="" disabled>What do you need?</option>
                <option value="ai" className="text-base font-sans">AI Lead System Pilot</option>
                <option value="web" className="text-base font-sans">Expansion Website</option>
                <option value="seo" className="text-base font-sans">Search Expansion</option>
                <option value="ads" className="text-base font-sans">Paid Demand Expansion</option>
                <option value="other" className="text-base font-sans">Other Inquiry</option>
              </select>
            </div>
            <div className="group relative">
              <textarea name="message" placeholder="What is breaking in your current lead flow?" rows={4} className="w-full text-lg font-sans font-medium tracking-tight text-brand-ink bg-transparent border-b border-black/10 py-4 focus:outline-none focus:border-black placeholder-brand-muted resize-none transition-colors"></textarea>
            </div>

            <p className="text-sm font-sans text-brand-muted">
              By sending this form, you agree that we may use your information to respond to the inquiry and prepare for follow-up. See the privacy policy for details.
            </p>

            <Button type="submit" variant="primary" className="w-full justify-center py-6 text-lg mt-8" icon>
              Send the details
            </Button>
            {status === 'success' && (
              <p className="text-sm font-sans text-brand-muted">Your email client opened with a prefilled inquiry.</p>
            )}
            {status === 'error' && (
              <p className="text-sm font-sans text-red-600">Complete the required fields before submitting.</p>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
