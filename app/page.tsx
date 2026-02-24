// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const APP_STORE_URL = "/app-store";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              Built for session-based work
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Track sessions. Get paid on time. Stay organised.
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              SessionFlow helps tutors, coaches, trainers, and freelancers track hours,
              schedule sessions, manage payments, and export invoices — without messy spreadsheets.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                id="cta"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Download on the App Store
              </a>

              <Link
                href="#features"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
              >
                See features
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Available on iPhone & iPad •{" "}
              <a
                className="underline"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
              >
                View on the App Store
              </a>
            </p>

            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <MiniCard title="Hours tracked" desc="Know exactly what you worked" />
              <MiniCard title="Payment status" desc="See unpaid at a glance" />
              <MiniCard title="Invoice export" desc="Generate & export invoices" />
            </div>
          </div>

          {/* Screenshots */}
          <div className="grid gap-6">
            <Image
              src="/screenshots/dashboard.png"
              alt="SessionFlow dashboard overview"
              width={500}
              height={1000}
              className="rounded-3xl border border-slate-200 shadow-sm"
            />
          
            <Image
              src="/screenshots/payment-tracking.png"
              alt="Payment tracking screen"
              width={500}
              height={1000}
              className="rounded-3xl border border-slate-200 shadow-sm"
            />
          
            <Image
              src="/screenshots/pdf-invoice.png"
              alt="PDF invoice export screen"
              width={500}
              height={1000}
              className="rounded-3xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
          <p className="text-sm text-slate-600">
            Perfect for <b className="text-slate-900">tutors</b>, <b className="text-slate-900">coaches</b>,{" "}
            <b className="text-slate-900">trainers</b> and <b className="text-slate-900">freelancers</b>.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-semibold tracking-tight">
          Everything you need for session-based work
        </h2>
        <p className="mt-2 text-slate-600">
          Keep it simple. Keep it consistent. Keep getting paid.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <FeatureCard title="Session tracking" desc="Log sessions fast. Auto-tally hours and fees." />
          <FeatureCard title="Flexible scheduling" desc="Plan sessions and stay organised week to week." />
          <FeatureCard title="Payment tracking" desc="See paid, unpaid, overdue, and what’s due next." />
          <FeatureCard title="Invoice export" desc="Generate and export professional invoices when needed." />
          <FeatureCard title="Location reminders" desc="Optional check-in reminders when you arrive at a session." />
          <FeatureCard title="Insights dashboard" desc="Quick view of hours, sessions, and payment status." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <StepCard title="1) Add clients/students" desc="Set rates, session defaults, and details." />
            <StepCard title="2) Log sessions" desc="Track hours, notes, and payments in seconds." />
            <StepCard title="3) Export & follow up" desc="Export invoices and keep payments on track." />
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">The 3 mistakes SessionFlow fixes</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Not tracking hours</li>
              <li>• Forgetting payment dates</li>
              <li>• No proper system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to simplify session-based work?
            </h2>
            <p className="mt-2 text-slate-600">
              Track sessions, manage payments, and export invoices with a clean workflow.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Download on the App Store
              </a>
              <Link
                href="/support"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
              >
                Contact support
              </Link>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Prefer to check it first?{" "}
              <a className="underline" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                View SessionFlow on the App Store
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3">
      <div className="font-semibold">{title}</div>
      <div className="text-slate-600">{desc}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function StepCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{desc}</div>
    </div>
  );
}

function PreviewRow({
  name,
  meta,
  badge,
  paid,
}: {
  name: string;
  meta: string;
  badge: string;
  paid?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-slate-500">{meta}</div>
        </div>
        <span
          className={[
            "rounded-full px-2 py-1 text-xs font-semibold",
            paid ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700",
          ].join(" ")}
        >
          {badge}
        </span>
      </div>
      <div className="mt-3 text-sm text-slate-600">
        Notes: quick summary + progress tracking.
      </div>
    </div>
  );
}
