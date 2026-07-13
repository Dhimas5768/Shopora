[1.0.0] - 2025-01-15
Added
Initial release
8 featured products with category filter
4 flash sale products with countdown timer
6 category cards (Fashion, Shoes, Watches, Electronics, Beauty, Bags)
6 customer testimonials
Dark mode with localStorage persistence
Loading screen animation
Sticky navbar with scroll effect
Product hover animations (zoom + action buttons)
Add to Cart flying animation
Wishlist toggle (UI only)
Search overlay (UI only)
Quick View modal
Toast notification system
Scroll reveal animations with staggered delays
Back to top button
Mobile responsive slide-in menu
Newsletter subscription form (UI only)
Full footer with links, contact info, and payment badges
Keyboard support (ESC to close modals)
Click outside to close overlays
Ringkasan Struktur
text

Shopora/
│
├── assets/
│   ├── css/
│   │   └── style.css          ← Semua CSS terpisah
│   ├── js/
│   │   └── script.js          ← Semua JS terpisah
│   └── images/                 ← Folder kosong untuk gambar lokal
│
├── documentation/
│   ├── README.md               ← Dokumentasi template
│   ├── LICENSE.txt             ← Lisensi MIT
│   └── CHANGELOG.md            ← Log perubahan
│
└── index.html                  ← Struktur HTML murni
Cara pakai: Cukup buka index.html di browser. Semua dependensi (Tailwind, Lucide, Google Fonts) dimuat via CDN, jadi tidak perlu npm install apapun. Untuk kustomisasi, edit produk di bagian PRODUCT DATA pada script.js, ubah warna di style.css, atau tambah section di index.html.