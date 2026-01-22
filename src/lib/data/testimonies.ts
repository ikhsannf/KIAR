export interface Testimony {
    id: string;
    name: string;
    role: string;
    avatar: string;
    content: string;
    rating: number;
    date: string;
}

export const testimonies: Testimony[] = [
    {
        id: "1",
        name: "Sarah Mitchell",
        role: "Blogger Fashion",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        content: "KIAR telah sepenuhnya mengubah lemari pakaian saya. Kualitasnya tak tertandingi, dan setiap karya terasa seperti dibuat khusus untuk saya. Perhatian mereka terhadap detail sungguh luar biasa.",
        rating: 5,
        date: "Januari 2026",
    },
    {
        id: "2",
        name: "David Chen",
        role: "Direktur Kreatif",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        content: "Sebagai seseorang yang bekerja di industri kreatif, saya membutuhkan pakaian yang membuat pernyataan. KIAR memberikan tepat itu—karya canggih dan abadi yang menarik perhatian.",
        rating: 5,
        date: "Januari 2026",
    },
    {
        id: "3",
        name: "Amanda Rodriguez",
        role: "Pengusaha",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        content: "Saat pertama kali mencoba karya KIAR, saya tahu telah menemukan brand andalan saya. Fitnya sempurna, kainnya mewah, dan desainnya elegan tanpa usaha.",
        rating: 5,
        date: "Desember 2025",
    },
    {
        id: "4",
        name: "Michael Thompson",
        role: "Arsitek",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
        content: "KIAR memahami bahwa kemewahan sejati ada pada detail. Dari jahitan hingga kancing, semuanya dibuat dengan penuh pertimbangan. Sepadan dengan setiap rupiah.",
        rating: 5,
        date: "Desember 2025",
    },
    {
        id: "5",
        name: "Elena Volkov",
        role: "Kurator Seni",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        content: "Saya telah mencari brand yang sesuai dengan estetika saya, dan KIAR lah jawabannya. Pendekatan minimalis mereka terhadap fashion adalah persis yang saya cari.",
        rating: 5,
        date: "November 2025",
    },
    {
        id: "6",
        name: "James Park",
        role: "Eksekutif Teknologi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        content: "Di dunia fast fashion, KIAR menonjol dengan komitmen mereka terhadap kualitas dan keberlanjutan. Saya bangga mendukung brand yang peduli.",
        rating: 5,
        date: "November 2025",
    },
];

export const stats = {
    happyCustomers: "2.500+",
    fiveStarReviews: "1.800+",
    yearsOfExcellence: "5+",
    countriesServed: "15+",
};
