export const dynamic='force-static';
import type {MetadataRoute} from 'next';import {guides} from '@/data/guides';import {ORIGIN} from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ['','route-notes','updates','about','sources','contact','privacy','terms',...guides.map(g=>g.slug)].map(slug=>({url:ORIGIN+'/'+(slug?slug+'/':''),lastModified:'2026-10-04T05:57:00Z'}))}
