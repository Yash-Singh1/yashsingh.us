import { AuthorizationCode } from 'simple-oauth2';
import { getConfig } from '../../../../lib/config';
import { scopes } from '../../../../lib/scopes';

export const runtime = 'nodejs';

export async function GET(req: Request) {
  const proto = req.headers.get('x-forwarded-proto');
  const host = req.headers.get('host');
  const url = new URL(`${proto}://${host}/${req.url}`);
  const urlParams = url.searchParams;
  const provider = urlParams.get('provider');

  if (!provider || !(provider in scopes)) {
    return new Response(JSON.stringify({ error: 'Invalid provider' }), {
      status: 400,
    });
  }

  const client = new AuthorizationCode(getConfig(provider as 'github'));

  const authorizationUri = client.authorizeURL({
    redirect_uri: `${proto}://${host}/api/callback?provider=${provider}`,
    scope: scopes[provider as 'github'],
    state: crypto.randomUUID(),
  });

  return Response.redirect(authorizationUri, 301);
}

export const POST = GET;
