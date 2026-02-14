'use client';

import { motion } from 'framer-motion';
import AudioPlayer from './AudioPlayer';
import { audioContent } from '@/data/audio-content';
import Image from 'next/image';
import Link from 'next/link';

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          {/* Official Logo */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
             <Image
                src="/images/logo.png"
                alt="يوم التأسيس السعودي"
                fill
                className="object-contain drop-shadow-xl"
                priority
             />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-authenticity mb-4 font-harir tracking-tight"
        >
          يــــــوم بدينــــــا
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-determination mb-2 tracking-[0.2em] font-serif uppercase"
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
          className="text-lg text-determination mb-12 font-bold dir-ltr font-mono"
        >
          1727 / 1139
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <Link href="/journey" className="group relative px-8 py-4 bg-authenticity text-clarity rounded-full text-xl font-bold hover:bg-determination transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <span className="relative z-10">ابدأ الرحلة</span>
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
          </Link>

          <AudioPlayer text={audioContent.welcome} />
        </motion.div>
      </div>
    </section>
  );
}
