import { Hono } from 'hono';

type Bindings = {
  TURNSTILE_SECRET_KEY: string;
  FORMSPREE_ENDPOINT: string;
  ALLOWED_ORIGIN: string;
};

type ContactBody = {
  company?: string; contact?: string; phone?: string; email?: string; need?: string;
  turnstileToken?: string; website?: string;
};

const app = new Hono<{ Bindings: Bindings }>();
const cors = (env: Bindings) => ({
  'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

app.options('/contact', (c) => new Response(null, { headers: cors(c.env) }));

app.post('/contact', async (c) => {
  const responseHeaders = cors(c.env);
  if (c.req.header('Origin') !== c.env.ALLOWED_ORIGIN) return c.json({ error: 'Forbidden' }, 403, responseHeaders);
  let body: ContactBody;
  try { body = await c.req.json<ContactBody>(); } catch { return c.json({ error: '请求格式错误' }, 400, responseHeaders); }
  if (body.website) return c.json({ success: true }, 200, responseHeaders);
  if (!body.company || !body.contact || !body.phone || !body.need || body.need.length < 10 || body.need.length > 1000) {
    return c.json({ error: '表单内容不完整或不符合要求' }, 400, responseHeaders);
  }

  const verifyData = new FormData();
  verifyData.append('secret', c.env.TURNSTILE_SECRET_KEY);
  verifyData.append('response', body.turnstileToken || '');
  verifyData.append('remoteip', c.req.header('CF-Connecting-IP') || '');
  const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: verifyData });
  const verifyResult = await verifyResponse.json() as { success?: boolean };
  if (!verifyResult.success) return c.json({ error: '机器人验证失败，请重试' }, 400, responseHeaders);

  const formResponse = await fetch(c.env.FORMSPREE_ENDPOINT, {
    method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ company: body.company.trim(), contact: body.contact.trim(), phone: body.phone.trim(), email: body.email?.trim() || '', need: body.need.trim(), _subject: '官网收到新的安全咨询' }),
  });
  if (!formResponse.ok) return c.json({ error: '提交失败，请稍后重试' }, 502, responseHeaders);
  return c.json({ success: true }, 200, responseHeaders);
});

export default app;
