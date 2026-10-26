'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2018',
    title: 'Founded',
    description:
      'MCR Educational launched as part of MCR HQ CIC, running its first cohort from a community space in central Manchester.',
  },
  {
    year: '2019',
    title: 'First Formal Partnerships',
    description:
      'Established formal alternative provision agreements with five Greater Manchester schools, placing our programmes on official timetables.',
  },
  {
    year: '2020',
    title: 'Adapted Through the Pandemic',
    description:
      'Delivered hybrid and online sessions throughout COVID-19 closures, ensuring continuity for vulnerable young people with no other provision.',
  },
  {
    year: '2021',
    title: '100 Students Milestone',
    description:
      'Surpassed 100 young people supported, expanding to a second permanent site and adding a dedicated wellbeing strand.',
  },
  {
    year: '2023',
    title: 'Grew to 40+ Partner Schools',
    description:
      'Deepened relationships across Greater Manchester, with referrals from 40+ schools and two local authorities recognising our outcomes data.',
  },
  {
    year: '2024',
    title: 'Digital & CMS Platform',
    description:
      'Launched a new digital platform to improve referral management, parent communication, and transparency in outcomes reporting.',
  },
];

export default function ModernTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-secondary/5 relative overflow-hidden py-24 md:py-32">
      {/* Decorative Blob */}
      <div className="bg-secondary/20 absolute top-1/2 left-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="mb-16 text-center md:mb-24">
          <h2 className="font-heading text-foreground text-4xl font-bold sm:text-5xl">
            Our{' '}
            <span className="font-script text-accent text-5xl font-normal lowercase sm:text-6xl">
              journey
            </span>{' '}
            so far
          </h2>
        </div>

        <div className="border-accent/20 relative ml-4 space-y-16 border-l-2 pl-8 sm:ml-6 sm:pl-12">
          {milestones.map((item) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Animated Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
                className="bg-accent absolute top-1 -left-[45px] h-6 w-6 rounded-full border-4 border-white shadow-sm sm:-left-[61px]"
              />

              <div className="border-border/50 relative rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <span className="bg-secondary absolute top-0 right-8 -translate-y-1/2 rounded-full px-4 py-1 text-sm font-bold text-white shadow-sm">
                  {item.year}
                </span>

                <h3 className="font-heading text-primary mb-3 text-2xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
