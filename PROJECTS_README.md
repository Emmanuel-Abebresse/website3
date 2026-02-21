# Projects Page Documentation

## Overview
The Projects page showcases a portfolio of GIS and geospatial projects with modern design, animations, and interactive filtering.

## Design Philosophy

### Visual Identity
- **Typography**: Syne (headings) + DM Sans (body) - distinctive, professional fonts
- **Color Palette**: 
  - Teal (#06d6a0) - Primary accent
  - Purple (#6c63ff) - Secondary accent
  - Coral (#ef476f) - Tertiary accent
  - Dark Navy (#0f1419) - Background
- **Aesthetic**: Modern, tech-forward with glassmorphism and gradient effects

### Key Design Elements

1. **Animated Hero Section**
   - Floating gradient orbs with blur effects
   - Animated grid overlay
   - Dynamic statistics counter
   - Parallax scrolling effects

2. **Interactive Filter System**
   - Sticky filter bar
   - Smooth category filtering
   - Staggered card animations
   - Ripple effect on buttons

3. **Project Cards**
   - 3D tilt effect on hover
   - Image zoom and overlay transitions
   - Rotating number badges
   - Glassmorphic tags
   - Staggered fade-in animations

## File Structure

```
projects.html       - HTML structure with 6 sample projects
projects.css        - Distinctive styling with animations (700+ lines)
projects.js         - Interactive features and filtering (400+ lines)
```

## Features

### 1. Dynamic Filtering
```javascript
// Filter by category
Categories: All, GIS Analysis, Cartography, Land Survey, Remote Sensing, Web Mapping
```

### 2. Animations
- **Page Load**: Staggered card fade-in (0.1s delay per card)
- **Hover Effects**: 3D tilt, image zoom, overlay reveal
- **Filter Transitions**: Smooth fade out/in with scale
- **Scroll Effects**: Parallax orbs, intersection observer triggers

### 3. Project Card Components
Each card includes:
- Project number badge (animated rotation)
- Hero image with overlay
- Category tags (color-coded)
- Title and description
- Metadata (tools used, duration)
- Call-to-action link with animated arrow

### 4. Responsive Design
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Single column
- Sticky filter bar adjusts on scroll

## Customization Guide

### Adding New Projects

```html
<article class="project-card" data-category="gis cartography">
    <div class="project-image-wrapper">
        <div class="project-image">
            <img src="YOUR_IMAGE_URL" alt="Project Name" loading="lazy">
            <div class="image-overlay">
                <span class="view-project">View Project →</span>
            </div>
        </div>
        <div class="project-number">07</div>
    </div>
    <div class="project-content">
        <div class="project-tags">
            <span class="tag tag-gis">GIS Analysis</span>
        </div>
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">
            Your project description here...
        </p>
        <div class="project-meta">
            <div class="meta-item">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                </svg>
                <span>Tools Used</span>
            </div>
            <div class="meta-item">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                </svg>
                <span>Duration</span>
            </div>
        </div>
        <a href="project-detail.html" class="project-link">
            <span>Explore Project</span>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
</article>
```

### Available Tag Classes
```css
.tag-gis          /* Green teal for GIS */
.tag-cartography  /* Purple for Cartography */
.tag-survey       /* Coral for Land Survey */
.tag-remote       /* Yellow for Remote Sensing */
.tag-web          /* Blue for Web Mapping */
```

### Adding New Filter Categories

1. **Add filter button** in HTML:
```html
<button class="filter-btn" data-filter="your-category">Your Category</button>
```

2. **Add category** to project cards:
```html
<article class="project-card" data-category="your-category">
```

3. **Create tag style** in CSS:
```css
.tag-your-category {
    background: rgba(YOUR_COLOR, 0.1);
    color: YOUR_COLOR;
    border: 1px solid rgba(YOUR_COLOR, 0.3);
}
```

### Customizing Colors

Edit CSS variables in `projects.css`:
```css
:root {
    --accent-teal: #06d6a0;      /* Primary accent */
    --accent-coral: #ef476f;     /* Secondary accent */
    --accent-yellow: #ffd166;    /* Tertiary accent */
    --accent-purple: #6c63ff;    /* Quaternary accent */
    --dark-navy: #0f1419;        /* Background */
}
```

### Adjusting Animations

**Animation Speeds:**
```css
/* Card fade-in duration */
@keyframes cardFadeIn { /* 0.6s default */ }

/* Filter transition */
.filter-btn { transition: all 0.3s; }

/* Hover effects */
.project-card { transition: all 0.4s; }

/* Grid movement */
@keyframes gridMove { /* 20s default */ }
```

**Disable 3D Tilt Effect:**
```javascript
// Comment out this section in projects.js
/*
projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        // 3D tilt code
    });
});
*/
```

## Performance Optimizations

### Implemented Features
1. **Lazy Loading**: Images load as they enter viewport
2. **Intersection Observer**: Scroll animations trigger only when visible
3. **Debouncing**: Scroll events throttled to 100ms
4. **CSS Animations**: Hardware-accelerated transforms
5. **Staggered Loading**: Sequential card reveals prevent layout shift

### Best Practices
- Use `loading="lazy"` on all images
- Optimize images (recommended: 800x600px, <200KB)
- Use WebP format for better compression
- Minimize JavaScript execution on scroll

## Accessibility Features

### Keyboard Navigation
- All filter buttons are keyboard accessible
- Tab through project cards
- Enter/Space to activate links
- Focus indicators on all interactive elements

### Screen Reader Support
- ARIA labels on buttons
- Live regions announce filter changes
- Semantic HTML structure
- Alt text on all images

### WCAG Compliance
- AA contrast ratios on all text
- Focus visible indicators
- Meaningful link text
- Keyboard navigation support

## Browser Compatibility

### Tested Browsers
- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓

### Fallbacks Provided
- CSS Grid with flexbox fallback
- Transform with position fallback
- Backdrop-filter graceful degradation

## JavaScript Features Breakdown

### 1. Filter System (100 lines)
- Category filtering with smooth transitions
- Active state management
- Staggered reveal animations

### 2. Animations (80 lines)
- Intersection Observer for scroll triggers
- Parallax effects on hero orbs
- 3D tilt on card hover

### 3. Statistics Counter (50 lines)
- Animated number counting
- Triggers when section enters viewport
- Handles K+ notation

### 4. Lazy Loading (40 lines)
- Progressive image loading
- Blur-to-sharp transition
- Viewport-based triggers

### 5. Accessibility (30 lines)
- Keyboard navigation
- ARIA announcements
- Focus management

### 6. Utilities (100 lines)
- Debounce/throttle functions
- Resize handlers
- Performance optimizations

## Animation Timeline

```
Page Load:
0ms     → Grid overlay starts moving
100ms   → First card fades in
200ms   → Second card fades in
300ms   → Third card fades in
(pattern continues)

Filter Click:
0ms     → Old cards fade out
400ms   → Layout adjusts
450ms   → First new card fades in
500ms   → Second new card fades in

Card Hover:
0ms     → 3D tilt begins
0ms     → Image starts zoom
200ms   → Overlay fades in
300ms   → Badge rotates 360°
```

## Sample Image URLs

The page uses Unsplash placeholder images:
1. Urban Heat: `https://images.unsplash.com/photo-1524661135-423995f22d0b`
2. Infrastructure: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab`
3. Forest: `https://images.unsplash.com/photo-1446776811953-b23d57bd21aa`
4. Transit: `https://images.unsplash.com/photo-1551288049-bebda4e38f71`
5. Flood: `https://images.unsplash.com/photo-1581092918056-0c4c3acd3789`
6. Heritage: `https://images.unsplash.com/photo-1569163139394-de4798aa62b6`

Replace with your own project images (recommended size: 800x600px).

## Integration with Existing Site

### Steps to Add to Current Portfolio

1. **Copy files** to project directory:
   - `projects.html`
   - `projects.css`
   - `projects.js`

2. **Update navigation** in all pages:
   ```html
   <li><a href="projects.html" class="active">PROJECTS</a></li>
   ```

3. **Link stylesheets** in `projects.html`:
   ```html
   <link rel="stylesheet" href="styles.css">      <!-- Main styles -->
   <link rel="stylesheet" href="pages.css">       <!-- Page styles -->
   <link rel="stylesheet" href="projects.css">    <!-- Projects styles -->
   ```

4. **Link scripts**:
   ```html
   <script src="script.js"></script>              <!-- Main JS -->
   <script src="projects.js"></script>            <!-- Projects JS -->
   ```

5. **Test responsiveness** at breakpoints:
   - 1920px (Desktop)
   - 1024px (Laptop)
   - 768px (Tablet)
   - 480px (Mobile)

## Troubleshooting

### Cards not filtering?
- Check `data-category` attribute matches filter value
- Verify `data-filter` attribute on buttons
- Check browser console for JavaScript errors

### Animations not working?
- Ensure `projects.js` is loaded after DOM
- Check CSS `@keyframes` are defined
- Verify no CSS conflicts with other stylesheets

### Images not loading?
- Check image URLs are valid
- Verify `loading="lazy"` attribute is present
- Check network tab for failed requests

### Sticky filter not working?
- Verify `.filter-section` has `position: sticky`
- Check z-index values
- Ensure parent doesn't have `overflow: hidden`

## Credits

**Design Pattern**: Modern portfolio with glassmorphism
**Fonts**: Syne by Bonjour Monde, DM Sans by Colophon Foundry
**Icons**: Inline SVG (Feather Icons style)
**Images**: Unsplash (sample placeholders)

---

**Last Updated**: February 2024  
**Version**: 1.0.0  
**Compatibility**: Modern browsers (2023+)
