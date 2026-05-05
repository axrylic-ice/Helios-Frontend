<h1 align="center"> Fotuna FX Decision Intelligence Website </h1>

<p align="center"> Empowering high-frequency traders and financial analysts with AI-driven market intelligence and predictive forex modeling. </p>

<p align="center">
  <img alt="Build" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge">
  <img alt="Issues" src="https://img.shields.io/badge/Issues-0%20Open-blue?style=for-the-badge">
  <img alt="Contributions" src="https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge">
</p>
<!-- 
  **Note:** These are static placeholder badges. Replace them with your project's actual badges.
  You can generate your own at https://shields.io
-->

## 📖 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Demo & Screenshots](#-demo--screenshots)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

### Hook
Fotuna FX Decision Intelligence Website is a sophisticated, AI-enhanced platform designed to synthesize complex financial data into actionable forex market insights through advanced predictive modeling and real-time visualization.

### The Problem
> Modern forex markets generate an overwhelming volume of data every millisecond. Traders and analysts struggle to filter through market noise, identify meaningful momentum shifts, and apply advanced statistical models like LSTM or Bayesian inference without significant manual effort. The gap between raw market data and high-confidence decision-making leads to missed opportunities and increased risk exposure in volatile economic environments, particularly in emerging markets.

### The Solution
Fotuna FX bridges this gap by providing a comprehensive "Engine Room" for market intelligence. By leveraging deep learning models (LSTM) and probabilistic frameworks (PolyBayesian), the platform automates the analysis of market context and signal history. Users gain a centralized dashboard that monitors market momentum—such as Africa's strengthening trade momentum—while providing clear, visual trade intelligence and audit-ready signal logs.

### Architecture Overview
The platform is built on a modern **Component-based Architecture** utilizing **React 19** and **Next.js 16**. It emphasizes a highly responsive and interactive user experience using **Framer Motion** for fluid UI transitions and **Recharts** for complex financial data visualization. The state management is efficiently handled by **Zustand**, ensuring that real-time market updates propagate seamlessly across the high-performance UI components.

---

## ✨ Key Features

### 🚀 Predictive Engine Room
The heart of the platform where advanced models process market data.
- **LSTM Deep Learning Cards:** Visualize predictions from Long Short-Term Memory networks designed for time-series forex data.
- **PolyBayesian Analysis:** View probabilistic outcomes and market certainty scores through dedicated Bayesian model cards.
- **Engine Metrics Monitoring:** Real-time tracking of model performance, accuracy rates, and computational health.

### 📊 Market Intelligence Hub
Transform raw data into situational awareness.
- **Market Monitor:** A continuous stream of global market shifts and currency pair fluctuations.
- **Contextual Intelligence:** Deep-dive into specific market drivers, including regional trade momentum reports (e.g., Africa's Trade Momentum).
- **Interactive Price Cards:** Large-scale price visualizations and current rate tracking for immediate reference.

### 📜 Transparency & Accountability
Maintain a rigorous record of all intelligence outputs.
- **Signal History:** A comprehensive chronological record of all generated trade signals, including the logic and model inputs used at the time of generation.
- **Audit Logs:** Secure tracking of system actions and user interactions for institutional compliance and performance review.

### 🎨 Premium User Experience
Designed for professionals who require clarity under pressure.
- **Glassmorphic UI Design:** A modern "GlassPanel" aesthetic that reduces visual clutter while maintaining a high-tech feel.
- **Interactive Converter Panel:** Integrated currency conversion tools within the decision workflow.
- **Adaptive Dashboards:** Fluid layouts including Act Panels and Engine Room rows that adjust to the trader's focus.

---

## 🛠️ Tech Stack & Architecture

### Verified Technical Stack

| Technology | Purpose | Why it was Chosen |
| :--- | :--- | :--- |
| **React 19** | UI Library | Leverages the latest concurrent rendering features for high-frequency data updates. |
| **Next.js 16** | Framework | Provides robust routing, server-side optimizations, and a scalable project structure. |
| **Tailwind CSS 4** | Styling | Offers a utility-first approach for rapid UI development and high-performance CSS. |
| **Zustand** | State Management | A lightweight, fast state management solution for handling real-time market signals. |
| **TanStack Query** | Data Fetching | Manages server state, caching, and synchronization for market intelligence feeds. |
| **Recharts** | Visualization | Provides flexible, composable chart components for financial data analysis. |
| **Framer Motion** | Animation | Ensures professional-grade interactive transitions and UI feedback. |
| **Docker** | Deployment | Standardizes the environment for consistent deployment across various infrastructure. |

---

## 📁 Project Structure

```
fotuna-frontend/
├── 📁 .firebase/                  # Firebase hosting and cache configurations
├── 📁 .github/                    # CI/CD Workflows
│   └── 📁 workflows/              # GitHub Action definitions for Firebase
├── 📁 public/                     # Static assets and market momentum images
│   ├── 📄 6_Africa_s_Trade_Momentum_is_Strengthening.png
│   ├── 📄 cover_bg.png
│   └── 📄 favicon.svg
├── 📁 src/                        # Main application source code
│   ├── 📁 app/                    # Next.js App Router (Layouts and Pages)
│   │   ├── 📁 (public)/           # Publicly accessible routes (Landing, Auth)
│   │   ├── 📁 dashboard/          # Core decision intelligence dashboard
│   │   ├── 📁 market-monitor/     # Real-time monitoring interface
│   │   └── 📁 signal-history/     # Historical signal analysis
│   ├── 📁 components/             # Reusable UI components
│   │   ├── 📁 auth/               # SignIn and SignUp logic
│   │   ├── 📁 engine/             # AI Model cards (LSTM, PolyBayse, Metrics)
│   │   ├── 📁 landingPage/        # Marketing and CTA sections
│   │   ├── 📁 layout/             # Navigation and Sidebar structure
│   │   ├── 📁 pages/              # Page-specific complex components
│   │   └── 📁 ui/                 # Atomic design components (Button, GlassPanel)
│   ├── 📁 lib/                    # Core utilities and API handlers
│   │   ├── 📄 api.js              # Axios-based communication logic
│   │   └── 📄 nav.js              # Navigation configuration
│   └── 📁 styles/                 # Global styling and CSS themes
├── 📄 Dockerfile                  # Containerization instructions
├── 📄 firebase.json               # Firebase hosting configuration
├── 📄 next.config.mjs             # Next.js framework settings
├── 📄 tailwind.config.js          # Tailwind CSS 4 theme customization
└── 📄 package.json                # Project dependencies and scripts
```

---

## 📸 Demo & Screenshots

### 🖼️ Screenshots

<img src="https://placehold.co/800x450/1a1a2e/ffffff?text=Fotuna+FX+Dashboard+Preview" alt="Fotuna Dashboard" width="100%">
<em><p align="center">The core dashboard featuring the Engine Room and Market Intelligence sections.</p></em>

<img src="https://placehold.co/800x450/16213e/ffffff?text=Signal+History+and+Audit+Logs" alt="Signal History" width="100%">
<em><p align="center">Detailed signal history view with historical performance metrics.</p></em>

---

## 🚀 Getting Started

### Prerequisites
- **Node.js:** Latest LTS version (v18+ recommended)
- **Package Manager:** npm (v9+ recommended)
- **Docker:** (Optional) For containerized deployment

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/fotuna-frontend.git
   cd fotuna-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development Mode**
   Start the local development server with hot-reloading:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build**
   Generate an optimized production build:
   ```bash
   npm run build
   ```

5. **Production Start**
   Run the compiled application:
   ```bash
   npm run start
   ```

6. **Linting**
   Ensure code quality and style consistency:
   ```bash
   npm run lint
   ```

---

## 🔧 Usage

### Navigating the Dashboard
Once logged in via the `src/components/auth` components, users are presented with the primary Dashboard. 
- **The Engine Room:** Monitor the `LSTMCard` and `PolyBayseCard` to see real-time predictive outputs.
- **Market Monitoring:** Use the `MarketMonitor.js` view to track global shifts as they occur.
- **Taking Action:** The `ActPanel.js` provides the interface for executing decisions based on the intelligence provided.

### Analyzing Signals
Navigate to the `signal-history` page to review past performance. This section uses the `SignalHistory.js` component to render a searchable and filterable table of all previously generated signals, allowing for backtesting and strategy refinement.

### Monitoring System Integrity
The `AuditLogs.js` view provides a transparent look at system-level events, ensuring that all data generated by the "Engine" is tracked and verifiable.

---

## 🤝 Contributing

We welcome contributions to improve Fotuna FX! Your input helps make this platform more robust for the trading community.

### How to Contribute

1. **Fork the repository** - Click the 'Fork' button at the top right of this page.
2. **Create a feature branch** 
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** - Improve code, documentation, or design.
4. **Test thoroughly** - Ensure the UI remains responsive and model cards render correctly.
5. **Commit your changes** - Write clear, descriptive commit messages.
   ```bash
   git commit -m 'Add: New predictive visualization card for Engine Room'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request** - Submit your changes for review.

### Development Guidelines
- ✅ Follow the React 19 functional component patterns.
- 📝 Maintain the "Glassmorphic" design system defined in `src/components/ui`.
- ⚡ Ensure all animations use `framer-motion` for consistency.
- 🎯 Keep state as localized as possible, using `Zustand` for global needs.

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for complete details.

### What this means:
- ✅ **Commercial use:** You can use this project commercially.
- ✅ **Modification:** You can modify the code to suit your trading needs.
- ✅ **Distribution:** You can distribute this software.
- ✅ **Private use:** You can use this project privately.
- ⚠️ **Liability:** The software is provided "as is", without warranty.

---

<p align="center">Made with ❤️ by the Fotuna FX Team</p>
<p align="center">
  <a href="#">⬆️ Back to Top</a>
</p>
