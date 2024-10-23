"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import axios from 'axios';

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
  
    try {
      const res = await axios.post('/api/sendEmail', {
        email,
        subject,
        message,
      });
  
      if (res.status === 200) {
        setEmailSubmitted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mx-auto max-w-7xl pb-16 sm:py-24 gap-4 relative  px-6 sm:px-14 md:px-20"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="mb-8 text-xl font-semibold text-accent sm:text-3xl">
          Let&apos;s Connect
        </h5>
        <p className="text-base mb-8 font-semibold dark:text-zinc-200 sm:text-base text-zinc-900 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/sharma1022">
          <FaGithub size={32} className='text-accent hover:text-text-zinc-900 dark:hover:text-zinc-200' />
          </Link>
          <Link href="https://www.linkedin.com/in/samshrma">
          <FaLinkedin size={32} className='text-accent hover:text-text-zinc-900 dark:hover:text-zinc-200' />
          </Link>
          <Link href="linkedin.com">
          <FaXTwitter size={32} className='text-accent hover:text-text-zinc-900 dark:hover:text-zinc-200' />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-accent text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="dark:text-zinc-200 text-zinc-900 block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-background border border-[#33353F] placeholder-[#9CA2A9] dark:text-zinc-200 text-zinc-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="john@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="dark:text-zinc-200 text-zinc-900 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-background border border-[#33353F] placeholder-[#9CA2A9] dark:text-zinc-200 text-zinc-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="dark:text-zinc-200 text-zinc-900 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-background border border-[#33353F] placeholder-[#9CA2A9] dark:text-zinc-200 text-zinc-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact