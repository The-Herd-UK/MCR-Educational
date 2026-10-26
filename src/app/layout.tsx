import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from 'sonner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';

const inter = localFont({
  src: '../fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

const plusJakartaSans = localFont({
  src: '../fonts/plus-jakarta-sans-latin-wght-normal.woff2',
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: '200 800',
});

const spaceGrotesk = localFont({
  src: '../fonts/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: '300 700',
});

export const metadata: Metadata = {
  title: 'MCR Educational - Empowering Young People Through Dance, Education & Support',
  description:
    'The dedicated educational arm of MCR HQ CIC, providing alternative education provision for young people in Greater Manchester.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="bottom-right" />
        <CookieBanner />
      </body>
    </html>
  );
}
