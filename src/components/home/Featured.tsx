"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";

// Get up to 6 products for featured section
const featuredProducts = products.slice(0, 6);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

export default function Featured() {
    // Determine grid layout based on product count
    const productCount = featuredProducts.length;

    // Dynamic grid classes: center items when less than 3 products
    const gridClasses = productCount <= 2
        ? "flex flex-wrap justify-center gap-8"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

    // Card width for flex layout (when 1-2 products)
    const cardClasses = productCount <= 2
        ? "w-full max-w-sm"
        : "";

    return (
        <section className="py-24 bg-[var(--color-primary)]">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                        Pilihan Unggulan
                    </span>
                    <h2
                        className="text-4xl md:text-5xl mb-4"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        Koleksi Kami
                    </h2>
                    <p className="text-[var(--color-muted)] max-w-xl mx-auto">
                        Jelajahi koleksi fashion premium pilihan kami yang dirancang
                        untuk mereka yang menghargai kualitas dan gaya abadi.
                    </p>
                </motion.div>

                {/* Products Grid/Flex */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={gridClasses}
                >
                    {featuredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className={`group ${cardClasses}`}
                        >
                            <Link href={`/products/${product.slug}`}>
                                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                    {/* New Badge */}
                                    {product.isNew && (
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[var(--color-gold)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                                                New
                                            </span>
                                        </div>
                                    )}

                                    {/* Quick View Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-[var(--color-gold)] text-white px-6 py-3 text-sm font-semibold tracking-wider uppercase">
                                            Lihat Detail
                                        </span>
                                    </div>
                                </div>

                                <span className="text-xs text-[var(--color-gold)] uppercase tracking-wider">
                                    {product.category}
                                </span>
                                <h3
                                    className="text-lg mt-1 group-hover:text-[var(--color-gold)] transition-colors"
                                    style={{ fontFamily: "var(--font-serif)" }}
                                >
                                    {product.name}
                                </h3>
                                <p className="text-[var(--color-muted)] mt-1">{product.price}</p>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <Link href="/products" className="btn-secondary">
                        Lihat Semua Koleksi
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
