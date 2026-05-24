# 🚀 Cinematic Portfolio Website

A modern, interactive portfolio website built with React, Vite, Tailwind CSS, and advanced animations.

## ✨ Features

- **Modern UI/UX**: Dark futuristic design with glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion and GSAP
- **3D Graphics**: Interactive 3D elements using React Three Fiber
- **Responsive Design**: Fully optimized for all devices
- **Performance**: Built with Vite for lightning-fast load times
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Smooth Scrolling**: Lenis scroll library integration
- **Interactive Cursor**: Custom animated cursor
- **Loading Animation**: Premium loading screen
- **Scroll Animations**: Parallax and scroll-triggered effects

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: React Three Fiber, Drei
- **Smooth Scrolling**: Lenis
- **Icons**: React Icons, Lucide React

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/              # Images, icons, videos
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Button.jsx
│   ├── ProjectCard.jsx
│   ├── SkillCard.jsx
│   ├── SocialIcons.jsx
│   ├── CustomCursor.jsx
│   ├── Loader.jsx
│   └── SectionTitle.jsx
├── sections/            # Page sections
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── animations/          # Animation variants
│   └── variants.js
├── hooks/              # Custom React hooks
│   ├── useMousePosition.js
│   └── useScrollAnimation.js
├── utils/              # Utility functions
│   ├── data.js
│   ├── gsapHelpers.js
│   └── constants.js
├── styles/             # Global styles
│   └── globals.css
├── three/              # Three.js components
│   ├── Scene.jsx
│   ├── FloatingCube.jsx
│   ├── StarsBackground.jsx
│   └── EarthModel.jsx
├── App.jsx             # Main App component
└── main.jsx            # Entry point
```

## 🎨 Customization

### Update Personal Information
Edit `/src/utils/data.js` to add your:
- Skills
- Projects
- Experience
- Contact information
- Social media links

### Modify Colors
Edit `/tailwind.config.js` to customize:
- Color scheme
- Dark mode colors
- Neon colors
- Animations

### Change Content
Update individual section components in `/src/sections/` to match your portfolio.

## 🚀 Performance

- Optimized bundle size
- Lazy loading for images
- Code splitting with Vite
- CSS purging with Tailwind
- Smooth 60fps animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourprofile](https://github.com)
- LinkedIn: [Your Profile](https://linkedin.com)
- Email: your@email.com

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## ⭐ Show Your Support

If you find this project helpful, please give it a star! Your support means a lot.

---

Made with ❤️ using React, Three.js, and Framer Motion
