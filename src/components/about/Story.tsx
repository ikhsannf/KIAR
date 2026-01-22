"use client";

import { motion } from "framer-motion";

export default function Story() {
    return (
        <section className="py-24 bg-[var(--color-charcoal)]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <div
                                className="aspect-[3/4] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80')`,
                                }}
                            />
                            <div
                                className="aspect-square bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=600&q=80')`,
                                }}
                            />
                        </div>
                        <div className="pt-8">
                            <div
                                className="aspect-[4/5] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80')`,
                                }}
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[var(--color-gold)]/30 -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                            Sejak 2021
                        </span>
                        <h2
                            className="text-4xl md:text-5xl mb-8"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Tentang Kami
                        </h2>

                        <div className="space-y-6 text-[var(--color-soft-white)] leading-relaxed">
                            <p>
                                KIAR adalah brand  yang menghadirkan kenyamanan sebagai prioritas utama.
                                Kami percaya bahwa kualitas istirahat dimulai dari apa yang Anda kenakan.
                            </p>
                            <p>
                                Setiap koleksi KIAR dirancang dengan material lembut, potongan rapi, dan detail yang simpel namun elegan, untuk menemani waktu istirahat yang tenang dan berkualitas.
                                KIAR hadir untuk memberikan rasa nyaman, ringan, dan menenangkan malam demi malam.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
