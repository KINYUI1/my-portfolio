# 🚀 Clement Kinyui Ndimuangu - Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack Software Engineer. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Mobile Navigation** - Hamburger menu for seamless mobile experience
- **Project Showcase** - Interactive project cards with live demos and GitHub links
- **Skills Display** - Visual representation of technical skills and technologies
- **Contact Form** - Integrated EmailJS for direct messaging
- **SEO Optimized** - Meta tags and Open Graph for better search engine visibility
- **Fast Performance** - Built with Vite for lightning-fast development and production builds

## 🛠️ Technologies Used

- **Frontend:** React 18, React Router DOM
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** React Icons
- **Email Service:** EmailJS
- **Notifications:** React Toastify

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KINYUI1/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📧 EmailJS Configuration

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the credentials in `src/pages/ContactMe.jsx`:
   - Service ID
   - Template ID
   - Public Key

## 📁 Project Structure

```
clement-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Headings.jsx
│   │   ├── Navbar.jsx
│   │   ├── SingleNavbar.jsx
│   │   ├── SingleProject.jsx
│   │   └── Skill.jsx
│   ├── data/
│   │   ├── experienceData.js
│   │   ├── navbarData.js
│   │   ├── projectsData.js
│   │   └── skillData.js
│   ├── images/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── ContactMe.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── HomeLayout.jsx
│   │   ├── Project.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Customization

### Update Personal Information

1. **Images:** Replace images in `src/images/`
2. **Projects:** Edit `src/data/projectsData.js`
3. **Skills:** Edit `src/data/skillData.js`
4. **Experience:** Edit `src/data/experienceData.js`
5. **Navigation:** Edit `src/data/navbarData.js`
6. **Resume:** Update resume file in `public/` folder

### Color Scheme

Modify the color palette in `tailwind.config.js` to match your personal brand.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Clement Kinyui Ndimuangu**

- LinkedIn: [Clement Kinyui Ndimuangu](https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250)
- GitHub: [@KINYUI1](https://github.com/KINYUI1)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React & Tailwind CSS
