# 🎂 Birthday Website for Mom - Setup Guide

This is a beautiful, animated birthday website built with love! 💕

## 📁 Project Structure

```
/
├── index.html                  # Main HTML file
├── src/
│   ├── data/
│   │   └── birthdayData.ts    # ✏️ Edit your messages and text here
│   ├── components/            # All website sections
│   ├── index.css              # Beautiful styling
│   └── pages/Index.tsx        # Main page
└── public/
    └── pics/                  # 📸 Put your photos here
```

## ✏️ How to Customize

### 1. Change Text & Messages

Edit the file: **`src/data/birthdayData.ts`**

```typescript
export const birthdayData = {
  title: "Happy Birthday Mom!",              // Main title
  subtitle: "Your custom subtitle",          // Subtitle text
  short_wishes: [                            // Short wish cards
    "First wish",
    "Second wish",
    // Add more wishes...
  ],
  long_message: `Write your long heartfelt message here...`, // Long letter
  gallery_images: [                          // Photo filenames
    "mom1.jpg",
    "mom2.jpg",
    // Add more image names...
  ]
};
```

### 2. Add Your Photos

1. Place your photos in: **`public/pics/`** folder
2. Supported formats: `.jpg`, `.png`, `.jpeg`
3. Update the `gallery_images` array in `birthdayData.ts` with your filenames
4. Photos will automatically appear in the gallery!

Example:
```
public/pics/
  ├── family_2020.jpg
  ├── vacation.png
  └── birthday_2023.jpg
```

Then update:
```typescript
gallery_images: ["family_2020.jpg", "vacation.png", "birthday_2023.jpg"]
```

## 🎨 Design Features

- ✨ Floating hearts and sparkles
- 💕 Typewriter animation on the main title
- 🌸 Smooth scroll transitions
- 🎭 Glassmorphism cards
- 🎨 Beautiful pastel color scheme (rose, lavender, peach)
- 📱 Fully responsive design
- 🎬 Fade-in animations throughout

## 🚀 Deployment to GitHub Pages

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Birthday website for mom"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Select **/ (root)** folder
6. Click **Save**
7. Your site will be live at: `https://yourusername.github.io/repository-name`

### Step 3: Build Settings (if needed)

This project uses Vite. For GitHub Pages:

1. Update `vite.config.ts` to include your repo name:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build the project:
```bash
npm run build
```

3. The built files will be in the `dist` folder

## 🎵 Optional: Add Background Music

To add a soft background melody:

1. Place your audio file in `public/` folder (e.g., `birthday-song.mp3`)
2. Add a music player component (optional feature)

## 💡 Tips

- **Photos**: Use high-quality images (at least 800x800px recommended)
- **Messages**: Keep short wishes to 5-7 words for best display
- **Colors**: The design uses a warm pastel theme - rose, lavender, peach
- **Fonts**: Uses Playfair Display (headings) + Inter (body text)

## 🛠️ Development

Run locally:
```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

## ❤️ Made with Love

This website was created to celebrate someone special. Every animation, every color, every word is designed to bring joy and happiness!

---

**Need help?** Just edit the files mentioned above and watch the magic happen! ✨
