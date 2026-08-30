# Product Requirements Document (PRD) & Security Guide

## 1. Product Overview
This document outlines the requirements, architecture, and security specifications for Rudranarayan Sahu's Personal Portfolio web application.

### 1.1 Objective
Provide an interactive, highly engaging, and secure personal portfolio showcasing technical skills, projects, and achievements.

### 1.2 Target Audience
- Recruiters and Hiring Managers
- Technical Leaders & Peers
- Academic Researchers


## 2. Core Features & Requirements

### 2.1 User Interface & Experience
- **Terminal Boot Sequence**: An animated, CLI-style intro that loads within 3 seconds for optimal UX.
- **3D Interactive Background**: Spline 3D scene integration for a modern "crazy" aesthetic without compromising performance on high-end devices. Fallback to Canvas/CSS for low-end/mobile.
- **Swirling Photo**: A visually striking, circularly swirling profile photo component.
- **Dashboard Modals**: Interactive overlays for projects, resume viewing, and contact details.

### 2.2 Content Architecture
- **Unified Data Source**: `src/content.js` serves as the single source of truth for all text data (projects, skills, certifications, experience, mentorship).
- **Categorization**: Explicit separation of Experience, Campus Leadership, and Mentorship to improve scannability.

### 2.3 Mobile Responsiveness
- All interactive elements (buttons, modals, Spline scenes) must adapt to mobile viewports (e.g., hidden or scaled down 3D scenes to save battery/bandwidth on mobile).
- Touch-friendly target sizes (min 44x44px).

---

## 3. Security Guidelines (App Security Pro-Tips)

Even static and client-side web apps face security risks. Below are best practices to prevent common vulnerabilities.

### 3.1 Cross-Site Scripting (XSS) Prevention
- **React Escaping**: React DOM automatically escapes values embedded in JSX before rendering them, which mitigates XSS. However, avoid using `dangerouslySetInnerHTML` unless absolutely necessary (e.g., rendering trusted markdown).
- **Content Security Policy (CSP)**: Implement a strict CSP in the production `index.html` via meta tags or server headers.
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://prod.spline.design; style-src 'self' 'unsafe-inline';">
  ```

### 3.2 Dependency Management (Supply Chain Security)
- **Regular Audits**: Run `npm audit` frequently to check for vulnerable packages.
- **Lockfiles**: Always commit `package-lock.json` to ensure deterministic, reproducible builds without unexpected upstream malicious updates.
- **Vite Security**: Ensure development server settings (like host exposure) are restricted.

### 3.3 Sensitive Data Protection
- **No Hardcoded Secrets**: Ensure no API keys (e.g., for analytics, email sending, Firebase) are hardcoded in `content.js` or components. Use `.env` variables that are explicitly exposed (e.g., `VITE_PUBLIC_API_KEY`) only when they are meant to be public, and keep private keys on a backend.
- **Rate Limiting**: If adding a contact form backend, implement rate limiting to prevent spam and DDoS on your endpoint.

### 3.4 Transport Layer Security (TLS)
- Ensure the site is deployed and forced over HTTPS (e.g., using GitHub Pages, Vercel, or Netlify settings).

### 3.5 Clickjacking Mitigation
- Configure the server/hosting to send the `X-Frame-Options: DENY` or `SAMEORIGIN` header to prevent the site from being maliciously embedded in an iframe on an attacker's site (except for known domains if required).

---

## 4. Performance & Availability
- **Asset Optimization**: Compress images and use lazy loading for images and 3D Spline assets.
- **Reduced Motion**: Respect system `prefers-reduced-motion` settings by disabling intensive 3D/Canvas animations for accessibility and battery saving.
