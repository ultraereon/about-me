# Mohamed Arif Asharf — Software Developer Portfolio

A modern, responsive, and visually stunning developer portfolio website built with **Next.js**, **Tailwind CSS v4**, and **TypeScript**, styled around a premium, custom **Cerulean Blue** color scheme.

---

## 🚀 About Me
I'm a B.Tech IT graduate from Amal Jyothi College of Engineering (2025) and a software developer based in Thiruvananthapuram, Kerala, India. My passion lies at the intersection of full-stack engineering and artificial intelligence, building software that is both highly functional and visually polished.

*   **Email:** arifmohammedashraf@gmail.com
*   **Phone:** +91 9995982349
*   **GitHub:** [github.com/ultraereon](https://github.com/ultraereon)
*   **LinkedIn:** [linkedin.com/in/aryfx](https://www.linkedin.com/in/aryfx)

---

## 🛠️ Tech Stack & Architecture

*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS v4 (with modern `oklch` color spaces)
*   **Components:** Radix UI primitives & custom styled components
*   **Icons:** Lucide React
*   **Language:** TypeScript
*   **Theme:** Premium Cerulean Blue Theme (Dark-mode optimized: base background `oklch(0.16 0.03 235)` with vibrant accent `oklch(0.72 0.16 235)`)

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css      # Core styles & Tailwind v4 config (Cerulean theme)
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Portfolio main page & layout assembly
├── components/
│   ├── portfolio/       # Section-specific components (Hero, About, Projects, etc.)
│   └── ui/              # Reusable UI component library (Shadcn/Radix primitives)
├── lib/
│   ├── portfolio-data.ts# Portfolio content (skills, education, contact info)
│   └── utils.ts         # Utility functions
├── public/              # Static assets (images, icons, resume PDF)
├── styles/
│   └── globals.css      # Standard fallback styling sheet
└── package.json         # Dependencies & scripts
```

---

## 🌟 Key Featured Projects

### 1. AI-Powered Mock Interview Platform *(Best Department Project 2025)*
*   **Description:** An advanced interview preparation tool integrating Speech Emotion Recognition (SER) and Facial Emotion Recognition (FER) to assess candidate emotion cues in real time.
*   **Stack:** Python, OpenAI Whisper Large V3, EmotiEffLib, Gemini API, NLP, React.

### 2. PrintConnect *(In Production)*
*   **Description:** A custom web application that automates printing jobs across multiple branches of a local print shop. Currently in active production use in Kanjirappally, Kottayam.
*   **Stack:** React, Tailwind CSS, Python, Flask, Express, SQLite3.

---

## 📖 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
Clone the repository and install the dependencies:
```bash
# Using npm
npm install

# Or using pnpm
pnpm install
```

### Running the Development Server
Start the Next.js dev server locally:
```bash
# Using npm
npm run dev

# Or using pnpm
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the results.

### Production Build
Build and optimize the application for production deployment:
```bash
# Using npm
npm run build

# Or using pnpm
pnpm build
```

---

## 📄 License
This project is open-source. Feel free to use it to inspire or build your own portfolio.
