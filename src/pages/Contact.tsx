import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SkeletonLoader />;

  return (
    <main className="min-h-screen bg-primary gradient-sheen pt-20">
      <div className="mx-auto max-w-6xl space-y-12 px-6 py-16">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-300">Contact us</p>
            <h1 className="font-heading text-4xl md:text-5xl">Tell us about your next venue</h1>
            <p className="max-w-3xl text-lg text-gray-300">
              Share your vision—whether it is a flagship workplace, campus expansion, or a resilient control center. 
              We're ready to help you bring your project to life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="section-card grid gap-8 p-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl mb-4">Get in touch</h2>
                <p className="text-gray-300">
                  We respond within one business day and look forward to discussing your requirements.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-heading text-lg">+63 (000) 000-0000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-heading text-lg">info@ihd.ph</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Office Hours</p>
                  <p className="text-gray-300">Monday - Friday, 9:00 AM - 6:00 PM PHT</p>
                </div>
              </div>
            </div>

            <form className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Your name"
                  name="name"
                  type="text"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="your.email@company.com"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-300 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Your company name"
                  name="company"
                  type="text"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Project Vision *
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Tell us about your project requirements..."
                  name="message"
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Contact;
