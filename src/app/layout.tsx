import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Macaron AI Tools - Your pocket of AI inspirations',
  description: 'Discover a delightful collection of AI-powered tools. Macaron AI Tools brings you bite-sized AI applications for everyday magic.',
  keywords: ['AI', 'tools', 'inspiration', 'productivity', 'macaron', 'artificial intelligence'],
  authors: [{ name: 'Macaron AI Tools' }],
  openGraph: {
    title: 'Macaron AI Tools - Your pocket of AI inspirations',
    description: 'Discover a delightful collection of AI-powered tools. Macaron AI Tools brings you bite-sized AI applications for everyday magic.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macaron AI Tools',
    description: 'Your pocket of AI inspirations',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {/* Floating background orbs */}
        <div className="macaron-bg">
          <div 
            className="macaron-orb animate-float" 
            style={{ 
              width: '400px', 
              height: '400px', 
              background: '#FFB6C1', 
              top: '-100px', 
              left: '-100px' 
            }} 
          />
          <div 
            className="macaron-orb animate-float-delayed" 
            style={{ 
              width: '300px', 
              height: '300px', 
              background: '#E6E6FA', 
              top: '30%', 
              right: '-50px' 
            }} 
          />
          <div 
            className="macaron-orb animate-float" 
            style={{ 
              width: '350px', 
              height: '350px', 
              background: '#98FB98', 
              bottom: '10%', 
              left: '10%',
              animationDelay: '1s'
            }} 
          />
          <div 
            className="macaron-orb animate-float-delayed" 
            style={{ 
              width: '250px', 
              height: '250px', 
              background: '#FFDAB9', 
              top: '60%', 
              right: '20%' 
            }} 
          />
        </div>
        
        {children}
      </body>
    </html>
  )
}

