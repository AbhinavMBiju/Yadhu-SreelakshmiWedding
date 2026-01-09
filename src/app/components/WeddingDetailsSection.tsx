import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";
import qr from "../../images/qr-code.png";

export function WeddingDetailsSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set wedding date to June 15, 2026
  const weddingDate = new Date("2026-01-25T11:30:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const details = [
    {
      icon: Calendar,
      label: "Date",
      value: "January 25, 2026",
    },
    {
      icon: Clock,
      label: "Muhurtham",
      value: "Between 12:05 - 12:30 PM",
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Merchant's Trust Hall",
      subValue: "Muvattupuzha Road, Thodupuzha",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-[#FFFFF0] via-white to-[#E6E6FA]/20 py-20 px-6"
      id="details"
    >
      <div className="max-w-5xl mx-auto">
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
            Wedding Details
          </h2>
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#E6E6FA]/30">
            <h3
              className="text-3xl md:text-4xl text-center mb-8 text-[#9B7E6B]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Counting Down to Forever
            </h3>
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <motion.div
                  key={unit}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-[#FFE4E1] to-[#E6E6FA] rounded-2xl p-4 md:p-6 mb-2 shadow-lg">
                    <div
                      className="text-3xl md:text-5xl text-[#9B7E6B]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {value}
                    </div>
                  </div>
                  <div
                    className="text-sm md:text-base text-[#9B7E6B]/70 uppercase tracking-wider"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Details Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#FFE4E1]/30 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFE4E1] to-[#E6E6FA] flex items-center justify-center">
                  <detail.icon className="w-8 h-8 text-[#9B7E6B]" />
                </div>
              </div>
              <h4
                className="text-xl text-[#9B7E6B]/70 mb-3 uppercase tracking-wider"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {detail.label}
              </h4>
              <p
                className="text-2xl text-[#9B7E6B] mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {detail.value}
              </p>
              {detail.subValue && (
                <p
                  className="text-sm text-[#9B7E6B]/60"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {detail.subValue}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map + QR layout */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#E6E6FA]/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Map on the left (spans 2 cols on md+) */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden">
              <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  title="venue-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2169589504347!2d76.70793947427734!3d9.90630177464157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c3f4d99d3973%3A0xdb217859abf5b2cb!2sThodupuzha%20Merchant's%20Trust%20Hall!5e1!3m2!1sen!2sin!4v1767958971184!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                <a
                  href="https://maps.google.com/?q=Merchant+Trust+Hall+Muvattupuzha+Road+Thodupuzha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B7E6B] hover:text-[#D4AF37] transition-colors duration-300"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* QR + Venue info on the right */}
            <div className="md:col-span-1 flex flex-col items-center justify-start gap-4">
              <div className="w-full bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-inner border border-[#FFE4E1]/30">
                <h4 className="text-lg text-[#9B7E6B] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Merchant Trust Hall
                </h4>
                <p className="text-sm text-[#9B7E6B]/70 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Muvattupuzha Road, Thodupuzha
                </p>
                <div className="w-36 h-36 bg-gray-50 rounded-lg flex items-center justify-center border border-dashed border-[#E6E6FA]/40">
                  <img src={qr} alt="QR Code" className="w-full h-full object-contain" />
                </div>
                <div className="mt-3">
                  <a
                    href="https://maps.google.com/?q=Merchant+Trust+Hall+Muvattupuzha+Road+Thodupuzha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-full bg-[#FFE4E1] text-[#9B7E6B] hover:bg-[#D4AF37]/20 transition-colors duration-200"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}