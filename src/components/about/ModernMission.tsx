'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function ModernMission() {
  return (
    <section className="bg-primary relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background Orbs */}
      <div className="bg-accent/20 absolute top-10 left-10 -z-10 h-96 w-96 rounded-full blur-[80px]" />
      <div className="bg-secondary/30 absolute right-10 bottom-10 -z-10 h-96 w-96 rounded-full blur-[100px]" />

      {/* Pattern noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-accent/20 text-accent mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full">
            <Quote size={28} />
          </div>

          <h2 className="font-heading mb-8 text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl">
            To provide inclusive, creative, and trauma-informed education that re-engages young
            people with learning{' '}
            <span className="font-script text-secondary px-2 text-4xl font-normal lowercase sm:text-5xl md:text-6xl">
              — and with themselves.
            </span>
          </h2>

          <p className="mx-auto mb-16 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            We believe every young person deserves an education that sees them as a whole person.
            Our mission is to be that provision — one that listens, adapts, and never gives up.
          </p>
        </motion.div>

        {/* The 3 Pillars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              id: '01',
              color: 'text-secondary',
              bgLine: 'bg-secondary',
              title: 'Inclusive',
              desc: 'We remove barriers to participation — physical, emotional, and academic.',
            },
            {
              id: '02',
              color: 'text-accent',
              bgLine: 'bg-accent',
              title: 'Creative',
              desc: 'Dance, arts, and project-based work are not extras — they are the core curriculum.',
            },
            {
              id: '03',
              color: 'text-white',
              bgLine: 'bg-white',
              title: 'Trauma-Informed',
              desc: 'We understand where our students come from and meet them there, without judgement.',
            },
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <div
                className={`absolute top-0 left-0 h-1 w-full ${pillar.bgLine} origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
              />

              <span
                className={`font-script absolute top-4 right-6 text-5xl opacity-40 ${pillar.color}`}
              >
                {pillar.id}
              </span>

              <h3 className="font-heading relative z-10 mt-4 mb-4 text-2xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="relative z-10 leading-relaxed text-white/70">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
