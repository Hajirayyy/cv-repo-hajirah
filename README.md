# Personal CV Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features dark/light mode toggle, downloadable CV, smooth scroll animations, and a working contact form.

## Project Information

**Student Name:** Hajirah  
**Roll Number:** 23L0929 
**Live Website:** https://portfolio-qgdi.vercel.app/

## Features

### Core Features
- Responsive header with profile photo and introduction
- About Me section with achievement statistics
- Education timeline showing academic background
- Skills section organized by categories
- Projects showcase with descriptions
- Contact section with form and social links
- Professional footer

### Additional Features
- **Dark/Light Mode** - Toggle between themes with automatic saving
- **Download CV** - One-click CV download button
- **Smooth Animations** - Scroll-based animations and hover effects
- **Contact Form** - Functional form with validation and feedback
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile

## Technologies Used

- **HTML5** - Structure and content
- **CSS3** - Styling and animations
  - CSS Variables for theming
  - Flexbox and Grid layouts
  - Custom animations
  - Media queries for responsiveness
- **JavaScript** - Interactive features
  - Theme switching
  - Form validation
  - Scroll animations
  - LocalStorage for preferences
- **Google Fonts** - Crimson Pro and DM Sans
- **Vercel** - Deployment and hosting

## File Structure
```
cv-repo-hajirah/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── script.js           # JavaScript functionality
├── assets/        
│   └── hajirah-resume.pdf   
│   └── image.png      
└── README.md           # Documentation
```

## How to Run Locally

1. Download or clone the repository
2. Open `index.html` in your web browser
3. That's it! No server or installation needed

## Customization

To make this portfolio your own:

1. **Update Personal Info** in `index.html`:
   - Change name, title, and bio
   - Update education history
   - Modify skills list
   - Add your projects
   - Update contact information

2. **Change Colors** in `css/style.css`:
   - Edit CSS variables in `:root` section
   - Modify accent colors and theme colors

3. **Add Your Photo**:
   - Replace the SVG placeholder with your image
   - Update the image path in HTML

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## Responsive Breakpoints

- **Desktop:** 968px and above
- **Tablet:** 768px to 968px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## Key Features Explained

### Dark/Light Mode
- Click the sun/moon icon to switch themes
- Your preference is saved automatically
- Smooth color transitions

### Download CV
- Click the "Download CV" button
- Generates a text file with your information
- Works instantly

### Animations
- Elements fade in as you scroll
- Smooth hover effects on cards and buttons
- Floating animation on profile image

### Contact Form
- Validates all required fields
- Shows success/error messages
- Email validation included
