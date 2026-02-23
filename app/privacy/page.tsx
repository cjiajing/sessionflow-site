export const metadata = {
  title: "Privacy Policy - SessionFlow",
  description: "Privacy Policy for SessionFlow.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        Privacy Policy
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Last updated: March 2026
      </p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">

        <section>
          <p>
            <strong>Owner:</strong> Christopher Cho
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:dawsonstudy79@gmail.com"
              className="underline"
            >
              dawsonstudy79@gmail.com
            </a>
          </p>
          <p>
            <strong>Country:</strong> Singapore
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            1. Information We Collect
          </h2>
          <p className="mt-2">
            SessionFlow stores information that you voluntarily enter into the app,
            including:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Client or student names</li>
            <li>Session details and notes</li>
            <li>Payment and invoice records</li>
            <li>Scheduling information</li>
          </ul>
          <p className="mt-2">
            This data is stored locally on your device and is not transmitted to
            external servers unless future features explicitly require it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            2. How We Use Your Data
          </h2>
          <p className="mt-2">
            Your data is used solely to provide core app functionality, including:
          </p>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Managing sessions</li>
            <li>Tracking payments</li>
            <li>Generating summaries</li>
            <li>Sending reminders (if enabled)</li>
          </ul>
          <p className="mt-2">
            SessionFlow does not sell, rent, or share your personal data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            3. Location Data
          </h2>
          <p className="mt-2">
            If you enable location-based reminders, SessionFlow may access your
            approximate location to notify you when you arrive at a session.
          </p>
          <p className="mt-2">
            Location data is used only for this purpose and is not stored or shared.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            4. Data Storage & Security
          </h2>
          <p className="mt-2">
            All information is stored locally on your device. We do not maintain
            external databases containing your session data.
          </p>
          <p className="mt-2">
            You are responsible for securing your device using passwords,
            biometrics, or other security measures.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            5. Data Deletion
          </h2>
          <p className="mt-2">
            You may delete your data at any time by deleting entries within the app
            or uninstalling SessionFlow from your device.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            6. Third-Party Services
          </h2>
          <p className="mt-2">
            SessionFlow may use Apple services such as in-app purchases or
            system notifications. These services are governed by Apple’s own
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            7. Changes to This Policy
          </h2>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Updates will be
            reflected on this page with a revised “Last updated” date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-900">
            8. Contact
          </h2>
          <p className="mt-2">
            If you have questions about this Privacy Policy, you may contact:
          </p>
          <p className="mt-2">
            <a
              href="mailto:dawsonstudy79@gmail.com"
              className="underline"
            >
              dawsonstudy79@gmail.com
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
