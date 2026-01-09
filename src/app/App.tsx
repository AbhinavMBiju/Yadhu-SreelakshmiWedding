import { HeroSection } from "./components/HeroSection";
import { WeddingDetailsSection } from "./components/WeddingDetailsSection";
import { PhotoGallerySection } from "./components/PhotoGallerySection";
import { InvitationSection } from "./components/InvitationSection";

export default function App() {
  return (
    <div className="relative">
      <HeroSection />
      <WeddingDetailsSection />
      <PhotoGallerySection />
      <InvitationSection />

      {/* Navigation Dots */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 bg-white/20 backdrop-blur-md px-3 py-6 rounded-full border border-white/30">
        {[
          { id: "hero", label: "Home" },
          { id: "details", label: "Details" },
          { id: "gallery", label: "Gallery" },
          { id: "invitation", label: "Invitation" },
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-3 h-3 rounded-full bg-[#9B7E6B]/30 hover:bg-[#9B7E6B] transition-all duration-300 hover:w-3 hover:h-8"
            aria-label={`Go to ${section.label}`}
            title={section.label}
          />
        ))}
      </div>
    </div>
  );
}
