import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Macaron AI Tools',
  description: 'Privacy Policy for Macaron AI Tools application',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-8 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Privacy Content Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-macaron-pink via-macaron-lavender to-macaron-mint flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-gray-900">Privacy Policy</h1>
                <p className="text-sm text-gray-500">Macaron AI Tools</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Privacy Content */}
          <div className="privacy-content">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Macaron AI Tools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect information about you in various ways. The information we may collect via the Application includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Personal Data:</strong> Email address, name, and other contact information you voluntarily provide</li>
                <li><strong>Usage Data:</strong> Information about how you use our application, including features accessed and time spent</li>
                <li><strong>Device Data:</strong> Device type, operating system, unique device identifiers, and mobile network information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect or receive:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>To provide, operate, and maintain our application</li>
                <li>To improve, personalize, and expand our application</li>
                <li>To understand and analyze how you use our application</li>
                <li>To communicate with you for customer service and updates</li>
                <li>To process your transactions and send related information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>With Service Providers:</strong> We may share your information with third-party vendors who perform services for us</li>
                <li><strong>For Legal Purposes:</strong> If required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate personal data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our application is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will delete that information as quickly as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this privacy policy from time to time. The updated version will be indicated by an updated &quot;Last updated&quot; date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions or comments about this policy, you may contact us at:
              </p>
              <div className="mt-4 p-4 rounded-xl bg-gray-50">
                <p className="text-gray-700 font-medium">Macaron AI Tools</p>
                <p className="text-gray-600">Email: gurujifinder0@gmail.com</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link 
            href="/"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            © {new Date().getFullYear()} Macaron AI Tools. All rights reserved.
          </Link>
        </div>
      </div>
    </main>
  )
}

