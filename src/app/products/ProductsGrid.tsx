"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";

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

export default function ProductsGrid() {
    return (
        <section className="py-16 bg-[var(--color-primary)]">
            <div className="container">
                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group"
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

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-16 py-12 border-t border-gray-200"
                >
                    <p className="text-[var(--color-muted)] mb-4">
                        Tertarik dengan produk kami? Hubungi kami untuk informasi lebih lanjut.
                    </p>
                    <a
                        href="https://wa.me/6282299708462"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center"
                    >
                        Hubungi via WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
