import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import SEO from '../../next-seo.config.js';
import { contactData } from '@/utils/contactData';
import Header from './components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SEO.defaultTitle,
  telephone: contactData.phone,
  email: contactData.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Gorzów Wielkopolski',
    postalCode: '66-400',
    streetAddress: contactData.address,
  },
  url: SEO.openGraph.url,
  sameAs: [contactData.facebook],
  description: SEO.description,
};

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.defaultTitle}`,
  },
  description: SEO.description,
  keywords: [
    'remonty mieszkań Gorzów Wielkopolski',
    'wykończenia wnętrz Gorzów Wielkopolski',
    'kompleksowe remonty Gorzów',
    'usługi remontowe Gorzów',
    'malowanie Gorzów',
    'układanie glazury Gorzów',
    'firma remontowa Gorzów',
  ],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: SEO.openGraph.url,
    siteName: SEO.openGraph.site_name,
    title: SEO.defaultTitle,
    description: SEO.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className="app-layout">
            <Header />
            <main>{children}</main>
            <footer className="site-footer">
              <div className="container">
                <p>
                  © {new Date().getFullYear()} Dom Rem-Bud. Wszelkie prawa
                  zastrzeżone.
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
