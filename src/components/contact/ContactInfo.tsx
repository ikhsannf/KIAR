"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, Instagram } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const contactDetails = [
    {
        icon: Phone,
        title: "Hubungi Kami",
        lines: ["0822-9970-8462"],
    },
    {
        icon: Mail,
        title: "Email Kami",
        lines: ["di.kiar2526@gmail.com"],
    },
    {
        icon: Clock,
        title: "Jam Operasional",
        lines: ["Senin - Jumat: 10:00 - 20:00", "Sabtu: 10:00 - 18:00", "Minggu: 12:00 - 17:00"],
    },
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/di.kiar/", label: "Instagram" },
    { icon: TikTokIcon, href: "https://www.tiktok.com/@di.kiar", label: "TikTok" },
];

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
        >
            {/* Contact Details */}
            {contactDetails.map((detail, index) => (
                <motion.div
                    key={detail.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                >
                    <div className="w-12 h-12 flex-shrink-0 bg-[var(--color-gold)]/10 flex items-center justify-center">
                        <detail.icon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                        <h4
                            className="text-lg mb-2 text-[var(--color-soft-black)]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            {detail.title}
                        </h4>
                        {detail.lines.map((line, i) => (
                            <p key={i} className="text-[var(--color-muted)] text-sm">
                                {line}
                            </p>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
                <h4
                    className="text-lg mb-4 text-[var(--color-soft-black)]"
                    style={{ fontFamily: "var(--font-serif)" }}
                >
                    Ikuti Kami
                </h4>
                <div className="flex gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 border border-gray-200 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
