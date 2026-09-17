import { Hono } from 'hono';

type Bindings = {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  RESEND_TO_EMAIL: string;
  ALLOWED_ORIGIN: string;
};

type ContactBody = {
  company?: string; contact?: string; phone?: string; email?: string; need?: string;
  turnstileToken?: string; website?: string;
};

const app = new Hono<{ Bindings: Bindings }>();
const allowedOrigins = new Set([
  'https://demo.siir.beer',
  'http://localhost:3000',
  'http://localhost:5000',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5000',
]);

const cors = (env: Bindings, origin?: string) => ({
  'Access-Control-Allow-Origin': allowedOrigins.has(origin || '') ? origin || env.ALLOWED_ORIGIN : env.ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

app.options('/contact', (c) => new Response(null, {
  headers: cors(c.env, c.req.header('Origin') || ''),
}));

app.post('/contact', async (c) => {
  const origin = c.req.header('Origin') || '';
  const responseHeaders = cors(c.env, origin);
  if (!allowedOrigins.has(origin)) return c.json({ error: 'Forbidden' }, 403, responseHeaders);
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

  const formResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${c.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Phaeray Test <onboarding@resend.dev>',
      to: [c.env.RESEND_TO_EMAIL],
      subject: '官网收到新的安全咨询',
      text: [
        `公司名称：${body.company.trim()}`,
        `联系人：${body.contact.trim()}`,
        `联系电话：${body.phone.trim()}`,
        `电子邮箱：${body.email?.trim() || '未填写'}`,
        '',
        '安全需求：',
        body.need.trim(),
      ].join('\n'),
    }),
  });
  if (!formResponse.ok) return c.json({ error: '提交失败，请稍后重试' }, 502, responseHeaders);
  return c.json({ success: true }, 200, responseHeaders);
});

export default app;
