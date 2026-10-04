import {readFileSync} from 'node:fs';
const problems=[];
for(const file of ['README.md','DEPLOY.md','AGENTS.md']){
 const body=readFileSync(file,'utf8');
 if(/\b(?:G-[A-Z0-9]{7,}|GTM-[A-Z0-9]+|ca-pub-\d{10,})\b|clarity\.ms\/tag\/[a-z0-9]+/i.test(body))problems.push(file+': pasteable tracking ID in operator prose');
}
const guides=readFileSync('data/guides.ts','utf8');
const names=['Pulse Gun','Riot Breaker','Security Rifle','Support Gun','Incinerator','Particle Disruptor'];
for(const name of names)if(!guides.includes(name))problems.push('Missing verified weapon '+name);
if(/damage:\s*\d|dps:\s*\d/i.test(guides))problems.push('Weapon damage numbers have no verified dataset');
if(problems.length){console.error('✖ depth: '+problems.join('\n'));process.exit(1)}
console.log('✓ depth: operator docs contain no pasteable tracking IDs; verified weapon set intact');
