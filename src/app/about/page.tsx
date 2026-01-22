import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import PageHeader from "@/components/ui/PageHeader";
import { Story, Values, Vision } from "@/components/about";

export const metadata: Metadata = {
    title: "About | KIAR - Premium Fashion",
    description: "Discover the story behind KIAR. Learn about our commitment to quality, timeless design, and sustainable fashion practices.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    label="About Us"
                    title="Kisah KIAR"
                    description="Di mana passion bertemu presisi, dan setiap jahitan menceritakan kisah keunggulan."
                />
                <Story />
                <Values />
                <Vision />
            </main>
            <Footer />
        </>
    );
}
