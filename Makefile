PYTHONPATH=$(PWD)

.PHONY: help setup apps start dev build clean clean-env
.DEFAULT_GOAL := help

help: ## Display this help
	@echo "Usage: make <command>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2}'

stop-dev: ## Stop developpement environnement
	-docker compose down

# clean-env: ## Clean problematic .env file
# 	@if [ -f .env ]; then \
# 		echo "Backing up .env to .env.backup"; \
# 		cp .env .env.backup; \
# 		echo "Cleaning problematic .env file"; \
# 		grep -v "curl -X" .env > .env.tmp && mv .env.tmp .env || rm -f .env; \
# 	fi

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

build-prod: ## Build production image
	docker compose build --no-cache nuxt-prod

test-prod: build-prod ## Test production build
	docker compose up nuxt-prod

stop-prod: ## Stop production container
	docker compose down nuxt-prod

lint: ## Linter le code Nuxt
	pnpm lint:fix