import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import PageHeader from "@/components/ui/PageHeader";
import { TestimonyGrid } from "@/components/testimony";

export const metadata: Metadata = {
    title: "Testimony | KIAR - Customer Reviews",
    description: "Read what our customers have to say about their KIAR experience. Discover why thousands choose KIAR for premium fashion.",
};

export default function TestimonyPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    label="Testimony"
                    title="Apa Kata Pelanggan Kami"
                    description="Kisah nyata dari orang-orang nyata yang telah merasakan perbedaan KIAR."
                />
                <TestimonyGrid />
            </main>
            <Footer />
        </>
    );
}
