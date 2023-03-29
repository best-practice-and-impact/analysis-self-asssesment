# Analysis self-asssesment tool
An app for self-assessment against good analytical coding practices.

## Next.js development mode

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Run the development server locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Docker

Build the Docker app:
```
docker build . -t eu.gcr.io/analysis-self-assessment/app
```

Running Docker container:
```
docker run -p 8080:8080 eu.gcr.io/analysis-self-assessment/app
```

Push the built Docker to GCP Container registry (required auth using 'glcoud'):
```
docker push eu.gcr.io/analysis-self-assessment/app
```

### Terraform

Initialise terraform in current directory:
```
terraform init
```

Create an execution plan:
```
terraform plan
```

Execute the actions from the execution plan:
```
terraform apply
```

Destroy infrastruction created by the Terraform configuration:
'''
terraform destroy
'''