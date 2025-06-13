import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstname, lastname, email, message } = await req.json();
  const name = firstname + " " + lastname;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD, // pakai app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`, // tampil sebagai pengunjung
    to: process.env.MY_EMAIL, // email kamu
    subject: `MESSAGE FROM PORTFOLIO VIEWER: ${email} `,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ status: 200, message: "success" });
  } catch (error) {
    console.error("Failed to send email", error);
    return Response.json({ status: 500, message: "error" });
  }
}
