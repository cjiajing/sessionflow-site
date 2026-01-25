export const metadata = {
  title: "Terms of Service - SessionFlow",
  description: "Terms of Service for SessionFlow.",
};

export default function TermsPage() {
  return (
    <main className="card">
      <h1>Terms of Service</h1>

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

      <h2>Use of App</h2>
      <p>
        SessionFlow is intended to help users manage sessions, track work
        performed, and create invoices. By using this app, you agree to use it
        responsibly and in compliance with applicable laws.
      </p>

      <h2>Subscriptions</h2>
      <p>
        SessionFlow Premium is offered as a subscription with additional
        features such as enhanced session tracking and invoice export.
        Payments and subscriptions are securely handled by Apple via in-app
        purchases.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        The app is provided “as is.” To the maximum extent permitted by law,
        we are not liable for any indirect, incidental, or consequential
        damages resulting from its use.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Any changes will be
        reflected on this page with a revised effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions about these Terms, please contact{" "}
        <a href="mailto:dawsonstudy79@gmail.com">
          dawsonstudy79@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
