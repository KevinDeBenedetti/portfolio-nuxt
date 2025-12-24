PYTHONPATH = $(PWD)

# Extract pnpm version from package.json
PNPM_VERSION := $(shell jq -r '.packageManager // "pnpm@10.11.0"' package.json | sed 's/pnpm@//')

.PHONY: help setup start dev build clean clean-env
.DEFAULT_GOAL := help

help: ## Display this help
	@echo "Usage: make <command>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2}'

# ============================================
# Setup & Cleaning
# ============================================

clean: ## Clean the project (stop containers, remove artifacts)
	docker compose down --volumes --remove-orphans 2>/dev/null || true
	rm -rf .nuxt .output .pnpm-store node_modules .data .turbo .vercel

install: ## Install dependencies with pnpm
	pnpm install

ci-install: ## Install dependencies with frozen lockfile (CI)
	pnpm install --frozen-lockfile

dev: install ## Start local development server
	pnpm run dev

preview: install ## Preview production build locally
	pnpm run preview

# ============================================
# Build Commands
# ============================================

build: install ## Build for production
	pnpm run build

generate: install ## Generate static site
	pnpm run generate

# ============================================
# Linting & Formatting
# ============================================

lint: ## Lint the codebase (with turbo cache)
	pnpm run lint

lint-type: ## Run type-aware linting (with turbo cache)
	pnpm run lint:type

lint-fix: ## Lint and fix the codebase
	pnpm run lint:fix

lint-fix-all: ## Lint and fix all issues (including dangerous fixes)
	pnpm run lint:fix:all

format: ## Format the codebase
	pnpm run format

format-check: ## Check code formatting (with turbo cache)
	pnpm run format:check

typecheck: ## Run TypeScript type checking (with turbo cache)
	pnpm run typecheck

check: ## Run full check: lint + format + typecheck (with turbo cache)
	pnpm run check

# ============================================
# CI Commands (optimized for CI/CD with frozen lockfile)
# ============================================

ci-lint: ci-install ## Run CI lint + format + typecheck (parallel, cached)
	pnpm run check

ci-build: ci-install ## Run CI build (cached)
	pnpm exec turbo run build

ci-check: ci-install ## Run full CI checks (lint + format + typecheck + build)
	pnpm run check
	pnpm exec turbo run build

# ============================================
# Turborepo Commands
# ============================================

turbo-dev: install ## Start dev server with Turborepo
	pnpm exec turbo run dev

turbo-build: install ## Build with Turborepo (cached)
	pnpm exec turbo run build

turbo-generate: install ## Generate static site with Turborepo (cached)
	pnpm exec turbo run generate

turbo-lint: ## Lint with Turborepo (cached)
	pnpm exec turbo run lint

turbo-lint-type: ## Type-aware lint with Turborepo (cached)
	pnpm exec turbo run lint:type

turbo-check: ## Full check with Turborepo (lint + format + typecheck, cached)
	pnpm run check

turbo-format-check: ## Check formatting with Turborepo (cached)
	pnpm exec turbo run format:check

# ============================================
# Docker Commands
# ============================================

docker-dev: ## Start development container with hot reload
	docker compose up development

docker-dev-build: ## Rebuild and start development container
	docker compose up development --build

docker-dev-down: ## Stop development container
	docker compose down development

docker-prod: ## Start production container
	docker compose up production -d

docker-prod-build: ## Rebuild and start production container
	docker compose up production --build -d

docker-prod-down: ## Stop production container
	docker compose down production

docker-build: ## Build Docker image for production
	docker build --build-arg PNPM_VERSION=$(PNPM_VERSION) -t portfolio-nuxt .

docker-build-dev: ## Build Docker image for development
	docker build --build-arg PNPM_VERSION=$(PNPM_VERSION) --target dev -t portfolio-nuxt:dev .

docker-logs: ## Show Docker container logs
	docker compose logs -f

docker-clean: ## Stop all containers and remove images
	docker compose down --volumes --remove-orphans
	docker rmi portfolio-nuxt portfolio-nuxt:dev 2>/dev/null || true

# ============================================
# Git Hooks
# ============================================

hooks-install: ## Install git hooks
	pnpm run hooks:install

hooks-uninstall: ## Uninstall git hooks
	pnpm run hooks:uninstall

hooks-run: ## Run hooks on all files
	pnpm run hooks:run

hooks-list: ## List all configured hooks
	pnpm run hooks:list

# ============================================
# Dependencies
# ============================================

update: ## Update dependencies
	pnpm update --latest

upgrade: ## Upgrade Nuxt
	pnpm dlx nuxi upgrade
