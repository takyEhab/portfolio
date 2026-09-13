/**
 * Placeholder contact form submission handler.
 * Replace this with EmailJS, Formspree, or your own backend API.
 *
 * @example EmailJS integration:
 *   import emailjs from '@emailjs/browser';
 *   await emailjs.send('service_id', 'template_id', formData, 'public_key');
 */
export async function submitContactForm(formData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log('[Contact Form Submission]', formData);

  // Replace with real API call:
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(formData),
  // });
  // if (!response.ok) throw new Error('Failed to send message');

  return { success: true, message: 'Message sent successfully!' };
}
