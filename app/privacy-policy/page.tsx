"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/ui/LanguageProvider';

export default function PrivacyPolicy() {
  const { translations } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-aden-dark-blue text-white py-20 md:py-32">
        <div className="container-content">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-title font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {translations?.privacy_policy?.hero?.title || 'Privacy Policy'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.privacy_policy?.hero?.subtitle || 'Our commitment to protecting your personal data.'}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container-content max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.introduction?.title || 'Introduction'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.introduction?.body || 'ESGentics Pte. Ltd. ("we", "us", or "our") is committed to protecting the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you visit our website or use our services.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.data_collected?.title || 'Data We Collect'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.data_collected?.body || 'We may collect the following types of personal data:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.privacy_policy?.sections?.data_collected?.items?.[0] || 'Personal information: name, email address, phone number, company name, and job title'}</li>
                <li>{translations?.privacy_policy?.sections?.data_collected?.items?.[1] || 'Usage data: information about how you use our website, including IP address, browser type, and access times'}</li>
                <li>{translations?.privacy_policy?.sections?.data_collected?.items?.[2] || 'Cookies: small text files stored on your device to enhance your browsing experience'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.data_usage?.title || 'How We Use Your Data'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.data_usage?.body || 'We use your personal data for the following purposes:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.privacy_policy?.sections?.data_usage?.items?.[0] || 'To respond to your inquiries and provide customer support'}</li>
                <li>{translations?.privacy_policy?.sections?.data_usage?.items?.[1] || 'To process and fulfill your requests for our services'}</li>
                <li>{translations?.privacy_policy?.sections?.data_usage?.items?.[2] || 'To improve our website and services'}</li>
                <li>{translations?.privacy_policy?.sections?.data_usage?.items?.[3] || 'To send you marketing communications (with your consent)'}</li>
                <li>{translations?.privacy_policy?.sections?.data_usage?.items?.[4] || 'To comply with legal and regulatory requirements'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.data_sharing?.title || 'Data Sharing'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.data_sharing?.body || 'We may share your personal data with:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.privacy_policy?.sections?.data_sharing?.items?.[0] || 'Our employees and contractors who need access to your data to perform their duties'}</li>
                <li>{translations?.privacy_policy?.sections?.data_sharing?.items?.[1] || 'Third-party service providers who help us operate our website and provide our services'}</li>
                <li>{translations?.privacy_policy?.sections?.data_sharing?.items?.[2] || 'Legal authorities when required by law or to protect our rights'}</li>
              </ul>
              <p className="text-aden-dark-gray font-body mt-4">
                {translations?.privacy_policy?.sections?.data_sharing?.note || 'We do not sell or rent your personal data to third parties.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.data_security?.title || 'Data Security'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.data_security?.body || 'We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, and regular security assessments.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.data_residency?.title || 'Data Residency'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.data_residency?.body || 'We store your personal data in secure servers located in Singapore, Europe, and North America. We do not transfer or store any data in mainland China.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.user_rights?.title || 'Your Rights'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.user_rights?.body || 'You have the following rights regarding your personal data:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[0] || 'Access: Request a copy of the personal data we hold about you'}</li>
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[1] || 'Correction: Request correction of inaccurate or incomplete personal data'}</li>
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[2] || 'Deletion: Request deletion of your personal data'}</li>
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[3] || 'Restriction: Request restriction of processing your personal data'}</li>
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[4] || 'Portability: Request transfer of your personal data to another organization'}</li>
                <li>{translations?.privacy_policy?.sections?.user_rights?.items?.[5] || 'Objection: Object to processing of your personal data for marketing purposes'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.cookies?.title || 'Cookies'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.cookies?.body || 'Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.changes?.title || 'Changes to This Policy'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.changes?.body || 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.privacy_policy?.sections?.contact?.title || 'Contact Us'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.privacy_policy?.sections?.contact?.body || 'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:'}
              </p>
              <p className="text-aden-dark-gray font-body">
                {translations?.privacy_policy?.sections?.contact?.email || 'Email: contact@esgentics.com'}<br />
                {translations?.privacy_policy?.sections?.contact?.address || 'Address: ESGentics Pte. Ltd., [Your Singapore Office Address], Singapore'}
              </p>
            </div>

            <div className="bg-aden-light-gray p-6 rounded-lg">
              <p className="text-aden-dark-gray font-body text-sm">
                <strong>{translations?.privacy_policy?.last_updated || 'Last Updated:'}</strong> {translations?.privacy_policy?.last_updated_date || 'February 26, 2026'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
