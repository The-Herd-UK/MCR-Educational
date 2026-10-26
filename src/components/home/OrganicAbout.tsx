'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OrganicAbout() {
  return (
    <section className="bg-neutral-dark relative overflow-hidden py-24 text-white">
      {/* Abstract Background */}
      <div className="bg-primary absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 rounded-full opacity-30 blur-[120px]" />
      <div className="bg-secondary absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 rounded-full opacity-20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Images cluster */}
          <div className="relative hidden h-[600px] w-full md:block">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border-neutral-dark absolute top-0 right-10 z-20 h-[60%] w-[60%] overflow-hidden rounded-[3rem] border-4 shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/8613071/pexels-photo-8613071.jpeg"
                alt="Dance education"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-neutral-dark absolute bottom-10 left-0 z-10 h-[55%] w-[55%] overflow-hidden rounded-[3rem] border-4 shadow-xl"
            >
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                alt="Supportive learning"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                Not a School. <br />
                <span className="text-secondary italic">A Community.</span>
              </h2>

              <div className="font-body space-y-6 text-lg text-white/80">
                <p>
                  MCR Educational reimagines what learning can be. For young people who find
                  mainstream education challenging, we offer a completely different rhythm.
                </p>
                <p>
                  Using dance, creative arts, and personalized academic support, we help our
                  students rebuild their confidence. We don&apos;t just teach curriculum; we teach
                  resilience, self-expression, and life skills.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="font-stats text-accent mb-2 text-4xl font-bold">95%</div>
                  <div className="text-sm tracking-wider text-white/60 uppercase">
                    Positive Outcomes
                  </div>
                </div>
                <div>
                  <div className="font-stats text-secondary mb-2 text-4xl font-bold">10+</div>
                  <div className="text-sm tracking-wider text-white/60 uppercase">
                    Partner Schools
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
