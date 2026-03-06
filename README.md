# ESGentics.com Website

## Project Overview

ESGentics.com is a website for a next-generation construction technology company that leverages AI and NVIDIA hardware to deliver intelligent construction solutions. The website is designed to showcase the company's services, technology, and global reach.

## Technical Stack

### Frontend
- **Framework**: React + Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Custom components + React Icons
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **Validation**: Zod

### Backend
- **API Routes**: Next.js API Routes
- **Form Submission**: Email sending with Nodemailer
- **Data Validation**: Server-side validation

### Deployment
- **Hosting**: Azure App Service
- **Runtime**: Node.js 20 LTS
- **CDN**: Cloudflare Global (excluding mainland China nodes)
- **SSL**: Let's Encrypt or commercial certificate
- **Analytics**: Google Analytics 4

## Project Structure

```
esgentics.com/
├── app/
│   ├── page.tsx                 # Home page
│   ├── technology/
│   │   └── page.tsx             # Technology page
│   ├── solutions/
│   │   └── page.tsx             # Solutions page
│   ├── compliance/
│   │   └── page.tsx             # Compliance page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── privacy-policy/
│   │   └── page.tsx             # Privacy Policy page
│   ├── terms-of-service/
│   │   └── page.tsx             # Terms of Service page
│   ├── data-sovereignty-statement/
│   │   └── page.tsx             # Data Sovereignty Statement page
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts         # Contact form API
│   │   └── test/
│   │       └── route.ts         # Health check API
│   ├── components/
│   │   ├── Header.tsx           # Header component
│   │   ├── Footer.tsx           # Footer component
│   │   ├── LanguageProvider.tsx # Language context provider
│   │   └── LanguageSwitcher.tsx  # Language switcher component
│   ├── lib/
│   │   └── i18n.ts              # Internationalization utilities
│   ├── layout.tsx               # Global layout
├── locales/
│   ├── en.json                  # English translations
│   ├── fr.json                  # French translations
│   ├── ar.json                  # Arabic translations
│   └── de.json                  # German translations
├── public/
│   ├── images/
│   │   └── renders/             # 3D render images
├── styles/
│   ├── globals.css              # Global styles
├── .github/
│   └── workflows/
│       └── azure-deploy.yml     # GitHub Actions deployment workflow
├── package.json
├── README.md
└── README_Handover.md           # Project handover documentation
```

## Installation

### Prerequisites
- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Steps
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`

## Deployment

### Azure App Service Deployment
1. **Create Azure App Service**:
   - Sign in to Azure Portal
   - Create a new App Service
   - Runtime stack: Node.js 20 LTS
   - Operating system: Linux

2. **Configure GitHub Actions**:
   - The project includes a GitHub Actions workflow (`/.github/workflows/azure-deploy.yml`)
   - This workflow automatically builds and deploys the app when code is pushed to the main branch

3. **Configure Environment Variables**:
   - In Azure Portal, navigate to your App Service → Configuration → Application settings
   - Add the following environment variables:
     - `SMTP_USER`: Your email address for sending contact form submissions
     - `SMTP_PASS`: Your email password or app password
     - `NODE_ENV`: `production`

4. **Configure Custom Domain**:
   - In Azure Portal, navigate to your App Service → Custom domains
   - Add your custom domain (esgentics.com)
   - Configure DNS records

5. **SSL Certificate**:
   - In Azure Portal, navigate to your App Service → TLS/SSL settings
   - Configure SSL certificate (recommended: use Azure's free managed certificate)

### Local Development
1. **Prerequisites**:
   - Node.js 18.0.0 or later
   - npm 9.0.0 or later

2. **Installation**:
   - Clone the repository
   - Navigate to the project directory
   - Install dependencies: `npm install`
   - Start the development server: `npm run dev`
   - Open your browser and visit `http://localhost:3000`

## SEO Optimization

The website includes the following SEO optimizations:
- Page-specific meta titles and descriptions
- Structured data for better search engine understanding
- Proper heading hierarchy
- Alt text for images
- Clean URL structure
- XML sitemap generation

## Compliance

### Data Sovereignty
- No data is transferred to or stored in mainland China
- Servers are located in Singapore, Europe, and North America
- Compliance with GDPR, PDPA, and local data laws

### NVIDIA Brand Compliance
- Proper use of NVIDIA logos and branding
- Inclusion of "Powered by NVIDIA" or "NVIDIA Partner" statements

### Content Restrictions
- No mainland China-related content
- No Chinese language content
- No Chinese landmarks or symbols

## Testing

### Quality Assurance
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive design testing (mobile, tablet, desktop)
- Performance testing (PageSpeed Insights)
- Accessibility testing (WCAG 2.1 compliance)

### Security Testing
- SSL certificate verification
- Data encryption verification
- Vulnerability scanning

## Maintenance

### Regular Updates
- Dependencies updates
- Security patches
- Content updates

### Monitoring
- Uptime monitoring
- Performance monitoring
- Security monitoring

## Contact

For questions or support, please contact:
- Email: contact@esgentics.com
- Singapore Office: ESGentics Pte. Ltd., 9 Raffles Place, Republic Plaza, Singapore 048619
- European Office: 8 Rue Lemercier, 75017 Paris, France

## Project Status

### Completed Features
- ✅ Frontend development with Next.js 14
- ✅ Multi-language support (English, French, Arabic, German)
- ✅ Responsive design for all devices
- ✅ Contact form with email sending functionality
- ✅ API routes for form submission
- ✅ GitHub Actions CI/CD pipeline
- ✅ Azure App Service deployment
- ✅ Animation and interactive elements
- ✅ 3D render images integration

### Pending Features
- ⏳ Custom domain configuration
- ⏳ SSL certificate setup
- ⏳ Production SMTP email configuration
- ⏳ Analytics integration
- ⏳ Performance optimization
- ⏳ Additional content pages

## License

© 2026 ESGentics Pte. Ltd. All rights reserved.