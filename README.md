# Snapnet Assesment

This repository contains the solution for the Snapnet Assesment event webapp. It is a TypeScript-based React project that is built using Vite as the development tool.

## Setup Instructions

Follow these steps to get the project up and running:

### Prerequisites

Ensure that you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Steps

1. **Clone the Repository**:
   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/odinakazy/Event-Webapp.git

   ```

2. **Install Dependencies & Run the Development Server**:
   - cd event-webapp
   - pnpm install
   - pnpm dev

## Approach

The project is a TypeScript-based React application built with Vite. Below is an overview of the approach used to solve the challenge:

### Project Setup

- **Vite**: Chosen as the build tool for its fast build and reload times, which significantly enhance the development experience, especially when working with React.
- **TypeScript**: Utilized for type safety throughout the application. Type definitions for React are correctly configured to improve the development workflow.

### Technologies Used

- **React**: Used for building the frontend UI.
- **TypeScript**: Provides type safety throughout the application.
- **Vite**: Used as the build tool for its fast development cycle.
- **React Query**: Handles data fetching and caching, improving performance by reducing redundant requests.

### Folder Structure

- `/src`: Contains all source files, including components, utilities, and other app logic.
- `package.json`: Project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration for bundling and development.
