'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function ModernAboutHero() {
  return (
    <section className="bg-background relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative Blob */}
      <div className="bg-accent/20 absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/3 rounded-full blur-[120px]" />
      <div className="bg-secondary/15 absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-secondary" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-secondary/10 text-secondary border-secondary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold sm:text-sm"
            >
              <MapPin size={14} />
              Greater Manchester, since 2018
            </motion.div>

            <h1 className="font-heading text-foreground mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
              Who We <br />
              <span className="font-script text-accent mt-2 inline-block -rotate-2 text-6xl sm:text-7xl lg:text-8xl">
                Are
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed sm:text-xl">
              MCR Educational is an alternative education provider under MCR HQ CIC. We are
              dedicated to re-engaging young people aged 11–16 through creative learning, dance, and
              genuine human connection.
            </p>
          </motion.div>

          {/* Hero Image / Masked Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative h-[400px] w-full lg:h-[600px]"
          >
            <div className="absolute inset-0 origin-bottom-right rotate-2 overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-700 hover:rotate-0 lg:rounded-[5rem]">
              <Image
                src="/images/about/community.jpg"
                alt="Community and students at MCR Educational"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="bg-primary/20 absolute inset-0 mix-blend-color-burn" />
            </div>
            {/* Overlay Badge */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 z-20 max-w-[200px] rounded-3xl bg-white p-6 shadow-xl sm:-left-12"
            >
              <p className="font-heading text-md text-primary leading-tight font-bold">
                Embracing the individual.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
