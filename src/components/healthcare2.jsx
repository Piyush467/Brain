import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const services = [
    {
      title: "Health Plan IT & Claims\nHealth Check",
      description: "A focused diagnostic that uncovers configuration gaps, data issues.",
      image: "/h1.png",
      cta: "Get the Assessment",
      position: "left",
      link: "/ITservices"
    },
    {
      title: "CIO Operating System for\nHealth Plans",
      description: "A structured engagement that stabilizes operations and builds a practical roadmap.",
      image: "/h2.png",
      cta: "See How It Works",
      position: "right",
      link: "/cio-operating"
    },
    {
      title: "Fractional CIO\nServices",
      description: "Strategic guidance and execution without the cost of a full-time CIO.",
      image: "/h3.png",
      cta: "Book the Call",
      position: "left",
      link: "https://calendly.com/brian_damiani/working-session-30-min"
    },
  ];

  return (
    // Changed py-10 to pt-10 pb-0 to remove bottom padding on mobile
    <div ref={containerRef} className="relative bg-[#001224] font-sans overflow-hidden pt-10 pb-10 lg:py-24">

      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-blue-500/10 -translate-x-1/2 hidden md:block" />

      <motion.div
        style={{ height }}
        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-blue-400 via-blue-600 to-transparent -translate-x-1/2 z-0 hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          // Changed mb-32 to mb-16 (mobile) and md:mb-32 (desktop)
          // Added last:mb-0 to ensure the very last item has no bottom margin
          <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_120px_1fr] gap-0 mb-16 md:mb-32 last:mb-0 relative">

            <div className={`flex flex-col ${service.position === "left" ? "justify-center" : ""}`}>
              {service.position === "left" && (
                <CardItem service={service} align="right" />
              )}
            </div>

            <div className="hidden md:block"></div>

            <div className={`flex flex-col ${service.position === "right" ? "justify-center" : ""}`}>
              {service.position === "right" && (
                <CardItem service={service} align="left" />
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Reduced Bottom Fade height on mobile (h-20) vs desktop (md:h-40) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 md:h-40 bg-gradient-to-t from-[#001224] to-transparent z-20" />
    </div>
  );
};

const CardItem = ({ service, align }) => {
  const isLeft = align === "right";

  // Logic to handle internal vs external links
  const LinkWrapper = ({ href, children }) => {
    if (href.startsWith('/')) {
      return <a href={href}>{children}</a>
    }
    return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  }

  return (
    // items-center text-center for mobile, responsive alignment for desktop
    <div className={`flex flex-col items-center text-center ${isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/90 text-3xl md:text-4xl font-semibold leading-tight mb-8 whitespace-pre-line"
      >
        {service.title}
      </motion.h3>

      <div className="relative w-full max-w-[480px]">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative h-[400px] md:h-[500px] rounded-[30px] overflow-hidden shadow-2xl border border-white/5 group z-10 bg-[#001224]"
        >
          <motion.img
            src={service.image}
            alt={service.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col gap-6 text-left">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              {service.description}
            </p>

            <LinkWrapper href={service.link || "https://calendly.com/brian_damiani/working-session-30-min"}>
              <button className="w-full group/btn flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-[#08335e] hover:bg-[#0b4278] transition-all duration-300 border border-white/10 shadow-lg">
                <span className="text-white font-medium text-sm md:text-base ml-2">
                  {service.cta}
                </span>
                <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-all">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
              </button>
            </LinkWrapper>
          </div>
        </motion.div>

        <div
          className="hidden md:flex absolute top-1/2 items-center"
          style={{
            right: isLeft ? "-60px" : "auto",
            left: isLeft ? "auto" : "-60px",
            transform: "translateY(-50%)",
            width: "60px",
            flexDirection: isLeft ? "row" : "row-reverse"
          }}
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            style={{ originX: isLeft ? 0 : 1 }}
            className="flex-grow h-px bg-blue-500/50"
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
            className="absolute w-4 h-4 rounded-full bg-[#001224] border-2 border-[#3b82f6] z-20"
            style={{
              right: isLeft ? "-8px" : "auto",
              left: isLeft ? "auto" : "-8px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;