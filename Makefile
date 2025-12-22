PYTHONPATH = $(PWD)

# Extract Bun version from package.json
BUN_VERSION := $(shell jq -r '.packageManager // "bun@1.3.5"' package.json | sed 's/bun@//')

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
	rm -rf .nuxt .output .pnpm-store node_modules .data pnpm-lock.yaml bun.lock .turbo

install: ## Install dependencies with Bun
	bun install

dev: install ## Start local development server
	bun run dev

preview: install ## Preview production build locally
	bun run preview

# ============================================
# Build Commands
# ============================================

build: install ## Build for production
	bun run build

generate: install ## Generate static site
	bun run generate

# ============================================
# Linting & Formatting
# ============================================

lint: ## Lint the codebase
	bun lint

lint-fix: ## Lint and fix the codebase
	bun lint:fix

lint-fix-all: ## Lint and fix all issues (including dangerous fixes)
	bun lint:fix:all

format: ## Format the codebase
	bun format

format-check: ## Check code formatting
	bun format:check

check: ## Run linting with type checking
	bun check

# ============================================
# Turborepo Commands
# ============================================

turbo-dev: install ## Start dev server with Turborepo
	bun turbo run dev

turbo-build: install ## Build with Turborepo (cached)
	bun turbo run build

turbo-generate: install ## Generate static site with Turborepo (cached)
	bun turbo run generate

turbo-lint: ## Lint with Turborepo (cached)
	bun turbo run lint

turbo-lint-type: ## Type-aware lint with Turborepo (cached)
	bun turbo run lint:type

turbo-check: ## Full check with Turborepo (lint + lint:type, cached)
	bun turbo run check

turbo-format-check: ## Check formatting with Turborepo (cached)
	bun turbo run format:check

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
	docker build --build-arg BUN_VERSION=$(BUN_VERSION) -t portfolio-nuxt .

docker-build-dev: ## Build Docker image for development
	docker build --build-arg BUN_VERSION=$(BUN_VERSION) --target dev -t portfolio-nuxt:dev .

docker-logs: ## Show Docker container logs
	docker compose logs -f

docker-clean: ## Stop all containers and remove images
	docker compose down --volumes --remove-orphans
	docker rmi portfolio-nuxt portfolio-nuxt:dev 2>/dev/null || true

# ============================================
# Git Hooks
# ============================================

hooks-install: ## Install git hooks
	bun hooks:install

hooks-uninstall: ## Uninstall git hooks
	bun hooks:uninstall

hooks-run: ## Run hooks on all files
	bun hooks:run

hooks-list: ## List all configured hooks
	bun hooks:list

# ============================================
# Dependencies
# ============================================

update: ## Update dependencies
	bun update --latest

upgrade: ## Upgrade Nuxt
	bun nuxt upgrade

# ============================================
# CI/CD Testing
# ============================================

ci-lint: install ## Run CI lint checks
	bun turbo run lint

ci-build: install ## Run CI build
	bun turbo run build

ci-check: install ## Run full CI checks (lint + build)
	bun turbo run check
	bun turbo run build
