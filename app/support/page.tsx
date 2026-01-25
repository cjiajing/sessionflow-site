export const metadata = {
  title: "SessionFlow Support",
  description:
    "Get help with SessionFlow: contact details, common questions, and guidance for subscriptions and invoices.",
};

export default function SupportPage() {
  return (
    <main
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
        lineHeight: 1.6,
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 16px",
      }}
    >
      <h1 style={{ color: "#2563eb", marginBottom: 8 }}>
        SessionFlow Support
      </h1>

      <p>
        Thanks for using <strong>SessionFlow</strong>! If you need help, have
        feedback, or questions about subscriptions or billing, you can reach us
        here:
      </p>

      <ul>
        <li>
          Email:{" "}
          <a href="mailto:dawsonstudy79@gmail.com">
            dawsonstudy79@gmail.com
          </a>
        </li>
        <li>Country: Singapore</li>
      </ul>

      <h2 style={{ marginTop: 24 }}>Common Questions</h2>

      <ul>
        <li>
          <strong>Subscriptions & Premium Features:</strong> You can manage or
          cancel your subscription anytime via your iPhone’s App Store settings
          or from{" "}
          <a
            href="https://apps.apple.com/account/subscriptions"
            target="_blank"
            rel="noreferrer"
          >
            your Apple subscriptions
          </a>
          .
        </li>

        <li>
          <strong>Invoices & Payments:</strong> SessionFlow allows you to
          generate and export professional PDF invoices for your sessions.
        </li>

        <li>
          <strong>Data & Privacy:</strong> Your data is stored securely on your
          device unless otherwise stated.
        </li>
      </ul>

      <h2 style={{ marginTop: 24 }}>Further Help</h2>

      <p>
        For anything else, email us at{" "}
        <a href="mailto:dawsonstudy79@gmail.com">
          dawsonstudy79@gmail.com
        </a>
        . We aim to respond within 2–3 business days.
      </p>

      <p style={{ marginTop: 32, fontSize: 14, color: "#6b7280" }}>
        © 2026 SessionFlow. All rights reserved.
      </p>
    </main>
  );
}
