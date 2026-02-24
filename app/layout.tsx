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

        {/* Footer */}
        <footer className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} SessionFlow. All rights reserved.
            </p>

            <div className="flex gap-4 text-sm text-slate-600">
              <Link
                className="hover:text-slate-900"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="hover:text-slate-900"
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="hover:text-slate-900"
                href="/support"
              >
                Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
