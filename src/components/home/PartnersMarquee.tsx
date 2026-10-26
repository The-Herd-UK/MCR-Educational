'use client';

import { motion } from 'framer-motion';

const partners = [
  'Manchester City Council',
  'Salford Local Authority',
  'Trafford Council',
  'Arts Council England',
  'Youth Justice Board',
  'Greater Manchester Police',
];

export default function PartnersMarquee() {
  return (
    <div className="bg-primary border-primary/20 flex flex-col justify-center overflow-hidden border-y py-12 shadow-inner">
      <p className="text-primary-foreground/70 font-body mb-6 text-center text-sm font-semibold tracking-widest uppercase">
        Trusted by local authorities & partners
      </p>

      <div className="relative flex w-full overflow-x-hidden">
        {/* We use two sets of elements spanning across to loop smoothly */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 20,
          }}
        >
          {/* Double array for infinite loop effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div key={index} className="flex min-w-max items-center justify-center px-8 md:px-12">
              <span className="font-heading text-xl font-bold text-white/50 transition-colors duration-300 hover:text-white md:text-3xl">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
