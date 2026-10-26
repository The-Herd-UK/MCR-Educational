'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ExternalLink, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';

const MAP_QUERY = encodeURIComponent('Greater Manchester, M1 1AA, UK');
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
const EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&output=embed&z=14`;

const schema = z.object({
  role: z.enum(['school', 'local-authority', 'parent', 'student', 'other'], {
    message: 'Please select who you are',
  }),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  _hp: z.string().max(0),
});

type FormValues = z.infer<typeof schema>;

const roleOptions = [
  { value: 'school', label: 'A school or college' },
  { value: 'local-authority', label: 'A local authority' },
  { value: 'parent', label: 'A parent or carer' },
  { value: 'student', label: 'A young person' },
  { value: 'other', label: 'Other' },
];

export default function BentoContact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { _hp: '' },
  });

  async function onSubmit(data: FormValues) {
    if (data._hp) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Server error');

      toast.success('Message sent!', {
        description: "Thanks for getting in touch. We'll reply within 48 hours.",
      });
      setSubmitted(true);
      reset();
    } catch {
      toast.error('Something went wrong', {
        description: 'Please try again or call us on 0161 123 4567.',
      });
    }
  }

  return (
    <section className="bg-background relative overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* LEFT: FORM (Takes up 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="border-accent/10 relative overflow-hidden rounded-[2rem] border bg-white p-8 shadow-xl sm:p-12 lg:col-span-7"
          >
            {/* Form decorative blob */}
            <div className="bg-accent/5 pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full blur-[60px]" />

            <h2 className="font-heading text-foreground mb-2 text-3xl font-bold">
              Send us a message
            </h2>
            <p className="text-muted-foreground mb-10 text-sm">
              We&apos;ll get back to you within 48 hours on working days.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-secondary/10 border-secondary/20 flex h-[400px] flex-col items-center justify-center rounded-3xl border p-10 text-center"
              >
                <div className="bg-secondary/20 text-secondary mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <Send size={28} />
                </div>
                <h3 className="font-heading text-primary mb-3 text-2xl font-bold">
                  Message received!
                </h3>
                <p className="text-muted-foreground mx-auto mb-8 max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will review your message and
                  respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-secondary hover:bg-secondary border-secondary/20 rounded-full border bg-white px-6 py-3 font-bold shadow-sm transition-colors hover:text-white"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_hp">Leave this field empty</label>
                  <input id="_hp" tabIndex={-1} autoComplete="off" {...register('_hp')} />
                </div>

                <div>
                  <label
                    htmlFor="contact-role"
                    className="text-foreground mb-2 block text-sm font-semibold"
                  >
                    I am a <span className="text-accent">*</span>
                  </label>
                  <select
                    id="contact-role"
                    {...register('role')}
                    className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                  >
                    <option value="">Select an option...</option>
                    {roleOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-accent mt-2 text-xs font-medium">{errors.role.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-foreground mb-2 block text-sm font-semibold"
                    >
                      Full name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Smith"
                      {...register('name')}
                      className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                    />
                    {errors.name && (
                      <p className="text-accent mt-2 text-xs font-medium">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-foreground mb-2 block text-sm font-semibold"
                    >
                      Email address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@example.com"
                      {...register('email')}
                      className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                    />
                    {errors.email && (
                      <p className="text-accent mt-2 text-xs font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-foreground mb-2 block text-sm font-semibold"
                    >
                      Phone number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="Optional"
                      {...register('phone')}
                      className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-organisation"
                      className="text-foreground mb-2 block text-sm font-semibold"
                    >
                      Organisation
                    </label>
                    <input
                      id="contact-organisation"
                      type="text"
                      placeholder="School, Authority (Optional)"
                      {...register('organisation')}
                      className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-foreground mb-2 block text-sm font-semibold"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="How can we help?"
                    {...register('message')}
                    className="border-accent/20 bg-accent/5 text-foreground focus:ring-accent focus:border-accent hover:bg-accent/10 w-full resize-none rounded-2xl px-5 py-4 transition-all duration-300 outline-none"
                  />
                  {errors.message && (
                    <p className="text-accent mt-2 text-xs font-medium">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 hover:shadow-primary/30 group inline-flex w-full items-center justify-center rounded-full px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: INFO & MAP (Takes up 5 columns) */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            {/* Contact Details Bento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-secondary relative flex-1 overflow-hidden rounded-[2rem] p-8 text-white shadow-xl sm:p-10"
            >
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 blur-[40px]" />

              <h2 className="font-heading mb-8 text-2xl font-bold">Get in Touch</h2>

              <ul className="mb-10 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-sm backdrop-blur-sm">
                    <Phone size={20} />
                  </div>
                  <div className="mt-1">
                    <p className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Call Us
                    </p>
                    <a
                      href="tel:01611234567"
                      className="text-lg font-bold transition-colors hover:text-white/80"
                    >
                      0161 123 4567
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-sm backdrop-blur-sm">
                    <Mail size={20} />
                  </div>
                  <div className="mt-1">
                    <p className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Email Us
                    </p>
                    <a
                      href="mailto:info@mcreducational.co.uk"
                      className="text-lg font-bold transition-colors hover:text-white/80"
                    >
                      info@mcreducational.co.uk
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-white shadow-sm backdrop-blur-sm">
                    <Clock size={20} />
                  </div>
                  <div className="mt-1">
                    <p className="mb-1 text-xs font-semibold tracking-wider text-white/60 uppercase">
                      Hours
                    </p>
                    <div className="text-base text-white/90">
                      <p className="font-bold">Mon - Fri: 8:30am - 4:30pm</p>
                      <p className="mt-0.5 text-sm opacity-70">Sat - Sun: Closed</p>
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Map Bento */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-border/50 group relative h-64 overflow-hidden rounded-[2rem] border bg-white p-2 shadow-xl sm:h-72"
            >
              <iframe
                src={EMBED_URL}
                title="MCR Educational location on Google Maps"
                width="100%"
                height="100%"
                className="rounded-[1.5rem]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 pointer-events-auto absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                <MapPin size={14} />
                View Map
                <ExternalLink size={14} className="ml-1 opacity-70" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
