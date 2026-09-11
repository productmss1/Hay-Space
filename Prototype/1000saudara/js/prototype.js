/**
 * 1000Saudara POS Online Catalogue - Pure Mobile Screen Prototype Logic
 * Scope: PRD_Product_List.md & PRD_Product_Detail.md (Modal Bottom Sheet)
 */

// Mock Products Database with Multi-Variant & Rich Descriptions
const MOCK_PRODUCTS = [
  {
    id: 'PRD-001',
    name: 'Semen Tiga Roda Portland Composite Cement (PCC)',
    category: 'semen',
    categoryName: 'Semen',
    brand: 'tiga-roda',
    brandName: 'Tiga Roda',
    isVerifiedBrand: true,
    price: 68500,
    originalPrice: 75000,
    discountPercent: 9,
    unit: 'Per Sak',
    weightKg: 50,
    stock: 24,
    stockStatus: 'available', // available, low, out_of_stock
    rating: 4.9,
    soldCount: 1420,
    isFlashSale: true,
    flashSaleSold: 78,
    flashSaleTotal: 100,
    sku: 'SKU-SMN-TR-50KG',
    description: 'Semen Tiga Roda Portland Composite Cement (PCC) diformulasikan khusus dengan teknologi terdepan untuk menghasilkan daya rekat ekstra kuat, permukaan acian lebih halus, dan ketahanan tinggi terhadap retak rambut. Sangat ideal untuk aplikasi struktural (cor pondasi, kolom, balok) maupun non-struktural (pasangan bata merah/batako, plesteran dinding, dan acian). Memenuhi standar SNI 7064:2014.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-smn-40',
        name: 'Sak 40 Kg',
        sku: 'SKU-SMN-TR-40KG',
        price: 56000,
        originalPrice: 60000,
        discountPercent: 7,
        weightKg: 40,
        stock: 12,
        stockStatus: 'available',
        unit: 'Per Sak'
      },
      {
        id: 'var-smn-50',
        name: 'Sak 50 Kg',
        sku: 'SKU-SMN-TR-50KG',
        price: 68500,
        originalPrice: 75000,
        discountPercent: 9,
        weightKg: 50,
        stock: 24,
        stockStatus: 'available',
        unit: 'Per Sak'
      },
      {
        id: 'var-smn-jumbo',
        name: 'Jumbo Bag 1 Ton',
        sku: 'SKU-SMN-TR-1TON',
        price: 1320000,
        originalPrice: 1350000,
        discountPercent: 2,
        weightKg: 1000,
        stock: 0,
        stockStatus: 'out_of_stock',
        unit: 'Per Bag'
      }
    ]
  },
  {
    id: 'PRD-002',
    name: 'Besi Beton Ulir SNI TS 280 Diameter 12mm x 12m',
    category: 'besi-baja',
    categoryName: 'Besi & Baja',
    brand: 'krakatau-steel',
    brandName: 'Krakatau Steel',
    isVerifiedBrand: true,
    price: 118000,
    originalPrice: 125000,
    discountPercent: 6,
    unit: 'Per Batang',
    weightKg: 10.65,
    stock: 3,
    stockStatus: 'low',
    rating: 4.8,
    soldCount: 890,
    isFlashSale: true,
    flashSaleSold: 42,
    flashSaleTotal: 50,
    sku: 'SKU-BSI-KS-U12',
    description: 'Besi Beton Ulir (Deformed Bar) SNI 2052:2017 Grade TS 280 produksi resmi Krakatau Steel. Memiliki ulir sirip presisi tinggi yang menjamin interlocking optimal dengan adukan semen cor beton bertulang. Toleransi diameter resmi pabrik, tahan gempa, dan bersertifikat uji tarik resmi.',
    images: [
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-bsi-10',
        name: 'Diameter 10 mm (12m)',
        sku: 'SKU-BSI-KS-U10',
        price: 84000,
        originalPrice: 88000,
        discountPercent: 5,
        weightKg: 7.4,
        stock: 45,
        stockStatus: 'available',
        unit: 'Per Batang'
      },
      {
        id: 'var-bsi-12',
        name: 'Diameter 12 mm (12m)',
        sku: 'SKU-BSI-KS-U12',
        price: 118000,
        originalPrice: 125000,
        discountPercent: 6,
        weightKg: 10.65,
        stock: 3,
        stockStatus: 'low',
        unit: 'Per Batang'
      },
      {
        id: 'var-bsi-16',
        name: 'Diameter 16 mm (12m)',
        sku: 'SKU-BSI-KS-U16',
        price: 210000,
        originalPrice: 220000,
        discountPercent: 5,
        weightKg: 18.96,
        stock: 0,
        stockStatus: 'out_of_stock',
        unit: 'Per Batang'
      }
    ]
  },
  {
    id: 'PRD-003',
    name: 'Dulux Cat Tembok Catylac Interior White 5kg',
    category: 'cat-finishing',
    categoryName: 'Cat & Finishing',
    brand: 'dulux',
    brandName: 'Dulux',
    isVerifiedBrand: true,
    price: 145000,
    originalPrice: 160000,
    discountPercent: 10,
    unit: 'Per Galon',
    weightKg: 5,
    stock: 18,
    stockStatus: 'available',
    rating: 4.9,
    soldCount: 650,
    isFlashSale: false,
    sku: 'SKU-CAT-DLX-5KG',
    description: 'Dulux Catylac Interior dengan teknologi Chroma Brite menghadirkan warna cerah menakjubkan dan tahan lama pada dinding dalam ruangan. Formula anti-jamur, rendah bau (Low VOC), tanpa tambahan timbal & merkuri, serta daya tutup dinding yang sangat tinggi dan merata.',
    images: [
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-cat-5kg',
        name: 'Galon 5 Kg',
        sku: 'SKU-CAT-DLX-5KG',
        price: 145000,
        originalPrice: 160000,
        discountPercent: 10,
        weightKg: 5,
        stock: 18,
        stockStatus: 'available',
        unit: 'Per Galon'
      },
      {
        id: 'var-cat-25kg',
        name: 'Pail 25 Kg',
        sku: 'SKU-CAT-DLX-25KG',
        price: 680000,
        originalPrice: 720000,
        discountPercent: 6,
        weightKg: 25,
        stock: 6,
        stockStatus: 'available',
        unit: 'Per Pail'
      }
    ]
  },
  {
    id: 'PRD-004',
    name: 'Pipa PVC Wavin AW Diameter 1/2 Inch x 4 Meter',
    category: 'pipa-sanitari',
    categoryName: 'Pipa & Sanitari',
    brand: 'wavin',
    brandName: 'Wavin',
    isVerifiedBrand: true,
    price: 34500,
    originalPrice: 34500,
    discountPercent: 0,
    unit: 'Per Batang',
    weightKg: 1.2,
    stock: 0,
    stockStatus: 'out_of_stock',
    rating: 4.7,
    soldCount: 1200,
    isFlashSale: false,
    sku: 'SKU-PIP-WAV-12AW',
    description: 'Pipa PVC Wavin tipe AW dirancang untuk saluran air bertekanan tinggi hingga 10 bar. Terbuat dari bahan uPVC murni tanpa timbal, kuat menahan tekanan air pompa, tahan korosi kimia, dan memiliki dinding bagian dalam yang licin untuk mencegah endapan kotoran.',
    images: [
      'https://images.unsplash.com/photo-1542013936693-884638332954?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-pip-12',
        name: '1/2 Inch (AW)',
        sku: 'SKU-PIP-WAV-12AW',
        price: 34500,
        originalPrice: 34500,
        discountPercent: 0,
        weightKg: 1.2,
        stock: 0,
        stockStatus: 'out_of_stock',
        unit: 'Per Batang'
      },
      {
        id: 'var-pip-34',
        name: '3/4 Inch (AW)',
        sku: 'SKU-PIP-WAV-34AW',
        price: 46000,
        originalPrice: 46000,
        discountPercent: 0,
        weightKg: 1.8,
        stock: 14,
        stockStatus: 'available',
        unit: 'Per Batang'
      },
      {
        id: 'var-pip-1in',
        name: '1 Inch (AW)',
        sku: 'SKU-PIP-WAV-1AW',
        price: 62000,
        originalPrice: 62000,
        discountPercent: 0,
        weightKg: 2.5,
        stock: 8,
        stockStatus: 'available',
        unit: 'Per Batang'
      }
    ]
  },
  {
    id: 'PRD-005',
    name: 'Avian Cat Kayu & Besi Super Gloss Hitam 1 Liter',
    category: 'cat-finishing',
    categoryName: 'Cat & Finishing',
    brand: 'avian',
    brandName: 'Avian',
    isVerifiedBrand: true,
    price: 67000,
    originalPrice: 72000,
    discountPercent: 7,
    unit: 'Per Kaleng',
    weightKg: 1.1,
    stock: 2,
    stockStatus: 'low',
    rating: 4.8,
    soldCount: 430,
    isFlashSale: true,
    flashSaleSold: 28,
    flashSaleTotal: 30,
    sku: 'SKU-CAT-AVN-1L',
    description: 'Cat sintetis alkyd premium Avian memberikan hasil akhir kilap sempurna (super gloss) yang melindungi permukaan kayu dan besi dari karat, cuaca ekstrem, dan jamur. Cepat kering dan daya lekat kuat untuk pagar, kusen, pintu, dan teralis.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-avn-1l',
        name: 'Kaleng 1 Liter',
        sku: 'SKU-CAT-AVN-1L',
        price: 67000,
        originalPrice: 72000,
        discountPercent: 7,
        weightKg: 1.1,
        stock: 2,
        stockStatus: 'low',
        unit: 'Per Kaleng'
      }
    ]
  },
  {
    id: 'PRD-006',
    name: 'Semen Holcim / Dynamix Serba Guna 40kg',
    category: 'semen',
    categoryName: 'Semen',
    brand: 'holcim',
    brandName: 'Holcim',
    isVerifiedBrand: true,
    price: 54000,
    originalPrice: 56000,
    discountPercent: 4,
    unit: 'Per Sak',
    weightKg: 40,
    stock: 45,
    stockStatus: 'available',
    rating: 4.8,
    soldCount: 980,
    isFlashSale: false,
    sku: 'SKU-SMN-HLC-40KG',
    description: 'Semen Dynamix Serba Guna dengan butiran mikro halus yang memadatkan campuran semen secara sempurna. Memberikan kekuatan tahan lama untuk plesteran dinding, pasangan bata, acian, dan pengecoran struktur rumah tinggal.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-hlc-40',
        name: 'Sak 40 Kg',
        sku: 'SKU-SMN-HLC-40KG',
        price: 54000,
        originalPrice: 56000,
        discountPercent: 4,
        weightKg: 40,
        stock: 45,
        stockStatus: 'available',
        unit: 'Per Sak'
      },
      {
        id: 'var-hlc-50',
        name: 'Sak 50 Kg',
        sku: 'SKU-SMN-HLC-50KG',
        price: 66500,
        originalPrice: 69000,
        discountPercent: 4,
        weightKg: 50,
        stock: 20,
        stockStatus: 'available',
        unit: 'Per Sak'
      }
    ]
  },
  {
    id: 'PRD-007',
    name: 'Stop Kontak Broco Galleon White 1 Gang Flush',
    category: 'alat-listrik',
    categoryName: 'Alat Listrik',
    brand: 'broco',
    brandName: 'Broco',
    isVerifiedBrand: true,
    price: 22500,
    originalPrice: 25000,
    discountPercent: 10,
    unit: 'Per Pcs',
    weightKg: 0.15,
    stock: 65,
    stockStatus: 'available',
    rating: 4.9,
    soldCount: 2150,
    isFlashSale: false,
    sku: 'SKU-ELC-BRC-STP',
    description: 'Stop kontak tanam Broco seri Galleon warna putih elegan. Material polikarbonat tahan panas dan terminal kuningan anti-korosi dengan sistem grounding pengaman anak (child protection). Standar SNI IEC 60884-1.',
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-brc-1g',
        name: '1 Gang Standar',
        sku: 'SKU-ELC-BRC-STP',
        price: 22500,
        originalPrice: 25000,
        discountPercent: 10,
        weightKg: 0.15,
        stock: 65,
        stockStatus: 'available',
        unit: 'Per Pcs'
      },
      {
        id: 'var-brc-2g',
        name: '2 Gang Dobel',
        sku: 'SKU-ELC-BRC-STP2',
        price: 42000,
        originalPrice: 45000,
        discountPercent: 7,
        weightKg: 0.28,
        stock: 30,
        stockStatus: 'available',
        unit: 'Per Pcs'
      }
    ]
  },
  {
    id: 'PRD-008',
    name: 'Toren Tangki Air Maspion Plastik HDPE 550 Liter Anti Lumut',
    category: 'pipa-sanitari',
    categoryName: 'Pipa & Sanitari',
    brand: 'maspion',
    brandName: 'Maspion',
    isVerifiedBrand: true,
    price: 890000,
    originalPrice: 980000,
    discountPercent: 9,
    unit: 'Per Unit',
    weightKg: 22.5,
    stock: 4,
    stockStatus: 'available',
    rating: 4.9,
    soldCount: 88,
    isFlashSale: false,
    sku: 'SKU-TOR-MSP-550',
    description: 'Tangki air HDPE 3 lapis Maspion dengan lapisan anti-UV dan formula anti-lumut mikroba. Menjaga kualitas air bersih higienis bebas bakteri. Kuat terhadap benturan, elastis, dan tahan terhadap cuaca terik matahari langsung.',
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&auto=format&fit=crop&q=80'
    ],
    variants: [
      {
        id: 'var-msp-550',
        name: 'Kapasitas 550 Liter',
        sku: 'SKU-TOR-MSP-550',
        price: 890000,
        originalPrice: 980000,
        discountPercent: 9,
        weightKg: 22.5,
        stock: 4,
        stockStatus: 'available',
        unit: 'Per Unit'
      },
      {
        id: 'var-msp-1000',
        name: 'Kapasitas 1000 Liter',
        sku: 'SKU-TOR-MSP-1000',
        price: 1450000,
        originalPrice: 1550000,
        discountPercent: 6,
        weightKg: 38.0,
        stock: 2,
        stockStatus: 'low',
        unit: 'Per Unit'
      }
    ]
  }
];

// App State
const state = {
  activeCategory: 'all',
  activeBrand: 'all',
  searchQuery: '',
  sortBy: 'relevant', // relevant, price-asc, price-desc, discount
  cartCount: 0,
  cartTotal: 0,
  cartItems: [
    {
      id: 'cart-1',
      productId: 'PRD-001',
      variantId: 'var-smn-50',
      name: 'Semen Tiga Roda Portland Composite Cement (PCC)',
      variantName: 'Sak 50 Kg',
      sku: 'SKU-SMN-TR-50KG',
      price: 68500,
      qty: 20,
      unit: 'Per Sak',
      weightKg: 50,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'cart-2',
      productId: 'PRD-002',
      variantId: 'var-bsi-12',
      name: 'Besi Beton Ulir SNI TS 280 Diameter 12mm x 12m',
      variantName: 'Diameter 12 mm (12m)',
      sku: 'SKU-BSI-KS-U12',
      price: 118000,
      qty: 10,
      unit: 'Per Batang',
      weightKg: 10.65,
      image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80'
    }
  ],
  // Modal Bottom Sheet State
  activeDetailProduct: null,
  activeSelectedVariant: null,
  detailQty: 1,
  isDescriptionExpanded: false,
  // Fast Checkout & Delivery State (PRD_Checkout_Booking.md)
  checkout: {
    customerName: 'Bambang Sutrisno',
    customerPhone: '81234567890',
    fulfillment: 'delivery', // 'pickup' | 'delivery'
    pickupTime: 'Hari ini (1-2 jam lagi)',
    deliveryAddress: 'Jl. Terusan Danau Sentani No. 45, Sawojajar, Malang',
    deliveryNotes: 'Sebelah Masjid Al-Ikhlas, rumah pagar hitam, jalan muat truk engkel',
    latitude: -7.9782,
    longitude: 112.6561,
    distanceKm: 2.4, // Initial distance within 5.0 KM radius
    orderNotes: 'Tolong semen ditaruh di dalam garasi kering.'
  },
  lastBooking: null,
  isMapPickerOpen: false
};

// Formatting Utilities
function formatIDR(amount) {
  return 'Rp ' + Number(amount || 0).toLocaleString('id-ID');
}

function formatWeight(kg) {
  if (kg >= 1000) {
    const tons = (kg / 1000).toFixed(2);
    return `Estimasi ${tons} Ton (${kg.toLocaleString('id-ID')} kg)`;
  }
  return `Estimasi ${kg.toFixed(1)} kg`;
}

// Flash Sale Countdown Timer
function initFlashSaleTimer() {
  let totalSeconds = 2 * 3600 + 45 * 60 + 18; // 02:45:18
  const hoursEl = document.getElementById('timerHours');
  const minutesEl = document.getElementById('timerMinutes');
  const secondsEl = document.getElementById('timerSeconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  function updateTimer() {
    if (totalSeconds <= 0) {
      totalSeconds = 24 * 3600;
    }
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
    totalSeconds--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// Render Product Card HTML
function renderProductCard(product) {
  const isOutOfStock = product.stockStatus === 'out_of_stock' || product.stock === 0;
  const isLowStock = product.stockStatus === 'low' || (product.stock > 0 && product.stock <= 5);

  let stockBadgeHtml = '';
  if (isOutOfStock) {
    stockBadgeHtml = `<span class="stock-badge badge-empty"><span class="status-dot"></span>Stok Habis</span>`;
  } else if (isLowStock) {
    stockBadgeHtml = `<span class="stock-badge badge-warning"><span class="status-dot"></span>Sisa ${product.stock} ${product.unit.replace('Per ', '')}</span>`;
  } else {
    stockBadgeHtml = `<span class="stock-badge badge-success"><span class="status-dot"></span>Ready Stock</span>`;
  }

  const discountBadgeHtml = product.discountPercent > 0
    ? `<span class="product-badge-discount">-${product.discountPercent}%</span>`
    : '';

  const originalPriceHtml = product.discountPercent > 0
    ? `<span class="original-price">${formatIDR(product.originalPrice)}</span>`
    : '';

  const buttonState = isOutOfStock
    ? `<button class="btn-add-cart disabled" disabled title="Stok Tidak Tersedia">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        <span>Habis</span>
       </button>`
    : `<button class="btn-add-cart" onclick="event.stopPropagation(); handleQuickAdd('${product.id}')" title="Tambah ke Keranjang">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        <span>+ Keranjang</span>
       </button>`;

  return `
    <article class="product-card ${isOutOfStock ? 'is-out-of-stock' : ''}" onclick="openProductDetail('${product.id}')" data-product-id="${product.id}">
      <div class="product-image-wrap">
        <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy" />
        ${discountBadgeHtml}
        ${isOutOfStock ? `<div class="out-of-stock-overlay"><span>Stok Habis</span></div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-brand-tag">${product.brandName}</div>
        <h3 class="product-title" title="${product.name}">${product.name}</h3>
        <div class="product-uom-tag">${product.unit}</div>
        
        <div class="product-price-stack">
          ${originalPriceHtml}
          <div class="current-price">${formatIDR(product.price)}</div>
        </div>

        <div class="product-meta-row">
          <div class="rating-info">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>${product.rating}</span>
            <span class="sold-count">(${product.soldCount}+)</span>
          </div>
        </div>

        <div class="product-footer">
          <div class="stock-container">
            ${stockBadgeHtml}
          </div>
          ${buttonState}
        </div>
      </div>
    </article>
  `;
}

// Render Flash Sale Section
function renderFlashSale() {
  const flashSaleContainer = document.getElementById('flashSaleGrid');
  if (!flashSaleContainer) return;

  const flashProducts = MOCK_PRODUCTS.filter(p => p.isFlashSale);
  flashSaleContainer.innerHTML = flashProducts.map(product => {
    const progressPercent = Math.round((product.flashSaleSold / product.flashSaleTotal) * 100);
    return `
      <div class="flash-sale-card" onclick="openProductDetail('${product.id}')">
        <div class="flash-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}" loading="lazy" />
          <span class="flash-badge">-${product.discountPercent}%</span>
        </div>
        <div class="flash-info">
          <div class="flash-brand">${product.brandName}</div>
          <h4 class="flash-title">${product.name}</h4>
          <div class="flash-price">${formatIDR(product.price)}</div>
          <div class="flash-original">${formatIDR(product.originalPrice)}</div>
          
          <div class="flash-progress-wrap">
            <div class="flash-progress-bar">
              <div class="flash-progress-fill" style="width: ${progressPercent}%;"></div>
            </div>
            <div class="flash-progress-text">Terjual ${product.flashSaleSold}/${product.flashSaleTotal}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter and Sort Engine
function getFilteredProducts() {
  let filtered = [...MOCK_PRODUCTS];

  // Category Filter
  if (state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  // Brand Filter
  if (state.activeBrand !== 'all') {
    filtered = filtered.filter(p => p.brand === state.activeBrand);
  }

  // Search Filter
  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brandName.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q)
    );
  }

  // Sorting
  switch (state.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'discount':
      filtered.sort((a, b) => b.discountPercent - a.discountPercent);
      break;
    case 'relevant':
    default:
      filtered.sort((a, b) => {
        if (a.stockStatus === 'out_of_stock' && b.stockStatus !== 'out_of_stock') return 1;
        if (a.stockStatus !== 'out_of_stock' && b.stockStatus === 'out_of_stock') return -1;
        return 0;
      });
      break;
  }

  return filtered;
}

// Render Main Product Grid
function renderProducts() {
  const gridEl = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  const emptyStateEl = document.getElementById('emptyState');
  const flashSaleSection = document.getElementById('flashSaleSection');

  if (!gridEl) return;

  const products = getFilteredProducts();

  if (flashSaleSection) {
    if (state.searchQuery !== '' || state.activeCategory !== 'all' || state.activeBrand !== 'all') {
      flashSaleSection.style.display = 'none';
    } else {
      flashSaleSection.style.display = 'block';
    }
  }

  if (countEl) {
    countEl.textContent = `${products.length} Produk Ditemukan`;
  }

  if (products.length === 0) {
    gridEl.innerHTML = '';
    if (emptyStateEl) emptyStateEl.style.display = 'flex';
  } else {
    if (emptyStateEl) emptyStateEl.style.display = 'none';
    gridEl.innerHTML = products.map(renderProductCard).join('');
  }
}

// ==========================================================================
// MODAL BOTTOM SHEET LOGIC (PRD_Product_Detail.md)
// ==========================================================================

function openProductDetail(productId) {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeDetailProduct = product;
  state.isDescriptionExpanded = false;
  state.detailQty = 1;

  // Default to first variant or available variant
  if (product.variants && product.variants.length > 0) {
    const availableVariant = product.variants.find(v => v.stock > 0) || product.variants[0];
    state.activeSelectedVariant = availableVariant;
  } else {
    state.activeSelectedVariant = null;
  }

  renderModalDetailContent();

  const overlay = document.getElementById('productDetailOverlay');
  const sheet = document.getElementById('productDetailSheet');

  if (overlay && sheet) {
    overlay.classList.add('active');
    sheet.classList.add('active');
    document.body.style.overflow = 'hidden'; // Body scroll lock
  }
}

function closeProductDetail() {
  const overlay = document.getElementById('productDetailOverlay');
  const sheet = document.getElementById('productDetailSheet');

  if (overlay && sheet) {
    overlay.classList.remove('active');
    sheet.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  state.activeDetailProduct = null;
  state.activeSelectedVariant = null;
}

function selectDetailVariant(variantId) {
  const product = state.activeDetailProduct;
  if (!product || !product.variants) return;

  const variant = product.variants.find(v => v.id === variantId);
  if (!variant) return;

  state.activeSelectedVariant = variant;
  // Reset or cap qty if current qty exceeds new variant stock
  if (variant.stock > 0 && state.detailQty > variant.stock) {
    state.detailQty = variant.stock;
    showToast(`Kuantiti disesuaikan dengan stok varian (${variant.stock} ${variant.unit.replace('Per ', '')})`, 'warning');
  }

  renderModalDetailContent();
}

function changeDetailQty(delta) {
  const currentVariant = state.activeSelectedVariant;
  const currentProduct = state.activeDetailProduct;
  const maxStock = currentVariant ? currentVariant.stock : (currentProduct ? currentProduct.stock : 999);

  if (maxStock <= 0) return;

  let newQty = state.detailQty + delta;
  if (newQty < 1) newQty = 1;
  if (newQty > maxStock) {
    newQty = maxStock;
    showToast(`Maksimal pemesanan sesuai sisa stok cabang (${maxStock})`, 'warning');
  }

  state.detailQty = newQty;
  updateDetailPriceAndWeight();
}

function handleManualQtyInput(event) {
  const currentVariant = state.activeSelectedVariant;
  const currentProduct = state.activeDetailProduct;
  const maxStock = currentVariant ? currentVariant.stock : (currentProduct ? currentProduct.stock : 999);

  let val = parseInt(event.target.value, 10);
  if (isNaN(val) || val < 1) {
    val = 1;
  }
  if (val > maxStock) {
    val = maxStock;
    showToast(`Kuantiti disesuaikan dengan sisa stok cabang (${maxStock})`, 'warning');
  }

  state.detailQty = val;
  event.target.value = val;
  updateDetailPriceAndWeight();
}

function toggleDescriptionExpand() {
  state.isDescriptionExpanded = !state.isDescriptionExpanded;
  const descEl = document.getElementById('sheetProductDescription');
  const btnEl = document.getElementById('toggleDescBtn');

  if (descEl && btnEl) {
    if (state.isDescriptionExpanded) {
      descEl.classList.remove('clamp-text');
      btnEl.textContent = 'Sembunyikan';
    } else {
      descEl.classList.add('clamp-text');
      btnEl.textContent = 'Lihat Selengkapnya';
    }
  }
}

function updateDetailPriceAndWeight() {
  const product = state.activeDetailProduct;
  const variant = state.activeSelectedVariant;
  if (!product) return;

  const currentPrice = variant ? variant.price : product.price;
  const currentWeightKg = variant ? variant.weightKg : (product.weightKg || 1);
  const totalSubtotal = currentPrice * state.detailQty;
  const totalWeightKg = currentWeightKg * state.detailQty;

  const subtotalEl = document.getElementById('sheetSubtotalAmount');
  const weightEl = document.getElementById('sheetWeightEstimation');
  const qtyInput = document.getElementById('sheetQtyInput');

  if (subtotalEl) subtotalEl.textContent = formatIDR(totalSubtotal);
  if (weightEl) weightEl.textContent = `${formatWeight(totalWeightKg)}`;
  if (qtyInput) qtyInput.value = state.detailQty;
}

function renderModalDetailContent() {
  const product = state.activeDetailProduct;
  if (!product) return;

  const variant = state.activeSelectedVariant;
  const activePrice = variant ? variant.price : product.price;
  const activeOriginalPrice = variant ? variant.originalPrice : product.originalPrice;
  const activeDiscount = variant ? variant.discountPercent : product.discountPercent;
  const activeStock = variant ? variant.stock : product.stock;
  const activeUnit = variant ? variant.unit : product.unit;
  const activeSku = variant ? variant.sku : product.sku;
  const isOutOfStock = activeStock === 0;
  const isLowStock = activeStock > 0 && activeStock <= 5;

  // Stock Badge Logic
  let stockBadgeHtml = '';
  if (isOutOfStock) {
    stockBadgeHtml = `<span class="stock-badge badge-empty"><span class="status-dot"></span>Stok Habis di Cabang Ini</span>`;
  } else if (isLowStock) {
    stockBadgeHtml = `<span class="stock-badge badge-warning"><span class="status-dot"></span>Sisa ${activeStock} ${activeUnit.replace('Per ', '')} di Cabang Ini</span>`;
  } else {
    stockBadgeHtml = `<span class="stock-badge badge-success"><span class="status-dot"></span>Ready Stock (>10 ${activeUnit.replace('Per ', '')})</span>`;
  }

  // Variant Chips HTML
  let variantChipsHtml = '';
  if (product.variants && product.variants.length > 0) {
    variantChipsHtml = `
      <div class="sheet-section-block">
        <div class="sheet-section-label">PILIHAN VARIAN / KEMASAN</div>
        <div class="sheet-variant-chips">
          ${product.variants.map(v => {
      const isSelected = variant && variant.id === v.id;
      const isVarEmpty = v.stock === 0;
      return `
              <button 
                class="variant-chip ${isSelected ? 'selected' : ''} ${isVarEmpty ? 'empty' : ''}" 
                onclick="selectDetailVariant('${v.id}')"
                ${isVarEmpty ? 'title="Stok Varian Habis"' : ''}
              >
                <span>${v.name}</span>
                ${isVarEmpty ? '<span class="var-empty-label">(Habis)</span>' : ''}
              </button>
            `;
    }).join('')}
        </div>
      </div>
    `;
  }

  // Gallery Carousel Images
  const galleryImagesHtml = `
    <div class="sheet-gallery-carousel">
      <img src="${product.images[0]}" alt="${product.name}" class="sheet-hero-image" />
      <div class="sheet-gallery-badge">1/${product.images.length} Foto</div>
    </div>
  `;

  // Action Buttons State
  let actionButtonsHtml = '';
  if (isOutOfStock) {
    actionButtonsHtml = `
      <button class="btn-sheet-disabled" disabled>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        <span>Stok Habis di Cabang Ini</span>
      </button>
    `;
  } else {
    actionButtonsHtml = `
      <button class="btn-sheet-secondary" onclick="handleDetailAddToCart()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <span>+ Keranjang</span>
      </button>
      <button class="btn-sheet-primary" onclick="handleDetailBuyNow()">
        <span>Pesan Sekarang</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    `;
  }

  // Populate Bottom Sheet Drawer DOM
  const container = document.getElementById('sheetDynamicContainer');
  if (!container) return;

  const currentWeightKg = (variant ? variant.weightKg : product.weightKg || 1) * state.detailQty;

  container.innerHTML = `
    <!-- Scrollable Content Body -->
    <div class="sheet-scroll-body">
      <!-- Top Large Hero Gallery -->
      ${galleryImagesHtml}

      <div class="sheet-content-body">
        <!-- Brand & Rating Header -->
        <div class="sheet-header-meta">
          <div class="sheet-brand-badge">
            <span>${product.brandName}</span>
            ${product.isVerifiedBrand ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="#0A4D68"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' : ''}
          </div>
          <div class="sheet-rating-meta">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <strong>${product.rating}</strong>
            <span class="sheet-sold">(${product.soldCount}+ Terjual)</span>
          </div>
        </div>

        <!-- Product Title -->
        <h2 class="sheet-product-title">${product.name}</h2>
        <div class="sheet-sku-tag">SKU: ${activeSku}</div>

        <!-- Price Stack & Stock Badge -->
        <div class="sheet-price-row">
          <div class="sheet-price-group">
            ${activeDiscount > 0 ? `<div class="sheet-original-price">${formatIDR(activeOriginalPrice)} <span class="sheet-discount-pill">-${activeDiscount}%</span></div>` : ''}
            <div class="sheet-main-price">${formatIDR(activePrice)} <span class="sheet-unit-text">/${activeUnit.replace('Per ', '')}</span></div>
          </div>
          <div class="sheet-stock-wrap">
            ${stockBadgeHtml}
          </div>
        </div>

        <!-- Variant Selector -->
        ${variantChipsHtml}

        <!-- Deskripsi Produk (Story 4) -->
        <div class="sheet-section-block">
          <div class="sheet-section-label">DESKRIPSI PRODUK</div>
          <div class="sheet-description-box clamp-text" id="sheetProductDescription">
            ${product.description}
          </div>
          <button class="btn-toggle-desc" id="toggleDescBtn" onclick="toggleDescriptionExpand()">Lihat Selengkapnya</button>
        </div>
      </div>
    </div>

    <!-- Floating Bottom Dock: Qty Stepper + Subtotal + Action Buttons -->
    <div class="sheet-floating-dock">
      <!-- Floating Stepper & Info Row -->
      <div class="sheet-floating-qty-row">
        <div class="sheet-stepper-control">
          <button class="btn-stepper" onclick="changeDetailQty(-1)" ${state.detailQty <= 1 || isOutOfStock ? 'disabled' : ''}>-</button>
          <input 
            type="number" 
            id="sheetQtyInput" 
            class="sheet-stepper-input" 
            value="${state.detailQty}" 
            min="1" 
            max="${activeStock}" 
            onchange="handleManualQtyInput(event)"
            ${isOutOfStock ? 'disabled' : ''}
          />
          <button class="btn-stepper" onclick="changeDetailQty(1)" ${state.detailQty >= activeStock || isOutOfStock ? 'disabled' : ''}>+</button>
          <span class="sheet-stepper-unit">${activeUnit.replace('Per ', '')}</span>
        </div>
        
        <div class="sheet-floating-summary">
          <div class="sheet-subtotal-price" id="sheetSubtotalAmount">${formatIDR(activePrice * state.detailQty)}</div>
          <div class="sheet-weight-preview" id="sheetWeightEstimation">${formatWeight(currentWeightKg)}</div>
        </div>
      </div>

      <!-- Floating Action Buttons Row -->
      <div class="sheet-actions-group">
        ${actionButtonsHtml}
      </div>
    </div>
  `;
}

// Recalculate Cart Totals
function recalculateCartTotals() {
  state.cartCount = state.cartItems.reduce((sum, item) => sum + item.qty, 0);
  state.cartTotal = state.cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  updateCartDock();
}

// Add to Cart from Modal Bottom Sheet
function handleDetailAddToCart() {
  const product = state.activeDetailProduct;
  const variant = state.activeSelectedVariant;
  if (!product) return;

  const currentPrice = variant ? variant.price : product.price;
  const currentUnit = variant ? variant.unit : product.unit;
  const variantName = variant ? variant.name : (product.unit || 'Standar');
  const variantSku = variant ? variant.sku : product.sku;
  const weightKg = variant ? variant.weightKg : (product.weightKg || 1);
  const qty = state.detailQty;

  const existingItemIndex = state.cartItems.findIndex(
    item => item.productId === product.id && item.variantId === (variant ? variant.id : 'default')
  );

  if (existingItemIndex > -1) {
    state.cartItems[existingItemIndex].qty += qty;
  } else {
    state.cartItems.push({
      id: 'cart-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      productId: product.id,
      variantId: variant ? variant.id : 'default',
      name: product.name,
      variantName: variantName,
      sku: variantSku,
      price: currentPrice,
      qty: qty,
      unit: currentUnit,
      weightKg: weightKg,
      image: (product.images && product.images[0]) || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    });
  }

  recalculateCartTotals();
  showToast(`Berhasil menambahkan ${qty} ${currentUnit.replace('Per ', '')} ke keranjang!`);
  closeProductDetail();
}

// Buy Now from Modal Bottom Sheet
function handleDetailBuyNow() {
  handleDetailAddToCart();
  setTimeout(() => {
    openCheckout();
  }, 200);
}

// Quick Add from Product Card
function handleQuickAdd(productId) {
  const product = MOCK_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (product.variants && product.variants.length > 1) {
    openProductDetail(productId);
    return;
  }

  if (product.stockStatus === 'out_of_stock' || product.stock === 0) {
    showToast(`Maaf, stok ${product.name} sedang habis.`, 'error');
    return;
  }

  const existingItemIndex = state.cartItems.findIndex(item => item.productId === product.id);
  if (existingItemIndex > -1) {
    state.cartItems[existingItemIndex].qty += 1;
  } else {
    state.cartItems.push({
      id: 'cart-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
      productId: product.id,
      variantId: 'default',
      name: product.name,
      variantName: product.unit,
      sku: product.sku,
      price: product.price,
      qty: 1,
      unit: product.unit,
      weightKg: product.weightKg || 1,
      image: (product.images && product.images[0]) || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    });
  }

  recalculateCartTotals();
  showToast(`Berhasil menambahkan 1 ${product.unit.replace('Per ', '')} ke keranjang!`);
}

// Toast Notification
let toastTimeout;
function showToast(message, type = 'success') {
  const toast = document.getElementById('feedbackToast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.className = `toast-feedback show ${type}`;

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.className = 'toast-feedback';
  }, 3400);
}

// Update Bottom Cart Dock
function updateCartDock() {
  const dock = document.getElementById('cartDock');
  const badge = document.getElementById('cartCountBadge');
  const headerBadge = document.getElementById('headerCartBadge');
  const totalAmount = document.getElementById('cartTotalAmount');
  const totalItems = document.getElementById('cartTotalItems');

  if (headerBadge) {
    headerBadge.textContent = state.cartCount;
    headerBadge.style.display = state.cartCount > 0 ? 'flex' : 'none';
  }

  if (!dock) return;

  if (state.cartCount > 0) {
    dock.classList.add('active');
    if (badge) badge.textContent = state.cartCount;
    if (totalAmount) totalAmount.textContent = formatIDR(state.cartTotal);
    if (totalItems) totalItems.textContent = `${state.cartCount} item`;
  } else {
    dock.classList.remove('active');
  }
}

/* ==========================================================================
   CHECKOUT & FAST BOOKING LOGIC (PRD_Checkout_Booking.md)
   ========================================================================== */

function openCheckout() {
  closeProductDetail();
  const screen = document.getElementById('checkoutScreen');
  if (!screen) return;
  screen.style.display = 'flex';
  renderCheckout();
}

function closeCheckout() {
  const screen = document.getElementById('checkoutScreen');
  if (screen) screen.style.display = 'none';
}

function renderCheckout() {
  const body = document.getElementById('checkoutBody');
  const barPrice = document.getElementById('checkoutBarPrice');
  const barTonase = document.getElementById('checkoutBarTonase');
  const btnSubmit = document.getElementById('btnSubmitBooking');
  if (!body) return;

  const totalWeightKg = state.cartItems.reduce((sum, item) => sum + (item.weightKg * item.qty), 0);
  const totalWeightTon = (totalWeightKg / 1000).toFixed(2);
  const isDelivery = state.checkout.fulfillment === 'delivery';
  const isRadiusValid = !isDelivery || (state.checkout.distanceKm <= 5.0);

  if (barPrice) barPrice.textContent = formatIDR(state.cartTotal);
  if (barTonase) barTonase.textContent = `${totalWeightKg.toLocaleString('id-ID')} kg (${totalWeightTon} ton)`;

  if (btnSubmit) {
    if (state.cartItems.length === 0) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>Keranjang Kosong</span>`;
    } else if (isDelivery && !isRadiusValid) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>Jarak Melebihi 5.0 KM</span>`;
    } else {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = `
        <span>Kirim Booking</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      `;
    }
  }

  // If cart is empty
  if (state.cartItems.length === 0) {
    body.innerHTML = `
      <div class="checkout-card" style="text-align: center; padding: 36px 16px;">
        <div style="font-size: 36px; margin-bottom: 8px;">🛒</div>
        <h3 style="font-size: 15px; font-weight: 800; color: var(--color-text-primary);">Keranjang Booking Kosong</h3>
        <p style="font-size: 12px; color: var(--color-text-secondary); margin: 6px 0 16px 0;">Silakan pilih material bangunan dari katalog untuk melanjutkan pemesanan booking.</p>
        <button class="btn-sheet-primary" onclick="closeCheckout()" style="width: auto; padding: 0 24px; margin: 0 auto;">Pilih Produk Sekarang</button>
      </div>
    `;
    return;
  }

  // Items List HTML
  const itemsHtml = state.cartItems.map((item, idx) => `
    <div class="checkout-item-row">
      <img src="${item.image}" class="checkout-item-thumb" alt="${item.name}">
      <div class="checkout-item-details">
        <div class="checkout-item-name">${item.name}</div>
        <div class="checkout-item-variant">${item.variantName} • SKU: ${item.sku || '-'}</div>
        <div class="checkout-item-weight">⚖️ ${item.weightKg} kg / unit (${(item.weightKg * item.qty).toLocaleString('id-ID')} kg)</div>
        <div class="checkout-item-bottom">
          <div class="checkout-item-price">${formatIDR(item.price * item.qty)}</div>
          <div class="checkout-stepper-wrap">
            <button class="btn-remove-item" onclick="removeFromCheckout(${idx})" title="Hapus item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            <div class="checkout-stepper">
              <button onclick="changeCheckoutQty(${idx}, -1)">-</button>
              <span class="checkout-stepper-qty">${item.qty}</span>
              <button onclick="changeCheckoutQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  body.innerHTML = `
    <!-- Branch Origin Info Banner -->
    <div class="checkout-branch-banner">
      <div class="checkout-branch-icon">🏪</div>
      <div class="checkout-branch-text">
        <h4>Cabang: TB. Jakarta Maju</h4>
        <p>Jl. Danau Toba No. 12, Sawojajar • <strong>Radius Antar Maks. 5.0 KM</strong></p>
      </div>
    </div>

    <!-- Section 1: Cart Items Breakdown -->
    <div class="checkout-card">
      <div class="checkout-card-header">
        <span class="checkout-card-title">📦 Rincian Item Booking</span>
        <span class="checkout-card-badge">${state.cartCount} Item</span>
      </div>
      <div class="checkout-item-list">
        ${itemsHtml}
      </div>
      <div class="tonase-summary-box">
        <span>Estimasi Berat Muatan:</span>
        <span class="tonase-summary-val">⚖️ ${totalWeightKg.toLocaleString('id-ID')} kg (${totalWeightTon} ton)</span>
      </div>
    </div>

    <!-- Section 2: Customer Identity (Lightweight / No Password) -->
    <div class="checkout-card">
      <div class="checkout-card-header">
        <span class="checkout-card-title">👤 Informasi Pemesan (Tanpa Login)</span>
        <span class="checkout-card-badge">Cepat 1 Menit</span>
      </div>
      <div class="checkout-form-group">
        <div class="form-field">
          <label>Nama Lengkap Pemesan <span class="required">*</span></label>
          <input 
            type="text" 
            class="form-input" 
            id="inputCustName" 
            placeholder="Contoh: Bambang Sutrisno" 
            value="${state.checkout.customerName}" 
            oninput="state.checkout.customerName = this.value"
          />
        </div>
        <div class="form-field">
          <label>Nomor WhatsApp Aktif <span class="required">*</span></label>
          <div class="input-with-prefix">
            <span class="input-prefix-flag">🇮🇩 +62</span>
            <input 
              type="tel" 
              class="form-input input-phone" 
              id="inputCustPhone" 
              placeholder="812-3456-7890" 
              value="${state.checkout.customerPhone}" 
              oninput="state.checkout.customerPhone = this.value"
            />
          </div>
          <span class="form-helper">Kasir akan mengirimkan Struk PDF resmi & konfirmasi armada ke nomor ini.</span>
        </div>
      </div>
    </div>

    <!-- Section 3: Fulfillment Selection & 5.0 KM Radius Guard -->
    <div class="checkout-card">
      <div class="checkout-card-header">
        <span class="checkout-card-title">🚚 Metode Pengambilan / Pengiriman</span>
      </div>
      
      <!-- Segmented Option Cards -->
      <div class="fulfillment-grid">
        <div class="fulfillment-card-option ${!isDelivery ? 'active' : ''}" onclick="setFulfillment('pickup')">
          <div class="fulfillment-icon">🏪</div>
          <div class="fulfillment-title">Ambil Sendiri di Toko</div>
          <span class="fulfillment-badge">Bebas Ongkir</span>
        </div>
        <div class="fulfillment-card-option ${isDelivery ? 'active' : ''}" onclick="setFulfillment('delivery')">
          <div class="fulfillment-icon">🚚</div>
          <div class="fulfillment-title">Diantar Armada Toko</div>
          <span class="fulfillment-badge">Maks. 5.0 KM</span>
        </div>
      </div>

      <!-- Conditional Fulfillment Details -->
      ${!isDelivery ? `
        <!-- Pickup Details -->
        <div class="checkout-form-group">
          <div class="form-field">
            <label>Rencana Waktu Pengambilan</label>
            <select class="form-select" onchange="state.checkout.pickupTime = this.value">
              <option value="Hari ini (1-2 jam lagi)" ${state.checkout.pickupTime.includes('1-2 jam') ? 'selected' : ''}>Hari ini (1-2 jam lagi)</option>
              <option value="Hari ini (Sore)" ${state.checkout.pickupTime.includes('Sore') ? 'selected' : ''}>Hari ini (Sore, 15:00 - 17:00)</option>
              <option value="Besok Pagi" ${state.checkout.pickupTime.includes('Besok Pagi') ? 'selected' : ''}>Besok Pagi (08:00 - 11:00)</option>
              <option value="Besok Siang" ${state.checkout.pickupTime.includes('Besok Siang') ? 'selected' : ''}>Besok Siang (13:00 - 16:00)</option>
            </select>
          </div>
          <div style="font-size: 11px; color: var(--color-text-secondary); background: #F8FAFC; padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--color-border-subtle);">
            📍 <strong>Lokasi Toko:</strong> TB. Jakarta Maju, Jl. Danau Toba No. 12, Sawojajar, Malang.
          </div>
        </div>
      ` : `
        <!-- Store Delivery with Interactive Map & Radius Guard -->
        <div class="checkout-form-group">
          <!-- Map Trigger Actions -->
          <div class="map-trigger-row">
            <button type="button" class="btn-open-map" onclick="openMapPicker()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Pilih Lokasi Lewat Peta</span>
            </button>
            <button type="button" class="btn-gps-trigger" onclick="simulateGpsLocate()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polygon points="12 8 8 12 12 16 16 12 12 8"></polygon></svg>
              <span>GPS</span>
            </button>
          </div>

          <!-- Alamat Lengkap Proyek -->
          <div class="form-field">
            <label>Alamat Lengkap Proyek / Lapangan <span class="required">*</span></label>
            <textarea 
              class="form-textarea" 
              id="inputCustAddress" 
              placeholder="Nama jalan, nomor rumah/kavling, RT/RW, kelurahan, kecamatan..." 
              oninput="state.checkout.deliveryAddress = this.value"
            >${state.checkout.deliveryAddress}</textarea>
          </div>

          <!-- Patokan Akses Jalan -->
          <div class="form-field">
            <label>Patokan / Catatan Akses Jalan (Opsional)</label>
            <input 
              type="text" 
              class="form-input" 
              placeholder="Contoh: Sebelah Masjid Al-Ikhlas, jalan muat truk engkel" 
              value="${state.checkout.deliveryNotes}" 
              oninput="state.checkout.deliveryNotes = this.value"
            />
          </div>

          <!-- Delivery Radius Status Alert (Max 5.0 KM Guard) -->
          ${state.checkout.distanceKm <= 5.0 ? `
            <div class="radius-status-banner valid">
              <div class="radius-status-icon">✅</div>
              <div class="radius-status-content">
                <h5>Jarak Pengiriman: ${state.checkout.distanceKm.toFixed(1)} km (Aman)</h5>
                <p>Alamat berada di dalam radius layanan armada toko (Maksimal 5.0 KM).</p>
              </div>
            </div>
          ` : `
            <div class="radius-status-banner invalid">
              <div class="radius-status-icon">⛔</div>
              <div class="radius-status-content">
                <h5>Alamat di Luar Jangkauan Armada Toko (${state.checkout.distanceKm.toFixed(1)} km)</h5>
                <p>Pengiriman armada toko cabang ini hanya melayani radius <strong>maksimal 5.0 km</strong>. Silakan ubah titik pengiriman atau pilih opsi <strong>"Ambil Sendiri di Toko"</strong>.</p>
              </div>
            </div>
          `}
        </div>
      `}
    </div>

    <!-- Section 4: Special Order Notes -->
    <div class="checkout-card">
      <div class="checkout-card-header">
        <span class="checkout-card-title">📝 Catatan Khusus Pesanan (Opsional)</span>
      </div>
      <div class="form-field">
        <textarea 
          class="form-textarea" 
          placeholder="Contoh: Besi 12mm dipotong jadi 2 bagian @6 meter, semen ditaruh di dalam garasi..." 
          oninput="state.checkout.orderNotes = this.value"
        >${state.checkout.orderNotes}</textarea>
      </div>
    </div>

    <!-- Section 5: Payment Notice at POS Cashier -->
    <div class="payment-notice-card">
      <div class="payment-notice-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
        <span>Ketentuan Pembayaran di Kasir Toko</span>
      </div>
      <ul>
        <li>Pemesanan ini merupakan antrean booking prioritas stok di terminal kasir toko cabang.</li>
        <li>Pembayaran diselesaikan langsung saat konfirmasi di kasir toko (Tunai, QRIS, Debit/Kredit, atau Transfer Resmi PT 1000Saudara).</li>
        <li>Struk Booking PDF resmi akan otomatis dikirimkan ke WhatsApp Anda setelah nomor booking dibuat.</li>
      </ul>
    </div>
  `;
}

function changeCheckoutQty(index, delta) {
  if (!state.cartItems[index]) return;
  state.cartItems[index].qty += delta;
  if (state.cartItems[index].qty <= 0) {
    state.cartItems.splice(index, 1);
  }
  recalculateCartTotals();
  renderCheckout();
}

function removeFromCheckout(index) {
  state.cartItems.splice(index, 1);
  recalculateCartTotals();
  renderCheckout();
  showToast('Item berhasil dihapus dari keranjang.');
}

function setFulfillment(type) {
  state.checkout.fulfillment = type;
  renderCheckout();
}

/* ==========================================================================
   INTERACTIVE MAP LOCATION PICKER (PRD_Checkout_Booking.md Story 3)
   ========================================================================== */

function openMapPicker() {
  const modal = document.getElementById('mapModalOverlay');
  if (!modal) return;
  modal.style.display = 'flex';
  updateMapVisuals(state.checkout.distanceKm);
}

function closeMapPicker(e) {
  if (e && e.target && e.target.id !== 'mapModalOverlay' && !e.target.classList.contains('map-close-btn')) {
    return;
  }
  const modal = document.getElementById('mapModalOverlay');
  if (modal) modal.style.display = 'none';
}

function updateMapVisuals(dist) {
  const pin = document.getElementById('mapCustomerPin');
  const line = document.getElementById('mapDistanceLine');
  const pill = document.getElementById('mapDistancePill');
  const badge = document.getElementById('mapPinBadge');
  const sliderVal = document.getElementById('mapSliderVal');
  const statusInfo = document.getElementById('mapStatusInfo');
  const btnConfirm = document.getElementById('btnConfirmPin');

  const clampedDist = Math.min(Math.max(parseFloat(dist) || 2.4, 0.5), 9.0);
  const isValid = clampedDist <= 5.0;

  // Calculate pin position relative to store center (x: 120, y: 100)
  const angle = 0.5; // roughly 30 deg offset
  const scale = 25; // 25px per km
  const pinX = Math.round(120 + Math.cos(angle) * (clampedDist * scale));
  const pinY = Math.round(100 - Math.sin(angle) * (clampedDist * scale * 0.7));

  if (pin) {
    pin.style.left = `${pinX}px`;
    pin.style.top = `${pinY}px`;
  }
  if (line) {
    line.setAttribute('x1', '120');
    line.setAttribute('y1', '100');
    line.setAttribute('x2', String(pinX));
    line.setAttribute('y2', String(pinY));
    line.setAttribute('stroke', isValid ? '#0A4D68' : '#DC2626');
  }
  if (pill) {
    pill.innerHTML = `Jarak: <strong>${clampedDist.toFixed(1)} km</strong> ${isValid ? '(Aman)' : '(Luar Radius)'}`;
  }
  if (badge) {
    badge.textContent = `Proyek (${clampedDist.toFixed(1)} km)`;
    badge.style.background = isValid ? '#0A4D68' : '#DC2626';
  }
  if (sliderVal) {
    sliderVal.textContent = `${clampedDist.toFixed(1)} km`;
    sliderVal.style.color = isValid ? 'var(--color-primary)' : '#DC2626';
  }

  if (statusInfo) {
    if (isValid) {
      statusInfo.innerHTML = `
        <div class="radius-status-banner valid" style="margin-top: 0;">
          <div class="radius-status-icon">✅</div>
          <div class="radius-status-content">
            <h5>Jarak Terdeteksi: ${clampedDist.toFixed(1)} KM (Dalam Jangkauan)</h5>
            <p>Armada truk toko dapat melayani pengiriman ke lokasi ini.</p>
          </div>
        </div>
      `;
    } else {
      statusInfo.innerHTML = `
        <div class="radius-status-banner invalid" style="margin-top: 0;">
          <div class="radius-status-icon">⛔</div>
          <div class="radius-status-content">
            <h5>Jarak Terdeteksi: ${clampedDist.toFixed(1)} KM (Melebihi Batas 5.0 KM)</h5>
            <p>Pengiriman armada toko terbatas maksimal 5 km dari cabang Sawojajar.</p>
          </div>
        </div>
      `;
    }
  }

  if (btnConfirm) {
    btnConfirm.textContent = isValid ? `Gunakan Titik Lokasi Ini (${clampedDist.toFixed(1)} km)` : `Titik di Luar Radius (Maks. 5.0 km)`;
    btnConfirm.style.background = isValid ? 'var(--color-primary)' : '#DC2626';
  }
}

function onMapSliderChange(val) {
  state.checkout.distanceKm = parseFloat(val);
  updateMapVisuals(val);

  // Clear preset active class
  document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
}

function selectMapPreset(address, dist, pinX, pinY, btnEl) {
  state.checkout.distanceKm = dist;
  state.checkout.deliveryAddress = address;
  const slider = document.getElementById('mapDistanceRange');
  if (slider) slider.value = dist;

  document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  updateMapVisuals(dist);
}

function simulateGpsLocate() {
  showToast('Mendeteksi titik koordinat GPS perangkat...');
  setTimeout(() => {
    state.checkout.distanceKm = 1.8;
    state.checkout.deliveryAddress = 'Jl. Danau Bratan Raya No. 18, Sawojajar (Terdeteksi GPS)';
    renderCheckout();
    showToast('Lokasi terdeteksi dalam radius 1.8 km dari toko!', 'success');
  }, 400);
}

function confirmMapPinSelection() {
  const modal = document.getElementById('mapModalOverlay');
  if (modal) modal.style.display = 'none';
  renderCheckout();
  showToast(`Titik lokasi disimpan: Jarak ${state.checkout.distanceKm.toFixed(1)} km.`);
}

/* ==========================================================================
   SUBMIT BOOKING & WHATSAPP VALIDATION SIMULATOR
   ========================================================================== */

function submitBookingOrder() {
  const nameInput = document.getElementById('inputCustName');
  const phoneInput = document.getElementById('inputCustPhone');
  const name = (nameInput ? nameInput.value : state.checkout.customerName).trim();
  const phone = (phoneInput ? phoneInput.value : state.checkout.customerPhone).trim();

  if (name.length < 3) {
    showToast('Mohon masukkan Nama Lengkap pemesan (minimal 3 karakter).', 'error');
    if (nameInput) nameInput.focus();
    return;
  }

  if (phone.length < 8) {
    showToast('Mohon masukkan Nomor WhatsApp aktif yang valid.', 'error');
    if (phoneInput) phoneInput.focus();
    return;
  }

  if (state.checkout.fulfillment === 'delivery') {
    const addressInput = document.getElementById('inputCustAddress');
    const address = (addressInput ? addressInput.value : state.checkout.deliveryAddress).trim();
    if (address.length < 5) {
      showToast('Mohon lengkapi Alamat Proyek / Lapangan pengiriman.', 'error');
      if (addressInput) addressInput.focus();
      return;
    }
    if (state.checkout.distanceKm > 5.0) {
      showToast('Jarak pengiriman melebihi 5.0 km. Silakan pilih Ambil Sendiri di Toko.', 'error');
      return;
    }
  }

  const btnSubmit = document.getElementById('btnSubmitBooking');
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = `
      <span class="spinner-inline"></span>
      <span>Menghubungkan ke WhatsApp Toko...</span>
    `;
  }

  // Generate Booking & Unique Validation Codes
  setTimeout(() => {
    const now = new Date();
    const yy = String(now.getFullYear()).slice(-2);
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const randomVal = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `#BK-${yy}${mm}${dd}-${randomCode}`;
    const validationCode = `#VAL-${randomVal}`;

    const totalWeightKg = state.cartItems.reduce((sum, item) => sum + (item.weightKg * item.qty), 0);
    const totalWeightTon = (totalWeightKg / 1000).toFixed(2);

    state.lastBooking = {
      code: bookingCode,
      validationCode: validationCode,
      createdAt: now.toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      customerName: name,
      customerPhone: phone.startsWith('0') ? '62' + phone.slice(1) : (phone.startsWith('62') ? phone : '62' + phone),
      fulfillment: state.checkout.fulfillment,
      pickupTime: state.checkout.pickupTime,
      deliveryAddress: state.checkout.deliveryAddress,
      deliveryNotes: state.checkout.deliveryNotes,
      distanceKm: state.checkout.distanceKm,
      orderNotes: state.checkout.orderNotes,
      items: [...state.cartItems],
      totalAmount: state.cartTotal,
      totalWeightKg: totalWeightKg,
      totalWeightTon: totalWeightTon,
      branch: 'TB. Jakarta Maju (Sawojajar, Malang)'
    };

    // Close checkout and launch WhatsApp chat simulation
    closeCheckout();
    openWhatsAppSimulation();
  }, 600);
}

function openWhatsAppSimulation() {
  const waScreen = document.getElementById('whatsappScreen');
  const messagesList = document.getElementById('waMessagesList');
  const headerStatus = document.getElementById('waHeaderStatus');
  const quickActions = document.getElementById('waQuickActions');
  const scrollContainer = document.getElementById('waChatScroll');

  if (!waScreen || !messagesList || !state.lastBooking) return;

  const b = state.lastBooking;
  const isDelivery = b.fulfillment === 'delivery';
  const now = new Date();
  const timeStr = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

  // Reset chat list & status
  messagesList.innerHTML = '';
  if (headerStatus) {
    headerStatus.textContent = 'online';
    headerStatus.className = 'wa-status';
  }
  if (quickActions) quickActions.style.display = 'none';

  // Display WhatsApp Screen
  waScreen.style.display = 'flex';

  // Step 1: Customer Sent Message (Outbound with Unique Code & Single Checkmark)
  const custMsgId = 'cust-msg-' + Date.now();
  const custMsgHtml = `
    <div class="wa-bubble-out" id="${custMsgId}">
      <div class="wa-bubble-text">
        Halo <strong>1000Saudara</strong>, saya ingin memvalidasi booking material pesanan online saya:<br><br>
        🔑 <strong>Kode Validasi:</strong> <span class="wa-code-pill">${b.validationCode}</span><br>
        👤 <strong>Nama Pemesan:</strong> ${b.customerName}<br>
        📱 <strong>No. WhatsApp:</strong> +${b.customerPhone}<br>
        📦 <strong>Rincian Muatan:</strong> ${b.items.length} Macam Material (${b.totalWeightTon} Ton)<br><br>
        Mohon verifikasi nomor WhatsApp ini & proses pesanan saya. Terima kasih!
      </div>
      <div class="wa-bubble-meta">
        <span>${timeStr}</span>
        <svg class="wa-check-gray" id="${custMsgId}-check" width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M11.07 1.25L4.82 7.5 1.93 4.61.87 5.67 4.82 9.62 12.13 2.31z"/>
        </svg>
      </div>
    </div>
  `;

  messagesList.innerHTML = custMsgHtml;
  if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

  // Step 2: Read Receipt (Checkmark turns double blue) after 650ms
  setTimeout(() => {
    const checkEl = document.getElementById(`${custMsgId}-check`);
    if (checkEl) {
      checkEl.outerHTML = `
        <svg class="wa-check-blue" width="16" height="11" viewBox="0 0 16 11" fill="currentColor">
          <path d="M11.07 1.25L4.82 7.5 1.93 4.61.87 5.67 4.82 9.62 12.13 2.31z"/>
          <path d="M15.07 1.25L8.82 7.5 7.41 6.09 6.35 7.15 8.82 9.62 16.13 2.31z"/>
        </svg>
      `;
    }
  }, 650);

  // Step 3: Cashier Typing Indicator after 1100ms
  setTimeout(() => {
    if (headerStatus) {
      headerStatus.textContent = 'sedang mengetik...';
      headerStatus.className = 'wa-status typing';
    }

    const typingHtml = `
      <div class="wa-typing-card" id="waTypingIndicator">
        <span style="font-size: 11px; color: #64748B; font-weight: 600; margin-right: 4px;">1000Saudara</span>
        <div class="wa-typing-dot"></div>
        <div class="wa-typing-dot"></div>
        <div class="wa-typing-dot"></div>
      </div>
    `;
    messagesList.insertAdjacentHTML('beforeend', typingHtml);
    if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }, 1100);

  // Step 4: Bot Auto-Reply with Official Order Code & Clickable Receipt Link after 2400ms
  setTimeout(() => {
    const typingIndicator = document.getElementById('waTypingIndicator');
    if (typingIndicator) typingIndicator.remove();

    if (headerStatus) {
      headerStatus.textContent = 'online';
      headerStatus.className = 'wa-status';
    }

    const itemsSummary = b.items.map(i => `• ${i.qty} ${i.unit.replace('Per ', '')} ${i.name} (${i.variantName})`).join('<br>');

    const botMsgHtml = `
      <div class="wa-bubble-in">
        <div class="wa-verified-pill">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          <span>Nomor WhatsApp Tervalidasi Aktif</span>
        </div>
        <div class="wa-bubble-text">
          Halo <strong>${b.customerName}</strong>, terima kasih! Nomor WhatsApp Anda telah berhasil kami <strong>VERIFIKASI AKTIF</strong> di sistem 1000Saudara. ✅<br><br>
          Berikut detail pesanan booking material Anda:<br>
          📋 <strong>No. Order Resmi:</strong> <span class="wa-code-pill" style="background:#008069;">${b.code}</span><br>
          🏢 <strong>Cabang Toko:</strong> ${b.branch}<br>
          🚚 <strong>Metode:</strong> ${isDelivery ? `Diantar Armada Toko (${b.distanceKm.toFixed(1)} km)` : `Ambil Sendiri di Toko (${b.pickupTime})`}<br>
          💰 <strong>Total Estimasi:</strong> <strong>${formatIDR(b.totalAmount)}</strong> (${b.totalWeightTon} Ton)<br><br>
          📦 <strong>Rincian Material:</strong><br>
          ${itemsSummary}
        </div>

        <!-- Interactive Receipt Card Link -->
        <div class="wa-receipt-card" onclick="openReceiptFromWA()" role="button" tabindex="0" title="Klik untuk membuka Struk PDF Resmi">
          <div class="wa-receipt-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="wa-receipt-info">
            <div class="wa-receipt-title">📄 Struk-Booking-${b.code.replace('#', '')}.pdf</div>
            <div class="wa-receipt-sub">Klik tautan untuk melihat & mencetak struk</div>
          </div>
          <div class="wa-receipt-btn-badge">BUKA STRUK</div>
        </div>

        <div class="wa-bubble-text" style="font-size: 11px; color: #54656F; margin-top: 6px;">
          Pesanan Anda sedang diproses oleh tim gudang & kasir. Silakan klik struk di atas untuk bukti resmi.
        </div>

        <div class="wa-bubble-meta">
          <span>${timeStr}</span>
        </div>
      </div>
    `;

    messagesList.insertAdjacentHTML('beforeend', botMsgHtml);
    if (quickActions) quickActions.style.display = 'flex';
    if (scrollContainer) scrollContainer.scrollTop = scrollContainer.scrollHeight;

    // Reset local cart
    state.cartItems = [];
    recalculateCartTotals();

    showToast('✅ WhatsApp Tervalidasi Aktif & Struk Resmi Diterbitkan!', 'success');
  }, 2400);
}

function openReceiptFromWA() {
  openReceiptModal();
}

function returnToCatalogFromWA() {
  const waScreen = document.getElementById('whatsappScreen');
  if (waScreen) waScreen.style.display = 'none';

  // Ensure cart is reset
  state.cartItems = [];
  recalculateCartTotals();
  renderProducts();

  // Scroll smoothly to top
  const mobileView = document.querySelector('.mobile-view');
  if (mobileView) mobileView.scrollIntoView({ behavior: 'smooth' });

  showToast('Kembali ke Katalog Produk 1000Saudara.');
}

function copyBookingCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`Kode booking ${code} disalin ke clipboard!`);
  }).catch(() => {
    showToast(`Kode booking: ${code}`);
  });
}

function resetAndShopAgain() {
  const screen = document.getElementById('successScreen');
  if (screen) screen.style.display = 'none';
  const waScreen = document.getElementById('whatsappScreen');
  if (waScreen) waScreen.style.display = 'none';
  renderProducts();
}

/* ==========================================================================
   STRUK RECEIPT PDF MODAL (PRD_Checkout_Booking.md Story 5 & 6)
   ========================================================================== */

function openReceiptModal() {
  const modal = document.getElementById('receiptModalOverlay');
  const body = document.getElementById('receiptModalBody');
  if (!modal || !body || !state.lastBooking) return;

  const b = state.lastBooking;
  const isDelivery = b.fulfillment === 'delivery';

  const itemsRowHtml = b.items.map(item => `
    <tr>
      <td style="padding: 4px 0;">
        <div style="font-weight: 700;">${item.name}</div>
        <div style="font-size: 8.5px; color: #64748B;">${item.variantName} • SKU: ${item.sku}</div>
        <div style="font-size: 8.5px; color: #0A4D68;">${item.qty} ${item.unit.replace('Per ', '')} x ${formatIDR(item.price)} (${(item.weightKg * item.qty).toLocaleString('id-ID')} kg)</div>
      </td>
      <td style="text-align: right; font-weight: 700; vertical-align: top; padding-top: 4px;">
        ${formatIDR(item.price * item.qty)}
      </td>
    </tr>
  `).join('');

  body.innerHTML = `
    <div class="struk-paper">
      <!-- Struk Header -->
      <div class="struk-brand-header">
        <div class="struk-brand-title">1000SAUDARA INDONESIA</div>
        <div class="struk-brand-sub">TB. Jakarta Maju - Cabang Sawojajar</div>
        <div class="struk-brand-sub">Jl. Danau Toba No. 12, Malang • Telp: (0341) 712345</div>
        <div style="font-size: 9px; font-weight: 800; color: #0A4D68; margin-top: 4px;">STRUK BUKTI BOOKING MATERIAL</div>
      </div>

      <!-- Booking Metadata Grid -->
      <div class="struk-info-grid">
        <div class="struk-info-row">
          <span>NO. BOOKING:</span>
          <strong style="color: #0A4D68;">${b.code}</strong>
        </div>
        <div class="struk-info-row">
          <span>STATUS VALIDASI WA:</span>
          <span style="font-weight: 750; color: #008069;">${b.validationCode || '#VAL-OK'} (AKTIF ✅)</span>
        </div>
        <div class="struk-info-row">
          <span>TANGGAL:</span>
          <span>${b.createdAt}</span>
        </div>
        <div class="struk-info-row">
          <span>PEMESAN:</span>
          <span>${b.customerName} (+${b.customerPhone})</span>
        </div>
        <div class="struk-info-row">
          <span>METODE:</span>
          <span>${isDelivery ? `Diantar Armada Toko (${b.distanceKm.toFixed(1)} km)` : `Ambil di Toko (${b.pickupTime})`}</span>
        </div>
        ${isDelivery ? `
          <div class="struk-info-row" style="flex-direction: column; gap: 2px;">
            <span>ALAMAT PROYEK:</span>
            <span style="font-size: 9px; color: #475569;">${b.deliveryAddress}</span>
          </div>
        ` : ''}
      </div>

      <!-- Items Table -->
      <table class="struk-items-table">
        <thead>
          <tr>
            <th>ITEM MATERIAL</th>
            <th style="text-align: right;">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          ${itemsRowHtml}
        </tbody>
      </table>

      <!-- Total Breakdown -->
      <div class="struk-total-block">
        <div class="struk-total-row">
          <span>TOTAL TONASE MUATAN:</span>
          <span>${b.totalWeightKg.toLocaleString('id-ID')} KG (${b.totalWeightTon} TON)</span>
        </div>
        <div class="struk-total-row">
          <span>SUBTOTAL BARANG:</span>
          <span>${formatIDR(b.totalAmount)}</span>
        </div>
        <div class="struk-total-row">
          <span>BIAYA ANTAR ARMADA:</span>
          <span style="color: #64748B;">Dikonfirmasi Kasir</span>
        </div>
        <div class="struk-total-row grand">
          <span>ESTIMASI TOTAL:</span>
          <span>${formatIDR(b.totalAmount)}</span>
        </div>
      </div>

      <!-- Simulated Barcode -->
      <div style="margin-top: 12px; text-align: center;">
        <div style="font-family: monospace; letter-spacing: 3px; font-size: 16px; font-weight: 800; color: #1E293B;">
          ||||| ||| ||||||| |||| |||||
        </div>
        <div style="font-size: 9px; letter-spacing: 1px; color: #64748B; margin-top: 2px;">${b.code}</div>
      </div>

      <!-- Footer Notes -->
      <div class="struk-footer-notes">
        Harap tunjukkan struk booking ini kepada kasir cabang toko saat pembayaran & pengecekan fisik barang sebelum muat armada.<br>
        <strong>Terima kasih telah berbelanja di 1000Saudara!</strong>
      </div>
    </div>
  `;

  // Display and smoothly trigger active transition
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
}

function closeReceiptModal(e) {
  if (e && e.target && e.target.id !== 'receiptModalOverlay' && !e.target.classList.contains('receipt-close-btn')) {
    return;
  }
  const modal = document.getElementById('receiptModalOverlay');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      if (!modal.classList.contains('active')) {
        modal.style.display = 'none';
      }
    }, 280);
  }
}

function downloadPdfFile() {
  if (!state.lastBooking) return;
  const fileName = `Struk-Booking-${state.lastBooking.code.replace('#', '')}.pdf`;

  // Create simulated PDF download blob
  const dummyContent = `%PDF-1.4\n% Struk Booking ${state.lastBooking.code}\nPelanggan: ${state.lastBooking.customerName}\nTotal: ${formatIDR(state.lastBooking.totalAmount)}\nBerat: ${state.lastBooking.totalWeightTon} Ton`;
  const blob = new Blob([dummyContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`File ${fileName} berhasil diunduh ke perangkat Anda!`, 'success');
}

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */

function initEventListeners() {
  // Search Input with 300ms Debounce
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  let searchDebounceTimer;

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = val.length > 0 ? 'flex' : 'none';
      }
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        state.searchQuery = val;
        renderProducts();
      }, 300);
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      renderProducts();
      searchInput.focus();
    });
  }

  // Category Filter Pills
  const categoryPills = document.querySelectorAll('.category-pill');
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      renderProducts();
    });
  });

  // Brand Filter Scroller
  const brandChips = document.querySelectorAll('.brand-chip');
  brandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      if (chip.classList.contains('active')) {
        chip.classList.remove('active');
        state.activeBrand = 'all';
      } else {
        brandChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeBrand = chip.dataset.brand;
      }
      renderProducts();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Reset Search from Empty State
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      state.activeCategory = 'all';
      state.activeBrand = 'all';

      categoryPills.forEach((p, idx) => {
        if (idx === 0) p.classList.add('active');
        else p.classList.remove('active');
      });

      brandChips.forEach(c => c.classList.remove('active'));
      renderProducts();
    });
  }

  // Modal Bottom Sheet Close Listeners
  const overlay = document.getElementById('productDetailOverlay');
  const closeBtn = document.getElementById('closeDetailSheetBtn');

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeProductDetail();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeProductDetail);
  }
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
  initFlashSaleTimer();
  initEventListeners();
  renderFlashSale();
  renderProducts();
  recalculateCartTotals();
});

