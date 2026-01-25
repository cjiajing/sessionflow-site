export const metadata = {
  title: "Privacy Policy - SessionFlow",
  description: "Privacy Policy for SessionFlow.",
};

export default function PrivacyPage() {
  return (
    <main className="card">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Owner:</strong> Christopher Cho
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:dawsonstudy79@gmail.com">
          dawsonstudy79@gmail.com
        </a>
      </p>
      <p>
        <strong>Country:</strong> Singapore
      </p>

      <h2>Information We Collect</h2>
      <p>
        SessionFlow stores information you enter about your clients, sessions,
        and invoices. This data is stored locally on your device and is not
        shared with third parties.
      </p>

      <h2>Use of Data</h2>
      <p>
        Data is used solely to help you manage your sessions and payments,
        including scheduling, record-keeping, and invoice generation.
      </p>

      <h2>Location Data</h2>
      <p>
        If you enable location-based reminders, SessionFlow may use your
        approximate location to notify you when you arrive at a session.
      </p>
    </main>
  );
}
