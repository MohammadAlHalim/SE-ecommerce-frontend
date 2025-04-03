import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service · PcandMore',
  description: 'Read our terms of service.',
};

const TermsOfService = () => {
  return (
    <div className="min-h-dvh bg-gray-50">
      <section className="mx-auto max-w-7xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-neutral-900">Terms of Service</h1>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Welcome to PCandMore. These terms and conditions outline the rules and regulations for the use of our website.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">1. Terms</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          By accessing this website, you are agreeing to be bound by these website terms and conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">2. Use License</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Permission is granted to temporarily download one copy of the materials (information or software) on PCandMore's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="mt-4 list-disc list-inside text-lg text-neutral-700 leading-relaxed">
          <li>Modify or copy the materials;</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>Attempt to decompile or reverse engineer any software contained on PCandMore's website;</li>
          <li>Remove any copyright or other proprietary notations from the materials; or</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by PCandMore at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">3. Disclaimer</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          The materials on PCandMore's website are provided "as is". PCandMore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, PCandMore does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet website or otherwise relating to such materials or on any sites linked to this site.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">4. Limitations</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          In no event shall PCandMore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on PCandMore's Internet site, even if PCandMore or a PCandMore authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">5. Revisions and Errata</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          The materials appearing on PCandMore's website could include technical, typographical, or photographic errors. PCandMore does not warrant that any of the materials on its website are accurate, complete, or current. PCandMore may make changes to the materials contained on its website at any time without notice. PCandMore does not, however, make any commitment to update the materials.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">6. Links</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          PCandMore has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PCandMore of the site. Use of any such linked website is at the user's own risk.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">7. Site Terms of Use Modifications</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          PCandMore may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-neutral-900">8. Governing Law</h2>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          Any claim relating to PCandMore's website shall be governed by the laws of the State of [Your State] without regard to its conflict of law provisions.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;