import { getSession } from "@/lib/session";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { error } from "console";
import { success } from "zod";
import { Resend } from "resend";
import { email } from "better-auth";
import { Html } from "next/document";
import { resend } from "@/lib/resend";
export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { email: newEmail } = await request.json();
    if (!newEmail) {
      return NextResponse.json(
        { message: "A new email is required." },
        { status: 400 },
      );
    }

    if (newEmail === String(session.user.email)) {
      return NextResponse.json(
        { message: "New email must be different" },
        { status: 400 },
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        email: newEmail,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email Already Exists.",
        },
        { status: 400 },
      );
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.emailupdate.create({
      data: {
        userId: session.user.id,
        newEmail,
        otp,
        expiredAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    });
    await resend.emails.send({
      from: "Devlogs Security <security@mail.notsodev.com>",
      to: session.user.email,
      subject: "Verify Email Change.",
      html: `<h2>Email change password.</h2>
       <p>Your request to change your email to : </p>
       <strong>${newEmail}</strong>
       <p>Your Verification Code is</p>
       <strong>${otp}</strong>
       <p>This code expires in 10 minutes.</p>
       `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
