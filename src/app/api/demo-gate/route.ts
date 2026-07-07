import { NextRequest, NextResponse } from "next/server";
import { addDemoGateSubscriber } from "./mailer";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { firstName, lastName, email, role } = data;

    if (!firstName || !lastName || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add subscriber to MailerLite demo gate group (non-blocking)
    addDemoGateSubscriber(email, firstName, lastName, role).catch((err) =>
      console.error("[demo-gate] MailerLite add failed:", err instanceof Error ? err.message : err)
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
