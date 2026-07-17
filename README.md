# Portfolio Website

A modern, responsive, and professional portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a clean design to showcase your work experience, projects, research, and contact information.

## Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Dark Mode**: Automatic dark mode support based on system preferences
- **SEO Optimized**: Optimized for search engines with proper meta tags
- **Fast Performance**: Optimized for speed with Next.js App Router
- **Interactive Components**: Engaging user interface with hover effects and transitions
- **Contact Form**: Functional contact form for visitor inquiries
- **Easy to Customize**: Simple configuration to add your own content

## Sections

1. **Hero/Home**: Eye-catching introduction with your name and tagline
2. **About**: Showcase your skills and expertise
3. **Experience**: Display your work history and achievements
4. **Projects**: Highlight your best projects with images and links
5. **Research**: Showcase your publications and research work
6. **Contact**: Contact form and social media links
7. **Footer**: Professional footer with copyright information

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository or navigate to the project folder**:
   ```bash
   cd portfolio_website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## Customization

### Personal Information

Edit the following files to add your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Update your name, title, and description
   - Change social media links (GitHub, LinkedIn, Email, Resume)

2. **About Section** (`components/About.tsx`):
   - Add your skills and expertise
   - Update technologies you work with

3. **Experience Section** (`components/Experience.tsx`):
   - Add your work experience
   - Include job titles, companies, dates, and descriptions

4. **Projects Section** (`components/Projects.tsx`):
   - Showcase your projects
   - Add project images, descriptions, technologies, and links
   - Replace placeholder images with your own

5. **Research Section** (`components/Research.tsx`):
   - Add your publications and research papers
   - Include achievements and awards
   - Update Google Scholar link

6. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Change social media links
   - Configure contact form (see below)

7. **Metadata** (`app/layout.tsx`):
   - Update page title, description, and keywords for SEO

### Adding Your Resume

Place your resume PDF file in the `public` folder and name it `resume.pdf`, or update the link in `components/Hero.tsx`.

### Project Images

Replace the placeholder Unsplash images in `components/Projects.tsx` with your own project screenshots. You can:
- Place images in the `public` folder (e.g., `/project1.png`)
- Or continue using external URLs

### Contact Form Setup

The contact form is currently set up with a simple client-side handler. To make it functional, you have several options:

1. **Email Service (Recommended)**:
   - Use a service like [EmailJS](https://www.emailjs.com/), [SendGrid](https://sendgrid.com/), or [Resend](https://resend.com/)
   - Update the `handleSubmit` function in `components/Contact.tsx`

2. **API Route**:
   - Create an API route in `app/api/contact/route.ts`
   - Use a service like Nodemailer or SendGrid

3. **Form Services**:
   - Use services like [Formspree](https://formspree.io/) or [Form Submit](https://formsubmit.co/)

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your portfolio is with [Vercel](https://vercel.com):

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Your site will be live in minutes at `https://your-portfolio.vercel.app`

### Deploy to Netlify

1. **Push your code to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- **AWS Amplify**
- **Google Cloud Platform**
- **Digital Ocean App Platform**
- **Heroku**
- **Railway**

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

```
portfolio_website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Projects showcase
│   ├── Research.tsx        # Research & publications
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/
│   └── resume.pdf          # Your resume (add this)
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.mjs         # Next.js configuration
```

## Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Performance

This portfolio is optimized for performance:
- **Fast Loading**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component
- **SEO**: Proper meta tags and semantic HTML
- **Responsive**: Mobile-first design
- **Accessible**: ARIA labels and semantic elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with deployment, feel free to reach out:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Placeholder images from [Unsplash](https://unsplash.com/)

---

**Made with ❤️ using Next.js and Tailwind CSS**
