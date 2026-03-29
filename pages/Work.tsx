import React from 'react';
import { Section, Heading, Text, Button, Reveal, PageHeader } from '../components/Common';
import { Project, RoutePath } from '../types';
import { useNavigate } from 'react-router-dom';

const projects: Project[] = [
  { id: 'tutt-street', title: 'Tutt Street Chiro', category: 'Local SEO / PPC', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600', outcome: '+60% Leads' },
  { id: 'growth-arc', title: 'Growth Arc', category: 'Consulting / Outbound', image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1600', outcome: 'Pipeline System' },
  { id: 'storage-express', title: 'Storage Express', category: 'Ops System / Web Build', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=1600', outcome: 'Unified Ops' },
  { id: 'kelowna-boat', title: 'Kelowna Boat Detailing', category: 'Web Dev', image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=1600', outcome: '+Bookings' },
];

const Work: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader 
        badge="Our Work"
        title={<>Client <br/>Results</>}
      />

      <section className="px-6 md:px-12 py-32 bg-white max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
               <div 
                 onClick={() => navigate(`/work/${project.id}`)}
                 className="group cursor-pointer"
               >
                 {/* Image */}
                 <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-6 bg-brand-muted/5">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                 </div>
                 
                 {/* Content */}
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
                   <div>
                     <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-brand-ink mb-2 group-hover:opacity-70 transition-opacity">{project.title}</h3>
                     <p className="text-brand-muted font-sans text-base">{project.category}</p>
                   </div>
                   <div className="flex flex-wrap gap-2">
                     <span className="px-4 py-2 rounded-full bg-brand-muted/5 text-sm font-medium tracking-tight text-brand-ink">
                       {project.outcome}
                     </span>
                   </div>
                 </div>
               </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-brand-ink text-white text-center rounded-[3rem] mx-4 md:mx-8 mb-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-semibold tracking-tightest mb-8 leading-[1.05]">
              Want to see <br/>
              <span className="text-white/50">how it works?</span>
            </h2>
            <Button to={RoutePath.DEMOS} variant="secondary" className="bg-white text-brand-ink hover:bg-white/90" icon>
              See Live Demos
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Work;
