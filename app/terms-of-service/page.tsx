"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/ui/LanguageProvider';

export default function TermsOfService() {
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
            {translations?.terms_of_service?.hero?.title || 'Terms of Service'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.terms_of_service?.hero?.subtitle || 'Terms and conditions for using our website and services.'}
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
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.introduction?.title || 'Introduction'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.introduction?.body || 'These Terms of Service ("Terms") govern your use of the adenexus.com website ("Website") and the services provided by adenexus Pte. Ltd. ("we", "us", or "our"). By accessing or using our Website or services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or services.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.use_of_website?.title || 'Use of the Website'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.use_of_website?.body || 'You may use our Website for lawful purposes only. You agree not to:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.terms_of_service?.sections?.use_of_website?.items?.[0] || 'Use the Website in any way that violates applicable laws or regulations'}</li>
                <li>{translations?.terms_of_service?.sections?.use_of_website?.items?.[1] || 'Attempt to gain unauthorized access to any part of the Website or our systems'}</li>
                <li>{translations?.terms_of_service?.sections?.use_of_website?.items?.[2] || 'Interfere with or disrupt the operation of the Website'}</li>
                <li>{translations?.terms_of_service?.sections?.use_of_website?.items?.[3] || 'Use the Website to distribute malware or other harmful content'}</li>
                <li>{translations?.terms_of_service?.sections?.use_of_website?.items?.[4] || 'Use the Website for any fraudulent or deceptive purposes'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.intellectual_property?.title || 'Intellectual Property'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.intellectual_property?.body || 'All content on the Website, including text, graphics, logos, images, and software, is the property of adenexus Pte. Ltd. or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.services?.title || 'Services'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.services?.body || 'We provide intelligent construction services as described on our Website. The specific terms and conditions for each service will be set forth in a separate agreement between you and us.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.limitation_of_liability?.title || 'Limitation of Liability'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.limitation_of_liability?.body || 'To the maximum extent permitted by law, adenexus Pte. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Website or our services. Our total liability for any claim arising out of or in connection with these Terms shall not exceed the amount paid by you for our services, if any.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.disclaimer_of_warranties?.title || 'Disclaimer of Warranties'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.disclaimer_of_warranties?.body || 'The Website and our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Website will be error-free or uninterrupted, or that any defects will be corrected.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.indemnification?.title || 'Indemnification'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.indemnification?.body || 'You agree to indemnify, defend, and hold harmless adenexus Pte. Ltd. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of the Website or our services, or your violation of these Terms.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.governing_law?.title || 'Governing Law'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.governing_law?.body || 'These Terms shall be governed by and construed in accordance with the laws of Singapore. Any dispute arising out of or in connection with these Terms shall be submitted to the exclusive jurisdiction of the courts of Singapore.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.changes?.title || 'Changes to These Terms'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.changes?.body || 'We may update these Terms from time to time. We will notify you of any significant changes by posting the updated Terms on our Website. Your continued use of the Website or our services after such changes constitutes your acceptance of the updated Terms.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.terms_of_service?.sections?.contact?.title || 'Contact Us'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.terms_of_service?.sections?.contact?.body || 'If you have any questions or concerns about these Terms, please contact us at:'}
              </p>
              <p className="text-aden-dark-gray font-body">
                {translations?.terms_of_service?.sections?.contact?.email || 'Email: contact@adenexus.com'}<br />
                {translations?.terms_of_service?.sections?.contact?.address || 'Address: adenexus Pte. Ltd., [Your Singapore Office Address], Singapore'}
              </p>
            </div>

            <div className="bg-aden-light-gray p-6 rounded-lg">
              <p className="text-aden-dark-gray font-body text-sm">
                <strong>{translations?.terms_of_service?.last_updated || 'Last Updated:'}</strong> {translations?.terms_of_service?.last_updated_date || 'February 26, 2026'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
