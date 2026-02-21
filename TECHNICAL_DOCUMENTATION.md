# Technical Documentation: Website Source Code Breakdown by Programming Language

## Overview
This document breaks down the portfolio website source code by programming language, explaining the purpose and functionality of each component.

---

## 1. HTML (HyperText Markup Language)

### Purpose
HTML provides the structural foundation and content organization of the website.

### Files
- `index.html` - Main landing page
- `resume.html` - Resume/CV page
- Additional pages would include: `projects.html`, `contact.html`, `blog.html`

### Key HTML Elements Used

#### Document Structure
```html
<!DOCTYPE html>              <!-- Declares HTML5 document type -->
<html lang="en">             <!-- Root element with language -->
<head>                       <!-- Metadata container -->
<body>                       <!-- Visible content container -->
```

#### Semantic Elements
```html
<header>                     <!-- Site header/navigation -->
<nav>                        <!-- Navigation menu -->
<section>                    <!-- Content sections -->
<footer>                     <!-- Site footer -->
<article>                    <!-- Independent content -->
```

#### Content Elements
```html
<h1>, <h2>, <h3>            <!-- Headings (hierarchy) -->
<p>                          <!-- Paragraphs -->
<a href="">                  <!-- Links -->
<img src="" alt="">          <!-- Images -->
<ul>, <ol>, <li>             <!-- Lists -->
<div>                        <!-- Generic container -->
```

#### Forms (for contact page)
```html
<form>                       <!-- Form container -->
<input type="text">          <!-- Text input -->
<input type="email">         <!-- Email input -->
<textarea>                   <!-- Multi-line text -->
<button>                     <!-- Submit button -->
```

### HTML Best Practices Implemented
1. **Semantic Structure**: Using appropriate HTML5 semantic elements
2. **Accessibility**: ARIA labels, alt text for images
3. **SEO**: Proper heading hierarchy, meta descriptions
4. **Responsive**: Viewport meta tag for mobile devices
5. **Valid Markup**: Proper nesting and closing of tags

---

## 2. CSS (Cascading Style Sheets)

### Purpose
CSS handles all visual styling, layout, animations, and responsive design.

### Files
- `styles.css` - Main stylesheet (2,400+ lines)
- `pages.css` - Additional styles for internal pages (1,100+ lines)

### CSS Architecture

#### 1. CSS Variables (Custom Properties)
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more variables */
}
```
**Purpose**: Centralized color and value management for easy customization

#### 2. Reset and Global Styles
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
**Purpose**: Normalize browser default styles for consistency

#### 3. Layout Systems

##### Flexbox
```css
.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
**Use Cases**: Navigation bars, button groups, footer layout

##### CSS Grid
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 40px;
}
```
**Use Cases**: Project galleries, skill categories, blog posts

#### 4. Responsive Design

##### Media Queries
```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```
**Purpose**: Adapt layout and styling for different screen sizes

##### Responsive Units
- `rem` - Relative to root font size (scalable)
- `em` - Relative to parent font size
- `%` - Percentage of parent element
- `vw/vh` - Viewport width/height
- `fr` - Fractional unit in Grid

#### 5. Transitions and Animations

##### Transitions
```css
a {
    transition: all 0.3s ease;
}
```
**Purpose**: Smooth state changes (hover, focus)

##### Keyframe Animations
```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
```
**Purpose**: Complex multi-step animations

#### 6. Pseudo-classes and Pseudo-elements

```css
/* Pseudo-classes */
a:hover { color: blue; }
a:focus { outline: 2px solid blue; }
input:required { border-color: red; }

/* Pseudo-elements */
.nav-list a::after { content: ''; }
li::before { content: '▹'; }
```
**Purpose**: Style specific states and add decorative elements

### CSS Techniques Used

1. **Box Model**: Margin, padding, border management
2. **Positioning**: Relative, absolute, fixed, sticky
3. **Z-index**: Layering control (header, overlays)
4. **Overflow**: Handling content overflow
5. **Transform**: Rotate, scale, translate effects
6. **Filter**: Image effects (brightness, blur)
7. **Box-shadow**: Depth and elevation
8. **Border-radius**: Rounded corners
9. **Gradient**: Linear and radial gradients

### CSS Organization Structure
```
/* Global Styles */
- Reset
- Variables
- Typography
- Container

/* Components */
- Header/Navigation
- Hero Section
- Content Sections
- Cards
- Forms
- Footer

/* Responsive */
- Media Queries
- Mobile Overrides

/* Utilities */
- Animations
- Helper Classes
```

---

## 3. JavaScript

### Purpose
JavaScript provides interactivity, dynamic behavior, and enhanced user experience.

### File
- `script.js` - Single file with all JavaScript functionality (350+ lines)

### JavaScript Modules/Features

#### 1. Mobile Menu Toggle
```javascript
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

mobileMenuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
});
```
**Purpose**: Responsive navigation for mobile devices

#### 2. DOM Manipulation
```javascript
document.querySelector()      // Select single element
document.querySelectorAll()   // Select multiple elements
element.classList.add()       // Add CSS class
element.style.property        // Modify inline styles
element.addEventListener()    // Attach event handlers
```

#### 3. Event Handling
```javascript
// Click events
button.addEventListener('click', handleClick);

// Scroll events
window.addEventListener('scroll', handleScroll);

// Form events
form.addEventListener('submit', handleSubmit);
```

#### 4. Intersection Observer API
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
        }
    });
});
```
**Purpose**: Trigger animations when elements enter viewport

#### 5. Form Validation
```javascript
function validateForm(formId) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    
    // Validation logic
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
    }
    
    // Email pattern matching
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, 'Invalid email');
    }
}
```
**Purpose**: Client-side form validation before submission

#### 6. Smooth Scrolling
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
```

#### 7. Dynamic Active Navigation
```javascript
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
}
```

#### 8. Scroll Effects
```javascript
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Parallax effect
    hero.style.backgroundPositionY = currentScroll * 0.5 + 'px';
    
    // Dynamic header shadow
    if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    }
});
```

#### 9. Performance Optimization
```javascript
// Debounce function
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
```

#### 10. Utility Functions
```javascript
// Check viewport visibility
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Get current year
const currentYear = new Date().getFullYear();
```

### JavaScript Concepts Used

1. **ES6+ Features**
   - Arrow functions: `() => {}`
   - Template literals: `` `Hello ${name}` ``
   - Destructuring: `const {x, y} = obj`
   - Spread operator: `...args`
   - const/let (block scoping)

2. **DOM API**
   - Element selection
   - Event listeners
   - Class manipulation
   - Style modification
   - Element creation

3. **Browser APIs**
   - Intersection Observer
   - LocalStorage (for future features)
   - Fetch API (for form submission)
   - Window/Document objects

4. **Async JavaScript**
   - Event callbacks
   - Promises
   - setTimeout/setInterval

5. **Design Patterns**
   - Event delegation
   - Module pattern
   - Observer pattern (via Intersection Observer)

---

## 4. Integration: How Languages Work Together

### The Three-Layer Architecture

#### 1. HTML (Content Layer)
- Defines structure and content
- Provides hooks for CSS (classes, IDs)
- Provides targets for JavaScript (selectors)

Example:
```html
<button class="btn btn-primary" id="submitBtn">Submit</button>
```

#### 2. CSS (Presentation Layer)
- Styles HTML elements
- Creates visual hierarchy
- Handles layout and positioning

Example:
```css
.btn-primary {
    background-color: var(--secondary-color);
    padding: 15px 40px;
}
```

#### 3. JavaScript (Behavior Layer)
- Manipulates HTML and CSS
- Handles user interactions
- Provides dynamic functionality

Example:
```javascript
document.getElementById('submitBtn').addEventListener('click', () => {
    // Handle button click
});
```

### Connection Flow

```
User Action (Click, Scroll, Type)
        ↓
JavaScript Event Listener
        ↓
JavaScript Function Executes
        ↓
Modifies HTML (DOM) or CSS (Styles)
        ↓
Browser Re-renders
        ↓
User Sees Updated Interface
```

### Example: Mobile Menu
```html
<!-- HTML: Structure -->
<button class="mobile-menu-toggle">
    <span></span>
</button>
<nav class="nav">
    <ul class="nav-list">...</ul>
</nav>
```

```css
/* CSS: Hidden by default on mobile */
@media (max-width: 768px) {
    .nav-list {
        display: none;
    }
    .nav-list.active {
        display: flex;
    }
}
```

```javascript
// JavaScript: Toggle visibility
toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});
```

---

## 5. File Dependencies

### Loading Order (Critical)
```html
<head>
    <link rel="stylesheet" href="styles.css">     <!-- CSS first -->
    <link rel="stylesheet" href="pages.css">
</head>
<body>
    <!-- HTML content -->
    
    <script src="script.js"></script>            <!-- JS last -->
</body>
```

**Why this order?**
1. CSS loads first for immediate styling
2. HTML parsed progressively
3. JavaScript loads last to access all DOM elements

### External Dependencies
- Google Fonts (optional): Web typography
- Font Awesome (optional): Icon library
- CDNs (optional): Third-party libraries

---

## 6. Browser Rendering Process

1. **HTML Parsing**: Browser reads HTML, creates DOM tree
2. **CSS Parsing**: Browser reads CSS, creates CSSOM tree
3. **Render Tree**: Combines DOM + CSSOM
4. **Layout**: Calculates element positions and sizes
5. **Paint**: Draws pixels on screen
6. **JavaScript Execution**: Modifies DOM/CSSOM, triggers re-render

---

## 7. Development Workflow

### 1. Structure First (HTML)
- Create semantic markup
- Organize content hierarchy
- Add classes and IDs for styling/scripting

### 2. Style Second (CSS)
- Apply global styles
- Create layout (Flexbox/Grid)
- Add component-specific styles
- Implement responsive design
- Add transitions/animations

### 3. Enhance Last (JavaScript)
- Add interactivity
- Implement form validation
- Create dynamic effects
- Optimize performance

---

## 8. Code Quality Standards

### HTML
✓ Semantic elements
✓ Proper nesting
✓ Accessible markup
✓ Valid HTML5

### CSS
✓ Organized structure
✓ Reusable classes
✓ CSS variables
✓ Mobile-first approach
✓ Browser compatibility

### JavaScript
✓ Clear function names
✓ Comments for complex logic
✓ Error handling
✓ Performance optimization
✓ ES6+ modern syntax

---

## 9. Browser Compatibility

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks Provided
- Flexbox fallbacks for older Grid
- Web-safe font stack
- Vendor prefixes for CSS properties
- Feature detection in JavaScript

---

## 10. Performance Considerations

### HTML
- Minimize DOM depth
- Use semantic elements
- Lazy loading for images

### CSS
- Minimize specificity
- Use efficient selectors
- Avoid @import (use <link>)
- Combine media queries

### JavaScript
- Debounce scroll events
- Use event delegation
- Minimize DOM queries
- Lazy load non-critical scripts

---

## Summary

This portfolio website uses three core web technologies:

1. **HTML**: Structure and content (~500 lines per page)
2. **CSS**: Styling and layout (~3,500 lines total)
3. **JavaScript**: Interactivity and dynamics (~350 lines)

Each language has a specific role, and together they create a complete, functional, and responsive website. The code follows modern web standards and best practices for maintainability, performance, and accessibility.
