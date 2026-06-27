## stefanlier.de

Static personal site. Just HTML, CSS, and a tiny PostHog snippet — no framework, no build step.

### Layout

```
public/
  index.html
  headshot.png
  favicon.ico
```

### Local preview

```bash
bun install
bun dev
```

### Deployment

Deployed to Vercel. Point the project's output/publish directory at `public/`.

### Analytics

PostHog is loaded via the vanilla snippet at the bottom of `index.html`. Replace `phc_REPLACE_ME` with the project key.

### Conventional commits

Husky + commitlint are kept to enforce conventional commit messages. `bun install` wires up the git hook via the `prepare` script.
