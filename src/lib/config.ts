export const config = (provider: keyof typeof client & keyof typeof auth) => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret,
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath,
  },
});

const auth = {
  github: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
};

const client = {
  github: {
    id: process.env.GITHUB_ID!,
    secret: process.env.GITHUB_SECRET!,
  },
};
