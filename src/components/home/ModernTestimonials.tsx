'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "MCR Educational completely changed my child's outlook on learning. They went from dreading school to waking up excited every single day.",
    author: 'Sarah J.',
    role: 'Parent',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  },
  {
    quote:
      'Working with the MCR team has been phenomenal. Their tailored approach helps our most vulnerable students find their voice.',
    author: 'Mr. Davies',
    role: 'Head of Year, Local Academy',
    image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg',
  },
  {
    quote:
      'I never thought I could be good at studying until I started mixing it with dance. Now I feel like I can achieve anything.',
    author: 'Jordan',
    role: 'Student, Year 10',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
  },
];

export default function ModernTestimonials() {
  return (
    <section className="bg-neutral-light relative overflow-hidden py-24">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-0 z-0 h-[500px] w-full -translate-y-1/2 -skew-y-3 transform bg-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-foreground mb-4 text-4xl font-bold md:text-5xl">
            Voices of Our Community
          </h2>
          <p className="text-muted-foreground font-body mx-auto max-w-2xl text-lg">
            Real stories from the students, parents, and schools we partner with across Greater
            Manchester.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-neutral-light/50 shadow-primary/5 relative rounded-[2rem] border border-white/60 p-8 shadow-xl backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2"
            >
              <Quote className="text-accent/50 absolute top-6 right-6 h-12 w-12" />
              <p className="font-body text-foreground/80 relative z-10 mb-8 text-lg leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-auto flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image src={item.image} alt={item.author} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-primary font-heading text-lg font-bold">{item.author}</h4>
                  <p className="text-muted-foreground font-body text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
