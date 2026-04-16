import { NextResponse } from "next/server";

type ContactFormData = {
  username: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  projectName?: string;
  language?: string;
  description: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactFormData;

    if (!body.username || !body.email || !body.description) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    const smtpApiKey = process.env.KLB_SMTP_API_KEY;
    if (!smtpApiKey) {
      return NextResponse.json(
        { message: "SMTP API key is not configured on the server." },
        { status: 500 },
      );
    }

    const mailText = [
      `Name: ${body.username}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || "N/A"}`,
      `WhatsApp: ${body.whatsapp || "N/A"}`,
      `Project Name: ${body.projectName || "N/A"}`,
      `Preferred Language: ${body.language || "N/A"}`,
      "",
      "Project Description:",
      body.description,
    ].join("\n");

    const mailHtml = `
      <h3>New Contact Form Inquiry</h3>
      <p><strong>Name:</strong> ${body.username}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
      <p><strong>WhatsApp:</strong> ${body.whatsapp || "N/A"}</p>
      <p><strong>Project Name:</strong> ${body.projectName || "N/A"}</p>
      <p><strong>Preferred Language:</strong> ${body.language || "N/A"}</p>
      <p><strong>Project Description:</strong></p>
      <p>${body.description.replace(/\n/g, "<br/>")}</p>
      <hr />
      <pre>${mailText}</pre>
    `.trim();

    const adminEmailPayload = {
      to: "kalaburagitech@gmail.com",
      subject: `New Contact Form Inquiry - ${body.projectName || body.username}`,
      html: mailHtml,
    };

    const smtpResponse = await fetch(
      "https://klbsmtp.kalaburagitech.com/api/v1/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": smtpApiKey,
        },
        body: JSON.stringify(adminEmailPayload),
      },
    );

    if (!smtpResponse.ok) {
      const errorText = await smtpResponse.text();
      let parsedDetails: { message?: string; errors?: string[] } | null = null;
      try {
        parsedDetails = JSON.parse(errorText);
      } catch {
        parsedDetails = null;
      }

      const detailedMessage =
        parsedDetails?.errors?.join(", ") ||
        parsedDetails?.message ||
        "Failed to send message through SMTP provider.";

      return NextResponse.json(
        {
          message: detailedMessage,
          details: parsedDetails || errorText,
        },
        { status: 502 },
      );
    }

    const welcomeHtml = `
      <h2>Thank you for contacting KalaburagiTech!</h2>
      <p>Hi ${body.username},</p>
      <p>
        We received your request and our team will get back to you within 24 hours.
      </p>
      <p>
        <strong>Your submitted project:</strong> ${body.projectName || "General inquiry"}
      </p>
      <p>
        Regards,<br />
        KalaburagiTech Team
      </p>
    `.trim();

    const userWelcomePayload = {
      to: body.email,
      subject: "We received your request - KalaburagiTech",
      html: welcomeHtml,
    };

    // Welcome note should not block the primary contact submission success.
    const welcomeResponse = await fetch(
      "https://klbsmtp.kalaburagitech.com/api/v1/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": smtpApiKey,
        },
        body: JSON.stringify(userWelcomePayload),
      },
    );

    if (!welcomeResponse.ok) {
      console.warn("Welcome email failed to send.");
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch {
    return NextResponse.json(
      { message: "Invalid request while sending message." },
      { status: 400 },
    );
  }
}
