# 🎨 Birthday Website - Complete Customization Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Editing Text & Messages](#editing-text--messages)
3. [Adding Photos](#adding-photos)
4. [Customizing Features](#customizing-features)
5. [Design Customization](#design-customization)
6. [Advanced Features](#advanced-features)
7. [Deployment](#deployment)

---

## 🚀 Quick Start

### What Makes This Special?

This isn't just a birthday website - it's an **award-winning, immersive experience** featuring:

✨ **3D Interactive Elements**
- Rotating particle field in the background
- 3D cards that tilt based on mouse movement
- Depth and parallax effects throughout

🎭 **Kinetic Typography**
- Letters fly in and animate individually
- Hover over letters for interactive effects
- Smooth, spring-based animations

🎨 **Advanced Visual Effects**
- Glassmorphism with real-time blur
- Cursor trail particles
- Time-based theme (changes based on time of day)
- Floating emoji particles
- Shimmer and glow effects

🖼️ **Immersive Photo Gallery**
- 3D hover effects on photos
- Full-screen lightbox with ambient glow
- Smooth transitions and animations

---

## ✏️ Editing Text & Messages

### Location: `src/data/birthdayData.ts`

```typescript
export const birthdayData = {
  // Main title - animated letter by letter
  title: "Happy Birthday Mom!",
  
  // Appears below the title
  subtitle: "To the most amazing woman in the world",
  
  // Short wishes - each gets its own 3D card
  short_wishes: [
    "You are my strength",
    "My guiding light",
    // Add or remove wishes as needed
  ],
  
  // Long letter - separate paragraphs with \n\n
  long_message: `Dear Mom,

First paragraph here.

Second paragraph here.

Love, [Your Name]`,
  
  // ... more settings below
}
```

### Tips for Messages:

**Title:**
- Keep it short and impactful (under 25 characters works best)
- Will animate letter-by-letter on load
- Each letter can be hovered for effects

**Short Wishes:**
- Ideal length: 3-7 words
- Add 3-9 wishes (looks best in grid layout)
- Each appears in an interactive 3D card

**Long Message:**
- Write naturally with paragraphs
- Separate paragraphs with double line breaks (`\n\n`)
- Each paragraph animates in separately
- First letter of first paragraph gets special styling

---

## 📸 Adding Photos

### Step 1: Prepare Your Photos

**Recommended:**
- Format: JPG or PNG
- Size: At least 800x800px (square works best)
- Quality: High resolution for best results

### Step 2: Add Photos to Project

1. Place photos in: `public/pics/` folder
2. Name them clearly: `mom_birthday_2023.jpg`, `family_vacation.jpg`, etc.

### Step 3: Update the Gallery List

In `src/data/birthdayData.ts`:

```typescript
gallery_images: [
  "mom_birthday_2023.jpg",
  "family_vacation.jpg",
  "christmas_2022.png",
  // Add as many as you want!
]
```

### Gallery Features:

- ✨ 3D tilt effect on hover
- 🔍 Click any photo for full-screen view
- 🖼️ Lightbox with ambient glow
- 📱 Fully responsive
- 🎨 Glass reflection effects

---

## 🎛️ Customizing Features

### Enable/Disable Effects

In `src/data/birthdayData.ts`:

```typescript
settings: {
  // Sparkly cursor trail as you move the mouse
  enableCursorTrail: true,
  
  // 3D rotating particle sphere in background
  enable3DParticles: true,
  
  // Auto-switch theme based on time of day
  enableTimeBasedTheme: true,
  
  // Animation speed: 'slow', 'normal', 'fast'
  animationSpeed: 'normal',
  
  // Override auto theme: 'day', 'evening', 'night'
  // Leave blank for auto
  preferredTheme: undefined,
}
```

### Time-Based Theming

**How It Works:**
- **Morning (5am-12pm):** Soft, warm pastels
- **Day (12pm-5pm):** Bright, vibrant colors
- **Evening (5pm-9pm):** Richer, deeper tones
- **Night (9pm-5am):** Dark theme with glowing accents

---

## 🎨 Design Customization

### Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  /* Main colors - adjust these HSL values */
  --rose: 340 82% 67%;      /* Main pink/rose color */
  --lavender: 280 65% 85%;  /* Purple/lavender accent */
  --peach: 25 95% 80%;      /* Warm peach tone */
  --mint: 160 60% 85%;      /* Cool mint accent */
  --cream: 40 40% 95%;      /* Soft cream background */
}
```

**Changing Colors:**
1. Use an [HSL color picker](https://hslpicker.com/)
2. Copy the H, S, L values
3. Replace the numbers above
4. Refresh to see changes!

### Fonts

Current fonts:
- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter (clean sans-serif)

**To Change:**

1. Go to [Google Fonts](https://fonts.google.com/)
2. Choose your fonts
3. Copy the `<link>` code
4. Paste in `index.html` `<head>` section
5. Update `src/index.css`:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Your Heading Font', serif;
}

body {
  font-family: 'Your Body Font', sans-serif;
}
```

---

## 🔥 Advanced Features

### 1. Kinetic Typography

Letters animate individually with physics-based motion. Hover any letter for fun effects!

**Customize in:** `src/components/KineticTitle.tsx`

### 2. 3D Interactive Cards

Cards tilt based on mouse position using real-time 3D transforms.

**Customize in:** `src/components/ThreeDCard.tsx`

### 3. Particle Field

3D rotating sphere with 2000+ particles in the background.

**Customize in:** `src/components/ParticleField.tsx`

### 4. Cursor Trail

Sparkly particles follow your cursor with physics.

**Customize in:** `src/components/CursorTrail.tsx`

### 5. Photo Gallery Lightbox

Click photos for immersive full-screen view with glow effects.

**Customize in:** `src/components/InteractiveGallery.tsx`

---

## 🚀 Deployment

### Deploy to GitHub Pages

#### Method 1: Using Lovable (Recommended)

1. Click the "Share" button in Lovable
2. Click "Publish"
3. Your site is live! 🎉

#### Method 2: Manual GitHub Pages

1. **Update vite.config.ts:**

```typescript
export default defineConfig({
  base: '/your-repo-name/',  // Add this line
  // ... rest of config
})
```

2. **Build the project:**

```bash
npm run build
```

3. **Deploy to GitHub Pages:**

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

4. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages
   - Select `gh-pages` branch
   - Save

Your site will be at: `https://yourusername.github.io/repo-name/`

---

## 🎯 Pro Tips

### Performance
- 3D effects load after 1 second to prevent initial lag
- Images lazy-load as you scroll
- Animations respect "prefers-reduced-motion" setting

### Accessibility
- All animations can be disabled via system preferences
- Keyboard navigation supported
- Screen reader friendly
- High contrast mode compatible

### Browser Support
- ✅ Chrome, Edge, Safari, Firefox
- ✅ Mobile browsers
- ⚠️ IE not supported (but who uses IE anymore?)

---

## 💡 Creative Ideas

### Add More Sections

Create a new component like `MemoryTimeline.tsx`:

```typescript
// Example timeline component
export const MemoryTimeline = () => {
  return (
    <section className="py-20">
      <h2>Our Journey Together</h2>
      {/* Your timeline content */}
    </section>
  );
};
```

Add to `Index.tsx`:
```typescript
<MemoryTimeline />
```

### Add Background Music

1. Place audio file in `public/`: `birthday-song.mp3`
2. Create audio component
3. Add play/pause controls

### Add Video Messages

1. Upload video to YouTube/Vimeo
2. Embed using iframe
3. Wrap in a beautiful card component

---

## 🆘 Troubleshooting

**Q: 3D effects aren't showing**
- Check browser compatibility
- Ensure JavaScript is enabled
- Try disabling browser extensions

**Q: Photos not loading**
- Verify photos are in `public/pics/` folder
- Check filenames match exactly in `birthdayData.ts`
- Check file extensions (jpg vs jpeg)

**Q: Animations too fast/slow**
- Adjust `animationSpeed` in settings
- Edit individual animation durations in component files

**Q: Site looks different on mobile**
- Design is fully responsive by default
- Some 3D effects are simplified on mobile for performance

---

## 📞 Need Help?

- Check the code comments in each file
- Refer to component documentation
- Test in browser developer tools
- Ask in Lovable community

---

## ❤️ Final Touches

Before sharing:

1. ✅ Test all links and buttons
2. ✅ Check on mobile device
3. ✅ Verify all photos display correctly
4. ✅ Read through the message for typos
5. ✅ Share with love! 💕

---

**Made with cutting-edge web technologies:**
- React + TypeScript
- Framer Motion (advanced animations)
- Three.js + React Three Fiber (3D graphics)
- Tailwind CSS (styling)
- Modern CSS features (backdrop-filter, transforms, gradients)

Enjoy your beautiful birthday website! 🎂✨
