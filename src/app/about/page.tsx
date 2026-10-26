import type { Metadata } from 'next';
import ModernAboutHero from '@/components/about/ModernAboutHero';
import OrganicOurStory from '@/components/about/OrganicOurStory';
import ModernMission from '@/components/about/ModernMission';
import ModernTimeline from '@/components/about/ModernTimeline';
import ModernMCRHQ from '@/components/about/ModernMCRHQ';

export const metadata: Metadata = {
  title: 'About Us - MCR Educational',
  description:
    'Learn about MCR Educational - our story, mission, values, and our role as part of MCR HQ CIC in Greater Manchester.',
  openGraph: {
    title: 'About Us - MCR Educational',
    description:
      'Learn about MCR Educational - our story, mission, values, and our role as part of MCR HQ CIC in Greater Manchester.',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className="bg-background selection:bg-accent selection:text-accent-foreground font-body min-h-screen"
    >
      {/* 1. ORGANIC HERO */}
      <ModernAboutHero />

      {/* 2. ASYMMETRIC OUR STORY */}
      <OrganicOurStory />

      {/* 3. BENTO MISSION & PILLARS */}
      <ModernMission />

      {/* 4. ANIMATED TIMELINE */}
      <ModernTimeline />

      {/* 5. GLASSMORPHISM MCR HQ BANNER */}
      <ModernMCRHQ />

      {/* 6. CALL TO ACTION & FOOTER GAP */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-4 py-32 text-center">
        <div className="-transform-x-1/2 bg-accent/20 absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 rounded-full blur-[100px]" />

        <h2 className="font-heading text-foreground relative z-10 mb-6 text-4xl font-bold md:text-5xl">
          Ready to discover a new way to learn?
        </h2>
        <p className="text-muted-foreground relative z-10 mx-auto mb-10 max-w-2xl text-lg">
          We are always looking for passionate people to join our mission, school partners, or
          students looking for a fresh start.
        </p>
        <a
          href="/contact"
          className="bg-secondary hover:bg-secondary/90 hover:shadow-secondary/40 relative z-10 inline-flex transform items-center justify-center rounded-full px-10 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
