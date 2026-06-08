// Product Data Specifications
const products = [
   {
       id: "mango",
       name: "Cream Mango",
       subName: "Pure sunshine.",
       price: "₹120",
       description: "Rich in Vitamin C - No preservatives - 100% fruit",
       folderPath: "/images/mango",
       themeColor: "#FFB74D",
       gradient: "linear-gradient(135deg, #FFB74D 0%, #FFA726 100%)",
       features: ["Rich in Vitamin C", "No preservatives", "100% fruit"],
       stats: [{ label: "Sugar", val: "0g" }, { label: "Water", val: "0%" }, { label: "Pulp", val: "100%" }],
       section1: { title: "Cream Mango.", subtitle: "Pure sunshine." },
       section2: { title: "Bursting with fresh mango.", subtitle: "Hand-picked Alphonso mangoes, perfectly ripened under the summer sun." },
       section3: { title: "Vitamin-packed refreshment.", subtitle: "A natural energy boost that revitalizes your body and mind instantly." },
       section4: { title: "Made from fruit, not concentrate.", subtitle: "" },
       detailsSection: {
           title: "The King of Fruits",
           description: "Our Cream Mango juice uses only the finest Ratnagiri Alphonso mangoes. Known for their rich sweetness and vibrant color, these mangoes are cold-pressed within hours of harvest to preserve every drop of nutrient-rich goodness. It's not just juice; it's a liquid gold experience.",
           imageAlt: "Mango Details"
       },
       freshnessSection: {
           title: "Farm to Bottle",
           description: "We believe in absolute transparency. From the orchard to the bottle, our process is designed to minimize oxidation and maximize flavor. HPP (High Pressure Processing) ensures that our juice stays safe and fresh without any heat treatment, keeping the vital enzymes and vitamins intact."
       },
       buyNowSection: {
           price: "₹120",
           unit: "per 300ml bottle",
           processingParams: ["Cold Pressed", "Never Heated", "HPP Treated"],
           deliveryPromise: "Next-day delivery available in metro cities. Chilled packaging ensures peak freshness.",
           returnPolicy: "100% Satisfaction Guarantee. Not happy? We'll replace it, no questions asked."
       }
   },
   {
       id: "chocolate",
       name: "Dutch Chocolate",
       subName: "Velvety smooth.",
       price: "₹140",
       description: "Premium Cocoa - Almond Milk base - Plant Protein",
       folderPath: "/images/chocolate",
       themeColor: "#8D6E63",
       gradient: "linear-gradient(135deg, #8D6E63 0%, #5D4037 100%)",
       features: ["Premium Cocoa", "Almond Milk", "Plant Protein"],
       stats: [{ label: "Dairy", val: "0%" }, { label: "Protein", val: "12g" }, { label: "Cocoa", val: "100%" }],
       section1: { title: "Dutch Chocolate.", subtitle: "Velvety smooth." },
       section2: { title: "Decadence redefined.", subtitle: "Rich, dark cocoa blended with creamy almond milk for a guilt-free treat." },
       section3: { title: "Plant-powered energy.", subtitle: "Loaded with natural plant protein to fuel your active lifestyle." },
       section4: { title: "Indulgence without compromise.", subtitle: "" },
       detailsSection: {
           title: "Ethically Sourced Cocoa",
           description: "We source our cocoa from sustainable farms in Ghana, ensuring fair wages and premium quality. Blended with our house-made almond milk, this drink offers a silky texture that rivals traditional dairy shakes, but with zero cholesterol and 100% plant-based goodness.",
           imageAlt: "Chocolate Details"
       },
       freshnessSection: {
           title: "Cold-Crafted Perfection",
           description: "Heat destroys delicate cocoa flavonoids. That's why we mix our Dutch Chocolate cold. Our almond milk is pressed fresh daily, never stored. The result is a clean, robust chocolate flavor that feels heavy on the tongue but light on the stomach."
       },
       buyNowSection: {
           price: "₹140",
           unit: "per 300ml bottle",
           processingParams: ["Plant Based", "Cold Blended", "Dairy Free"],
           deliveryPromise: "Shipped in insulated eco-friendly coolers. Keeps perfectly cold for 48 hours.",
           returnPolicy: "Taste the difference or get your money back."
       }
   },
   {
       id: "pomegranate",
       name: "Ruby Pomegranate",
       subName: "Antioxidant powerhouse.",
       price: "₹150",
       description: "Heart Healthy - Cold Pressed - Immunity Booster",
       folderPath: "/images/pomegranate",
       themeColor: "#E57373",
       gradient: "linear-gradient(135deg, #E57373 0%, #C62828 100%)",
       features: ["Heart Healthy", "Cold Pressed", "Immunity Booster"],
       stats: [{ label: "Additives", val: "0%" }, { label: "Vitamins", val: "A,C,K" }, { label: "Purity", val: "100%" }],
       section1: { title: "Ruby Pomegranate.", subtitle: "Nature's jewel." },
       section2: { title: "Explosion of flavor.", subtitle: "Freshly pressed pomegranate arils delivering a tart and sweet sensation." },
       section3: { title: "Heart healthy goodness.", subtitle: "Packed with powerful antioxidants to protect and rejuvenate." },
       section4: { title: "Pure juice, pure life.", subtitle: "" },
       detailsSection: {
           title: "The Ruby Elixir",
           description: "Each bottle contains the juice of over 1 kg of premium pomegranates. We use a gentle pressing method to extract the juice from the arils without crushing the bitter pith. This results in a sweet, complex flavor profile that is unmatched by commercial concentrates.",
           imageAlt: "Pomegranate Details"
       },
       freshnessSection: {
           title: "Potent Preservation",
           description: "Pomegranate juice is highly sensitive to light and air. Our bottling line is designed to shield the juice from oxidation at every step. We bottle immediately after pressing to lock in the vibrant color and the potent punicalagins—unique antioxidants found only in pomegranate."
       },
       buyNowSection: {
           price: "₹150",
           unit: "per 300ml bottle",
           processingParams: ["Cold Pressed", "Oxidation Shield", "No Additives"],
           deliveryPromise: "Direct from the pressery to your doorstep. Guaranteed fresh upon arrival.",
           returnPolicy: "Damaged in transit? Instant replacement available."
       }
   }
];

// Active State
let currentIndex = 0;

// Canvas Configuration
const canvas = document.getElementById('bottle-canvas');
const ctx = canvas.getContext('2d');
const scrollyContainer = document.getElementById('scrollytelling-container');

// Preloaded Images Cache
const images = [];
const totalFrames = 200;
let loadedImagesCount = 0;
let isLoaded = false;

// Lerping frame animations
let currentFrame = 0;
let targetFrame = 0;

// Dynamic Styles for Loading Spinner
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);

// Setup dynamic loading screen inside Canvas Wrapper
const canvasWrapper = document.querySelector('.canvas-wrapper');
const loader = document.createElement('div');
loader.id = 'canvas-loader';
loader.style.cssText = `
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    z-index: 10;
    background: #0b0c10;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
`;
loader.innerHTML = `
    <div class="spinner" style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.1); border-top-color: #f97316; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    <p style="font-weight: 600; letter-spacing: 2px; text-transform: uppercase; font-size: 0.85rem; color: #ffffff;" id="loader-text">Loading Liquid Sunshine... 0%</p>
`;
canvasWrapper.appendChild(loader);

// Helper: Hex color to RGB string
function hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 183, 77';
}

// Preloader for JPG image sequences
function preloadImages() {
    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `ezgif-686ba847064494f2-jpg/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
            loadedImagesCount++;
            const pct = Math.round((loadedImagesCount / totalFrames) * 100);
            const loaderText = document.getElementById('loader-text');
            if (loaderText) {
                loaderText.textContent = `Loading Liquid Sunshine... ${pct}%`;
            }
            if (loadedImagesCount === totalFrames) {
                isLoaded = true;
                loader.style.opacity = 0;
                setTimeout(() => loader.remove(), 500);
                drawFrame(0);
            }
        };
        img.onerror = () => {
            console.error(`Failed to load frame ${frameNum}`);
        };
        images.push(img);
    }
}

// Drawing frames in a contained layout ratio
function drawFrame(index) {
    const img = images[index];
    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        drawX = 0;
        drawY = (canvasHeight - drawHeight) / 2;
    } else {
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        drawX = (canvasWidth - drawWidth) / 2;
        drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
}

// Canvas size adjustments
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (isLoaded) {
        drawFrame(Math.round(currentFrame));
    }
}

// Text overlay fade and translation logic
function updateTextOverlays(progress) {
    const sections = [
        { el: document.getElementById('overlay-sec-1'), bounds: [0.0, 0.05, 0.16, 0.22] },
        { el: document.getElementById('overlay-sec-2'), bounds: [0.26, 0.32, 0.44, 0.50] },
        { el: document.getElementById('overlay-sec-3'), bounds: [0.54, 0.60, 0.72, 0.78] },
        { el: document.getElementById('overlay-sec-4'), bounds: [0.82, 0.88, 0.94, 0.99] }
    ];

    sections.forEach((sec) => {
        if (!sec.el) return;
        const [startIn, endIn, startOut, endOut] = sec.bounds;
        let opacity = 0;
        let y = 30;

        if (progress >= startIn && progress <= endOut) {
            if (progress < endIn) {
                const ratio = (progress - startIn) / (endIn - startIn);
                opacity = ratio;
                y = 30 * (1 - ratio);
            } else if (progress < startOut) {
                opacity = 1;
                y = 0;
            } else {
                const ratio = (progress - startOut) / (endOut - startOut);
                opacity = 1 - ratio;
                y = -30 * ratio;
            }
            sec.el.style.display = 'flex';
        } else {
            sec.el.style.display = 'none';
        }

        sec.el.style.opacity = opacity;
        sec.el.style.transform = `translateY(${y}px)`;
    });
}

// Render loop running via requestAnimationFrame
function updateCanvas() {
    if (isLoaded && scrollyContainer) {
        const containerRect = scrollyContainer.getBoundingClientRect();
        const totalScroll = scrollyContainer.scrollHeight - window.innerHeight;
        const scrollTop = -containerRect.top;
        let progress = scrollTop / totalScroll;
        progress = Math.max(0, Math.min(1, progress));

        targetFrame = Math.floor(progress * (totalFrames - 1));
        
        // Dynamic easing / smoothing scroll
        currentFrame += (targetFrame - currentFrame) * 0.15;
        const drawFrameIndex = Math.round(currentFrame);

        drawFrame(drawFrameIndex);
        updateTextOverlays(progress);
    }
    requestAnimationFrame(updateCanvas);
}

// Inject details template for the active flavor
function updateFlavorData(index) {
    currentIndex = index;
    const p = products[index];

    // Scroll back to top
    window.scrollTo(0, 0);
    currentFrame = 0;
    targetFrame = 0;

    // Transition theme colors & variables
    document.documentElement.style.setProperty('--theme-color', p.themeColor);
    document.documentElement.style.setProperty('--theme-color-rgb', hexToRgb(p.themeColor));
    document.documentElement.style.setProperty('--theme-gradient', p.gradient);

    // Dynamic color tint filter mapping
    if (p.id === 'mango') {
        canvas.style.filter = 'none';
    } else if (p.id === 'chocolate') {
        canvas.style.filter = 'hue-rotate(330deg) saturate(0.55) brightness(0.45) contrast(1.1)';
    } else if (p.id === 'pomegranate') {
        canvas.style.filter = 'hue-rotate(305deg) saturate(1.8) brightness(0.75) contrast(1.2)';
    }

    // Update Text Overlays content
    document.getElementById('sec1-title').textContent = p.section1.title;
    document.getElementById('sec1-subtitle').textContent = p.section1.subtitle;
    document.getElementById('sec2-title').textContent = p.section2.title;
    document.getElementById('sec2-subtitle').textContent = p.section2.subtitle;
    document.getElementById('sec3-title').textContent = p.section3.title;
    document.getElementById('sec3-subtitle').textContent = p.section3.subtitle;
    document.getElementById('sec4-title').textContent = p.section4.title;
    document.getElementById('sec4-subtitle').textContent = p.section4.subtitle;

    // Update Details section
    document.getElementById('details-title').textContent = p.detailsSection.title;
    document.getElementById('details-description').textContent = p.detailsSection.description;

    // Update Features badges
    const featuresContainer = document.getElementById('details-features');
    featuresContainer.innerHTML = '';
    p.features.forEach(feat => {
        const badge = document.createElement('div');
        badge.className = 'feature-badge';
        badge.textContent = feat;
        featuresContainer.appendChild(badge);
    });

    // Update Nutrition Stats grid
    const statsGrid = document.getElementById('details-stats');
    statsGrid.innerHTML = '';
    p.stats.forEach(stat => {
        const item = document.createElement('div');
        item.className = 'stat-item';
        item.innerHTML = `
            <div class="stat-val">${stat.val}</div>
            <div class="stat-lbl">${stat.label}</div>
        `;
        statsGrid.appendChild(item);
    });

    // Update Freshness section
    document.getElementById('freshness-title').textContent = p.freshnessSection.title;
    document.getElementById('freshness-description').textContent = p.freshnessSection.description;

    // Update Buy Now section
    document.getElementById('buy-product-name').textContent = p.name;
    document.getElementById('buy-product-subname').textContent = p.subName;
    document.getElementById('buy-price').textContent = p.buyNowSection.price;
    document.getElementById('buy-unit').textContent = p.buyNowSection.unit;
    document.getElementById('buy-delivery').textContent = p.buyNowSection.deliveryPromise;
    document.getElementById('buy-policy').textContent = p.buyNowSection.returnPolicy;

    // Buy Params list
    const paramsList = document.getElementById('buy-params-list');
    paramsList.innerHTML = '';
    p.buyNowSection.processingParams.forEach(param => {
        const item = document.createElement('div');
        item.className = 'buy-param-item';
        item.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${param}</span>
        `;
        paramsList.appendChild(item);
    });

    // Update bottom Next Flavor slanted CTA
    const nextIdx = (index + 1) % products.length;
    const nextProduct = products[nextIdx];
    document.getElementById('next-flavor-title').textContent = nextProduct.name;
    document.getElementById('next-flavor-bg-grad').style.background = nextProduct.gradient;

    // Update Capsule menu active states
    document.querySelectorAll('.flavor-pill').forEach((pill, idx) => {
        if (idx === index) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    // Update navbar active color transitions
    const orderBtn = document.getElementById('nav-order-btn');
    const buyCheckoutBtn = document.getElementById('buy-checkout-btn');
    if (orderBtn) {
        orderBtn.style.background = p.gradient;
        orderBtn.style.boxShadow = `0 0 20px rgba(${hexToRgb(p.themeColor)}, 0.3)`;
    }
    if (buyCheckoutBtn) {
        buyCheckoutBtn.style.background = p.gradient;
        buyCheckoutBtn.style.boxShadow = `0 0 20px rgba(${hexToRgb(p.themeColor)}, 0.3)`;
    }
}

// Build capsule pill navigation menu
function renderCapsuleMenu() {
    const menu = document.getElementById('flavor-menu');
    menu.innerHTML = '';
    products.forEach((p, idx) => {
        const btn = document.createElement('button');
        btn.className = `flavor-pill ${idx === currentIndex ? 'active' : ''}`;
        btn.textContent = p.name.split(' ')[1] || p.name; // Use Mango, Chocolate, Pomegranate
        btn.addEventListener('click', () => updateFlavorData(idx));
        menu.appendChild(btn);
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Setup event handling for next/prev arrows
document.getElementById('prev-flavor-btn').addEventListener('click', () => {
    let newIdx = currentIndex - 1;
    if (newIdx < 0) newIdx = products.length - 1;
    updateFlavorData(newIdx);
});

document.getElementById('next-flavor-btn').addEventListener('click', () => {
    let newIdx = (currentIndex + 1) % products.length;
    updateFlavorData(newIdx);
});

// Next flavor bottom slanted CTA trigger
document.getElementById('next-flavor-cta-btn').addEventListener('click', () => {
    let newIdx = (currentIndex + 1) % products.length;
    updateFlavorData(newIdx);
});

// Footer links flavor switches
document.querySelectorAll('.footer-flavor-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const index = parseInt(link.getAttribute('data-index'), 10);
        updateFlavorData(index);
    });
});

// Intersection Observer for scroll-fade reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        } else {
            entry.target.classList.remove('revealed');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

// Initialize application
window.addEventListener('resize', resizeCanvas);
preloadImages();
resizeCanvas();
renderCapsuleMenu();
updateFlavorData(0); // Load mango by default
updateCanvas();      // Start canvas frame tick loop
