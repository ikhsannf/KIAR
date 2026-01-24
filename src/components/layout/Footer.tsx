import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

// Custom TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const footerLinks = {
    navigation: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/products", label: "Products" },
        { href: "/testimony", label: "Testimony" },
        { href: "/contact", label: "Contact" },
    ],
    social: [
        { href: "https://www.instagram.com/di.kiar/", icon: Instagram, label: "Instagram" },
        { href: "https://www.tiktok.com/@di.kiar", icon: TikTokIcon, label: "TikTok" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/">
                            <span
                                className="text-4xl tracking-wider text-[var(--color-gold)]"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                KIAR
                            </span>
                        </Link>
                        <p className="mt-4 text-[var(--color-muted)] max-w-md leading-relaxed">
                            All your things, go in here
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center
                    text-[var(--color-muted)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]
                    transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-soft-black)] mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors duration-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-soft-black)] mb-6">
                            Contact
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[var(--color-gold)]" />
                                <span className="text-[var(--color-muted)]">0822-9970-8462</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[var(--color-gold)]" />
                                <span className="text-[var(--color-muted)]">di.kiar2526@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[var(--color-muted)]">
                        © {new Date().getFullYear()} KIAR. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-[var(--color-muted)]">
                        <a href="#" className="hover:text-[var(--color-gold)] transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-[var(--color-gold)] transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
