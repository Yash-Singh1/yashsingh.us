import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { AuthorizationCode } from 'simple-oauth2';
import { getConfig } from '../../lib/config';
import { scopes } from '../../lib/scopes';

function renderBody(status: string, content: any) {
  return `
    <title>Authentication - yashsingh.us</title>
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:${content.provider}:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:${content.provider}", "*");
    </script>
  `;
}

export const config = {
  runtime: 'edge',
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers;
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const code = urlParams.get('code');
  const provider = urlParams.get('provider');

  if (!provider || !(provider in scopes)) {
    res.status(400).json({ error: 'Invalid provider' });
    return;
  }

  if (!code) {
    res.status(400).json({ error: 'Code required' });
    return;
  }

  const client = new AuthorizationCode(getConfig(provider as 'github'));

  const tokenParams = {
    code,
    redirect_uri: `https://${host}/api/callback?provider=${provider}`,
  };

  try {
    const accessToken = await client.getToken(tokenParams);
    const token = accessToken.token['access_token'];

    const responseBody = renderBody('success', {
      token,
      provider,
    });

    res.statusCode = 200;
    res.end(responseBody);
  } catch (error) {
    res.statusCode = 200;
    res.end(renderBody('error', error));
  }
};

export default handler;
