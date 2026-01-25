"use client";

import { motion } from "framer-motion";

export default function Story() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative grid grid-cols-2 gap-4"
                    >
                        <div className="space-y-4">
                            <div
                                className="aspect-[3/4] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/images/content/image2.jpeg')`,
                                }}
                            />
                            <div
                                className="aspect-square bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/images/content/image3.jpeg')`,
                                }}
                            />
                        </div>
                        <div className="pt-8">
                            <div
                                className="aspect-[4/5] bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('/images/content/image1.jpeg')`,
                                }}
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-[var(--color-gold)]/30 -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-[var(--color-gold)] text-sm uppercase tracking-[0.3em] mb-4 block">
                            Sejak 2022
                        </span>
                        <h2
                            className="text-4xl md:text-5xl mb-8"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Tentang Kami
                        </h2>

                        <div className="space-y-6 text-[var(--color-dark-gray)] leading-relaxed">
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
