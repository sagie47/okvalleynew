import React from 'react';
import { Section, Heading, Text, Button, Reveal, PageHeader } from '../components/Common';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    slug: 'allocators-premium',
    title: 'The Allocator’s Premium',
    date: 'NOV 15',
    readTime: '6 min',
    tag: 'Economics',
    image: 'https://picsum.photos/1200/800?random=21'
  },
  {
    slug: 'real-ai-revolution',
    title: 'The Real AI Revolution Is Answering the Phone',
    date: 'NOV 02',
    readTime: '7 min',
    tag: 'Operations',
    image: 'https://picsum.photos/1200/800?random=12'
  },
  {
    slug: 'why-speed-is-revenue',
    title: 'Why Speed is Revenue',
    date: 'OCT 12',
    readTime: '6 min',
    tag: 'Performance',
    image: 'https://picsum.photos/1200/800?random=11'
  },
  {
    slug: 'seo-is-broken',
    title: 'SEO is Broken. Here is the Fix.',
    date: 'SEP 14',
    readTime: '8 min',
    tag: 'Strategy',
    image: 'https://picsum.photos/1200/800?random=13'
  }
];

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader 
        title="INSIGHTS"
        subtitle="Strategies and systems for growing local service businesses."
      />

      <div className="w-full border-t border-brand-ink">
        {articles.map((article, index) => (
          <div 
            key={article.slug}
            onClick={() => navigate(`/blog/${article.slug}`)}
            className="group relative border-b border-brand-ink hover:bg-brand-ink hover:text-white transition-colors duration-300 cursor-pointer overflow-hidden"
          >
            {/* Hover Image Reveal */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 hidden md:block mix-blend-difference">
               <img src={article.image} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 grid grid-cols-12 items-center relative z-20">
               <div className="col-span-12 md:col-span-2 font-sans font-bold uppercase tracking-widest text-xs opacity-50 mb-4 md:mb-0">
                  {article.date}
               </div>
               <div className="col-span-12 md:col-span-7">
                  <h2 className="text-3xl md:text-6xl font-sans font-medium uppercase leading-none group-hover:translate-x-4 transition-transform duration-300">
                     {article.title}
                  </h2>
               </div>
               <div className="col-span-6 md:col-span-2 flex items-center mt-4 md:mt-0">
                  <span className="border border-brand-ink group-hover:border-white px-2 py-1 font-sans text-xs font-bold uppercase tracking-widest">
                     {article.tag}
                  </span>
               </div>
               <div className="col-span-6 md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-300" />
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <Section className="bg-brand-muted/5 text-center py-24">
         <Heading level={2} className="mb-8">Get the newsletter.</Heading>
         <Text className="mb-8">No spam. Only high-value tactics for local trades.</Text>
         <div className="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="EMAIL ADDRESS" className="flex-grow bg-transparent border-b border-brand-ink py-2 font-sans uppercase focus:outline-none" />
            <Button variant="ghost">Subscribe</Button>
         </div>
      </Section>
    </>
  );
};

export default Blog;