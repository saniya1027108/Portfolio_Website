# How to Add Your Profile Picture

## ✅ Code Updated!

I've already updated your Hero component to include a profile picture above your name.

---

## 📸 Step 1: Add Your Picture

You need to add your profile picture to the project:

### **Option A: Using Finder (Easiest)**

1. Find your profile picture on your computer
2. Open Finder and navigate to:
   ```
   Desktop → portfolio_website → public → images
   ```
3. **Copy your picture** into this folder
4. **Rename it to**: `profile.jpg`
   - Or `profile.png` if it's a PNG file

### **Option B: Using Terminal**

```bash
# Copy your picture from wherever it is
cp ~/Desktop/your-picture.jpg ~/Desktop/portfolio_website/public/images/profile.jpg
```

---

## 🎨 What the Profile Picture Looks Like

Your picture will appear:
- ✅ **Above your name** "Saniya Mulla"
- ✅ **Circular shape** with a nice border
- ✅ **Animated entrance** (scales up smoothly)
- ✅ **Gradient overlay** (subtle blue-purple-pink)
- ✅ **Responsive** (looks good on all screen sizes)

**Sizes:**
- Mobile: 160x160 pixels
- Tablet: 192x192 pixels  
- Desktop: 224x224 pixels

---

## 📋 Image Requirements

**Best results:**
- **Format**: JPG or PNG
- **Size**: At least 400x400 pixels (square)
- **Aspect Ratio**: 1:1 (square)
- **Quality**: High quality, well-lit photo
- **File Size**: Under 500KB (optimize if needed)

**Tips for best results:**
- Use a professional headshot
- Clear, bright, well-lit photo
- Simple background (solid color or blurred)
- Face centered in the image
- Smiling, professional expression

---

## 🔧 If Using a PNG File

If your picture is named `profile.png` instead of `profile.jpg`, you need to update one line:

**Open**: `components/Hero.tsx`

**Find** (around line 29):
```typescript
src="/images/profile.jpg"
```

**Change to**:
```typescript
src="/images/profile.png"
```

---

## 🚀 Testing Locally

After adding your picture:

1. Make sure your dev server is running: `npm run dev`
2. Go to: `http://localhost:3000`
3. You should see your picture above your name!
4. If not, refresh the page: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

## 📤 Deploying the Changes

Once you're happy with how it looks:

### **Step 1: Commit Changes**

```bash
git add .
git commit -m "Add profile picture to landing page"
git push origin main
```

### **Step 2: Vercel Auto-Deploys**

Vercel will automatically detect the changes and redeploy your site in 2-3 minutes!

Check your deployment at: https://vercel.com/dashboard

---

## ❓ Troubleshooting

### Picture not showing?

**Check these:**
1. ✅ File is named exactly `profile.jpg` (or `profile.png`)
2. ✅ File is in the correct location: `public/images/profile.jpg`
3. ✅ File name in code matches your file (jpg vs png)
4. ✅ Try hard refresh: `Cmd+Shift+R` or `Ctrl+Shift+R`

### Picture looks stretched or cropped badly?

**Solution:**
- Make sure your image is square (same width and height)
- Crop your image to 1:1 aspect ratio before uploading
- Use online tools like: https://squoosh.app or https://cropimage.online

### Picture is too large (slow loading)?

**Solution:**
- Compress your image at: https://tinypng.com or https://squoosh.app
- Target: Under 500KB file size
- Keep dimensions around 600x600 pixels (no need for huge images)

### Want to change the picture style?

The picture styling is in `components/Hero.tsx` around lines 19-30. You can adjust:
- Size: Change `w-40 h-40` values
- Border: Change `border-4` value
- Shadow: Change `shadow-2xl` value
- Shape: Keep `rounded-full` for circle

---

## 🎨 Customization Options

### Make the picture bigger:
Find this line in `Hero.tsx`:
```typescript
<div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
```

Change to:
```typescript
<div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
```

### Remove the gradient overlay:
Delete or comment out these lines:
```typescript
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
```

### Change border color:
Find:
```typescript
border-4 border-white dark:border-slate-800
```

Change to (example - blue border):
```typescript
border-4 border-blue-500 dark:border-blue-600
```

---

## ✅ Quick Checklist

- [ ] Profile picture is in `public/images/` folder
- [ ] File is named `profile.jpg` or `profile.png`
- [ ] File name in code matches actual file name
- [ ] Image is square (1:1 aspect ratio)
- [ ] Image is under 500KB
- [ ] Tested locally at `http://localhost:3000`
- [ ] Committed and pushed to GitHub
- [ ] Vercel deployed successfully
- [ ] Checked live site

---

## 🎉 That's It!

Your profile picture will now appear on your portfolio's landing page, making it more personal and professional!

**Example location structure:**
```
portfolio_website/
└── public/
    └── images/
        └── profile.jpg  ← Your picture goes here!
```
