# Task Manager API

A simple task manager API built with Node.js, Express, and MongoDB. This API allows users to create, read, update, and delete tasks, with JWT authentication for user management.

## Features
- Create, read, update, and delete tasks.
- JWT authentication for secure user management.
- Environment variables for configuration.
- Automatic server restart during development with Nodemon.


## Installation

### Step 1: Initialize a Node.js Project
Run the following command to create a `package.json` file:
```bash
npm init -y
```

### Step 2: Install dependencies
Run the following command to install dependencies:
```bash
npm install express mongoose dotenv cors nodemon
```

### Explanation of Dependencies:
- express → Web framework for building the API.
- mongoose → ORM for interacting with MongoDB.
- dotenv → Loads environment variables from a .env file.
- cors → Enables Cross-Origin Resource Sharing.
- nodemon → Auto-restarts the server on file changes.

### Run the Docker Container:
### Step 1: Build the Docker Image:
```bash
docker build -t node-app .
```
### Step 2: Run the Docker Container::
```bash
docker run -p 3000:3000 node-app
```