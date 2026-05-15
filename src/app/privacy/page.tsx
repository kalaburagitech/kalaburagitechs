import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KalaburagiTech",
  description:
    "KalaburagiTech Privacy Policy explains what data we collect, how we use it, and how we protect your privacy in accordance with Google Play Store requirements.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 text-body-color dark:bg-[#0B1220] dark:text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-xl border border-[#E5E7EB] bg-white p-10 shadow-xl dark:border-neutral-700 dark:bg-[#111827]">
          <h1 className="mb-2 text-4xl font-bold text-black dark:text-white">
            Privacy Policy
          </h1>

          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Effective Date: May 15, 2026
          </p>

          <p className="mb-6 text-lg leading-relaxed text-body-color dark:text-body-color-dark">
            At KalaburagiTech, we respect your privacy and are committed to
            protecting any personal or device data you share with us. This
            Privacy Policy explains what information we collect, how we use it,
            and how we protect it in line with Google Play Store requirements.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            1. Information We Collect
          </h2>

          <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
            We collect only the information necessary to provide our services,
            respond to inquiries, and improve the user experience. This may
            include:
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
            <li>
              Contact details such as name, email address, phone number, and
              project requirements submitted through forms.
            </li>

            <li>
              Technical information such as browser type, device type, operating
              system, and app version for analytics and performance monitoring.
            </li>

            <li>
              Non-personal usage data such as visited pages, feature usage, and
              navigation activity.
            </li>
          </ul>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            2. How We Use Your Information
          </h2>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
            <li>To provide and maintain our services.</li>

            <li>To respond to support requests and inquiries.</li>

            <li>
              To improve application performance, functionality, and user
              experience.
            </li>

            <li>
              To comply with legal obligations and protect our business rights.
            </li>
          </ul>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            3. App Permissions and Device Data
          </h2>

          <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
            Our applications may request certain permissions including Camera,
            Location, Storage, Notifications, and Internet access to provide
            essential features such as:
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 text-body-color dark:text-body-color-dark">
            <li>Face recognition attendance systems</li>

            <li>Security patrolling and live tracking</li>

            <li>Uploading profile images and reports</li>

            <li>Real-time alerts and notifications</li>

            <li>Performance monitoring and app functionality</li>
          </ul>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            These permissions are used only for core functionality and are never
            used for unauthorized tracking or sharing of personal data.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            4. Third-Party Services
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            We may use trusted third-party services for hosting, analytics,
            notifications, and performance monitoring. These services may
            collect limited technical or anonymized data required for service
            operation. We do not sell personal information to third parties.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            5. Children&apos;s Privacy
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            Our services are not intended for children under 13 years of age. We
            do not knowingly collect personal information from children. If such
            information is identified, we will take immediate steps to remove
            it.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            6. Data Security
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            We implement reasonable technical and organizational security
            measures to protect information from unauthorized access, misuse,
            disclosure, or loss. However, no online system can guarantee
            complete security.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            7. Your Rights
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            You may request access, correction, or deletion of your personal
            information by contacting us through the details provided below.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            8. Data Deletion Requests
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            Users may request account deletion or data removal by contacting us
            at the email address provided below. We will process valid requests
            in accordance with applicable laws and internal policies.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            9. Changes to This Privacy Policy
          </h2>

          <p className="mb-6 leading-relaxed text-body-color dark:text-body-color-dark">
            We may update this Privacy Policy periodically. Updated versions
            will be published on this page along with the revised effective
            date.
          </p>

          <h2 className="mb-4 mt-10 text-2xl font-semibold text-black dark:text-white">
            10. Contact Us
          </h2>

          <p className="leading-relaxed text-body-color dark:text-body-color-dark">
            If you have any questions regarding this Privacy Policy or your
            personal data, please contact us at:
          </p>

          <p className="mt-4 font-medium text-black dark:text-white">
            KalaburagiTech
          </p>

          <p className="text-body-color dark:text-body-color-dark">
            Email: kalaburagitech@gmail.com
          </p>

          <p className="text-body-color dark:text-body-color-dark">
            Phone: +91 6362050656
          </p>
        </div>
      </div>
    </section>
  );
}
