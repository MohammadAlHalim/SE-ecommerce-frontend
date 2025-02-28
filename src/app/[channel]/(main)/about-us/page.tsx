import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us · PcandMore',
  description: 'Learn more about our company and team.',
};

const AboutUs = () => {
  return (
    <div className="min-h-dvh bg-gray-50">
      <section className="mx-auto max-w-7xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-neutral-900">About Us</h1>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          We are Mohammad Alhalim, Mohammed Farhat, Mohammad Shaaban, Ali Hneineh, and Houssein Harb—a team of passionate 3rd-year computer engineering students driven by a shared love for technology and innovation.
        </p>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Our expertise spans across AI, machine learning, embedded systems, IoT, and software development. We enjoy tackling real-world challenges, whether it's building intelligent automation systems, designing efficient digital solutions, or creating AI-driven applications.
        </p>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          What sets us apart is our collaborative mindset and problem-solving approach. We believe in turning ideas into reality by experimenting, prototyping, and continuously learning. From coding complex algorithms to designing smart hardware, we push ourselves to explore new possibilities.
        </p>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          As we continue our journey, our goal is to develop cutting-edge technologies that drive the future. We’re always open to new ideas, challenges, and opportunities to innovate.
        </p>
        <h2 className="mt-8 text-3xl font-bold text-neutral-900">Our Team</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Our team consists of five dedicated individuals:
        </p>
        <ul className="mt-4 list-disc list-inside text-lg text-neutral-700 leading-relaxed">
          <li>Mohammad Alhalim</li>
          <li>Mohammed Farhat</li>
          <li>Mohammad Shaaban</li>
          <li>Ali Hneineh</li>
          <li>Houssein Harb</li>
        </ul>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Each member brings unique skills and perspectives, making our team dynamic and versatile.
        </p>
        <h2 className="mt-8 text-3xl font-bold text-neutral-900">Our Mission</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Our mission is to leverage our technical expertise to create innovative solutions that address real-world problems. We aim to push the boundaries of technology and make a positive impact on society.
        </p>
        <h2 className="mt-8 text-3xl font-bold text-neutral-900">Our Vision</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          We envision a future where technology seamlessly integrates into everyday life, enhancing productivity, efficiency, and quality of life. We strive to be at the forefront of technological advancements and contribute to shaping a better future.
        </p>
        <h2 className="mt-8 text-3xl font-bold text-neutral-900">Our Values</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Our core values guide our actions and decisions:
        </p>
        <ul className="mt-4 list-disc list-inside text-lg text-neutral-700 leading-relaxed">
          <li>Innovation: We embrace creativity and strive to develop cutting-edge solutions.</li>
          <li>Collaboration: We believe in the power of teamwork and value diverse perspectives.</li>
          <li>Integrity: We uphold the highest ethical standards in all our endeavors.</li>
          <li>Excellence: We are committed to delivering high-quality results and continuously improving.</li>
          <li>Passion: We are driven by a genuine passion for technology and its potential to transform lives.</li>
        </ul>
        <h2 className="mt-8 text-3xl font-bold text-neutral-900">Contact Us</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          If you have any questions or would like to collaborate with us, feel free to reach out at contact@pcandmore.com. We look forward to connecting with you!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;