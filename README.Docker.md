

## Build with no cache if needed
`docker compose build --no-cache`

## For production/deployment testing
`docker-compose up --build`

## For development
`docker-compose -f docker-compose.dev.yml up --build`

## Needed to build for Fargate Platform - Run Simultaneously
```
docker buildx create --name mybuilder --use
docker buildx inspect --bootstrap
```

## Login to AWS
`aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 741448924187.dkr.ecr.us-east-1.amazonaws.com`

## Build for Fargate, tag and push to ECR
`docker buildx build --platform linux/amd64 -t 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest --push .`


## Just tag command
`docker tag my-angular-app:latest 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest`

## Just push command
`docker push 741448924187.dkr.ecr.us-east-1.amazonaws.com/eventdriver:latest`

<hr>

## Update service with new image
`aws ecs update-service --cluster eventdriver-cluster --service eventdriver-service--force-new-deployment`

## Scale service
`aws ecs update-service --cluster eventdriver-cluster --service eventdriver-service --desired-count 2`

## View logs
`aws logs tail /ecs/eventdriver-task --follow`

## Clean up/delete resources
`aws ecs update-service --cluster eventdriver-cluster --service eventdriver-service --desired-count 0`
`aws ecs delete-service --cluster eventdriver-cluster --service eventdriver-service --force`
`aws ecs delete-cluster --cluster eventdriver-cluster`
`aws ecr delete-repository --repository-name eventdriver --force`