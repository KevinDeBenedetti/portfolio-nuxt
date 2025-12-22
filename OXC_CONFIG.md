# Oxc Configuration - Linting and Formatting

This project uses [Oxc](https://oxc.rs) for code linting and formatting, offering exceptional performance (50-100× faster than ESLint).

## 🚀 Installation

Dependencies are already configured in `package.json`:

- `oxlint`: Ultra-fast linter
- `oxlint-tsgolint`: Type-aware linting support
- `oxfmt`: Prettier-compatible formatter

```bash
pnpm install
```

## 📋 Available Scripts

### Linting

```bash
# Standard lint (correctness rules by default)
pnpm lint

# Lint with TypeScript type analysis (type-aware)
pnpm lint:type

# Auto-fix issues (safe fixes + suggestions)
pnpm lint:fix

# Aggressive fix including dangerous fixes
pnpm lint:fix:all

# Complete check (lint + type-aware)
pnpm check
```

### Formatting

```bash
# Format all files
pnpm format

# Check formatting without modifying
pnpm format:check
```

## 📁 Configuration Files

### `.oxlintrc.json` - Linter configuration

The file configures:

- **Rule categories**: `correctness` (error), `suspicious` (warn), `perf` (warn)
- **Enabled plugins**: TypeScript, Vue, Unicorn, Import, Oxc
- **Custom rules**: Adapted for Nuxt/Vue
- **Overrides by file type**: Specific configuration for `.vue`, `.ts`, etc.
- **Ignored patterns**: `node_modules`, `.nuxt`, `dist`, etc.

### `.oxfmtrc.json` - Formatter configuration

Prettier compatible with:

- **printWidth**: 100 characters
- **Quotes**: Single quotes (`'`)
- **Semi**: With semicolons
- **Experimental features**:
  - `experimentalSortImports`: Automatic import sorting
  - `experimentalSortPackageJson`: package.json sorting

## 🔧 Command Line Options

### Oxlint

```bash
# Enable/disable rules
oxlint -D correctness -A no-console .

# Fix with different levels
oxlint --fix .                              # Safe fixes only
oxlint --fix-suggestions .                  # Safe suggestions
oxlint --fix --fix-suggestions .            # Fixes + suggestions
oxlint --fix-dangerously .                  # All fixes (dangerous)

# Type-aware linting
oxlint --type-aware .

# Ignore files
oxlint --ignore-pattern "test/**" .

# Output format
oxlint --format json .                      # JSON, github, gitlab, junit, etc.
```

### Oxfmt

```bash
# Formatter
oxfmt .                                     # Write changes
oxfmt --check .                             # Check only

# Specific files
oxfmt src/                                  # Directory
oxfmt file.ts file.vue                      # Specific files
```

## 📝 Inline Comments

You can control linting with comments:

```javascript
// Disable a rule for the entire file
/* oxlint-disable no-console */

// Disable for one line
console.log('Hello'); // oxlint-disable-line no-console

// Disable for the next line
// oxlint-disable-next-line no-console
console.log('Hello');

// Disable multiple rules
/* oxlint-disable no-console, no-debugger */
```

## 🎯 CI/CD Integration

### GitHub Actions

```yaml
- name: Lint
  run: npx oxlint@latest --deny-warnings
```

### Lint-staged (pre-commit)

Add to `package.json`:

```json
{
  "lint-staged": {
    "**/*.{js,ts,vue}": ["oxlint --fix", "oxfmt"]
  }
}
```

## 📚 Official Documentation

- [Oxlint Documentation](https://oxc.rs/docs/guide/usage/linter)
- [Oxfmt Documentation](https://oxc.rs/docs/guide/usage/formatter)
- [Configuration Oxlint](https://oxc.rs/docs/guide/usage/linter/config)
- [Automatic Fixes](https://oxc.rs/docs/guide/usage/linter/automatic-fixes)
- [Type-Aware Linting](https://oxc.rs/docs/guide/usage/linter/type-aware)

## 🔌 VS Code Extensions

Install the official extension for real-time linting:

- [Oxc for VS Code](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)

## ⚡ Performance

Oxlint is **50-100× faster** than ESLint:

- Complete project lint: ~50ms
- Automatic multi-threading
- Scales with CPU core count

## 🆚 Migration from ESLint/Prettier

If migrating from ESLint:

1. Most ESLint rules are supported
2. Use `eslint-plugin-oxlint` to disable duplicate rules in ESLint
3. Config format is similar to ESLint flat config

For Prettier:

- Oxfmt is compatible with Prettier config
- Supports the same languages (JS/TS/Vue/JSON/YAML/Markdown)
