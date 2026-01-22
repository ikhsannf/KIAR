import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import PageHeader from "@/components/ui/PageHeader";
import { ContactForm, ContactInfo } from "@/components/contact";

export const metadata: Metadata = {
    title: "Contact | KIAR - Get In Touch",
    description: "Have a question or want to learn more about KIAR? Get in touch with us. We'd love to hear from you.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    label="Contact"
                    title="Hubungi Kami"
                    description="Kami senang mendengar dari Anda. Hubungi kami untuk pertanyaan, kolaborasi, atau sekadar menyapa."
                />
                <section className="py-16 bg-[var(--color-primary)]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
