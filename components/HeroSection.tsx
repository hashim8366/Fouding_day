'use client';

import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import { audioContent } from '@/data/audio-content';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-clarity">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-authenticity" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-authenticity" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-authenticity" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo Placeholder */}
          <div className="h-32 w-32 mx-auto mb-6 bg-authenticity rounded-full flex items-center justify-center text-clarity font-bold text-2xl shadow-lg border-4 border-land">
            يوم التأسيس
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-authenticity mb-4 font-harir"
        >
          يــــــوم بدينــــــا
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-determination mb-2 tracking-widest"
        >
          OUR STORY
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-authenticity mb-8 font-bold"
        >
          ثلاثة قرون من العز والفخر
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-determination mb-12 font-bold"
        >
          1139هـ / 1727م
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <a href="/journey" className="px-8 py-4 bg-authenticity text-clarity rounded-full text-xl font-bold hover:bg-determination transition-colors shadow-xl cursor-pointer">
            ابدأ الرحلة
          </a>

          <AudioPlayer text={audioContent.welcome} />
        </motion.div>
      </div>
    </section>
  );
}
