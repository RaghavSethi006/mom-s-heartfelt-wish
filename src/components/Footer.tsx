export const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-6xl mb-4 heartbeat">💝</div>
        <p className="text-xl font-playfair text-muted-foreground">
          Made with endless love and appreciation
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          {new Date().getFullYear()} • Forever in my heart
        </p>
      </div>
    </footer>
  );
};
