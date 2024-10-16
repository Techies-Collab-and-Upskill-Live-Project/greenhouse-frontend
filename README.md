# FYSI Marketplace Frontend

Welcome to the FYSI Marketplace frontend project! This repository contains the Vite-based frontend application for our eco-friendly e-commerce platform. The goal of FYSI Marketplace is to promote sustainable shopping by connecting vendors who offer eco-friendly products with conscious consumers. This README will guide you through the project overview, setting up your development environment, and contributing to the project.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Communication](#communication)

## Project Overview

The FYSI Marketplace frontend provides the user interface for the core functionalities of the platform, enabling users to:

- Register and manage their accounts (User Management)
- Browse, search, and filter eco-friendly products (Product Browsing)
- Manage their shopping cart and checkout process (Shopping Cart and Checkout)
- For vendors, manage their product listings and sales (Vendor Dashboard)
- For admins, manage users, vendors, and platform settings (Admin Dashboard)
- Display eco-certifications and other green initiatives

## Features

- **User Management:** Registration, login, and profile management.
- **Product Search & Browsing:** Allows users to explore eco-friendly products.
- **Shopping Cart & Checkout:** Manage cart items and proceed with secure checkout.
- **Vendor Dashboard:** Vendors can list products, view sales data, and manage inventory.
- **Admin Dashboard:** Admins oversee the entire marketplace and manage users/vendors.
- **Eco-Certifications:** Highlight sustainable products with proper certifications.

## Tech Stack

- **Frontend Framework:** [Vite](https://vitejs.dev) with [React](https://reactjs.org)
- **CSS Framework:** Tailwind CSS for styling
- **Testing Framework:** Jest for unit testing
- **Version Control:** Git and GitHub for collaboration

## Getting Started

### Prerequisites

Ensure the following software is installed on your local machine:

- [Node.js](https://nodejs.org) (v14+)
- [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com)
- [Git](https://git-scm.com)

### Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Techies-Collab-and-Upskill-Live-Project/Greenhouse-frontend.git
   cd Greenhouse-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The application will run at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is occupied).

## Development Workflow

1. **Branching Strategy:**

   - Create a new branch for each feature or bug fix:
     ```bash
     git checkout -b your-feature-name
     ```
   - After completing your changes, commit with clear and descriptive messages:
     ```bash
     git commit -m "Add product listing component"
     ```

2. **Pushing Changes:**

   - Push your branch to the remote repository:
     ```bash
     git push origin your-feature-name
     ```

3. **Creating Pull Requests (PRs):**
   - Open a PR on GitHub, assign a team member for review, and ensure the changes meet project guidelines before merging.

## Testing

We are using Jest for unit testing. Ensure tests are written for components and utility functions.
To run tests:

```bash
npm run test
# or
yarn test
```

## Building for Production

To create a production-ready build, run:

```bash
npm run build
# or
yarn build
```

This will generate optimized files in the `dist/` directory.

## Deployment

Deployment is handled via [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for details on how to deploy the application.

# Contributing

### To contribute to this project, please follow the steps below:

## Deploy on Vercel

1. Fork the repository and clone it locally.
2. Create a new feature branch for your work.
3. Commit your changes with clear messages.
4. Open a pull request (PR) for review.
5. Address any feedback from the reviewer and update your PR.
6. Once approved, your changes will be merged.

## Communication

For communication and collaboration:

- **WhatsApp:** Daily team discussions and announcements.
- **GitHub Issues:** Task tracking, discussions, and bug reporting.
- **GitHub Project Board:** Update the board regularly to reflect progress on tasks.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Happy coding! 🚀😄
