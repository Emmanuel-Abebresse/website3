# Emmanuel Abebresse Portfolio Website

A professional portfolio website for a Geomatic Engineer/GIS Analyst, recreated from the original Wix site with clean, modern code.

## Project Structure

```
portfolio-website/
│
├── index.html              # Main landing page (About Me)
├── resume.html             # Resume/CV page
├── projects.html           # Projects portfolio page
├── contact.html            # Contact form page
├── blog.html               # Blog listing page
│
├── styles.css              # Main stylesheet
├── pages.css               # Additional styles for internal pages
├── script.js               # JavaScript for interactivity
│
├── assets/                 # Images and media files
│   ├── logo.jpg            # Site logo
│   ├── profile.jpg         # Profile photo
│   ├── hero-bg.jpg         # Hero section background
│   └── icons/              # Social media icons
│       ├── facebook.png
│       ├── twitter.png
│       ├── linkedin.png
│       ├── instagram.png
│       └── github.png
│
└── README.md               # This file
```

## Technologies Used

### HTML5
- Semantic HTML structure
- Accessible markup with ARIA labels
- SEO-friendly meta tags
- Responsive viewport configuration

### CSS3
- Modern Flexbox and Grid layouts
- CSS custom properties (variables)
- Smooth transitions and animations
- Media queries for responsive design
- Mobile-first approach

### JavaScript (Vanilla JS)
- Mobile menu toggle functionality
- Smooth scrolling navigation
- Active link highlighting
- Scroll effects and parallax
- Intersection Observer for animations
- Form validation
- Lazy loading for images

## Features

### Responsive Design
- Mobile-friendly navigation with hamburger menu
- Flexible grid layouts that adapt to screen sizes
- Optimized for desktop, tablet, and mobile devices

### Interactive Elements
- Smooth page transitions
- Hover effects on buttons and cards
- Animated social media icons
- Scroll-triggered animations
- Dynamic form validation

### Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- Optimized CSS with minimal specificity
- Modular JavaScript architecture

### Accessibility
- Semantic HTML elements
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast ratios
- Focus indicators

## Setup Instructions

1. **Clone or download the project files**

2. **Organize your assets folder**
   - Place your logo image as `assets/logo.jpg`
   - Place your profile photo as `assets/profile.jpg`
   - Place your hero background as `assets/hero-bg.jpg`
   - Add social media icons in `assets/icons/`

3. **Open in a web browser**
   - Simply open `index.html` in any modern web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

4. **Customize the content**
   - Edit HTML files to update text content
   - Modify `styles.css` and `pages.css` to change colors/styles
   - Update social media links and contact information

## Customization Guide

### Colors
Edit the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main brand color */
    --secondary-color: #3498db;     /* Accent color */
    --accent-color: #e74c3c;        /* Highlight color */
    --text-dark: #333;              /* Dark text */
    --text-light: #666;             /* Light text */
}
```

### Fonts
The site uses Avenir font (web-safe fallbacks included). To change:
```css
body {
    font-family: 'Your-Font', -apple-system, sans-serif;
}
```

### Layout
- Grid configurations are in the respective page sections
- Adjust `max-width` in `.container` for different layouts
- Modify breakpoints in media queries as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Page Descriptions

### index.html (Home/About Me)
- Hero section with profile image
- Welcome message and introduction
- Call-to-action buttons
- Social media links

### resume.html
- Professional summary
- Technical skills grid
- Education timeline
- Work experience
- Certifications
- Download resume button

### projects.html (Not included in this export)
- Portfolio grid of GIS projects
- Project cards with images
- Tags and descriptions
- Links to detailed project pages

### contact.html (Not included in this export)
- Contact information display
- Contact form with validation
- Social media links
- Interactive map (optional)

### blog.html (Not included in this export)
- Blog post cards
- Featured images
- Post metadata
- Read more links

## JavaScript Functionality

### Mobile Menu
- Responsive hamburger menu
- Smooth toggle animation
- Auto-close on link click

### Scroll Effects
- Parallax hero background
- Dynamic header shadow
- Intersection Observer animations

### Form Validation
- Real-time validation
- Error message display
- Email format checking
- Success notifications

### Utilities
- Debounce function for performance
- Viewport detection
- Lazy loading implementation
- Active navigation highlighting

## Deployment

### Static Hosting
Deploy to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Cloudflare Pages

### Steps for GitHub Pages:
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `username.github.io/repository-name`

## SEO Optimization

- Use descriptive title tags on each page
- Add meta descriptions
- Include alt text for all images
- Create a sitemap.xml
- Add Open Graph tags for social sharing
- Use schema.org structured data

## Future Enhancements

- Add blog functionality with CMS
- Implement search feature
- Add project filtering/sorting
- Integrate Google Analytics
- Add dark mode toggle
- Implement Progressive Web App (PWA) features
- Add multilingual support

## Credits

**Design Recreation**: Based on the original Wix website at bebzy10.wixsite.com/abebresse

**Original Content**: Emmanuel Abebresse (Geomatic Engineer/GIS Analyst)

**Development**: Clean code recreation with modern web standards

## License

This code structure is provided as a template. Please customize and use for your own portfolio.

## Contact

For questions or support:
- Email: bebzy10@gmail.com
- Phone: +447769026796
- GitHub: [xyclops92](https://github.com/xyclops92)
- Twitter: [@MapsbyBebzy](https://twitter.com/MapsbyBebzy)
- Instagram: [@mapsbybebzy](https://instagram.com/mapsbybebzy)

---

**Note**: This is a static HTML/CSS/JS recreation. The original site was built on Wix, which uses proprietary technology. This version provides equivalent functionality with standard web technologies.
