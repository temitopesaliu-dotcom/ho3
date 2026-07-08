async function mailerLiteRequest(
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

/** Demo gate subscriber — adds to the ho3 email gate MailerLite group. */
export async function addDemoGateSubscriber(
  email: string,
  firstName: string,
  lastName: string,
  role: string
): Promise<{ ok: boolean; status: number; errorText?: string }> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const demoGateGroup = process.env.MAILERLITE_DEMO_GATE_GROUP;
  if (!apiKey || !demoGateGroup) {
    console.warn(
      "[mailer] MAILERLITE_API_KEY or MAILERLITE_DEMO_GATE_GROUP not set — skipping demo gate group add"
    );
    return { ok: false, status: 0, errorText: "MAILERLITE_API_KEY or MAILERLITE_DEMO_GATE_GROUP not set" };
  }

  const groups: string[] = [];
  const allGroup = process.env.MAILERLITE_GROUP_ALL;
  if (allGroup) groups.push(allGroup);
  groups.push(demoGateGroup);

  const result = await mailerLiteRequest("/subscribers", {
    method: "POST",
    body: {
      email,
      fields: {
        name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
        role,
        subscriber_type: "demo-gate",
      },
      groups,
    },
  });
  if (!result.ok) {
    console.error("[mailer] Demo Gate MailerLite add failed:", result.status, result.errorText);
  }
  return { ok: result.ok, status: result.status, errorText: result.errorText };
}
