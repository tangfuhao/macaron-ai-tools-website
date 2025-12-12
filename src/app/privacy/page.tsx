import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Macaron AI Tools',
  description: 'Privacy Policy for Macaron AI Tools application',
}

export default async function PrivacyPage() {
  // Read Markdown file
  const filePath = path.join(process.cwd(), 'lib', 'privacy.md')
  let content = ''
  
  try {
    content = fs.readFileSync(filePath, 'utf8')
  } catch (error) {
    console.error(error)
    content = '# Privacy Policy\n\nPrivacy policy content not found. Please add `lib/privacy.md`.'
  }

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
          <div className="mb-8 pb-8 border-b border-gray-200 flex items-center gap-3">
            <Image
              src="/images/playstore.png"
              alt="Macaron Logo"
              width={48}
              height={48}
              className="w-12 h-12 rounded-2xl"
            />
            <div>
              <h1 className="font-display text-2xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-sm text-gray-500">Macaron AI Tools</p>
            </div>
          </div>

          {/* Markdown Content */}
          <article className="prose prose-gray prose-lg max-w-none
            prose-headings:font-display prose-headings:text-gray-900
            prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
            prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-lg prose-h3:font-medium prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-600 prose-p:leading-relaxed
            prose-li:text-gray-600
            prose-strong:text-gray-800
            prose-a:text-macaron-blush hover:prose-a:underline
          ">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
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
