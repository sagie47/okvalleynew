import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Section, Heading, Text, Button, Reveal } from '../components/Common';
import { RoutePath } from '../types';
import { ArrowLeft, ExternalLink, Activity, Target, Zap, Users, Mail, Linkedin, Database, Layout, Workflow, BarChart3 } from 'lucide-react';

// Data Store for Project Details based on real testimonials/cases
const projectData: Record<string, any> = {
  'tutt-street': {
    title: 'Tutt Street Family Chiropractic',
    category: 'Local SEO / Google Ads',
    year: '2024',
    outcome: '+60% Leads',
    heroImage: 'https://picsum.photos/1600/900?random=1',
    description: "We rebuilt Tutt Street Family Chiropractic’s acquisition system around two pillars: high-intent Google Search traffic and compounding local visibility.",
    challenge: "Performance had plateaued at ~5 leads/week with fragmented ad spend. The clinic needed to grow consistent 'new patient' bookings while protecting lead quality and profitability.",
    solution: "We consolidated the $1,500/mo budget into high-intent 'core revenue' ad groups, implemented negative keyword themes to cut waste, and optimized the landing page to drive qualified bookings.",
    stats: [
      { label: "Lead Growth", value: "+60%" },
      { label: "Patient LTV", value: "~$900" },
      { label: "Ad Spend", value: "Stable" }
    ],
    gallery: [
      'https://picsum.photos/800/1000?random=101',
      'https://picsum.photos/800/1000?random=102'
    ],
    detailedContent: (
      <div className="space-y-24">
        {/* Snapshot & Challenge */}
        <div>
          <h3 className="font-sans text-3xl font-bold uppercase mb-8 border-b-2 border-brand-muted/20 pb-4">Client Snapshot</h3>
          <Text className="mb-6">
            Tutt Street Family Chiropractic is a local Kelowna clinic offering chiropractic care with a focus on common pain conditions (back pain, neck pain, etc.) and ongoing patient care.
          </Text>
          <div className="bg-brand-muted/10 p-6 md:p-8 border-l-4 border-brand-accent">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-brand-ink">Business Economics</h4>
            <ul className="space-y-2 font-sans text-sm text-brand-muted mb-4">
               <li><span className="opacity-50">Initial Visit:</span> ~$170 (paid in-clinic)</li>
               <li><span className="opacity-50">Estimated LTV:</span> ~$900</li>
            </ul>
            <p className="text-sm font-medium">Strategy: Optimize for <em>qualified bookings</em> (not just cheap leads).</p>
          </div>
        </div>
    
        <div>
          <h3 className="font-sans text-3xl font-bold uppercase mb-8 border-b-2 border-brand-muted/20 pb-4">The Challenge</h3>
          <Text className="mb-8">
            The clinic already had an active Google Ads account, but performance had plateaued. The core issue wasn’t “no demand.” It was <strong>uneven efficiency</strong>: budget was being spread across ad groups/queries that weren’t pulling their weight.
          </Text>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
             <div className="p-4 border border-brand-muted/20 bg-white">
                <span className="block text-[10px] font-bold uppercase text-brand-accent mb-1 tracking-widest">Ad Spend</span>
                <span className="font-sans text-xl font-bold">~$1,500/mo</span>
             </div>
             <div className="p-4 border border-brand-muted/20 bg-white">
                <span className="block text-[10px] font-bold uppercase text-brand-accent mb-1 tracking-widest">Lead Vol</span>
                <span className="font-sans text-xl font-bold">~5/week</span>
             </div>
             <div className="p-4 border border-brand-muted/20 bg-white">
                <span className="block text-[10px] font-bold uppercase text-brand-accent mb-1 tracking-widest">Target</span>
                <span className="font-sans text-xl font-bold">~8/week</span>
             </div>
             <div className="p-4 border border-brand-muted/20 bg-white">
                <span className="block text-[10px] font-bold uppercase text-brand-accent mb-1 tracking-widest">Conv. Rate</span>
                <span className="font-sans text-xl font-bold">5–7%</span>
             </div>
          </div>

          <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-4">Core Objectives</h4>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="font-sans font-bold text-brand-accent text-xl leading-none mt-1">01</span>
              <span className="font-sans text-brand-muted">Increase weekly leads from ~5 → ~8 <strong>without</strong> tanking lead quality.</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-sans font-bold text-brand-accent text-xl leading-none mt-1">02</span>
              <span className="font-sans text-brand-muted">Improve conversion rate and reduce wasted spend (irrelevant queries).</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="font-sans font-bold text-brand-accent text-xl leading-none mt-1">03</span>
              <span className="font-sans text-brand-muted">Strengthen local visibility so demand compounds outside paid ads (Local SEO).</span>
            </li>
          </ul>
        </div>
    
        {/* Part 1: Google Ads */}
        <div>
          <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">01</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">Google Ads Optimization</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="group">
               <h4 className="font-sans text-lg font-bold uppercase mb-4 flex items-center gap-3 text-brand-accent">
                  1. Tracking & Lead Quality
               </h4>
               <Text className="pl-4 border-l border-brand-muted/20 group-hover:border-brand-accent transition-colors">
                  We tightened measurement so optimization decisions weren’t based on noisy data. Confirmed primary conversions reflect real intent (booking form submit) and built a "lead quality checklist" for the team.
               </Text>
            </div>
    
            <div className="group">
               <h4 className="font-sans text-lg font-bold uppercase mb-4 flex items-center gap-3 text-brand-accent">
                  2. Campaign Structure
               </h4>
               <Text className="pl-4 border-l border-brand-muted/20 group-hover:border-brand-accent transition-colors">
                  We reallocated budget toward top-performing themes (core revenue drivers) and prioritized high-intent queries like "find a chiropractor" over vague research traffic. Reduced fragmentation from 8 ad groups to the core 3.
               </Text>
            </div>
    
            <div className="group">
               <h4 className="font-sans text-lg font-bold uppercase mb-4 flex items-center gap-3 text-brand-accent">
                  3. Query Control
               </h4>
               <Text className="pl-4 border-l border-brand-muted/20 group-hover:border-brand-accent transition-colors">
                  Weekly search term reviews to cut irrelevant traffic. Added negative keyword themes (free, school, salary, jobs) to protect core intent terms.
               </Text>
            </div>
    
            <div className="group">
               <h4 className="font-sans text-lg font-bold uppercase mb-4 flex items-center gap-3 text-brand-accent">
                  4. Ad Copy & Assets
               </h4>
               <Text className="pl-4 border-l border-brand-muted/20 group-hover:border-brand-accent transition-colors">
                  Rewrote RSA headlines to focus on location + service ("Kelowna Chiropractor") and high-intent outcomes ("Back Pain Relief"). This pre-qualifies clicks and raises CTR.
               </Text>
            </div>

            <div className="group">
               <h4 className="font-sans text-lg font-bold uppercase mb-4 flex items-center gap-3 text-brand-accent">
                  5. Landing Page CRO
               </h4>
               <Text className="pl-4 border-l border-brand-muted/20 group-hover:border-brand-accent transition-colors">
                  Reduced friction with a single dominant CTA ("Book Initial Visit") and added trust blocks above the fold (reviews, credentials, clinic location).
               </Text>
            </div>
          </div>
        </div>
    
        {/* Part 2: Local SEO */}
        <div>
          <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">02</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">Local SEO Strategy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white border border-brand-muted/20 p-8 hover:border-brand-ink transition-colors">
                <h4 className="font-sans text-lg font-bold uppercase mb-4">Google Business Profile</h4>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Tightened categories, optimized service descriptions, and built a consistent review generation system to boost Map Pack visibility.</p>
             </div>
             <div className="bg-white border border-brand-muted/20 p-8 hover:border-brand-ink transition-colors">
                <h4 className="font-sans text-lg font-bold uppercase mb-4">On-Page Local SEO</h4>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Built pages around high-intent local queries (e.g., "Back pain chiropractor Kelowna") with clear intent matching and local signals.</p>
             </div>
             <div className="bg-white border border-brand-muted/20 p-8 hover:border-brand-ink transition-colors">
                <h4 className="font-sans text-lg font-bold uppercase mb-4">Local Authority</h4>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Ensured NAP consistency across directories and focused on healthcare-relevant citations rather than spammy blasts.</p>
             </div>
             <div className="bg-white border border-brand-muted/20 p-8 hover:border-brand-ink transition-colors">
                <h4 className="font-sans text-lg font-bold uppercase mb-4">Technical Basics</h4>
                <p className="font-sans text-brand-muted text-sm leading-relaxed">Improved page speed, Core Web Vitals, and added Schema markup (LocalBusiness/MedicalBusiness).</p>
             </div>
          </div>
        </div>
    
        {/* Results & Next Steps */}
        <div className="bg-brand-muted/5 border border-brand-muted/20 text-brand-ink p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent opacity-20 blur-[100px] rounded-full"></div>
           <div className="relative z-10">
              <h3 className="font-sans text-3xl font-bold uppercase mb-6">Results & Protocol</h3>
              <Text className="text-brand-muted mb-8 max-w-3xl">
                We rebuilt Tutt Street Family Chiropractic’s acquisition system around two pillars: high-intent Google Search traffic and compounding local visibility. The clinic established a scalable path from ~5 leads/week toward an 8 leads/week target—without relying on bigger spend.
              </Text>
              
              <div className="border-t border-brand-muted/20 pt-8 mt-8">
                 <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 text-brand-accent">Next Steps (Practical Plan)</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-brand-ink rounded-full"></div>
                       <span className="font-sans text-sm text-brand-muted">Double down on top 3 ad groups</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-brand-ink rounded-full"></div>
                       <span className="font-sans text-sm text-brand-muted">Run controlled expansion into related terms</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-brand-ink rounded-full"></div>
                       <span className="font-sans text-sm text-brand-muted">Raise conversion rate via landing page CRO</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1 h-1 bg-brand-ink rounded-full"></div>
                       <span className="font-sans text-sm text-brand-muted">Increase GBP review velocity</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  'growth-arc': {
    title: 'Growth Arc Advisors',
    category: 'Consulting Strategy',
    year: '2024',
    outcome: 'Pipeline System',
    heroImage: 'https://picsum.photos/1600/900?random=2',
    description: "We built a repeatable outbound engine and executive positioning strategy for a specialized consultancy serving the Materials & Mining sector.",
    challenge: "Strong consulting capability but inconsistent pipeline. Referrals were lumpy and outbound was too broad, generic, and lacked a repeatable system.",
    solution: "We defined a tight ICP wedge, packaged a 'Diagnostic' entry offer, and deployed a precision multi-channel outreach system targeting operational leaders.",
    stats: [
      { label: "Targeting", value: "Precision" },
      { label: "Reply Rate", value: "4-10%" },
      { label: "Entry Offer", value: "Diagnostic" }
    ],
    gallery: [
      'https://picsum.photos/800/1000?random=201',
      'https://picsum.photos/800/1000?random=202'
    ],
    detailedContent: (
      <div className="space-y-24">
        {/* Snapshot & Challenge */}
        <div>
          <h3 className="font-sans text-3xl font-bold uppercase mb-8 border-b-2 border-brand-muted/20 pb-4">Client Snapshot</h3>
          <Text className="mb-6">
            Growth Arc Advisors helps Materials leaders (Metals, Mining, Chemicals) solve operational bottlenecks like chronic downtime, yield loss, and cost creep.
          </Text>
          <div className="bg-brand-muted/10 p-6 md:p-8 border-l-4 border-brand-accent">
             <div className="flex flex-col md:flex-row gap-8">
                <div>
                   <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-brand-ink">Context</h4>
                   <p className="text-sm font-sans text-brand-muted max-w-sm">Solo operator with scarce time. Long sales cycles with risk-averse buyers (COOs, VP Ops) who demand credibility.</p>
                </div>
                <div>
                   <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-brand-ink">Constraints</h4>
                   <ul className="space-y-1 font-sans text-sm text-brand-muted">
                      <li>/ Need to sound credible, not "salesy"</li>
                      <li>/ Outreach must be precise</li>
                      <li>/ No marketing fluff</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>

        <div>
           <h3 className="font-sans text-3xl font-bold uppercase mb-8 border-b-2 border-brand-muted/20 pb-4">The Challenge</h3>
           <Text className="mb-8">
              Despite deep expertise, the pipeline was reliant on lumpy referrals. Outbound efforts were unfocused—targeting too broadly with generic messaging that failed to resonate with technical leaders.
           </Text>
           <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-4">Project Goals</h4>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-brand-muted/20 p-6 bg-white">
                 <span className="text-brand-accent font-bold text-xl block mb-2">01</span>
                 <p className="font-sans text-sm">Define a tight ICP & Offer that resonates with Materials execs.</p>
              </div>
              <div className="border border-brand-muted/20 p-6 bg-white">
                 <span className="text-brand-accent font-bold text-xl block mb-2">02</span>
                 <p className="font-sans text-sm">Build a repeatable outbound engine (Email + LinkedIn).</p>
              </div>
              <div className="border border-brand-muted/20 p-6 bg-white">
                 <span className="text-brand-accent font-bold text-xl block mb-2">03</span>
                 <p className="font-sans text-sm">Create executive-level messaging that builds authority.</p>
              </div>
           </div>
        </div>

        {/* Phase 1: Strategic Architecture */}
        <div>
           <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">01</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">Strategic Architecture</h2>
           </div>

           <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-brand-muted/20 pb-12">
                 <div className="md:col-span-4">
                    <h4 className="font-sans text-xl font-bold uppercase mb-2 flex items-center gap-2">
                       <Target className="text-brand-accent w-5 h-5" /> ICP Discovery
                    </h4>
                    <p className="font-sans text-xs text-brand-muted/60 uppercase tracking-widest">The "Wedge"</p>
                 </div>
                 <div className="md:col-span-8">
                    <p className="font-sans text-brand-muted mb-4">We broke "Materials" into specific segments with distinct buying dynamics:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <li className="bg-brand-muted/5 p-4 border-l-2 border-brand-ink"><strong className="block text-xs uppercase mb-1">Metals</strong> Throughput & Energy focus</li>
                       <li className="bg-brand-muted/5 p-4 border-l-2 border-brand-ink"><strong className="block text-xs uppercase mb-1">Mining</strong> Reliability & Safety focus</li>
                       <li className="bg-brand-muted/5 p-4 border-l-2 border-brand-ink"><strong className="block text-xs uppercase mb-1">Chemicals</strong> Process Stability focus</li>
                    </ul>
                    <div className="mt-6 p-4 border border-brand-muted/20 bg-white">
                       <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-accent block mb-2">Trigger Events</span>
                       <p className="font-sans text-sm">We focused prospecting on: Leadership changes, major outages, or capex planning seasons.</p>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                 <div className="md:col-span-4">
                    <h4 className="font-sans text-xl font-bold uppercase mb-2 flex items-center gap-2">
                       <Zap className="text-brand-accent w-5 h-5" /> Offer Packaging
                    </h4>
                    <p className="font-sans text-xs text-brand-muted/60 uppercase tracking-widest">Low Friction Entry</p>
                 </div>
                 <div className="md:col-span-8">
                    <p className="font-sans text-brand-muted mb-6">
                       We turned "consulting" into a clean first step. Instead of pitching a big project, we pitched a <strong>Diagnostic</strong>.
                    </p>
                    <div className="border border-brand-ink p-6 relative overflow-hidden group hover:bg-brand-ink hover:text-white transition-colors duration-300">
                       <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 uppercase">Core Offer</span>
                       <h5 className="font-sans text-2xl font-bold uppercase mb-2">Operational Constraint Diagnostic</h5>
                       <p className="font-sans text-sm opacity-80 mb-4">A 2-week engagement to map value traps, prioritize opportunities, and build a 90-day plan.</p>
                       <ul className="flex flex-wrap gap-2">
                          <li className="text-[10px] border border-current px-2 py-1 uppercase">Stakeholder Interviews</li>
                          <li className="text-[10px] border border-current px-2 py-1 uppercase">ROI Modeling</li>
                          <li className="text-[10px] border border-current px-2 py-1 uppercase">Execution Roadmap</li>
                       </ul>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Phase 2: Execution Engine */}
        <div>
           <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">02</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">Execution Engine</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-muted/5 border border-brand-muted/20 text-brand-ink p-8 relative overflow-hidden">
                 <Mail className="absolute top-8 right-8 text-brand-accent w-8 h-8 opacity-50" />
                 <h4 className="font-sans text-xl font-bold uppercase mb-6">Email Strategy</h4>
                 <ul className="space-y-6">
                    <li>
                       <strong className="block text-brand-accent text-xs uppercase tracking-widest mb-1">Targeting</strong>
                       <span className="text-brand-muted text-sm">Mapped 3-5 stakeholders per account (multi-threading) to avoid single points of failure.</span>
                    </li>
                    <li>
                       <strong className="block text-brand-accent text-xs uppercase tracking-widest mb-1">The Copy</strong>
                       <span className="text-brand-muted text-sm">Plain text, low-link, high-signal. Personal openings tied to real triggers (e.g., "Saw the new plant expansion...").</span>
                    </li>
                    <li>
                       <strong className="block text-brand-accent text-xs uppercase tracking-widest mb-1">Optimization</strong>
                       <span className="text-brand-muted text-sm">Optimized for reply quality over opens. Goal: Meetings with operators, not "innovation" teams.</span>
                    </li>
                 </ul>
              </div>

              <div className="border border-brand-muted/20 p-8 bg-white relative overflow-hidden">
                 <Linkedin className="absolute top-8 right-8 text-brand-accent w-8 h-8 opacity-50" />
                 <h4 className="font-sans text-xl font-bold uppercase mb-6">LinkedIn Strategy</h4>
                 <p className="font-sans text-brand-muted text-sm mb-6">
                    Used to build authority and warm up the market. We shifted the profile from "Consultant" to "Problem Solver".
                 </p>
                 <div className="space-y-4">
                    <div className="bg-brand-muted/5 p-4">
                       <span className="block text-xs font-bold uppercase mb-1">Content Pillar 1</span>
                       <span className="text-sm">Reliability / Downtime Economics (Simple math, high signal)</span>
                    </div>
                    <div className="bg-brand-muted/5 p-4">
                       <span className="block text-xs font-bold uppercase mb-1">Content Pillar 2</span>
                       <span className="text-sm">Modernization without Dashboard Theater (What actually works)</span>
                    </div>
                    <div className="bg-brand-muted/5 p-4">
                       <span className="block text-xs font-bold uppercase mb-1">Content Pillar 3</span>
                       <span className="text-sm">Capex ROI Narratives (How to win internal approval)</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Results */}
        <div className="bg-brand-muted/5 p-8 md:p-12 relative">
           <div className="relative z-10">
              <h3 className="font-sans text-3xl font-bold uppercase mb-6">System Results</h3>
              <Text className="mb-8 max-w-3xl">
                 Within the 8-week sprint, Growth Arc Advisors moved from ad-hoc outreach to a <strong>repeatable corporate pipeline system</strong>.
              </Text>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 <div className="bg-white p-6 shadow-sm">
                    <span className="block font-sans text-3xl font-bold text-brand-accent mb-1">Clear</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-ink">ICP Triggers</span>
                 </div>
                 <div className="bg-white p-6 shadow-sm">
                    <span className="block font-sans text-3xl font-bold text-brand-accent mb-1">Consistent</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-ink">Meetings</span>
                 </div>
                 <div className="bg-white p-6 shadow-sm">
                    <span className="block font-sans text-3xl font-bold text-brand-accent mb-1">High</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-ink">Trust Profile</span>
                 </div>
                 <div className="bg-white p-6 shadow-sm">
                    <span className="block font-sans text-3xl font-bold text-brand-accent mb-1">Paid</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-ink">Diagnostics</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  'storage-express': {
    title: 'Storage Express',
    category: 'Ops System / Web Build',
    year: '2023',
    outcome: 'Unified Ops',
    heroImage: 'https://picsum.photos/1600/900?random=3',
    description: "We consolidated a fragmented web of forms and spreadsheets into a single, automated operating system while rebuilding the public-facing website for conversion.",
    challenge: "The business had grown around a patchwork of disconnected Google Forms and spreadsheets, leading to duplicate data, wasted admin time, and lost leads.",
    solution: "We mapped the operational workflow, built a unified database (Single Source of Truth), standardized intake forms, and launched a new website that feeds directly into this system.",
    stats: [
      { label: "Admin Time", value: "-40%" },
      { label: "Data Quality", value: "100%" },
      { label: "Lead Capture", value: "Auto" }
    ],
    gallery: [
      'https://picsum.photos/800/1000?random=301',
      'https://picsum.photos/800/1000?random=302'
    ],
    detailedContent: (
      <div className="space-y-24">
        {/* Context & Problem */}
        <div>
          <h3 className="font-sans text-3xl font-bold uppercase mb-8 border-b-2 border-brand-muted/20 pb-4">Client Snapshot</h3>
          <Text className="mb-6">
             Storage Express is a local storage operator managing inbound leads, move-ins/move-outs, unit availability, and maintenance requests.
          </Text>
          <div className="bg-brand-muted/10 p-6 md:p-8 border-l-4 border-brand-accent mb-12">
             <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-4 text-brand-ink">The Situation</h4>
             <p className="text-sm font-sans text-brand-muted max-w-lg mb-4">
                The business was running on a patchwork of disconnected tools: Google Forms, multiple spreadsheets with overlapping data, and manual copy/paste workflows.
             </p>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 text-xs font-sans border border-brand-muted/20">❌ Duplicate Data</div>
                <div className="bg-white p-3 text-xs font-sans border border-brand-muted/20">❌ Ghost Leads</div>
                <div className="bg-white p-3 text-xs font-sans border border-brand-muted/20">❌ No Single Truth</div>
                <div className="bg-white p-3 text-xs font-sans border border-brand-muted/20">❌ Wasted Admin Time</div>
             </div>
          </div>
          
          <h4 className="font-sans text-sm font-bold uppercase tracking-widest mb-4">Core Objectives</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="border-t-2 border-brand-ink pt-4">
                <span className="block font-bold mb-1">01. Consolidate</span>
                <span className="text-sm text-brand-muted">Merge forms & spreadsheets into one workflow.</span>
             </div>
             <div className="border-t-2 border-brand-ink pt-4">
                <span className="block font-bold mb-1">02. Automate</span>
                <span className="text-sm text-brand-muted">Remove manual copy/paste and handoffs.</span>
             </div>
             <div className="border-t-2 border-brand-ink pt-4">
                <span className="block font-bold mb-1">03. Web Build</span>
                <span className="text-sm text-brand-muted">Launch a site that routes leads correctly.</span>
             </div>
             <div className="border-t-2 border-brand-ink pt-4">
                <span className="block font-bold mb-1">04. Report</span>
                <span className="text-sm text-brand-muted">Visibility into occupancy and conversion.</span>
             </div>
          </div>
        </div>

        {/* Phase 1: Ops Overhaul */}
        <div>
          <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">01</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">System Architecture</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             <div className="space-y-8">
                <div className="group">
                   <h4 className="font-sans text-lg font-bold uppercase mb-2 flex items-center gap-2">
                      <Workflow className="text-brand-accent w-5 h-5" /> Workflow Mapping
                   </h4>
                   <p className="font-sans text-brand-muted text-sm border-l border-brand-muted/30 pl-4">
                      We audited every form and spreadsheet to map the real operational flow: from Web Inquiry → Lead Stage → Reservation → Move-In → Unit Occupancy.
                   </p>
                </div>
                <div className="group">
                   <h4 className="font-sans text-lg font-bold uppercase mb-2 flex items-center gap-2">
                      <Database className="text-brand-accent w-5 h-5" /> Single Source of Truth
                   </h4>
                   <p className="font-sans text-brand-muted text-sm border-l border-brand-muted/30 pl-4">
                      Replaced scattered sheets with a unified database structure containing core tables: Customers, Leads, Units, and Tickets.
                   </p>
                </div>
                <div className="group">
                   <h4 className="font-sans text-lg font-bold uppercase mb-2 flex items-center gap-2">
                      <Layout className="text-brand-accent w-5 h-5" /> Form Consolidation
                   </h4>
                   <p className="font-sans text-brand-muted text-sm border-l border-brand-muted/30 pl-4">
                      Standardized intake into a clean set of master forms: Quote Request, Reservation, Move-In, and Maintenance Request.
                   </p>
                </div>
             </div>
             
             <div className="bg-brand-muted/5 border border-brand-muted/20 p-8 text-brand-ink relative flex flex-col justify-center">
                 <div className="absolute top-4 right-4 opacity-20">
                    <Activity size={100} />
                 </div>
                 <h4 className="font-sans text-xl font-bold uppercase mb-6 relative z-10">The Automation Layer</h4>
                 <ul className="space-y-4 relative z-10 font-sans text-sm text-brand-muted">
                    <li className="flex gap-3 items-center">
                       <Zap className="w-4 h-4 text-brand-accent" />
                       <span>New Web Inquiry → Create Lead → Notify Staff</span>
                    </li>
                    <li className="flex gap-3 items-center">
                       <Zap className="w-4 h-4 text-brand-accent" />
                       <span>Maintenance Request → Create Ticket → Assign Rep</span>
                    </li>
                    <li className="flex gap-3 items-center">
                       <Zap className="w-4 h-4 text-brand-accent" />
                       <span>No Response (24h) → Auto-Follow-up Reminder</span>
                    </li>
                 </ul>
             </div>
          </div>
        </div>

        {/* Phase 2: Web Build */}
        <div>
          <div className="flex items-center gap-4 mb-12">
             <span className="font-sans text-5xl md:text-6xl font-bold text-brand-muted/20">02</span>
             <h2 className="font-sans text-3xl md:text-4xl font-bold uppercase text-brand-ink">Web Development</h2>
          </div>
          
          <div className="bg-white border border-brand-muted/20 p-8 md:p-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                   <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Conversion Focus</h4>
                   <p className="text-sm text-brand-muted">Clear storage unit offerings and pricing tables. Strong CTAs: "Get a Quote", "Reserve Now".</p>
                </div>
                <div>
                   <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Mobile First</h4>
                   <p className="text-sm text-brand-muted">Optimized for mobile users (majority of storage traffic) with fast load times and easy tap targets.</p>
                </div>
                <div>
                   <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Integrated Ops</h4>
                   <p className="text-sm text-brand-muted">Embedded forms write directly into the new Ops system, eliminating manual data entry.</p>
                </div>
             </div>
             <div className="h-px w-full bg-brand-ink/10 mb-8"></div>
             <div className="flex justify-between items-center">
                <div>
                   <span className="block font-sans text-3xl font-bold text-brand-ink">GA4 + Tracking</span>
                   <span className="text-xs text-brand-muted uppercase tracking-widest">Full conversion event setup</span>
                </div>
                <BarChart3 className="w-12 h-12 text-brand-accent opacity-50" />
             </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-brand-muted/5 p-8 md:p-12 relative">
           <div className="relative z-10">
              <h3 className="font-sans text-3xl font-bold uppercase mb-6">Operational Impact</h3>
              <Text className="mb-8 max-w-3xl">
                 We moved Storage Express from a manual, error-prone workflow to a scalable digital operating system.
              </Text>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-white p-6 shadow-sm border-l-4 border-brand-ink">
                    <span className="block font-sans text-3xl font-bold text-brand-ink mb-1">Hours</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">Admin Time Saved</span>
                    <p className="mt-2 text-xs text-stone-500">Staff stopped hunting for info and manually copying data.</p>
                 </div>
                 <div className="bg-white p-6 shadow-sm border-l-4 border-brand-ink">
                    <span className="block font-sans text-3xl font-bold text-brand-ink mb-1">Fast</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">Response Time</span>
                    <p className="mt-2 text-xs text-stone-500">Automated routing ensures leads are contacted immediately.</p>
                 </div>
                 <div className="bg-white p-6 shadow-sm border-l-4 border-brand-ink">
                    <span className="block font-sans text-3xl font-bold text-brand-ink mb-1">Clean</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">Data Integrity</span>
                    <p className="mt-2 text-xs text-stone-500">A single source of truth for units and occupancy.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  'kelowna-boat': {
    title: 'Kelowna Boat Detailing',
    category: 'Web Dev',
    year: '2024',
    outcome: '+Bookings',
    heroImage: 'https://picsum.photos/1600/900?random=4',
    description: "Kelowna Boat Detailing needed a website that accurately represented their premium brand and facilitated online bookings.",
    challenge: "The previous site was generic and didn't convert visitors into bookings effectively.",
    solution: "We delivered an exceptional, high-performance website that perfectly represents their brand and streamlines the booking process.",
    stats: [
      { label: "Bookings", value: "+Sig." },
      { label: "Brand Rep", value: "Premium" },
      { label: "UX Score", value: "10/10" }
    ],
    gallery: [
      'https://picsum.photos/800/1000?random=401',
      'https://picsum.photos/800/1000?random=402'
    ]
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? projectData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
         <div className="text-center">
            <Heading level={2}>Data Not Found</Heading>
            <Button onClick={() => navigate(RoutePath.WORK)} className="mt-8">Return to Archive</Button>
         </div>
      </div>
    );
  }

  return (
    <>
      <Section className="pt-40 pb-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-accent rounded-full blur-[150px] opacity-10 -z-10 translate-x-1/3 -translate-y-1/3"></div>
         
         <Button 
            variant="ghost" 
            onClick={() => navigate(RoutePath.WORK)} 
            className="mb-8 pl-0 text-brand-muted/60 hover:text-brand-ink"
         >
            <ArrowLeft size={16} className="mr-2" /> Back to Work
         </Button>

         <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
               <div>
                  <div className="flex items-center gap-4 mb-6">
                     <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] border border-brand-ink px-2 py-1">
                        Case Study {String(Object.keys(projectData).indexOf(id ?? '') + 1).padStart(2, '0')}
                     </span>
                     <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                        {project.category}
                     </span>
                  </div>
                  <Heading level="display" className="leading-[0.85]">{project.title}</Heading>
               </div>
               
               <div className="md:text-right">
                  <span className="block font-sans text-xs font-bold uppercase tracking-widest text-brand-muted/50 mb-2">Outcome</span>
                  <span className="block font-sans text-4xl md:text-6xl font-bold text-brand-accent">{project.outcome}</span>
               </div>
            </div>
         </Reveal>
      </Section>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative group">
         <Reveal className="h-full w-full">
            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
            <div className="absolute inset-0 bg-brand-ink/10"></div>
         </Reveal>
      </div>

      {/* Stats Bar */}
      <div className="bg-brand-muted/5 text-brand-ink py-12 px-6 md:px-12 border-y border-brand-muted/20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.stats.map((stat: any, i: number) => (
               <Reveal key={i} delay={i * 100} className="border-l border-brand-muted/30 pl-6">
                  <span className="block font-sans text-xs font-bold uppercase tracking-widest text-brand-muted mb-2">{stat.label}</span>
                  <span className="block font-sans text-4xl font-bold">{stat.value}</span>
               </Reveal>
            ))}
         </div>
      </div>

      {/* Narrative Content */}
      <Section fullWidth className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b border-brand-muted/20">
         <div className="md:col-span-4 p-6 md:p-12 border-b md:border-b-0 md:border-r border-brand-muted/20 bg-brand-muted/5">
            <div className="sticky top-32">
               <Heading level={4} className="mb-8">Project Brief</Heading>
               <div className="space-y-8">
                  <div className="group">
                     <div className="flex items-center gap-3 mb-2">
                        <Target className="w-5 h-5 text-brand-accent" />
                        <h4 className="font-sans font-bold uppercase">The Challenge</h4>
                     </div>
                     <p className="text-sm text-brand-muted leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="group">
                     <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-brand-accent" />
                        <h4 className="font-sans font-bold uppercase">The Solution</h4>
                     </div>
                     <p className="text-sm text-brand-muted leading-relaxed">{project.solution}</p>
                  </div>
               </div>
               
               <Button className="mt-12 w-full" variant="outline" icon>View Project</Button>
            </div>
         </div>

         <div className="md:col-span-8 p-6 md:p-24 bg-white">
            <Reveal delay={200}>
               <h3 className="font-sans text-6xl font-bold opacity-10 mb-8">01</h3>
               
               {/* Check for detailed content, otherwise show standard description */}
               {project.detailedContent ? (
                  project.detailedContent
               ) : (
                  <Text size="xl" className="mb-16 leading-relaxed">
                     {project.description}
                  </Text>
               )}
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
               {project.gallery.map((img: string, i: number) => (
                  <Reveal key={i} delay={300 + (i * 100)} className={i % 2 !== 0 ? 'md:mt-12' : ''}>
                     <div className="aspect-[3/4] overflow-hidden border border-brand-muted/20 relative group">
                        <img src={img} alt={`${project.title} gallery image ${i + 1}`} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                           Figure 0.{i+1}
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </Section>

      <Section className="bg-brand-muted/5 text-brand-ink py-24 text-center border-t border-brand-muted/20">
         <Heading level={2} className="mb-8">Start your transformation.</Heading>
         <Button to={RoutePath.CONTACT} variant="primary">Get Started</Button>
      </Section>
    </>
  );
};

export default ProjectDetail;
