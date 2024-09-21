# Fetch Transaction App

## Overview

Fetch Transaction App is a NestJS application that allows users to manage transactions by adding and spending points. This README provides instructions for setting up, running, and interacting with the API.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Docker Setup](#docker-setup)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 18 or higher)
- npm (Node Package Manager)
- Docker (if you wish to run the app using Docker)

## Getting Started

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/Fetch-transaction-app.git
cd Fetch-transaction-app/transaction-app
```

## Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```
## Run the Application 

You can run the application in development mode: 

```bash
npm run start:dev
```
Once the application is running you can access the API at
http://localhost:3000/api. And for ease of testing I added
swagger annotations so you can test directly in the browser!

## API Endpoints

The application provides the following API endpoints:

### 1. Add Points

- Endpoint: POST /transactions/add
- Description: Adds points to a specified payer.
- Request Body: 
```json
{
  "payer": "DANNON",
  "points": 1000,
  "timestamp": "2020-11-02T14:00:00Z"
}
```

### 2. Spend Points
 - Endpoint: POST /transactions/spend
 - Description: Spends a specified amount of points.
 - Request Body:
```json
{
  "points": 500
}
```

### 3. Get Balance
- Endpoint: GET /transactions/balance
- Description: Retrieves the current balance of points for all payers.
- Response:
```json
{
  "DANNON": 1000,
  "ANOTHER_PAYER": 500
}
```

## Running Tests

To run the tests for the application, use the following command:

```bash
npm run test
```

## Docker Setup

If you prefer to run the application using Docker, follow these steps:

- Build the Docker image:
```bash
docker-compose build
```
- Run the Docker container:
```bash
docker-compose up
```

Once the container is running, the API will be accessible at
http://localhost:3000/api.

## Stopping the Docker container

To stop the running container, use:

```bash
docker-compose down
```


