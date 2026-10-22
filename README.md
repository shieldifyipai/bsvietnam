# BrandShield Vietnam Co., Ltd. — Corporate Web Application

A production-ready corporate marketing and lead-generation website for **BrandShield Vietnam Co., Ltd.**, an operational brand protection and intellectual property enforcement support consultancy based in Vietnam.

Built with **React**, **TypeScript**, **Tailwind CSS v4**, and **GSAP ScrollTrigger**.

---

## 1. Project Overview & Architecture

This website is designed with a polished B2B legal-tech aesthetic tailored for international and Southeast Asian enterprises seeking online brand monitoring, counterfeit detection, forensic digital evidence gathering, and platform takedown notice coordination.

### Technology Stack
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animation**: GSAP 3 + ScrollTrigger (with `prefers-reduced-motion` compliance and proper context cleanup)
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & JetBrains Mono (for forensic hashes and timestamp logs)

---

## 2. Project Structure

```
d:/bsvn/
├── public/
│   └── shield-icon.svg             # Shield brandmark icon / favicon
├── src/
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces (services, cases, forms, etc.)
│   ├── data/
│   │   └── siteData.ts             # Verified company info, services, processes, FAQs & placeholders
│   ├── hooks/
│   │   └── useReducedMotion.ts     # Accessibility hook for prefers-reduced-motion
│   ├── components/
│   │   ├── common/
│   │   │   ├── Logo.tsx            # Wordmark with shield placeholder mark
│   │   │   ├── Button.tsx          # Accessible buttons (variants, sizes, focus states)
│   │   │   ├── Badge.tsx           # Status, category, and placeholder tag indicators
│   │   │   ├── SectionHeading.tsx  # Editorial section headers (dark/light themes)
│   │   │   └── Modal.tsx           # Accessible dialog (traps focus, Escape key, ARIA)
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky responsive header with mobile drawer & consultation CTA
│   │   │   └── Footer.tsx          # Corporate footer with legal disclaimers, modals & dynamic year
│   │   └── sections/
│   │       ├── Hero.tsx            # Value proposition with code-built digital monitoring visual
│   │       ├── CapabilityStrip.tsx # Factual capability strip (no fake partner logos)
│   │       ├── ServicesSection.tsx # 6 core service cards with scope modal triggers
│   │       ├── ProcessSection.tsx  # 4-step workflow with scroll-linked progress line
│   │       ├── CaseWorkflowSection.tsx # Illustrative case workflow (clearly marked sample data)
│   │       ├── IndustriesSection.tsx   # 6 key industry threat vectors (sectors served)
│   │       ├── WhyUsSection.tsx    # 5 practical differentiators (no unsubstantiated claims)
│   │       ├── RiskEstimatorSection.tsx # Interactive brand risk & scope assessment tool
│   │       ├── AboutSection.tsx    # Corporate profile, mission, and team placeholders
│   │       ├── FaqSection.tsx      # Accessible accordion with direct legal & removal disclaimers
│   │       └── ContactSection.tsx  # Consultation request form with accessible validation
│   ├── App.tsx                     # Main layout and section orchestration
│   ├── index.css                   # Tailwind v4 configuration, font styling & reduced-motion
│   └── main.tsx                    # React DOM entrypoint
├── index.html                      # SEO metadata, Open Graph tags & Google fonts
├── vite.config.ts                  # Vite + React + Tailwind v4 plugin configuration
└── package.json
```

---

## 3. Development & Build Commands

Run the standard npm scripts:

```bash
# Start local development server (http://localhost:5173/)
npm run dev

# Run Oxlint linter
npm run lint

# Compile TypeScript and create production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Configuration & Production Setup

### A. Updating Placeholders
All company-specific details, addresses, and team biographies are consolidated in [`src/data/siteData.ts`](file:///d:/bsvn/src/data/siteData.ts):
- **Enterprise Registration Code (ERC)**: `COMPANY_INFO.registrationNumber`
- **Registered Office Address**: `COMPANY_INFO.registeredAddress`
- **Official Contact Email**: `COMPANY_INFO.contactEmail`
- **Direct Phone Line**: `COMPANY_INFO.contactPhone`
- **Specialist Biographies**: In [`src/components/sections/AboutSection.tsx`](file:///d:/bsvn/src/components/sections/AboutSection.tsx)

### B. Connecting the Consultation Form
The consultation request form in [`src/components/sections/ContactSection.tsx`](file:///d:/bsvn/src/components/sections/ContactSection.tsx) validates all required fields on the client and operates in development demonstration mode. To connect it to your production backend or CRM:

1. Create a `.env` file in the root directory:
   ```env
   VITE_CONSULTATION_ENDPOINT="https://api.yourdomain.com/v1/consultations"
   # Or for third-party form services (e.g., Formspree / HubSpot):
   # VITE_CONSULTATION_ENDPOINT="https://formspree.io/f/your_form_id"
   ```

2. In `ContactSection.tsx`, update the `handleSubmit` function to `fetch` or `axios.post` the `formData` payload to `import.meta.env.VITE_CONSULTATION_ENDPOINT`.

---

## 5. Compliance, Evidence & Legal Boundaries

- **No Fabricated Data**: The website contains no invented client logos, platform partnerships, success statistics, or legal certifications.
- **Clear Disclaimers**: Takedown outcomes depend on platform terms of service and judicial determinations. Services are described as monitoring, evidence collection, and platform notice coordination.
- **Non-Legal Practice Notice**: Explicit disclosures confirm that BrandShield Vietnam Co., Ltd. provides operational IP support and works alongside qualified legal counsel.
- **Accessibility**: Meets WCAG 2.1 AA standards for color contrast, keyboard navigation, focus indicators, and `prefers-reduced-motion` compliance.
