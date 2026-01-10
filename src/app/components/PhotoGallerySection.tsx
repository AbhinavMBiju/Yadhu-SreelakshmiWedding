import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import y5 from "../../images/yadhu05.jpg";
import y2 from "../../images/yadhu07.jpg";
import y3 from "../../images/yadhu06.jpg";
import y6 from "../../images/yadhu04.jpg";
import y7 from "../../images/yadhu01.JPG";
import y9 from "../../images/yadhu02.jpg";


export function PhotoGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: y5,
      span: "row-span-2",
    },
    {
      src: y9,
      span: "row-span-2",
    },
    {
      src: y6,
      span: "row-span-2",
    },
    {
      src: y2,
      span: "row-span-2",
    },
    {
      src: y7,
      span: "row-span-2",
    },
    {
      src: y3,
      span: "row-span-2",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[#FFFFF0] via-[#FFE4E1]/10 to-[#E6E6FA]/20 py-20 px-6"
      id="gallery"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-6xl md:text-7xl text-[#9B7E6B] mb-4"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Our Story
          </h2>
          <p
            className="text-xl text-[#9B7E6B]/70 max-w-2xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every moment captured, every memory cherished
          </p>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`${photo.span} group cursor-pointer relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300`}
              onClick={() => setSelectedImage(photo.src ?? null)}
            >
              <img
                src={photo.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full rounded-2xl shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
}
