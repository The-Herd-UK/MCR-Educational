'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function ModernContactHero() {
  return (
    <section className="bg-background relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Decorative Blob */}
      <div className="bg-secondary/15 absolute top-0 right-1/4 -z-10 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
      <div className="bg-accent/20 absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/4 translate-y-1/3 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-secondary" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-secondary/10 text-secondary border-secondary/20 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold sm:text-sm"
          >
            <Mail size={14} />
            We respond within 48 hours
          </motion.div>

          <h1 className="font-heading text-foreground mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
            Get in{' '}
            <span className="font-script text-accent ml-2 inline-block -rotate-2 text-6xl sm:text-7xl lg:text-8xl">
              Touch
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            Whether you&apos;re a school, local authority, parent, or young person — we&apos;d love
            to hear from you. Fill in the form and a member of our team will be in touch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
