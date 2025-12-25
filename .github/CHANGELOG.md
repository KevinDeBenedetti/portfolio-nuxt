# Changelog

## [1.3.1](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.3.0...v1.3.1) (2025-12-25)


### 🐛 Bug Fixes

* update security.txt and add Content-Security-Policy headers ([b29a38c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/b29a38c9ae2de064dc431bb33a00bbe1caa243f3))

## [1.3.0](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.2.0...v1.3.0) (2025-12-25)


### ✨ Features

* Refactor application structure and components ([559e586](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/559e586ed5d6aba83119a03768d927f9d156b16b))


### 🐛 Bug Fixes

* clean code by removing articles section and related files ([cebb44d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cebb44dd27b1d25bb0c2b91243e184f0c021528d))
* **security:** enhance security headers and add security.txt ([bea3a26](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/bea3a26a05bb3fb8529ccc97cb34522d9dbe3555))

## [1.2.0](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.1.2...v1.2.0) (2025-12-24)


### ✨ Features

* add GitHub repository display components and API integration ([0d35428](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/0d3542886b06c5b65070c448b95505f0a4de28fb))


### 🐛 Bug Fixes

* delete obsolete files ([c156381](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/c156381265a4ce7337ac5a96919873359c03aedc))
* improve homepage content ([1ec72a4](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/1ec72a4621538d700e2960bc046bec5101eaa5e9))

## [1.1.2](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.1.1...v1.1.2) (2025-12-23)


### 🐛 Bug Fixes

* **security:** improve cache-control and CORS headers for ZAP compliance ([0156736](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/01567366e935dbc3d1b6ea34938dcdddb66f1d28))

## [1.1.1](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.1.0...v1.1.1) (2025-12-23)


### 🐛 Bug Fixes

* update security headers and adjust ZAP target URL ([2b2e59d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2b2e59d5e42984daf74a55affd9cca389a74c66a))

## [1.1.0](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.5...v1.1.0) (2025-12-23)


### ✨ Features

* add Analytics & SpeedInsights to vercel ([93e3441](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/93e34410e54248f2cf9f81865adf00cf9cc8fe9f))

## [1.0.5](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.4...v1.0.5) (2025-12-23)


### 🐛 Bug Fixes

* update compatibility date for Nuxt configuration and comment out deploy condition in CD workflow ([2917c2b](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2917c2b0724680428dc06e1ae9eb85058e2bfd72))

## [1.0.4](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.3...v1.0.4) (2025-12-23)


### 🐛 Bug Fixes

* update Makefile to remove .vercel directory and change SQLite connector to libsql for Vercel compatibility ([493ba5d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/493ba5d541095a3dfc1ba2b6b65613532f7f1be9))

## [1.0.3](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.2...v1.0.3) (2025-12-23)


### 🐛 Bug Fixes

* update async data keys to include locale for better data handling ([7781556](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7781556ce33771904ac736ea04527a6127d6bef5))

## [1.0.2](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.1...v1.0.2) (2025-12-22)


### 🐛 Bug Fixes

* **ci:** increase Node.js memory limit to 4GB for build ([166f6c5](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/166f6c5e73176ead98bd5620e68bdf9892c1b049))
* delete .env.example ([cc6e366](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cc6e366916553a6391b978581e1e17b9ffc65e44))
* remove deploy dependency from security scan job and add pnpm workspace configuration ([db96a08](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/db96a08a276420bb7d1f21bba59ed76e9abb814d))
* switch from bun to pnpm ([7161747](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7161747c92a09138d3115b57ff63dfa5308921fe))
* update nitro preset to Vercel for deployment ([cc17c4e](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cc17c4e32c0d94a7f2be89f713871e11aadaeb99))

## [1.0.1](https://github.com/KevinDeBenedetti/portfolio-nuxt/compare/v1.0.0...v1.0.1) (2025-12-22)

### 🐛 Bug Fixes

- configure vercel bun runtime, release-please workflow and makefile commands ([c079055](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/c07905527c24ffc5a193b29a3a2c994447f426b9))
- remove schema reference from release-please manifest and update install command in vercel config ([75799d5](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/75799d59ab02e4772d268ed846764ec608216030))
- update CI commands to use 'install' instead of 'ci-install' for consistency ([b3d8329](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/b3d8329691e302408c75ee030a8e0d5ba8446513))
- update ci-install command to use 'bun ci' for consistency ([7ca8a3c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7ca8a3cc0953a81a2de8876a03c341766915faf1))

## 1.0.0 (2025-12-22)

### Features

- :art: add directus for legals page & clean codebase ([02d810a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/02d810a5d863870166e4170ade910d63fe7c5f5c))
- :art: Add directus to get projects & files ([fdf6093](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/fdf6093ea5062d30175c00dddbce3c0be28d4c63))
- :art: add multilingue projects home & realisations ([743559f](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/743559fed86c8d92ce596fb5b387e269dd96a727))
- :art: Add page to directus & use page === projects ([53586eb](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/53586ebed028b9e07f904d99e09165663765efbf))
- :art: add workflows for dev branch & cd ([349227d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/349227d29301a69c7b94aad474f825c99cf9369b))
- :art: change image for prod ([bcd5e0b](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/bcd5e0bb606af6fda02a213ab4884e9964dfb842))
- :art: error toaster ([5801b5c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/5801b5c898ea3b6d4190d1e6a9d54792b0a75773))
- :art: fetching correctly datas from directus ([d155f50](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/d155f501f063b0540d502800b28ae02f464bfec4))
- :art: hide articles & custom css ([98e3c44](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/98e3c443eeb301e7a5fee6291f553e4e2a0e0d83))
- :art: hide articles & custom css ([ee627ab](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/ee627ab9135ff5a11f6a2cce92754cb8262478b5))
- :art: hydradation content with useAsyncData ([c09f9a8](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/c09f9a80cdd8d48782b41f8dc42d6152fff68281))
- :art: page content, home + projects ([966c778](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/966c77884a437e05a99874db664f92b83415077c))
- :bug: worflow conf deploy ([4daa3b5](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/4daa3b54aa8834bb8d65cd3c41d643b0edd5149d))
- :zap: add content module & clean nuxt config ([0f37de9](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/0f37de9f4c212c64daeef992c8c2e90b9e58961a))
- :zap: clean dependencies & add config docker ([367de3a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/367de3a07760b64f1d4643170edde2601e8d929b))
- add .prettierignore ([0924067](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/092406715ad6f82b884da7dcef277791df66af65))
- add & config nuxt studio ([70fb136](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/70fb136f5d4884803ab7c012b1cd6abdbe5ec361))
- add better-sqlite3 for @nuxt/content ([2808baf](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2808bafcf120b0e0a4ffe9805fcddfab87b0ead7))
- add Dependabot configuration for automated dependency updates and security measures ([eddf2b4](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/eddf2b4fadb4ca256b6dee1f259e75bda6ce89fc))
- add docker config with refactor ([703be54](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/703be54dfd0dce53ec28ab07a29ace826acfb94a))
- add gitleaks ([46004e7](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/46004e7343fa7116c0f1e6333bf27daa90fcc31d))
- add Gitleaks configuration and environment variable example ([2e3aa07](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2e3aa07b1ce95d2a878d5c0f9163f385668b5fc0))
- add husky ([88df822](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/88df8221c619c7cd296232ccf21ec73198cb0322))
- add legal page and update localization keys for consistency ([8f1f97a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8f1f97a64ec5b08527e04f6c273b78b836497fef))
- add release-please workflow and configuration for automated releases ([e22a1fc](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e22a1fc3bebe7bdc9df05290e508a9a1f156550d))
- add security to cd ([d41b35c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/d41b35cd655bd126dee1df44bfda57e34b04730f))
- add target availability check to security scan workflow ([2790b92](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2790b92b96e3ce1a22261fe63c0c9ce1799f1a50))
- add workflow linting CI GA ([3ffdb30](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/3ffdb302f17efcaf52020ed5e01c3ecec317e752))
- add workflows & separate tasks ([b6ef0e7](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/b6ef0e7ccbff35269027fac832aea8add139dd81))
- **ci:** add a security scan OWASP ZAP & update permissions ([624b606](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/624b6064b520b783b7cdb249080b7bdfd4db39e6))
- **ci:** improve workflows CI/CD & update dependencies ([e4821c3](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e4821c3348f3e95a5dce84dd3f67f4bbb3a53352))
- **ci:** simplify bun install command and add bun configuration file ([add82e4](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/add82e416a5c156fe0ba6251fff39822f62b329b))
- **ci:** update build and deployment workflows, improve version job ([fce49ae](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/fce49aeffa41c4e918c2e6ae19de29ecb55028ef))
- **ci:** update font provider to Bunny and add default font settings ([2534ec3](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2534ec31fc97485369986a7e28ab8f6d6604773a))
- delete unused files & update footer & add confetis ([8db8e3a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8db8e3acf4cf127797c6b69055422cebd81efd15))
- implement OWASP ZAP security scanning and enhance security headers ([6c2324c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/6c2324cf234867112bfc52190c61fb82c09577d2))
- improve CI workflows and update project configuration ([e5818db](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e5818dbe42ad572a16b6f11077c8a5151b2f42d0))
- prettier config ([7d681a6](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7d681a6d840b1ffcf282fbe049389cd321d618b1))
- **tooling:** add oxlint & prek & improve CI ([5358db2](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/5358db2fe815815e9d6a2ef1353274364ee03959))
- update Docker and Makefile configurations to support Bun version extraction and improve development workflow ([613faa6](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/613faa62b6b6ce45ee19353361cd113c6d54217f))
- update Dockerfile and nuxt.config.ts for Bun runtime optimization ([cfe2e90](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cfe2e90df82a29d36f935463cfb0ce0d31d0f7f3))
- update Traefik router configuration for development environment ([19f7107](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/19f71079b2548db5e00ba86d8f339a0ba8dd95ac))

### Bug Fixes

- :bug: ([b089ab2](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/b089ab20c058eb82954fd784dd26b2583bb2e462))
- :bug: ([9f93043](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/9f930430d9b8ca5910b0fcab213a925fc82ae2db))
- :bug: compose for dev ([f7aeb49](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/f7aeb4976471a917eebe502f2f2b218cf346022b))
- :bug: correct directus url with env ([dd58924](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/dd58924ab4a0b527c8c438d09d1aa78e7cb7f600))
- :bug: docker image tag name ([c6475e3](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/c6475e3522e293c9dfac5162b7d3f27fddbed832))
- :bug: dokploy compose & dev url ([12d0cab](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/12d0cab89f012b32e8aa539a20616c9ab62bca7c))
- :bug: fix dokploy api ([7e00511](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7e00511b1678ca84f91e6ffee5b67093e6996052))
- :bug: fix dokploy api [#6](https://github.com/KevinDeBenedetti/portfolio-nuxt/issues/6) ([746a41f](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/746a41fbf40c6432ebc534485a4b608ac65a6eb0))
- :bug: image tag ([e714006](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e714006de2d43b5a32f9be0aadcfa390405e8b98))
- :bug: implement structural updates and optimizations across multiple modules ([bc0c0ae](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/bc0c0ae77166df5f0b9504a7259b6a12b6279c06))
- :bug: modify plugins/directus with .provide ([48d70b0](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/48d70b0fdb8f871035f3330ccaaff2e120788118))
- :bug: prod config docker compose ([a448d4a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/a448d4a6082b4ee7b47727fe19753116ea3b6a12))
- :bug: prod config docker compose ([8d17984](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8d179840e025f79a568342fcf3bfce982e3cdf12))
- :bug: sanitize Docker tag names to prevent invalid characters ([cb14cae](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cb14caec8fe4cafcf8863b00dbf3624067da7e7d))
- :bug: update & upgrade to nuxt 4 ([e5c381d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e5c381d708a8d0851bc4aad1bb9905540c2cd0a7))
- :bug: update permissions ([aba79b0](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/aba79b01d177e6d2ddb8d3d4973d7874b5a8e681))
- :bug: worflows run ([44ef4d5](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/44ef4d5d0e7c2cb8b4c56b0f3cfa84650de6d218))
- :bug: workflow conf ([fac4a93](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/fac4a930d2f5c73b845f6eb813df776ae876970f))
- :bug: workflows ([1d89fca](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/1d89fca6f38f33c3733713f30b3f91979f75adaa))
- :bug: workflows execution ([e109c9e](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e109c9e988cfdd3b39790bf1531eafff7ddda0a9))
- :zap: ci / cd comment a sync ([1f3e04c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/1f3e04ce213b9da6806ebb88bb269637aa68bd9f))
- :zap: update typography plugin import for consistency ([f2b2e50](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/f2b2e50916f528b83eb67de681ad9169e82bf76f))
- add dependency on lint job for build process ([a4e067a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/a4e067a76fe439980355e4ad448ad31684f556a4))
- add env file to compose prod ([6333cfc](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/6333cfc06e90f867bc0999d73dcc4cc8c40c54fd))
- add pnpm-workspace.yaml to Dockerfile copy command ([8b57557](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8b575571c613cabffa9fa3cf4f7f3a513fd5d284))
- add pull request read permission for gitleaks job ([ff43c70](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/ff43c705315b0da3dd22e1f2fae26e77bd080e77))
- add read permission for pull requests in Gitleaks ([557c136](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/557c136064d5198533af3547cb87fda37ad44890))
- ajouter le fichier d'environnement pour le service nuxt ([31b4df4](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/31b4df481fe27c2d7efcdae6d3fd13699606c41f))
- **ci:** correct cache key for bun in build and lint workflows ([d20d62e](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/d20d62e99a99827a003eeb4762bbe6c75df983f1))
- **ci:** remove --frozen-lockfile due to bun peer dependency bug ([f94947a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/f94947a6e10bfc439adf0249b54482ff407a05c1))
- **ci:** sourcemap tailwind warnings ([000d36d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/000d36d70fdb2fc33d2071fa1c93c5abe0976bb7))
- **ci:** use Bun 1.2.15 to fix peer dependency resolution bug ([065798a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/065798a1b7c9d9cbba1ca1abdca23b96ddf7194f))
- compose local ([793575a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/793575a8588787a80e53585cb4f239b937881417))
- correct links & simplify usePageContent ([af4f183](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/af4f1830f54fb97aa0e00eca6d0bad2009fd11fa))
- delete @nuxthq/studio =&gt; deprecated ([dbfe4b9](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/dbfe4b9f89e6f5fdeee575971334ce8f520e2953))
- delete args for env in images ([e8aa60a](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e8aa60ae5a981f14777f1332f4931a69cda8029f))
- delete gitleaks workflow ([d00f207](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/d00f207ee1ce337f5e024b2689106b863ed0d6c5))
- delete old ico ([9feb61e](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/9feb61ec78e167687ca2cc42496d26342487be06))
- delete tailwind.css obsolete ([9127e71](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/9127e71a2a16760a0ac466c1a0044ef9138eeec9))
- delete unused content ([7d3cc8c](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7d3cc8c34af3af2de02aa710aa979fa64787e00a))
- delete unused icons ([de478fe](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/de478fefe0cc49fe5eecf5e4dc861f8261441445))
- docker config for dev environment ([997c30b](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/997c30bfa046fbb65d027b99634837f752b59593))
- Dockerfile ([8856bbc](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8856bbc6ef1bf006ef4aa230e71ed5e962eed59e))
- error return for doklploy trigger ([2c1e072](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2c1e072961a700f6bc9c9cbfb585ab923e85aa9d))
- eslint nuxt/eslint dans package.json & pnpm-lock.yaml ([e7fc3b2](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e7fc3b2d13762c0e32dd6d02061e58e70fbd24d6))
- fix CSS root declaration ([ac43360](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/ac4336068ed23fe8a581ba966fa306a7978ab0a0))
- force node-server preset for Node.js runtime compatibility ([9a18154](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/9a18154f5c83aa850aa5f87af36e91f746d7d0a0))
- format & hydratation projects page ([a04ec75](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/a04ec75d7ff67bdef719b992261e595322d3781c))
- format & lint ([711a837](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/711a837c43eeca1205d6a843ae458e7e8e119d00))
- format code ([963981d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/963981db1bd9f375ee1e3a3b109b695280451a13))
- hydratation warning ([719113d](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/719113d7d0cdbbce9ddab69f5929b2e5d5399af4))
- image name in ghcr ([6d573b2](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/6d573b2dd710877249c7945fb3db6f6cbd2d940a))
- improve script security and update the Content Security Policy ([7a58938](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7a58938776e222a1c4097ff271df0d9b3350ed61))
- install @vueuse/nuxt ([6e2ab0e](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/6e2ab0e5bf3f636c651e2b3889d94c564e18b3b4))
- nuxt schema ([b1c076b](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/b1c076baf38045a3ef8a7adc3c1740b8e3e45739))
- nuxt.schema level ([374b1df](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/374b1dfb730096340bc3736ef5f7097e886a201b))
- re-enable Traefik configurations in compose.dokploy.yml ([7d27a48](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7d27a48e7a9f150ed5dbaeb46b45d1eb6af42937))
- regenerate bun.lock to resolve tiptap peer dependency conflict ([8f72187](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/8f72187f460c7e609109f510875d6cd04e44f130))
- remove gitleaks detection from pre-commit hook ([cfee579](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cfee57909f18c7cc0f14342d106bb60ea8bb9abe))
- remove Google Analytics integration and clean up associated files ([cf81e11](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/cf81e117777736da13db6e3e21555f3e23eacc8a))
- remove redundant docker compose command and ensure proper formatting in configuration files ([3b067c6](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/3b067c68ada9827c58d9c414b326c47bcd1ded48))
- remove SARIF conversion and upload steps from security scan workflow ([34522eb](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/34522eb627bdb67f698e8fe47d73befc1c834523))
- test a secret ([5135adb](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/5135adbeb16b07e0b2828bdbb35d5409167dcfc2))
- update .oxlintrc.json to warn on console.log usage ([eddf2b4](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/eddf2b4fadb4ca256b6dee1f259e75bda6ce89fc))
- update components/App/Navbar.vue ([5175578](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/5175578f0925dfa3609b10ad3c2aa27a6d022968))
- update dependencies & content & legals ([ab6a754](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/ab6a7545a7864ef59d7bd1a0a1229dcaf3dfcebc))
- update i18n/i18n.config.ts ([085b5bd](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/085b5bd46197e3813d928d6ca5f73cf6bedda956))
- update installation commands and remove deprecated PR workflow ([59e2681](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/59e2681f3798123a530095cbe33154498f37ce3d))
- update Makefile for dev command and pnpm-lock.yaml for package versions ([7142f92](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7142f9224e05f2f27d3071ec0f0598b37afcb1d8))
- update pages/index.vue ([e6d022f](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/e6d022f2df4d7a4d79f8948dac713f8f7c08f014))
- update pages/projects.vue ([d4f7240](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/d4f724033b0b414466da32e0213cb2fd06a1e03c))
- update secretApiKey to ghToken in nuxt.config.ts ([1c5dcc0](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/1c5dcc05656f647f93bcc0f9dcc0b00c7ec71df0))
- update user agent for target availability check in security scan workflow ([45a2244](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/45a2244f24bc54f4a514787707187137e11b7172))
- use better-sqlite3 and node-server preset for Node.js runtime compatibility ([af6c765](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/af6c765f954c6b066dec047fdde513c790e7b0d0))
- use correct port 80 for production container ([2a62654](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/2a62654ca46cc4a166395f387e338e3b9a7c1457))
- use the correct dependencie for studio ([ddbbd09](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/ddbbd0990b20a2bc3607e880bcf964811a3076c5))

### Performance Improvements

- :zap: Update dependencies & Nuxt ui v3 + Tailwind v4 & fix bugs ([06a4354](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/06a4354a2d5553dcab70c4ee6b75dadb4d1cff94))
- :zap: Update dependencies & Nuxt ui v3 + Tailwind v4 & fix bugs ([7fc5ac3](https://github.com/KevinDeBenedetti/portfolio-nuxt/commit/7fc5ac35f12d0b76e2440b82551ee0f8d84d9220))
