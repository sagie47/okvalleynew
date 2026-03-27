import fs from 'fs';
import path from 'path';

const files = [
  'components/Common.tsx',
  'components/Layout.tsx',
  'pages/Home.tsx',
  'pages/Work.tsx',
  'pages/Services.tsx',
  'pages/Contact.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/brand-black/g, 'brand-ink');
    content = content.replace(/brand-white/g, 'white');
    content = content.replace(/brand-gray/g, 'brand-muted/5');
    content = content.replace(/brand-darkGray/g, 'brand-muted');
    content = content.replace(/brand-pink/g, 'brand-accent');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
