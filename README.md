# Professional Portfolio - Kosei Hamada

A modern, responsive portfolio website inspired by Agustín Schelstraete's design aesthetic, showcasing UX design and digital marketing expertise.

## 🎨 Design Features

### Inspired by ASH Camp Portfolio
- **Minimalist aesthetic** with clean typography
- **Smooth animations** and micro-interactions
- **Monochromatic color scheme** with strategic contrast
- **Large, bold typography** for visual impact
- **Subtle parallax effects** and scroll animations
- **Professional yet approachable** tone

### Key Design Elements
- Fixed navigation with blur backdrop
- Hero section with animated title lines
- Project showcase with hover effects
- Smooth scroll animations
- Responsive grid layouts
- Modern CSS animations and transitions

## 🚀 Features

### Technical Features
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: CSS and JavaScript-powered interactions
- **Performance Optimized**: Throttled scroll events and efficient animations
- **Accessibility**: High contrast support and keyboard navigation
- **Modern CSS**: Flexbox, Grid, and CSS custom properties
- **Cross-browser Compatible**: Works on all modern browsers

### Content Sections
1. **Hero Section**: Compelling introduction with animated text
2. **Work Portfolio**: 6 project showcases (UX Design & Digital Marketing)
3. **About Section**: Personal story and skills breakdown
4. **Approach Section**: 3-step methodology explanation
5. **Contact Section**: Professional contact information and links

## 📁 File Structure

```
Professional portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript interactions
└── README.md           # This documentation
```

## 🛠️ Customization Guide

### Updating Personal Information

1. **Contact Information** (in `index.html`):
   ```html
   <a href="mailto:kosei.hamada@email.com" class="contact-link">
   <a href="https://linkedin.com/in/koseihamada" class="contact-link">
   <a href="https://dribbble.com/koseihamada" class="contact-link">
   ```

2. **Hero Title** (in `index.html`):
   ```html
   <h1 class="hero-title">
       <span class="title-line">Your Name is a [Title] &</span>
       <span class="title-line">[Specialization],</span>
       <!-- Update these lines -->
   </h1>
   ```

3. **About Section** (in `index.html`):
   - Update the personal description
   - Modify skills lists
   - Add/remove skill categories

### Updating Projects

Replace the project cards in the `.projects-grid` section:

```html
<div class="project-card" data-category="ux">
    <div class="project-image">
        <div class="project-placeholder">
            <span class="project-icon">🎨</span> <!-- Change icon -->
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-category">UX Design</p>
        <p class="project-description">Your project description...</p>
    </div>
</div>
```

### Adding Real Project Images

Replace the placeholder divs with actual images:

```html
<div class="project-image">
    <img src="path/to/your/image.jpg" alt="Project description">
</div>
```

### Color Customization

Update the color scheme in `styles.css`:

```css
:root {
    --primary-color: #1a1a1a;    /* Main text color */
    --secondary-color: #666;     /* Secondary text */
    --accent-color: #333;        /* Hover states */
    --background-color: #ffffff; /* Main background */
    --section-bg: #f8f9fa;      /* Section backgrounds */
}
```

## 🎯 Project Categories

The portfolio includes projects in two main categories:

### UX Design Projects
- E-Commerce Mobile App
- SaaS Dashboard Redesign  
- User Research Study

### Digital Marketing Projects
- Social Media Campaign
- Email Marketing Automation
- Content Marketing Strategy

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your portfolio will be live at `username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the folder to Netlify
2. Your site will be live instantly with a custom URL

### Option 3: Vercel
1. Connect your GitHub repository to Vercel
2. Deploy with one click

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify Files**: Minify CSS and JavaScript for production
3. **CDN**: Use a CDN for faster loading
4. **Lazy Loading**: Implement lazy loading for images

## 🎨 Animation Customization

### Disable Animations
Add this CSS to disable all animations:

```css
* {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
}
```

### Customize Animation Speed
Modify animation durations in `styles.css`:

```css
.title-line {
    animation: fadeInUp 0.8s ease forwards; /* Change 0.8s */
}
```

## 📞 Support

For questions or customization help, feel free to reach out!

---

**Built with ❤️ for your professional success**

