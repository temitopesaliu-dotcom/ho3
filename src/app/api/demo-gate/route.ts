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

    // Await the MailerLite call so it completes before the serverless function terminates
    await addDemoGateSubscriber(email, firstName, lastName, role);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
