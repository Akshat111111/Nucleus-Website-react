const fs = require('fs');
const path = require('path');

const files = [
  { name: 'insights.html', out: 'react/src/pages/Insights.jsx', comp: 'Insights' },
  { name: 'pillar-cyber.html', out: 'react/src/pages/pillars/PillarCyber.jsx', comp: 'PillarCyber' },
  { name: 'pillar-aigov.html', out: 'react/src/pages/pillars/PillarAIGov.jsx', comp: 'PillarAIGov' },
  { name: 'pillar-aisec.html', out: 'react/src/pages/pillars/PillarAISec.jsx', comp: 'PillarAISec' },
  { name: 'pillar-code.html', out: 'react/src/pages/pillars/PillarCode.jsx', comp: 'PillarCode' },
  { name: 'fw-cmmf.html', out: 'react/src/pages/frameworks/FwCmmf.jsx', comp: 'FwCmmf' },
  { name: 'fw-aigf.html', out: 'react/src/pages/frameworks/FwAigf.jsx', comp: 'FwAigf' },
  { name: 'fw-aisca.html', out: 'react/src/pages/frameworks/FwAisca.jsx', comp: 'FwAisca' },
  { name: 'fw-ctaf.html', out: 'react/src/pages/frameworks/FwCtaf.jsx', comp: 'FwCtaf' },
  { name: 'plat-cyber.html', out: 'react/src/pages/platforms/PlatCyber.jsx', comp: 'PlatCyber' },
  { name: 'plat-aisec.html', out: 'react/src/pages/platforms/PlatAISec.jsx', comp: 'PlatAISec' },
  { name: 'sol-mdr.html', out: 'react/src/pages/solutions/SolMdr.jsx', comp: 'SolMdr' },
  { name: 'sol-payments.html', out: 'react/src/pages/solutions/SolPayments.jsx', comp: 'SolPayments' },
  { name: 'sol-identity.html', out: 'react/src/pages/solutions/SolIdentity.jsx', comp: 'SolIdentity' },
  { name: 'sol-fintech.html', out: 'react/src/pages/solutions/SolFintech.jsx', comp: 'SolFintech' },
  { name: 'sol-pqc.html', out: 'react/src/pages/solutions/SolPqc.jsx', comp: 'SolPqc' },
];

for (const file of files) {
  let content = fs.readFileSync(path.join(__dirname, file.name), 'utf8');
  
  // Extract <main> content
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) {
    console.error(`No <main> found in ${file.name}`);
    continue;
  }
  
  let jsxContent = mainMatch[1];
  
  // Convert HTML to JSX
  jsxContent = jsxContent.replace(/class=/g, 'className=');
  jsxContent = jsxContent.replace(/<img(.*?)>/g, (m, g1) => {
    if (g1.endsWith('/')) return m;
    return `<img${g1} />`;
  });
  jsxContent = jsxContent.replace(/<br>/g, '<br />');
  jsxContent = jsxContent.replace(/<hr>/g, '<hr />');
  jsxContent = jsxContent.replace(/<input(.*?)>/g, (m, g1) => {
    if (g1.endsWith('/')) return m;
    return `<input${g1} />`;
  });
  
  // Link component replacements (naive)
  jsxContent = jsxContent.replace(/<a([^>]*)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (m, before, href, after, inner) => {
    let cleanHref = href.replace('.html', '');
    if (cleanHref === 'index') cleanHref = '/';
    else if (!cleanHref.startsWith('/') && !cleanHref.startsWith('http') && !cleanHref.startsWith('mailto')) {
      cleanHref = '/' + cleanHref;
    }
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return `<a${before}href="${href}"${after}>${inner}</a>`;
    }
    return `<Link${before}to="${cleanHref}"${after}>${inner}</Link>`;
  });
  
  // Style strings to objects
  jsxContent = jsxContent.replace(/style="([^"]+)"/g, (m, styleStr) => {
    const rules = styleStr.split(';').filter(Boolean);
    const obj = {};
    for (const rule of rules) {
      const parts = rule.split(':');
      if (parts.length >= 2) {
        let key = parts[0].trim();
        const value = parts.slice(1).join(':').trim();
        key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        obj[key] = value;
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // HTML comments to JSX comments
  jsxContent = jsxContent.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

  // Fix original HTML typo where <div class="pcb-row"> was closed with </p>
  jsxContent = jsxContent.replace(/<div className="pcb-row">([\s\S]*?)<\/p>/g, '<div className="pcb-row">$1</div>');

  // Remove any trailing </section> tags that don't have an opening tag in the main block
  jsxContent = jsxContent.replace(/<\/section>\s*$/g, '');

  const finalCode = `import { Link } from 'react-router-dom'\nimport { useReveal } from '../../hooks/useReveal'\n\nexport default function ${file.comp}() {\n  useReveal()\n\n  return (\n    <div id="view-${file.name.replace('.html', '')}">\n      ${jsxContent}\n    </div>\n  )\n}\n`;
  
  // Adjust import path for Insights
  let outCode = finalCode;
  if (file.name === 'insights.html') {
    outCode = outCode.replace('../../hooks/useReveal', '../hooks/useReveal');
  }

  const outPath = path.join(__dirname, file.out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, outCode);
  console.log(`Converted ${file.name} to ${file.out}`);
}
