// app/page.tsx
import Link from "next/link";

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
              schedule sessions, and manage payments — without messy spreadsheets.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {/* TODO: replace with your real App Store link */}
              <a
                id="cta"
                href="https://apps.apple.com/"
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

            <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
              <MiniCard title="Hours tracked" desc="Know exactly what you worked" />
              <MiniCard title="Payment status" desc="See unpaid at a glance" />
              <MiniCard title="Simple system" desc="Sessions, notes, fees" />
            </div>
          </div>

          {/* Mock preview (swap with screenshots later) */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">This week</div>
              <div className="text-xs text-slate-500">Session summary</div>
            </div>

            <div className="mt-4 space-y-4">
              <PreviewRow name="Student — Math" meta="Tue, 7:00pm • 1h" badge="Unpaid" />
              <PreviewRow name="Client — Training" meta="Thu, 6:30pm • 1.5h" badge="Paid" paid />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tip: screenshots increase conversions a lot — add 2–3 real ones here later.
            </p>
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
          <FeatureCard title="Payment status" desc="See who’s paid, who’s overdue, and what’s due next." />
          <FeatureCard title="Reminders" desc="Nudges so you don’t miss billing and follow-ups." />
          <FeatureCard title="Notes & progress" desc="Keep lesson notes and progress in one place." />
          <FeatureCard title="Export summaries" desc="Generate clean summaries when you need them." />
          <FeatureCard title="Made for mobile" desc="Quick updates between sessions." />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <StepCard title="1) Add clients/students" desc="Basic details, rates, and preferences." />
            <StepCard title="2) Log sessions" desc="Hours, notes, fees — done in seconds." />
            <StepCard title="3) Track payments" desc="Know what’s due and what’s paid." />
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
              Track sessions and payments with a clean, simple workflow.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://apps.apple.com/"
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
