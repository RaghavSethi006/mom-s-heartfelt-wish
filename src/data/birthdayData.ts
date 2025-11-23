export const birthdayData = {
  // Main title - will be animated with kinetic typography
  title: "Happy Birthday Mom!",
  
  // Subtitle appears below the title
  subtitle: "To the most amazing woman in the world",
  
  // Short wishes - each appears in a 3D interactive card
  short_wishes: [
    "You are my strength",
    "My guiding light",
    "My biggest inspiration",
    "Forever grateful for you",
    "You make everything beautiful",
    "The heart of our family"
  ],
  
  // Long message - displayed in an immersive letter format
  // Each paragraph (separated by \n\n) animates in separately
  long_message: `Dear Mom,

On this special day, I want you to know how much you mean to me. You've been my rock, my confidant, and my greatest supporter through every chapter of my life.

Your love has shaped who I am today. Your wisdom guides me through challenges. Your laughter fills our home with joy. Your kindness teaches me how to be a better person every single day.

Thank you for the countless sacrifices you've made, the endless patience you've shown, and the unconditional love you've given. Every hug, every word of encouragement, every moment we've shared together is a treasure I hold close to my heart.

You deserve all the happiness in the world, today and always. May this year bring you as much joy as you've brought into my life.

I love you more than words can express.

Happy Birthday, Mom! 💕`,
  
  // Gallery images - place your actual photos in public/pics/ folder
  // These will appear in an interactive 3D gallery with lightbox view
  gallery_images: [
    "mom1.jpg",
    "mom2.jpg",
    "mom3.jpg",
    "mom4.jpg",
    "mom5.jpg",
    "mom6.jpg"
  ],
  
  // Advanced settings (optional)
  settings: {
    // Enable/disable features
    enableCursorTrail: true,
    enable3DParticles: true,
    enableTimeBasedTheme: true,
    
    // Animation preferences
    animationSpeed: 'normal', // 'slow', 'normal', 'fast'
    
    // Theme preferences - auto switches based on time of day
    // You can override by setting preferredTheme: 'day' or 'evening'
    autoTheme: true,
  }
};
