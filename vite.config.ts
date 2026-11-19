import { defineConfig } from 'vite';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { works } from './src/data/works';
export default defineConfig({plugins:[{name:'static-direct-routes',closeBundle(){const html=readFileSync('dist/index.html','utf8');for(const route of ['works','about','contact',...works.map(w=>`works/${encodeURIComponent(w.id)}`)]){mkdirSync(`dist/${route}`,{recursive:true});writeFileSync(`dist/${route}/index.html`,html)}writeFileSync('dist/404.html',html);writeFileSync('dist/_redirects','/* /index.html 200\n')}}]});
