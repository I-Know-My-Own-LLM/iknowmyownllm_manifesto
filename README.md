# I Know My LLM - Community Manifesto

[![Website](https://img.shields.io/badge/Website-iknowmyllm.com-blue)](https://iknowmyllm.com)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Signatories](https://img.shields.io/badge/Signatories-Growing-green)](#sign-the-manifesto)

> **We are uncovering better ways to evaluate AI platforms by doing it and helping others do it.**

## 🎯 The Manifesto

Through our work and collective experience, we have come to value:

| We Value More | Over |
|--------------|------|
| **Evidence** | Promises |
| **Transparency** | Hype |
| **Accountability** | Obscurity |
| **Due Diligence** | Blind Trust |
| **Human Oversight** | AI Worship |
| **Community Wisdom** | Isolated Judgment |

While we acknowledge that items on the right have value, we have come to value the items on the left more.

## 📋 The 8 Principles

We follow these actionable principles to protect ourselves and others from AI fraud:

1. **Verify Credentials Thoroughly** — Dig into roles, histories, and team depth—beyond profiles, seek independent confirmation.
2. **Demand Concrete Proof** — Require working demos, named references, and verifiable case studies before sharing data.
3. **Spot Hype and Jargon** — Identify invented terms, generic AI copy, and unsubstantiated claims as red flags.
4. **Audit Security Independently** — Check certifications, data practices, and access controls—don't trust words alone.
5. **Research Regulatory Standing** — Review FINRA, SEC, FCA filings, and physical/financial legitimacy for stability.
6. **Question Urgency and Terms** — Challenge artificial scarcity, NDAs, and exit options—ensure fair, transparent deals.
7. **Document Everything** — Record claims, communications, and interactions for accountability.
8. **Leverage Instincts and Community** — Trust your gut; consult shared wisdom and collective experiences when in doubt.

📖 **[Full Principles Document](PRINCIPLES.md)**

## ✍️ Sign the Manifesto

Add your signature via Pull Request:

1. **Fork** this repository
2. **Edit** `public/signatures.csv` - add a new line with your signature
3. **Submit** a Pull Request

**Signature format** (CSV):
```csv
name,title,email,comment
```

**Examples:**
```csv
Jane Doe,Security Researcher,jane@example.com,Evidence over promises.
Anonymous,CTO,,Transparency matters.
Anonymous,,,
```

**Privacy options:**
- Use `Anonymous` for name
- Leave email empty or use `anonymous@example.com`
- All fields except name are optional

📝 **[Full signing instructions](SIGNATORIES.md)**

## 🤝 Contribute

This manifesto belongs to the community. We welcome contributions:

- **Open Issues** for discussions about principles or red flag patterns
- **Submit PRs** for principle refinements or website improvements
- **Join Discussions** to share your experiences
- **Sign the Manifesto** to show your support

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes.

---

## 🛠️ Development

This repository contains the Nuxt 3 website for the manifesto.

### Prerequisites

- Node.js >= 18.0.0

### Setup

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
npm run generate    # Generate static site
npm run preview     # Preview production build
```

### Project Structure

```
├── pages/
│   ├── index.vue           # Home page (manifesto)
│   └── resources.vue       # Resources page
├── public/
│   └── signatures.csv      # Signatory data (edit this to sign!)
├── PRINCIPLES.md
├── SIGNATORIES.md
├── CONTRIBUTING.md
└── CODE_OF_CONDUCT.md
```

## 📄 License

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
