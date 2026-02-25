// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SessionFlow — Session Tracker & Invoice App for Tutors",
  description:
    "SessionFlow is a simple session tracking and invoice app for tutors, coaches, and freelancers. Track hours, manage payments, export invoices, and stay organised without spreadsheets.",
  metadataBase: new URL("https://sessionflow.sg"),

  openGraph: {
    title: "SessionFlow — Session Tracker & Invoice App for Tutors",
    description:
      "Track sessions, manage payments, and export invoices with SessionFlow. Built for tutors, coaches, trainers, and freelancers.",
    url: "https://sessionflow.sg",
    siteName: "SessionFlow",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "SessionFlow App Icon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SessionFlow — Session Tracker & Invoice App for Tutors",
    description:
      "Track sessions, manage payments, and export invoices. Built for session-based work.",
    images: ["/icon.png"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="SessionFlow icon"
                width={36}
                height={36}
                className="rounded-xl"
              />
              <span className="font-semibold tracking-tight">
                SessionFlow
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <Link
                className="hover:text-slate-900"
                href="/#features"
              >
                Features
              </Link>
              <Link
                className="hover:text-slate-900"
                href="/#how"
              >
                How it works
              </Link>
              <Link
                className="hover:text-slate-900"
                href="/support"
              >
                Support
              </Link>
            </nav>

            {/* CTA */}
            <Link
              href="/app-store"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Download
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Social Follow Section */}
        <section className="border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center">
            <p className="text-sm text-slate-600">
              Follow SessionFlow for productivity tips for tutors & freelancers.
            </p>
        
            <div className="mt-4 flex justify-center gap-6 text-sm font-medium">
              <a
                href="https://www.tiktok.com/@sessionflowapp"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @sessionflowapp on TikTok
              </a>
        
              <a
                href="https://www.instagram.com/sessionflowapp"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @sessionflowapp on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <Link className="hover:text-slate-900" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-slate-900" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-slate-900" href="/support">
              Support
            </Link>
          
            <span className="mx-2 hidden h-4 w-px bg-slate-300 md:block" />
          
            <a
              href="https://www.tiktok.com/@sessionflowapp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              TikTok
            </a>
          
            <a
              href="https://www.instagram.com/sessionflowapp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900"
            >
              Instagram
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
