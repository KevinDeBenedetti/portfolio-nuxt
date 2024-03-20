### Start App
```bash
docker compose up -d
```

### Update application
```bash
docker-compose down
docker rmi portfolio_nuxt-production
docker-compose up -d
```

### Save & Copy image to VPS
```bash
rm ./docker/portfolio.tar
docker save -o ./docker/portfolio.tar portfolio_nuxt-production
```

### Save & Copy image to VPS
```bash
scp -r ./docker/portfolio.tar vpn0:~/docker-images
```

### Load & Start image on VPS
```bash
ssh vpn0
sudo docker load --input portfolio.tar
docker run -d --name portfolio -p 3001:3001 portfolio_nuxt-production
```

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3003.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)