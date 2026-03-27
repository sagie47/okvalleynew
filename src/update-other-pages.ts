import fs from 'fs';
import path from 'path';

const files = ['About.tsx', 'Pricing.tsx'];

files.forEach(file => {
  const filePath = path.join(process.cwd(), 'pages', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    content = content.replace(/font-tech/g, 'font-sans');
    content = content.replace(/font-display/g, 'font-sans');
    content = content.replace(/font-mono/g, 'font-sans');
    content = content.replace(/text-brand-pink/g, 'text-brand-accent');
    content = content.replace(/border-brand-pink/g, 'border-brand-accent');
    content = content.replace(/bg-brand-pink/g, 'bg-brand-accent');
    content = content.replace(/text-brand-darkGray/g, 'text-brand-muted');
    content = content.replace(/bg-brand-gray\/50/g, 'bg-brand-muted/10');
    content = content.replace(/bg-brand-gray\/30/g, 'bg-brand-muted/5');
    content = content.replace(/bg-brand-gray\/20/g, 'bg-brand-muted/5');
    content = content.replace(/bg-brand-gray/g, 'bg-brand-muted/5');
    content = content.replace(/border-brand-black\/10/g, 'border-brand-muted/20');
    content = content.replace(/border-brand-black\/20/g, 'border-brand-muted/30');
    content = content.replace(/text-brand-black\/10/g, 'text-brand-muted/20');
    content = content.replace(/text-brand-black\/40/g, 'text-brand-muted/50');
    content = content.replace(/text-brand-black\/50/g, 'text-brand-muted/60');
    content = content.replace(/text-brand-black/g, 'text-brand-ink');
    content = content.replace(/border-brand-black/g, 'border-brand-ink');
    content = content.replace(/bg-brand-black/g, 'bg-brand-ink');
    content = content.replace(/bg-brand-white/g, 'bg-white');
    content = content.replace(/<div className="absolute inset-0 blueprint-grid opacity-\[0\.05\]"><\/div>/g, '');
    content = content.replace(/<GridLine[^>]*\/>/g, '');
    content = content.replace(/, GridLine/g, '');
    content = content.replace(/GridLine, /g, '');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
