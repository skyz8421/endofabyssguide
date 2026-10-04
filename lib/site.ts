import type {Metadata} from 'next';
export const ORIGIN='https://endofabyss.quest';
export function metadata(title:string,description:string,route=''):Metadata {const url=ORIGIN+'/'+(route?route+'/':'');return {title:{absolute:title},description,alternates:{canonical:url},openGraph:{title,description,url,siteName:'End of Abyss Guide',type:'website',locale:'en_US',images:[{url:ORIGIN+'/og.png',width:1200,height:630}]},twitter:{card:'summary_large_image',title,description,images:[ORIGIN+'/og.png']}};}
