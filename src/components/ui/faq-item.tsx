"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" border rounded-lg bg-white p-4">
      <button
        className="w-full text-left  flex justify-between items-center font-semibold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <IoIosArrowDown />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};