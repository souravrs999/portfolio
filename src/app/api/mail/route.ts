import { createTransport } from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { MailOptions } from "nodemailer/lib/json-transport";

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json();

  const transport = createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_APP_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  const mailOptions: MailOptions = {
    from: process.env.GOOGLE_APP_MAIL,
    to: process.env.CONTACT_TO_EMAIL,
    cc: process.env.CONTACT_ALTRENATE_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email Sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Sent" });
  } catch (err) {
    return NextResponse.json(
      { error: err || "Internal Server Error" },
      { status: 500 }
    );
  }
}
