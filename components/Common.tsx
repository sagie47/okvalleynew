import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { motion, useInView, useAnimation } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  to?: string;
  className?: string;
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  className = '', 
  icon = false,
  ...props 
}) => {
  const baseStyles = "group relative inline-flex items-center justify-center transition-all duration-500 ease-[0.16,1,0.3,1] focus:outline-none overflow-hidden rounded-full font-medium tracking-tight whitespace-nowrap";
  const linkProps = props as React.ComponentProps<typeof Link>;
  
  const variants = {
    primary: "bg-brand-ink text-white px-6 py-3 text-sm hover:scale-[1.02] hover:shadow-lg hover:shadow-black/5",
    secondary: "bg-brand-muted/5 text-brand-ink px-6 py-3 text-sm hover:bg-black/5",
    outline: "bg-transparent text-brand-ink border border-black/10 px-6 py-3 text-sm hover:border-black/30",
    ghost: "bg-transparent text-brand-ink px-6 py-3 text-sm hover:bg-black/5",
    link: "bg-transparent text-brand-ink p-0 text-base hover:opacity-70 rounded-none"
  };

  const combinedClasses = cn(baseStyles, variants[variant], className);

  const content = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {icon && <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string; fullWidth?: boolean }> = ({ 
  children, 
  className = '',
  id,
  fullWidth = false
}) => (
  <section id={id} className={cn(`py-24 md:py-32 ${fullWidth ? 'px-0' : 'px-6 md:px-12 max-w-[1400px]'} w-full mx-auto relative`, className)}>
    {children}
  </section>
);

export const PageHeader: React.FC<{ 
  title: React.ReactNode; 
  subtitle?: React.ReactNode; 
  badge?: string;
  className?: string;
}> = ({ title, subtitle, badge, className = '' }) => (
  <section className={cn("relative pt-48 pb-32 px-6 md:px-12 overflow-hidden bg-brand-ink text-white", className)}>
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
    
    <div className="max-w-[1400px] mx-auto w-full relative z-10">
      <Reveal>
        {badge && (
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
            <span className="font-sans text-sm font-medium tracking-tight text-white/70 uppercase tracking-widest">{badge}</span>
          </div>
        )}
        <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-sans font-semibold leading-[0.95] tracking-tightest mb-8">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-sans text-white/70 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  </section>
);

export const ImageFrame: React.FC<{ src: string; alt?: string; className?: string; label?: string }> = ({ src, alt, className = '', label }) => (
  <div className={cn(`relative overflow-hidden bg-brand-muted/5 rounded-3xl group`, className)}>
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105" />
    {label && (
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-sans font-medium tracking-tight text-brand-ink z-10">
        {label}
      </div>
    )}
  </div>
);

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 'mega' | 'display';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level = 2, 
  className = '' 
}) => {
  if (level === 'mega') {
     return (
      <h1 className={cn(`text-[12vw] leading-[0.9] font-sans font-semibold tracking-tightest text-brand-ink select-none`, className)}>
        {children}
      </h1>
     );
  }
  
  if (level === 'display') {
    return (
     <h1 className={cn(`text-6xl md:text-8xl lg:text-9xl font-sans font-semibold leading-[0.95] tracking-tightest text-brand-ink`, className)}>
       {children}
     </h1>
    );
 }

  const Tag = `h${typeof level === 'number' ? level : 2}` as React.ElementType;
  const sizes: Record<number, string> = {
    1: "text-5xl md:text-7xl font-sans font-semibold tracking-tightest leading-[1.05] text-brand-ink",
    2: "text-4xl md:text-5xl font-sans font-medium tracking-tight leading-[1.1] text-brand-ink",
    3: "text-2xl md:text-3xl font-sans font-medium tracking-tight leading-snug text-brand-ink",
    4: "text-sm font-medium tracking-widest uppercase text-brand-muted font-sans mb-4 block"
  };

  return <Tag className={cn(sizes[level as number], className)}>{children}</Tag>;
};

export const Text: React.FC<{ children: React.ReactNode; className?: string; size?: 'sm' | 'base' | 'lg' | 'xl' }> = ({ 
  children, 
  className = '',
  size = 'base'
}) => {
  const sizes = {
    sm: "text-sm text-brand-muted",
    base: "text-base leading-relaxed text-brand-muted max-w-prose",
    lg: "text-lg md:text-xl leading-relaxed text-brand-muted max-w-2xl font-normal",
    xl: "text-xl md:text-2xl leading-snug font-normal text-brand-muted max-w-3xl tracking-tight"
  };
  return (
    <p className={cn(`font-sans`, sizes[size], className)}>
      {children}
    </p>
  );
};

export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, x: -15, rotate: -3, scale: 0.95, filter: 'blur(12px)' }}
      animate={isInView ? { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1, filter: 'blur(0px)' } : { opacity: 0, y: 50, x: -15, rotate: -3, scale: 0.95, filter: 'blur(12px)' }}
      transition={{ duration: 1.2, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-8 text-left group transition-all"
      >
        <span className="font-sans text-xl md:text-2xl font-medium tracking-tight text-brand-ink group-hover:opacity-70 transition-opacity">{title}</span>
        <span className={cn(`transform transition-transform duration-500 ease-[0.16,1,0.3,1] text-brand-ink opacity-50`, isOpen && 'rotate-180')}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="max-w-3xl pb-10">
           <Text size="lg">{children}</Text>
        </div>
      </motion.div>
    </div>
  );
};

export const Marquee: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse = false }) => {
  return (
    <div className="relative flex overflow-hidden w-full border-y border-brand-ink/10 bg-white py-12">
      <motion.div 
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="mx-12 flex items-center gap-6">
             <span className="text-4xl md:text-6xl font-sans font-bold text-transparent text-stroke opacity-40 hover:opacity-100 hover:text-brand-ink hover:text-stroke-0 transition-all duration-500 cursor-default uppercase">
               {item}
             </span>
             <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
          </div>
        ))}
      </motion.div>
      <style>{`
        .text-stroke {
          -webkit-text-stroke: 1px rgba(17,17,17,0.5);
          color: transparent;
        }
        .hover\\:text-stroke-0:hover {
          -webkit-text-stroke: 0px transparent;
        }
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};
