This README provides a step-by-step guide to set up and run the project using Next.js with Prisma. Follow the instructions below to get started.

## Installation
Install project dependencies:
```bash
npm install
```
Migrations and create the database:
```bash
npx prisma db push --schema=./src/prisma/schema.prisma
```
Generate Prisma Client:
```bash
npx prisma generate --schema=./src/prisma/schema.prisma
```
