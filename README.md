# Automate Code Deployment Using CI/CD Pipeline

## Elevate Labs Internship — Task 1

### Project Overview

This project demonstrates how to automate application testing, Docker image building, and image publishing using GitHub Actions. Whenever code is pushed to the `main` branch, the CI/CD pipeline automatically runs tests, builds the Docker image, and pushes it to Docker Hub.

## Technologies Used

- **GitHub:** Source code management
- **GitHub Actions:** CI/CD workflow automation
- **Node.js:** Application runtime
- **Express.js:** Web application framework
- **Docker:** Application containerization
- **Docker Hub:** Docker image registry

## Project Structure

```text
devops-task-1-cicd/
├── .github/
│   └── workflows/
│       └── main.yml
├── app.js
├── app.test.js
├── Dockerfile
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## CI/CD Pipeline Workflow

1. **Trigger:** The workflow starts when code is pushed to the `main` branch. It can also be started manually.
2. **Checkout Code:** GitHub Actions checks out the repository.
3. **Setup Node.js:** Node.js is configured on the GitHub-hosted runner.
4. **Install Dependencies:** Project dependencies are installed using `npm ci`.
5. **Run Tests:** Automated tests execute using `npm test`.
6. **Build Docker Image:** After the tests succeed, the deployment job builds the Docker image.
7. **Push Docker Image:** GitHub Actions authenticates with Docker Hub using GitHub repository secrets and publishes the image with the `latest` tag.

The Docker image publishing job runs only after the test job succeeds.

## Docker Hub Image

**Repository:** [parvathi2003/devops-task-1-cicd](https://hub.docker.com/r/parvathi2003/devops-task-1-cicd)

**Image:** `parvathi2003/devops-task-1-cicd:latest`

## Run the Application Locally

### Prerequisites

- Node.js and npm
- Docker Desktop or Docker Engine
- Git

### Run using Node.js

Clone the repository:

```bash
git clone https://github.com/ParvathiSKallanagoudar/devops-task-1-cicd.git
cd devops-task-1-cicd
npm ci
npm start
```

Open `http://localhost:3000` in your browser.

### Run automated tests

```bash
npm test
```

### Build and run using Docker

Build the image:

```bash
docker build -t devops-task-1-cicd .
```

Run the container:

```bash
docker run --rm -p 3000:3000 devops-task-1-cicd
```

Open `http://localhost:3000` in your browser.

### Pull and run the published Docker image

```bash
docker pull parvathi2003/devops-task-1-cicd:latest
docker run --rm -p 3000:3000 parvathi2003/devops-task-1-cicd:latest
```

## GitHub Actions Secrets

Configure the following repository secrets under **Settings → Secrets and variables → Actions**:

- `DOCKERHUB_USERNAME` — Docker Hub username
- `DOCKERHUB_TOKEN` — Docker Hub personal access token with appropriate permissions

Never commit access tokens, passwords, or other sensitive credentials to the repository.

## Verification

The pipeline was successfully executed, with both the application testing job and the Docker image publishing job completing successfully. The published `latest` image is available in Docker Hub.

## Repository Links

- **GitHub Repository:** https://github.com/ParvathiSKallanagoudar/devops-task-1-cicd
- **GitHub Actions:** https://github.com/ParvathiSKallanagoudar/devops-task-1-cicd/actions
- **Docker Hub:** https://hub.docker.com/r/parvathi2003/devops-task-1-cicd

## Learning Outcomes

- Understanding CI/CD pipeline automation
- Configuring GitHub Actions workflows
- Running automated Node.js tests
- Containerizing applications with Docker
- Publishing Docker images to Docker Hub
- Managing credentials securely with GitHub Actions secrets

---

**Project completed as part of Elevate Labs Internship — Task 1.**
