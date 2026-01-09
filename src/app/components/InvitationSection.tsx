import { motion } from "motion/react";
import { Heart, Calendar } from "lucide-react";

export function InvitationSection() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[#FFFFF0] via-white to-[#FFE4E1]/20 py-20 px-6 flex items-center"
      id="invitation"
    >
      <div className="max-w-4xl mx-auto">
        {/* Decorative Top */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFE4E1] to-[#E6E6FA] flex items-center justify-center shadow-lg">
            <Heart className="w-10 h-10 text-[#9B7E6B] fill-[#9B7E6B]" />
          </div>
        </motion.div>

        {/* Main Invitation Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border border-[#E6E6FA]/30 text-center space-y-8"
        >
          {/* Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2
              className="text-6xl md:text-7xl text-[#9B7E6B] mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Together with our families
            </h2>
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />

          {/* Main Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <p
              className="text-2xl md:text-3xl text-[#9B7E6B] leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              We invite you to join us in celebrating
              <br />
              love, laughter, and a lifetime together…
            </p>

            {/* Couple Names */}
            <div className="py-6">
              <h3
                className="text-5xl md:text-6xl text-[#9B7E6B]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Yadhu & Sreelakshmi
              </h3>
            </div>

            <p
              className="text-xl text-[#9B7E6B]/80"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              As we exchange our vows and begin our forever
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />

          {/* Date and Venue */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-5 h-5 text-[#9B7E6B]" />
              <p
                className="text-xl text-[#9B7E6B]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Sunday, January 25, 2026
              </p>
            </div>
            <p
              className="text-lg text-[#9B7E6B]/70"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Muhurtham between 12:05 - 12:30 PM
            </p>
            <p
              className="text-lg text-[#9B7E6B]/70"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Merchant Trust Hall, Thodupuzha
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />

          {/* Closing */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p
              className="text-2xl text-[#9B7E6B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Your presence means the world to us
            </p>
          </motion.div>
        </motion.div>

        {/* Wedding Hashtag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p
            className="text-lg text-[#9B7E6B]/60"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Share your moments with us
          </p>
          <p
            className="text-2xl text-[#9B7E6B] mt-2"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            #YadhuAndSreelakshmi2026
          </p>
        </motion.div>

        {/* Decorative Bottom */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex justify-center gap-4 mt-12"
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-br from-[#FFE4E1] to-[#E6E6FA]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}