'use client';

import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageProvider';

export default function CaseStudiesPage() {
  const { translations } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // 客户成功案例数据
  const caseStudies = [
    {
      title: 'IKEA',
      description: 'Energy monitoring and HVAC optimization across their retail portfolio.',
      size: '4.6 Million m²',
      details: '70 stores including 4 shopping malls',
      image: '/images/renders/esgentics_render_R02_seasia_solution_web_1024x1024_v1.png',
      category: 'retail',
      detailedContent: `
        <h2>IKEA: Scaling Net-Zero Across a Global Retail Portfolio</h2>
        <p>70+ sites. 4.6 million sqm. One unified data platform.</p>
        <p>IKEA partnered with Akila to solve one of the most complex challenges in retail real estate: how to manage energy and carbon across a decentralized, franchise-owned global portfolio with uneven digital maturity.</p>
        
        <h3>The Challenge</h3>
        <ul>
          <li>Decentralized ownership – Different franchise owners made portfolio-wide ESG reporting complex</li>
          <li>Uneven digital maturity – Stores operated at different levels of data readiness</li>
          <li>Fragmented systems – Multiple BMS, HVAC, lighting, and energy systems across regions</li>
          <li>Inconsistent ESG data – No common structure or baseline for energy and carbon</li>
          <li>Hard to scale best practices – Sustainability successes were difficult to replicate</li>
        </ul>
        
        <h3>The Solution</h3>
        <p>Akila deployed a franchise-ready, system-of-systems layer that sits above existing infrastructure—independent of geography, system age, or complexity.</p>
        
        <h4>A Consistent ESG & Energy Data Foundation</h4>
        <ul>
          <li>Unified energy, carbon, and operational data into a single global reporting framework</li>
          <li>Ensured data reliability for internal targets and external disclosure</li>
          <li>Enabled portfolio-wide benchmarking without costly infrastructure upgrades</li>
        </ul>
        
        <h4>A Global Framework for Continuous Improvement</h4>
        <ul>
          <li>Identified best-performing stores and transferable practices</li>
          <li>Executed rollout of proven strategies across the portfolio</li>
          <li>Moved ESG from reporting to repeatable execution</li>
        </ul>
        
        <h4>A Long-Term Decarbonization Partnership</h4>
        <ul>
          <li>Supports IKEA's net-zero roadmap with continuous AI-driven optimization</li>
          <li>Partners with best-in-class technology providers to test and scale solutions</li>
        </ul>
        
        <h3>The Results</h3>
        <table>
          <tr>
            <th>Metric</th>
            <th>Achievement</th>
          </tr>
          <tr>
            <td>Portfolio coverage</td>
            <td>70+ sites across 4.6 million sqm</td>
          </tr>
          <tr>
            <td>Average energy savings</td>
            <td>22% across sites</td>
          </tr>
          <tr>
            <td>Carbon reduced</td>
            <td>2,500+ tons</td>
          </tr>
          <tr>
            <td>Different BMS types unified</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Energy meters installed</td>
            <td>600+</td>
          </tr>
        </table>
        
        <h3>Why IKEA Chose Akila</h3>
        <p>Akila provided what no single vendor could: a vendor-agnostic, scalable layer that works with any system, any franchise, anywhere in the world. No rip-and-replace. No infrastructure upgrades. Just visibility, intelligence, and action—at portfolio scale.</p>
      `
    },
    {
      title: 'DB Schenker',
      description: 'PV management, IEQ and energy monitoring, digitalized operation and management.',
      size: '54,000 m²',
      image: '/images/renders/esgentics_render_R03_eu_ecoplant_web_1024x1024_v1.png',
      category: 'logistics',
      detailedContent: `
        <h2>DB Schenker: Centralizing Warehouse Operations for Portfolio-Wide Efficiency</h2>
        <p>54,000 sqm. 4 siloed systems unified. 10% estimated energy savings.</p>
        <p>DB Schenker needed to streamline operations across multiple warehouse sites. Fragmented systems created redundant work, limited visibility, and hid efficiency opportunities. Akila delivered a single platform that centralizes everything.</p>
        
        <h3>The Challenge</h3>
        <ul>
          <li>Siloed systems – Multiple disconnected platforms for energy, maintenance, and operations</li>
          <li>High operator workload – Manual processes across different tools</li>
          <li>No portfolio visibility – Unable to benchmark or optimize across sites</li>
          <li>Hidden energy waste – No AI-driven analysis of HVAC or equipment performance</li>
        </ul>
        
        <h3>The Solution</h3>
        <p>Akila deployed a centralized portfolio management platform integrating Energy Suite, Maintenance Suite, and 3D Engine.</p>
        
        <h4>Systems Integration</h4>
        <ul>
          <li>Unified 4 siloed systems onto a single platform</li>
          <li>Centralized energy, maintenance, and environmental data</li>
          <li>Enabled portfolio-wide comparisons and benchmarking</li>
        </ul>
        
        <h4>Environment Management</h4>
        <ul>
          <li>Real-time monitoring of indoor environmental quality</li>
          <li>HVAC optimization across all sites</li>
          <li>Customized dashboards for facility managers and leadership</li>
        </ul>
        
        <h4>AI-Driven HVAC Optimization</h4>
        <ul>
          <li>Automated control strategies for warehouse spaces</li>
          <li>Estimated 10% energy savings from optimization alone</li>
        </ul>
        
        <h3>The Results</h3>
        <table>
          <tr>
            <th>Metric</th>
            <th>Achievement</th>
          </tr>
          <tr>
            <td>Warehouse space managed</td>
            <td>54,000 sqm</td>
          </tr>
          <tr>
            <td>Siloed systems unified</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Estimated energy savings</td>
            <td>10%</td>
          </tr>
        </table>
        
        <h3>Why DB Schenker Chose Akila</h3>
        <p>DB Schenker needed a platform that could unify the fragmented and optimize the complex. Akila delivered a single source of truth across the portfolio—reducing operator workload and unlocking energy savings at scale.</p>
      `
    },
    {
      title: 'Ariston',
      description: 'Smart Factory Intelligence with Real-Time Production Line Analytics.',
      size: '20,000 m²',
      image: '/images/renders/esgentics_render_R04_me_datanexus_web_1024x1024_v1.png',
      category: 'manufacturing',
      detailedContent: `
        <h2>Ariston: Smart Factory Intelligence with Real-Time Production Line Analytics</h2>
        <p>18 cameras. 2 production lines. $100K+ energy savings from one PV project.</p>
        <p>Ariston partnered with Akila to digitalize its smart factory operations, integrating video feeds, energy data, and production metrics into a single platform—delivering real-time visibility and automated alerts.</p>
        
        <h3>The Challenge</h3>
        <ul>
          <li>No centralized visibility – Production line performance and energy data were siloed</li>
          <li>Manual reporting – Energy consumption reports required manual compilation</li>
          <li>Reactive operations – No real-time alerts for asset status or anomalies</li>
          <li>Untapped optimization potential – No AI-driven analysis of production line efficiency</li>
        </ul>
        
        <h3>The Solution</h3>
        <p>Akila deployed its Energy Suite, Carbon Suite, and 3D Engine, with custom development for production line integration.</p>
        
        <h4>Systems Integration</h4>
        <ul>
          <li>Integrated 8 systems including video input from production lines</li>
          <li>18 cameras feed real-time monitoring into the platform</li>
          <li>Custom-developed real-time asset status alerts</li>
        </ul>
        
        <h4>Automated Energy Management</h4>
        <ul>
          <li>Automated energy consumption reports for 2 production lines</li>
          <li>Real-time monitoring of energy use by equipment and process</li>
          <li>Carbon tracking integrated with production data</li>
        </ul>
        
        <h4>AI-Driven Optimization</h4>
        <ul>
          <li>Compressed air analysis identified efficiency opportunities</li>
          <li>Predictive analytics for production line equipment</li>
          <li>One PV project delivered $100K+ in energy savings</li>
        </ul>
        
        <h3>The Results</h3>
        <table>
          <tr>
            <th>Metric</th>
            <th>Achievement</th>
          </tr>
          <tr>
            <td>Warehouse space managed</td>
            <td>20,000 sqm</td>
          </tr>
          <tr>
            <td>Energy savings from one PV project</td>
            <td>$100K+ USD</td>
          </tr>
          <tr>
            <td>Cameras integrated</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Production lines with automated reporting</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Systems integrated</td>
            <td>8</td>
          </tr>
        </table>
        
        <h3>Why Ariston Chose Akila</h3>
        <p>Ariston needed more than energy monitoring—they needed production intelligence. Akila delivered a platform that connects energy, carbon, and production line data, enabling real-time decisions and measurable savings.</p>
      `
    },
    {
      title: 'Saint-Gobain R&D Center',
      description: 'IAQ and energy monitoring, retrofit simulation, HVAC optimization.',
      size: '15,000 m²',
      image: '/images/renders/esgentics_render_R01_hero_web_1024x1024_v1.png',
      category: 'industrial',
      detailedContent: `
        <h2>Saint-Gobain: AI-Driven Energy Transformation Across R&D and Manufacturing</h2>
        <p>From one R&D center to multiple industrial hubs—scaling intelligence across a global portfolio.</p>
        <p>Starting in 2022, Saint-Gobain partnered with Akila to accelerate its decarbonization roadmap. What began as a pilot at Saint-Gobain Research Shanghai has expanded to multiple industrial sites, including Performance Plastics and Sekurit factories.</p>
        
        <h3>The Challenge</h3>
        <p>Saint-Gobain's R&D center faced a familiar problem: disparate building systems, siloed data, and high energy loads required for precision-controlled laboratory conditions. Manual data aggregation slowed reporting and hindered strategic decision-making.</p>
        <ul>
          <li>Fragmented HVAC, BMS, and EMS systems</li>
          <li>No centralized visibility across sites</li>
          <li>Manual carbon reporting—slow and error-prone</li>
        </ul>
        
        <h3>The Solution</h3>
        <p>Akila deployed its Energy Suite, Carbon Suite, and 3D Engine to unify data and optimize operations across the portfolio.</p>
        
        <h4>HVAC Optimization & Predictive Control</h4>
        <ul>
          <li>AI-powered optimization of chillers, heat pumps, and cleanroom facilities</li>
          <li>Winter freeze prevention protocols protected system efficiency during seasonal transitions</li>
          <li>Real-time indoor air quality monitoring ensured compliance with lab-grade environmental thresholds</li>
        </ul>
        
        <h4>Automated Carbon Tracking</h4>
        <ul>
          <li>Scope 1 and Scope 2 emissions tracked automatically</li>
          <li>Scope 3 integration in progress</li>
          <li>Power BI integration delivered instant access to KPIs</li>
        </ul>
        
        <h4>Scalable Digital Foundation</h4>
        <ul>
          <li>IoT sensors and AI models replicated across multiple factories</li>
          <li>Maintenance Suite improved equipment health and reduced unplanned outages</li>
          <li>Decarbonization cockpit dashboards now inform investment-grade sustainability decisions</li>
        </ul>
        
        <h3>The Results</h3>
        <table>
          <tr>
            <th>Metric</th>
            <th>Achievement</th>
          </tr>
          <tr>
            <td>Overall energy savings</td>
            <td>16.8% (2024 vs. 2021 baseline)</td>
          </tr>
          <tr>
            <td>Cleanroom energy savings</td>
            <td>35%</td>
          </tr>
          <tr>
            <td>Manual reporting time reduction</td>
            <td>70%</td>
          </tr>
          <tr>
            <td>Energy savings from HVAC optimization alone</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>Operating cost reduction</td>
            <td>18%</td>
          </tr>
        </table>
        
        <h3>What the Client Says</h3>
        <blockquote>
          "We want to reduce by 1/3 our own emissions in 2030 compared to 2017. We think that Akila, knowing better how we use energy in buildings, will be a key ingredient to achieve this transformation of the industry."
          <footer>— Ludovic Weber, CEO of Saint-Gobain Asia Pacific</footer>
        </blockquote>
        
        <h3>The Foundation for Global ESG Transformation</h3>
        <p>With Akila, Saint-Gobain now has a scalable, data-driven platform to digitalize its ESG strategy across facilities worldwide—turning energy efficiency from a one-off project into a continuous, AI-powered process.</p>
      `
    }
  ];

  // 分类列表
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'retail', label: 'Retail' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'industrial', label: 'Industrial' }
  ];

  // 过滤案例研究
  const filterCaseStudies = () => {
    if (selectedCategory === 'all') {
      return caseStudies;
    }
    return caseStudies.filter(study => study.category === selectedCategory);
  };

  // 处理查看案例研究详情
  const handleViewCaseStudy = (study) => {
    // 创建HTML内容
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${study.title} - Case Study | adenexus</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1, h2, h3, h4 {
            color: #2c3e50;
          }
          h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
          }
          h2 {
            font-size: 2em;
            margin-top: 40px;
            margin-bottom: 20px;
          }
          h3 {
            font-size: 1.5em;
            margin-top: 30px;
            margin-bottom: 15px;
          }
          h4 {
            font-size: 1.2em;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          p {
            margin-bottom: 15px;
          }
          ul {
            margin-bottom: 20px;
            padding-left: 20px;
          }
          li {
            margin-bottom: 5px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
          tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          blockquote {
            border-left: 4px solid #3498db;
            padding-left: 15px;
            margin: 20px 0;
            font-style: italic;
          }
          footer {
            margin-top: 10px;
            font-weight: bold;
          }
          .back-link {
            display: inline-block;
            margin-top: 40px;
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 4px;
          }
          .back-link:hover {
            background-color: #2980b9;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>adenexus</h1>
          ${study.detailedContent}
          <a href="javascript:window.close();" class="back-link">Close</a>
        </div>
      </body>
      </html>
    `;

    // 创建Blob对象
    const blob = new Blob([htmlContent], { type: 'text/html' });
    // 创建URL
    const url = URL.createObjectURL(blob);
    // 在新标签页中打开
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-deep-blue text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {translations?.caseStudies?.hero?.title || 'Client Success Stories'}
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            {translations?.caseStudies?.hero?.subtitle || 'Discover how our AI-driven solutions have transformed projects across different sectors.'}
          </p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Commercial</h3>
              <p className="text-sm text-gray-600">Brookfield Properties, REinvent Ventures, CCH Asset</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Retail</h3>
              <p className="text-sm text-gray-600">IKEA</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Manufacturing</h3>
              <p className="text-sm text-gray-600">Harman, Ariston, Gerflor</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Logistics</h3>
              <p className="text-sm text-gray-600">DB Schenker, CEVA Logistics</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">SNCF</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Hospitality</h3>
              <p className="text-sm text-gray-600">The Standard High Line</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-bold mb-2">Industrial</h3>
              <p className="text-sm text-gray-600">Saint-Gobain, Arkema</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Client Success Stories</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${selectedCategory === category.value ? 'bg-primary-red text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filterCaseStudies().map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <span className="bg-primary-red text-white text-sm px-3 py-1 rounded-full">
                      {study.size}
                    </span>
                  </div>
                  {study.details && (
                    <p className="text-sm text-gray-500 mb-4">{study.details}</p>
                  )}
                  <p className="text-gray-700 mb-4">{study.description}</p>
                  <button 
                    className="text-primary-red font-medium hover:underline"
                    onClick={() => handleViewCaseStudy(study)}
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {translations?.caseStudies?.cta?.title || 'Ready to transform your project?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {translations?.caseStudies?.cta?.body || 'Our team of experts is ready to help you implement intelligent construction solutions tailored to your specific needs.'}
          </p>
          <a 
            href="/contact" 
            className="bg-primary-red hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            {translations?.caseStudies?.cta?.cta || 'Get in Touch'}
          </a>
        </div>
      </section>
    </div>
  );
}