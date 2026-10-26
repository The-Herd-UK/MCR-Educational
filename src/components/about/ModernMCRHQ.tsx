'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2 } from 'lucide-react';

const parentLinks = [
  { label: 'MCR HQ CIC website', href: 'https://mcrhq.co.uk' },
  { label: 'Our programmes', href: '/programmes' },
  { label: 'Meet the team', href: '/team' },
];

export default function ModernMCRHQ() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-primary relative flex flex-col items-center gap-12 overflow-hidden rounded-[3rem] p-8 shadow-2xl sm:p-12 lg:flex-row lg:gap-20 lg:p-16">
          {/* Background pattern inside the card */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="bg-accent/30 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-[100px]" />

          {/* Left Block: The Image/Logo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full shrink-0 lg:w-5/12"
          >
            <div className="flex flex-col items-center overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/about/community.jpg"
                  alt="MCR HQ Community"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="from-primary/90 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>

              <div className="relative z-10 -mt-12 flex w-full flex-col items-center justify-center p-8 text-center">
                <div className="bg-secondary border-primary mb-4 flex h-20 w-20 -rotate-3 transform items-center justify-center rounded-3xl border-4 text-white shadow-2xl">
                  <Building2 size={32} />
                </div>

                <h3 className="font-heading mb-1 text-2xl font-bold text-white">MCR HQ CIC</h3>
                <p className="mb-6 text-sm text-white/60">Community Interest Company</p>

                <a
                  href="https://mcrhq.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:bg-accent inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold transition-colors duration-300 hover:text-white"
                >
                  Visit MCR HQ
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 w-full lg:w-7/12"
          >
            <h2 className="font-heading mb-6 text-4xl leading-tight font-bold text-white sm:text-5xl">
              Part of something <br />
              <span className="font-script text-accent text-5xl lowercase sm:text-6xl">bigger</span>
            </h2>

            <div className="mb-10 space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                MCR Educational operates under the umbrella of{' '}
                <strong className="font-semibold text-white">MCR HQ CIC</strong>, a community
                interest company working across Greater Manchester to support young people,
                families, and communities through sport, arts, and education.
              </p>
              <p>
                Being part of MCR HQ means our students benefit from a wider ecosystem of support —
                from mentoring and employment pathways to community events and family engagement
                programmes.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              {parentLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-secondary inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors"
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
