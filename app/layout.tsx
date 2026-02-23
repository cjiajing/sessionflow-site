// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SessionFlow — Track sessions. Get paid on time.",
  description:
    "SessionFlow helps tutors, coaches, trainers, and freelancers track sessions, manage payments, and stay organised.",
  metadataBase: new URL("https://sessionflow.sg"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-slate-900" />
              <span className="font-semibold tracking-tight">SessionFlow</span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
              <Link className="hover:text-slate-900" href="/#features">Features</Link>
              <Link className="hover:text-slate-900" href="/#how">How it works</Link>
              <Link className="hover:text-slate-900" href="/support">Support</Link>
            </nav>

            <a
              href="#cta"
              className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Get SessionFlow
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} SessionFlow. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-600">
              <Link className="hover:text-slate-900" href="/privacy">Privacy</Link>
              <Link className="hover:text-slate-900" href="/terms">Terms</Link>
              <Link className="hover:text-slate-900" href="/support">Support</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
