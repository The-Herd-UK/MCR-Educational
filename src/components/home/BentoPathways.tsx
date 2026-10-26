'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, School, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

const pathways = [
  {
    id: 'students',
    title: 'For Young People',
    desc: 'A creative space to learn, dance, and discover your true potential.',
    color: 'bg-accent',
    textColor: 'text-accent-foreground',
    icon: Sparkles,
    href: '/for-students',
    colSpan: 'md:col-span-2 md:row-span-2',
    img: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg',
  },
  {
    id: 'parents',
    title: 'For Parents & Carers',
    desc: 'A safe, supportive environment where your child is understood.',
    color: 'bg-secondary',
    textColor: 'text-white',
    icon: Heart,
    href: '/for-parents',
    colSpan: 'md:col-span-1 md:row-span-1',
    img: null,
  },
  {
    id: 'schools',
    title: 'For Schools',
    desc: 'Referrals and partnership opportunities for local authorities.',
    color: 'bg-primary',
    textColor: 'text-white',
    icon: School,
    href: '/for-schools',
    colSpan: 'md:col-span-1 md:row-span-1',
    img: null,
  },
];

export default function BentoPathways() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
          Choose Your Journey
        </h2>
        <p className="text-muted-foreground font-body relative z-10 max-w-2xl text-lg">
          We don&apos;t believe in one-size-fits-all. Find the information tailored specifically to
          your needs.
        </p>
      </motion.div>

      <div className="grid h-[800px] grid-cols-1 gap-4 md:h-[600px] md:grid-cols-3 md:grid-rows-2">
        {pathways.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-[2.5rem] ${item.color} ${item.colSpan} ${item.textColor} flex cursor-pointer flex-col justify-end p-8 shadow-lg sm:p-10`}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105"
              />
            )}

            <div className="absolute top-8 right-8 z-10 flex h-12 w-12 transform items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:rotate-12">
              <ArrowUpRight className="currentColor h-6 w-6" />
            </div>

            <div className="relative z-10 mt-auto">
              <item.icon className="mb-4 h-10 w-10 opacity-80" />
              <h3 className="font-heading mb-3 text-3xl font-bold">{item.title}</h3>
              <p className="font-body line-clamp-2 max-w-sm text-lg opacity-90 md:line-clamp-none">
                {item.desc}
              </p>
            </div>

            {/* Click overlay link */}
            <Link
              href={item.href}
              className="absolute inset-0 z-20"
              aria-label={`Go to ${item.title}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
