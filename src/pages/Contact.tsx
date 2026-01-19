import { useState, useEffect, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import Reveal from '../components/Reveal';
import SkeletonLoader from '../components/SkeletonLoader';

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const COOLDOWN_KEY = 'contact_form_cooldown';
  const COOLDOWN_DURATION = 60000; 

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Check cooldown
  const checkCooldown = (): boolean => {
    const lastSubmit = localStorage.getItem(COOLDOWN_KEY);
    if (lastSubmit) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit);
      if (timeSinceLastSubmit < COOLDOWN_DURATION) {
        const secondsRemaining = Math.ceil((COOLDOWN_DURATION - timeSinceLastSubmit) / 1000);
        setStatusMessage({ 
          type: 'error', 
          text: `Please wait ${secondsRemaining} seconds before sending another message.` 
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;
    const name = formData.get('user_name') as string;

    // Validation 1: Check if name is provided
    if (!name || name.trim().length < 2) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid name (at least 2 characters).' });
      return;
    }

    // Validation 2: Check if email is legitimate
    if (!email || !validateEmail(email)) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid email address (e.g., user@example.com).' });
      return;
    }

    // Validation 3: Check message length (minimum 10 characters)
    if (!message || message.trim().length < 10) {
      setStatusMessage({ type: 'error', text: 'Message must be at least 10 characters long.' });
      return;
    }

    // Validation 4: Check cooldown
    if (!checkCooldown()) {
      return;
    }

    // Validation 5: Check reCAPTCHA
    if (!captchaToken) {
      setStatusMessage({ type: 'error', text: 'Please complete the reCAPTCHA verification.' });
      return;
    }

    setSending(true);
    
    try {
      // EmailJS
      await emailjs.sendForm(
        'service_7p3avvw', 
        'template_h05bgmn', 
        form,
        'RfGoFDS_XhqzbbNEh'   
      );
      
      // Set cooldown timestamp
      localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
      
      setStatusMessage({ type: 'success', text: 'Message sent successfully! We\'ll get back to you soon.' });
      form.reset();
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } catch (error) {
      console.error('Email send error:', error);
      setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again or email us directly at design@ihd-mnl.com' });
    } finally {
      setSending(false);
    }
  };

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
          <div className="section-card grid gap-4 md:gap-8 p-6 md:p-8 md:grid-cols-2">
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
                  <p className="font-heading text-lg">+63 (917) 863-4060</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-heading text-lg">design@ihd-mnl.com</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Office Hours</p>
                  <p className="text-gray-300">Monday - Friday, 8:30 AM - 5:30 PM PHT</p>
                </div>
              </div>
            </div>

            <form className="grid gap-4 pr-2" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  className="w-full rounded-xl border border-secondary/70 bg-primary/70 px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
                  placeholder="Your name"
                  name="user_name"
                  type="text"
                  required
                  disabled={sending}
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
                  name="user_email"
                  type="email"
                  required
                  disabled={sending}
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
                  name="user_company"
                  type="text"
                  disabled={sending}
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
                  disabled={sending}
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LfzHjwsAAAAAGiDsWvaX4R963Mn8lA9NeWQaZeN"
                onChange={(token) => setCaptchaToken(token)}
                theme="dark"
              />

              {statusMessage && (
                <div className={`rounded-xl px-4 py-3 text-sm ${
                  statusMessage.type === 'success' 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default Contact;
