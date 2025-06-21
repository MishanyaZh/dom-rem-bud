import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import ThemeToggleButton from './components/ThemeToggleButton';
import SEO from '../../next-seo.config.js';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${SEO.defaultTitle}`,
  },
  description: SEO.description,
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <div className="app-layout">
            <header className="site-header">
              <div className="container">
                <h1>Dom Rem-Bud</h1>
                <p>Profesjonalne wykończenia wnętrz</p>
                <ThemeToggleButton />
              </div>
            </header>
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
