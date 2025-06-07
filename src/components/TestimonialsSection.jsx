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

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef();

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
    const total = testimonials.length;
    let newIndex =
      direction === "left"
        ? (currentIndex - 1 + total) % total
        : (currentIndex + 1) % total;
    scrollToIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToIndex((currentIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6 md:px-20 relative mb-20 transition-colors duration-300">
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-16">
        🌟 What Our Users Say
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[45%] md:left-4 z-10 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 p-2 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Previous Testimonial"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[45%] md:right-4 z-10 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 p-2 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Next Testimonial"
      >
        <FaChevronRight />
      </button>

      {/* Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-hidden snap-x snap-mandatory pb-6 no-scrollbar"
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="min-w-[85%] md:min-w-[40%] snap-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-[320px] flex flex-col justify-between"
          >
            <p className="text-gray-600 dark:text-gray-300 text-md italic leading-relaxed mb-5">
              “{t.feedback}”
            </p>
            <div>
              <h4 className="text-indigo-700 dark:text-indigo-400 font-semibold text-lg">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "bg-indigo-600 dark:bg-indigo-400"
                : "bg-indigo-200 dark:bg-indigo-700"
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
