import { useEffect, useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Mail, MapPin, Send, User } from 'lucide-react';
import { usePortfolio } from '../data/PortfolioContext';

interface ContactSectionProps {
  prefilledSubject?: string;
}

export default function ContactSection({ prefilledSubject }: ContactSectionProps) {
  const { profile: PROFILE } = usePortfolio();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Web App / E-Commerce');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setMessage(
        `Hi Shivam, I would like to discuss a project similar to ${prefilledSubject}.`
      );
      setSubmitted(false);
      setError('');
    }
  }, [prefilledSubject]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and project brief.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitError('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projectType, message }),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || 'The enquiry could not be saved.');
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'The enquiry could not be saved.');
    } finally {
      setSubmitting(false);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} — from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\n${message}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-b border-zinc-200/80 py-16 lg:py-24 dark:border-zinc-800/80"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 dark:text-orange-400">
              Get In Touch
            </p>
            <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              Let&apos;s Build Your Next{' '}
              <span className="font-serif italic font-semibold text-orange-600 dark:text-orange-400">
                Product
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Need paid ad campaigns, a lead generation funnel, custom B2B website, operations CRM,
              or UI/UX redesign? Share your requirements. I aim to reply within 24 hours.
            </p>

            {/* Professional Contact Details Card */}
            <div className="mt-8 space-y-4 rounded-2xl border border-zinc-200/90 bg-white p-6 dark:border-zinc-800 dark:bg-[#17191D]">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                  <User className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Developer &amp; Performance Marketer
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-zinc-950 dark:text-white">
                    {PROFILE.name}
                  </div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-3 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
                <div className="flex min-w-0 items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Professional Email
                    </div>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="mt-0.5 block truncate text-sm font-bold text-zinc-950 hover:text-orange-600 dark:text-white dark:hover:text-orange-400"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700 dark:bg-[#20232A] dark:text-zinc-200 dark:hover:border-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3.5 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Location / Address
                  </div>
                  <div className="mt-0.5 text-sm font-bold text-zinc-950 dark:text-white">
                    {PROFILE.address}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-[#17191D]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-zinc-950">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-zinc-950 dark:text-white">
                    Inquiry Ready for {PROFILE.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    Your project details have been recorded. You can also send a direct copy to my inbox.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-zinc-950 hover:bg-orange-600"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Direct Email</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-lg border border-zinc-300 px-4 py-2.5 text-xs font-semibold hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Aarav Mehta"
                        className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 dark:border-zinc-700 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 dark:border-zinc-700 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                    >
                      Project Category
                    </label>
                    <select
                      id="contact-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 dark:border-zinc-700 dark:bg-[#111215] dark:text-white dark:focus:border-orange-500"
                    >
                      <option value="Social Media Management & Paid Ads">Social Media Management &amp; Paid Ads</option>
                      <option value="Marketing & Lead Generation">Marketing &amp; Lead Generation</option>
                      <option value="Web App / E-Commerce">Web App / E-Commerce Storefront</option>
                      <option value="CRM & Operations Dashboard">CRM &amp; Operations Dashboard</option>
                      <option value="UI/UX Profile Redesign">UI/UX Redesign</option>
                      <option value="AI Assistant / Desktop Tool">AI Assistant / Windows Desktop App</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                    >
                      Project Brief
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your goals, timeline, and key requirements..."
                      className="mt-1.5 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 dark:border-zinc-700 dark:bg-[#111215] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-orange-500"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-semibold text-red-600 dark:text-red-400">
                      {error}
                    </p>
                  )}

                  {submitError && (
                    <p role="alert" className="text-xs font-semibold text-red-600 dark:text-red-400">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold text-zinc-950 transition-colors duration-150 hover:bg-orange-600 active:scale-[0.99] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? 'Submitting...' : 'Send Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
