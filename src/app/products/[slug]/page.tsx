import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { products, getProductBySlug } from "@/lib/data/products";
import ProductDetail from "./ProductDetail";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: "Produk Tidak Ditemukan | KIAR",
        };
    }

    return {
        title: `${product.name} | KIAR`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Header />
            <main>
                <ProductDetail product={product} />
            </main>
            <Footer />
        </>
    );
}
