import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Trash2, ShieldAlert, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account Deletion - Macaron AI Tools',
  description: 'Instructions for requesting account deletion for Macaron AI Tools',
}

export default function AccountDeletionPage() {
  return (
    <main className="min-h-screen py-8 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          {/* Header */}
          <div className="mb-8 pb-8 border-b border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500">
              <Trash2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-gray-900">Account Deletion Request</h1>
              <p className="text-gray-500">Macaron AI Tools</p>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In accordance with Google Play Store policies, we provide this page to explain how you can request the deletion of your account and associated data. 
                If you have created an account with <strong>Macaron AI Tools</strong>, you have the right to request its deletion along with any personal data we may hold.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                How to Delete Your Account
              </h2>
              
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">Step 1: Open Account Settings</h3>
                  <p className="text-gray-600 mb-4">Go to the <strong>Settings</strong> tab and tap on <strong>Account settings</strong>.</p>
                  <div className="relative aspect-[9/19.5] max-w-[300px] mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-200">
                    <Image
                      src="/images/step1.png"
                      alt="Step 1: Open Account Settings"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">Step 2: Select "Delete Account"</h3>
                  <p className="text-gray-600 mb-4">Tap the <strong>Delete account</strong> button at the bottom of the page.</p>
                  <div className="relative aspect-[9/19.5] max-w-[300px] mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-200">
                    <Image
                      src="/images/step2.png"
                      alt="Step 2: Select Delete Account"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">Step 3: Confirm Deletion</h3>
                  <p className="text-gray-600 mb-4">Confirm the action in the popup dialog. This will permanently remove your data.</p>
                  <div className="relative aspect-[9/19.5] max-w-[300px] mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-200">
                    <Image
                      src="/images/step3.png"
                      alt="Step 3: Confirm Deletion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Data Retention & Deletion Policy</h2>
              <div className="bg-blue-50 rounded-2xl p-6 text-blue-900">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Account Data:</strong> Your profile information, email address, and preferences will be permanently deleted.</li>
                  <li><strong>User Content:</strong> Any locally stored content or cloud-synced data associated with your account will be removed.</li>
                  <li><strong>Retention Period:</strong> Once the deletion request is confirmed, data is typically removed immediately or within 30 days, depending on backup cycles.</li>
                  <li><strong>Exceptions:</strong> We may retain certain data if required by law or for legitimate business purposes (e.g., transaction records), as outlined in our Privacy Policy.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you are unable to delete your account through the app, or if you have any questions, please contact our support team at:
                <br />
                <a href="mailto:contact@macaron.im" className="text-blue-600 hover:underline font-medium">contact@macaron.im</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
