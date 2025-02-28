import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us · PcandMore',
  description: 'Get in touch with our team.',
};

const Contact = () => {
  return (
    <div className="min-h-dvh bg-white">
      <section className="mx-auto max-w-7xl p-8">
        <h1 className="text-3xl font-bold text-neutral-900">Contact Us</h1>
        <p className="mt-4 text-neutral-700">
          If you have any questions, feel free to reach out to us at contact@pcandmore.com.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;