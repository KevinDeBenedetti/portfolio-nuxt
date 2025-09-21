PYTHONPATH = $(PWD)

.PHONY: help setup apps start dev build clean clean-env
.DEFAULT_GOAL := help

help: ## Display this help
	@echo "Usage: make <command>"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2}'

clean: ## Clean the project
	docker compose down --volumes --remove-orphans
	rm -rf .nuxt .output .pnpm-store node_modules .data pnpm-lock.yaml

setup: clean ## Setup Nuxt
	pnpm install && pnpm approve-builds && pnpm up --latest

start: setup ## Start development environment
	pnpm run dev
# 	docker compose up -d

lint: ## Lint the codebase
	pnpm lint:fix

upgrade: ## Upgrade dependencies
	pnpm nuxt upgrade
