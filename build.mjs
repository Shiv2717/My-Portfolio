import { build } from 'esbuild';
import { readFile, writeFile, readdir } from 'node:fs/promises';

const reactGlobal = {
  name: 'existing-react',
  setup(builder) {
    builder.onResolve({ filter: /^react$/ }, () => ({ path: 'react', namespace: 'existing-react' }));
    builder.onLoad({ filter: /.*/, namespace: 'existing-react' }, () => ({
      contents: 'export default window.React; export const {memo,Children,isValidElement,useLayoutEffect,useMemo,useEffect,useRef,useCallback,useState} = window.React;',
    }));
  },
};
const photoNames = (await readdir('dist/images/clicks')).filter(name => name.endsWith('.webp')).sort();
const output = await build({
  define: { PORTFOLIO_PHOTOS: JSON.stringify(photoNames) },
  entryPoints: ['dist/Portfolio.jsx'], bundle: true, minify: true, format: 'iife',
  plugins: [reactGlobal], loader: { '.css': 'empty' }, write: false,
});
const app = output.outputFiles[0].text;
await writeFile('dist/portfolio.js', app);
await writeFile('dist/three-license.txt', await readFile('node_modules/three/LICENSE'));

const embedded = {};
const files = ['resume.pdf','images/profile-portrait.jpg','images/hero-cutout.png','images/foil-mark.png',
  ...photoNames.flatMap(name => ['images/clicks/' + name, 'images/clicks/tiles/' + name])];
const mime = {jpg:'image/jpeg',png:'image/png',webp:'image/webp',pdf:'application/pdf'};
for (const name of files) {
  const bytes = await readFile('dist/' + name);
  embedded[name] = 'data:' + mime[name.split('.').pop()] + ';base64,' + bytes.toString('base64');
}
let html = await readFile('dist/index.html','utf8');
for (const [tag, name] of html.matchAll(/<link rel="stylesheet" href="([^"]+)">/g)) {
  const css = await readFile('dist/' + name,'utf8');
  html = html.replace(tag, () => '<style>' + css + '</style>');
}
const scripts = ['<script>window.portfolioFiles=' + JSON.stringify(embedded) + '</script>'];
for (const [tag, name] of html.matchAll(/<script defer src="([^"]+)"><\/script>/g)) {
  const js = await readFile('dist/' + name,'utf8');
  scripts.push('<script>' + js.replace(/<\/script/gi,'<\\/script') + '</script>');
  html = html.replace(tag,'');
}
await writeFile('Portfolio-Preview.html',html.replace('</body>',() => scripts.join('\n') + '</body>'));
