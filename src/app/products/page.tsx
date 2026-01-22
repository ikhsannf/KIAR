import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import PageHeader from "@/components/ui/PageHeader";
import ProductsGrid from "./ProductsGrid";

export const metadata: Metadata = {
    title: "Products | KIAR - Koleksi Premium",
    description: "Jelajahi koleksi fashion premium dari KIAR. Temukan gaya elegan dan modern untuk tampilan terbaikmu.",
};

export default function ProductsPage() {
    return (
        <>
            <Header />
            <main>
                <PageHeader
                    label="Products"
                    title="Koleksi Kami"
                    description="Temukan koleksi fashion premium pilihan kami yang dirancang untuk mereka yang menghargai kualitas dan gaya abadi."
                />
                <ProductsGrid />
            </main>
            <Footer />
        </>
    );
}
