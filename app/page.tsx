'use client';

import Link from 'next/link';
import { useLanguage } from '../components/ui/LanguageProvider';
import Button from '../components/ui/Button';
import { Section, Container, SectionHeader } from '../components/ui/Section';
import Card, { CardTitle, CardText } from '../components/ui/Card';
import FadeIn from '../components/motion/FadeIn';

export default function Home() {
  const { lang, translations } = useLanguage();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section tone="dark" size="lg">
        <Container>
          <FadeIn>
            <div className="relative w-full h-96 md:h-96 rounded-lg overflow-hidden">
              {/* 3D 全球AI网络概念图 */}
              <img 
                src="/images/renders/adenexus-com_render_R01_hero_web_1024x1024_v1.png" 
                alt="Global AI Network Concept" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-aden-dark-blue/80 to-transparent flex items-center">
                <div className="px-6 md:px-10 lg:px-16 max-w-3xl">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-title font-bold mb-6 text-aden-white leading-tight">
                    {translations?.home?.hero?.title || 'AI-Driven Construction. Sustainable Future.'}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-aden-light-gray max-w-xl leading-relaxed">
                    {translations?.home?.hero?.subtitle || 'Next-generation construction technology powered by NVIDIA. From concept to operation, we deliver intelligent, sustainable buildings across Southeast Asia, Europe, North America, and the Middle East.'}
                  </p>
                  <div>
                    <Link href={lang === 'en' ? '/solutions' : `/${lang}/solutions`} passHref>
                      <Button variant="primary">
                        {translations?.home?.hero?.cta || 'Explore Solutions'}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-aden-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded">
                Conceptual Simulation
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="bg-gray-800 bg-opacity-50 px-6 py-3 rounded-full flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aden-white">
                    <path d="M18 3v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V3"></path>
                    <path d="M3 11h18"></path>
                    <path d="M3 16h18"></path>
                    <path d="M10 21h4"></path>
                  </svg>
                </div>
                <span className="text-sm text-gray-300">Computing Partner: NVIDIA</span>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Services Section */}
      <Section tone="default" size="md">
        <Container>
          <div className="text-center">
            <FadeIn>
              <SectionHeader 
                title={translations?.home?.services?.title || 'Our Services'}
                description={translations?.home?.services?.subtitle || 'We serve clients across Southeast Asia, North America, Europe, and the Middle East, spanning a diverse range of sectors:'}
              />
            </FadeIn>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {translations?.home?.services?.sectors?.map((sector, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-aden-light-gray px-4 py-2 rounded-full text-sm font-medium">
                    {sector}
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.5}>
              <p className="text-lg text-aden-dark-gray mt-8 font-body max-w-3xl mx-auto text-center">
                {translations?.home?.services?.cities || 'Supporting private sector modernization & net-zero in +80 cities.'}
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Value Proposition Section */}
      <Section tone="light" size="md">
        <Container>
          <div className="text-center">
            <FadeIn>
              <SectionHeader 
                title={translations?.home?.value_prop?.title || 'Future-proof your assets with AI-driven turnkey engineering'}
                description={translations?.home?.value_prop?.body || 'From concept to operation, we integrate NVIDIA-powered hardware with intelligent digital twin platforms to deliver construction projects that are smarter, faster, and built for net-zero.'}
              />
            </FadeIn>
            <div className="mt-10 max-w-3xl mx-auto">
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-title font-bold mb-6 text-left">{translations?.home?.how_we_get_there?.title || 'How we get there:'}</h3>
              </FadeIn>
              <ul className="space-y-6 text-left">
                {translations?.home?.how_we_get_there?.items?.map((item, index) => (
                  <FadeIn key={index} delay={0.3 + index * 0.1}>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-aden-orange flex items-center justify-center text-aden-white font-bold text-sm mr-4 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-aden-dark-gray font-body">{item}</p>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Section */}
      <Section tone="default" size="md">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-title font-bold mb-6">{translations?.home?.trust?.title || 'Global Standards. European Heritage.'}</h3>
              <p className="text-lg text-aden-dark-gray mb-10 font-body text-center">
                {translations?.home?.trust?.body || 'Headquartered in Singapore, we bring precision engineering and long-term ESG compliance to every project. Our team combines global expertise with local insights to deliver sustainable, intelligent construction solutions.'}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="w-full max-w-md mx-auto">
                {/* 国际化团队素材图占位 */}
                <div className="w-full aspect-video bg-gray-300 rounded-lg flex items-center justify-center mb-8">
                  <div className="text-center p-6">
                    <div className="w-24 h-24 mx-auto mb-4 border-4 border-aden-orange rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-aden-orange">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </div>
                    <p className="text-aden-dark-gray font-body">Global Team</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link href={lang === 'en' ? '/about' : `/${lang}/about`} passHref>
                <Button variant="primary">
                  {translations?.navigation?.about || 'Learn More'}
                </Button>
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section tone="dark" size="md">
        <Container>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-title font-bold mb-8 text-aden-white">
                {translations?.home?.cta?.title || 'Ready to start your intelligent construction project?'}
              </h2>
              <div>
                <Link href={lang === 'en' ? '/contact' : `/${lang}/contact`} passHref>
                  <Button variant="primary">
                    {translations?.home?.cta?.cta || 'Get in Touch'}
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}