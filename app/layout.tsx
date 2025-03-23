import type { Metadata, Viewport } from 'next';
import { Inter, Figtree, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const figtree = Figtree({
  variable: '--font-figtree-sans',
  subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Alpha - AI Models For Business Solutions',
  description:
    'Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs',
  robots: 'index, follow, max-image-preview:large',
  authors: [
    {
      name: 'Edward-Precious Omegbu',
      url: 'https://portfolio-codegiyu.vercel.app',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://codegiyu-alpharithm-landing.vercel.app',
    siteName: 'Alpha',
    title: 'Alpha - AI Models For Business Solutions',
    description:
      'Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs',
    images: [{ url: '' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha - AI Models For Business Solutions',
    description:
      'Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs',
    creator: '@TheLonerider20',
    images: [''],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://codegiyu-alpharithm-landing.vercel.app" />
      </head>
      <body
        className={`${inter.variable} ${figtree.variable} ${plusJakartaSans.variable} antialiased w-full min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
