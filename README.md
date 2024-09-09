## stefanlier.de

This is the source code of my personal website. It's mostly a Next.js project with some customizations - helping me to
get more familiar with Next.js. So, for now at least, it's a bit overkill - but let's see where it leads me.

## Getting Started
### Prerequisites

This project expects Node.js version v20.17.0 or higher. Use e.g. ode Version Manager (NVM) to install and manage
Node.js versions. Find out more about NVM at https://github.com/nvm-sh/nvm.

Install the dependencies:

```bash
npm install
```

We use [husky](https://typicode.github.io/husky/) to manage git-hooks. It will get automatically installed as part of 
the `npm install` command and creates a `.husky` folder in the project root in which you can add more git-hooks if
needed. Check out the husky documentation for more information.

### Database

The project uses [Prisma](https://www.prisma.io/) as an ORM to communicate with the database. Prisma is configured to
use a postgresql database. To provide the database locally, run the following command:

```bash
docker compose up
```

This starts a local instance, runs an initial script to create the database and exposes the database on port 5432. 
Prisma is configured in `prisma/schema.prisma` and uses a couple of environment variables for connecting to the 
database. To configure prisma correctly locally, you need to add the following environment variables to a `.env.local` 
file similar to the following in the project root:

```bash
POSTGRES_PRISMA_URL="postgres://postgres:postgres@localhost:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://postgres:postgres@localhost:5432/verceldb"
```

If you want to run prisma scripts, e.g. the migrations,  you can use the following command to load the environment 
variables and run prisma commands:

```bash
env $(cat .env.local | xargs) npx prisma migrate dev
```

This can be used to e.g. seed the database with some data:

```bash
env $(cat .env.prod | xargs) npx prisma db seed
```

This uses the seeds defined in `prisma/seed.ts` to populate the local database (or which ever you are targeting).

### Development

After providing the database, you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
Right now, this project is deployed to Vercel automatically via a hook in vercel which runs the `build` command whenever
there is a change in this repository. Since this is a nextjs project, it can be hosted anywhere where else as long as
nodejs environment is available.
