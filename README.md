# Portfolio

## Docker

```bash
docker compose up -d
```

```bash
docker save -o portfolio.tar portfolio_nuxt-production
scp -r portfolio.tar vpn0:~/
```

```bash
sudo docker load --input portfolio.tar
docker run -d --name portfolio -p 3001:3001 portfolio_nuxt-production
```

## Lighthouse

- [x] Add Brotli 👉 [Fix](https://www.brotli.pro/enable-brotli/frameworks/nuxt/)

## Features

Full features blog 📝.
CMS ready 🚀.
Super fast ⚡.
SEO friendly 📈.
Fully responsive 📱.
Dark mode 🌗.
Syntax highlighting 🌈.
Social media links 🔗.
Code preview playground 🎮.
Uses page 🧑‍💻
Bookmarks 📑.

## Roadmap

Comments
Tags
Categories
Pagination
Sitemap
RSS feeds
Search
Likes

## Tech Stack

1. Nuxt JS
2. Tailwind CSS
3. Vue
4. Nuxt Content Module
5. Shiki JS ES

## Installation

1. `git clone` this repo or click on `Use this template` button.
2. `cd` into the project directory.
3. Run `yarn install` to install the dependencies.
4. Run `yarn dev` to start the development server.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
