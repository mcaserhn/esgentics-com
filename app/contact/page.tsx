"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLanguage } from '../components/LanguageProvider';

type FormData = {
  name: string;
  company: string;
  region: string;
  message: string;
  privacy: boolean;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { lang, translations } = useLanguage();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');
        // 可以添加表单重置逻辑
      } else {
        alert('Error submitting form: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-deep-blue text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {translations?.contact?.hero?.title || 'Start Your Project.'}
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.contact?.hero?.subtitle || 'Get in touch with our team to discuss your intelligent construction needs.'}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations?.contact?.contact_info?.title || 'Contact Information'}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">{translations?.contact?.contact_info?.headquarters || 'Headquarters'}</h3>
                  <p className="text-dark-gray">ESGentics Pte. Ltd.</p>
                  <p className="text-dark-gray">{translations?.contact?.contact_info?.address || '[Your Singapore Office Address], Singapore.'}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{translations?.contact?.contact_info?.email || 'Email'}</h3>
                  <p className="text-dark-gray">contact@esgentics.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{translations?.contact?.contact_info?.regions || 'Regions'}</h3>
                  <p className="text-dark-gray">{translations?.contact?.contact_info?.regions_text || 'Sales inquiries for NA, EU, ME, and SE Asia welcome.'}</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">{translations?.contact?.contact_info?.location || 'Our Location'}</h3>
                <div className="w-full h-64 bg-light-gray rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 border-4 border-primary-red rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-red">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <p className="text-dark-gray">{translations?.contact?.contact_info?.headquarters_location || 'Singapore Headquarters'}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">{translations?.contact?.form?.title || 'Send an Inquiry'}</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-dark-gray font-medium mb-2">{translations?.contact?.form?.name || 'Name *'}</label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red ${errors.name ? 'border-red-500' : 'border-medium-gray'}`}
                    {...register('name', { required: translations?.contact?.form?.errors?.name || 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-dark-gray font-medium mb-2">{translations?.contact?.form?.company || 'Company *'}</label>
                  <input
                    id="company"
                    type="text"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red ${errors.company ? 'border-red-500' : 'border-medium-gray'}`}
                    {...register('company', { required: translations?.contact?.form?.errors?.company || 'Company is required' })}
                  />
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                </div>

                <div>
                  <label htmlFor="region" className="block text-dark-gray font-medium mb-2">{translations?.contact?.form?.region || 'Region *'}</label>
                  <select
                    id="region"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red ${errors.region ? 'border-red-500' : 'border-medium-gray'}`}
                    {...register('region', { required: translations?.contact?.form?.errors?.region || 'Region is required' })}
                  >
                    <option value="">{translations?.contact?.form?.region_options?.select || 'Select Region'}</option>
                    <option value="NA">{translations?.contact?.form?.region_options?.na || 'North America'}</option>
                    <option value="EU">{translations?.contact?.form?.region_options?.eu || 'Europe'}</option>
                    <option value="ME">{translations?.contact?.form?.region_options?.me || 'Middle East'}</option>
                    <option value="SE Asia">{translations?.contact?.form?.region_options?.se_asia || 'Southeast Asia'}</option>
                    <option value="Others">{translations?.contact?.form?.region_options?.others || 'Others'}</option>
                  </select>
                  {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-dark-gray font-medium mb-2">{translations?.contact?.form?.message || 'Message *'}</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red ${errors.message ? 'border-red-500' : 'border-medium-gray'}`}
                    {...register('message', { required: translations?.contact?.form?.errors?.message || 'Message is required' })}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message || errors.message}</p>}
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className={`mt-1 mr-3 ${errors.privacy ? 'border-red-500' : 'border-medium-gray'}`}
                    {...register('privacy', { required: translations?.contact?.form?.errors?.privacy || 'You must agree to the Privacy Policy' })}
                  />
                  <label htmlFor="privacy" className="text-dark-gray">
                    {translations?.contact?.form?.privacy || 'I agree to the Privacy Policy and Data Processing Terms.'}
                  </label>
                </div>
                {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy.message}</p>}

                <button type="submit" className="btn-primary w-full">
                  {translations?.contact?.form?.submit || 'Send Inquiry'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {translations?.contact?.cta?.title || 'Ready to get started?'}
          </motion.h2>
          <motion.p 
            className="text-lg text-dark-gray mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {translations?.contact?.cta?.body || 'Our team is ready to help you bring your intelligent construction project to life.'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} className="btn-primary inline-block">
              {translations?.contact?.cta?.cta || 'Contact Us Now'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}