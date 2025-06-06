import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Founder, Craftsy",
      feedback:
        "Botify has transformed our customer support. Our response time has dropped significantly, and our customers love the instant replies!",
    },
    {
      name: "David Chen",
      role: "CTO, FinlyTech",
      feedback:
        "Integrating Botify was smooth and simple. The AI handles most repetitive queries, freeing up our team to focus on complex tasks.",
    },
    {
      name: "Amina Khan",
      role: "Product Manager, ShopZen",
      feedback:
        "We saw a 30% drop in customer churn within weeks of using Botify. Highly recommend it for any growing business!",
    },
    {
      name: "Leo Marshall",
      role: "Support Head, HealthHive",
      feedback:
        "With Botify, our night support is fully automated and reliable. Our NPS score has skyrocketed!",
    },
  ];

  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const scrollAmount =
        carouselRef.current.scrollWidth / testimonials.length;
      carouselRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: "smooth",
      });
    }
    setCurrentIndex(index);
  };

  const scroll = (direction) => {
    let newIndex = direction === "left"
      ? Math.max(currentIndex - 1, 0)
      : Math.min(currentIndex + 1, testimonials.length - 1);
    scrollToIndex(newIndex);
  };

  // Autoplay every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((currentIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-white py-20 px-6 md:px-20 relative">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        🌟 What Our Users Say
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[45%] md:left-4 z-10 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaChevronLeft className="text-indigo-600" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[45%] md:right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaChevronRight className="text-indigo-600" />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2 no-scrollbar"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="min-w-[85%] md:min-w-[40%] snap-center bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-gray-600 text-md italic leading-relaxed mb-5">
              “{t.feedback}”
            </p>
            <div>
              <h4 className="text-indigo-700 font-semibold text-lg">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-indigo-600" : "bg-indigo-200"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
