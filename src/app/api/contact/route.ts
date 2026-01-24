import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Semua field harus diisi" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Format email tidak valid" },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: "KIAR Website <onboarding@resend.dev>",
            to: ["di.kiar2526@gmail.com"],
            subject: `[KIAR Contact] ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #B8860B; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">
                        Pesan Baru dari Website KIAR
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p><strong>Nama:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subjek:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background-color: #f8f8f8; padding: 20px; border-left: 4px solid #B8860B;">
                        <p style="margin: 0;"><strong>Pesan:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
                    <p style="color: #666; font-size: 12px;">
                        Email ini dikirim melalui form kontak website KIAR.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Gagal mengirim email. Silakan coba lagi." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Email berhasil dikirim!", id: data?.id },
            { status: 200 }
        );
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json(
            { error: "Terjadi kesalahan server. Silakan coba lagi." },
            { status: 500 }
        );
    }
}
