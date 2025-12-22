# Contributing to Portfolio Nuxt

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🌍 Languages

- **Code comments**: English
- **Commit messages**: English (following Conventional Commits)
- **Documentation**: English (with French translation in README_FR.md)

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.3.5
- [Node.js](https://nodejs.org/) >= 22.x (for compatibility)
- [Docker](https://www.docker.com/) (optional, for container builds)

### Setup

```bash
# Clone the repository
git clone https://github.com/KevinDeBenedetti/portfolio-nuxt.git
cd portfolio-nuxt

# Install dependencies
bun install

# Install git hooks
bun hooks:install

# Start development server
bun dev
```

## 📝 Code Standards

### TypeScript

- Always use TypeScript for new files
- Avoid `any` type - use proper typing
- Use interfaces over types when possible

### Vue Components

- Use `<script setup lang="ts">` exclusively
- Follow Composition API patterns
- Keep components small and focused

### Styling

- Use Tailwind CSS utility classes
- Support dark mode with `dark:` prefix
- Prefer Nuxt UI components when available

### Linting & Formatting

```bash
# Run linter
bun lint

# Run type-aware linting
bun lint:type

# Format code
bun format

# Run all checks
bun check
```

## 📦 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `feat`     | New feature                        |
| `fix`      | Bug fix                            |
| `docs`     | Documentation changes              |
| `style`    | Code style changes (formatting)    |
| `refactor` | Code refactoring                   |
| `perf`     | Performance improvements           |
| `test`     | Adding or updating tests           |
| `build`    | Build system changes               |
| `ci`       | CI/CD changes                      |
| `chore`    | Other changes (dependencies, etc.) |

### Examples

```bash
feat(i18n): add Spanish language support
fix(header): correct mobile menu alignment
docs: update installation instructions
```

## 🔄 Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/amazing-feature`
3. **Commit** your changes following commit guidelines
4. **Push** to your fork: `git push origin feat/amazing-feature`
5. **Open** a Pull Request

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review of code performed
- [ ] Comments added for complex logic
- [ ] Documentation updated if needed
- [ ] All checks pass (`bun check`)
- [ ] No new warnings introduced

## 🧪 Testing

```bash
# Run type checking
bun lint:type

# Build to verify no errors
bun build
```

## 📁 Project Structure

```
app/
├── components/     # Vue components
├── composables/    # Composition functions
├── pages/          # File-based routing
└── assets/css/     # Global styles

content/
├── en/             # English content
└── fr/             # French content
```

## ❓ Questions?

Feel free to open an issue for questions or discussions.

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
