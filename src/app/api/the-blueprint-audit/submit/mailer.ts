import { mailerLiteRequest } from "../../../../lib/mailerlite";

/** Blueprint Audit applicant — adds to the blueprint audit MailerLite group. */
export async function addBlueprintAuditApplicantToMailerLite(
  email: string,
  name: string
): Promise<void> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const blueprintAuditGroup = process.env.MAILERLITE_BLUEPRINT_AUDIT_GROUP;
  if (!apiKey || !blueprintAuditGroup) {
    console.warn(
      "[mailer] MAILERLITE_API_KEY or MAILERLITE_BLUEPRINT_AUDIT_GROUP not set — skipping blueprint audit group add"
    );
    return;
  }

  const groups: string[] = [];
  const allGroup = process.env.MAILERLITE_GROUP_ALL;
  if (allGroup) groups.push(allGroup);
  groups.push(blueprintAuditGroup);

  const result = await mailerLiteRequest("/subscribers", {
    method: "POST",
    body: {
      email,
      fields: {
        name,
        subscriber_type: "blueprint-audit-applicant",
      },
      groups,
    },
  });
  if (!result.ok) {
    console.error("[mailer] Blueprint Audit MailerLite add failed:", result.status, result.errorText);
  }
}
