### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.


### Deploying your application to the cloud

# For development
`docker-compose -f docker-compose.dev.yml up --build`

# For production/deployment testing
`docker-compose up --build`

<!-- # Or create an alias to make it easier
alias docker-dev="docker-compose -f docker-compose.dev.yml"
docker-dev up --build -->


# Run Together
`docker buildx create --name mybuilder --use`
`docker buildx inspect --bootstrap`

# Login to AWS
`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 741448924187.dkr.ecr.us-east-1.amazonaws.com`

# Build for Fargate
`docker buildx build --platform linux/amd64 -t 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest --push .`

# Tag your image for ECR
`docker tag my-angular-app:latest 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest`

# Push to ECR
`docker push 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest`

<hr>

# Update service with new image
`aws ecs update-service --cluster my-angular-cluster --service my-angular-service --force-new-deployment`

# Scale service
`aws ecs update-service --cluster my-angular-cluster --service my-angular-service --desired-count 2`

# View logs
`aws logs tail /ecs/my-angular-task --follow`

# Clean up resources
`aws ecs update-service --cluster my-angular-cluster --service my-angular-service --desired-count 0`
`aws ecs delete-service --cluster my-angular-cluster --service my-angular-service --force`
`aws ecs delete-cluster --cluster my-angular-cluster`
`aws ecr delete-repository --repository-name my-angular-app --force`