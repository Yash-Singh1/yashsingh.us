# `yashsingh.us`

My personal site, written using Typescript, Next.js, and SCSS w/ TailwindCSS.

## Development

To get started, first install dependencies:

```sh
pnpm install
```

For fetching repository information, make sure you specify `GH_TOKEN` (custom GitHub API Token) in the `.env.local` file. It should have the following permissions:

- `public_repo`
- `read:org`
- `repo:status`
- `repo_deployment`
- `user`

For starting up the CMS, specify a `GITHUB_ID` and a `GITHUB_SECRET` for a GitHub OAuth App.

### Start Development Server

Run the following command to start the development server:

```sh
pnpm dev
```
