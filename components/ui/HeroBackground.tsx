'use client';

export default function HeroBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated background for both themes */}
      <div className="absolute inset-0 -z-10 animate-gradient-x" />

      {/* Hero content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
}
