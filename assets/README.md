# Assets Directory

This directory contains all media files and downloadable assets for the Andrea Di Lauro portfolio website.

## Directory Structure

- **`headshots/`** - Hero headshots and thumbnails for the homepage
- **`gallery/`** - Gallery images in multiple sizes for responsive loading
- **`videos/`** - Short video clips (full showreel should be hosted externally)
- **`posters/`** - Video poster images and promotional materials
- **`resume/`** - Downloadable PDF CV files
- **`vcards/`** - Downloadable vCard contact files

## File Size Guidelines

### Images
- **Hero headshots:** 2000px max width, optimised for web
- **Gallery images:** 1200px max width for full-size versions
- **Thumbnails:** 400px width
- **Format:** Provide both JPEG and WebP versions when possible

### Videos
⚠️ **GitHub Pages Limitation:** 100MB per file, 1GB total repository size

**Recommendations:**
- Host full showreels on YouTube/Vimeo (free, better performance)
- Self-host only short clips (under 25MB, 30 seconds max)
- Use MP4 format with H.264 encoding

### Documents
- **PDF files:** Keep under 2MB for quick downloads
- **vCard files:** Small text files, no size concerns

## Image Optimisation

Before uploading images:

1. **Resize** to appropriate dimensions
2. **Compress** using tools like:
   - [TinyPNG](https://tinypng.com/) for JPEG/PNG
   - [Squoosh](https://squoosh.app/) for WebP conversion
   - Adobe Photoshop "Save for Web"

3. **Generate WebP versions** for better performance
4. **Test loading speed** after upload

## Naming Convention

Follow the established naming patterns:
- `headshot-XX-SIZE.format`
- `gallery-XX-SIZE.format`
- `production-name-XX-SIZE.format`

Where:
- `XX` = sequential number (01, 02, 03...)
- `SIZE` = image width (400, 800, 1200, large, hero, thumb)
- `format` = file extension (jpg, webp, pdf, etc.)

## Asset Management

### Adding New Assets
1. Follow naming convention
2. Create multiple sizes for images
3. Update HTML references
4. Test on different devices
5. Commit and push changes

### Removing Assets
1. Delete files from appropriate directory
2. Remove HTML references
3. Update any navigation or links
4. Test for broken links

### Replacing Assets
1. Use exact same filename to avoid breaking links
2. Clear browser cache to see changes
3. Test across different browsers

## Performance Tips

- Use WebP format with JPEG fallbacks
- Implement lazy loading (already in place)
- Compress images appropriately
- Consider external hosting for large files
- Monitor total repository size

## Backup Recommendations

Keep high-resolution originals elsewhere:
- Cloud storage (Google Drive, Dropbox)
- Professional photo storage
- Local backup drives

The repository should contain web-optimised versions only.
