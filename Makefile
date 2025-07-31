PYTHONPATH = $(PWD)
COMPOSE_FILE = docker-compose.yml
PROD_SERVICE = nuxt-prod
DEV_SERVICE = nuxt

.PHONY: help setup apps start dev build clean clean-env
.DEFAULT_GOAL := help

help: ## Display this help
	@echo "Usage: make <command>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2}'

stop-dev: ## Stop developpement environnement
	docker compose down

clean: stop-dev ## Clean the project
	rm -rf .nuxt .output .pnpm-store node_modules

setup: clean ## Install dependencies
# 	pnpm install --shamefully-hoist
	pnpm install

update: setup ## Update Nuxt and its dependencies
# 	pnpm update --shamefully-hoist
	pnpm update

upgrade: update ## Upgrade Nuxt and its dependencies
	pnpm nuxt upgrade

dev: update ## Start development environment
	docker compose up -d

build: ## Build docker images
	docker compose build --no-cache

build-local: ## Build the app locally
	@echo "🏗️  Building app locally..."
	pnpm run build

prod-deploy: build-prod run-prod

# Build production avec cache clear
build-prod: ## Build production docker image
	@echo "🏗️  Building production image..."
	docker compose build --no-cache $(PROD_SERVICE)

# Run production
run-prod:
	@echo "🚀 Starting production container..."
	docker compose up -d $(PROD_SERVICE)

stop-prod:
	@echo "🛑 Stopping production container..."
	docker compose down $(PROD_SERVICE)

lint: ## Linter le code Nuxt
	pnpm lint:fix