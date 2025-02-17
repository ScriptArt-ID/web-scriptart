"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimoniView() {
  const testimonials = [
    {
      name: "Naruto",
      job: "Hokage",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 5,
    },
    {
      name: "Sasuke",
      job: "Shadow Ninja",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 4,
    },
    {
      name: "Sakura",
      job: "Medic Ninja",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 3,
    },
    {
      name: "Shikamaru",
      job: "Strategy Ninja",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 4,
    },
    {
      name: "Kakashi",
      job: "Ex Hokage",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 3,
    },
    {
      name: "Gaara",
      job: "Kazekage",
      text: "lorem ipsum dolor sit amet",
      image: "/user-placeholder.png",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;
  const visibleSlides = 3;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 3
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - visibleSlides ? 0 : prevIndex + 3
    );
  };

  return (
    <section className="w-full h-screen text-center py-12 px-8">
      <motion.h2
        className="text-4xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimoni
      </motion.h2>
      <motion.p
        className="text-gray-600 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Apa yang mereka katakan tentang kami.
      </motion.p>
      <div className="w-full h-screen mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden px-6 md:px-28">
          <AnimatePresence>
            {testimonials
              .slice(currentIndex, currentIndex + visibleSlides)
              .map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="border border-orange-500 p-6 rounded-xl text-left shadow-lg bg-white"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4">
                    <span className="text-orange-500">
                      {"★".repeat(testimonial.rating)}
                      {"☆".repeat(5 - testimonial.rating)}
                    </span>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="flex items-center mt-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 border rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.job}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-10 gap-4">
          <motion.button
            onClick={prevSlide}
            className="p-3 bg-orange-500 rounded-full text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="p-3 bg-orange-500 rounded-full text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
