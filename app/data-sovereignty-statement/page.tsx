"use client";
import { motion } from 'framer-motion';
import { useLanguage } from '../../components/ui/LanguageProvider';

export default function DataSovereigntyStatement() {
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
            {translations?.data_sovereignty_statement?.hero?.title || 'Data Sovereignty Statement'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.data_sovereignty_statement?.hero?.subtitle || 'Our commitment to data sovereignty and compliance.'}
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
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.introduction?.title || 'Introduction'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.introduction?.body || 'ESGentics Pte. Ltd. ("we", "us", or "our") is committed to respecting data sovereignty and complying with applicable data protection laws in all regions where we operate. This Data Sovereignty Statement explains our approach to data residency and protection.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.data_residency?.title || 'Data Residency'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.data_residency?.body || 'We store and process personal data and project data in secure servers located in the following regions:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.data_sovereignty_statement?.sections?.data_residency?.items?.[0] || 'Singapore (for Southeast Asia operations)'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_residency?.items?.[1] || 'Europe (for European operations)'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_residency?.items?.[2] || 'North America (for North American operations)'}</li>
              </ul>
              <p className="text-aden-dark-gray font-body mt-4">
                <strong>{translations?.data_sovereignty_statement?.sections?.data_residency?.important || 'Important:'}</strong> {translations?.data_sovereignty_statement?.sections?.data_residency?.note || 'We do not transfer or store any data in mainland China. All data processing and storage occurs in the regions listed above.'}
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.compliance?.title || 'Compliance with Regional Laws'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.compliance?.body || 'We comply with the following regional data protection laws:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.data_sovereignty_statement?.sections?.compliance?.items?.[0] || 'General Data Protection Regulation (GDPR) in the European Union'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.compliance?.items?.[1] || 'Personal Data Protection Act (PDPA) in Singapore'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.compliance?.items?.[2] || 'Relevant data protection laws in North America and the Middle East'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.data_transfer?.title || 'Data Transfer'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.data_transfer?.body || 'When transferring data between regions, we ensure that appropriate safeguards are in place to protect the data. These safeguards may include:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.data_sovereignty_statement?.sections?.data_transfer?.items?.[0] || 'Standard Contractual Clauses (SCCs) for transfers to regions outside the EU'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_transfer?.items?.[1] || 'Encryption of data during transit'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_transfer?.items?.[2] || 'Access controls and authentication mechanisms'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.data_security?.title || 'Data Security'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.data_security?.body || 'We implement robust security measures to protect your data, including:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.data_sovereignty_statement?.sections?.data_security?.items?.[0] || 'Encryption of data at rest and in transit'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_security?.items?.[1] || 'Access controls and user authentication'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_security?.items?.[2] || 'Regular security assessments and audits'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_security?.items?.[3] || 'Incident response procedures'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.data_security?.items?.[4] || 'Employee training on data protection'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.user_rights?.title || 'Your Rights'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.user_rights?.body || 'Depending on your region, you may have the following rights regarding your personal data:'}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-aden-dark-gray font-body">
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[0] || 'Right to access your personal data'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[1] || 'Right to rectify inaccurate data'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[2] || 'Right to erasure of your data'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[3] || 'Right to restrict processing'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[4] || 'Right to data portability'}</li>
                <li>{translations?.data_sovereignty_statement?.sections?.user_rights?.items?.[5] || 'Right to object to processing'}</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-title font-bold mb-4">{translations?.data_sovereignty_statement?.sections?.contact?.title || 'Contact Us'}</h2>
              <p className="text-aden-dark-gray font-body mb-4">
                {translations?.data_sovereignty_statement?.sections?.contact?.body || 'If you have any questions or concerns about our data sovereignty practices, please contact us at:'}
              </p>
              <p className="text-aden-dark-gray font-body">
                {translations?.data_sovereignty_statement?.sections?.contact?.email || 'Email: contact@adenexus.com'}<br />
                {translations?.data_sovereignty_statement?.sections?.contact?.address || 'Address: adenexus Pte. Ltd., [Your Singapore Office Address], Singapore'}
              </p>
            </div>

            <div className="bg-aden-light-gray p-6 rounded-lg">
              <p className="text-aden-dark-gray font-body text-sm">
                <strong>{translations?.data_sovereignty_statement?.last_updated || 'Last Updated:'}</strong> {translations?.data_sovereignty_statement?.last_updated_date || 'February 26, 2026'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
