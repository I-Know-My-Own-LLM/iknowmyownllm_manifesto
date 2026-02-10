# Contributing to I Know My LLM

Thank you for your interest in contributing to the I Know My LLM manifesto. This document provides guidelines for participation.

## Our Philosophy

This manifesto is community-driven and open for refinement. We believe collective wisdom is stronger than individual judgment.

## How to Contribute

### 1. Signing the Manifesto

Sign by adding your entry to `public/signatures.csv`.

**Step-by-step:**

1. **Fork this repository**
2. **Edit public/signatures.csv**  add a new line with your signature
3. **Commit your change**  `git commit -am "Add signature: Your Name"`
4. **Push to your fork**  `git push origin main`
5. **Create a Pull Request**

**CSV Format:**
```csv
name,title,email,comment
```

**Example signatures:**
```csv
# Full signature with all fields
Jane Doe,Security Researcher,jane@example.com,Evidence over promises - always.

# Anonymous with title and comment
Anonymous,CTO,,Transparency matters for our industry.

# Fully anonymous
Anonymous,,,

# Pseudonym for privacy
TrustVerifier,AI Ethics Advocate,,Community wisdom over isolated judgment.
```

**Privacy options:**
| Field | Required | Anonymous Option |
|-------|----------|------------------|
| `name` | Yes | Use `Anonymous` or a pseudonym |
| `title` | No | Leave empty |
| `email` | No | Leave empty or use `anonymous@example.com` |
| `comment` | No | Leave empty |

**Important notes:**
- Emails in the CSV are not displayed publicly on the website
- Anonymous signatures are respected and verified through the PR process
- One signature per PR please

### 2. Suggesting Principle Changes

**Before proposing changes:**
- Read the current [PRINCIPLES.md](PRINCIPLES.md)
- Check existing Issues and Discussions for similar suggestions
- Consider how your suggestion aligns with the core values

**To propose a change:**
1. Open an Issue using the "Principle Suggestion" template
2. Explain the rationale for your change
3. Provide evidence or examples supporting the modification
4. Engage constructively with community feedback

### 3. Sharing Red Flag Patterns

We collect anonymized patterns in the "Hall of Amusing Red Flags." To contribute:

1. Open an Issue using the "Red Flag Share" template
2. Describe the pattern generically (no specific company names)
3. Explain why this pattern is concerning
4. Include any verification methods that helped identify it

### 4. Participating in Discussions

Join our Discussions to:
- Debate principle refinements
- Share community stories and experiences
- Ask questions about applying the principles
- Connect with like-minded professionals

## Content Guidelines

### Do
- Focus on generic, educational patterns
- Provide constructive, evidence-based suggestions
- Respect diverse perspectives and experiences
- Keep contributions professional and actionable
- Cite sources when making factual claims

### Don't
- Name specific companies, individuals, or products
- Share potentially defamatory content
- Include personal attacks or harassment
- Post promotional or commercial content
- Share confidential or proprietary information

## Legal Safety

To maintain broad applicability and legal safety:

- All examples must be anonymized no real company names
- Focus on patterns, not specifics describe behaviors, not entities
- Avoid potentially defamatory language stick to verifiable facts
- When in doubt, generalize

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/principle-clarification`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Clarify Principle 3 regarding jargon detection'`)
5. Push to your fork (`git push origin feature/principle-clarification`)
6. Open a Pull Request with:
   - Clear description of the change
   - Rationale for the modification
   - Any relevant discussion references

## Review Process

- Minor edits (typos, clarifications): May be merged quickly
- Substantive changes (principle modifications): Require community discussion
- All changes: Must align with core values and maintain legal safety

## Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). We are committed to providing a welcoming, inclusive environment.

## Questions?

- Open a Discussion for general questions
- Open an Issue for specific proposals
- Visit https://iknowmyllm.com for more information

---

Thank you for helping make AI evaluation more trustworthy for everyone.
