# Copilot Instructions for E-COMMERCE Codebase

## Architecture Overview

This project is a monorepo with a clear separation between frontend and backend. The `client` directory contains a React + TypeScript (Vite) application for both store management and shopping. The `server` directory contains a Node.js (Express) backend that provides API endpoints, authentication, and file upload integration. ImageKit is used for image storage, with secure upload authentication handled by a backend route. All API endpoints are mounted under `/api/get`.

## Developer Workflows

Frontend development is performed in the `client` directory. The main workflow is to start the development server using the provided npm script. Environment variables for integrations such as ImageKit are managed in `.env` files and accessed via the Vite environment variable system. UI state is managed with React hooks, and product data is updated using state setters. To extend product features, update the shared types in the interface file.

Backend development is performed in the `server` directory. The backend is started using the npm script for development, which uses TypeScript and nodemon for hot reload. Environment variables for backend integrations must be set in the server's `.env` file. All custom API endpoints are organized under the `/api/get` route. CORS is enabled for local development to allow frontend-backend communication.

## Project-Specific Patterns

ImageKit integration requires fetching a fresh authentication token from the backend for every file upload. Tokens must not be reused across uploads. When updating arrays in state, always use the spread pattern to create new arrays. For object updates, use object spread to create new objects with updated keys. State and setters are passed as props to child components to enable two-way data flow. Errors from API calls or uploads are surfaced to the user through UI feedback mechanisms, not just logged to the console.

## Integration Points

ImageKit is integrated via backend-provided credentials and a dedicated authentication endpoint. All API endpoints are namespaced under `/api/get/`. Both frontend and backend require properly configured `.env` files for environment-specific keys and secrets. Cross-component communication in the frontend is handled by passing state and setters as props, following a modular component structure.

## Conventions and Patterns

Do not provide code directly in pull requests or reviews; instead, give clear guidance on what to do and where to make changes. Always use the existing modular component structure when adding new features. Follow the established patterns for state updates, API integration, and error handling. When working with product data, ensure consistency between frontend types and backend schemas. Use React Query for data fetching and mutations, and always use descriptive query keys for cache management.

## Key Files and Directories

- The main product upload workflow is in the client under the store route for uploading products.
- Shared types and interfaces are defined in the client under the myStoreComponents interface file.
- The backend route for ImageKit authentication is in the server under the route directory.
- The Express app entry point and route mounting are in the server's main index file.

---

If any section is unclear or missing important project-specific details, please provide feedback so this guide can be improved.
