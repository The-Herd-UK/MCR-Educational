import type { Metadata } from 'next';
import ModernContactHero from '@/components/contact/ModernContactHero';
import BentoContact from '@/components/contact/BentoContact';

export const metadata: Metadata = {
  title: 'Contact Us - MCR Educational',
  description:
    'Get in touch with MCR Educational. Use our contact form, call us on 0161 123 4567, or email info@mcreducational.co.uk.',
  openGraph: {
    title: 'Contact Us - MCR Educational',
    description:
      'Get in touch with MCR Educational. Use our contact form, call us on 0161 123 4567, or email info@mcreducational.co.uk.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main
      id="main-content"
      className="bg-background selection:bg-accent selection:text-accent-foreground font-body min-h-screen"
    >
      {/* 1. FRESH CONTACT HERO */}
      <ModernContactHero />

      {/* 2. BENTO CONTACT LAYOUT (FORM, DETAILS, MAP) */}
      <BentoContact />
    </main>
  );
}
