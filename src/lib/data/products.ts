/**
 * =================================================================
 * KIAR PRODUCTS DATA
 * =================================================================
 * 
 * 📝 CARA MENGEDIT PRODUK:
 * 1. Scroll ke bawah ke bagian "products" array
 * 2. Copy salah satu objek produk dan paste sebagai produk baru
 * 3. Edit sesuai kebutuhan
 * 
 * 📁 LOKASI GAMBAR:
 * Simpan gambar di: public/images/products/
 * Contoh path: "/images/products/Pajamas/Long Sleeve/long-pajama-1.jpg"
 * 
 * 💡 TIPS:
 * - Gunakan slug yang URL-friendly (huruf kecil, pakai dash: "v-neck-pajama-set")
 * - Resolusi gambar disarankan: minimal 800x1000 pixel
 * - Format gambar: .jpg atau .webp
 * 
 * =================================================================
 */

export interface Product {
    id: string;
    slug: string;
    name: string;
    price: string;
    description: string;
    details: string[];
    images: string[];
    category: string;
    size: string;
    isNew?: boolean;
}

export const products: Product[] = [
    // ============================================
    // PRODUK 1: Long Pajama Set
    // ============================================
    {
        id: "1",
        slug: "long-pajamas-set",
        name: "Long Pajamas Set",
        price: "Rp 135.000",
        description: "Set piyama lengan panjang dengan bahan premium yang lembut dan nyaman. Cocok untuk tidur malam yang berkualitas dengan desain elegan dan modern.",
        details: [
            "Material: Cotton Rayon Premium",
            "Tipe: Lengan Panjang + Celana Panjang",
            "Ukuran: All Size (fit to L)",
            "Bahan adem dan menyerap keringat",
            "Jahitan rapi dan berkualitas",
            "Cocok untuk sehari-hari",
        ],
        images: [
            "/images/products/Pajamas/Long Sleeve/long-pajama-1.jpg",
            "/images/products/Pajamas/Long Sleeve/long-pajama-2.jpg",
            "/images/products/Pajamas/Long Sleeve/long-pajama-3.jpg",
            "/images/products/Pajamas/Long Sleeve/long-pajama-4.jpg",
            "/images/products/Pajamas/Long Sleeve/long-pajama-5.jpg",
        ],
        category: "Sets",
        size: "All Size",
        isNew: false,
    },

    // ============================================
    // PRODUK 2: V Neck Pajama Set
    // ============================================
    {
        id: "2",
        slug: "v-neck-pajamas-set",
        name: "V Neck Pajamas Set",
        price: "Rp 125.000",
        description: "Set piyama lengan pendek dengan kerah V yang stylish dan nyaman dipakai. Bahan breathable yang cocok untuk iklim tropis.",
        details: [
            "Material: Cotton Rayon Premium",
            "Tipe: Lengan Pendek V-Neck + Celana Pendek",
            "Ukuran: All Size (fit to L)",
            "Desain kerah V yang modern",
            "Bahan ringan dan breathable",
            "Perfect untuk tidur di cuaca hangat",
        ],
        images: [
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-1.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-2.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-3.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-4.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-5.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-6.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-7.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-8.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-9.jpg",
            "/images/products/Pajamas/Short Sleeve/vneck-pajama-10.jpg",
        ],
        category: "Sets",
        size: "All Size",
        isNew: false,
    },

    // ============================================
    // TAMBAH PRODUK BARU DI BAWAH INI
    // Copy template di bawah dan isi sesuai kebutuhan
    // ============================================
    /*
    {
        id: "3",
        slug: "nama-produk-url-friendly",
        name: "Nama Produk",
        price: "Rp X.XXX.XXX",
        description: "Deskripsi singkat produk.",
        details: [
            "Detail 1",
            "Detail 2",
            "Detail 3",
        ],
        images: [
            "/images/products/nama-file.jpg",
        ],
        category: "Kategori",
        size: "All Size",
        isNew: true, // hapus baris ini jika bukan produk baru
    },
    */
];

// Helper function untuk mencari produk berdasarkan slug
export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}

// Helper function untuk mendapatkan produk terkait (kategori sama)
export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
    const currentProduct = getProductBySlug(currentSlug);
    if (!currentProduct) return [];

    return products
        .filter((product) => product.slug !== currentSlug && product.category === currentProduct.category)
        .slice(0, limit);
}

// Helper function untuk mendapatkan semua kategori
export function getCategories(): string[] {
    return [...new Set(products.map((product) => product.category))];
}
