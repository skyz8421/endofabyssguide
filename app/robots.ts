export const dynamic='force-static';
import type {MetadataRoute} from 'next';export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/',disallow:['/ads/']},sitemap:'https://endofabyss.quest/sitemap.xml'}}
