## stefanlier.de

This is the source code of my personal website. It's mostly a Next.js project with some customizations - helping me to
get more familiar with Next.js. So, for now at least, it's a bit overkill - but let's see where it leads me.

## Getting Started
### Prerequisites

This project expects Node.js version v20.17.0 or higher. Use e.g. ode Version Manager (NVM) to install and manage
Node.js versions. Find out more about NVM at https://github.com/nvm-sh/nvm.

Install the dependencies:

```bash
pnpm install
```

We use [husky](https://typicode.github.io/husky/) to manage git-hooks. It will get automatically installed as part of 
the `pnpm install` command and creates a `.husky` folder in the project root in which you can add more git-hooks if
needed. Check out the husky documentation for more information.

### Development

After providing the database, you can run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment
Right now, this project is deployed to Vercel automatically via a hook in vercel which runs the `build` command whenever
there is a change in this repository. Since this is a nextjs project, it can be hosted anywhere where else as long as
nodejs environment is available.
