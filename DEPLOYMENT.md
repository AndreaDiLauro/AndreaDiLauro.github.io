# Deployment Guide

## GitHub Pages Deployment

### Prerequisites
- GitHub account
- Repository with website files
- Basic understanding of Git

### Step-by-Step Deployment

#### 1. Repository Setup
```bash
# Clone or create repository
git clone https://github.com/[username]/AndreaDiLauro.github.io.git
cd AndreaDiLauro.github.io

# Add all files
git add .
git commit -m "Initial portfolio website"
git push origin main
```

#### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

#### 3. Wait for Deployment
- GitHub will build and deploy your site
- This usually takes 5-10 minutes
- You'll see a green checkmark when complete
- Site will be available at: `https://[username].github.io/[repository-name]`

### Alternative: Docs Folder Deployment

If you prefer to keep website files in a `docs/` folder:

1. Move all website files to `docs/` directory
2. In GitHub Pages settings, select **docs** folder instead of root
3. Keep README.md in repository root for documentation

### Custom Domain (Optional)

To use a custom domain like `andreadilauro.com`:

1. Purchase domain from registrar
2. Add `CNAME` file to repository root with your domain
3. Configure DNS settings with your registrar
4. Update GitHub Pages settings with custom domain

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] All personal information is accurate
- [ ] Contact details are current
- [ ] Credits and dates are correct
- [ ] Biography is up-to-date
- [ ] Images have proper alt text

### ✅ Technical Checks
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form is configured
- [ ] Video embeds work
- [ ] Mobile responsiveness tested

### ✅ SEO & Social
- [ ] Meta tags are complete
- [ ] Social media preview image is set
- [ ] Page titles are descriptive
- [ ] Structured data is valid

### ✅ Performance
- [ ] Images are optimised
- [ ] File sizes are reasonable
- [ ] Page loads quickly
- [ ] No console errors

## Post-Deployment

### 1. Test the Live Site
- Visit your GitHub Pages URL
- Test all functionality
- Check on mobile devices
- Verify contact form submission

### 2. Submit to Search Engines
- Google Search Console
- Bing Webmaster Tools
- Social media platform validation

### 3. Monitor Performance
- Google PageSpeed Insights
- GTmetrix or similar tools
- Mobile-Friendly Test

## Updating the Site

### Content Updates
1. Edit markdown files in `/content/`
2. Commit and push changes
3. GitHub Pages will rebuild automatically

### Image Updates
1. Replace files in `/assets/`
2. Keep same filenames to avoid broken links
3. Commit and push changes

### Code Updates
1. Edit HTML, CSS, or JavaScript files
2. Test locally first
3. Commit and push changes

## Troubleshooting

### Site Not Loading
- Check GitHub Pages status in repository settings
- Verify all files are committed and pushed
- Wait 10-15 minutes for deployment
- Clear browser cache

### Images Not Displaying
- Check file paths (case-sensitive)
- Verify images are in correct directories
- Ensure proper file formats

### Contact Form Not Working
- Verify Formspree configuration
- Check form action URL
- Test with simple message first

### Mobile Issues
- Test on actual devices, not just browser dev tools
- Check touch targets are large enough
- Verify navigation works on small screens

## Advanced Options

### GitHub Actions (Optional)
For more control over the build process:

```yaml
# .github/workflows/pages.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Custom Build Process
If you want to use a static site generator:

1. Set up build process locally
2. Configure GitHub Actions for automated builds
3. Deploy generated files to `gh-pages` branch

## Security Considerations

- Never commit sensitive information
- Use environment variables for API keys
- Keep contact information professional only
- Consider spam protection for contact forms

## Backup Strategy

- Keep source files in version control
- Backup high-resolution images separately
- Document any custom configurations
- Export analytics data regularly

---

**Need Help?**
- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Community Forum: https://github.community/
- Contact: diandrealauro@gmail.com
