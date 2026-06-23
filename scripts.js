// === NAVIGATION & PAGE MANAGEMENT ===
const navLinks = document.querySelectorAll('.nav-link');
const categoryCards = document.querySelectorAll('.category-card');
const pages = document.querySelectorAll('.page');
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`[data-target="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Close mobile menu
    if (navLinksContainer) {
        navLinksContainer.classList.remove('open');
    }
}

// Nav link click handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-target');
        showPage(pageId);
    });
});

// Category card click handlers
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const pageId = card.getAttribute('data-target');
        showPage(pageId);
    });
});

// Logo click to go home
logo.addEventListener('click', () => {
    showPage('home');
});

// Explore button click handler
const exploreBtn = document.getElementById('explore-btn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        showPage('budget');
    });
}

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
    });
}

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// === RECIPE CARD MOUSE TRACKING ===
document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// === ACTIVE PAGE ON LOAD ===
document.addEventListener('DOMContentLoaded', () => {
    // Show home page by default
    showPage('home');

    // Setup filters
    setupSearchFilters();

    // Add keyboard navigation (Escape to close mobile menu)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinksContainer) {
            navLinksContainer.classList.remove('open');
        }
    });
});

// === SEARCH/FILTER FUNCTIONALITY ===
function setupSearchFilters() {
    // Budget Gins Filter
    const budgetFilterBtn = document.getElementById('filter-budget-price');
    const budgetItems = document.querySelectorAll('#budget .gin-item');

    if (budgetFilterBtn) {
        budgetFilterBtn.addEventListener('change', (e) => {
            const maxPrice = parseFloat(e.target.value);
            budgetItems.forEach(item => {
                const priceText = item.querySelector('.gin-price').textContent;
                const price = parseFloat(priceText);
                if (maxPrice === 0 || price <= maxPrice) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Recipe Difficulty Filter
    const difficultyFilter = document.getElementById('filter-recipe-difficulty');
    const recipeItems = document.querySelectorAll('#recipes .recipe-card');

    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', (e) => {
            const difficulty = e.target.value;
            recipeItems.forEach(item => {
                const itemDifficulty = item.getAttribute('data-difficulty');
                if (difficulty === 'all' || itemDifficulty === difficulty) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
}

// === FAVORITES/WISHLIST SYSTEM ===
class Favorites {
    constructor() {
        this.favorites = JSON.parse(localStorage.getItem('ginFavorites')) || [];
        this.setupFavoriteButtons();
    }

    setupFavoriteButtons() {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const ginName = btn.getAttribute('data-gin');
            if (this.favorites.includes(ginName)) {
                btn.classList.add('favorited');
                btn.innerHTML = '❤️';
            }

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleFavorite(ginName, btn);
            });
        });
    }

    toggleFavorite(ginName, btn) {
        const index = this.favorites.indexOf(ginName);
        if (index > -1) {
            this.favorites.splice(index, 1);
            btn.classList.remove('favorited');
            btn.innerHTML = '🤍';
        } else {
            this.favorites.push(ginName);
            btn.classList.add('favorited');
            btn.innerHTML = '❤️';
        }
        localStorage.setItem('ginFavorites', JSON.stringify(this.favorites));
    }

    getFavorites() {
        return this.favorites;
    }
}

// Initialize favorites
const favorites = new Favorites();

// === SCROLL REVEAL ANIMATION ===
function revealOnScroll() {
    const reveals = document.querySelectorAll('.gin-item, .recipe-card, .tonic-item, .botanical-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'none';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
}

// Call on page change
const originalShowPage = showPage;
window.showPage = function(pageId) {
    originalShowPage(pageId);
    setTimeout(revealOnScroll, 100);
};

// === PERFORMANCE OPTIMIZATION: Reduce animations on reduced motion preference ===
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.querySelectorAll('[class*="animation"]').forEach(el => {
        el.style.animation = 'none';
    });
}

console.log('🍸 Kadye & Gin site loaded successfully!');
