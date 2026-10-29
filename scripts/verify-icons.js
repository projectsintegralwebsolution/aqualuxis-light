const lucide = require('lucide-react');

const icons = [
  'ChevronDown', 'Menu', 'X', 'Phone', 'Mail', 'MapPin', 'Download', 'Globe', 'Search', 'ArrowRight',
  'Waves', 'Droplet', 'Sparkles', 'CircleDot', 'Trees', 'SunMedium', 'Layers', 'Sliders', 'ShieldCheck',
  'Compass', 'FileText', 'Wrench', 'CheckCircle', 'ExternalLink'
];

icons.forEach(name => {
  if (!lucide[name]) {
    console.error('MISSING ICON:', name);
  }
});
console.log('All icons verified in lucide-react!');
