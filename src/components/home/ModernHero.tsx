'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModernHero() {
  return (
    <section className="bg-background relative flex min-h-[90vh] items-center overflow-hidden pt-24 pb-16">
      {/* Organic Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 blur-[100px]">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="bg-primary/20 absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="bg-accent/20 absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="bg-secondary/15 absolute -bottom-32 left-1/3 h-[400px] w-[400px] rounded-full"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-20 lg:px-8">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="text-primary border-primary/10 mb-8 inline-flex items-center gap-2 rounded-full border bg-white/60 px-5 py-2 text-xs font-medium shadow-sm backdrop-blur-sm sm:text-sm">
              <span
                className="bg-secondary h-2 w-2 animate-pulse rounded-full"
                aria-hidden="true"
              />
              A Nurturing Alternative Education Provider
            </div>

            <h1 className="font-heading text-foreground mb-6 text-5xl leading-[1.1] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Grow, Learn & <br className="hidden lg:block" />
              <span className="text-primary relative italic">
                Thrive Together
                <svg
                  className="text-accent absolute -bottom-1 left-0 h-3 w-full opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 Q50,10 100,5"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-muted-foreground font-body mx-auto mb-10 max-w-2xl text-lg leading-relaxed sm:text-xl lg:mx-0">
              Discover a personalized, caring environment in Greater Manchester designed to empower
              young people through education, creativity, and steadfast support.
            </p>

            <motion.div
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 h-14 rounded-full px-8 text-base text-white shadow-lg lg:text-lg"
              >
                <Link href="/for-students" className="flex items-center">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary hover:bg-primary/5 h-14 rounded-full px-8 text-base lg:text-lg"
              >
                <Link href="/for-parents">Information for Parents</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Image / Bento Hero Element */}
        <motion.div
          className="relative w-full flex-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[600px]">
            {/* Main Image */}
            <div className="absolute inset-0 z-10 rotate-3 transform-gpu overflow-hidden rounded-[3rem] border-8 border-white/50 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <Image
                src="https://images.pexels.com/photos/5211457/pexels-photo-5211457.jpeg"
                alt="Student learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative organic shape behind */}
            <div className="bg-accent absolute inset-0 z-0 rotate-[-6deg] transform-gpu rounded-[3.5rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
