import { AuthorizationCode } from 'simple-oauth2';
import { randomBytes } from 'node:crypto';
import { config } from '../../lib/config';
import { scopes } from '../../lib/scopes';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const randomString = () => randomBytes(4).toString('hex');

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const proto = req.headers['x-forwarded-proto'];
  const { host } = req.headers;
  const url = new URL(`${proto}://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get('provider');

  if (!provider || !(provider in scopes)) {
    res.status(400).json({ error: 'Invalid provider' });
    return;
  }

  const client = new AuthorizationCode(config(provider as 'github'));

  const authorizationUri = client.authorizeURL({
    redirect_uri: `${proto}://${host}/api/callback?provider=${provider}`,
    scope: scopes[provider as 'github'],
    state: randomString(),
  });

  res.writeHead(301, { Location: authorizationUri });
  res.end();
};

export default handler;
