import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { RoutePath } from '../types';
import { Reveal } from './Common';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../src/analytics';

const BrandLogo = () => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 bg-brand-ink rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,93,143,0.2)]">
        <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
      </div>
      <span className="font-sans text-xl font-semibold tracking-tight text-brand-ink">
        OK Valley
      </span>
    </div>
    <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-brand-muted/5 rounded-full border border-black/5">
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-muted">Sprint-ready</span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Demos', path: RoutePath.DEMOS },
    { label: 'Work', path: RoutePath.WORK },
    { label: 'Services', path: RoutePath.SERVICES },
    { label: 'Pricing', path: RoutePath.PRICING },
    { label: 'About', path: RoutePath.ABOUT },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-700 ease-[0.16,1,0.3,1] ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className={`max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-6 transition-all duration-700 ease-[0.16,1,0.3,1] rounded-full border ${scrolled ? 'bg-white/95 backdrop-blur-2xl border-brand-accent/30 py-3 shadow-[0_8px_30px_rgba(255,93,143,0.15)]' : 'bg-gradient-to-r from-white/90 via-white/70 to-white/90 backdrop-blur-md border-brand-ink/10 py-4 shadow-sm'}`}>
          <NavLink to={RoutePath.HOME} className="group flex items-center gap-0 relative z-50">
            <BrandLogo />
          </NavLink>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-brand-muted/5 p-1 rounded-full border border-black/5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-all duration-300 ${isActive ? 'bg-white text-brand-ink shadow-sm' : 'text-brand-muted hover:text-brand-ink hover:bg-white/50'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <button
              onClick={() => {
                trackEvent('nav_demo_click', { source: 'desktop_nav' });
                navigate(RoutePath.DEMOS);
              }}
              className="text-sm font-medium tracking-tight bg-brand-ink text-white px-6 py-2.5 rounded-full hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,93,143,0.3)] transition-all duration-500 ease-[0.16,1,0.3,1] border border-transparent hover:border-brand-accent/50"
            >
              See Workflow Demos
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brand-ink relative z-50 p-2 bg-brand-muted/5 rounded-full border border-black/5">
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 flex flex-col justify-center p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={link.path}
                    className="text-4xl font-sans font-medium text-brand-ink hover:opacity-70 transition-opacity tracking-tight"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-8 w-full max-w-xs"
              >
                <button
                  onClick={() => {
                    trackEvent('nav_demo_click', { source: 'mobile_nav' });
                    navigate(RoutePath.DEMOS);
                    setIsOpen(false);
                  }}
                  className="w-full text-center py-4 bg-brand-ink text-white text-lg font-sans font-medium rounded-full hover:scale-[1.02] transition-transform duration-500 ease-[0.16,1,0.3,1]"
                >
                  See Workflow Demos
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-muted/5 text-brand-ink pt-24 px-6 md:px-12 pb-12 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-2">
            <Reveal>
              <BrandLogo />
              <p className="font-sans text-2xl md:text-3xl font-medium leading-tight max-w-md tracking-tight mt-8 text-brand-ink">
                Custom AI operators for agencies and businesses when template automation is not enough.
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-medium text-brand-muted tracking-tight">Explore</h4>
            <ul className="space-y-3 font-sans text-base">
              <li><NavLink to={RoutePath.DEMOS} className="text-brand-ink hover:opacity-70 transition-opacity">Workflow Demos</NavLink></li>
              <li><NavLink to={RoutePath.WORK} className="text-brand-ink hover:opacity-70 transition-opacity">Work</NavLink></li>
              <li><NavLink to={RoutePath.SERVICES} className="text-brand-ink hover:opacity-70 transition-opacity">Services</NavLink></li>
              <li><NavLink to={RoutePath.PRICING} className="text-brand-ink hover:opacity-70 transition-opacity">Pricing</NavLink></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-medium text-brand-muted tracking-tight">Contact</h4>
            <ul className="space-y-3 font-sans text-base">
              <li><a href="mailto:info@okvalleyweb.com" className="text-brand-ink hover:opacity-70 transition-opacity">info@okvalleyweb.com</a></li>
              <li><a href="tel:+17787694402" className="text-brand-ink hover:opacity-70 transition-opacity">(778) 769-4402</a></li>
              <li><a href="https://cal.com/okvalley/30min" target="_blank" rel="noreferrer" className="text-brand-ink hover:opacity-70 transition-opacity">Book a workflow call</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-black/5 pt-8 gap-4">
          <span className="font-sans text-sm text-brand-muted tracking-tight">Copyright 2026 OK Valley Web. All rights reserved.</span>
          <div className="flex gap-6">
            <NavLink to={RoutePath.PRIVACY} className="font-sans text-sm text-brand-muted tracking-tight hover:text-brand-ink transition-colors">Privacy Policy</NavLink>
            <NavLink to={RoutePath.TERMS} className="font-sans text-sm text-brand-muted tracking-tight hover:text-brand-ink transition-colors">Terms of Service</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-brand-accent selection:text-white font-sans text-brand-ink">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};
