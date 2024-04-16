# NPS – Blog

This is a simple blog application built with Next.js, Prisma, SQLite, and Typescript.
Next.js is a React framework that allows you to build server-side rendered applications with server actions.
In this project, we use Prisma as an ORM to interact with the SQLite database.

Run the following command to install the required packages:

### Install the required packages

```bash
yarn install
```

### Copy the .env.example file

```bash
cp .env.example .env
```

### Create the database schema

```bash
yarn db:push
```

### Start the development server

```bash
yarn dev
```
