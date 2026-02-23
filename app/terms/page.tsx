export const metadata = {
  title: "Terms of Service - SessionFlow",
  description: "Terms of Service for SessionFlow.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: March 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
        <section>
          <p>
            <strong>Owner:</strong> Christopher Cho
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a className="underline" href="mailto:dawsonstudy79@gmail.com">
              dawsonstudy79@gmail.com
            </a>
          </p>
          <p>
            <strong>Country:</strong> Singapore
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">1. Acceptance of Terms</h2>
          <p className="mt-2">
            By downloading, accessing, or using SessionFlow, you agree to these Terms of Service.
            If you do not agree, please do not use the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">2. Use of the App</h2>
          <p className="mt-2">
            SessionFlow is intended to help users manage sessions, track work performed,
            and manage payments. You agree to use the app responsibly and in compliance
            with applicable laws.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>You are responsible for the accuracy of information you enter.</li>
            <li>You must not misuse the app (e.g., attempt to disrupt or reverse engineer it).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">3. Subscriptions & Billing</h2>
          <p className="mt-2">
            SessionFlow may offer optional subscription features (“SessionFlow Premium”).
            Purchases, payments, and subscription management are handled by Apple via in-app purchases.
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.
            </li>
            <li>
              You can manage or cancel subscriptions in your Apple ID settings, or at{" "}
              <a
                className="underline"
                href="https://apps.apple.com/account/subscriptions"
                target="_blank"
                rel="noreferrer"
              >
                Apple Subscriptions
              </a>
              .
            </li>
            <li>
              Apple may provide refunds in accordance with its policies. SessionFlow does not directly process refunds.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">4. Data & Privacy</h2>
          <p className="mt-2">
            Your use of SessionFlow is also governed by our Privacy Policy. Please review it at{" "}
            <a className="underline" href="/privacy">
              sessionflow.sg/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">5. Availability & Changes</h2>
          <p className="mt-2">
            We may update, modify, or discontinue parts of the app at any time to improve functionality,
            security, or user experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">6. Limitation of Liability</h2>
          <p className="mt-2">
            SessionFlow is provided “as is” without warranties of any kind. To the maximum extent
            permitted by law, we are not liable for any indirect, incidental, special, or consequential
            damages arising from your use of the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">7. Termination</h2>
          <p className="mt-2">
            You may stop using SessionFlow at any time. We may suspend or terminate access if we
            reasonably believe the app is being misused or used unlawfully.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">8. Changes to These Terms</h2>
          <p className="mt-2">
            We may update these Terms from time to time. Any changes will be reflected on this page
            with a revised “Last updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">9. Contact</h2>
          <p className="mt-2">
            If you have questions about these Terms, contact{" "}
            <a className="underline" href="mailto:dawsonstudy79@gmail.com">
              dawsonstudy79@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
