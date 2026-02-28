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
- **Form Submission**: Email sending + data storage (optional)

### Deployment
- **Hosting**: Vercel or AWS Amplify
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
│   ├── layout.tsx               # Global layout
│   └── components/
│       ├── Header.tsx           # Header component
│       ├── Footer.tsx           # Footer component
├── public/
│   ├── images/                  # Image resources
│   └── fonts/                   # Font resources
├── styles/
│   ├── globals.css              # Global styles
├── lib/
│   └── utils.ts                 # Utility functions
├── package.json
└── README.md
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

### Vercel Deployment
1. Sign up for a Vercel account
2. Connect your GitHub repository to Vercel
3. Configure the project settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy the project
5. Configure custom domain (esgentics.com)

### AWS Amplify Deployment
1. Sign in to the AWS Management Console
2. Navigate to AWS Amplify
3. Create a new app and connect your GitHub repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next/static`
5. Deploy the app
6. Configure custom domain (esgentics.com)

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
- Address: ESGentics Pte. Ltd., [Your Singapore Office Address], Singapore

## License

© 2026 ESGentics Pte. Ltd. All rights reserved.