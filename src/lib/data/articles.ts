export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        id: "1",
        title: "Seni Fashion Abadi",
        excerpt: "Temukan cara membangun lemari pakaian yang melampaui tren dan bertahan sepanjang waktu.",
        content: "Fashion bukan hanya tentang mengikuti tren—ini tentang mengekspresikan identitas unik Anda melalui karya-karya yang dikurasi dengan cermat dan bertahan lama.",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
        category: "Panduan Gaya",
        author: "Tim KIAR",
        date: "15 Januari 2026",
        readTime: "5 menit baca",
    },
    {
        id: "2",
        title: "Fashion Berkelanjutan: Masa Depan Adalah Sekarang",
        excerpt: "Bagaimana KIAR memimpin dalam fashion berkelanjutan tanpa mengorbankan gaya.",
        content: "Keberlanjutan bukan sekadar kata kunci—ini adalah komitmen terhadap masa depan fashion dan planet kita.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
        category: "Keberlanjutan",
        author: "Tim KIAR",
        date: "10 Januari 2026",
        readTime: "4 menit baca",
    },
    {
        id: "3",
        title: "Menguasai Monokrom: Edisi Hitam",
        excerpt: "Panduan definitif untuk menguasai estetika serba hitam dengan kecanggihan.",
        content: "Hitam lebih dari sekadar warna—ini adalah pernyataan keanggunan dan gaya abadi.",
        image: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&q=80",
        category: "Panduan Gaya",
        author: "Tim KIAR",
        date: "5 Januari 2026",
        readTime: "6 menit baca",
    },
    {
        id: "4",
        title: "Preview Koleksi Musim Semi 2026",
        excerpt: "Dapatkan tampilan eksklusif pertama koleksi musim semi KIAR yang akan datang.",
        content: "Koleksi musim semi 2026 kami memadukan tekstur organik dengan siluet modern.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
        category: "Koleksi",
        author: "Tim KIAR",
        date: "28 Desember 2025",
        readTime: "3 menit baca",
    },
    {
        id: "5",
        title: "Fit Sempurna: Panduan Tailoring",
        excerpt: "Pelajari rahasia menemukan pakaian yang pas dengan sempurna setiap saat.",
        content: "Perbedaan antara terlihat bagus dan terlihat luar biasa sering kali terletak pada fit.",
        image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80",
        category: "Panduan Gaya",
        author: "Tim KIAR",
        date: "20 Desember 2025",
        readTime: "7 menit baca",
    },
    {
        id: "6",
        title: "Di Balik Layar: Workshop KIAR",
        excerpt: "Intip ke dalam workshop kami di mana keahlian bertemu kreativitas.",
        content: "Setiap karya KIAR dibuat dengan perhatian terhadap detail dan passion untuk keunggulan.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        category: "Di Balik Layar",
        author: "Tim KIAR",
        date: "15 Desember 2025",
        readTime: "5 menit baca",
    },
];
