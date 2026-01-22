"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Classic Black Blazer",
        price: "Rp 2.500.000",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        category: "Outerwear",
    },
    {
        id: 2,
        name: "Silk Evening Dress",
        price: "Rp 3.200.000",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        category: "Dresses",
    },
    {
        id: 3,
        name: "Tailored Wool Coat",
        price: "Rp 4.100.000",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80",
        category: "Outerwear",
    },
    {
        id: 4,
        name: "Premium Cotton Shirt",
        price: "Rp 1.200.000",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
        category: "Tops",
    },
    {
        id: 5,
        name: "Leather Crossbody Bag",
        price: "Rp 2.800.000",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
        category: "Accessories",
    },
    {
        id: 6,
        name: "Minimalist Watch",
        price: "Rp 1.900.000",
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
        category: "Accessories",
    },
];

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
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-charcoal)] mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                {/* Quick View Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-[var(--color-gold)] text-black px-6 py-3 text-sm font-semibold tracking-wider uppercase">
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
