import { AuthorizationCode } from 'simple-oauth2';
import { getConfig } from '../../../lib/config';
import { scopes } from '../../../lib/scopes';

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

export const runtime = 'nodejs';

const handler = async (req: Request) => {
  const host = req.headers.get('host');
  const url = new URL(`https://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const code = urlParams.get('code');
  const provider = urlParams.get('provider');

  if (!provider || !(provider in scopes)) {
    return new Response(JSON.stringify({ error: 'Invalid provider' }), {
      status: 400,
    });
  }

  if (!code) {
    return new Response(JSON.stringify({ error: 'Code required' }), {
      status: 400,
    });
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

    return new Response(responseBody, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return new Response(renderBody('error', error), {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }
};

export const GET = handler;
export const POST = handler;
