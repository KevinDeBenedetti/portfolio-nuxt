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

# ============================================
# Security Scanning (OWASP ZAP)
# ============================================

# Default target URL for security scans
ZAP_TARGET ?= http://host.docker.internal:3000
ZAP_REPORTS_DIR := $(PWD)/zap-reports

zap-setup: ## Create ZAP reports directory
	@mkdir -p $(ZAP_REPORTS_DIR)
	@chmod 777 $(ZAP_REPORTS_DIR)

zap-baseline: zap-setup ## Run ZAP baseline scan (quick passive scan)
	@echo "🔒 Running OWASP ZAP Baseline Scan on $(ZAP_TARGET)..."
	@docker run --rm \
		-v $(PWD)/.zap:/zap/wrk/.zap:ro \
		-v $(ZAP_REPORTS_DIR):/zap/wrk/reports:rw \
		--add-host=host.docker.internal:host-gateway \
		ghcr.io/zaproxy/zaproxy:stable \
		zap-baseline.py \
		-t $(ZAP_TARGET) \
		-c .zap/rules.tsv \
		-J reports/report_json.json \
		-r reports/report_html.html \
		-w reports/report_md.md \
		-a \
		|| true
	@echo "✅ Scan complete! Reports saved to $(ZAP_REPORTS_DIR)"
	@make zap-summary

zap-full: zap-setup ## Run ZAP full scan (comprehensive active scan - takes longer)
	@echo "🔒 Running OWASP ZAP Full Scan on $(ZAP_TARGET)..."
	@echo "⚠️  Warning: Full scan can take 10-30+ minutes"
	@docker run --rm \
		-v $(PWD)/.zap:/zap/wrk/.zap:ro \
		-v $(ZAP_REPORTS_DIR):/zap/wrk/reports:rw \
		--add-host=host.docker.internal:host-gateway \
		ghcr.io/zaproxy/zaproxy:stable \
		zap-full-scan.py \
		-t $(ZAP_TARGET) \
		-c .zap/rules.tsv \
		-J reports/report_json.json \
		-r reports/report_html.html \
		-w reports/report_md.md \
		-a \
		|| true
	@echo "✅ Scan complete! Reports saved to $(ZAP_REPORTS_DIR)"
	@make zap-summary

zap-api: zap-setup ## Run ZAP API scan (for API endpoints)
	@echo "🔒 Running OWASP ZAP API Scan on $(ZAP_TARGET)..."
	@docker run --rm \
		-v $(PWD)/.zap:/zap/wrk/.zap:ro \
		-v $(ZAP_REPORTS_DIR):/zap/wrk/reports:rw \
		--add-host=host.docker.internal:host-gateway \
		ghcr.io/zaproxy/zaproxy:stable \
		zap-api-scan.py \
		-t $(ZAP_TARGET) \
		-f openapi \
		-c .zap/rules.tsv \
		-J reports/report_json.json \
		-r reports/report_html.html \
		-w reports/report_md.md \
		-a \
		|| true
	@echo "✅ Scan complete! Reports saved to $(ZAP_REPORTS_DIR)"
	@make zap-summary

zap-summary: ## Display summary of ZAP scan results
	@echo ""
	@echo "📊 Security Scan Summary"
	@echo "========================"
	@if [ -f "$(ZAP_REPORTS_DIR)/report_json.json" ]; then \
		ALERTS=$$(jq '[.site[]?.alerts[]?] | length' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "0"); \
		HIGH=$$(jq '[.site[]?.alerts[]? | select(.riskcode == "3")] | length' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "0"); \
		MEDIUM=$$(jq '[.site[]?.alerts[]? | select(.riskcode == "2")] | length' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "0"); \
		LOW=$$(jq '[.site[]?.alerts[]? | select(.riskcode == "1")] | length' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "0"); \
		INFO=$$(jq '[.site[]?.alerts[]? | select(.riskcode == "0")] | length' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "0"); \
		echo "🔴 High Risk:    $$HIGH"; \
		echo "🟠 Medium Risk:  $$MEDIUM"; \
		echo "🟡 Low Risk:     $$LOW"; \
		echo "🔵 Info:         $$INFO"; \
		echo "────────────────────────"; \
		echo "📋 Total Alerts: $$ALERTS"; \
	else \
		echo "⚠️  No report found. Run a scan first."; \
	fi
	@echo ""

zap-report: ## Open ZAP HTML report in browser
	@if [ -f "$(ZAP_REPORTS_DIR)/report_html.html" ]; then \
		echo "🌐 Opening HTML report..."; \
		open $(ZAP_REPORTS_DIR)/report_html.html 2>/dev/null || xdg-open $(ZAP_REPORTS_DIR)/report_html.html 2>/dev/null || echo "Report: $(ZAP_REPORTS_DIR)/report_html.html"; \
	else \
		echo "⚠️  No HTML report found. Run a scan first."; \
	fi

zap-report-json: ## Display ZAP JSON report alerts
	@if [ -f "$(ZAP_REPORTS_DIR)/report_json.json" ]; then \
		echo "📄 Alerts from JSON report:"; \
		jq -r '.site[]?.alerts[]? | "[\(.riskdesc)] \(.alert): \(.count) instance(s)"' $(ZAP_REPORTS_DIR)/report_json.json 2>/dev/null || echo "Could not parse report"; \
	else \
		echo "⚠️  No JSON report found. Run a scan first."; \
	fi

zap-clean: ## Clean ZAP reports
	@echo "🧹 Cleaning ZAP reports..."
	@rm -rf $(ZAP_REPORTS_DIR)/*
	@echo "✅ ZAP reports cleaned"

zap-scan-dev: dev ## Start dev server and run baseline scan
	@echo "Starting dev server and running security scan..."
	@sleep 5
	@make zap-baseline ZAP_TARGET=http://host.docker.internal:3000
