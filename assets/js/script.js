/* ============================================
   SHOPORA - Premium E-Commerce Template
   ============================================ */

// ======== PRODUCT DATA ========
const products = [
  {
    id: 1,
    name: 'Classic White Sneakers',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 124,
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    category: 'shoes',
    image: 'https://picsum.photos/seed/sneakers-white/600/600.jpg',
    desc: 'Premium leather sneakers with cushioned insole for all-day comfort.'
  },
  {
    id: 2,
    name: 'Wireless Headphones Pro',
    price: 149.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'electronics',
    image: 'https://picsum.photos/seed/headphones-pro/600/600.jpg',
    desc: 'Noise-cancelling wireless headphones with 40hr battery life.'
  },
  {
    id: 3,
    name: 'Leather Crossbody Bag',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.7,
    reviews: 56,
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    category: 'bags',
    image: 'https://picsum.photos/seed/leather-bag/600/600.jpg',
    desc: 'Handcrafted genuine leather bag with adjustable strap.'
  },
  {
    id: 4,
    name: 'Premium Chrono Watch',
    price: 249.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 203,
    badge: 'Hot',
    badgeColor: 'bg-amber-500',
    category: 'watches',
    image: 'https://picsum.photos/seed/watch-chrono/600/600.jpg',
    desc: 'Stainless steel chronograph watch with sapphire crystal glass.'
  },
  {
    id: 5,
    name: 'Summer Floral Dress',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 78,
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    category: 'fashion',
    image: 'https://picsum.photos/seed/floral-dress/600/600.jpg',
    desc: 'Light and breezy floral dress perfect for summer outings.'
  },
  {
    id: 6,
    name: 'Matte Lipstick Set',
    price: 34.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 167,
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'beauty',
    image: 'https://picsum.photos/seed/lipstick-set/600/600.jpg',
    desc: '6-piece matte lipstick collection in trending shades.'
  },
  {
    id: 7,
    name: 'Smart Fitness Band',
    price: 79.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 312,
    badge: 'Hot',
    badgeColor: 'bg-amber-500',
    category: 'electronics',
    image: 'https://picsum.photos/seed/fitness-band/600/600.jpg',
    desc: 'Track heart rate, steps, sleep, and 20+ workout modes.'
  },
  {
    id: 8,
    name: 'Denim Jacket Classic',
    price: 99.99,
    originalPrice: 139.99,
    rating: 4.7,
    reviews: 91,
    badge: 'Sale',
    badgeColor: 'bg-red-500',
    category: 'fashion',
    image: 'https://picsum.photos/seed/denim-jacket/600/600.jpg',
    desc: 'Timeless denim jacket with vintage wash and comfortable fit.'
  }
];

const flashSaleProducts = [
  {
    id: 101,
    name: 'Running Shoes Ultra',
    price: 69.99,
    originalPrice: 149.99,
    rating: 4.7,
    reviews: 88,
    badge: '-53%',
    badgeColor: 'bg-red-500',
    category: 'shoes',
    image: 'https://picsum.photos/seed/running-shoes/600/600.jpg',
    desc: 'Lightweight running shoes with responsive cushioning.'
  },
  {
    id: 102,
    name: 'Bluetooth Speaker',
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 145,
    badge: '-50%',
    badgeColor: 'bg-red-500',
    category: 'electronics',
    image: 'https://picsum.photos/seed/bt-speaker/600/600.jpg',
    desc: 'Portable waterproof speaker with 360° surround sound.'
  },
  {
    id: 103,
    name: 'Sunglasses Premium',
    price: 44.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 67,
    badge: '-55%',
    badgeColor: 'bg-red-500',
    category: 'fashion',
    image: 'https://picsum.photos/seed/sunglasses-premium/600/600.jpg',
    desc: 'Polarized UV400 sunglasses with titanium frame.'
  },
  {
    id: 104,
    name: 'Skincare Kit',
    price: 29.99,
    originalPrice: 64.99,
    rating: 4.9,
    reviews: 201,
    badge: '-54%',
    badgeColor: 'bg-red-500',
    category: 'beauty',
    image: 'https://picsum.photos/seed/skincare-kit/600/600.jpg',
    desc: 'Complete 5-step skincare routine for glowing skin.'
  }
];

// ======== STATE ========
let cartCount = 0;
let wishlistSet = new Set();
let currentQVProduct = null;

// ======== RENDER STARS ========
function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(rating)) {
      html += '<i data-lucide="star" class="w-3.5 h-3.5 star-filled"></i>';
    } else {
      html += '<i data-lucide="star" class="w-3.5 h-3.5 star-empty"></i>';
    }
  }
  return html;
}

// ======== CREATE PRODUCT CARD ========
function createProductCard(product) {
  const isWished = wishlistSet.has(product.id);
  return `
    <div class="product-card" data-category="${product.category}" data-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
        <span class="product-badge ${product.badgeColor}">${product.badge}</span>
        <button onclick="toggleWishlist(${product.id}, this)" class="wishlist-btn ${isWished ? 'active' : ''}">
          <i data-lucide="heart" class="w-4 h-4"></i>
        </button>
        <div class="product-actions">
          <button onclick="openQuickView(${product.id})" class="quick-view-btn">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> Quick View
          </button>
          <button onclick="addToCart(event, ${product.id})" class="add-cart-btn">
            <i data-lucide="shopping-cart" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-rating">
          <div class="flex gap-0.5">${renderStars(product.rating)}</div>
          <span class="product-rating-count">(${product.reviews})</span>
        </div>
        <div class="product-prices">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

// ======== RENDER ALL PRODUCTS ========
function renderProducts() {
  document.getElementById('productsGrid').innerHTML = products.map(p => createProductCard(p)).join('');
  document.getElementById('flashSaleGrid').innerHTML = flashSaleProducts.map(p => createProductCard(p)).join('');
  lucide.createIcons();
}

// ======== FILTER PRODUCTS ========
function filterProducts(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('#productsGrid .product-card');
  cards.forEach((card, index) => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 50);
    } else {
      card.style.display = 'none';
    }
  });
}

// ======== ADD TO CART ========
function addToCart(e, productId) {
  cartCount++;
  document.getElementById('cartCount').textContent = cartCount;

  // Fly animation
  const btn = e.currentTarget || e.target.closest('button');
  const rect = btn.getBoundingClientRect();
  const cartRect = document.getElementById('cartBtn').getBoundingClientRect();

  const flyEl = document.createElement('div');
  flyEl.className = 'fly-to-cart';
  flyEl.style.left = (rect.left + rect.width / 2 - 15) + 'px';
  flyEl.style.top = (rect.top + rect.height / 2 - 15) + 'px';
  flyEl.style.width = '30px';
  flyEl.style.height = '30px';
  flyEl.style.background = '#4F46E5';
  flyEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';
  document.body.appendChild(flyEl);

  requestAnimationFrame(() => {
    flyEl.classList.add('fly');
    flyEl.style.left = (cartRect.left + cartRect.width / 2 - 15) + 'px';
    flyEl.style.top = (cartRect.top + cartRect.height / 2 - 15) + 'px';
    flyEl.style.transform = 'scale(0.3)';
  });

  setTimeout(() => flyEl.remove(), 700);

  // Cart button bounce
  const cartBtn = document.getElementById('cartBtn');
  cartBtn.style.transform = 'scale(1.3)';
  setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);

  showToast('Added to Cart!', 'Item has been added successfully');
}

function addToCartFromQV() {
  if (currentQVProduct) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;

    // Bounce cart icon
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.3)';
    setTimeout(() => { cartBtn.style.transform = 'scale(1)'; }, 200);

    showToast('Added to Cart!', currentQVProduct.name + ' has been added');
    closeQuickView();
  }
}

// ======== WISHLIST ========
function toggleWishlist(productId, btn) {
  if (wishlistSet.has(productId)) {
    wishlistSet.delete(productId);
    btn.classList.remove('active');
    showToast('Removed', 'Item removed from wishlist');
  } else {
    wishlistSet.add(productId);
    btn.classList.add('active');
    showToast('Wishlist ❤️', 'Item added to wishlist');
  }
  // Re-render Lucide icons inside the button
  lucide.createIcons();
  // Update wishlist count
  document.getElementById('wishlistCount').textContent = wishlistSet.size;
}

function toggleWishlistQV() {
  if (currentQVProduct) {
    const btn = document.getElementById('qv-wishlist');
    if (wishlistSet.has(currentQVProduct.id)) {
      wishlistSet.delete(currentQVProduct.id);
      btn.classList.remove('active');
      btn.style.color = '';
      btn.style.borderColor = '';
      showToast('Removed', 'Item removed from wishlist');
    } else {
      wishlistSet.add(currentQVProduct.id);
      btn.classList.add('active');
      btn.style.color = '#ef4444';
      btn.style.borderColor = '#fca5a5';
      showToast('Wishlist ❤️', 'Item added to wishlist');
    }
    document.getElementById('wishlistCount').textContent = wishlistSet.size;
    lucide.createIcons();
  }
}

// ======== QUICK VIEW ========
function openQuickView(productId) {
  const allProducts = [...products, ...flashSaleProducts];
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  currentQVProduct = product;
  document.getElementById('qv-image').src = product.image;
  document.getElementById('qv-image').alt = product.name;
  document.getElementById('qv-name').textContent = product.name;
  document.getElementById('qv-price').textContent = '$' + product.price.toFixed(2);
  document.getElementById('qv-original').textContent = product.originalPrice ? '$' + product.originalPrice.toFixed(2) : '';
  document.getElementById('qv-desc').textContent = product.desc;

  const badge = document.getElementById('qv-badge');
  badge.textContent = product.badge;
  badge.className = 'qv-badge ' + product.badgeColor;

  document.getElementById('qv-rating').innerHTML =
    renderStars(product.rating) +
    '<span class="text-sm text-gray-500 dark:text-gray-400 ml-2">' +
    product.rating + ' (' + product.reviews + ' reviews)</span>';

  // Reset wishlist button state
  const qvWishBtn = document.getElementById('qv-wishlist');
  if (wishlistSet.has(product.id)) {
    qvWishBtn.classList.add('active');
    qvWishBtn.style.color = '#ef4444';
    qvWishBtn.style.borderColor = '#fca5a5';
  } else {
    qvWishBtn.classList.remove('active');
    qvWishBtn.style.color = '';
    qvWishBtn.style.borderColor = '';
  }

  document.getElementById('quickViewModal').classList.add('active');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
  document.body.style.overflow = '';
  currentQVProduct = null;
}

// ======== TOAST NOTIFICATION ========
let toastTimeout;
function showToast(title, msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-msg').textContent = msg;

  // Clear existing timeout
  if (toastTimeout) clearTimeout(toastTimeout);

  toast.classList.add('show');
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// ======== SEARCH ========
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => overlay.querySelector('input').focus(), 100);
  } else {
    document.body.style.overflow = '';
  }
}

// ======== DARK MODE ========
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('shopora-dark', isDark ? 'true' : 'false');
  lucide.createIcons();
}

// Load saved dark mode preference
if (localStorage.getItem('shopora-dark') === 'true') {
  document.documentElement.classList.add('dark');
}

// ======== MOBILE MENU ========
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.getElementById('mobileOverlay').classList.toggle('hidden');
}

// ======== COUNTDOWN TIMER ========
function startCountdown() {
  // Set end time to 24 hours from now
  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

  function update() {
    const now = new Date().getTime();
    const diff = endTime - now;

    if (diff <= 0) return;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ======== NEWSLETTER ========
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  if (email) {
    showToast('Subscribed! 🎉', email + ' has been added');
    document.getElementById('newsletterEmail').value = '';
  }
}

// ======== SCROLL EFFECTS ========
function handleScroll() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  // Sticky navbar background
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }

  // Back to top button
  if (window.scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

// ======== SCROLL REVEAL ========
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ======== KEYBOARD SHORTCUTS ========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close quick view
    if (document.getElementById('quickViewModal').classList.contains('active')) {
      closeQuickView();
      return;
    }
    // Close search
    if (document.getElementById('searchOverlay').classList.contains('active')) {
      toggleSearch();
      return;
    }
    // Close mobile menu
    if (document.getElementById('mobileMenu').classList.contains('active')) {
      toggleMobileMenu();
      return;
    }
  }
});

// ======== CLICK OUTSIDE TO CLOSE ========
document.getElementById('searchOverlay').addEventListener('click', function (e) {
  if (e.target === this) toggleSearch();
});

document.getElementById('quickViewModal').addEventListener('click', function (e) {
  if (e.target === this) closeQuickView();
});

// ======== INIT ON LOAD ========
window.addEventListener('scroll', handleScroll);

window.addEventListener('load', () => {
  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1500);

  // Render product cards
  renderProducts();

  // Start flash sale countdown
  startCountdown();

  // Initialize scroll reveal animations
  initReveal();

  // Initialize Lucide icons
  lucide.createIcons();

  // Run initial scroll check
  handleScroll();
});