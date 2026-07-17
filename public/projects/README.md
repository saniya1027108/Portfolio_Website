# Project Images Folder

📁 **Place your project screenshots/images here**

## Quick Start

1. **Copy your images** from your Desktop to this folder
2. **Rename them** to match the names in `components/Projects.tsx`:
   - `project1.jpg` (or `.png`)
   - `project2.jpg`
   - `project3.jpg`
   - etc.

## How to Add Images

### Using Finder (GUI)
1. Open Finder
2. Navigate to this folder: `Desktop/portfolio_website/public/projects/`
3. Drag and drop your images here

### Using Terminal
```bash
# Copy from Desktop
cp ~/Desktop/your-image.jpg ~/Desktop/portfolio_website/public/projects/project1.jpg
```

## Current Expected Images

Based on your `Projects.tsx` file, you need:
- ✅ `project1.jpg` - Donna AI
- ✅ `project2.jpg` - AI-Powered Analytics Dashboard
- ✅ `project3.jpg` - Social Media Application
- ✅ `project4.jpg` - Task Management System
- ✅ `project5.jpg` - IoT Monitoring System
- ✅ `project6.jpg` - Weather Forecasting App

## Image Specifications

- **Format**: JPG, PNG, WebP
- **Recommended size**: 800x500 pixels (16:10 ratio)
- **File size**: Under 500KB for fast loading
- **Quality**: Medium to High

## After Adding Images

The website will automatically show your images! Just:
1. Add the images to this folder
2. Refresh your browser (`http://localhost:3000`)
3. Done! Your images should appear

## Troubleshooting

**Image not showing?**
- Check the filename matches exactly (case-sensitive)
- Make sure the file is in this folder
- Try hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

**Need to use different filenames?**
- Update the `image` field in `components/Projects.tsx`
- Example: `image: '/projects/my-custom-name.png'`

---

📖 **Full guide**: See `HOW_TO_ADD_PROJECT_IMAGES.md` in the project root
