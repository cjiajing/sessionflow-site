export const metadata = {
  title: "SessionFlow Support",
  description:
    "Get help with SessionFlow: contact details, common questions, and guidance for subscriptions and invoices.",
};

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Support</h1>
      <p className="mt-3 text-slate-600">
        Thanks for using <strong>SessionFlow</strong>! If you need help, have feedback,
        or questions about subscriptions or billing, you can reach us here.
      </p>

      {/* Contact card */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
        <div className="mt-3 space-y-2 text-sm text-slate-700">
          <p>
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:dawsonstudy79@gmail.com">
              dawsonstudy79@gmail.com
            </a>
          </p>
          <p>
            <strong>Country:</strong> Singapore
          </p>
          <p className="text-slate-500">
            We aim to respond within 2–3 business days.
          </p>
        </div>
      </div>

      {/* Common questions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900">Common questions</h2>

        <div className="mt-4 space-y-4">
          <details className="rounded-2xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-semibold">
              Subscriptions & Premium Features
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              You can manage or cancel your subscription anytime via your iPhone’s
              App Store settings or from{" "}
              <a
                className="underline"
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noreferrer"
              >
                your Apple subscriptions
              </a>
              .
            </p>
          </details>

          <details className="rounded-2xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-semibold">
              Invoices & Payments
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              SessionFlow helps you track session fees and payment status.
              (If your app supports PDF invoices, keep this line — otherwise remove it.)
            </p>
          </details>

          <details className="rounded-2xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-semibold">
              Data & Privacy
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Your data is stored locally on your device unless otherwise stated.
              You can view our privacy policy at{" "}
              <a className="underline" href="/privacy">
                sessionflow.sg/privacy
              </a>
              .
            </p>
          </details>

          <details className="rounded-2xl border border-slate-200 p-5">
            <summary className="cursor-pointer font-semibold">
              Restore purchases
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              If you changed devices or reinstalled the app, try restoring purchases
              from the app’s subscription screen (if available) and ensure you’re
              signed into the same Apple ID.
            </p>
          </details>
        </div>
      </div>

      {/* Further help */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-lg font-semibold text-slate-900">Still need help?</h2>
        <p className="mt-2 text-sm text-slate-700">
          Email us at{" "}
          <a className="underline" href="mailto:dawsonstudy79@gmail.com">
            dawsonstudy79@gmail.com
          </a>{" "}
          with:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          <li>Your device model + iOS version</li>
          <li>What you expected to happen</li>
          <li>What actually happened (screenshots help)</li>
        </ul>
      </div>

      <p className="mt-10 text-xs text-slate-500">
        © {new Date().getFullYear()} SessionFlow. All rights reserved.
      </p>
    </div>
  );
}
