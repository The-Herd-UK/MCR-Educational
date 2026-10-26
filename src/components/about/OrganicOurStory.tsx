'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Users, GraduationCap } from 'lucide-react';

const highlights = [
  { Icon: BookOpen, value: '6+', label: 'Years operating' },
  { Icon: Users, value: '150+', label: 'Young people supported' },
  { Icon: GraduationCap, value: '40+', label: 'Partner schools' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.6 },
  },
};

export default function OrganicOurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background soft paths */}
      <svg
        className="text-accent/5 pointer-events-none absolute top-0 right-0 -z-10 h-full w-[800px]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="text-secondary mb-4 text-sm font-bold tracking-widest uppercase"
            >
              Our Story
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="font-heading text-foreground mb-8 text-4xl leading-tight font-bold sm:text-5xl"
            >
              Born out of a need for something <span className="text-accent">different</span>.
            </motion.h2>

            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                MCR Educational was founded in 2018 when a group of educators, youth workers, and
                dancers in Greater Manchester recognised a gap: young people being excluded from
                mainstream school with nowhere meaningful to go.
              </motion.p>
              <motion.p variants={itemVariants}>
                We started with a single cohort in a community hall. Today we run structured
                programmes across multiple sites, supporting young people whose needs haven&apos;t
                been met by traditional provision.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our approach puts{' '}
                <strong className="text-foreground font-semibold">creativity at the centre</strong>{' '}
                — using dance, arts, and real-world projects to build the academic confidence and
                life skills that help young people thrive beyond education.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* The offset image */}
            <div className="relative mb-12 aspect-[4/3] origin-left scale-100 overflow-hidden rounded-[2rem] shadow-2xl lg:-mr-12 lg:scale-105">
              <Image
                src="/images/about/our-story.jpg"
                alt="Creative learning environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* The overlapping stats bento box */}
            <div className="bg-accent/10 border-accent/20 relative z-10 rounded-3xl border p-8 shadow-xl backdrop-blur-xl sm:p-10 lg:-mt-32 lg:mr-12">
              <h3 className="font-heading text-foreground mb-6 text-xl font-bold">
                Our impact so far
              </h3>
              <ul className="space-y-6">
                {highlights.map(({ Icon, value, label }) => (
                  <li key={label} className="flex items-center gap-5">
                    <div className="text-accent flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-heading text-foreground mb-1 text-3xl leading-none font-black">
                        {value}
                      </p>
                      <p className="text-muted-foreground font-medium">{label}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-accent/20 mt-8 border-t pt-6">
                <p className="font-script text-accent/80 text-center text-2xl">
                  Every number is a new path found.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
