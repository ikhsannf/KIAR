"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, getRelatedProducts } from "@/lib/data/products";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const relatedProducts = getRelatedProducts(product.slug, 4);

    // WhatsApp message
    const waMessage = encodeURIComponent(
        `Halo KIAR, saya tertarik dengan produk *${product.name}* (${product.price}). Apakah masih tersedia?`
    );
    const waLink = `https://wa.me/6282299708462?text=${waMessage}`;

    const nextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    return (
        <div className="bg-[var(--color-primary)] min-h-screen">
            {/* Breadcrumb */}
            <div className="container pt-28 pb-4">
                <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors"
                >
                    <ArrowLeft size={18} />
                    <span>Kembali ke Koleksi</span>
                </Link>
            </div>

            {/* Main Product Section */}
            <section className="container pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        {/* Main Image */}
                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                            <Image
                                src={product.images[selectedImageIndex]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* New Badge */}
                            {product.isNew && (
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="bg-[var(--color-gold)] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wider">
                                        New Arrival
                                    </span>
                                </div>
                            )}

                            {/* Navigation Arrows (if multiple images) */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-lg"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white flex items-center justify-center transition-colors shadow-lg"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="flex gap-3">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`relative w-20 h-24 overflow-hidden transition-all ${selectedImageIndex === index
                                                ? "ring-2 ring-[var(--color-gold)] ring-offset-2"
                                                : "opacity-60 hover:opacity-100"
                                            }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} - ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:py-8"
                    >
                        {/* Category */}
                        <span className="text-sm text-[var(--color-gold)] uppercase tracking-widest font-medium">
                            {product.category}
                        </span>

                        {/* Name */}
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl mt-3 mb-4"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            {product.name}
                        </h1>

                        {/* Price */}
                        <p className="text-2xl md:text-3xl text-[var(--color-gold)] font-semibold mb-6">
                            {product.price}
                        </p>

                        {/* Size Badge */}
                        <div className="mb-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-charcoal)] border border-[var(--color-surface)] rounded-sm">
                                <span className="text-sm text-[var(--color-muted)]">Ukuran:</span>
                                <span className="font-semibold">{product.size}</span>
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Details */}
                        <div className="mb-10">
                            <h3
                                className="text-lg mb-4"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                Detail Produk
                            </h3>
                            <ul className="space-y-3">
                                {product.details.map((detail, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check
                                            size={18}
                                            className="text-[var(--color-gold)] mt-0.5 flex-shrink-0"
                                        />
                                        <span className="text-[var(--color-muted)]">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* WhatsApp Order Button */}
                        <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1fb855] text-white font-semibold py-4 px-8 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Phone size={22} className="group-hover:animate-pulse" />
                            <span className="text-lg">Order via WhatsApp</span>
                        </a>

                        {/* Additional Info */}
                        <p className="text-center text-sm text-[var(--color-muted)] mt-4">
                            Klik tombol di atas untuk menghubungi kami langsung via WhatsApp
                        </p>

                        {/* Divider */}
                        <div className="my-8 border-t border-[var(--color-surface)]" />

                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-xl mb-1">✨</div>
                                <p className="text-xs text-[var(--color-muted)]">Premium Quality</p>
                            </div>
                            <div>
                                <div className="text-xl mb-1">📦</div>
                                <p className="text-xs text-[var(--color-muted)]">Pengiriman Aman</p>
                            </div>
                            <div>
                                <div className="text-xl mb-1">💬</div>
                                <p className="text-xs text-[var(--color-muted)]">Fast Response</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="container pb-20">
                    <div className="border-t border-[var(--color-surface)] pt-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl text-center mb-12"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Produk Terkait
                        </motion.h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct, index) => (
                                <motion.div
                                    key={relatedProduct.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/products/${relatedProduct.slug}`}
                                        className="group block"
                                    >
                                        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
                                            <Image
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="text-sm md:text-base group-hover:text-[var(--color-gold)] transition-colors line-clamp-1">
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-sm text-[var(--color-muted)]">
                                            {relatedProduct.price}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
