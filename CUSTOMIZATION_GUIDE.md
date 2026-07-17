# Quick Customization Guide

This guide will help you quickly personalize your portfolio website with your own information.

## Step-by-Step Customization

### 1. Personal Information & Hero Section

**File**: `components/Hero.tsx`

Replace these items:
```typescript
// Line 17: Your name
<span className="bg-gradient-to-r...">
  Your Name  // ← Change this
</span>

// Line 26: Your title/role
Software Developer | Researcher | Problem Solver  // ← Change this

// Line 33: Your description
Building innovative solutions and conducting cutting-edge research...  // ← Change this

// Lines 51-92: Update your social media links
href="https://github.com/yourusername"  // ← Update
href="https://linkedin.com/in/yourusername"  // ← Update
href="mailto:your.email@example.com"  // ← Update
```

### 2. About Section

**File**: `components/About.tsx`

Update:
- Line 35: Your personal description
- Lines 38-60: Your skills (4 cards with icon, title, description)
- Lines 86-92: Technologies you work with (add/remove as needed)

### 3. Work Experience

**File**: `components/Experience.tsx`

Replace the `experiences` array (lines 12-50) with your actual work history:
```typescript
{
  title: 'Your Job Title',
  company: 'Company Name',
  period: 'Start Date - End Date',
  location: 'City, State/Country',
  description: [
    'Achievement or responsibility 1',
    'Achievement or responsibility 2',
    // Add more as needed
  ],
  technologies: ['Tech1', 'Tech2', 'Tech3'],
}
```

### 4. Projects

**File**: `components/Projects.tsx`

Replace the `projects` array (lines 12-74) with your actual projects:
```typescript
{
  title: 'Project Name',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  image: 'https://your-image-url.com/image.jpg',  // Or '/project-image.png'
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project-url.com',
  featured: true,  // Set to true for featured projects
}
```

**Adding Project Images**:
- Option 1: Use external URLs (as shown above)
- Option 2: Add images to `public/` folder and use `/image-name.png`
- Update `next.config.mjs` if using external domains

### 5. Research & Publications

**File**: `components/Research.tsx`

Update two sections:

**Achievements** (lines 27-43):
```typescript
{
  icon: <Award size={24} />,
  title: 'Your Award',
  description: 'Award details',
  year: '2024',
}
```

**Publications** (lines 47-71):
```typescript
{
  title: 'Paper Title',
  authors: 'You, Co-author 1, Co-author 2',
  conference: 'Conference/Journal Name',
  year: '2024',
  description: 'Paper description',
  citations: 0,
  link: 'https://link-to-paper.com',
  tags: ['Tag1', 'Tag2'],
}
```

**Google Scholar Link** (line 178):
```typescript
href="https://scholar.google.com/citations?user=yourprofile"  // ← Update
```

### 6. Contact Information

**File**: `components/Contact.tsx`

Update `contactInfo` array (lines 32-48):
```typescript
{
  icon: <Mail size={24} />,
  title: 'Email',
  value: 'your.actual.email@example.com',  // ← Change
  link: 'mailto:your.actual.email@example.com',  // ← Change
}
```

Update `socialLinks` array (lines 50-66):
```typescript
{
  icon: <Github size={20} />,
  name: 'GitHub',
  url: 'https://github.com/yourusername',  // ← Update
}
```

### 7. Page Metadata (SEO)

**File**: `app/layout.tsx`

Update lines 5-9:
```typescript
export const metadata: Metadata = {
  title: "Portfolio | Your Actual Name",  // ← Change
  description: "Your description here",  // ← Change
  keywords: ["your", "keywords", "here"],  // ← Change
};
```

### 8. Add Your Resume

1. Place your resume PDF in the `public/` folder
2. Name it `resume.pdf` or update the link in `components/Hero.tsx` (line 86)

---

## Quick Search & Replace

Use these search terms to find all instances that need updating:

1. Search: `Your Name` - Replace with your actual name
2. Search: `yourusername` - Replace with your actual username
3. Search: `your.email@example.com` - Replace with your actual email
4. Search: `+1 (555) 123-4567` - Replace with your phone number
5. Search: `San Francisco, CA` - Replace with your location

---

## Testing Your Changes

After customization:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Visit `http://localhost:3000`

4. **Check each section**:
   - [ ] Hero section shows your name and info
   - [ ] About section has your skills
   - [ ] Experience section shows your work history
   - [ ] Projects section displays your projects
   - [ ] Research section shows your publications
   - [ ] Contact section has your contact info
   - [ ] All links work correctly

---

## Optional Customizations

### Change Color Scheme

**File**: `tailwind.config.ts`

Modify the gradient colors throughout the components. Current scheme uses:
- Blue: `blue-600`
- Purple: `purple-600`
- Pink: `pink-600`

Search for these in all component files and replace with your preferred colors.

### Remove Sections

If you don't need certain sections (e.g., Research):

1. Open `app/page.tsx`
2. Remove the import and component line
3. Delete the component file

Example:
```typescript
// Remove these lines
import Research from "@/components/Research";  // Delete
<Research />  // Delete
```

### Add More Sections

Create a new component in `components/` folder and import it in `app/page.tsx`.

---

## Need Help?

Refer to these files for detailed information:
- `README.md` - General project information
- `DEPLOYMENT.md` - Deployment instructions
- Official docs: [Next.js](https://nextjs.org/docs), [Tailwind](https://tailwindcss.com/docs)

---

**Happy Customizing! 🎨**
