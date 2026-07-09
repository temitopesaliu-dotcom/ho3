export async function mailerLiteRequest(
  path: string,
  options: { method?: string; body?: unknown } = {}
): Promise<{ ok: boolean; status: number; data?: Record<string, unknown>; errorText?: string }> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return { ok: false, status: 0, errorText: "MAILERLITE_API_KEY not set" };

  try {
    const res = await fetch(`https://connect.mailerlite.com/api${path}`, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      const errorText = await res.text();
      return { ok: false, status: res.status, errorText };
    }

    const data = await res.json().catch(() => undefined);
    return { ok: true, status: res.status, data };
  } catch (err: unknown) {
    return { ok: false, status: -1, errorText: err instanceof Error ? err.message : String(err) };
  }
}
