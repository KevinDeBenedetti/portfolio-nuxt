# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. Send a private report via [GitHub Security Advisories](https://github.com/KevinDeBenedetti/portfolio-nuxt/security/advisories/new)
3. Or email: security@kevindb.dev (if available)

### What to include in your report

- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if any)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 1 week
- **Resolution**: Depends on severity (critical: ASAP, others: within 30 days)

## Security Measures

This project implements the following security measures:

### HTTP Security Headers

- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy
- Cross-Origin-Embedder-Policy
- Cross-Origin-Resource-Policy

### CI/CD Security

- **Gitleaks**: Automatic secret scanning on every PR
- **OWASP ZAP**: Security vulnerability scanning on deployments
- **Dependabot**: Automated dependency updates (recommended to enable)

### Infrastructure

- HTTPS only with Let's Encrypt certificates
- Docker containers with non-root users
- Minimal production images (Alpine-based)

## Dependencies

We regularly update dependencies to patch known vulnerabilities. You can check for vulnerabilities with:

```bash
bun audit
```

## Thank You

Thank you for helping keep this project and its users safe!
