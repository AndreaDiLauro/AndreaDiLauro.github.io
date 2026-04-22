# Andrea Di Lauro - Actor Portfolio Website

A lightweight, accessible, and responsive portfolio website for actress Andrea Di Lauro, built for GitHub Pages deployment.

## 🎭 Project Overview

This static website showcases Andrea Di Lauro's acting portfolio, featuring her credits, showreel, gallery, and contact information. The site is designed with casting directors, talent agents, and industry professionals in mind.

**Design Style:** Timeless/Cinematic mood with warm ochre and terracotta colour palette  
**Languages:** Italian (default) and English with dynamic switching  
**Built with:** HTML5, CSS3, Vanilla JavaScript (no frameworks)

## 📁 Project Structure

```
AndreaDiLauro.github.io/
├── README.md
├── index.html                    # Main website file (Italian)
├── en.html                       # English version
├── LICENSE                       # MIT License
├── .gitignore                   # Git ignore rules
├── content/                     # Markdown content files
│   ├── it/                      # Italian content
│   │   ├── about.md             # Biography and skills (Italian)
│   │   ├── credits.md           # Complete filmography (Italian)
│   │   ├── press.md             # Press quotes (Italian)
│   │   └── contact.md           # Contact information (Italian)
│   ├── en/                      # English content
│   │   ├── about.md             # Biography and skills (English)
│   │   ├── credits.md           # Complete filmography (English)
│   │   ├── press.md             # Press quotes (English)
│   │   └── contact.md           # Contact information (English)
│   └── credits.csv              # Machine-readable credits
├── css/
│   └── main.css                 # All styles (responsive, accessible)
├── js/
│   ├── main.js                  # Minimal JavaScript functionality
│   └── translations.js          # Translation data for language switching
└── assets/
    ├── headshots/               # Hero and thumbnail headshots
    ├── gallery/                 # Gallery images (multiple sizes)
    ├── videos/                  # Short video clips (external hosting recommended)
    ├── posters/                 # Video poster frames
    ├── resume/                  # Downloadable PDF CV
    └── vcards/                  # Downloadable vCard contact file
```

## 🚀 Quick Start

### Local Preview

1. **Simple HTTP Server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have it)
   npx serve
   ```

2. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Deploy to GitHub Pages

#### Option 1: Direct Branch Deployment
1. Push all files to your `main` branch
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select `main` branch and `/` (root) folder
5. Save and wait for deployment

#### Option 2: Docs Folder (Alternative)
1. Move all website files to a `docs/` folder
2. Push to your `main` branch
3. Go to repository Settings → Pages
4. Select `main` branch and `/docs` folder
5. Save and wait for deployment

Your site will be available at: 
- **Italian (default):** `https://[username].github.io/[repository-name]`
- **English version:** `https://[username].github.io/[repository-name]/en.html`

## 📝 Content Management

### Adding New Content

#### Update Biography
Edit `/content/about.md` with new information, training, or skills.

#### Add New Credits
1. Edit `/content/credits.md` (markdown table)
2. Edit `/content/credits.csv` (machine-readable format)
3. Both files should stay in sync

#### Update Press Coverage
Edit `/content/press.md` with new quotes, reviews, or recognition.

### Adding New Images

#### Headshots
1. Place files in `/assets/headshots/` following naming convention:
   - `headshot-01-hero.jpg` (2000px wide, 4:5 crop)
   - `headshot-01-hero.webp` (WebP version)
   - `headshot-01-thumb.jpg` (400px wide)

2. Update hero image reference in `index.html` if changing main headshot

#### Gallery Images
1. Create multiple sizes for responsive loading:
   - `gallery-01-400.jpg/.webp` (small screens)
   - `gallery-01-800.jpg/.webp` (medium screens)
   - `gallery-01-1200.jpg/.webp` (large screens)
   - `gallery-01-large.jpg` (full-size for lightbox)

2. Add new gallery items to the gallery section in `index.html`

#### Production Stills
Follow the same naming convention as gallery images, using descriptive names like:
- `cibele-still-01-400.jpg`
- `girls-behind-01-800.webp`

### Video Content

⚠️ **Important:** GitHub Pages has file size limitations. 

**Recommended Approach:**
1. Upload full showreel to YouTube or Vimeo
2. Copy the video ID from the URL
3. Update the iframe `src` in `index.html`:
   ```html
   <!-- Replace VIDEO_ID with your actual video ID -->
   <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID">
   ```

**Self-Hosted Option (for short clips only):**
- Maximum file size: ~25MB
- Duration: Under 30 seconds recommended
- Format: MP4 (H.264)
- Place in `/assets/videos/`

## 🛠 Customisation

## 🌐 Multilingual Support

The website supports both Italian (default) and English with seamless switching:

### Language Files
- **`index.html`** - Italian version (default)
- **`en.html`** - English version
- **`js/translations.js`** - Contains all translation data

### How Language Switching Works
1. **Language Buttons:** Top-right navigation shows IT/EN buttons
2. **Automatic Detection:** Remembers user's language preference in localStorage
3. **Page Navigation:** Switches between `index.html` (Italian) and `en.html` (English)
4. **Dynamic Content:** All text content updates dynamically using `data-translate` attributes
5. **SEO Optimization:** Updates page title, meta descriptions, and structured data

### Adding New Languages
To add another language (e.g., Spanish):

1. **Add translation data** to `js/translations.js`:
   ```javascript
   es: {
     'nav.home': 'Inicio',
     'nav.about': 'Acerca de',
     // ... more translations
   }
   ```

2. **Create Spanish version** `es.html` (copy from `en.html`)

3. **Update language switcher** in HTML:
   ```html
   <button class="lang-btn" data-lang="es" aria-label="Español">ES</button>
   ```

4. **Add navigation logic** in `js/main.js` for the new language

### Content Management
- **Italian content:** `/content/it/` directory
- **English content:** `/content/en/` directory
- **Shared assets:** All images and media are language-neutral

### Changing Colour Scheme

The site uses CSS custom properties (variables) for easy colour customisation. Edit `/css/main.css`:

```css
:root {
  /* Current: Timeless/Cinematic */
  --color-primary: #8B6F3F;      /* Warm ochre */
  --color-accent: #B85C38;       /* Deep terracotta */
  --color-bg: #FAF8F5;           /* Warm off-white */
  
  /* Alternative: Contemporary/Minimal */
  /* --color-primary: #2C5F5D;    /* Teal */
  /* --color-accent: #4A90A4;     /* Royal blue */
  /* --color-bg: #FFFFFF;         /* Pure white */
}
```

### Adding New Sections

1. Add navigation link in the nav menu
2. Create new section in `index.html` following the existing pattern
3. Add corresponding styles in `main.css`
4. Update the table of contents in this README

## 📧 Contact Form Setup

The contact form uses Formspree for form handling:

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Fallback:** If the form fails, users can still email directly or call using the provided contact details.

## ♿ Accessibility Features

- Semantic HTML5 structure
- Skip-to-main-content link
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus management for interactive elements
- Respects `prefers-reduced-motion`
- ARIA labels where appropriate
- High contrast colour ratios

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1200px and above

Features:
- Mobile-first approach
- Flexible grid layouts
- Responsive images with `srcset`
- Touch-friendly navigation
- Optimised typography scaling

## 🔧 Technical Details

### Performance Optimisations
- WebP image format support with JPEG fallbacks
- Lazy loading for images
- Minimal JavaScript bundle (~30KB)
- CSS-only animations
- Efficient CSS Grid and Flexbox layouts

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement for older browsers
- Graceful degradation of advanced features

### SEO & Social Media
- Complete meta tags for social sharing
- Open Graph protocol support
- Twitter Card support
- JSON-LD structured data
- Semantic HTML for search engines

## 🧪 Quality Assurance Checklist

Before publishing, verify:

### ✅ Responsive Design
- [ ] Header, gallery & showreel scale correctly
- [ ] Test at 320px (mobile), 768px (tablet), 1366px (desktop)
- [ ] Navigation works on all screen sizes
- [ ] Text remains readable at all sizes

### ✅ Performance
- [ ] Lighthouse Performance ≥ 80
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Images load quickly and display correctly

### ✅ Content & Accessibility
- [ ] All images have meaningful alt text
- [ ] Gallery captions are descriptive
- [ ] Contact form submits successfully
- [ ] Mailto and tel links work correctly
- [ ] Skip link functions properly

### ✅ SEO & Social
- [ ] Meta tags present and accurate
- [ ] JSON-LD structured data validates
- [ ] Social preview image displays correctly
- [ ] Page title and description are compelling

### ✅ Downloads & Links
- [ ] CV PDF downloads successfully
- [ ] vCard downloads successfully
- [ ] All internal links work (return 200 status)
- [ ] External links open in new tabs where appropriate

### ✅ Cross-Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Edge (desktop)

## 📈 Maintenance

### Regular Updates
- **Monthly:** Check for broken links
- **Quarterly:** Update credits and press coverage
- **Bi-annually:** Refresh headshots and gallery images
- **Annually:** Review and update biography

### Performance Monitoring
- Use Google PageSpeed Insights regularly
- Monitor Core Web Vitals
- Check mobile usability in Google Search Console

### Content Updates
- Keep `/content/` markdown files current
- Sync credits between `.md` and `.csv` files
- Update contact information as needed
- Replace placeholder press quotes with real coverage

## 🆘 Troubleshooting

### Images Not Loading
- Check file paths are correct (case-sensitive)
- Ensure images are properly optimised
- Verify WebP format support and JPEG fallbacks

### Contact Form Not Working
- Verify Formspree form ID is correct
- Check network connectivity
- Ensure form fields have correct `name` attributes

### Site Not Updating on GitHub Pages
- Check GitHub Actions/Pages deployment status
- Verify all files are committed and pushed
- Wait 5-10 minutes for deployment to complete
- Clear browser cache

### Mobile Navigation Issues
- Ensure JavaScript is enabled
- Check for console errors
- Verify touch targets are large enough (44px minimum)

## 📞 Support

For technical issues or questions about this website:

**Website Developer:** [Contact information to be added]  
**Content Owner:** Andrea Di Lauro  
**Email:** diandrealauro@gmail.com  
**Phone:** +39 347 748 8981

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** This license covers the website code and structure. Images, videos, and personal content remain the property of Andrea Di Lauro.

---

**Last Updated:** December 2024  
**Version:** 1.0.0  
**Built with:** ❤️ for the performing arts

---

*This website is built with accessibility, performance, and user experience as top priorities. It follows web standards and best practices for professional portfolio sites.*
