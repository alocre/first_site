# Kadye & Gin - The Art of Gin 🍸

A beautiful, modern single-page application for exploring the world of gin, cocktail recipes, and the botanicals that make each gin unique.

## 🌟 Features

### Navigation & Pages
- **Home Page**: Hero section with category overview
- **Budget Gins**: Affordable gin options with quality
- **Premium Gins**: Luxury selections for connoisseurs
- **Gin Mixers**: Tonic waters and perfect pairings
- **Botanicals**: Educational content about gin ingredients
- **Cocktail Recipes**: From easy to advanced difficulty levels

### Interactive Features
- ✨ Smooth page transitions and animations
- 🍸 Favorite/wishlist system (persisted to localStorage)
- 🔍 Filter functionality for gins and recipes
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessibility-focused with semantic HTML
- 🎨 Stunning gradient backgrounds and micro-interactions

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Animations, flexbox, grid layout
- **Vanilla JavaScript** - No dependencies required
- **Font Awesome** - Icon library
- **Google Fonts** - Montserrat, Raleway, Dancing Script

## 📂 File Structure

```
first_site/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete stylesheet with animations
├── scripts.js          # Navigation, filters, favorites system
├── content.html        # Optional: Placeholder for content modules
└── README.md          # This file
```

## 🚀 How to Run

1. **Clone or Download** the repository
2. **Open** `index.html` in your web browser
3. That's it! No build step or dependencies needed.

### Local Development Server (Optional)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using Live Server extension in VS Code
# Just install and click "Go Live"
```

Then navigate to `http://localhost:8000` in your browser.

## 📝 Usage

### Navigation
- Click logo to return home
- Click category cards to navigate
- Use hamburger menu on mobile devices
- Click "Explore Gins" button to jump to Budget Gins

### Filtering
- **Budget Gins**: Filter by max price
- **Recipes**: Filter by difficulty level

### Favorites
- Click the heart icon on any gin to add to favorites
- Favorites are saved to your browser's localStorage
- Persists even after page refresh

## 🎨 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #ff3366;      /* Main accent color */
    --secondary: #6633ff;    /* Secondary color */
    --accent: #33ffcc;       /* Highlight color */
    --dark: #1a1a2e;        /* Dark background */
    --light: #f0f0f5;       /* Light text */
}
```

### Add More Gins
Edit `index.html` and add new `.gin-item` divs following the same structure:
```html
<div class="gin-item">
    <button class="favorite-btn" data-gin="Gin Name" style="...">🤍</button>
    <h3 class="gin-name">Gin Name</h3>
    <div class="gin-origin">Country</div>
    <div class="gin-price">$XX.XX USD</div>
    <!-- rest of content -->
</div>
```

### Add New Recipes
Add new `.recipe-card` elements with `data-difficulty` attribute:
```html
<div class="recipe-card" data-difficulty="easy">
    <!-- recipe content -->
</div>
```

## 🔧 Features Explained

### Navigation System
- Uses `data-target` attributes to map UI elements to page sections
- `showPage()` function manages visibility and smooth scrolling
- Active state updates for visual feedback

### Favorites System
- `Favorites` class manages a localStorage-backed wishlist
- Heart emoji toggles between filled ❤️ and empty 🤍
- Data persists across browser sessions

### Filtering System
- Price filter for Budget Gins (parsing numeric values)
- Difficulty filter for Recipes (easy, medium, hard)
- Real-time display toggle with fade animation

### Responsive Design
- Mobile breakpoint at 768px (hamburger menu)
- Tablet breakpoint at 480px (single-column layout)
- Flexible grid layout with `auto-fit` and `minmax()`

## ♿ Accessibility

- Semantic HTML5 tags (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Keyboard navigation support (Escape to close mobile menu)
- Color contrast meets WCAG AA standards
- Respects `prefers-reduced-motion` media query

## 📱 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Integrate with external APIs for real-time prices
- [ ] User accounts and synced favorites
- [ ] Dark/light theme toggle
- [ ] More detailed gin tasting notes with images
- [ ] Advanced cocktail builder tool
- [ ] Review and rating system
- [ ] Events/Bar locations near you

## 📄 License

This project is open source and free to use for personal and educational purposes.

## 🙏 Credits

Built with love for gin enthusiasts everywhere. 🍸

---

**Enjoy exploring the art of gin!**
