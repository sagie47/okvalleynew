import fs from 'fs';
import path from 'path';

const files = [
  'pages/Pricing.tsx',
  'components/Common.tsx',
  'components/Layout.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/text-brand-white/g, 'text-white');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
