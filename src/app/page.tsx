import ModernHero from '@/components/home/ModernHero';
import PartnersMarquee from '@/components/home/PartnersMarquee';
import BentoPathways from '@/components/home/BentoPathways';
import OrganicAbout from '@/components/home/OrganicAbout';
import ModernTestimonials from '@/components/home/ModernTestimonials';

export default function Home() {
  return (
    <main className="bg-background selection:bg-accent selection:text-accent-foreground font-body min-h-screen">
      {/* 1. FRESH HERO */}
      <ModernHero />

      {/* 2. INFINITE PARTNERS MARQUEE */}
      <PartnersMarquee />

      {/* 3. THE NEW BENTO PATHWAY GRID */}
      <BentoPathways />

      {/* 4. ASYMMETRIC PHILOSOPHY / ABOUT SECTION */}
      <OrganicAbout />

      {/* 5. DYNAMIC TESTIMONIALS SLIDER/GRID */}
      <ModernTestimonials />

      {/* 6. CALL TO ACTION & FOOTER GAP */}
      <section className="relative mx-auto max-w-4xl overflow-hidden px-4 py-32 text-center">
        <div className="-transform-x-1/2 bg-accent/20 absolute top-1/2 left-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 rounded-full blur-[100px]" />

        <h2 className="font-heading text-foreground relative z-10 mb-6 text-4xl font-bold md:text-5xl">
          Ready to discover a new way to learn?
        </h2>
        <p className="text-muted-foreground relative z-10 mx-auto mb-10 max-w-2xl text-lg">
          Get in touch with our team today to discuss how we can support your journey or help a
          student in need of a fresh start.
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
