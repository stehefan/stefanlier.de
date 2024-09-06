
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


### Development

First, run the development server:

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
