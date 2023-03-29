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

Pushing container to GCP container registry requires auth, which uses `GOOGLE_APPLICATION_CREDENTIALS` environment variable by default:
```
export GOOGLE_APPLICATION_CREDENTIALS=[path to service account credentials JSON]
```

Push the built Docker to GCP Container registry:
```
docker push eu.gcr.io/analysis-self-assessment/app
```

### Terraform

Requires auth using gcloud. If service account keys are stored as above:
'''
gcloud auth activate-service-account --key-file $GOOGLE_APPLICATION_CREDENTIALS
'''

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