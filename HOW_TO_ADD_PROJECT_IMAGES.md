# How to Add Your Own Project Images

This guide will help you add your own project images from your Desktop to the portfolio website.

## Quick Steps

### Step 1: Prepare Your Images

1. **Find your project images** on your Desktop
2. **Rename them** to simple names (recommended):
   - `project1.jpg` or `project1.png`
   - `project2.jpg` or `project2.png`
   - `project3.jpg` or `project3.png`
   - etc.

**Recommended image specifications:**
- **Format**: JPG or PNG
- **Dimensions**: 800x500 pixels (or similar 16:10 ratio)
- **Size**: Under 500KB for fast loading
- **Quality**: Medium to high quality

### Step 2: Move Images to the Public Folder

**Option A: Using Finder (GUI)**
1. Open Finder
2. Navigate to: `Desktop/portfolio_website/public/projects/`
3. Drag and drop your images into this folder

**Option B: Using Terminal**
```bash
# Navigate to your project
cd ~/Desktop/portfolio_website

# Copy images from Desktop
cp ~/Desktop/your-image-name.jpg public/projects/project1.jpg
cp ~/Desktop/another-image.png public/projects/project2.png
# Repeat for all images
```

**Current structure after adding images:**
```
portfolio_website/
└── public/
    └── projects/
        ├── project1.jpg
        ├── project2.png
        ├── project3.jpg
        └── ... (your other images)
```

### Step 3: Update Projects.tsx

The code has already been updated to show you how to use local images!

In `components/Projects.tsx`, each project has an `image` field:

```typescript
// OLD (external URL):
image: 'https://images.unsplash.com/photo-xxx',

// NEW (local image):
image: '/projects/project1.jpg',
```

Just change the image path from the Unsplash URL to your local image path like `/projects/your-image-name.jpg`

## Example: Complete Project Entry

```typescript
{
  title: 'Your Project Name',
  description: 'Your project description here',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/projects/my-awesome-project.png',  // ← Your local image
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project-url.com',
  featured: true,
}
```

## Image Path Examples

All images in the `public` folder can be accessed with a leading slash:

- `public/projects/donna-ai.jpg` → `image: '/projects/donna-ai.jpg'`
- `public/projects/analytics.png` → `image: '/projects/analytics.png'`
- `public/logo.svg` → `image: '/logo.svg'`

## Troubleshooting

### Image not showing?

1. **Check the file path**: Make sure the image is in `public/projects/`
2. **Check the spelling**: File names are case-sensitive
3. **Refresh the browser**: Press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. **Check the console**: Open browser DevTools (F12) and look for errors

### Image looks blurry or pixelated?

- Use higher resolution images (at least 800x500 pixels)
- Save images at higher quality settings

### Image takes too long to load?

- Compress your images using tools like:
  - [TinyPNG](https://tinypng.com/)
  - [Squoosh](https://squoosh.app/)
  - ImageOptim (Mac app)
- Target: Under 500KB per image

## Quick Reference: Copying Multiple Images

```bash
# Navigate to project folder
cd ~/Desktop/portfolio_website/public/projects

# Copy all images from Desktop at once
cp ~/Desktop/project*.{jpg,png} .

# Or copy specific images
cp ~/Desktop/donna-ai-screenshot.png ./donna-ai.png
cp ~/Desktop/analytics-dashboard.jpg ./analytics.jpg
```

## Supported Image Formats

- ✅ `.jpg` / `.jpeg`
- ✅ `.png`
- ✅ `.webp`
- ✅ `.gif`
- ✅ `.svg`

## Tips for Best Results

1. **Consistent sizing**: Use similar dimensions for all project images
2. **Good lighting**: Use bright, clear images
3. **Show the product**: Screenshots should show your project in action
4. **Crop appropriately**: Focus on the important parts of your project
5. **Professional quality**: Use high-quality images that represent your work well

---

**Need more help?** Check the main `README.md` or `CUSTOMIZATION_GUIDE.md` files!
