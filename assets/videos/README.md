# Videos Directory

## Important: GitHub Pages File Size Limits

⚠️ **Warning:** GitHub Pages has file size limits. For video content:

- **Recommended:** Host full showreels on YouTube/Vimeo and embed
- **Self-hosted:** Only very short clips (under 25MB)
- **Alternative:** Use Git LFS for larger files

## Required Files

### Showreel (External Hosting Recommended)
- Upload full showreel to YouTube or Vimeo
- Update iframe src in `index.html` with video ID

### Short Clips (Optional Self-Hosting)
- `showreel-short.mp4` (max 30 seconds, under 25MB)
- `showreel-teaser.mp4` (max 15 seconds, under 10MB)

### Video Posters
- `showreel-poster.jpg` (1280x720, thumbnail for video player)

## Video Specifications

- **Format:** MP4 (H.264)
- **Resolution:** 1920x1080 or 1280x720
- **Bitrate:** Optimised for web streaming
- **Duration:** Keep self-hosted videos very short

## External Hosting Setup

### YouTube
1. Upload showreel to YouTube
2. Copy video ID from URL
3. Replace `VIDEO_ID` in index.html iframe

### Vimeo
1. Upload showreel to Vimeo
2. Copy video ID from URL
3. Update iframe src to Vimeo embed format

## Usage

Videos are used in:
- Showreel section (main portfolio piece)
- Social media promotion
- Casting submissions
