PYTHONPATH = $(PWD)

.PHONY: help setup start dev build clean clean-env
.DEFAULT_GOAL := help

help: ## Display this help
	@echo "Usage: make <command>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2}'

clean: ## Clean the project
	docker compose down --volumes --remove-orphans
	rm -rf .nuxt .output .pnpm-store node_modules .data pnpm-lock.yaml bun.lock .turbo

install: clean ## Setup Nuxt
	bun install

dev: install ## Start development server
	bun run dev

start: install ## Start development environment
	docker compose up -d

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

turbo-build: ## Build with Turborepo (cached)
	bun turbo run build

turbo-generate: ## Generate static site with Turborepo (cached)
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

update: install ## Update dependencies
	bun update --latest

upgrade: install ## Upgrade dependencies
	bun nuxt upgrade
