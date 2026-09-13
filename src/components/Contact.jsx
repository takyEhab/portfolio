import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/experience';
import { submitContactForm } from '../utils/submitContactForm';

const initialFormState = { name: '', email: '', message: '' };

function validateForm({ name, email, message }) {
  const errors = {};

  if (!name.trim()) {
    errors.name = 'Name is required';
  } else if (name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!message.trim()) {
    errors.message = 'Message is required';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      const result = await submitContactForm(formData);
      setStatus('success');
      setStatusMessage(result.message);
      setFormData(initialFormState);
    } catch {
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again later.');
    }
  };

  const socialLinks = [
    { href: personalInfo.github, icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
  ];

  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to say hello? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-gray-600 dark:text-gray-400">
              I&apos;m currently open to freelance opportunities and full-time roles.
              Whether you have a question or just want to connect, my inbox is always open.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="rounded-lg border border-gray-200 p-3 text-gray-600 transition-all hover:border-accent-300 hover:bg-accent-50 hover:text-accent-600 dark:border-gray-700 dark:text-gray-400 dark:hover:border-accent-600 dark:hover:bg-accent-950/50 dark:hover:text-accent-400"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-1 text-sm text-gray-500 dark:text-gray-400">
              <p>
                <Mail size={14} className="mr-1 inline" />
                {personalInfo.email}
              </p>
              {personalInfo.phone && (
                <p>{personalInfo.phone}</p>
              )}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 outline-none transition-colors focus:ring-2 focus:ring-accent-500/20 dark:bg-gray-900 dark:text-white ${
                    errors.name
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-accent-500'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg border bg-white px-4 py-2.5 text-gray-900 outline-none transition-colors focus:ring-2 focus:ring-accent-500/20 dark:bg-gray-900 dark:text-white ${
                    errors.email
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-accent-500'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full resize-none rounded-lg border bg-white px-4 py-2.5 text-gray-900 outline-none transition-colors focus:ring-2 focus:ring-accent-500/20 dark:bg-gray-900 dark:text-white ${
                    errors.message
                      ? 'border-red-400 dark:border-red-500'
                      : 'border-gray-300 dark:border-gray-700 focus:border-accent-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-950/50 dark:text-green-400">
                  <CheckCircle size={18} />
                  {statusMessage}
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-400">
                  <AlertCircle size={18} />
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                <Send size={18} />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
