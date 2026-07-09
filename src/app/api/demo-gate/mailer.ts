import { mailerLiteRequest } from "../../../lib/mailerlite";

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
