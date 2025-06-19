'use client';
import { NextSeo } from 'next-seo';
import SEO from '../../../next-seo.config';

export default function SeoWrapper() {
  return <NextSeo {...SEO} />;
}
